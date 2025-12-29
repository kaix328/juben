import { useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { optimizePrompt } from '../../../utils/volcApi';
import { exportAllPanelPrompts } from '../../../utils/promptGenerator';
import { generateStoryboardImage } from '../../../utils/aiService';
import { RequestQueue } from '../../../utils/requestQueue';
import {
    exportVideoPromptsByPlatform,
    exportStoryboardToCSV,
    downloadCSV,
    generateFriendlyFilename,
    downloadText,
    type VideoPlatform
} from '../../../utils/exportUtils';
import type { Storyboard, StoryboardPanel, Project, AssetLibrary, Script } from '../../../types';
import type { ExportPlatform, PanelStatus } from '../types';

interface UseStoryboardActionsProps {
    storyboard: Storyboard | null;
    script: Script | null;
    project: Project | null;
    assets: AssetLibrary | null;
    onUpdateStoryboard: (storyboard: Storyboard) => Promise<boolean>;
    onUpdateAssets?: (assets: AssetLibrary) => Promise<boolean>;  // 🆕 用于自动保存资产
    updatePanelStatus?: (id: string, status: PanelStatus) => void;
}

export function useStoryboardActions({
    storyboard,
    script,
    project,
    assets,
    onUpdateStoryboard,
    onUpdateAssets,  // 🆕
    updatePanelStatus
}: UseStoryboardActionsProps) {

    // 初始化并发队列（🆕 增加超时和重试配置）
    const queue = useMemo(() => new RequestQueue({
        maxConcurrency: 3,
        timeout: 120000,  // 2分钟超时
        maxRetries: 1,    // 自动重试一次
        onTaskStatusChange: (task) => {
            updatePanelStatus?.(task.id, task.status as PanelStatus);
        },
        onTaskTimeout: (task) => {
            toast.warning(`分镜 ${task.id.substring(0, 8)} 生成超时，已自动取消`);
        },
        onTaskFailed: (task, error) => {
            console.error(`[Task ${task.id}] Failed:`, error);
        }
    }), [updatePanelStatus]);

    // 批量重生成提示词
    const handleBatchRegeneratePrompts = useCallback(async (
        selectedIds: Set<string>,
        optimize: boolean,
        onProgress?: (current: number, total: number) => void,
        onComplete?: () => void
    ) => {
        if (!storyboard || !project) return;

        const total = selectedIds.size;
        let current = 0;

        const tasks = storyboard.panels
            .filter(p => selectedIds.has(p.id))
            .map(panel => ({
                id: panel.id,
                execute: async () => {
                    let finalPrompt = panel.aiPrompt;
                    if (optimize) {
                        // 🆕 传递完整的导演风格对象
                        finalPrompt = await optimizePrompt(
                            panel.description,
                            project.directorStyle || 'Cinematic',
                            'storyboard'
                        );
                    }
                    current++;
                    onProgress?.(current, total);
                    return { ...panel, aiPrompt: finalPrompt };
                }
            }));

        queue.addTasks(tasks);

        // 🆕 等待全量完成后再执行统一保存逻辑
        try {
            await queue.waitForBatch(selectedIds);

            const results = queue.getTasks()
                .filter(t => selectedIds.has(t.id) && t.status === 'completed')
                .map(t => t.result as StoryboardPanel);

            if (results.length > 0) {
                const updatedPanels = storyboard.panels.map(p => {
                    const found = results.find((r: StoryboardPanel) => r.id === p.id);
                    return found || p;
                });
                await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
                toast.success(`已完成 ${results.length} 个分镜的提示词重生成`);
            }
        } catch (err) {
            console.error('[BatchRegenerate] Error:', err);
            toast.error('提示词重生成过程中出现异常');
        } finally {
            onComplete?.();
        }

    }, [storyboard, project, onUpdateStoryboard, queue]);

    // 🆕 辅助函数：计算风格哈希
    const computeStyleHash = useCallback((style?: Project['directorStyle']): string => {
        if (!style) return 'default';
        const str = JSON.stringify(style);
        // 简单哈希算法
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return `style_${Math.abs(hash).toString(16).substring(0, 8)}`;
    }, []);

    // 生成单张预览图（🆕 修复：生成后自动保存 + 记录风格快照）
    const handleGenerateImage = useCallback(async (panel: StoryboardPanel) => {
        if (!assets || !project || !storyboard) return;

        toast.loading('正在生成预览图...', { id: `img-${panel.id}` });

        try {
            const imageUrl = await generateStoryboardImage(
                panel,
                assets.characters,
                assets.scenes,
                project.directorStyle,
                true // enableOptimization
            );

            // 🆕 计算风格哈希用于追溯
            const styleHash = computeStyleHash(project.directorStyle);

            // 🆕 自动保存到分镜 (使用 generatedImage 字段 + 风格快照)
            const updatedPanels = storyboard.panels.map(p =>
                p.id === panel.id ? {
                    ...p,
                    generatedImage: imageUrl,
                    appliedStyleHash: styleHash,  // 🆕 记录风格哈希
                    generatedAt: new Date().toISOString()  // 🆕 记录生成时间
                } : p
            );
            await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });

            toast.success('预览图已生成', { id: `img-${panel.id}` });
            return imageUrl;
        } catch (error) {
            console.error('Failed to generate image:', error);
            toast.error('生成图片失败', { id: `img-${panel.id}` });
        }
    }, [assets, project, storyboard, onUpdateStoryboard, computeStyleHash]);

    // 复制分镜
    const handleCopyPanel = useCallback(async (panel: StoryboardPanel) => {
        if (!storyboard) return;
        const newPanel: StoryboardPanel = {
            ...panel,
            id: `p-${Date.now()}`,
            panelNumber: panel.panelNumber + 1
        };
        const index = storyboard.panels.findIndex(p => p.id === panel.id);
        const updatedPanels = [
            ...storyboard.panels.slice(0, index + 1),
            newPanel,
            ...storyboard.panels.slice(index + 1)
        ].map((p, i) => ({ ...p, panelNumber: i + 1 }));

        await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
        toast.success('分镜已复制');
    }, [storyboard, onUpdateStoryboard]);

    // 拆分分镜
    const handleSplitPanel = useCallback(async (panelId: string, count: number) => {
        if (!storyboard) return;
        const index = storyboard.panels.findIndex(p => p.id === panelId);
        if (index === -1) return;

        const panel = storyboard.panels[index];
        const newPanels: StoryboardPanel[] = [];
        for (let i = 0; i < count; i++) {
            newPanels.push({
                ...panel,
                id: `p-${Date.now()}-${i}`,
                panelNumber: panel.panelNumber + i,
                aiPrompt: '',
                generatedImage: undefined
            });
        }

        const updatedPanels = [
            ...storyboard.panels.slice(0, index),
            ...newPanels,
            ...storyboard.panels.slice(index + 1)
        ].map((p, i) => ({ ...p, panelNumber: i + 1 }));

        await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
        toast.success(`分镜已拆分为 ${count} 份`);
    }, [storyboard, onUpdateStoryboard]);

    // 批量删除
    const handleBatchDelete = useCallback(async (selectedIds: Set<string>) => {
        if (!storyboard) return;
        const updatedPanels = storyboard.panels.filter(p => !selectedIds.has(p.id))
            .map((p, i) => ({ ...p, panelNumber: i + 1 }));

        await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
        toast.success(`已删除 ${selectedIds.size} 个分镜`);
    }, [storyboard, onUpdateStoryboard]);

    // 批量应用参数
    const handleBatchApplyParams = useCallback(async (selectedIds: Set<string>, params: Partial<StoryboardPanel>) => {
        if (!storyboard) return;
        const updatedPanels = storyboard.panels.map(p => {
            if (selectedIds.has(p.id)) {
                return { ...p, ...params };
            }
            return p;
        });

        await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
        toast.success(`已为 ${selectedIds.size} 个分镜应用参数`);
    }, [storyboard, onUpdateStoryboard]);

    // 应用预设
    const handleApplyPreset = useCallback(async (panelId: string, params: Partial<StoryboardPanel>) => {
        if (!storyboard) return;
        const updatedPanels = storyboard.panels.map(p => {
            if (p.id === panelId) {
                return { ...p, ...params };
            }
            return p;
        });
        await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
    }, [storyboard, onUpdateStoryboard]);

    // 导出分镜（支持 JSON/Text 格式）
    const handleExportStoryboard = useCallback((format: string) => {
        if (!storyboard) return;

        let content: string;
        let filename: string;
        let mimeType: string;

        if (format === 'json') {
            content = JSON.stringify(storyboard, null, 2);
            filename = `storyboard_${Date.now()}.json`;
            mimeType = 'application/json';
        } else {
            // Text 格式
            const lines = storyboard.panels.map(p =>
                `#${p.panelNumber} | ${p.shot || '中景'} | ${p.duration || 3}秒\n` +
                `画面：${p.description || ''}\n` +
                `对白：${p.dialogue || ''}\n` +
                `提示词：${p.aiPrompt || ''}\n` +
                `---`
            );
            content = lines.join('\n\n');
            filename = `storyboard_${Date.now()}.txt`;
            mimeType = 'text/plain';
        }

        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast.success(`已导出为 ${format.toUpperCase()} 格式`);
    }, [storyboard]);

    // 导出提示词
    const handleExportPrompts = useCallback((platform: ExportPlatform) => {
        if (!storyboard || !assets || !script || !project) return;

        const prompts = exportAllPanelPrompts(
            storyboard.panels,
            assets.characters,
            assets.scenes,
            project.directorStyle,
            platform
        );
        const blob = new Blob([prompts], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `storyboard_prompts_${platform}_${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast.success(`已导出 ${platform} 格式提示词`);
    }, [storyboard, assets, script, project]);

    // PDF 导出（🆕 增强版本）
    const handleExportPDF = useCallback(async () => {
        toast.loading('正在准备PDF导出...', { id: 'pdf-export' });

        // 短暂延迟确保打印模板渲染完成
        await new Promise(resolve => setTimeout(resolve, 100));

        // 调用浏览器打印（使用CSS @media print 样式）
        window.print();

        // 打印完成后移除loading toast
        setTimeout(() => {
            toast.dismiss('pdf-export');
            toast.success('PDF导出对话框已打开，请选择"保存为PDF"');
        }, 500);
    }, []);

    // 复制提示词
    const handleCopyPrompt = useCallback((prompt: string, type: 'image' | 'video') => {
        navigator.clipboard.writeText(prompt);
        toast.success(`${type === 'image' ? '提示词' : '视频描述'}已复制到剪贴板`);
    }, []);

    // 一键生成全部预览图
    const handleGenerateAllImages = useCallback(async (
        selectedIds: Set<string>,
        onProgress?: (current: number, total: number) => void,
        onComplete?: () => void
    ) => {
        if (!storyboard || !assets || !project) return;

        const total = selectedIds.size;
        let current = 0;

        const tasks = storyboard.panels
            .filter(p => selectedIds.has(p.id))
            .map(panel => ({
                id: panel.id,
                execute: async () => {
                    const imageUrl = await generateStoryboardImage(
                        panel,
                        assets.characters,
                        assets.scenes,
                        project.directorStyle,
                        true
                    );
                    current++;
                    onProgress?.(current, total);
                    return { ...panel, generatedImage: imageUrl };
                }
            }));

        queue.addTasks(tasks);

        // 🆕 等待全量完成后再执行统一保存逻辑
        try {
            await queue.waitForBatch(selectedIds);

            const results = queue.getTasks()
                .filter(t => selectedIds.has(t.id) && t.status === 'completed')
                .map(t => t.result as StoryboardPanel);

            if (results.length > 0) {
                const updatedPanels = storyboard.panels.map(p => {
                    const found = results.find((r: StoryboardPanel) => r.id === p.id);
                    return found || p;
                });
                await onUpdateStoryboard({ ...storyboard, panels: updatedPanels });
                toast.success(`已完成 ${results.length} 张预览图生成`);
            }
        } catch (err) {
            console.error('[BatchGenerateImages] Error:', err);
            toast.error('批量生成过程中出现异常');
        } finally {
            onComplete?.();
        }
    }, [storyboard, assets, project, queue, onUpdateStoryboard]);

    // 生成单张提示词
    const handleGeneratePrompts = useCallback(async (panel: StoryboardPanel) => {
        if (!assets || !project) return;
        const updatedPanel = { ...panel, aiPrompt: '正在生成...' };
        // 这里只是 UI 反馈，实际逻辑通常在批量操作或 AI 提取中
        await handleBatchRegeneratePrompts(new Set([panel.id]), true);
    }, [assets, project, handleBatchRegeneratePrompts]);

    // 🆕 导出为 CSV（Excel 兼容）
    const handleExportCSV = useCallback(() => {
        if (!storyboard || !project) return;
        const csv = exportStoryboardToCSV(storyboard.panels, project.title);
        const filename = generateFriendlyFilename(project.title, '分镜表', 'csv');
        downloadCSV(csv, filename);
        toast.success('已导出 CSV 格式（可用Excel打开）');
    }, [storyboard, project]);

    // 🆕 导出视频提示词（分平台）
    const handleExportVideoPrompts = useCallback((platform: VideoPlatform) => {
        if (!storyboard || !project) return;
        const content = exportVideoPromptsByPlatform(storyboard.panels, platform, project.title);
        const filename = generateFriendlyFilename(project.title, `视频提示词_${platform}`, 'txt');
        downloadText(content, filename);
        toast.success(`已导出 ${platform.toUpperCase()} 格式视频提示词`);
    }, [storyboard, project]);

    // 🆕 反向同步：从分镜提取角色/场景到项目库
    const handleSyncToAssetLibrary = useCallback(async () => {
        if (!storyboard || !assets) {
            toast.error('分镜或项目库未加载');
            return { newCharacters: [], newScenes: [] };
        }

        const existingCharNames = new Set(assets.characters.map(c => c.name.toLowerCase()));
        const existingSceneNames = new Set(assets.scenes.map(s => s.name.toLowerCase()));

        const newCharacters: { name: string; description: string }[] = [];
        const newScenes: { name: string; description: string }[] = [];

        // 遍历所有分镜面板
        storyboard.panels.forEach(panel => {
            // 提取角色名称（从 characters 字段或对白）
            if (panel.characters) {
                panel.characters.forEach(charName => {
                    if (charName && !existingCharNames.has(charName.toLowerCase())) {
                        existingCharNames.add(charName.toLowerCase());
                        newCharacters.push({
                            name: charName,
                            description: `从分镜 ${panel.id.substring(0, 8)} 提取`
                        });
                    }
                });
            }
            // 从对白中提取角色
            if (panel.dialogue) {
                const dialogueMatch = panel.dialogue.match(/^(.+?)[:：]/);
                if (dialogueMatch) {
                    const charName = dialogueMatch[1].trim();
                    if (charName && !existingCharNames.has(charName.toLowerCase())) {
                        existingCharNames.add(charName.toLowerCase());
                        newCharacters.push({
                            name: charName,
                            description: `从对白中提取`
                        });
                    }
                }
            }

            // 提取场景名称（从 sceneId 查找或从 description 中提取）
            let sceneName = '';
            if (panel.sceneId) {
                const existingScene = assets.scenes.find(s => s.id === panel.sceneId);
                if (!existingScene) {
                    // 场景ID存在但不在资产库中，用sceneId作为临时名称
                    sceneName = `场景_${panel.sceneId.substring(0, 8)}`;
                }
            }
            // 从description中尝试提取场景（如：INT. 办公室 - 日）
            if (!sceneName && panel.description) {
                const sceneMatch = panel.description.match(/^(INT\.|EXT\.|内|外)[^\-\n]*/i);
                if (sceneMatch) {
                    sceneName = sceneMatch[0].trim();
                }
            }
            if (sceneName && !existingSceneNames.has(sceneName.toLowerCase())) {
                existingSceneNames.add(sceneName.toLowerCase());
                newScenes.push({
                    name: sceneName,
                    description: panel.description?.substring(0, 100) || `从分镜 ${panel.id.substring(0, 8)} 提取`
                });
            }
        });

        if (newCharacters.length === 0 && newScenes.length === 0) {
            toast.info('未发现新的角色或场景');
            return { newCharacters: [], newScenes: [], saved: false };
        }

        // 🆕 自动添加到项目库（包含自动生成提示词）
        if (onUpdateAssets && assets) {
            // 获取导演风格提示词前缀
            const stylePrefix = project?.directorStyle ? [
                project.directorStyle.artStyle,
                project.directorStyle.colorTone,
                project.directorStyle.lightingStyle,
                project.directorStyle.cameraStyle,
                project.directorStyle.mood,
                project.directorStyle.customPrompt
            ].filter(Boolean).join(', ') : '';

            const updatedAssets: AssetLibrary = {
                ...assets,
                characters: [
                    ...assets.characters,
                    ...newCharacters.map((c, idx) => {
                        const basePrompt = `${c.name}, character portrait`;
                        const fullPrompt = stylePrefix ? `${basePrompt}, ${stylePrefix}` : basePrompt;
                        return {
                            id: `char-sync-${Date.now()}-${idx}`,
                            name: c.name,
                            description: c.description,
                            appearance: '',
                            personality: '',
                            avatar: '',
                            fullBodyPrompt: `full body portrait of ${c.name}, white background, front view, ${stylePrefix}, high quality, detailed`.trim(),
                            facePrompt: `close-up face portrait of ${c.name}, detailed facial features, ${stylePrefix}, high quality`.trim(),
                            tags: ['从分镜同步']
                        };
                    })
                ],
                scenes: [
                    ...assets.scenes,
                    ...newScenes.map((s, idx) => {
                        const scenePrompt = `${s.name}, ${s.description || 'cinematic scene'}`;
                        return {
                            id: `scene-sync-${Date.now()}-${idx}`,
                            name: s.name,
                            description: s.description,
                            location: s.name,
                            environment: '',
                            atmosphere: '',
                            image: '',
                            widePrompt: `wide shot, ${scenePrompt}, ${stylePrefix}, establishing shot, high quality, detailed environment`.trim(),
                            mediumPrompt: `medium shot, ${scenePrompt}, ${stylePrefix}, cinematic composition`.trim(),
                            closeupPrompt: `close-up detail of ${s.name}, ${stylePrefix}, high quality`.trim(),
                            tags: ['从分镜同步']
                        };
                    })
                ]
            };

            const saved = await onUpdateAssets(updatedAssets);
            if (saved) {
                toast.success(`已自动添加 ${newCharacters.length} 个角色，${newScenes.length} 个场景到项目库`);
                return { newCharacters, newScenes, saved: true };
            } else {
                toast.error('保存到项目库失败');
                return { newCharacters, newScenes, saved: false };
            }
        }

        // 没有 onUpdateAssets 回调时，仅返回提取结果
        return { newCharacters, newScenes, saved: false };
    }, [storyboard, assets, onUpdateAssets]);

    return {
        handleBatchRegeneratePrompts,
        handleGenerateAllImages,
        handleGenerateImage,
        handleCopyPanel,
        handleSplitPanel,
        handleBatchDelete,
        handleBatchApplyParams: (selectedIds: Set<string>, params: any) => handleBatchApplyParams(selectedIds, params),
        handleApplyPreset,
        handleExportStoryboard,
        handleExportPrompts,
        handleExportPDF,
        handleCopyPrompt,
        handleGeneratePrompts,
        handleExportCSV,
        handleExportVideoPrompts,
        handleSyncToAssetLibrary,
        // 🆕 队列控制方法
        cancelAllTasks: () => queue.cancelAll(),
        retryFailedTasks: (ids?: Set<string>) => queue.retryFailed(ids),
        getQueueStats: () => queue.getStats(),
    };
}
