import { useState, useMemo } from 'react';
import {
    Map as MapIcon, ArrowLeft, X, Tag, Trash2,
    Sparkles, Image as ImageIcon, Search, Plus, Edit, Copy, RotateCw
} from 'lucide-react';
import { toast } from 'sonner';
import { PromptEngine } from '../../utils/promptEngine';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { EmptyState } from '../ui/empty-state';
import { AssetUsagePanel } from '../AssetUsagePanel';
import { type UsageLocation } from '../../utils/assetTracker';
import type { AssetLibrary, Scene } from '../../types';

export interface SceneTabProps {
    assets: AssetLibrary;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedSceneId: string | null;
    setSelectedSceneId: (id: string | null) => void;
    handleAddScene: () => void;
    handleUpdateScene: (id: string, updates: Partial<Scene>) => void;
    handleDeleteScene: (id: string) => void;
    handleAddTag: (id: string, type: 'scene', tag: string) => void;
    handleRemoveTag: (id: string, type: 'scene', tag: string) => void;
    handleGenerateSceneWide: (id: string) => Promise<void>;
    handleGenerateSceneMedium: (id: string) => Promise<void>;
    handleGenerateSceneCloseup: (id: string) => Promise<void>;
    getSceneUsageLocations: (scene: Scene) => UsageLocation[];
    usageMap: Map<string, number>;
    project?: any;
    onReorder?: (startIndex: number, endIndex: number) => void;
    groupBy?: 'none' | 'tags' | 'source';
}

export function SceneTab({
    assets,
    searchTerm,
    setSearchTerm,
    selectedSceneId,
    setSelectedSceneId,
    handleAddScene,
    handleUpdateScene,
    handleDeleteScene,
    handleAddTag,
    handleRemoveTag,
    handleGenerateSceneWide,
    handleGenerateSceneMedium,
    handleGenerateSceneCloseup,
    getSceneUsageLocations,
    usageMap,
    project,
    onReorder,
    groupBy = 'none',
}: SceneTabProps) {
    const [newTag, setNewTag] = useState('');
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

    const handleDragStart = (e: React.DragEvent, index: number) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
        setDragOverIndex(null);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (draggedIndex === null || draggedIndex === index) return;
        setDragOverIndex(index);
    };

    const handleDrop = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (draggedIndex === null || draggedIndex === index) return;
        if (onReorder) {
            onReorder(draggedIndex, index);
        }
        setDraggedIndex(null);
        setDragOverIndex(null);
    };

    const filteredScenes = assets.scenes.filter(s =>
        (s.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.location || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (assets.scenes.length === 0) {
        return (
            <EmptyState
                icon={MapIcon}
                title="没有场景"
                description="场景是故事发生的舞台，快去添加一个吧。"
                actionLabel="新建场景"
                onAction={handleAddScene}
            />
        );
    }

    if (selectedSceneId !== null) {
        const scene = assets.scenes.find(s => s.id === selectedSceneId);
        if (!scene) return null;

        const handleCopy = (text: string) => {
            navigator.clipboard.writeText(text);
            toast.success('已复制到剪切板');
        };

        const handleOptimize = (type: 'wide' | 'medium' | 'closeup') => {
            if (!project?.directorStyle) {
                toast.error('未设定导演风格，无法优化');
                return;
            }
            const engine = new PromptEngine(project.directorStyle);
            let result;
            if (type === 'wide') {
                result = engine.forSceneWide(scene, scene.widePrompt);
                handleUpdateScene(scene.id, { widePrompt: result.positive });
            } else if (type === 'medium') {
                result = engine.forSceneMedium(scene, scene.mediumPrompt);
                handleUpdateScene(scene.id, { mediumPrompt: result.positive });
            } else {
                result = engine.forSceneCloseup(scene, scene.closeupPrompt);
                handleUpdateScene(scene.id, { closeupPrompt: result.positive });
            }
            toast.success('提示词已根据导演风格优化');
        };

        return (
            <div className="space-y-4">
                <Button
                    variant="outline"
                    onClick={() => setSelectedSceneId(null)}
                    className="gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    返回列表
                </Button>

                <div className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                            <Input
                                value={scene.name}
                                onChange={(e) => handleUpdateScene(scene.id, { name: e.target.value })}
                                className="text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
                            />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {(scene.tags || []).map(tag => (
                                    <Badge key={tag} variant="secondary" className="gap-1">
                                        {tag}
                                        <X
                                            className="w-3 h-3 cursor-pointer hover:text-red-500"
                                            onClick={() => handleRemoveTag(scene.id, 'scene', tag)}
                                        />
                                    </Badge>
                                ))}
                                <div className="flex gap-1">
                                    <Input
                                        placeholder="添加标签..."
                                        value={newTag}
                                        onChange={(e) => setNewTag(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleAddTag(scene.id, 'scene', newTag);
                                                setNewTag('');
                                            }
                                        }}
                                        className="h-6 w-24 text-xs"
                                    />
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-6 px-2"
                                        onClick={() => {
                                            handleAddTag(scene.id, 'scene', newTag);
                                            setNewTag('');
                                        }}
                                    >
                                        <Tag className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                handleDeleteScene(scene.id);
                                setSelectedSceneId(null);
                            }}
                        >
                            <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border space-y-4">
                                <h5 className="font-semibold text-gray-700">基本信息</h5>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>地点</Label>
                                        <Input
                                            value={scene.location}
                                            onChange={(e) => handleUpdateScene(scene.id, { location: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>环境氛围</Label>
                                        <Input
                                            value={scene.environment}
                                            onChange={(e) => handleUpdateScene(scene.id, { environment: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>场景描述</Label>
                                    <Textarea
                                        value={scene.description}
                                        onChange={(e) => handleUpdateScene(scene.id, { description: e.target.value })}
                                        rows={3}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>时间环境</Label>
                                        <select
                                            value={scene.timeOfDay || 'day'}
                                            onChange={(e) => handleUpdateScene(scene.id, { timeOfDay: e.target.value as any })}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="day">白天</option>
                                            <option value="night">夜晚</option>
                                            <option value="dawn">黎明</option>
                                            <option value="dusk">黄昏</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>天气</Label>
                                        <Input
                                            value={scene.weather || ''}
                                            onChange={(e) => handleUpdateScene(scene.id, { weather: e.target.value })}
                                            placeholder="晴天、雨天..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <AssetUsagePanel
                                usageLocations={getSceneUsageLocations(scene)}
                                usageCount={usageMap.get(scene.id) || 0}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border space-y-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] sm:text-xs text-center block">全景</Label>
                                        <div className="aspect-video bg-gray-50 rounded border border-dashed border-green-300 overflow-hidden flex items-center justify-center">
                                            {scene.widePreview ? (
                                                <img src={scene.widePreview} className="w-full h-full object-cover" />
                                            ) : <ImageIcon className="w-6 h-6 text-green-200" />}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full text-[10px] h-7 gap-1 border-green-300 text-green-600"
                                            onClick={() => handleGenerateSceneWide(scene.id)}
                                            disabled={scene.isGeneratingWide}
                                        >
                                            <Sparkles className="w-3 h-3" />
                                            {scene.isGeneratingWide ? '...' : '生成'}
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] sm:text-xs text-center block">中景</Label>
                                        <div className="aspect-video bg-gray-50 rounded border border-dashed border-green-300 overflow-hidden flex items-center justify-center">
                                            {scene.mediumPreview ? (
                                                <img src={scene.mediumPreview} className="w-full h-full object-cover" />
                                            ) : <ImageIcon className="w-6 h-6 text-green-200" />}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full text-[10px] h-7 gap-1 border-green-300 text-green-600"
                                            onClick={() => handleGenerateSceneMedium(scene.id)}
                                            disabled={scene.isGeneratingMedium}
                                        >
                                            <Sparkles className="w-3 h-3" />
                                            {scene.isGeneratingMedium ? '...' : '生成'}
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] sm:text-xs text-center block">特写</Label>
                                        <div className="aspect-video bg-gray-50 rounded border border-dashed border-green-300 overflow-hidden flex items-center justify-center">
                                            {scene.closeupPreview ? (
                                                <img src={scene.closeupPreview} className="w-full h-full object-cover" />
                                            ) : <ImageIcon className="w-6 h-6 text-green-200" />}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full text-[10px] h-7 gap-1 border-green-300 text-green-600"
                                            onClick={() => handleGenerateSceneCloseup(scene.id)}
                                            disabled={scene.isGeneratingCloseup}
                                        >
                                            <Sparkles className="w-3 h-3" />
                                            {scene.isGeneratingCloseup ? '...' : '生成'}
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <Label className="text-xs text-gray-500">全景提示词</Label>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-green-600 hover:text-green-700 hover:bg-green-50"
                                                    onClick={() => handleOptimize('wide')}
                                                >
                                                    <RotateCw className="w-3 h-3 mr-1" />
                                                    智能优化
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-gray-500"
                                                    onClick={() => handleCopy(scene.widePrompt || '')}
                                                >
                                                    <Copy className="w-3 h-3 mr-1" />
                                                    复制
                                                </Button>
                                            </div>
                                        </div>
                                        <Textarea
                                            value={scene.widePrompt || ''}
                                            onChange={(e) => handleUpdateScene(scene.id, { widePrompt: e.target.value })}
                                            rows={3}
                                            className="text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <Label className="text-xs text-gray-500">中景提示词</Label>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-green-600 hover:text-green-700 hover:bg-green-50"
                                                    onClick={() => handleOptimize('medium')}
                                                >
                                                    <RotateCw className="w-3 h-3 mr-1" />
                                                    智能优化
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-gray-500"
                                                    onClick={() => handleCopy(scene.mediumPrompt || '')}
                                                >
                                                    <Copy className="w-3 h-3 mr-1" />
                                                    复制
                                                </Button>
                                            </div>
                                        </div>
                                        <Textarea
                                            value={scene.mediumPrompt || ''}
                                            onChange={(e) => handleUpdateScene(scene.id, { mediumPrompt: e.target.value })}
                                            rows={3}
                                            className="text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <Label className="text-xs text-gray-500">特写提示词</Label>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-green-600 hover:text-green-700 hover:bg-green-50"
                                                    onClick={() => handleOptimize('closeup')}
                                                >
                                                    <RotateCw className="w-3 h-3 mr-1" />
                                                    智能优化
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-gray-500"
                                                    onClick={() => handleCopy(scene.closeupPrompt || '')}
                                                >
                                                    <Copy className="w-3 h-3 mr-1" />
                                                    复制
                                                </Button>
                                            </div>
                                        </div>
                                        <Textarea
                                            value={scene.closeupPrompt || ''}
                                            onChange={(e) => handleUpdateScene(scene.id, { closeupPrompt: e.target.value })}
                                            rows={3}
                                            className="text-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="搜索场景..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                    />
                </div>
                <Button onClick={handleAddScene} variant="outline" className="gap-2">
                    <Plus className="w-4 h-4" />
                    添加场景
                </Button>
            </div>

            {filteredScenes.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                    <MapIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p>没有找到相关场景</p>
                </div>
            ) : groupBy === 'none' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredScenes.map((scene, index) => (
                        <div
                            key={scene.id}
                            draggable={groupBy === 'none'}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                            className={`group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? 'ring-2 ring-green-500 scale-105' : ''
                                }`}
                            onClick={() => setSelectedSceneId(scene.id)}
                        >
                            <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-400 transition-all hover:shadow-lg bg-white">
                                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center overflow-hidden relative">
                                    {scene.widePreview ? (
                                        <img
                                            src={scene.widePreview}
                                            alt={scene.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <MapIcon className="w-12 h-12 text-gray-300" />
                                    )}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                                        <Edit className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>

                                <div className="p-3 bg-white border-t border-gray-200">
                                    <div className="text-center font-medium text-gray-900 truncate">
                                        {scene.name}
                                    </div>
                                    {scene.tags && scene.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mt-2 justify-center">
                                            {scene.tags.slice(0, 2).map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-[10px] px-1 h-4">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full bg-white border border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-50 hover:border-red-300"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteScene(scene.id);
                                }}
                            >
                                <Trash2 className="w-3 h-3 text-red-500" />
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-8">
                    {(() => {
                        const groups: { [key: string]: Scene[] } = {};

                        if (groupBy === 'source') {
                            groups['从分镜同步'] = filteredScenes.filter(s => s.tags?.includes('从分镜同步'));
                            groups['手动添加'] = filteredScenes.filter(s => !s.tags?.includes('从分镜同步'));
                        } else if (groupBy === 'tags') {
                            filteredScenes.forEach(scene => {
                                const tags = scene.tags && scene.tags.length > 0 ? scene.tags : ['未分类'];
                                tags.forEach(tag => {
                                    if (!groups[tag]) groups[tag] = [];
                                    groups[tag].push(scene);
                                });
                            });
                        }

                        return Object.entries(groups)
                            .filter(([_, items]) => items.length > 0)
                            .map(([groupName, items]) => (
                                <div key={groupName} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="px-3 py-1 bg-green-50 text-green-700 border-green-200 font-medium">
                                            {groupName} ({items.length})
                                        </Badge>
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-green-100 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {items.map((scene) => (
                                            <div
                                                key={scene.id}
                                                className="group relative cursor-pointer"
                                                onClick={() => setSelectedSceneId(scene.id)}
                                            >
                                                <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-400 transition-all hover:shadow-lg bg-white">
                                                    <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center overflow-hidden relative">
                                                        {scene.widePreview ? (
                                                            <img
                                                                src={scene.widePreview}
                                                                alt={scene.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        ) : (
                                                            <MapIcon className="w-12 h-12 text-gray-300" />
                                                        )}
                                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                                                            <Edit className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-white border-t border-gray-200">
                                                        <div className="text-center font-medium text-gray-900 truncate">
                                                            {scene.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ));
                    })()}
                </div>
            )}
        </>
    );
}
