// 分镜编辑器类型定义
import type { StoryboardPanel, Script, Storyboard } from '../../types';

// 视图模式
export type ViewMode = 'list' | 'grid' | 'timeline';

// 面板状态
export type PanelStatus = 'idle' | 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';

// 面板密度模式
export type PanelDensityMode = 'compact' | 'standard' | 'detailed';

// 拖拽项类型
export interface DragItem {
    index: number;
    id: string;
    type: string;
}

// 导出平台类型
export type ExportPlatform = 'generic' | 'midjourney' | 'comfyui' | 'runway' | 'pika';

// 可拖拽面板卡片 Props
export interface DraggablePanelCardProps {
    panel: StoryboardPanel;
    index: number;
    movePanel: (dragIndex: number, hoverIndex: number) => void;
    children: React.ReactNode;
}

// 预估分镜数量
export interface EstimatedPanelCount {
    min: number;
    max: number;
}
