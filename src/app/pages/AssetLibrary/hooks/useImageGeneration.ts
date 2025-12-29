import { useState, useCallback } from 'react';
import { toast } from 'sonner';
import { callDoubaoImage, optimizePrompt } from '../../../utils/volcApi';
import { IMAGE_SIZES } from '../../../constants/imageSizes';
import type { AssetLibrary, Project } from '../../../types';

interface UseImageGenerationOptions {
    assets: AssetLibrary | null;
    project: Project | null;
    handleUpdateCharacter: (id: string, updates: any) => void;
    handleUpdateScene: (id: string, updates: any) => void;
    handleUpdateProp: (id: string, updates: any) => void;
    handleUpdateCostume: (id: string, updates: any) => void;
}

export function useImageGeneration({
    assets,
    project,
    handleUpdateCharacter,
    handleUpdateScene,
    handleUpdateProp,
    handleUpdateCostume
}: UseImageGenerationOptions) {
    const [enablePromptOptimization, setEnablePromptOptimization] = useState(true);
    const [isBatchGenerating, setIsBatchGenerating] = useState(false);  // 🆕 批量生成状态
    const [batchProgress, setBatchProgress] = useState({ current: 0, total: 0 }); // 🆕 批量进度

    const getImageGenerationErrorMessage = (error: unknown): string => {
        const errorMsg = error instanceof Error ? error.message : String(error);

        if (errorMsg.includes('Missing API Key')) return '请先在设置页面配置API密钥';
        if (errorMsg.includes('Missing Image Endpoint ID')) return '请先在设置页面配置图片端点ID';
        if (errorMsg.includes('InvalidParameter')) return '参数错误,请检查提示词格式';
        if (errorMsg.includes('400')) return '请求格式错误,请重试或联系管理员';
        if (errorMsg.includes('401') || errorMsg.includes('403')) return 'API密钥无效或已过期,请检查配置';
        if (errorMsg.includes('429')) return 'API调用次数超限,请稍后重试';
        if (errorMsg.includes('500') || errorMsg.includes('502') || errorMsg.includes('503')) return '服务器错误,请稍后重试';
        if (errorMsg.includes('timeout') || errorMsg.includes('network')) return '网络连接超时,请检查网络连接';

        return '生成失败,请检查网络连接和API配置';
    };

    const handleGenerateCharacterFullBody = async (characterId: string) => {
        const character = assets?.characters.find(c => c.id === characterId);
        if (!character || !character.fullBodyPrompt) {
            toast.error('请先填写AI提示词');
            return;
        }

        handleUpdateCharacter(characterId, { isGeneratingFullBody: true });

        try {
            let optimizedPrompt = character.fullBodyPrompt;
            if (enablePromptOptimization) {
                try {
                    toast.loading('正在优化提示词...', { id: `gen-${characterId}` });
                    const styleHint = project?.directorStyle?.artStyle || 'Cinematic';
                    const desc = `${character.name} 的全身正视图: ${character.appearance || ''}, ${character.fullBodyPrompt}`;
                    optimizedPrompt = await optimizePrompt(desc, styleHint, 'character');
                } catch (e) {
                    console.warn('Prompt optimization failed, using original', e);
                }
            }

            toast.loading('正在生成图片...', { id: `gen-${characterId}` });
            const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.CHARACTER_FULL_BODY, project?.directorStyle?.negativePrompt);
            handleUpdateCharacter(characterId, {
                fullBodyPreview: imageUrl,
                isGeneratingFullBody: false
            });
            toast.success('全身图生成成功!', { id: `gen-${characterId}` });
        } catch (error: unknown) {
            console.error('生成失败:', error);
            toast.error(getImageGenerationErrorMessage(error), { id: `gen-${characterId}` });
            handleUpdateCharacter(characterId, { isGeneratingFullBody: false });
        }
    };

    const handleGenerateCharacterFace = async (characterId: string) => {
        const character = assets?.characters.find(c => c.id === characterId);
        if (!character || !character.facePrompt) {
            toast.error('请先填写AI提示词');
            return;
        }

        handleUpdateCharacter(characterId, { isGeneratingFace: true });

        try {
            let optimizedPrompt = character.facePrompt;
            if (enablePromptOptimization) {
                try {
                    toast.loading('正在优化提示词...', { id: `gen-${characterId}-face` });
                    const styleHint = project?.directorStyle?.artStyle || 'Cinematic';
                    const desc = `${character.name} 的脸部特写: ${character.appearance || ''}, ${character.facePrompt}`;
                    optimizedPrompt = await optimizePrompt(desc, styleHint, 'character');
                } catch (e) {
                    console.warn('Prompt optimization failed, using original', e);
                }
            }

            toast.loading('正在生成图片...', { id: `gen-${characterId}-face` });
            const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.CHARACTER_FACE, project?.directorStyle?.negativePrompt);
            handleUpdateCharacter(characterId, {
                facePreview: imageUrl,
                isGeneratingFace: false
            });
            toast.success('脸部图生成成功!', { id: `gen-${characterId}-face` });
        } catch (error: unknown) {
            console.error('生成失败:', error);
            toast.error(getImageGenerationErrorMessage(error), { id: `gen-${characterId}-face` });
            handleUpdateCharacter(characterId, { isGeneratingFace: false });
        }
    };

    const handleGenerateSceneWide = async (sceneId: string) => {
        const scene = assets?.scenes.find(s => s.id === sceneId);
        if (!scene || !scene.widePrompt) {
            toast.error('请先填写AI提示词');
            return;
        }

        handleUpdateScene(sceneId, { isGeneratingWide: true });

        try {
            let optimizedPrompt = scene.widePrompt;
            if (enablePromptOptimization) {
                try {
                    toast.loading('正在优化提示词...', { id: `gen-${sceneId}-wide` });
                    const styleHint = project?.directorStyle?.artStyle || 'Cinematic';
                    const desc = `${scene.name} 场景 - 远景: ${scene.environment || ''}, ${scene.widePrompt}`;
                    optimizedPrompt = await optimizePrompt(desc, styleHint, 'scene');
                } catch (e) {
                    console.warn('Prompt optimization failed, using original', e);
                }
            }

            toast.loading('正在生成图片...', { id: `gen-${sceneId}-wide` });
            const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.SCENE_WIDE, project?.directorStyle?.negativePrompt);
            handleUpdateScene(sceneId, {
                widePreview: imageUrl,
                isGeneratingWide: false
            });
            toast.success('远景图生成成功!', { id: `gen-${sceneId}-wide` });
        } catch (error: unknown) {
            console.error('生成失败:', error);
            toast.error(getImageGenerationErrorMessage(error), { id: `gen-${sceneId}-wide` });
            handleUpdateScene(sceneId, { isGeneratingWide: false });
        }
    };

    const handleGenerateSceneMedium = async (sceneId: string) => {
        const scene = assets?.scenes.find(s => s.id === sceneId);
        if (!scene || !scene.mediumPrompt) {
            toast.error('请先填写AI提示词');
            return;
        }

        handleUpdateScene(sceneId, { isGeneratingMedium: true });

        try {
            let optimizedPrompt = scene.mediumPrompt;
            if (enablePromptOptimization) {
                try {
                    toast.loading('正在优化提示词...', { id: `gen-${sceneId}-medium` });
                    const styleHint = project?.directorStyle?.artStyle || 'Cinematic';
                    const desc = `${scene.name} 场景 - 中景: ${scene.environment || ''}, ${scene.mediumPrompt}`;
                    optimizedPrompt = await optimizePrompt(desc, styleHint, 'scene');
                } catch (e) {
                    console.warn('Prompt optimization failed, using original', e);
                }
            }

            toast.loading('正在生成图片...', { id: `gen-${sceneId}-medium` });
            const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.SCENE_MEDIUM, project?.directorStyle?.negativePrompt);
            handleUpdateScene(sceneId, {
                mediumPreview: imageUrl,
                isGeneratingMedium: false
            });
            toast.success('中景图生成成功!', { id: `gen-${sceneId}-medium` });
        } catch (error: unknown) {
            console.error('生成失败:', error);
            toast.error(getImageGenerationErrorMessage(error), { id: `gen-${sceneId}-medium` });
            handleUpdateScene(sceneId, { isGeneratingMedium: false });
        }
    };

    const handleGenerateSceneCloseup = async (sceneId: string) => {
        const scene = assets?.scenes.find(s => s.id === sceneId);
        if (!scene || !scene.closeupPrompt) {
            toast.error('请先填写AI提示词');
            return;
        }

        handleUpdateScene(sceneId, { isGeneratingCloseup: true });

        try {
            let optimizedPrompt = scene.closeupPrompt;
            if (enablePromptOptimization) {
                try {
                    toast.loading('正在优化提示词...', { id: `gen-${sceneId}-closeup` });
                    const styleHint = project?.directorStyle?.artStyle || 'Cinematic';
                    const desc = `${scene.name} 场景 - 特写: ${scene.environment || ''}, ${scene.closeupPrompt}`;
                    optimizedPrompt = await optimizePrompt(desc, styleHint, 'scene');
                } catch (e) {
                    console.warn('Prompt optimization failed, using original', e);
                }
            }

            toast.loading('正在生成图片...', { id: `gen-${sceneId}-closeup` });
            const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.SCENE_CLOSEUP, project?.directorStyle?.negativePrompt);
            handleUpdateScene(sceneId, {
                closeupPreview: imageUrl,
                isGeneratingCloseup: false
            });
            toast.success('特写图生成成功!', { id: `gen-${sceneId}-closeup` });
        } catch (error: unknown) {
            console.error('生成失败:', error);
            toast.error(getImageGenerationErrorMessage(error), { id: `gen-${sceneId}-closeup` });
            handleUpdateScene(sceneId, { isGeneratingCloseup: false });
        }
    };

    const handleGenerateProp = async (propId: string) => {
        const prop = assets?.props.find(p => p.id === propId);
        if (!prop || !prop.aiPrompt) {
            toast.error('请先填写AI提示词');
            return;
        }

        handleUpdateProp(propId, { isGenerating: true });

        try {
            let optimizedPrompt = prop.aiPrompt;
            if (enablePromptOptimization) {
                try {
                    toast.loading('正在优化提示词...', { id: `gen-${propId}` });
                    const styleHint = project?.directorStyle?.artStyle || 'Cinematic';
                    const desc = `道具 - ${prop.name}: ${prop.description || ''}, ${prop.aiPrompt}`;
                    optimizedPrompt = await optimizePrompt(desc, styleHint, 'prop');
                } catch (e) {
                    console.warn('Prompt optimization failed, using original', e);
                }
            }

            toast.loading('正在生成图片...', { id: `gen-${propId}` });
            const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.PROP, project?.directorStyle?.negativePrompt);
            handleUpdateProp(propId, {
                preview: imageUrl,
                isGenerating: false
            });
            toast.success('道具图生成成功!', { id: `gen-${propId}` });
        } catch (error: unknown) {
            console.error('生成失败:', error);
            toast.error(getImageGenerationErrorMessage(error), { id: `gen-${propId}` });
            handleUpdateProp(propId, { isGenerating: false });
        }
    };

    const handleGenerateCostume = async (costumeId: string) => {
        const costume = assets?.costumes.find(c => c.id === costumeId);
        if (!costume || !costume.aiPrompt) {
            toast.error('请先填写AI提示词');
            return;
        }

        handleUpdateCostume(costumeId, { isGenerating: true });

        try {
            let optimizedPrompt = costume.aiPrompt;
            if (enablePromptOptimization) {
                try {
                    toast.loading('正在优化提示词...', { id: `gen-${costumeId}` });
                    const character = assets?.characters.find(c => c.id === costume.characterId);
                    const styleHint = project?.directorStyle?.artStyle || 'Cinematic';
                    const desc = `${character?.name || '角色'} 的服饰 - ${costume.name}: ${costume.description || ''}, ${costume.aiPrompt}`;
                    optimizedPrompt = await optimizePrompt(desc, styleHint, 'costume');
                } catch (e) {
                    console.warn('Prompt optimization failed, using original', e);
                }
            }

            toast.loading('正在生成图片...', { id: `gen-${costumeId}` });
            const imageUrl = await callDoubaoImage(optimizedPrompt, IMAGE_SIZES.COSTUME, project?.directorStyle?.negativePrompt);
            handleUpdateCostume(costumeId, {
                preview: imageUrl,
                isGenerating: false
            });
            toast.success('服饰图生成成功!', { id: `gen-${costumeId}` });
        } catch (error: unknown) {
            console.error('生成失败:', error);
            toast.error(getImageGenerationErrorMessage(error), { id: `gen-${costumeId}` });
            handleUpdateCostume(costumeId, { isGenerating: false });
        }
    };

    // 🆕 批量生成所有缺失图片的资产
    const handleBatchGenerateAll = async () => {
        if (!assets) {
            toast.error('资产库未加载');
            return;
        }

        // 收集所有需要生成的任务
        const tasks: { type: string; id: string; name: string; handler: () => Promise<void> }[] = [];

        // 角色：全身图和脸部图
        assets.characters.forEach(char => {
            if (!char.fullBodyPreview && char.fullBodyPrompt) {
                tasks.push({ type: 'char-full', id: char.id, name: `${char.name} 全身图`, handler: () => handleGenerateCharacterFullBody(char.id) });
            }
            if (!char.facePreview && char.facePrompt) {
                tasks.push({ type: 'char-face', id: char.id, name: `${char.name} 头像`, handler: () => handleGenerateCharacterFace(char.id) });
            }
        });

        // 场景：远中近景
        assets.scenes.forEach(scene => {
            if (!scene.widePreview && scene.widePrompt) {
                tasks.push({ type: 'scene-wide', id: scene.id, name: `${scene.name} 远景`, handler: () => handleGenerateSceneWide(scene.id) });
            }
            if (!scene.mediumPreview && scene.mediumPrompt) {
                tasks.push({ type: 'scene-med', id: scene.id, name: `${scene.name} 中景`, handler: () => handleGenerateSceneMedium(scene.id) });
            }
            if (!scene.closeupPreview && scene.closeupPrompt) {
                tasks.push({ type: 'scene-close', id: scene.id, name: `${scene.name} 特写`, handler: () => handleGenerateSceneCloseup(scene.id) });
            }
        });

        // 道具
        assets.props.forEach(prop => {
            if (!prop.preview && prop.aiPrompt) {
                tasks.push({ type: 'prop', id: prop.id, name: prop.name, handler: () => handleGenerateProp(prop.id) });
            }
        });

        // 服饰
        assets.costumes.forEach(costume => {
            if (!costume.preview && costume.aiPrompt) {
                tasks.push({ type: 'costume', id: costume.id, name: costume.name, handler: () => handleGenerateCostume(costume.id) });
            }
        });

        if (tasks.length === 0) {
            toast.info('所有资产都已生成图片，无需批量生成');
            return;
        }

        // 确认
        if (!confirm(`即将批量生成 ${tasks.length} 张图片，预计耗时 ${Math.ceil(tasks.length * 0.5)} 分钟。是否继续？`)) {
            return;
        }

        setIsBatchGenerating(true);
        setBatchProgress({ current: 0, total: tasks.length });
        toast.loading(`批量生成中 (0/${tasks.length})...`, { id: 'batch-gen' });

        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            setBatchProgress({ current: i + 1, total: tasks.length });
            toast.loading(`批量生成中 (${i + 1}/${tasks.length}): ${task.name}...`, { id: 'batch-gen' });

            try {
                await task.handler();
                successCount++;
                // 间隔500ms避免API过载
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (error) {
                console.error(`批量生成失败: ${task.name}`, error);
                failCount++;
            }
        }

        setIsBatchGenerating(false);
        setBatchProgress({ current: 0, total: 0 });

        if (failCount === 0) {
            toast.success(`批量生成完成！成功 ${successCount} 张`, { id: 'batch-gen' });
        } else {
            toast.warning(`批量生成完成：成功 ${successCount} 张，失败 ${failCount} 张`, { id: 'batch-gen' });
        }
    };

    return {
        enablePromptOptimization,
        setEnablePromptOptimization,
        isBatchGenerating,  // 🆕
        batchProgress,      // 🆕
        handleGenerateCharacterFullBody,
        handleGenerateCharacterFace,
        handleGenerateSceneWide,
        handleGenerateSceneMedium,
        handleGenerateSceneCloseup,
        handleGenerateProp,
        handleGenerateCostume,
        handleBatchGenerateAll  // 🆕
    };
}
