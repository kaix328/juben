// 剧本编辑快捷键 Hook
import { useEffect, useCallback } from 'react';

interface UseKeyboardShortcutsOptions {
    onSave?: () => void;
    onUndo?: () => void;
    onRedo?: () => void;
    onAddScene?: () => void;
    onToggleStats?: () => void;
    onToggleBatchMode?: () => void;
    enabled?: boolean;
}

export function useKeyboardShortcuts({
    onSave,
    onUndo,
    onRedo,
    onAddScene,
    onToggleStats,
    onToggleBatchMode,
    enabled = true,
}: UseKeyboardShortcutsOptions) {
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (!enabled) return;

            // 忽略输入框中的快捷键（除了 Ctrl 组合键）
            const target = event.target as HTMLElement;
            const isInputField =
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.isContentEditable;

            // Ctrl/Cmd 组合键
            const isCtrlOrCmd = event.ctrlKey || event.metaKey;

            if (isCtrlOrCmd) {
                switch (event.key.toLowerCase()) {
                    case 's':
                        // Ctrl+S: 保存
                        event.preventDefault();
                        onSave?.();
                        break;

                    case 'z':
                        if (event.shiftKey) {
                            // Ctrl+Shift+Z: 重做
                            event.preventDefault();
                            onRedo?.();
                        } else {
                            // Ctrl+Z: 撤销
                            event.preventDefault();
                            onUndo?.();
                        }
                        break;

                    case 'y':
                        // Ctrl+Y: 重做（Windows 风格）
                        event.preventDefault();
                        onRedo?.();
                        break;

                    case 'enter':
                        // Ctrl+Enter: 添加新场景
                        if (!isInputField) {
                            event.preventDefault();
                            onAddScene?.();
                        }
                        break;

                    case 'i':
                        // Ctrl+I: 切换统计面板
                        if (!isInputField) {
                            event.preventDefault();
                            onToggleStats?.();
                        }
                        break;

                    case 'b':
                        // Ctrl+B: 切换批量模式
                        if (!isInputField) {
                            event.preventDefault();
                            onToggleBatchMode?.();
                        }
                        break;
                }
            }

            // Escape 键：取消批量模式
            if (event.key === 'Escape' && !isInputField) {
                onToggleBatchMode?.();
            }
        },
        [enabled, onSave, onUndo, onRedo, onAddScene, onToggleStats, onToggleBatchMode]
    );

    useEffect(() => {
        if (enabled) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [enabled, handleKeyDown]);
}

// 快捷键提示组件
export const SHORTCUT_HINTS = [
    { key: 'Ctrl+S', action: '保存' },
    { key: 'Ctrl+Z', action: '撤销' },
    { key: 'Ctrl+Shift+Z', action: '重做' },
    { key: 'Ctrl+Enter', action: '添加场景' },
    { key: 'Ctrl+I', action: '统计面板' },
    { key: 'Ctrl+B', action: '批量模式' },
    { key: 'Esc', action: '取消选择' },
];
