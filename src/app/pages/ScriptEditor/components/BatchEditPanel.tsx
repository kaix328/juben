// 批量编辑面板组件 - 使用受控组件替代 DOM 操作
import React, { memo, useState } from 'react';
import { Edit3, Trash2, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import type { BatchUpdateValues } from '../types';

interface BatchEditPanelProps {
    selectedCount: number;
    onUpdate: (updates: BatchUpdateValues) => void;
    onDelete: () => void;
    onClose: () => void;
}

export const BatchEditPanel = memo(function BatchEditPanel({
    selectedCount,
    onUpdate,
    onDelete,
    onClose
}: BatchEditPanelProps) {
    // 使用受控组件状态
    const [batchEpisode, setBatchEpisode] = useState('');

    const handleApplyEpisode = () => {
        const value = parseInt(batchEpisode);
        if (value > 0) {
            onUpdate({ episodeNumber: value });
            setBatchEpisode('');
        }
    };

    return (
        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Edit3 className="w-5 h-5" />
                    批量修改设置
                    <span className="text-sm font-normal text-orange-600">
                        （已选 {selectedCount} 个场景）
                    </span>
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <X className="w-4 h-4" />
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* 批量设置集数 - 使用受控组件 */}
                    <div className="space-y-2">
                        <Label className="text-sm">批量设置集数</Label>
                        <div className="flex gap-2">
                            <Input
                                type="number"
                                placeholder="集数"
                                value={batchEpisode}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBatchEpisode(e.target.value)}
                                className="h-9"
                                min="1"
                            />
                            <Button
                                size="sm"
                                onClick={handleApplyEpisode}
                                disabled={!batchEpisode || parseInt(batchEpisode) <= 0}
                            >
                                应用
                            </Button>
                        </div>
                    </div>

                    {/* 批量设置时间 */}
                    <div className="space-y-2">
                        <Label className="text-sm">批量设置时间</Label>
                        <Select onValueChange={(value: string) => onUpdate({ timeOfDay: value })}>
                            <SelectTrigger className="h-9">
                                <SelectValue placeholder="选择时间" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="白天">白天</SelectItem>
                                <SelectItem value="夜晚">夜晚</SelectItem>
                                <SelectItem value="黄昏">黄昏</SelectItem>
                                <SelectItem value="清晨">清晨</SelectItem>
                                <SelectItem value="傍晚">傍晚</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* 批量设置内/外景 */}
                    <div className="space-y-2">
                        <Label className="text-sm">批量设置内/外景</Label>
                        <Select onValueChange={(value: string) => onUpdate({ sceneType: value as 'INT' | 'EXT' })}>
                            <SelectTrigger className="h-9">
                                <SelectValue placeholder="选择类型" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="INT">INT（内景）</SelectItem>
                                <SelectItem value="EXT">EXT（外景）</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* 批量设置转场 */}
                    <div className="space-y-2">
                        <Label className="text-sm">批量设置转场</Label>
                        <Select onValueChange={(value: string) => onUpdate({ transition: value === 'none' ? undefined : value })}>
                            <SelectTrigger className="h-9">
                                <SelectValue placeholder="选择转场" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">无转场</SelectItem>
                                <SelectItem value="切至">切至</SelectItem>
                                <SelectItem value="淡入">淡入</SelectItem>
                                <SelectItem value="淡出">淡出</SelectItem>
                                <SelectItem value="溶至">溶至</SelectItem>
                                <SelectItem value="化至">化至</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* 批量删除按钮 */}
                <div className="flex justify-end pt-2 border-t border-orange-200">
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={onDelete}
                        className="gap-2"
                    >
                        <Trash2 className="w-4 h-4" />
                        批量删除选中场景
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
});
