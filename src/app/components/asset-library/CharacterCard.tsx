import { memo } from 'react';
import {
    Users, Trash2, CheckSquare, Square, Wand2,
    RotateCw, Image as ImageIcon
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import type { Character } from '../../types';

interface CharacterCardProps {
    character: Character;
    isSelected: boolean;
    isBatchSelected: boolean;
    isBatchMode: boolean;
    usageCount: number;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;
    onGenerateFullBody: (id: string) => void;
    onGenerateFace: (id: string) => void;
}

export const CharacterCard = memo(({
    character,
    isSelected,
    isBatchSelected,
    isBatchMode,
    usageCount,
    onSelect,
    onDelete,
    onGenerateFullBody,
    onGenerateFace
}: CharacterCardProps) => {
    return (
        <Card
            className={`cursor-pointer transition-all hover:shadow-md relative group ${isSelected ? 'ring-2 ring-blue-500 border-blue-200' : ''
                } ${isBatchSelected ? 'bg-blue-50 border-blue-300' : ''}`}
            onClick={() => onSelect(character.id)}
        >
            {isBatchMode && (
                <div className="absolute top-2 left-2 z-10">
                    {isBatchSelected ? (
                        <CheckSquare className="w-5 h-5 text-blue-600 fill-white" />
                    ) : (
                        <Square className="w-5 h-5 text-gray-300 fill-white" />
                    )}
                </div>
            )}
            <div className="aspect-square bg-gray-100 relative overflow-hidden flex items-center justify-center">
                {character.facePreview || character.fullBodyPreview ? (
                    <img
                        src={character.facePreview || character.fullBodyPreview}
                        alt={character.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <Users className="w-12 h-12 text-gray-300" />
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs border-none shadow-sm">
                        {usageCount} 次使用
                    </Badge>
                </div>
            </div>
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg truncate group-hover:text-blue-600 transition-colors">{character.name}</h3>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(character.id);
                        }}
                    >
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 min-h-[2.5rem]">
                    {character.description || '暂无描述'}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                    {character.tags?.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-[10px] py-0 px-1.5 h-4 font-normal">
                            {tag}
                        </Badge>
                    ))}
                    {character.tags && character.tags.length > 3 && (
                        <Badge variant="outline" className="text-[10px] py-0 px-1.5 h-4 font-normal text-gray-400">
                            +{character.tags.length - 3}
                        </Badge>
                    )}
                </div>

                <div className="mt-4 hidden group-hover:flex items-center gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs h-7"
                        disabled={character.isGeneratingFullBody}
                        onClick={(e) => {
                            e.stopPropagation();
                            onGenerateFullBody(character.id);
                        }}
                    >
                        {character.isGeneratingFullBody ? (
                            <RotateCw className="w-3 h-3 animate-spin mr-1" />
                        ) : (
                            <Wand2 className="w-3 h-3 mr-1" />
                        )}
                        生成全身
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs h-7"
                        disabled={character.isGeneratingFace}
                        onClick={(e) => {
                            e.stopPropagation();
                            onGenerateFace(character.id);
                        }}
                    >
                        {character.isGeneratingFace ? (
                            <RotateCw className="w-3 h-3 animate-spin mr-1" />
                        ) : (
                            <ImageIcon className="w-3 h-3 mr-1" />
                        )}
                        生成头像
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
});
