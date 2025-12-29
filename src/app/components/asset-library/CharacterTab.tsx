import { useState } from 'react';
import {
    Users, Plus, Search, Trash2, Tag, X,
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
import { CharacterCard } from './CharacterCard';
import { AssetUsagePanel } from '../AssetUsagePanel';
import { PromptTemplateSelector } from '../PromptTemplateSelector';
import { type UsageLocation } from '../../utils/assetTracker';
import type { AssetLibrary, Character } from '../../types';

export interface CharacterTabProps {
    assets: AssetLibrary;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedCharacterId: string | null;
    setSelectedCharacterId: (id: string | null) => void;
    handleAddCharacter: () => void;
    handleUpdateCharacter: (id: string, updates: Partial<Character>) => void;
    handleDeleteCharacter: (id: string) => void;
    handleAddTag: (id: string, type: 'character', tag: string) => void;
    handleRemoveTag: (id: string, type: 'character', tag: string) => void;
    getCharacterUsageLocations: (character: Character) => UsageLocation[];
    usageMap: Map<string, number>;
    handleGenerateCharacterFullBody: (id: string) => Promise<void>;
    handleGenerateCharacterFace: (id: string) => Promise<void>;
    projectId: string;
    project?: any; // Project | null
    onReorder: (startIndex: number, endIndex: number) => void;
    groupBy?: 'none' | 'tags' | 'source';
}

export function CharacterTab({
    assets,
    searchTerm,
    setSearchTerm,
    selectedCharacterId,
    setSelectedCharacterId,
    handleAddCharacter,
    handleUpdateCharacter,
    handleDeleteCharacter,
    handleAddTag,
    handleRemoveTag,
    getCharacterUsageLocations,
    usageMap,
    handleGenerateCharacterFullBody,
    handleGenerateCharacterFace,
    projectId,
    project,
    onReorder,
    groupBy = 'none',
}: CharacterTabProps) {
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

    const filteredCharacters = assets.characters.filter(c =>
        (c.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (c.description || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddCharacterTag = (id: string) => {
        if (!newTag.trim()) return;
        handleAddTag(id, 'character', newTag.trim());
        setNewTag('');
    };

    if (selectedCharacterId !== null) {
        const character = assets.characters.find(c => c.id === selectedCharacterId);
        if (!character) return null;

        const handleCopy = (text: string) => {
            navigator.clipboard.writeText(text);
            toast.success('已复制到剪切板');
        };

        const handleOptimize = (type: 'fullBody' | 'face') => {
            if (!project?.directorStyle) {
                toast.error('未设定导演风格，无法优化');
                return;
            }
            const engine = new PromptEngine(project.directorStyle);
            let result;
            if (type === 'fullBody') {
                result = engine.forCharacterFullBody(character, character.fullBodyPrompt);
                handleUpdateCharacter(character.id, { fullBodyPrompt: result.positive });
            } else {
                result = engine.forCharacterFace(character, character.facePrompt);
                handleUpdateCharacter(character.id, { facePrompt: result.positive });
            }
            toast.success('提示词已根据导演风格优化');
        };

        return (
            <div className="space-y-4">
                <Button
                    variant="outline"
                    onClick={() => setSelectedCharacterId(null)}
                    className="gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    返回列表
                </Button>

                <div className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                            <Input
                                value={character.name}
                                onChange={(e) => handleUpdateCharacter(character.id, { name: e.target.value })}
                                className="text-2xl font-bold mb-2 border-none bg-transparent p-0 h-auto focus-visible:ring-1"
                            />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {(character.tags || []).map(tag => (
                                    <Badge key={tag} variant="secondary" className="gap-1">
                                        {tag}
                                        <X
                                            className="w-3 h-3 cursor-pointer hover:text-red-500"
                                            onClick={() => handleRemoveTag(character.id, 'character', tag)}
                                        />
                                    </Badge>
                                ))}
                                <div className="flex gap-1">
                                    <Input
                                        placeholder="添加标签..."
                                        value={newTag}
                                        onChange={(e) => setNewTag(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') handleAddCharacterTag(character.id);
                                        }}
                                        className="h-6 w-24 text-xs"
                                    />
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-6 px-2"
                                        onClick={() => handleAddCharacterTag(character.id)}
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
                                handleDeleteCharacter(character.id);
                                setSelectedCharacterId(null);
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
                                    <Label>角色描述</Label>
                                    <Textarea
                                        value={character.description}
                                        onChange={(e) => handleUpdateCharacter(character.id, { description: e.target.value })}
                                        rows={4}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>性格特征</Label>
                                        <Input
                                            value={character.personality || ''}
                                            onChange={(e) => handleUpdateCharacter(character.id, { personality: e.target.value })}
                                            placeholder="如：开朗、冷静..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>外貌特征</Label>
                                        <Input
                                            value={character.appearance || ''}
                                            onChange={(e) => handleUpdateCharacter(character.id, { appearance: e.target.value })}
                                            placeholder="如：金发碧眼、高大..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>触发词 (Trigger Word)</Label>
                                        <Input
                                            value={character.triggerWord || ''}
                                            onChange={(e) => handleUpdateCharacter(character.id, { triggerWord: e.target.value })}
                                            placeholder="用于模型训练或资源锁定的前缀..."
                                            className="font-mono text-xs"
                                        />
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <Label>标准外貌描述 (Standard Appearance)</Label>
                                        <Textarea
                                            value={character.standardAppearance || ''}
                                            onChange={(e) => handleUpdateCharacter(character.id, { standardAppearance: e.target.value })}
                                            placeholder="结构化的详细外观描述，用于跨场景保持一致性..."
                                            rows={3}
                                            className="text-xs"
                                        />
                                    </div>
                                </div>
                            </div>

                            <AssetUsagePanel
                                usageLocations={getCharacterUsageLocations(character)}
                                usageCount={usageMap.get(character.id) || 0}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-xs">全身预览</Label>
                                    <div className="aspect-[9/16] bg-white rounded border border-dashed border-blue-300 overflow-hidden flex items-center justify-center">
                                        {character.fullBodyPreview ? (
                                            <img src={character.fullBodyPreview} className="w-full h-full object-cover" />
                                        ) : <Users className="w-8 h-8 text-blue-200" />}
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs h-7 gap-1 border-blue-300 text-blue-600"
                                        onClick={() => handleGenerateCharacterFullBody(character.id)}
                                        disabled={character.isGeneratingFullBody}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        {character.isGeneratingFullBody ? '...' : '生成全身照'}
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs">面部预览</Label>
                                    <div className="aspect-[3/4] bg-white rounded border border-dashed border-blue-300 overflow-hidden flex items-center justify-center">
                                        {character.facePreview ? (
                                            <img src={character.facePreview} className="w-full h-full object-cover" />
                                        ) : <Users className="w-8 h-8 text-blue-200" />}
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full text-xs h-7 gap-1 border-blue-300 text-blue-600"
                                        onClick={() => handleGenerateCharacterFace(character.id)}
                                        disabled={character.isGeneratingFace}
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        {character.isGeneratingFace ? '...' : '生成面部特写'}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label className="flex items-center gap-2 text-blue-700">
                                    <Sparkles className="w-4 h-4" />
                                    AI 角色提示词
                                </Label>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <Label className="text-xs text-gray-400">全身照提示词 (Full Body)</Label>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                    onClick={() => handleOptimize('fullBody')}
                                                >
                                                    <RotateCw className="w-3 h-3 mr-1" />
                                                    智能优化
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-gray-500"
                                                    onClick={() => handleCopy(character.fullBodyPrompt || '')}
                                                >
                                                    <Copy className="w-3 h-3 mr-1" />
                                                    复制
                                                </Button>
                                            </div>
                                        </div>
                                        <Textarea
                                            value={character.fullBodyPrompt || ''}
                                            onChange={(e) => handleUpdateCharacter(character.id, { fullBodyPrompt: e.target.value })}
                                            rows={6}
                                            className="bg-white border-blue-100 text-xs"
                                        />
                                        <div className="mt-2 text-right">
                                            <PromptTemplateSelector
                                                type="character"
                                                subType="fullBody"
                                                onSelect={(template) => {
                                                    const currentPrompt = character.fullBodyPrompt || '';
                                                    handleUpdateCharacter(character.id, {
                                                        fullBodyPrompt: currentPrompt ? `${currentPrompt}, ${template}` : template
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <Label className="text-xs text-gray-400">面部特写提示词 (Face Detail)</Label>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                    onClick={() => handleOptimize('face')}
                                                >
                                                    <RotateCw className="w-3 h-3 mr-1" />
                                                    智能优化
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-6 px-2 text-[10px] text-gray-500"
                                                    onClick={() => handleCopy(character.facePrompt || '')}
                                                >
                                                    <Copy className="w-3 h-3 mr-1" />
                                                    复制
                                                </Button>
                                            </div>
                                        </div>
                                        <Textarea
                                            value={character.facePrompt || ''}
                                            onChange={(e) => handleUpdateCharacter(character.id, { facePrompt: e.target.value })}
                                            rows={6}
                                            className="bg-white border-blue-100 text-xs"
                                        />
                                        <div className="mt-2 text-right">
                                            <PromptTemplateSelector
                                                type="character"
                                                subType="face"
                                                onSelect={(template) => {
                                                    const currentPrompt = character.facePrompt || '';
                                                    handleUpdateCharacter(character.id, {
                                                        facePrompt: currentPrompt ? `${currentPrompt}, ${template}` : template
                                                    });
                                                }}
                                            />
                                        </div>
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
                        placeholder="搜索角色..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9"
                    />
                </div>
                <Button onClick={handleAddCharacter} variant="outline" className="gap-2">
                    <Plus className="w-4 h-4" />
                    添加角色
                </Button>
            </div>

            {filteredCharacters.length === 0 ? (
                <EmptyState
                    icon={Users}
                    title="没有找到角色"
                    description="请尝试调整搜索条件或添加新角色。"
                    actionLabel="添加角色"
                    onAction={handleAddCharacter}
                />
            ) : groupBy === 'none' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredCharacters.map((char, index) => (
                        <div
                            key={char.id}
                            draggable={groupBy === 'none'}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragEnd={handleDragEnd}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                            className={`group relative cursor-pointer transition-all duration-200 ${dragOverIndex === index ? 'ring-2 ring-blue-500 scale-105' : ''
                                }`}
                            onClick={() => setSelectedCharacterId(char.id)}
                        >
                            <CharacterCard
                                character={char}
                                isSelected={selectedCharacterId === char.id}
                                isBatchSelected={false}
                                isBatchMode={false}
                                usageCount={usageMap.get(char.id) || 0}
                                onSelect={setSelectedCharacterId}
                                onDelete={handleDeleteCharacter}
                                onGenerateFullBody={handleGenerateCharacterFullBody}
                                onGenerateFace={handleGenerateCharacterFace}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-8">
                    {(() => {
                        const groups: { [key: string]: Character[] } = {};

                        if (groupBy === 'source') {
                            groups['从分镜同步'] = filteredCharacters.filter(c => c.tags?.includes('从分镜同步'));
                            groups['手动添加'] = filteredCharacters.filter(c => !c.tags?.includes('从分镜同步'));
                        } else if (groupBy === 'tags') {
                            filteredCharacters.forEach(char => {
                                const tags = char.tags && char.tags.length > 0 ? char.tags : ['未分类'];
                                tags.forEach(tag => {
                                    if (!groups[tag]) groups[tag] = [];
                                    groups[tag].push(char);
                                });
                            });
                        }

                        return Object.entries(groups)
                            .filter(([_, items]) => items.length > 0)
                            .map(([groupName, items]) => (
                                <div key={groupName} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Badge variant="outline" className="px-3 py-1 bg-blue-50 text-blue-700 border-blue-200 font-medium">
                                            {groupName} ({items.length})
                                        </Badge>
                                        <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-100 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {items.map((char) => (
                                            <div
                                                key={char.id}
                                                className="group relative cursor-pointer"
                                                onClick={() => setSelectedCharacterId(char.id)}
                                            >
                                                <CharacterCard
                                                    character={char}
                                                    isSelected={selectedCharacterId === char.id}
                                                    isBatchSelected={false}
                                                    isBatchMode={false}
                                                    usageCount={usageMap.get(char.id) || 0}
                                                    onSelect={setSelectedCharacterId}
                                                    onDelete={handleDeleteCharacter}
                                                    onGenerateFullBody={handleGenerateCharacterFullBody}
                                                    onGenerateFace={handleGenerateCharacterFace}
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
