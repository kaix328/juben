import { useState } from 'react';
import {
    Shirt, Plus, Search, Trash2, Tag, X,
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
import { CostumeCard } from './CostumeCard';
import { AssetUsagePanel } from '../AssetUsagePanel';
import { type UsageLocation } from '../../utils/assetTracker';
import type { AssetLibrary, Costume } from '../../types';

export interface CostumeTabProps {
    assets: AssetLibrary;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedCostumeId: string | null;
    setSelectedCostumeId: (id: string | null) => void;
    handleAddCostume: () => void;
    handleUpdateCostume: (id: string, updates: Partial<Costume>) => void;
    handleDeleteCostume: (id: string) => void;
    handleAddTag: (id: string, type: 'costume', tag: string) => void;
    handleRemoveTag: (id: string, type: 'costume', tag: string) => void;
    handleGenerateCostume: (id: string) => Promise<void>;
    getCostumeUsageLocations: (costume: Costume) => UsageLocation[];
    usageMap: Map<string, number>;
    project?: any;
    handleBatchDelete?: (ids: string[]) => void;
    onReorder?: (startIndex: number, endIndex: number) => void;
    groupBy?: 'none' | 'tags' | 'source';
}

export function CostumeTab({
    assets,
    searchTerm,
    setSearchTerm,
    selectedCostumeId,
    setSelectedCostumeId,
    handleAddCostume,
    handleUpdateCostume,
    handleDeleteCostume,
    handleAddTag,
    handleRemoveTag,
    handleGenerateCostume,
    getCostumeUsageLocations,
    usageMap,
    project,
    handleBatchDelete,
    onReorder,
    groupBy = 'none',
}: CostumeTabProps) {
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

    const filteredCostumes = assets.costumes.filter(c =>
        (c.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (c.description || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddCostumeTag = (id: string) => {
        if (!newTag.trim()) return;
        handleAddTag(id, 'costume', newTag.trim());
        setNewTag('');
    };

    if (selectedCostumeId !== null) {
        const costume = assets.costumes.find(c => c.id === selectedCostumeId);
        if (!costume) return null;

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
            const character = assets.characters.find(c => c.id === costume.characterId);
            const result = engine.forCostume(costume, character, costume.aiPrompt);
            handleUpdateCostume(costume.id, { aiPrompt: result.positive });
            toast.success('提示词已根据导演风格优化');
        };

        return (
            <div className="space-y-4">
                <Button
                    variant="outline"
                    onClick={() => setSelectedCostumeId(null)}
                    className="gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    返回列表
                </Button>

                <div className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                            <Input
                                value={costume.name}
                                onChange={(e) => handleUpdateCostume(costume.id, { name: e.target.value })}
                                className="text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
                            />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {(costume.tags || []).map(tag => (
                                    <Badge key={tag} variant="secondary" className="gap-1">
                                        {tag}
                                        <X
                                            className="w-3 h-3 cursor-pointer hover:text-red-500"
                                            onClick={() => handleRemoveTag(costume.id, 'costume', tag)}
                                        />
                                    </Badge>
                                ))}
                                <div className="flex gap-1">
                                    <Input
                                        placeholder="添加标签..."
                                        value={newTag}
                                        onChange={(e) => setNewTag(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') handleAddCostumeTag(costume.id);
                                        }}
                                        className="h-6 w-24 text-xs"
                                    />
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-6 px-2"
                                        onClick={() => handleAddCostumeTag(costume.id)}
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
                                handleDeleteCostume(costume.id);
                                setSelectedCostumeId(null);
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
                                    <Label>服饰描述</Label>
                                    <Textarea
                                        value={costume.description}
                                        onChange={(e) => handleUpdateCostume(costume.id, { description: e.target.value })}
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <AssetUsagePanel
                                usageLocations={getCostumeUsageLocations(costume)}
                                usageCount={usageMap.get(costume.id) || 0}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border space-y-4">
                                <Label className="text-xs text-center block" >服饰预览</Label>
                                <div className="aspect-square bg-gray-50 rounded border border-dashed border-pink-300 overflow-hidden flex items-center justify-center relative group">
                                    {costume.preview ? (
                                        <img src={costume.preview} className="w-full h-full object-cover" />
                                    ) : (
                                        <Shirt className="w-16 h-16 text-pink-200" />
                                    )}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Edit className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full gap-2 border-pink-300 text-pink-600"
                                    onClick={() => handleGenerateCostume(costume.id)}
                                    disabled={costume.isGenerating}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    {costume.isGenerating ? '生成中...' : '生成服饰图'}
                                </Button>

                                <div className="space-y-2 pt-4">
                                    <div className="flex justify-between items-center">
                                        <Label className="flex items-center gap-2 text-pink-700">
                                            <Sparkles className="w-4 h-4" />
                                            AI 绘画提示词
                                        </Label>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2 text-[10px] text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                                                onClick={() => handleOptimize()}
                                            >
                                                <RotateCw className="w-3 h-3 mr-1" />
                                                智能优化
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2 text-[10px] text-gray-500"
                                                onClick={() => handleCopy(costume.aiPrompt || '')}
                                            >
                                                <Copy className="w-3 h-3 mr-1" />
                                                复制
                                            </Button>
                                        </div>
                                    </div>
                                    <Textarea
                                        value={costume.aiPrompt || ''}
                                        onChange={(e) => handleUpdateCostume(costume.id, { aiPrompt: e.target.value })}
                                        rows={6}
                                        className="text-xs"
                                        placeholder="描述服饰的款式、材质、颜色细节等..."
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
            <div className="flex gap-2 mb-6" >
                <div className="relative flex-1" >
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="搜索服饰..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                    />
                </div>
                <Button onClick={handleAddCostume} variant="outline" className="gap-2" >
                    <Plus className="w-4 h-4" />
                    添加服饰
                </Button>
            </div>

            {filteredCostumes.length === 0 ? (
                <EmptyState
                    icon={Shirt}
                    title="没有服饰"
                    description="请尝试调整搜索条件或添加新服饰。"
                    actionLabel="添加服饰"
                    onAction={handleAddCostume}
                />
            ) : groupBy === 'none' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" >
                    {filteredCostumes.map((costume, index) => (
                        <div
                            key={costume.id}
                            draggable={groupBy === 'none'}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                            className={`group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? 'ring-2 ring-pink-500 scale-105' : ''
                                }`}
                            onClick={() => setSelectedCostumeId(costume.id)}
                        >
                            <CostumeCard
                                costume={costume}
                                isSelected={selectedCostumeId === costume.id}
                                isBatchSelected={false}
                                isBatchMode={false}
                                onSelect={setSelectedCostumeId}
                                onDelete={handleDeleteCostume}
                                onGenerate={handleGenerateCostume}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-8">
                    {(() => {
                        const groups: { [key: string]: Costume[] } = {};

                        if (groupBy === 'source') {
                            groups['从分镜同步'] = filteredCostumes.filter(c => c.tags?.includes('从分镜同步'));
                            groups['手动添加'] = filteredCostumes.filter(c => !c.tags?.includes('从分镜同步'));
                        } else if (groupBy === 'tags') {
                            filteredCostumes.forEach(costume => {
                                const tags = costume.tags && costume.tags.length > 0 ? costume.tags : ['未分类'];
                                tags.forEach(tag => {
                                    if (!groups[tag]) groups[tag] = [];
                                    groups[tag].push(costume);
                                });
                            });
                        }

                        return Object.entries(groups)
                            .filter(([_, items]) => items.length > 0)
                            .map(([groupName, items]) => (
                                <div key={groupName} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="px-3 py-1 bg-pink-50 text-pink-700 border-pink-200 font-medium">
                                            {groupName} ({items.length})
                                        </Badge>
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-pink-100 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {items.map((costume) => (
                                            <div
                                                key={costume.id}
                                                className="group relative cursor-pointer"
                                                onClick={() => setSelectedCostumeId(costume.id)}
                                            >
                                                <CostumeCard
                                                    costume={costume}
                                                    isSelected={selectedCostumeId === costume.id}
                                                    isBatchSelected={false}
                                                    isBatchMode={false}
                                                    onSelect={setSelectedCostumeId}
                                                    onDelete={handleDeleteCostume}
                                                    onGenerate={handleGenerateCostume}
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
