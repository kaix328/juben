import React from 'react';
import { Check, Trash2, Settings2, Wand2, Plus, Layers, RefreshCw, Play, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { QUICK_PRESETS, SCENE_TEMPLATES } from '../../pages/StoryboardEditor/presets';
import type { StoryboardPanel } from '../../types';

interface BatchActionBarProps {
    filteredPanelsCount: number;
    totalDuration: number;
    selectedPanelsSize: number;
    selectedEpisode: number | 'all';
    handleSelectAll: () => void;
    handleBatchDelete: () => void;
    handleBatchApplyParams: (params: any) => void;
    handleGenerateAllImages: (ids: Set<string>, onProgress?: (c: number, t: number) => void, onComplete?: () => void) => void;
    handleAddPanel: () => void;
    handleApplyTemplate: (panels: Partial<StoryboardPanel>[]) => void;
    handleRefreshAllPrompts: () => void;
    onPreview: () => void;
    isGeneratingAll: boolean;
    batchProgress: { current: number, total: number } | null;
    filteredPanelIds: string[];  // 🆕 所有当前筛选的分镜 ID
    onCancelGeneration?: () => void;  // 🆕 取消生成
    onRetryFailed?: () => void;       // 🆕 重试失败
    failedCount?: number;              // 🆕 失败数量
}

export function BatchActionBar({
    filteredPanelsCount,
    totalDuration,
    selectedPanelsSize,
    selectedEpisode,
    handleSelectAll,
    handleBatchDelete,
    handleBatchApplyParams,
    handleGenerateAllImages,
    handleAddPanel,
    handleApplyTemplate,
    handleRefreshAllPrompts,
    onPreview,
    isGeneratingAll,
    batchProgress,
    filteredPanelIds,  // 🆕
    onCancelGeneration,  // 🆕
    onRetryFailed,       // 🆕
    failedCount = 0,     // 🆕
}: BatchActionBarProps) {
    if (filteredPanelsCount === 0) return null;

    return (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-sm text-gray-600">分镜总数</p>
                        <p className="text-2xl">{filteredPanelsCount}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">总时长</p>
                        <p className="text-2xl">
                            {Math.floor(totalDuration / 60)}分
                            {totalDuration % 60}秒
                        </p>
                    </div>
                    {selectedPanelsSize > 0 && (
                        <div>
                            <p className="text-sm text-gray-600">已选择</p>
                            <p className="text-2xl text-blue-600">{selectedPanelsSize}</p>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                    {selectedEpisode !== 'all' && (
                        <div className="text-sm text-blue-600">
                            正在查看第{selectedEpisode}集
                        </div>
                    )}

                    {/* 新增分镜按钮 */}
                    <Button
                        onClick={handleAddPanel}
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-green-50 border-green-300 text-green-700 hover:bg-green-100"
                    >
                        <Plus className="w-4 h-4" />
                        新增分镜
                    </Button>

                    {/* 🆕 场景模板下拉 */}
                    <Select
                        onValueChange={(value) => {
                            const template = SCENE_TEMPLATES.find(t => t.name === value);
                            if (template) {
                                handleApplyTemplate(template.panels);
                            }
                        }}
                    >
                        <SelectTrigger className="w-[140px] h-9 bg-purple-50 border-purple-300 text-purple-700">
                            <Layers className="w-4 h-4 mr-2" />
                            <SelectValue placeholder="应用模板" />
                        </SelectTrigger>
                        <SelectContent>
                            {SCENE_TEMPLATES.map(template => (
                                <SelectItem key={template.name} value={template.name}>
                                    <div>
                                        <div className="font-medium">{template.name}</div>
                                        <div className="text-xs text-gray-500">{template.panels.length}个分镜</div>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* 🆕 刷新全部提示词 */}
                    <Button
                        onClick={handleRefreshAllPrompts}
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100"
                    >
                        <RefreshCw className="w-4 h-4" />
                        刷新全部提示词
                    </Button>

                    {/* 🆕 预览播放按钮 */}
                    <Button
                        onClick={onPreview}
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100"
                    >
                        <Play className="w-4 h-4" />
                        预览播放
                    </Button>

                    {/* 批量操作按钮 */}
                    <Button
                        onClick={handleSelectAll}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                    >
                        <Check className="w-4 h-4" />
                        {selectedPanelsSize === filteredPanelsCount ? '取消全选' : '全选'}
                    </Button>

                    {selectedPanelsSize > 0 && (
                        <>
                            <Button
                                onClick={handleBatchDelete}
                                variant="outline"
                                size="sm"
                                className="gap-2 text-red-600 border-red-300 hover:bg-red-50"
                            >
                                <Trash2 className="w-4 h-4" />
                                批量删除
                            </Button>

                            {/* 批量应用预设 */}
                            <Select
                                onValueChange={(value) => {
                                    const preset = QUICK_PRESETS.find(p => p.name === value);
                                    if (preset) {
                                        handleBatchApplyParams(preset.params);
                                    }
                                }}
                            >
                                <SelectTrigger className="w-[150px] h-9">
                                    <Settings2 className="w-4 h-4 mr-2" />
                                    <SelectValue placeholder="批量应用" />
                                </SelectTrigger>
                                <SelectContent>
                                    {QUICK_PRESETS.map(preset => (
                                        <SelectItem key={preset.name} value={preset.name}>
                                            {preset.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </>
                    )}

                    {/* 一键生成全部按钮 */}
                    <Button
                        onClick={() => {
                            // 🆕 使用父组件传入的分镜 ID 列表
                            const ids = new Set<string>(filteredPanelIds);
                            handleGenerateAllImages(ids);
                        }}
                        disabled={isGeneratingAll}
                        variant="default"
                        className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 font-medium"
                        size="sm"
                    >
                        <Wand2 className="w-4 h-4" />
                        {isGeneratingAll && batchProgress
                            ? `生成中 ${batchProgress.current}/${batchProgress.total}`
                            : '一键生成全部预览图'}
                    </Button>

                    {/* 🆕 批量生成进度条 */}
                    {batchProgress && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
                                    style={{ width: `${(batchProgress.current / batchProgress.total) * 100}%` }}
                                />
                            </div>
                            <span>{Math.round((batchProgress.current / batchProgress.total) * 100)}%</span>
                        </div>
                    )}

                    {/* 🆕 取消生成按钮 */}
                    {isGeneratingAll && onCancelGeneration && (
                        <Button
                            onClick={onCancelGeneration}
                            variant="outline"
                            size="sm"
                            className="gap-2 text-red-600 border-red-300 hover:bg-red-50"
                        >
                            <XCircle className="w-4 h-4" />
                            取消生成
                        </Button>
                    )}

                    {/* 🆕 重试失败按钮 */}
                    {!isGeneratingAll && failedCount > 0 && onRetryFailed && (
                        <Button
                            onClick={onRetryFailed}
                            variant="outline"
                            size="sm"
                            className="gap-2 text-orange-600 border-orange-300 hover:bg-orange-50"
                        >
                            <RotateCcw className="w-4 h-4" />
                            重试失败 ({failedCount})
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
