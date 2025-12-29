// 数据管理 Hook - 处理剧本加载、保存和自动保存
import { useState, useEffect, useRef, useCallback } from 'react';
import { chapterStorage, scriptStorage, generateId, projectStorage } from '../../../utils/storage';
import { extractScript, ScriptMode } from '../../../utils/aiService';
import { toast } from 'sonner';
import type { Script, ScriptScene, Dialogue, Chapter, ExtractProgress, HistoryEntry } from '../types';

interface UseScriptDataOptions {
    chapterId: string | undefined;
}

interface UseScriptDataReturn {
    // 数据
    chapter: Chapter | null;
    script: Script | null;
    // 状态
    isExtracting: boolean;
    extractProgress: ExtractProgress;
    lastSaved: string;
    // 历史记录
    history: HistoryEntry[];
    historyIndex: number;
    canUndo: boolean;
    canRedo: boolean;
    // 操作方法
    handleAIExtract: () => Promise<void>;
    handleSave: () => Promise<void>;
    handleUpdateScene: (sceneId: string, updates: Partial<ScriptScene>) => void;
    handleAddScene: () => void;
    handleDeleteScene: (sceneId: string) => void;
    handleAddDialogue: (sceneId: string) => void;
    handleUpdateDialogue: (sceneId: string, dialogueId: string, updates: Partial<Dialogue>) => void;
    handleDeleteDialogue: (sceneId: string, dialogueId: string) => void;
    handleBatchUpdate: (sceneIds: Set<string>, updates: Partial<ScriptScene>) => void;
    handleBatchDelete: (sceneIds: Set<string>) => void;
    handleUpdateScript: (newScript: Script) => void;  // 🆕 全量更新
    handleUpdateScenes: (newScenes: ScriptScene[]) => void; // 🆕 批量更新多个场景
    // 撤销/重做
    undo: () => void;
    redo: () => void;
}

export function useScriptData({ chapterId }: UseScriptDataOptions): UseScriptDataReturn {
    const isMountedRef = useRef(true);

    const [chapter, setChapter] = useState<Chapter | null>(null);
    const [script, setScript] = useState<Script | null>(null);
    const [directorStyle, setDirectorStyle] = useState<{ artStyle?: string; mood?: string; customPrompt?: string } | undefined>();
    const [isExtracting, setIsExtracting] = useState(false);
    const [extractProgress, setExtractProgress] = useState<ExtractProgress>({ step: 'idle', message: '' });
    const [lastSaved, setLastSaved] = useState('');
    const [scriptMode, setScriptMode] = useState<ScriptMode>('tv_drama');

    // 历史记录状态
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    // 安全的 toast 封装
    const safeToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
        requestAnimationFrame(() => {
            if (isMountedRef.current) {
                if (type === 'success') {
                    toast.success(message);
                } else {
                    toast.error(message);
                }
            }
        });
    }, []);

    // 推入历史记录
    const pushHistory = useCallback((newScript: Script, description: string) => {
        setHistory(prev => {
            const newHistory = prev.slice(0, historyIndex + 1);
            newHistory.push({
                script: JSON.parse(JSON.stringify(newScript)), // 深拷贝
                timestamp: Date.now(),
                description
            });
            // 限制历史记录数量
            if (newHistory.length > 50) {
                newHistory.shift();
            }
            return newHistory;
        });
        setHistoryIndex(prev => Math.min(prev + 1, 49));
    }, [historyIndex]);

    // 加载数据
    useEffect(() => {
        isMountedRef.current = true;

        const loadData = async () => {
            if (chapterId) {
                const chapterData = await chapterStorage.getById(chapterId);
                if (isMountedRef.current) {
                    setChapter(chapterData || null);
                }

                // 🆕 加载项目的导演风格
                if (chapterData?.projectId) {
                    const project = await projectStorage.getById(chapterData.projectId);
                    if (project?.directorStyle && isMountedRef.current) {
                        setDirectorStyle(project.directorStyle);
                    }
                }

                const scriptData = await scriptStorage.getByChapterId(chapterId);

                if (scriptData && isMountedRef.current) {
                    // 数据迁移
                    const migratedScenes = scriptData.scenes.map(scene => ({
                        ...scene,
                        sceneType: scene.sceneType || 'INT' as const,
                        dialogues: scene.dialogues || [],
                        transition: scene.transition,
                        estimatedDuration: scene.estimatedDuration || 0,
                    }));
                    const migratedScript = { ...scriptData, scenes: migratedScenes };
                    setScript(migratedScript);
                    // 初始化历史记录
                    setHistory([{ script: migratedScript, timestamp: Date.now(), description: '初始加载' }]);
                    setHistoryIndex(0);
                } else if (isMountedRef.current) {
                    setScript(null);
                }
            }
        };

        loadData();

        return () => {
            isMountedRef.current = false;
        };
    }, [chapterId]);

    // 自动保存
    useEffect(() => {
        if (!script) return;

        const timer = setTimeout(async () => {
            try {
                await scriptStorage.save(script);
                if (isMountedRef.current) {
                    const now = new Date().toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    });
                    setLastSaved(now);
                }
            } catch (error) {
                console.error('Auto-save failed:', error);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [script]);

    // AI 提取
    const handleAIExtract = useCallback(async () => {
        if (!chapter || !chapter.originalText) {
            safeToast('请先在"原文编辑"中添加内容', 'error');
            return;
        }

        if (!isMountedRef.current) return;
        setIsExtracting(true);
        setExtractProgress({ step: 'parsing', message: '正在解析原文...' });

        try {
            setExtractProgress({ step: 'extracting', message: '正在提取场景与对白...' });
            const scenes = await extractScript(chapter.originalText, scriptMode, directorStyle);

            setExtractProgress({ step: 'validating', message: '正在校验数据格式...' });

            const newScript: Script = {
                id: script?.id || generateId(),
                chapterId: chapter.id,
                content: '',
                scenes,
                updatedAt: new Date().toISOString(),
                mode: scriptMode,
                metadata: {
                    title: chapter.title,
                    draftDate: new Date().toISOString().split('T')[0],
                    draft: '初稿',
                },
            };

            await scriptStorage.save(newScript);

            if (isMountedRef.current) {
                setScript(newScript);
                pushHistory(newScript, 'AI 提取剧本');
                setExtractProgress({ step: 'done', message: '提取完成！' });
                safeToast('AI提取完成！');
            }
        } catch (error) {
            setExtractProgress({ step: 'error', message: '提取失败，请重试' });
            safeToast('提取失败，请重试', 'error');
        } finally {
            if (isMountedRef.current) {
                setIsExtracting(false);
                // 3秒后重置进度状态
                setTimeout(() => {
                    if (isMountedRef.current) {
                        setExtractProgress({ step: 'idle', message: '' });
                    }
                }, 3000);
            }
        }
    }, [chapter, script, safeToast, pushHistory, scriptMode, directorStyle]);

    // 保存
    const handleSave = useCallback(async () => {
        if (!script || !isMountedRef.current) return;

        try {
            await scriptStorage.save(script);
            safeToast('剧本已保存');
        } catch (error) {
            safeToast('保存失败', 'error');
        }
    }, [script, safeToast]);

    // 更新场景
    const handleUpdateScene = useCallback((sceneId: string, updates: Partial<ScriptScene>) => {
        setScript(prev => {
            if (!prev) return prev;
            const updatedScenes = prev.scenes.map(scene =>
                scene.id === sceneId ? { ...scene, ...updates } : scene
            );
            return { ...prev, scenes: updatedScenes };
        });
    }, []);

    // 添加场景
    const handleAddScene = useCallback(() => {
        setScript(prev => {
            if (!prev) return prev;

            const lastScene = prev.scenes[prev.scenes.length - 1];
            const episodeNumber = lastScene?.episodeNumber || 1;

            const newScene: ScriptScene = {
                id: generateId(),
                sceneNumber: prev.scenes.length + 1,
                episodeNumber,
                location: '新场景',
                timeOfDay: '白天',
                sceneType: 'INT',
                characters: [],
                action: '',
                dialogues: [],
                estimatedDuration: 0,
            };

            const newScript = { ...prev, scenes: [...prev.scenes, newScene] };
            pushHistory(newScript, '添加新场景');
            return newScript;
        });
    }, [pushHistory]);

    // 删除场景
    const handleDeleteScene = useCallback((sceneId: string) => {
        setScript(prev => {
            if (!prev) return prev;
            const filtered = prev.scenes.filter(s => s.id !== sceneId);
            const newScript = { ...prev, scenes: filtered };
            pushHistory(newScript, '删除场景');
            return newScript;
        });
    }, [pushHistory]);

    // 添加对白
    const handleAddDialogue = useCallback((sceneId: string) => {
        setScript(prev => {
            if (!prev) return prev;
            const updatedScenes = prev.scenes.map(scene => {
                if (scene.id === sceneId) {
                    const newDialogue: Dialogue = {
                        id: generateId(),
                        character: '角色名',
                        lines: '',
                    };
                    return { ...scene, dialogues: [...scene.dialogues, newDialogue] };
                }
                return scene;
            });
            return { ...prev, scenes: updatedScenes };
        });
    }, []);

    // 更新对白
    const handleUpdateDialogue = useCallback((sceneId: string, dialogueId: string, updates: Partial<Dialogue>) => {
        setScript(prev => {
            if (!prev) return prev;
            const updatedScenes = prev.scenes.map(scene => {
                if (scene.id === sceneId) {
                    const updatedDialogues = scene.dialogues.map(d =>
                        d.id === dialogueId ? { ...d, ...updates } : d
                    );
                    return { ...scene, dialogues: updatedDialogues };
                }
                return scene;
            });
            return { ...prev, scenes: updatedScenes };
        });
    }, []);

    // 删除对白
    const handleDeleteDialogue = useCallback((sceneId: string, dialogueId: string) => {
        setScript(prev => {
            if (!prev) return prev;
            const updatedScenes = prev.scenes.map(scene => {
                if (scene.id === sceneId) {
                    return { ...scene, dialogues: scene.dialogues.filter(d => d.id !== dialogueId) };
                }
                return scene;
            });
            return { ...prev, scenes: updatedScenes };
        });
    }, []);

    // 批量更新
    const handleBatchUpdate = useCallback((sceneIds: Set<string>, updates: Partial<ScriptScene>) => {
        setScript(prev => {
            if (!prev || sceneIds.size === 0) return prev;

            const updatedScenes = prev.scenes.map(scene =>
                sceneIds.has(scene.id) ? { ...scene, ...updates } : scene
            );
            const newScript = { ...prev, scenes: updatedScenes };
            pushHistory(newScript, `批量更新 ${sceneIds.size} 个场景`);
            safeToast(`已批量更新 ${sceneIds.size} 个场景`);
            return newScript;
        });
    }, [pushHistory, safeToast]);

    // 批量删除
    const handleBatchDelete = useCallback((sceneIds: Set<string>) => {
        setScript(prev => {
            if (!prev || sceneIds.size === 0) return prev;

            const filtered = prev.scenes.filter(s => !sceneIds.has(s.id));
            const newScript = { ...prev, scenes: filtered };
            pushHistory(newScript, `批量删除 ${sceneIds.size} 个场景`);
            safeToast(`已删除 ${sceneIds.size} 个场景`);
            return newScript;
        });
    }, [pushHistory, safeToast]);

    // 🆕 全量更新剧本
    const handleUpdateScript = useCallback((newScript: Script) => {
        if (!isMountedRef.current) return;
        setScript(newScript);
        pushHistory(newScript, '全量更新剧本');
    }, [pushHistory]);

    // 🆕 批量替换所有场景
    const handleUpdateScenes = useCallback((newScenes: ScriptScene[]) => {
        if (!isMountedRef.current) return;
        setScript(prev => {
            if (!prev) return prev;
            const newScript = { ...prev, scenes: newScenes, updatedAt: new Date().toISOString() };
            pushHistory(newScript, '批量更改场景');
            return newScript;
        });
    }, [pushHistory]);

    // 撤销
    const undo = useCallback(() => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setScript(JSON.parse(JSON.stringify(history[newIndex].script)));
            safeToast('已撤销');
        }
    }, [historyIndex, history, safeToast]);

    // 重做
    const redo = useCallback(() => {
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1;
            setHistoryIndex(newIndex);
            setScript(JSON.parse(JSON.stringify(history[newIndex].script)));
            safeToast('已重做');
        }
    }, [historyIndex, history, safeToast]);

    return {
        chapter,
        script,
        isExtracting,
        extractProgress,
        lastSaved,
        history,
        historyIndex,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
        handleAIExtract,
        handleSave,
        handleUpdateScene,
        handleAddScene,
        handleDeleteScene,
        handleAddDialogue,
        handleUpdateDialogue,
        handleDeleteDialogue,
        handleBatchUpdate,
        handleBatchDelete,
        handleUpdateScript,
        handleUpdateScenes,
        undo,
        redo,
    };
}
