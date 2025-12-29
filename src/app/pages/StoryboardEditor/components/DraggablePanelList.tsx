import React, { useState, useCallback } from 'react';
import type { StoryboardPanel } from '../../../types';

interface DraggablePanelListProps {
    panels: StoryboardPanel[];
    onMove: (fromIndex: number, toIndex: number) => void;
    renderPanel: (panel: StoryboardPanel, index: number, isDragging: boolean, isDragOver: boolean) => React.ReactNode;
    className?: string;
}

/**
 * 原生HTML5拖拽排序容器
 * 不依赖外部DnD库
 */
export const DraggablePanelList: React.FC<DraggablePanelListProps> = ({
    panels,
    onMove,
    renderPanel,
    className = ''
}) => {
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

    const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', String(index));
        // 半透明拖拽预览
        const target = e.currentTarget as HTMLElement;
        target.style.opacity = '0.5';
    }, []);

    const handleDragEnd = useCallback((e: React.DragEvent) => {
        setDraggedIndex(null);
        setDragOverIndex(null);
        const target = e.currentTarget as HTMLElement;
        target.style.opacity = '1';
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (index !== draggedIndex) {
            setDragOverIndex(index);
        }
    }, [draggedIndex]);

    const handleDragLeave = useCallback(() => {
        setDragOverIndex(null);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent, toIndex: number) => {
        e.preventDefault();
        const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);

        if (!isNaN(fromIndex) && fromIndex !== toIndex) {
            onMove(fromIndex, toIndex);
        }

        setDraggedIndex(null);
        setDragOverIndex(null);
    }, [onMove]);

    return (
        <div className={className}>
            {panels.map((panel, index) => (
                <div
                    key={panel.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragEnd={handleDragEnd}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, index)}
                    className={`relative transition-transform ${dragOverIndex === index ? 'transform translate-y-2 border-t-4 border-blue-500' : ''
                        }`}
                >
                    {/* 拖拽指示器 */}
                    {dragOverIndex === index && draggedIndex !== index && (
                        <div className="absolute -top-1 left-0 right-0 h-1 bg-blue-500 rounded-full" />
                    )}
                    {renderPanel(panel, index, draggedIndex === index, dragOverIndex === index)}
                </div>
            ))}
        </div>
    );
};

export default DraggablePanelList;
