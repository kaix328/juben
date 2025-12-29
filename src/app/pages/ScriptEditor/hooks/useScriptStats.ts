// 统计计算 Hook - 使用 useMemo 缓存计算结果
import { useMemo } from 'react';
import type { Script, ScriptStats } from '../types';

interface UseScriptStatsOptions {
    script: Script | null;
}

export function useScriptStats({ script }: UseScriptStatsOptions): ScriptStats | null {
    return useMemo(() => {
        if (!script) return null;

        // 计算总场景数
        const totalScenes = script.scenes.length;

        // 计算总对话数
        const totalDialogues = script.scenes.reduce((sum, s) => sum + s.dialogues.length, 0);

        // 计算总时长
        const totalSeconds = script.scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const totalDuration = minutes > 0 ? `${minutes}分${seconds}秒` : `${seconds}秒`;

        // 获取所有角色（去重）
        const characters = new Set<string>();
        script.scenes.forEach(scene => {
            scene.characters.forEach(char => characters.add(char));
            scene.dialogues.forEach(d => characters.add(d.character));
        });
        const totalCharacters = Array.from(characters).filter(c => c && c !== '角色名');

        // 统计内景/外景比例
        const int = script.scenes.filter(s => s.sceneType === 'INT').length;
        const ext = script.scenes.filter(s => s.sceneType === 'EXT').length;
        const sceneTypeStats = { int, ext };

        // 计算每集时长
        const episodeDurations = new Map<number, string>();
        const episodeSet = new Set(script.scenes.map(s => s.episodeNumber || 1));

        episodeSet.forEach(episodeNum => {
            const scenes = script.scenes.filter(s => s.episodeNumber === episodeNum);
            const epTotalSeconds = scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
            const epMinutes = Math.floor(epTotalSeconds / 60);
            const epSeconds = epTotalSeconds % 60;
            episodeDurations.set(
                episodeNum,
                epMinutes > 0 ? `${epMinutes}分${epSeconds}秒` : `${epSeconds}秒`
            );
        });

        // 🆕 计算预估分镜数
        let estMin = 0;
        let estMax = 0;
        script.scenes.forEach(scene => {
            const dialogueCount = scene.dialogues?.length || 0;
            const actionLength = (scene.action || '').length;
            const characterCount = (scene.characters || []).length;

            let baseMin = 1;
            let baseMax = 2;
            if (dialogueCount >= 3) { baseMin += 2; baseMax += 3; }
            else if (dialogueCount >= 1) { baseMin += 1; baseMax += 1; }
            if (actionLength > 100) { baseMin += 1; baseMax += 1; }
            if (characterCount >= 3) { baseMin += 1; baseMax += 1; }

            estMin += baseMin;
            estMax += baseMax;
        });

        return {
            totalScenes,
            totalDialogues,
            totalDuration,
            totalCharacters,
            sceneTypeStats,
            episodeDurations,
            estimatedPanelCount: { min: estMin, max: estMax }
        };
    }, [script]);
}

// 辅助函数：获取所有集数
export function getAllEpisodes(script: Script | null): number[] {
    if (!script) return [];
    const episodes = new Set(script.scenes.map(s => s.episodeNumber || 1));
    return Array.from(episodes).sort((a, b) => a - b);
}

// 辅助函数：根据集数筛选场景
export function getFilteredScenes(script: Script | null, selectedEpisode: number | 'all') {
    if (!script) return [];
    if (selectedEpisode === 'all') return script.scenes;
    return script.scenes.filter(s => s.episodeNumber === selectedEpisode);
}
