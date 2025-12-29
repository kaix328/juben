// ScriptEditor 模块类型定义
// 从主类型文件导入类型
import type { Script, ScriptScene, Dialogue, Chapter, ScriptMetadata, ScriptStatistics, DialogueExtension } from '../../types';

// 重新导出便于模块内部使用
export type { Script, ScriptScene, Dialogue, Chapter, ScriptMetadata, ScriptStatistics, DialogueExtension };

// 组件内部状态类型
export interface ScriptEditorState {
    chapter: Chapter | null;
    script: Script | null;
    isExtracting: boolean;
    viewMode: 'edit' | 'preview';
    selectedEpisode: number | 'all';
    showStats: boolean;
    lastSaved: string;
    batchMode: boolean;
    selectedScenes: Set<string>;
    showBatchPanel: boolean;
}

// AI 提取进度状态
export interface ExtractProgress {
    step: 'idle' | 'parsing' | 'extracting' | 'validating' | 'done' | 'error';
    message: string;
    progress?: number; // 0-100
}

// 统计数据类型
export interface ScriptStats {
    totalScenes: number;
    totalDialogues: number;
    totalDuration: string;
    totalCharacters: string[];
    sceneTypeStats: { int: number; ext: number };
    episodeDurations: Map<number, string>;
    estimatedPanelCount: { min: number; max: number };
}

// 批量编辑更新类型
export interface BatchUpdateValues {
    episodeNumber?: number;
    timeOfDay?: string;
    sceneType?: 'INT' | 'EXT';
    transition?: string;
}

// 历史记录类型（用于撤销/重做）
export interface HistoryEntry {
    script: Script;
    timestamp: number;
    description: string;
}

// 场景卡片 Props
export interface SceneCardProps {
    scene: ScriptScene;
    batchMode: boolean;
    isSelected: boolean;
    onToggleSelect: (id: string) => void;
    onUpdate: (id: string, updates: Partial<ScriptScene>) => void;
    onDelete: (id: string) => void;
    onAddDialogue: (sceneId: string) => void;
    onUpdateDialogue: (sceneId: string, dialogueId: string, updates: Partial<Dialogue>) => void;
    onDeleteDialogue: (sceneId: string, dialogueId: string) => void;
}

// 对白条目 Props
export interface DialogueItemProps {
    dialogue: Dialogue;
    sceneId: string;
    characters: string[];
    onUpdate: (sceneId: string, dialogueId: string, updates: Partial<Dialogue>) => void;
    onDelete: (sceneId: string, dialogueId: string) => void;
}

// 统计面板 Props
export interface StatsPanelProps {
    stats: ScriptStats;
    onClose: () => void;
}

// 批量编辑面板 Props
export interface BatchEditPanelProps {
    selectedCount: number;
    onUpdate: (updates: BatchUpdateValues) => void;
    onDelete: () => void;
    onClose: () => void;
}

// 集数筛选器 Props  
export interface EpisodeFilterProps {
    episodes: number[];
    selectedEpisode: number | 'all';
    onSelect: (episode: number | 'all') => void;
    getEpisodeDuration: (episode: number) => string;
}
