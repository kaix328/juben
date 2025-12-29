import { useEffect, useCallback } from 'react';

interface KeyboardShortcutsConfig {
    onUndo?: () => void;
    onRedo?: () => void;
    onDelete?: () => void;
    onSelectAll?: () => void;
    onEscape?: () => void;
    onSave?: () => void;
    onCopy?: () => void;
    enabled?: boolean;
}

/**
 * 键盘快捷键 Hook
 * - Ctrl+Z: 撤销
 * - Ctrl+Y / Ctrl+Shift+Z: 重做
 * - Delete/Backspace: 删除选中
 * - Ctrl+A: 全选
 * - Escape: 取消选择
 * - Ctrl+S: 保存
 * - Ctrl+C: 复制
 */
export function useKeyboardShortcuts({
    onUndo,
    onRedo,
    onDelete,
    onSelectAll,
    onEscape,
    onSave,
    onCopy,
    enabled = true
}: KeyboardShortcutsConfig) {

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!enabled) return;

        // 忽略输入框内的快捷键
        const target = e.target as HTMLElement;
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
            // 但允许 Escape 在输入框中使用
            if (e.key !== 'Escape') return;
        }

        const isCtrl = e.ctrlKey || e.metaKey;
        const isShift = e.shiftKey;

        // Ctrl+Z: 撤销
        if (isCtrl && e.key === 'z' && !isShift) {
            e.preventDefault();
            onUndo?.();
            return;
        }

        // Ctrl+Y 或 Ctrl+Shift+Z: 重做
        if ((isCtrl && e.key === 'y') || (isCtrl && isShift && e.key === 'z')) {
            e.preventDefault();
            onRedo?.();
            return;
        }

        // Delete/Backspace: 删除
        if (e.key === 'Delete' || e.key === 'Backspace') {
            e.preventDefault();
            onDelete?.();
            return;
        }

        // Ctrl+A: 全选
        if (isCtrl && e.key === 'a') {
            e.preventDefault();
            onSelectAll?.();
            return;
        }

        // Escape: 取消选择
        if (e.key === 'Escape') {
            e.preventDefault();
            onEscape?.();
            return;
        }

        // Ctrl+S: 保存
        if (isCtrl && e.key === 's') {
            e.preventDefault();
            onSave?.();
            return;
        }

        // Ctrl+C: 复制（仅在有选中项时）
        if (isCtrl && e.key === 'c') {
            e.preventDefault();
            onCopy?.();
            return;
        }

    }, [enabled, onUndo, onRedo, onDelete, onSelectAll, onEscape, onSave, onCopy]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);
}
