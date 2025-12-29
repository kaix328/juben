import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import {
    assetStorage,
    projectStorage,
    chapterStorage,
    scriptStorage,
    generateId
} from '../../../utils/storage';
import { extractAssets } from '../../../utils/aiService';
import { canSafelyDeleteAsset } from '../../../utils/assetTracker';
import { PromptEngine } from '../../../utils/promptEngine';
import type {
    AssetLibrary,
    Project,
    Character,
    Scene,
    Prop,
    Costume,
    StyleApplicationSettings,
} from '../../../types';

export type AssetType = 'character' | 'scene' | 'prop' | 'costume';

interface UseAssetDataOptions {
    projectId: string | undefined;
}

/**
 * 资产增量合并逻辑
 */
const mergeAssets = (oldAssets: AssetLibrary, newAssets: AssetLibrary): AssetLibrary => {
    const merge = (oldList: any[], newList: any[], imageKeys: string[]) => {
        const oldMap = new Map(oldList.map(item => [item.name.trim().toLowerCase(), item]));
        const merged = [...oldList];

        newList.forEach(newItem => {
            const nameKey = newItem.name.trim().toLowerCase();
            const existingItem = oldMap.get(nameKey);

            if (existingItem) {
                const idx = merged.findIndex(m => m.id === existingItem.id);
                if (idx !== -1) {
                    const updatedItem = { ...newItem, ...existingItem };
                    const textFields = ['description', 'appearance', 'personality', 'environment', 'location', 'category', 'aiPrompt', 'fullBodyPrompt', 'facePrompt', 'widePrompt', 'mediumPrompt', 'closeupPrompt'];
                    textFields.forEach(field => {
                        if (newItem[field]) {
                            updatedItem[field] = newItem[field];
                        }
                    });
                    merged[idx] = updatedItem;
                }
            } else {
                merged.push(newItem);
            }
        });
        return merged;
    };

    return {
        projectId: oldAssets.projectId,
        characters: merge(oldAssets.characters, newAssets.characters, ['avatar', 'fullBodyPreview', 'facePreview']),
        scenes: merge(oldAssets.scenes, newAssets.scenes, ['image', 'widePreview', 'mediumPreview', 'closeupPreview']),
        props: merge(oldAssets.props, newAssets.props, ['image', 'preview']),
        costumes: merge(oldAssets.costumes, newAssets.costumes, ['image', 'preview']),
    };
};

export function useAssetData({ projectId }: UseAssetDataOptions) {
    const [project, setProject] = useState<Project | null>(null);
    const [assets, setAssets] = useState<AssetLibrary | null>(null);
    const [isExtracting, setIsExtracting] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const [styleSettings, setStyleSettings] = useState<StyleApplicationSettings>({
        mode: 'manual',
        autoApplyToNew: true,
        protectManualEdits: true,
        confirmBeforeApply: true,
        showPreview: true,
    });

    // 加载数据
    const loadAssets = useCallback(async () => {
        if (!projectId) return;
        const assetsData = await assetStorage.getByProjectId(projectId);
        setAssets(assetsData || {
            projectId: projectId,
            characters: [],
            scenes: [],
            props: [],
            costumes: [],
        });
    }, [projectId]);

    const loadProject = useCallback(async () => {
        if (!projectId) return;
        const proj = await projectStorage.getById(projectId);
        setProject(proj || null);
    }, [projectId]);

    useEffect(() => {
        if (projectId) {
            loadAssets();
            loadProject();
            const savedSettings = localStorage.getItem(`styleSettings_${projectId}`);
            if (savedSettings) {
                setStyleSettings(JSON.parse(savedSettings));
            }
        }
    }, [projectId, loadAssets, loadProject]);

    // 保存
    const handleSave = useCallback(async () => {
        if (!assets) return;
        await assetStorage.save(assets);
        toast.success('项目库已保存');
    }, [assets]);

    // AI 提取
    const handleAIExtract = useCallback(async (isMerge: boolean = false) => {
        if (!projectId) return;

        const chapters = await chapterStorage.getByProjectId(projectId);
        const allOriginalText = chapters.map(c => c.originalText).join('\n\n');

        if (!allOriginalText) {
            toast.error('请先在章节中添加内容');
            return;
        }

        const allScenes = [];
        for (const chapter of chapters) {
            const script = await scriptStorage.getByChapterId(chapter.id);
            if (script) {
                allScenes.push(...script.scenes.map(scene => ({
                    ...scene,
                    sceneType: scene.sceneType || 'INT' as const,
                    dialogues: scene.dialogues || [],
                    transition: scene.transition,
                })));
            }
        }

        setIsExtracting(true);
        try {
            const extracted = await extractAssets(allOriginalText, allScenes, project?.directorStyle);
            const rawNewAssets: AssetLibrary = {
                projectId: projectId,
                ...extracted,
            };

            let finalAssets = rawNewAssets;
            if (isMerge && assets) {
                finalAssets = mergeAssets(assets, rawNewAssets);
            }

            await assetStorage.save(finalAssets);
            setAssets(finalAssets);
            toast.success(isMerge ? '增量分析完成！' : '全量覆盖提取完成！');
        } catch (error) {
            console.error('AI extract failed:', error);
            toast.error('提取失败，请重试');
        } finally {
            setIsExtracting(false);
        }
    }, [projectId, project, assets]);

    // 同步导演风格
    const handleSyncDirectorStyle = useCallback(async () => {
        console.log('[风格同步] 开始同步，project:', project?.id, 'directorStyle:', project?.directorStyle ? '已设置' : '未设置', 'assets:', assets ? '已加载' : '未加载');

        if (!project?.directorStyle) {
            console.warn('[风格同步] 失败：项目未设定导演风格');
            toast.error('当前项目未设定导演风格，请先在"导演风格"页面设置风格');
            return;
        }
        if (!assets) {
            console.warn('[风格同步] 失败：资产未加载');
            toast.error('资产库未加载，请稍后重试');
            return;
        }

        try {
            setIsSyncing(true);
            const updatedCharacters = assets.characters.map(char => {
                if (!char.triggerWord) {
                    return {
                        ...char,
                        triggerWord: PromptEngine.generateTriggerWord(char.name, char.id)
                    };
                }
                return char;
            });

            const updatedAssetsPreSync = { ...assets, characters: updatedCharacters };
            const {
                batchApplyStyleToCharacters,
                batchApplyStyleToScenes,
                batchApplyStyleToProps,
                batchApplyStyleToCostumes
            } = await import('../../../utils/promptOptimizer');

            const syncedAssets: AssetLibrary = {
                ...updatedAssetsPreSync,
                characters: batchApplyStyleToCharacters(updatedAssetsPreSync.characters, project.directorStyle),
                scenes: batchApplyStyleToScenes(assets.scenes, project.directorStyle),
                props: batchApplyStyleToProps(assets.props, project.directorStyle),
                costumes: batchApplyStyleToCostumes(assets.costumes, updatedAssetsPreSync.characters, project.directorStyle)
            };

            await assetStorage.save(syncedAssets);
            setAssets(syncedAssets);
            toast.success('全库提示词已同步至最新导演风格，并已自动完善角色特征字段！');
        } catch (error) {
            console.error('Sync director style failed:', error);
            toast.error('同步失败');
        } finally {
            setIsSyncing(false);
        }
    }, [project, assets]);

    // CRUD 操作
    const handleUpdateCharacter = useCallback((id: string, updates: Partial<Character>) => {
        setAssets(prev => {
            if (!prev) return prev;
            return {
                ...prev,
                characters: prev.characters.map(c => c.id === id ? { ...c, ...updates } : c)
            };
        });
    }, []);

    const handleAddCharacter = useCallback(() => {
        const newCharacter: Character = {
            id: generateId(),
            name: '新角色',
            description: '',
            appearance: '',
            personality: '',
            avatar: '',
            fullBodyPreview: '',
            facePreview: '',
            fullBodyPrompt: '',
            facePrompt: '',
            isGeneratingFullBody: false,
            isGeneratingFace: false,
            tags: [],
            createdAt: new Date().toISOString(),
            usageCount: 0,
        };
        setAssets(prev => prev ? { ...prev, characters: [...prev.characters, newCharacter] } : prev);
    }, []);

    const handleDeleteCharacter = useCallback((id: string, usageCount: number) => {
        const { warning } = canSafelyDeleteAsset(id, 'character', usageCount);
        if (warning && !confirm(warning + '\n\n确定要删除吗？')) return;
        setAssets(prev => prev ? { ...prev, characters: prev.characters.filter(c => c.id !== id) } : prev);
    }, []);

    const handleUpdateScene = useCallback((id: string, updates: Partial<Scene>) => {
        setAssets(prev => prev ? { ...prev, scenes: prev.scenes.map(s => s.id === id ? { ...s, ...updates } : s) } : prev);
    }, []);

    const handleAddScene = useCallback(() => {
        const newScene: Scene = {
            id: generateId(),
            name: '新场景',
            description: '',
            location: '',
            environment: '',
            image: '',
            widePrompt: '',
            mediumPrompt: '',
            closeupPrompt: '',
            widePreview: '',
            mediumPreview: '',
            closeupPreview: '',
            isGeneratingWide: false,
            isGeneratingMedium: false,
            isGeneratingCloseup: false,
            tags: [],
            createdAt: new Date().toISOString(),
            usageCount: 0,
        };
        setAssets(prev => prev ? { ...prev, scenes: [...prev.scenes, newScene] } : prev);
    }, []);

    const handleDeleteScene = useCallback((id: string, usageCount: number) => {
        const { warning } = canSafelyDeleteAsset(id, 'scene', usageCount);
        if (warning && !confirm(warning + '\n\n确定要删除吗？')) return;
        setAssets(prev => prev ? { ...prev, scenes: prev.scenes.filter(s => s.id !== id) } : prev);
    }, []);

    const handleUpdateProp = useCallback((id: string, updates: Partial<Prop>) => {
        setAssets(prev => prev ? { ...prev, props: prev.props.map(p => p.id === id ? { ...p, ...updates } : p) } : prev);
    }, []);

    const handleAddProp = useCallback(() => {
        const newProp: Prop = {
            id: generateId(),
            name: '新道具',
            description: '',
            category: '',
            image: '',
            aiPrompt: '',
            preview: '',
            isGenerating: false,
            tags: [],
            createdAt: new Date().toISOString(),
            usageCount: 0,
        };
        setAssets(prev => prev ? { ...prev, props: [...prev.props, newProp] } : prev);
    }, []);

    const handleDeleteProp = useCallback((id: string, usageCount: number) => {
        const { warning } = canSafelyDeleteAsset(id, 'prop', usageCount);
        if (warning && !confirm(warning + '\n\n确定要删除吗？')) return;
        setAssets(prev => prev ? { ...prev, props: prev.props.filter(p => p.id !== id) } : prev);
    }, []);

    const handleUpdateCostume = useCallback((id: string, updates: Partial<Costume>) => {
        setAssets(prev => prev ? { ...prev, costumes: prev.costumes.map(c => c.id === id ? { ...c, ...updates } : c) } : prev);
    }, []);

    const handleAddCostume = useCallback(() => {
        if (!assets || assets.characters.length === 0) {
            toast.error('请先添加角色');
            return;
        }
        const newCostume: Costume = {
            id: generateId(),
            characterId: assets.characters[0].id,
            name: '新服饰',
            description: '',
            style: '',
            image: '',
            aiPrompt: '',
            preview: '',
            isGenerating: false,
            tags: [],
            createdAt: new Date().toISOString(),
            usageCount: 0,
        };
        setAssets(prev => prev ? { ...prev, costumes: [...prev.costumes, newCostume] } : prev);
    }, [assets]);

    const handleDeleteCostume = useCallback((id: string, usageCount: number) => {
        const { warning } = canSafelyDeleteAsset(id, 'costume', usageCount);
        if (warning && !confirm(warning + '\n\n确定要删除吗？')) return;
        setAssets(prev => prev ? { ...prev, costumes: prev.costumes.filter(c => c.id !== id) } : prev);
    }, []);

    const handleAddTag = useCallback((itemId: string, itemType: AssetType, tag: string) => {
        if (!tag.trim()) return;

        setAssets(prev => {
            if (!prev) return prev;
            const items = prev[itemType === 'character' ? 'characters' :
                itemType === 'scene' ? 'scenes' :
                    itemType === 'prop' ? 'props' : 'costumes'] as any[];
            return {
                ...prev,
                [itemType === 'character' ? 'characters' :
                    itemType === 'scene' ? 'scenes' :
                        itemType === 'prop' ? 'props' : 'costumes']: items.map(item => {
                            if (item.id === itemId) {
                                const currentTags = item.tags || [];
                                if (!currentTags.includes(tag.trim())) {
                                    return { ...item, tags: [...currentTags, tag.trim()] };
                                }
                            }
                            return item;
                        })
            };
        });
    }, []);

    const handleRemoveTag = useCallback((itemId: string, itemType: AssetType, tag: string) => {
        setAssets(prev => {
            if (!prev) return prev;
            const items = prev[itemType === 'character' ? 'characters' :
                itemType === 'scene' ? 'scenes' :
                    itemType === 'prop' ? 'props' : 'costumes'] as any[];
            return {
                ...prev,
                [itemType === 'character' ? 'characters' :
                    itemType === 'scene' ? 'scenes' :
                        itemType === 'prop' ? 'props' : 'costumes']: items.map(item => {
                            if (item.id === itemId) {
                                const currentTags = item.tags || [];
                                return { ...item, tags: currentTags.filter((t: string) => t !== tag) };
                            }
                            return item;
                        })
            };
        });
    }, []);

    const handleBatchDelete = useCallback((selectedItems: string[]) => {
        if (!assets || selectedItems.length === 0) return;
        if (!confirm(`确定要删除选中的 ${selectedItems.length} 个项目吗？`)) return;

        setAssets(prev => {
            if (!prev) return prev;
            return {
                ...prev,
                characters: prev.characters.filter(c => !selectedItems.includes(c.id)),
                scenes: prev.scenes.filter(s => !selectedItems.includes(s.id)),
                props: prev.props.filter(p => !selectedItems.includes(p.id)),
                costumes: prev.costumes.filter(c => !selectedItems.includes(c.id)),
            };
        });
        toast.success('批量删除成功');
    }, [assets]);

    // 🆕 排序操作
    const handleReorderAssets = useCallback((itemType: AssetType, startIndex: number, endIndex: number) => {
        setAssets(prev => {
            if (!prev) return prev;
            const listKey = itemType === 'character' ? 'characters' :
                itemType === 'scene' ? 'scenes' :
                    itemType === 'prop' ? 'props' : 'costumes';

            const newList = [...(prev[listKey] as any[])];
            const [removed] = newList.splice(startIndex, 1);
            newList.splice(endIndex, 0, removed);

            return {
                ...prev,
                [listKey]: newList
            };
        });
    }, []);

    return {
        project,
        assets,
        setAssets,
        isExtracting,
        isSyncing,
        styleSettings,
        setStyleSettings,
        handleSave,
        handleAIExtract,
        handleSyncDirectorStyle,
        handleUpdateCharacter,
        handleAddCharacter,
        handleDeleteCharacter,
        handleUpdateScene,
        handleAddScene,
        handleDeleteScene,
        handleUpdateProp,
        handleAddProp,
        handleDeleteProp,
        handleUpdateCostume,
        handleAddCostume,
        handleDeleteCostume,
        handleAddTag,
        handleRemoveTag,
        handleBatchDelete,
        handleReorderAssets,  // 🆕
        loadAssets,
        loadProject
    };
}
