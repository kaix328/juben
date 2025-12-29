// ScriptEditor 主组件 - 模块化重构版本
import { useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
    Sparkles, Save, Plus, FilmIcon, BarChart3, Download,
    CheckSquare, Undo2, Redo2, Replace
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '../../components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { toast } from 'sonner';

// 导入模块化组件
import { useScriptData } from './hooks/useScriptData';
import { useScriptStats, getAllEpisodes, getFilteredScenes } from './hooks/useScriptStats';
import { useKeyboardShortcuts, SHORTCUT_HINTS } from './hooks/useKeyboardShortcuts';
import { StatsPanel } from './components/StatsPanel';
import { BatchEditPanel } from './components/BatchEditPanel';
import { EpisodeFilter } from './components/EpisodeFilter';
import { SceneCard } from './components/SceneCard';
import { ExtractProgressIndicator } from './components/ExtractProgressIndicator';
import { CharacterStats } from './components/CharacterStats';
import { PageCounter } from './components/PageCounter';

// 导入工具函数
import { exportScriptToMarkdown, exportScriptToText, downloadText } from '../../utils/exportUtils';

// 导入类型
import type { ScriptScene } from './types';

export function ScriptEditor() {
    const { chapterId } = useParams<{ chapterId: string }>();

    // 使用数据管理 Hook
    const {
        chapter,
        script,
        isExtracting,
        extractProgress,
        lastSaved,
        canUndo,
        canRedo,
        handleAIExtract,
        handleSave,
        handleUpdateScene,
        handleAddScene,
        handleDeleteScene,
        handleAddDialogue,
        handleUpdateDialogue,
        handleDeleteDialogue,
        handleBatchUpdate,
        handleBatchDelete,
        handleUpdateScript,
        handleUpdateScenes,
        undo,
        redo,
    } = useScriptData({ chapterId });

    // 使用统计 Hook
    const stats = useScriptStats({ script });

    // 局部 UI 状态
    const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');
    const [selectedEpisode, setSelectedEpisode] = useState<number | 'all'>('all');
    const [showStats, setShowStats] = useState(true);
    const [batchMode, setBatchMode] = useState(false);
    const [selectedScenes, setSelectedScenes] = useState<Set<string>>(new Set());
    const [showBatchPanel, setShowBatchPanel] = useState(false);
    const [showCharacterStats, setShowCharacterStats] = useState(false);
    // 🆕 查找替换
    const [showReplaceDialog, setShowReplaceDialog] = useState(false);
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');

    // 注册快捷键
    useKeyboardShortcuts({
        onSave: handleSave,
        onUndo: undo,
        onRedo: redo,
        onAddScene: handleAddScene,
        onToggleStats: () => setShowStats(prev => !prev),
        onToggleBatchMode: () => batchMode ? exitBatchMode() : setBatchMode(true),
        enabled: viewMode === 'edit',
    });

    // 获取所有集数
    const episodes = useMemo(() => getAllEpisodes(script), [script]);

    // 获取筛选后的场景
    const filteredScenes = useMemo(
        () => getFilteredScenes(script, selectedEpisode),
        [script, selectedEpisode]
    );

    // 获取集数时长
    const getEpisodeDuration = useCallback((ep: number): string => {
        if (!stats) return '0秒';
        return stats.episodeDurations.get(ep) || '0秒';
    }, [stats]);

    // 格式化场景标题
    const formatSceneHeading = useCallback((scene: ScriptScene) => {
        return `${scene.sceneNumber}. ${scene.sceneType}. ${scene.location} - ${scene.timeOfDay}`;
    }, []);

    // 批量选择操作
    const toggleSceneSelection = useCallback((sceneId: string) => {
        setSelectedScenes(prev => {
            const next = new Set(prev);
            if (next.has(sceneId)) {
                next.delete(sceneId);
            } else {
                next.add(sceneId);
            }
            return next;
        });
    }, []);

    const selectAllScenes = useCallback(() => {
        setSelectedScenes(new Set(filteredScenes.map(s => s.id)));
    }, [filteredScenes]);

    const clearSelection = useCallback(() => {
        setSelectedScenes(new Set());
    }, []);

    // 处理批量更新
    const handleBatchUpdateWithSelection = useCallback((updates: Partial<ScriptScene>) => {
        handleBatchUpdate(selectedScenes, updates);
    }, [handleBatchUpdate, selectedScenes]);

    // 处理批量删除
    const handleBatchDeleteWithSelection = useCallback(() => {
        handleBatchDelete(selectedScenes);
        clearSelection();
        setBatchMode(false);
        setShowBatchPanel(false);
    }, [handleBatchDelete, selectedScenes, clearSelection]);

    // 退出批量模式
    const exitBatchMode = useCallback(() => {
        setBatchMode(false);
        clearSelection();
        setShowBatchPanel(false);
    }, [clearSelection]);

    // 🆕 全局替换
    const handleGlobalReplace = useCallback(() => {
        if (!script || !findText.trim()) {
            toast.error('请输入要查找的文本');
            return;
        }

        let replaceCount = 0;
        const updatedScenes = script.scenes.map(scene => {
            let modified = false;
            const newScene = { ...scene };

            // 替换场景卡片显示的“出场角色”列表中的角色名
            if (scene.characters) {
                newScene.characters = scene.characters.map(char => {
                    if (char === findText) {
                        modified = true;
                        replaceCount++;
                        return replaceText;
                    }
                    return char;
                });
            }

            // 替换对白中的角色名
            newScene.dialogues = scene.dialogues.map(d => {
                if (d.character === findText) {
                    modified = true;
                    replaceCount++;
                    return { ...d, character: replaceText };
                }
                return d;
            });

            // 替换动作描述
            if (scene.action?.includes(findText)) {
                modified = true;
                // 计算该段落中 findText 出现的次数
                const count = (scene.action.match(new RegExp(findText, 'g')) || []).length;
                replaceCount += count;
                newScene.action = scene.action.split(findText).join(replaceText);
            }

            return modified ? newScene : scene;
        });

        if (replaceCount === 0) {
            toast.warning(`未找到 "${findText}"`);
        } else {
            // 调用 hook 提供的批量更新接口
            handleUpdateScenes(updatedScenes);
            toast.success(`已完成全剧替换，共计 ${replaceCount} 处`);
            setShowReplaceDialog(false);
            setFindText('');
            setReplaceText('');
        }
    }, [script, findText, replaceText, handleUpdateScenes]);

    if (!chapter) {
        return <div className="text-center py-20">章节不存在</div>;
    }

    return (
        <div className="space-y-6">
            {/* AI 提取进度指示器 */}
            {extractProgress.step !== 'idle' && (
                <ExtractProgressIndicator progress={extractProgress} />
            )}

            {/* 剧本统计面板 */}
            {script && stats && showStats && (
                <StatsPanel stats={stats} onClose={() => setShowStats(false)} />
            )}

            {/* 角色对白统计面板 */}
            {script && showCharacterStats && (
                <CharacterStats script={script} />
            )}

            {/* 页数计数器（固定在顶部） */}
            {script && (
                <div className="flex items-center justify-between">
                    <PageCounter script={script} />
                    <div className="flex items-center gap-2">
                        {!showStats && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowStats(true)}
                                className="gap-2"
                            >
                                <BarChart3 className="w-4 h-4" />
                                统计
                            </Button>
                        )}
                        <Button
                            variant={showCharacterStats ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setShowCharacterStats(prev => !prev)}
                            className="gap-2"
                        >
                            角色统计
                        </Button>
                        {/* 🆕 查找替换按钮 */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowReplaceDialog(true)}
                            className="gap-2"
                        >
                            <Replace className="w-4 h-4" />
                            查找替换
                        </Button>
                    </div>
                </div>
            )}

            {/* 🆕 查找替换对话框 */}
            <Dialog open={showReplaceDialog} onOpenChange={setShowReplaceDialog}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Replace className="w-5 h-5" />
                            全局查找替换
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label>查找</Label>
                            <Input
                                value={findText}
                                onChange={(e) => setFindText(e.target.value)}
                                placeholder="输入要查找的角色名或文本"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>替换为</Label>
                            <Input
                                value={replaceText}
                                onChange={(e) => setReplaceText(e.target.value)}
                                placeholder="输入替换后的内容"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            将在角色名、对白角色、动作描述中进行全局替换
                        </p>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowReplaceDialog(false)}>
                            取消
                        </Button>
                        <Button onClick={handleGlobalReplace}>
                            全部替换
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <FilmIcon className="w-5 h-5" />
                            {chapter.title} - 剧本改写
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">
                            专业电影剧本格式
                            {lastSaved && (
                                <span className="ml-2 text-green-600">
                                    (自动保存于 {lastSaved})
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {/* 撤销/重做按钮 */}
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={undo}
                            disabled={!canUndo}
                            title="撤销"
                        >
                            <Undo2 className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={redo}
                            disabled={!canRedo}
                            title="重做"
                        >
                            <Redo2 className="w-4 h-4" />
                        </Button>

                        {/* 视图模式切换 */}
                        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as 'edit' | 'preview')}>
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="edit">编辑模式</TabsTrigger>
                                <TabsTrigger value="preview">预览模式</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        {/* AI 提取按钮 */}
                        <Button
                            onClick={handleAIExtract}
                            disabled={isExtracting || !chapter.originalText}
                            className="gap-2"
                            variant="secondary"
                        >
                            <Sparkles className="w-4 h-4" />
                            {isExtracting ? 'AI提取中...' : 'AI提取'}
                        </Button>

                        {/* 保存按钮 */}
                        <Button onClick={handleSave} disabled={!script} className="gap-2">
                            <Save className="w-4 h-4" />
                            保存
                        </Button>

                        {/* 导出下拉菜单 */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Download className="w-4 h-4" />
                                    导出
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem
                                    onClick={() => {
                                        if (chapter && script) {
                                            const markdownContent = exportScriptToMarkdown(chapter, script);
                                            downloadText(markdownContent, `${chapter.title}_剧本.md`);
                                            toast.success('导出成功');
                                        }
                                    }}
                                >
                                    导出为 Markdown
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => {
                                        if (chapter && script) {
                                            const textContent = exportScriptToText(chapter, script);
                                            downloadText(textContent, `${chapter.title}_剧本.txt`);
                                            toast.success('导出成功');
                                        }
                                    }}
                                >
                                    导出为纯文本
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>

                <CardContent>
                    {!script ? (
                        <div className="text-center py-12">
                            <FilmIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 mb-4">还没有剧本内容</p>
                            <p className="text-gray-400 text-sm">
                                点击"AI提取"按钮，让AI帮你从原文中提取剧本场景
                            </p>
                        </div>
                    ) : viewMode === 'preview' ? (
                        // 预览模式
                        <div className="bg-white border rounded-lg p-8 max-w-4xl mx-auto font-mono text-sm leading-relaxed">
                            {script.scenes.map((scene, index) => (
                                <div key={scene.id} className="mb-8">
                                    <div className="font-bold uppercase mb-4">
                                        {formatSceneHeading(scene)}
                                    </div>
                                    {scene.action && (
                                        <p className="mb-4 whitespace-pre-wrap">{scene.action}</p>
                                    )}
                                    {scene.dialogues.map((dialogue) => (
                                        <div key={dialogue.id} className="mb-3">
                                            <div className="text-center font-bold uppercase mb-1">
                                                {dialogue.character}
                                            </div>
                                            {dialogue.parenthetical && (
                                                <div className="text-center italic text-gray-600 mb-1">
                                                    ({dialogue.parenthetical})
                                                </div>
                                            )}
                                            <div className="max-w-md mx-auto whitespace-pre-wrap">
                                                {dialogue.lines}
                                            </div>
                                        </div>
                                    ))}
                                    {scene.transition && index < script.scenes.length - 1 && (
                                        <div className="text-right font-bold uppercase mt-4 mb-4">
                                            {scene.transition}：
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="text-center font-bold mt-12">剧终</div>
                        </div>
                    ) : (
                        // 编辑模式
                        <div className="space-y-6">
                            {/* 工具栏 */}
                            {script.scenes.length > 0 && (
                                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
                                    <div className="flex items-center gap-4">
                                        {/* 集数筛选器 */}
                                        <EpisodeFilter
                                            episodes={episodes}
                                            selectedEpisode={selectedEpisode}
                                            onSelect={setSelectedEpisode}
                                            getEpisodeDuration={getEpisodeDuration}
                                        />

                                        {/* 批量编辑模式切换 */}
                                        <Button
                                            variant={batchMode ? 'default' : 'outline'}
                                            size="sm"
                                            onClick={() => batchMode ? exitBatchMode() : setBatchMode(true)}
                                            className="gap-2"
                                        >
                                            <CheckSquare className="w-4 h-4" />
                                            {batchMode ? '退出批量' : '批量编辑'}
                                        </Button>

                                        {batchMode && (
                                            <>
                                                <span className="text-sm text-gray-600">
                                                    已选择 <span className="font-bold text-orange-600">{selectedScenes.size}</span> 个场景
                                                </span>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={selectAllScenes}
                                                    disabled={selectedScenes.size === filteredScenes.length}
                                                >
                                                    全选
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={clearSelection}
                                                    disabled={selectedScenes.size === 0}
                                                >
                                                    清空
                                                </Button>
                                            </>
                                        )}
                                    </div>

                                    {/* 添加场景按钮 */}
                                    {!batchMode && (
                                        <Button onClick={handleAddScene} className="gap-2">
                                            <Plus className="w-4 h-4" />
                                            添加场景
                                        </Button>
                                    )}

                                    {/* 批量编辑面板开关 */}
                                    {batchMode && selectedScenes.size > 0 && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setShowBatchPanel(!showBatchPanel)}
                                        >
                                            {showBatchPanel ? '隐藏批量面板' : '显示批量面板'}
                                        </Button>
                                    )}
                                </div>
                            )}

                            {/* 批量编辑面板 */}
                            {showBatchPanel && selectedScenes.size > 0 && (
                                <BatchEditPanel
                                    selectedCount={selectedScenes.size}
                                    onUpdate={handleBatchUpdateWithSelection}
                                    onDelete={handleBatchDeleteWithSelection}
                                    onClose={() => setShowBatchPanel(false)}
                                />
                            )}

                            {/* 场景列表 */}
                            {filteredScenes.length === 0 ? (
                                <div className="text-center py-12 text-gray-500">
                                    {script.scenes.length === 0
                                        ? '暂无场景，点击"添加场景"按钮创建'
                                        : '当前集数暂无场景'}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {filteredScenes.map((scene) => (
                                        <SceneCard
                                            key={scene.id}
                                            scene={scene}
                                            batchMode={batchMode}
                                            isSelected={selectedScenes.has(scene.id)}
                                            onToggleSelect={toggleSceneSelection}
                                            onUpdate={handleUpdateScene}
                                            onDelete={handleDeleteScene}
                                            onAddDialogue={handleAddDialogue}
                                            onUpdateDialogue={handleUpdateDialogue}
                                            onDeleteDialogue={handleDeleteDialogue}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

// 默认导出
export default ScriptEditor;
