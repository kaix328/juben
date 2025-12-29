import React from 'react';
import {
    Sparkles, Save, List, Grid3x3, Clock, Download, FileDown, History, Wand2, Users
} from 'lucide-react';
import { Button } from '../ui/button';
import { CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import type { Script, Storyboard } from '../../types';
import type { ExportPlatform } from '../../utils/promptGenerator';

export type ViewMode = 'list' | 'grid' | 'timeline';

interface StoryboardHeaderProps {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
    selectedEpisode: number | 'all';
    setSelectedEpisode: (ep: number | 'all') => void;
    allEpisodes: number[];
    panelDensityMode: 'compact' | 'standard' | 'detailed';
    setPanelDensityMode: (mode: 'compact' | 'standard' | 'detailed') => void;
    estimatedPanelCount: { min: number, max: number };
    isExtracting: boolean;
    script: Script | null;
    storyboard: Storyboard | null;
    filteredPanelsCount: number;
    handleAIExtractByEpisode: (ep: number | 'all') => void;
    handleBatchRegeneratePrompts: () => Promise<any>;
    handleExportStoryboard: (format: string) => void;
    handleExportPDF: () => void;
    handleExportPrompts: (platform: ExportPlatform) => void;
    handleSave: () => void;
    loadVersions: () => void;
    setShowHistoryDialog: (show: boolean) => void;
    onSyncToAssetLibrary?: () => void;  // u ud83cuddd5 ud83cuddf8 ud83cuddf7
}

export function StoryboardHeader({
    viewMode,
    setViewMode,
    selectedEpisode,
    setSelectedEpisode,
    allEpisodes,
    panelDensityMode,
    setPanelDensityMode,
    estimatedPanelCount,
    isExtracting,
    script,
    storyboard,
    filteredPanelsCount,
    handleAIExtractByEpisode,
    handleBatchRegeneratePrompts,
    handleExportStoryboard,
    handleExportPDF,
    handleExportPrompts,
    handleSave,
    loadVersions,
    setShowHistoryDialog,
    onSyncToAssetLibrary,  // ud83cu ud83cddd5 ud83cud83c
}: StoryboardHeaderProps) {
    return (
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7 border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
            <div>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    分镜制作
                </CardTitle>
                <p className="text-gray-600 text-sm mt-1">专业电影分镜设计，支持按集数筛选和AI视频生成</p>
            </div>
            <div className="flex gap-3 items-center flex-wrap justify-end">
                {/* 视图切换 */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                        className="rounded-none"
                    >
                        <List className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                        className="rounded-none"
                    >
                        <Grid3x3 className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={viewMode === 'timeline' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('timeline')}
                        className="rounded-none"
                    >
                        <Clock className="w-4 h-4" />
                    </Button>
                </div>

                {/* 集数选择器 */}
                {allEpisodes.length > 0 && (
                    <Select
                        value={selectedEpisode === 'all' ? 'all' : String(selectedEpisode)}
                        onValueChange={(value) => {
                            setSelectedEpisode(value === 'all' ? 'all' : parseInt(value));
                        }}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="选择集" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">全部集数</SelectItem>
                            {allEpisodes.map(ep => (
                                <SelectItem key={ep} value={String(ep)}>
                                    第{ep}集
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}

                {/* 🆕 分镜密度模式选择 */}
                <Select
                    value={panelDensityMode}
                    onValueChange={(value) => setPanelDensityMode(value as any)}
                >
                    <SelectTrigger className="w-[100px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="compact">精简</SelectItem>
                        <SelectItem value="standard">标准</SelectItem>
                        <SelectItem value="detailed">详细</SelectItem>
                    </SelectContent>
                </Select>

                {/* 🆕 预估分镜数显示 */}
                {script && (
                    <div
                        className="text-xs text-gray-700 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap shadow-sm"
                        title="基于当前剧本内容和提取密度预估的分镜总数"
                    >
                        <Sparkles className="w-3 h-3 text-purple-500" />
                        <span className="font-medium">预估分镜：{estimatedPanelCount.min}-{estimatedPanelCount.max} 个</span>
                    </div>
                )}

                <Button
                    onClick={() => handleAIExtractByEpisode(selectedEpisode)}
                    disabled={isExtracting || !script}
                    className="gap-2"
                    variant="secondary"
                >
                    <Sparkles className="w-4 h-4" />
                    {isExtracting ? 'AI提取中...' : `AI提取${selectedEpisode === 'all' ? '全部' : `第${selectedEpisode}集`}`}
                </Button>

                <Button
                    onClick={handleBatchRegeneratePrompts}
                    disabled={!storyboard || filteredPanelsCount === 0}
                    variant="outline"
                    className="gap-2"
                    title="根据当前分镜参数重新生成所有提示词"
                >
                    <Wand2 className="w-4 h-4" />
                    刷新提示词
                </Button>

                {/* ud83cuddd5 ud83cud83c 同步到项目库 */}
                {onSyncToAssetLibrary && (
                    <Button
                        onClick={onSyncToAssetLibrary}
                        disabled={!storyboard || filteredPanelsCount === 0}
                        variant="outline"
                        className="gap-2 border-teal-200 text-teal-700 hover:bg-teal-50"
                        title="从分镜提取新角色/场景到项目库"
                    >
                        <Users className="w-4 h-4" />
                        同步到项目库
                    </Button>
                )}

                <Button
                    onClick={() => handleExportStoryboard('text')}
                    disabled={!storyboard}
                    variant="outline"
                    className="gap-2"
                >
                    <Download className="w-4 h-4" />
                    导出
                </Button>

                <Button
                    onClick={handleExportPDF}
                    disabled={!storyboard}
                    variant="outline"
                    className="gap-2"
                    title="打印或导出为 PDF"
                >
                    <FileDown className="w-4 h-4" />
                    PDF
                </Button>

                <Select
                    onValueChange={(value) => handleExportPrompts(value as ExportPlatform)}
                >
                    <SelectTrigger className="w-[140px]" disabled={!storyboard}>
                        <FileDown className="w-4 h-4 mr-2" />
                        导出提示词
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="generic">通用格式</SelectItem>
                        <SelectItem value="midjourney">Midjourney</SelectItem>
                        <SelectItem value="comfyui">ComfyUI</SelectItem>
                        <SelectItem value="runway">Runway</SelectItem>
                        <SelectItem value="pika">Pika</SelectItem>
                    </SelectContent>
                </Select>

                <Button onClick={handleSave} disabled={!storyboard} className="gap-2">
                    <Save className="w-4 h-4" />
                    保存
                </Button>

                <Button
                    onClick={() => { loadVersions(); setShowHistoryDialog(true); }}
                    disabled={!storyboard}
                    variant="outline"
                    className="gap-2"
                    title="版本历史"
                >
                    <History className="w-4 h-4" />
                    版本
                </Button>
            </div>
        </CardHeader>
    );
}
