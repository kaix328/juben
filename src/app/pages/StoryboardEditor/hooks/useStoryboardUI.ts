import { useState, useCallback, useMemo, useReducer } from 'react';
import type { Script, Storyboard, StoryboardPanel } from '../../../types';
import type { ViewMode, PanelDensityMode, EstimatedPanelCount, PanelStatus } from '../types';
import { estimatePanelCount, type DensityMode } from '../../../constants/densityConfig';

interface UseStoryboardUIProps {
    script: Script | null;
    storyboard: Storyboard | null;
}

// 🆕 使用 useReducer 管理 UI 状态
type UIAction =
    | { type: 'SET_VIEW_MODE'; payload: ViewMode }
    | { type: 'SET_EPISODE'; payload: number | 'all' }
    | { type: 'SET_DENSITY_MODE'; payload: PanelDensityMode }
    | { type: 'SELECT_PANEL'; payload: string }
    | { type: 'SELECT_ALL'; payload: string[] }
    | { type: 'CLEAR_SELECTION' }
    | { type: 'SET_EXTRACTING'; payload: boolean }
    | { type: 'SET_GENERATING'; payload: boolean }
    | { type: 'SET_BATCH_PROGRESS'; payload: { current: number; total: number } | null }
    | { type: 'SET_CONFIRM_DIALOG'; payload: boolean }
    | { type: 'SET_PENDING_EPISODE'; payload: number | 'all' }
    | { type: 'SET_HISTORY_DIALOG'; payload: boolean }
    | { type: 'SET_PROMPT_OPTIMIZATION'; payload: boolean }
    | { type: 'UPDATE_PANEL_STATUS'; payload: { id: string; status: PanelStatus } }
    | { type: 'RESET_PANEL_STATUSES'; payload: string[] };

interface UIState {
    viewMode: ViewMode;
    selectedEpisode: number | 'all';
    panelDensityMode: PanelDensityMode;
    selectedPanels: Set<string>;
    enablePromptOptimization: boolean;
    batchProgress: { current: number; total: number } | null;
    isExtracting: boolean;
    isGeneratingAll: boolean;
    confirmDialogOpen: boolean;
    pendingEpisode: number | 'all';
    showHistoryDialog: boolean;
    panelStatuses: Record<string, PanelStatus>;
}

const initialState: UIState = {
    viewMode: 'list',
    selectedEpisode: 'all',
    panelDensityMode: 'standard',
    selectedPanels: new Set(),
    enablePromptOptimization: true,
    batchProgress: null,
    isExtracting: false,
    isGeneratingAll: false,
    confirmDialogOpen: false,
    pendingEpisode: 'all',
    showHistoryDialog: false,
    panelStatuses: {}
};

function uiReducer(state: UIState, action: UIAction): UIState {
    switch (action.type) {
        case 'SET_VIEW_MODE':
            return { ...state, viewMode: action.payload };
        case 'SET_EPISODE':
            return { ...state, selectedEpisode: action.payload };
        case 'SET_DENSITY_MODE':
            return { ...state, panelDensityMode: action.payload };
        case 'SELECT_PANEL': {
            const next = new Set(state.selectedPanels);
            if (next.has(action.payload)) next.delete(action.payload);
            else next.add(action.payload);
            return { ...state, selectedPanels: next };
        }
        case 'SELECT_ALL':
            return { ...state, selectedPanels: new Set(action.payload) };
        case 'CLEAR_SELECTION':
            return { ...state, selectedPanels: new Set() };
        case 'SET_EXTRACTING':
            return { ...state, isExtracting: action.payload };
        case 'SET_GENERATING':
            return { ...state, isGeneratingAll: action.payload };
        case 'SET_BATCH_PROGRESS':
            return { ...state, batchProgress: action.payload };
        case 'SET_CONFIRM_DIALOG':
            return { ...state, confirmDialogOpen: action.payload };
        case 'SET_PENDING_EPISODE':
            return { ...state, pendingEpisode: action.payload };
        case 'SET_HISTORY_DIALOG':
            return { ...state, showHistoryDialog: action.payload };
        case 'SET_PROMPT_OPTIMIZATION':
            return { ...state, enablePromptOptimization: action.payload };
        case 'UPDATE_PANEL_STATUS':
            return { ...state, panelStatuses: { ...state.panelStatuses, [action.payload.id]: action.payload.status } };
        case 'RESET_PANEL_STATUSES': {
            const next = { ...state.panelStatuses };
            action.payload.forEach(id => { next[id] = 'idle'; });
            return { ...state, panelStatuses: next };
        }
        default:
            return state;
    }
}

export function useStoryboardUI({ script, storyboard }: UseStoryboardUIProps) {
    const [state, dispatch] = useReducer(uiReducer, initialState);

    // 获取所有集数
    const allEpisodes = useMemo(() => {
        if (!script) return [];
        const eps = new Set<number>();
        script.scenes.forEach(s => {
            if (s.episodeNumber) eps.add(s.episodeNumber);
        });
        return Array.from(eps).sort((a, b) => a - b);
    }, [script]);

    // 获取经过过滤的分镜
    const getFilteredPanels = useCallback(() => {
        if (!storyboard) return [];
        if (state.selectedEpisode === 'all') return storyboard.panels;
        return storyboard.panels.filter(p => p.episodeNumber === state.selectedEpisode);
    }, [storyboard, state.selectedEpisode]);

    // 🆕 计算预估分镜数量（使用统一算法）
    const getEstimatedPanelCount = useCallback((): EstimatedPanelCount => {
        if (!script) return { min: 0, max: 0 };

        const scenesToCount = state.selectedEpisode === 'all'
            ? script.scenes
            : script.scenes.filter(s => s.episodeNumber === state.selectedEpisode);

        let minTotal = 0, maxTotal = 0;

        scenesToCount.forEach(scene => {
            const dialogueCount = scene.dialogues?.length || 0;
            const actionLength = (scene.action || '').length;
            const characterCount = (scene.characters || []).length;

            // 🆕 使用统一的 estimatePanelCount 函数
            const estimate = estimatePanelCount(
                dialogueCount,
                actionLength,
                characterCount,
                state.panelDensityMode as DensityMode
            );
            minTotal += estimate.min;
            maxTotal += estimate.max;
        });

        return { min: minTotal, max: maxTotal };
    }, [script, state.selectedEpisode, state.panelDensityMode]);

    // 选择操作（保持 API 兼容）
    const handleToggleSelect = useCallback((panelId: string) => {
        dispatch({ type: 'SELECT_PANEL', payload: panelId });
    }, []);

    const handleSelectAll = useCallback(() => {
        const panels = getFilteredPanels();
        if (state.selectedPanels.size === panels.length && panels.length > 0) {
            dispatch({ type: 'CLEAR_SELECTION' });
        } else {
            dispatch({ type: 'SELECT_ALL', payload: panels.map(p => p.id) });
        }
    }, [getFilteredPanels, state.selectedPanels.size]);

    const handleClearSelection = useCallback(() => {
        dispatch({ type: 'CLEAR_SELECTION' });
    }, []);

    const updatePanelStatus = useCallback((id: string, status: PanelStatus) => {
        dispatch({ type: 'UPDATE_PANEL_STATUS', payload: { id, status } });
    }, []);

    const resetPanelStatuses = useCallback((ids: string[]) => {
        dispatch({ type: 'RESET_PANEL_STATUSES', payload: ids });
    }, []);

    // 保持 API 兼容的 setter 函数
    return {
        viewMode: state.viewMode,
        setViewMode: (mode: ViewMode) => dispatch({ type: 'SET_VIEW_MODE', payload: mode }),
        selectedEpisode: state.selectedEpisode,
        setSelectedEpisode: (ep: number | 'all') => dispatch({ type: 'SET_EPISODE', payload: ep }),
        panelDensityMode: state.panelDensityMode,
        setPanelDensityMode: (mode: PanelDensityMode) => dispatch({ type: 'SET_DENSITY_MODE', payload: mode }),
        selectedPanels: state.selectedPanels,
        setSelectedPanels: (panels: Set<string>) => dispatch({ type: 'SELECT_ALL', payload: Array.from(panels) }),
        enablePromptOptimization: state.enablePromptOptimization,
        setEnablePromptOptimization: (val: boolean) => dispatch({ type: 'SET_PROMPT_OPTIMIZATION', payload: val }),
        batchProgress: state.batchProgress,
        setBatchProgress: (p: { current: number; total: number } | null) => dispatch({ type: 'SET_BATCH_PROGRESS', payload: p }),
        isExtracting: state.isExtracting,
        setIsExtracting: (val: boolean) => dispatch({ type: 'SET_EXTRACTING', payload: val }),
        isGeneratingAll: state.isGeneratingAll,
        setIsGeneratingAll: (val: boolean) => dispatch({ type: 'SET_GENERATING', payload: val }),
        confirmDialogOpen: state.confirmDialogOpen,
        setConfirmDialogOpen: (val: boolean) => dispatch({ type: 'SET_CONFIRM_DIALOG', payload: val }),
        pendingEpisode: state.pendingEpisode,
        setPendingEpisode: (ep: number | 'all') => dispatch({ type: 'SET_PENDING_EPISODE', payload: ep }),
        showHistoryDialog: state.showHistoryDialog,
        setShowHistoryDialog: (val: boolean) => dispatch({ type: 'SET_HISTORY_DIALOG', payload: val }),
        allEpisodes,
        getFilteredPanels,
        getEstimatedPanelCount,
        handleToggleSelect,
        handleSelectAll,
        handleClearSelection,
        panelStatuses: state.panelStatuses,
        updatePanelStatus,
        resetPanelStatuses
    };
}

