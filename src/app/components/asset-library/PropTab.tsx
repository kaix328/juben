import { useState } from 'react';
import {
    Package, Plus, Search, Trash2, Tag, X,
    Sparkles, ArrowLeft, Edit, Copy, RotateCw
} from 'lucide-react';
import { toast } from 'sonner';
import { PromptEngine } from '../../utils/promptEngine';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { EmptyState } from '../ui/empty-state';
import { PropCard } from './PropCard';
import { AssetUsagePanel } from '../AssetUsagePanel';
import { type UsageLocation } from '../../utils/assetTracker';
import type { AssetLibrary, Prop } from '../../types';

export interface PropTabProps {
    assets: AssetLibrary;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedPropId: string | null;
    setSelectedPropId: (id: string | null) => void;
    handleAddProp: () => void;
    handleUpdateProp: (id: string, updates: Partial<Prop>) => void;
    handleDeleteProp: (id: string) => void;
    handleAddTag: (id: string, type: 'prop', tag: string) => void;
    handleRemoveTag: (id: string, type: 'prop', tag: string) => void;
    handleGenerateProp: (id: string) => Promise<void>;
    getPropUsageLocations: (prop: Prop) => UsageLocation[];
    usageMap: Map<string, number>;
    project?: any;
    handleBatchDelete?: (ids: string[]) => void;
    onReorder?: (startIndex: number, endIndex: number) => void;
    groupBy?: 'none' | 'tags' | 'source';
}

export function PropTab({
    assets,
    searchTerm,
    setSearchTerm,
    selectedPropId,
    setSelectedPropId,
    handleAddProp,
    handleUpdateProp,
    handleDeleteProp,
    handleAddTag,
    handleRemoveTag,
    handleGenerateProp,
    getPropUsageLocations,
    usageMap,
    project,
    handleBatchDelete,
    onReorder,
    groupBy = 'none',
}: PropTabProps) {
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

    const filteredProps = assets.props.filter(p =>
        (p.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.description || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddPropTag = (id: string) => {
        if (!newTag.trim()) return;
        handleAddTag(id, 'prop', newTag.trim());
        setNewTag('');
    };

    if (selectedPropId !== null) {
        const prop = assets.props.find(p => p.id === selectedPropId);
        if (!prop) return null;

        const handleCopy = (text: string) => {
            navigator.clipboard.writeText(text);
            toast.success('已复制到剪切板');
        };

        const handleOptimize = () => {
            if (!project?.directorStyle) {
                toast.error('未设定导演风格，无法优化');
                return;
            }
            const engine = new PromptEngine(project.directorStyle);
            const result = engine.forProp(prop, prop.aiPrompt);
            handleUpdateProp(prop.id, { aiPrompt: result.positive });
            toast.success('提示词已根据导演风格优化');
        };

        return (
            <div className="space-y-4">
                <Button
                    variant="outline"
                    onClick={() => setSelectedPropId(null)}
                    className="gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    返回列表
                </Button>

                <div className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                            <Input
                                value={prop.name}
                                onChange={(e) => handleUpdateProp(prop.id, { name: e.target.value })}
                                className="text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
                            />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {(prop.tags || []).map(tag => (
                                    <Badge key={tag} variant="secondary" className="gap-1">
                                        {tag}
                                        <X
                                            className="w-3 h-3 cursor-pointer hover:text-red-500"
                                            onClick={() => handleRemoveTag(prop.id, 'prop', tag)}
                                        />
                                    </Badge>
                                ))}
                                <div className="flex gap-1">
                                    <Input
                                        placeholder="添加标签..."
                                        value={newTag}
                                        onChange={(e) => setNewTag(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') handleAddPropTag(prop.id);
                                        }}
                                        className="h-6 w-24 text-xs"
                                    />
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-6 px-2"
                                        onClick={() => handleAddPropTag(prop.id)}
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
                                handleDeleteProp(prop.id);
                                setSelectedPropId(null);
                            }}
                        >
                            <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border space-y-4">
                                <h5 className="font-semibold text-gray-700">基本信息</h5>
                                <div className="space-y-2">
                                    <Label>道具描述</Label>
                                    <Textarea
                                        value={prop.description}
                                        onChange={(e) => handleUpdateProp(prop.id, { description: e.target.value })}
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <AssetUsagePanel
                                usageLocations={getPropUsageLocations(prop)}
                                usageCount={usageMap.get(prop.id) || 0}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border space-y-4">
                                <Label className="text-xs text-center block">道具预览</Label>
                                <div className="aspect-square bg-gray-50 rounded border border-dashed border-orange-300 overflow-hidden flex items-center justify-center relative group">
                                    {prop.preview ? (
                                        <img src={prop.preview} className="w-full h-full object-cover" />
                                    ) : (
                                        <Package className="w-16 h-16 text-orange-200" />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Edit className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full gap-2 border-orange-300 text-orange-600"
                                    onClick={() => handleGenerateProp(prop.id)}
                                    disabled={prop.isGenerating}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    {prop.isGenerating ? '生成中...' : '生成道具图'}
                                </Button>

                                <div className="space-y-2 pt-4">
                                    <div className="flex justify-between items-center">
                                        <Label className="flex items-center gap-2 text-orange-700">
                                            <Sparkles className="w-4 h-4" />
                                            AI 绘画提示词
                                        </Label>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2 text-[10px] text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                                                onClick={() => handleOptimize()}
                                            >
                                                <RotateCw className="w-3 h-3 mr-1" />
                                                智能优化
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2 text-[10px] text-gray-500"
                                                onClick={() => handleCopy(prop.aiPrompt || '')}
                                            >
                                                <Copy className="w-3 h-3 mr-1" />
                                                复制
                                            </Button>
                                        </div>
                                    </div>
                                    <Textarea
                                        value={prop.aiPrompt || ''}
                                        onChange={(e) => handleUpdateProp(prop.id, { aiPrompt: e.target.value })}
                                        rows={6}
                                        className="text-xs"
                                        placeholder="描述道具的外观细节、材质、光影等..."
                                    />
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
                        placeholder="搜索道具..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                    />
                </div>
                <Button onClick={handleAddProp} variant="outline" className="gap-2">
                    <Plus className="w-4 h-4" />
                    添加道具
                </Button>
            </div>

            {filteredProps.length === 0 ? (
                <EmptyState
                    icon={Package}
                    title="没有道具"
                    description="请尝试调整搜索条件或添加新道具。"
                    actionLabel="添加道具"
                    onAction={handleAddProp}
                />
            ) : groupBy === 'none' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredProps.map((prop, index) => (
                        <div
                            key={prop.id}
                            draggable={groupBy === 'none'}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                            className={`group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? 'ring-2 ring-orange-500 scale-105' : ''
                                }`}
                            onClick={() => setSelectedPropId(prop.id)}
                        >
                            <PropCard
                                prop={prop}
                                isSelected={selectedPropId === prop.id}
                                isBatchSelected={false}
                                isBatchMode={false}
                                onSelect={setSelectedPropId}
                                onDelete={handleDeleteProp}
                                onGenerate={handleGenerateProp}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-8">
                    {(() => {
                        const groups: { [key: string]: Prop[] } = {};

                        if (groupBy === 'source') {
                            groups['从分镜同步'] = filteredProps.filter(p => p.tags?.includes('从分镜同步'));
                            groups['手动添加'] = filteredProps.filter(p => !p.tags?.includes('从分镜同步'));
                        } else if (groupBy === 'tags') {
                            filteredProps.forEach(prop => {
                                const tags = prop.tags && prop.tags.length > 0 ? prop.tags : ['未分类'];
                                tags.forEach(tag => {
                                    if (!groups[tag]) groups[tag] = [];
                                    groups[tag].push(prop);
                                });
                            });
                        }

                        return Object.entries(groups)
                            .filter(([_, items]) => items.length > 0)
                            .map(([groupName, items]) => (
                                <div key={groupName} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="px-3 py-1 bg-orange-50 text-orange-700 border-orange-200 font-medium">
                                            {groupName} ({items.length})
                                        </Badge>
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-orange-100 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {items.map((prop) => (
                                            <div
                                                key={prop.id}
                                                className="group relative cursor-pointer"
                                                onClick={() => setSelectedPropId(prop.id)}
                                            >
                                                <PropCard
                                                    prop={prop}
                                                    isSelected={selectedPropId === prop.id}
                                                    isBatchSelected={false}
                                                    isBatchMode={false}
                                                    onSelect={setSelectedPropId}
                                                    onDelete={handleDeleteProp}
                                                    onGenerate={handleGenerateProp}
                                                />
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
