import React, { useState, useMemo } from 'react';
import { ZoomIn, ZoomOut, Clock, Film } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Slider } from '../../../components/ui/slider';
import type { StoryboardPanel } from '../../../types';

interface TimelineViewProps {
    panels: StoryboardPanel[];
    selectedPanels: Set<string>;
    onToggleSelect: (panelId: string) => void;
    onUpdateDuration?: (panelId: string, duration: number) => void;  // 🆕 更新时长
    renderListView: () => React.ReactNode;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
    panels,
    selectedPanels,
    onToggleSelect,
    onUpdateDuration,
    renderListView
}) => {
    // 🆕 缩放状态（50% - 200%）
    const [zoomLevel, setZoomLevel] = useState(100);
    // 🆕 悬停预览
    const [hoveredPanel, setHoveredPanel] = useState<StoryboardPanel | null>(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const totalDuration = panels.reduce((sum, p) => sum + (p.duration || 0), 0);

    // 🆕 按场景分组（用于颜色区分）
    const sceneGroups = useMemo(() => {
        const groups: { sceneId: string; color: string; panels: StoryboardPanel[] }[] = [];
        const colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-pink-100', 'bg-orange-100'];
        let currentGroup: typeof groups[0] | null = null;

        panels.forEach(panel => {
            const sceneId = panel.sceneId || 'unknown';
            if (!currentGroup || currentGroup.sceneId !== sceneId) {
                currentGroup = { sceneId, color: colors[groups.length % colors.length], panels: [] };
                groups.push(currentGroup);
            }
            currentGroup.panels.push(panel);
        });
        return groups;
    }, [panels]);

    // 🆕 计算累计时间
    const getCumulativeTime = (index: number) => {
        let time = 0;
        for (let i = 0; i < index; i++) {
            time += panels[i].duration || 0;
        }
        return time;
    };

    // 🆕 格式化时间码
    const formatTimecode = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // 🆕 时间刻度线（每5秒一个）
    const timeMarkers = useMemo(() => {
        const markers = [];
        for (let t = 0; t <= totalDuration; t += 5) {
            markers.push(t);
        }
        return markers;
    }, [totalDuration]);

    // 🆕 悬停处理
    const handleMouseEnter = (panel: StoryboardPanel, e: React.MouseEvent) => {
        setHoveredPanel(panel);
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 10 });
    };

    return (
        <div className="space-y-4">
            {/* 🆕 工具栏 */}
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium flex items-center gap-2">
                        <Film className="w-4 h-4" />
                        时间轴视图
                    </span>
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        总时长: {formatTimecode(totalDuration)}
                    </span>
                    <span className="text-sm text-gray-500">
                        {panels.length} 个分镜
                    </span>
                </div>

                {/* 🆕 缩放控制 */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25))}>
                        <ZoomOut className="w-4 h-4" />
                    </Button>
                    <div className="w-24">
                        <Slider
                            value={[zoomLevel]}
                            onValueChange={([v]) => setZoomLevel(v)}
                            min={50}
                            max={200}
                            step={25}
                        />
                    </div>
                    <span className="text-xs text-gray-500 w-10">{zoomLevel}%</span>
                    <Button variant="ghost" size="sm" onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}>
                        <ZoomIn className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* 时间轴标尺（带缩放） */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 overflow-x-auto">
                {/* 🆕 时间刻度 */}
                <div className="relative h-6 mb-1" style={{ width: `${zoomLevel}%`, minWidth: '100%' }}>
                    {timeMarkers.map(t => {
                        const leftPercent = (t / (totalDuration || 1)) * 100;
                        return (
                            <div
                                key={t}
                                className="absolute text-xs text-gray-400"
                                style={{ left: `${leftPercent}%`, transform: 'translateX(-50%)' }}
                            >
                                {formatTimecode(t)}
                            </div>
                        );
                    })}
                </div>

                {/* 时间轴主体 */}
                <div
                    className="relative h-20 bg-gray-50 rounded border border-gray-200"
                    style={{ width: `${zoomLevel}%`, minWidth: '100%' }}
                >
                    {/* 🆕 时间刻度线 */}
                    {timeMarkers.map(t => {
                        const leftPercent = (t / (totalDuration || 1)) * 100;
                        return (
                            <div
                                key={`line-${t}`}
                                className="absolute top-0 bottom-0 border-l border-gray-300 border-dashed"
                                style={{ left: `${leftPercent}%` }}
                            />
                        );
                    })}

                    {/* 分镜块（带场景颜色） */}
                    <div className="absolute inset-0 flex">
                        {panels.map((panel, index) => {
                            const widthPercent = ((panel.duration || 3) / (totalDuration || 1)) * 100;
                            const isSelected = selectedPanels.has(panel.id);
                            const sceneGroup = sceneGroups.find(g => g.panels.includes(panel));
                            const bgColor = sceneGroup?.color || 'bg-gray-100';
                            const cumulativeTime = getCumulativeTime(index);

                            return (
                                <div
                                    key={panel.id}
                                    className={`relative border-r border-gray-400 flex flex-col items-center justify-center cursor-pointer transition-all hover:brightness-95 ${bgColor} ${isSelected ? 'ring-2 ring-blue-500 ring-inset' : ''}`}
                                    style={{ width: `${widthPercent}%`, minWidth: '50px' }}
                                    onClick={() => onToggleSelect(panel.id)}
                                    onMouseEnter={(e) => handleMouseEnter(panel, e)}
                                    onMouseLeave={() => setHoveredPanel(null)}
                                >
                                    {/* 🆕 缩略预览图 */}
                                    {panel.generatedImage && (
                                        <div className="absolute inset-1 opacity-30">
                                            <img src={panel.generatedImage} alt="" className="w-full h-full object-cover rounded" />
                                        </div>
                                    )}
                                    <div className="relative z-10 text-center px-1">
                                        <div className="text-xs font-bold text-gray-800">#{panel.panelNumber}</div>
                                        <div className="text-xs text-gray-600">{panel.duration}s</div>
                                        {/* 🆕 累计时间码 */}
                                        <div className="text-xs text-gray-400">{formatTimecode(cumulativeTime)}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 🆕 场景图例 */}
                {sceneGroups.length > 1 && (
                    <div className="flex gap-3 mt-3 text-xs text-gray-600">
                        <span className="font-medium">场景:</span>
                        {sceneGroups.map((group, idx) => (
                            <span key={group.sceneId} className={`px-2 py-0.5 rounded ${group.color}`}>
                                {idx + 1}. {group.sceneId === 'unknown' ? '未分组' : group.sceneId} ({group.panels.length})
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* 🆕 悬停预览浮窗 */}
            {hoveredPanel && (
                <div
                    className="fixed z-50 bg-white shadow-xl rounded-lg p-3 border border-gray-200 pointer-events-none"
                    style={{
                        left: tooltipPos.x,
                        top: tooltipPos.y,
                        transform: 'translate(-50%, -100%)'
                    }}
                >
                    {hoveredPanel.generatedImage && (
                        <img
                            src={hoveredPanel.generatedImage}
                            alt={`分镜 ${hoveredPanel.panelNumber}`}
                            className="w-40 h-24 object-cover rounded mb-2"
                        />
                    )}
                    <div className="text-sm font-medium">#{hoveredPanel.panelNumber} - {hoveredPanel.shot}</div>
                    <div className="text-xs text-gray-500 mt-1 max-w-[160px] truncate">{hoveredPanel.description}</div>
                    {hoveredPanel.dialogue && (
                        <div className="text-xs text-gray-400 italic mt-1 max-w-[160px] truncate">"{hoveredPanel.dialogue}"</div>
                    )}
                </div>
            )}

            {/* 详细列表 */}
            {renderListView()}
        </div>
    );
};
