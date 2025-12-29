import { useState, useCallback, useRef, useEffect } from 'react';
import type { Storyboard } from '../../../types';

const MAX_HISTORY_SIZE = 30;

interface UseStoryboardHistoryProps {
    storyboard: Storyboard | null;
    onSave: (storyboard: Storyboard) => Promise<boolean>;
    autoSaveInterval?: number;  // 自动保存间隔（毫秒），0表示禁用
}

export function useStoryboardHistory({
    storyboard,
    onSave,
    autoSaveInterval = 30000  // 默认30秒
}: UseStoryboardHistoryProps) {
    // 历史栈
    const [history, setHistory] = useState<Storyboard[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isDirty, setIsDirty] = useState(false);
    const lastSavedRef = useRef<string>('');
    const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // 初始化历史
    useEffect(() => {
        if (storyboard && history.length === 0) {
            setHistory([storyboard]);
            setHistoryIndex(0);
            lastSavedRef.current = JSON.stringify(storyboard);
        }
    }, [storyboard, history.length]);

    // 推入历史栈
    const pushHistory = useCallback((newStoryboard: Storyboard) => {
        setHistory(prev => {
            // 清除当前位置之后的历史
            const trimmed = prev.slice(0, historyIndex + 1);
            // 添加新状态
            const updated = [...trimmed, newStoryboard];
            // 限制历史大小
            if (updated.length > MAX_HISTORY_SIZE) {
                return updated.slice(-MAX_HISTORY_SIZE);
            }
            return updated;
        });
        setHistoryIndex(prev => Math.min(prev + 1, MAX_HISTORY_SIZE - 1));

        // 检查是否有未保存的更改
        const currentJson = JSON.stringify(newStoryboard);
        setIsDirty(currentJson !== lastSavedRef.current);
    }, [historyIndex]);

    // 撤销
    const undo = useCallback((): Storyboard | null => {
        if (historyIndex <= 0) return null;
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        return history[newIndex] || null;
    }, [history, historyIndex]);

    // 重做
    const redo = useCallback((): Storyboard | null => {
        if (historyIndex >= history.length - 1) return null;
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        return history[newIndex] || null;
    }, [history, historyIndex]);

    // 可撤销/重做状态
    const canUndo = historyIndex > 0;
    const canRedo = historyIndex < history.length - 1;

    // 保存并更新最后保存状态
    const saveAndMark = useCallback(async (sb: Storyboard) => {
        const success = await onSave(sb);
        if (success) {
            lastSavedRef.current = JSON.stringify(sb);
            setIsDirty(false);
        }
        return success;
    }, [onSave]);

    // 自动保存
    useEffect(() => {
        if (autoSaveInterval <= 0 || !isDirty) return;

        autoSaveTimerRef.current = setTimeout(async () => {
            const currentStoryboard = history[historyIndex];
            if (currentStoryboard && isDirty) {
                console.log('[AutoSave] Saving storyboard...');
                await saveAndMark(currentStoryboard);
            }
        }, autoSaveInterval);

        return () => {
            if (autoSaveTimerRef.current) {
                clearTimeout(autoSaveTimerRef.current);
            }
        };
    }, [autoSaveInterval, isDirty, history, historyIndex, saveAndMark]);

    // 离开页面前提示
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = '您有未保存的更改，确定要离开吗？';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    return {
        pushHistory,
        undo,
        redo,
        canUndo,
        canRedo,
        isDirty,
        saveAndMark,
        historyLength: history.length,
        currentIndex: historyIndex
    };
}
