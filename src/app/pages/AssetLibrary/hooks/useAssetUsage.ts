import { useState, useCallback, useEffect } from 'react';
import {
    chapterStorage,
    scriptStorage,
    storyboardStorage
} from '../../../utils/storage';
import {
    calculateAssetUsage,
    trackCharacterInScript,
    trackCharacterInStoryboard,
    trackSceneInScript,
    trackPropInStoryboard,
    trackCostumeInStoryboard,
    type UsageLocation
} from '../../../utils/assetTracker';
import type { AssetLibrary, Character, Scene, Prop, Costume, Script, Storyboard } from '../../../types';

interface UseAssetUsageOptions {
    projectId: string | undefined;
    assets: AssetLibrary | null;
    setAssets: (assets: AssetLibrary) => void;
}

export function useAssetUsage({ projectId, assets, setAssets }: UseAssetUsageOptions) {
    const [usageMap, setUsageMap] = useState(new Map<string, number>());
    const [allScripts, setAllScripts] = useState<{ script: Script, chapterTitle: string, chapterId: string }[]>([]);
    const [allStoryboards, setAllStoryboards] = useState<{ storyboard: Storyboard, chapterTitle: string, chapterId: string }[]>([]);

    const calculateUsage = useCallback(async () => {
        if (!projectId || !assets) return;

        const chapters = await chapterStorage.getByProjectId(projectId);

        const scripts = [];
        for (const chapter of chapters) {
            const script = await scriptStorage.getByChapterId(chapter.id);
            if (script) {
                scripts.push({ script, chapterTitle: chapter.title, chapterId: chapter.id });
            }
        }

        const storyboards = [];
        for (const chapter of chapters) {
            const storyboard = await storyboardStorage.getByChapterId(chapter.id);
            if (storyboard) {
                storyboards.push({ storyboard, chapterTitle: chapter.title, chapterId: chapter.id });
            }
        }

        const usage = calculateAssetUsage(assets, scripts, storyboards);
        setUsageMap(usage);
        setAllScripts(scripts);
        setAllStoryboards(storyboards);

        // 更新资源的使用次数
        const updatedAssets = {
            ...assets,
            characters: assets.characters.map(c => ({ ...c, usageCount: usage.get(c.id) || 0 })),
            scenes: assets.scenes.map(s => ({ ...s, usageCount: usage.get(s.id) || 0 })),
            props: assets.props.map(p => ({ ...p, usageCount: usage.get(p.id) || 0 })),
            costumes: assets.costumes.map(c => ({ ...c, usageCount: usage.get(c.id) || 0 })),
        };

        if (JSON.stringify(updatedAssets) !== JSON.stringify(assets)) {
            setAssets(updatedAssets);
        }
    }, [projectId, assets, setAssets]);

    useEffect(() => {
        if (projectId && assets) {
            calculateUsage();
        }
    }, [projectId, assets, calculateUsage]);

    const getCharacterUsageLocations = (character: Character): UsageLocation[] => {
        if (!allScripts.length && !allStoryboards.length) return [];
        const scriptUsage = trackCharacterInScript(character, allScripts);
        const storyboardUsage = trackCharacterInStoryboard(character, allStoryboards);
        return [...scriptUsage, ...storyboardUsage];
    };

    const getSceneUsageLocations = (scene: Scene): UsageLocation[] => {
        if (!allScripts.length) return [];
        return trackSceneInScript(scene, allScripts);
    };

    const getPropUsageLocations = (prop: Prop): UsageLocation[] => {
        if (!allStoryboards.length) return [];
        return trackPropInStoryboard(prop, allStoryboards);
    };

    const getCostumeUsageLocations = (costume: Costume): UsageLocation[] => {
        if (!allStoryboards.length) return [];
        return trackCostumeInStoryboard(costume, allStoryboards);
    };

    return {
        usageMap,
        getCharacterUsageLocations,
        getSceneUsageLocations,
        getPropUsageLocations,
        getCostumeUsageLocations,
        calculateUsage
    };
}
