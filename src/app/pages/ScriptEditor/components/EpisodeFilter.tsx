// 集数筛选器组件
import React, { memo } from 'react';
import { Film } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import type { EpisodeFilterProps } from '../types';

export const EpisodeFilter = memo(function EpisodeFilter({
    episodes,
    selectedEpisode,
    onSelect,
    getEpisodeDuration
}: EpisodeFilterProps) {
    return (
        <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-gray-500" />
            <Select
                value={selectedEpisode === 'all' ? 'all' : String(selectedEpisode)}
                onValueChange={(value: string) => onSelect(value === 'all' ? 'all' : parseInt(value))}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="选择集数" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">
                        全部集数（{episodes.length} 集）
                    </SelectItem>
                    {episodes.map((ep) => (
                        <SelectItem key={ep} value={String(ep)}>
                            第 {ep} 集 - {getEpisodeDuration(ep)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
});
