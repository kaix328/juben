import { useCallback, useMemo } from 'react';
import type { Storyboard, StoryboardPanel } from '../../../types';

interface UseFilteredPanelsProps {
    storyboard: Storyboard | null;
    selectedEpisode: number | 'all';
}

/**
 * 🆕 抽取的分镜过滤 Hook
 * 用于根据选定的集数筛选分镜，避免代码重复
 */
export function useFilteredPanels({ storyboard, selectedEpisode }: UseFilteredPanelsProps) {
    // 过滤后的分镜列表
    const filteredPanels = useMemo(() => {
        if (!storyboard) return [];
        if (selectedEpisode === 'all') return storyboard.panels;
        return storyboard.panels.filter(p => p.episodeNumber === selectedEpisode);
    }, [storyboard, selectedEpisode]);

    // 分镜 ID 列表（用于批量操作）
    const filteredPanelIds = useMemo(() => {
        return filteredPanels.map(p => p.id);
    }, [filteredPanels]);

    // 总时长计算
    const totalDuration = useMemo(() => {
        return filteredPanels.reduce((sum, p) => sum + (p.duration || 3), 0);
    }, [filteredPanels]);

    // 根据 ID 获取单个分镜
    const getPanelById = useCallback((id: string): StoryboardPanel | undefined => {
        return filteredPanels.find(p => p.id === id);
    }, [filteredPanels]);

    // 获取相邻分镜（用于连贯性检查）
    const getAdjacentPanels = useCallback((panelId: string) => {
        const index = filteredPanels.findIndex(p => p.id === panelId);
        return {
            prevPanel: index > 0 ? filteredPanels[index - 1] : undefined,
            nextPanel: index < filteredPanels.length - 1 ? filteredPanels[index + 1] : undefined
        };
    }, [filteredPanels]);

    return {
        filteredPanels,
        filteredPanelIds,
        totalDuration,
        getPanelById,
        getAdjacentPanels,
        count: filteredPanels.length
    };
}
