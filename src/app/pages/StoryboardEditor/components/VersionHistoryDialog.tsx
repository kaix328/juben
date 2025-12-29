import React, { useState, useEffect } from 'react';
import { History, Clock, Check, Trash2, Save, Plus, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

interface Version {
    id: string;
    name: string;
    timestamp?: number;    // 兼容旧格式
    createdAt?: string;    // 🆕 新格式
    panelCount?: number;
    data?: any;            // 🆕 版本数据（用于获取分镜数）
}

interface VersionHistoryDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    versions: Version[];
    onRestore: (versionId: string) => void;
    onDelete: (versionId: string) => void;
    onSave?: (versionName?: string) => void;  // 🆕 保存版本
    onLoadVersions?: () => Promise<void>;     // 🆕 加载版本（异步）
}

export const VersionHistoryDialog: React.FC<VersionHistoryDialogProps> = ({
    open,
    onOpenChange,
    versions,
    onRestore,
    onDelete,
    onSave,
    onLoadVersions
}) => {
    const [versionName, setVersionName] = useState('');
    const [showNameInput, setShowNameInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // 🆕 对话框打开时异步加载版本
    useEffect(() => {
        if (open && onLoadVersions) {
            setIsLoading(true);
            // 使用 requestAnimationFrame 确保对话框动画先执行
            requestAnimationFrame(() => {
                onLoadVersions().finally(() => setIsLoading(false));
            });
        }
    }, [open, onLoadVersions]);

    // 🆕 统一时间显示
    const formatTime = (v: Version) => {
        if (v.createdAt) {
            return new Date(v.createdAt).toLocaleString('zh-CN');
        }
        if (v.timestamp) {
            return new Date(v.timestamp).toLocaleString('zh-CN');
        }
        return '未知时间';
    };

    // 🆕 获取分镜数
    const getPanelCount = (v: Version) => {
        if (v.panelCount !== undefined) return v.panelCount;
        if (v.data?.panels) return v.data.panels.length;
        return 0;
    };

    // 🆕 保存版本
    const handleSave = () => {
        if (onSave) {
            onSave(versionName || undefined);
            setVersionName('');
            setShowNameInput(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <History className="w-5 h-5 text-blue-500" />
                        版本历史管理
                    </DialogTitle>
                    <DialogDescription>
                        保存当前版本或恢复到之前的历史版本。注意：恢复操作会替换当前内容。
                    </DialogDescription>
                </DialogHeader>

                {/* 🆕 保存新版本区域 */}
                {onSave && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 space-y-3">
                        <div className="text-sm font-medium text-blue-800">保存当前版本</div>
                        {showNameInput ? (
                            <div className="flex gap-2">
                                <Input
                                    value={versionName}
                                    onChange={(e) => setVersionName(e.target.value)}
                                    placeholder="输入版本名称（可选）"
                                    className="flex-1"
                                />
                                <Button onClick={handleSave} size="sm" className="gap-1">
                                    <Save className="w-4 h-4" />保存
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => setShowNameInput(false)}>
                                    取消
                                </Button>
                            </div>
                        ) : (
                            <Button onClick={() => setShowNameInput(true)} variant="outline" className="gap-1 w-full">
                                <Plus className="w-4 h-4" />创建新版本
                            </Button>
                        )}
                    </div>
                )}

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {isLoading ? (
                        <div className="text-center py-8 text-gray-500 flex flex-col items-center gap-2">
                            <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
                            <span>加载版本中...</span>
                        </div>
                    ) : versions.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            暂无历史版本记录
                        </div>
                    ) : (
                        versions.map((v) => (
                            <div
                                key={v.id}
                                className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">{v.name}</div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            {formatTime(v)} • {getPanelCount(v)} 个分镜
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 gap-1"
                                        onClick={() => onRestore(v.id)}
                                    >
                                        <Check className="w-3.5 h-3.5" />
                                        恢复
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                                        onClick={() => onDelete(v.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        关闭
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
