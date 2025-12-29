import React, { useMemo, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { StoryboardHeader } from '../../components/storyboard/StoryboardHeader';
import { ShotCard } from '../../components/storyboard/ShotCard';
import { BatchActionBar } from '../../components/storyboard/BatchActionBar';
import { TimelineView } from './components/TimelineView';
import { VersionHistoryDialog } from './components/VersionHistoryDialog';
import { PreviewDialog } from './components/PreviewDialog';
import { StoryboardPrintTemplate } from './components/StoryboardPrintTemplate';  // 🆕 PDF打印模板
import { DraggablePanelList } from './components/DraggablePanelList';  // 🆕 拖拽排序
import { useStoryboardData } from './hooks/useStoryboardData';
import { useStoryboardUI } from './hooks/useStoryboardUI';
import { useStoryboardActions } from './hooks/useStoryboardActions';
import { useStoryboardHistory } from './hooks/useStoryboardHistory';  // 🆕 撤销/重做
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';  // 🆕 键盘快捷键
import '../../styles/print.css';  // 🆕 打印样式表
import type { StoryboardPanel } from '../../types';
import type { ViewMode } from './types';

export function StoryboardEditor() {
    const { chapterId } = useParams<{ chapterId: string }>();

    // 1. 数据层
    const {
        script,
        storyboard,
        setStoryboard,  // 🆕 for undo/redo
        project,
        assets,
        handleSave,
        handleUpdateAssets,  // 🆕 用于反向同步
        handleAIExtractByEpisode,
        handleAddPanel,
        handleApplyTemplate,
        handleDeletePanel,
        handleUpdatePanel,
        movePanel,
        versions,
        loadVersions,
        handleRestoreVersion,
        handleDeleteVersion,
        handleSaveVersion   // 🆕 保存版本
    } = useStoryboardData({ chapterId });

    // 2. UI 状态层
    const {
        viewMode,
        setViewMode,
        selectedEpisode,
        setSelectedEpisode,
        panelDensityMode,
        setPanelDensityMode,
        selectedPanels,
        enablePromptOptimization,
        setEnablePromptOptimization,
        batchProgress,
        setBatchProgress,
        isExtracting,
        setIsExtracting,
        isGeneratingAll,
        setIsGeneratingAll,
        showHistoryDialog,
        setShowHistoryDialog,
        allEpisodes,
        getFilteredPanels,
        handleToggleSelect,
        handleSelectAll,
        handleClearSelection,
        panelStatuses,
        updatePanelStatus,
        resetPanelStatuses,
        getEstimatedPanelCount
    } = useStoryboardUI({ script, storyboard });

    // 3. 操作层
    const {
        handleBatchRegeneratePrompts,
        handleGenerateAllImages,
        handleGenerateImage,
        handleCopyPanel,
        handleSplitPanel,
        handleBatchDelete,
        handleBatchApplyParams,
        handleApplyPreset,
        handleExportStoryboard,
        handleExportPrompts,
        handleExportPDF,
        handleCopyPrompt,
        handleGeneratePrompts,
        handleSyncToAssetLibrary,  // 🆕 反向同步
        cancelAllTasks,      // 🆕 取消所有任务
        retryFailedTasks,    // 🆕 重试失败任务
        getQueueStats        // 🆕 获取队列状态
    } = useStoryboardActions({
        storyboard,
        script,
        project,
        assets,
        onUpdateStoryboard: handleSave,
        onUpdateAssets: handleUpdateAssets,  // 🆕 自动保存资产
        updatePanelStatus
    });

    // 🆕 4. 撤销/重做 + 自动保存
    const {
        pushHistory,
        undo,
        redo,
        canUndo,
        canRedo,
        isDirty,
        saveAndMark
    } = useStoryboardHistory({
        storyboard,
        onSave: handleSave,
        autoSaveInterval: 30000  // 30秒自动保存
    });

    // 🆕 处理撤销
    const handleUndo = useCallback(() => {
        const prev = undo();
        if (prev) {
            setStoryboard(prev);
            toast.success('已撤销');
        }
    }, [undo, setStoryboard]);

    // 🆕 处理重做
    const handleRedo = useCallback(() => {
        const next = redo();
        if (next) {
            setStoryboard(next);
            toast.success('已重做');
        }
    }, [redo, setStoryboard]);

    // 🆕 处理手动保存
    const handleManualSave = useCallback(async () => {
        if (storyboard) {
            const success = await saveAndMark(storyboard);
            if (success) toast.success('已保存');
        }
    }, [storyboard, saveAndMark]);

    // 🆕 5. 键盘快捷键
    useKeyboardShortcuts({
        onUndo: handleUndo,
        onRedo: handleRedo,
        onDelete: () => {
            if (selectedPanels.size > 0) {
                handleBatchDelete(selectedPanels);
            }
        },
        onSelectAll: handleSelectAll,
        onEscape: handleClearSelection,
        onSave: handleManualSave,
        enabled: true
    });

    // 计算衍生数据
    const filteredPanels = useMemo(() => getFilteredPanels(), [getFilteredPanels]);
    const totalDuration = useMemo(() =>
        filteredPanels.reduce((acc, p) => acc + (p.duration || 0), 0)
        , [filteredPanels]);

    const estimatedPanelCount = useMemo(() => getEstimatedPanelCount(), [getEstimatedPanelCount]);

    // 🆕 预览对话框状态
    const [showPreviewDialog, setShowPreviewDialog] = useState(false);

    if (!script) return <div className="p-8 text-center text-gray-500 font-medium">正在加载剧本数据...</div>;

    return (
        <div className="min-h-screen bg-gray-50/50 pb-32">
            {/* 顶栏 */}
            <StoryboardHeader
                viewMode={viewMode as any}
                setViewMode={setViewMode as any}
                selectedEpisode={selectedEpisode}
                setSelectedEpisode={setSelectedEpisode}
                allEpisodes={allEpisodes}
                panelDensityMode={panelDensityMode}
                setPanelDensityMode={setPanelDensityMode}
                estimatedPanelCount={estimatedPanelCount}
                isExtracting={isExtracting}
                script={script}
                storyboard={storyboard}
                filteredPanelsCount={filteredPanels.length}
                handleAIExtractByEpisode={(ep) => handleAIExtractByEpisode(
                    ep,
                    panelDensityMode,
                    () => setIsExtracting(true),
                    () => setIsExtracting(false)
                )}
                handleBatchRegeneratePrompts={async () => {
                    await handleBatchRegeneratePrompts(
                        selectedPanels,
                        enablePromptOptimization,
                        (curr: number, tot: number) => setBatchProgress({ current: curr, total: tot }),
                        () => setBatchProgress(null)
                    );
                }}
                handleExportStoryboard={handleExportStoryboard}
                handleExportPDF={handleExportPDF}
                handleExportPrompts={handleExportPrompts}
                handleSave={() => storyboard && handleSave(storyboard)}
                loadVersions={loadVersions}
                setShowHistoryDialog={setShowHistoryDialog}
                onSyncToAssetLibrary={handleSyncToAssetLibrary}  // 🆕 现在自动保存
            />

            <main className="w-full px-6 py-8">
                {/* 视图内容 */}
                {(viewMode === 'list' || viewMode === 'grid') && (
                    <div className={viewMode === 'list' ? "space-y-6" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"}>
                        {filteredPanels.map((panel, idx) => (
                            <ShotCard
                                key={panel.id}
                                panel={panel}
                                index={idx}
                                isSelected={selectedPanels.has(panel.id)}
                                status={panelStatuses[panel.id]}
                                onSelect={() => handleToggleSelect(panel.id)}
                                onUpdate={(params: Partial<StoryboardPanel>) => handleUpdatePanel(panel.id, params)}
                                onDelete={() => handleDeletePanel(panel.id)}
                                onGenerateImage={async () => await handleGenerateImage(panel)}
                                onCopy={() => handleCopyPanel(panel)}
                                onSplit={(count: number) => handleSplitPanel(panel.id, count)}
                                onGeneratePrompts={() => handleGeneratePrompts(panel)}
                                onApplyPreset={(params: Partial<StoryboardPanel>) => handleApplyPreset(panel.id, params)}
                                onCopyPrompt={handleCopyPrompt}
                                viewMode={viewMode as 'list' | 'grid'}
                                densityMode={panelDensityMode}
                            />
                        ))}
                    </div>
                )}

                {/* 时间轴视图 */}
                {viewMode === 'timeline' && (
                    <TimelineView
                        panels={filteredPanels}
                        selectedPanels={selectedPanels}
                        onToggleSelect={handleToggleSelect}
                        renderListView={() => (
                            <div className="space-y-6 mt-8">
                                {filteredPanels.map((panel, idx) => (
                                    <ShotCard
                                        key={panel.id}
                                        panel={panel}
                                        index={idx}
                                        isSelected={selectedPanels.has(panel.id)}
                                        status={panelStatuses[panel.id]}
                                        onSelect={() => handleToggleSelect(panel.id)}
                                        onUpdate={(params: Partial<StoryboardPanel>) => handleUpdatePanel(panel.id, params)}
                                        onDelete={() => handleDeletePanel(panel.id)}
                                        onGenerateImage={async () => await handleGenerateImage(panel)}
                                        onCopy={() => handleCopyPanel(panel)}
                                        onSplit={(count: number) => handleSplitPanel(panel.id, count)}
                                        onGeneratePrompts={() => handleGeneratePrompts(panel)}
                                        onApplyPreset={(params: Partial<StoryboardPanel>) => handleApplyPreset(panel.id, params)}
                                        onCopyPrompt={handleCopyPrompt}
                                        viewMode="list"
                                        densityMode={panelDensityMode}
                                    />
                                ))}
                            </div>
                        )}
                    />
                )}
            </main>

            {/* 底部操作条 */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
                <div className="w-full px-6 pointer-events-auto">
                    <BatchActionBar
                        filteredPanelsCount={filteredPanels.length}
                        totalDuration={totalDuration}
                        selectedPanelsSize={selectedPanels.size}
                        selectedEpisode={selectedEpisode}
                        handleSelectAll={handleSelectAll}
                        handleBatchDelete={() => handleBatchDelete(selectedPanels)}
                        handleBatchApplyParams={(params) => handleBatchApplyParams(selectedPanels, params)}
                        handleGenerateAllImages={handleGenerateAllImages}
                        handleAddPanel={handleAddPanel}
                        handleApplyTemplate={handleApplyTemplate}
                        handleRefreshAllPrompts={async () => {
                            const allIds = new Set(filteredPanels.map(p => p.id));
                            await handleBatchRegeneratePrompts(
                                allIds,
                                enablePromptOptimization,
                                (curr, tot) => setBatchProgress({ current: curr, total: tot }),
                                () => setBatchProgress(null)
                            );
                        }}
                        onPreview={() => setShowPreviewDialog(true)}
                        isGeneratingAll={isGeneratingAll}
                        batchProgress={batchProgress}
                        filteredPanelIds={filteredPanels.map(p => p.id)}  // 🆕 传递分镜 ID 列表
                        onCancelGeneration={() => {
                            cancelAllTasks();
                            setIsGeneratingAll(false);
                            setBatchProgress(null);
                        }}
                        onRetryFailed={() => {
                            setIsGeneratingAll(true);
                            retryFailedTasks();
                        }}
                        failedCount={getQueueStats().failed}
                    />
                </div>
            </div>

            {/* 版本历史 */}
            <VersionHistoryDialog
                open={showHistoryDialog}
                onOpenChange={setShowHistoryDialog}
                versions={versions}
                onRestore={handleRestoreVersion}
                onDelete={handleDeleteVersion}
                onSave={handleSaveVersion}  // 🆕 保存版本
                onLoadVersions={loadVersions}  // 🆕 异步加载版本
            />

            {/* 🆕 预览播放对话框 */}
            <PreviewDialog
                open={showPreviewDialog}
                onOpenChange={setShowPreviewDialog}
                panels={filteredPanels}
            />

            {/* 🆕 PDF打印模板（屏幕隐藏，打印时显示） */}
            <StoryboardPrintTemplate
                panels={filteredPanels}
                project={project || undefined}
                title={project?.title}
            />
        </div>
    );
};
