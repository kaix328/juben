import { memo } from 'react';
import {
    Package, Trash2, CheckSquare, Square, Wand2,
    RotateCw, Edit
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import type { Prop } from '../../types';

interface PropCardProps {
    prop: Prop;
    isSelected: boolean;
    isBatchSelected: boolean;
    isBatchMode: boolean;
    onSelect: (id: string) => void;
    onDelete: (id: string) => void;
    onGenerate: (id: string) => void;
}

export const PropCard = memo(({
    prop,
    isSelected,
    isBatchSelected,
    isBatchMode,
    onSelect,
    onDelete,
    onGenerate
}: PropCardProps) => {
    return (
        <Card
            className={`cursor-pointer transition-all hover:shadow-md relative group ${isSelected ? 'ring-2 ring-orange-500 border-orange-200' : ''
                } ${isBatchSelected ? 'bg-orange-50 border-orange-300' : ''}`}
            onClick={() => onSelect(prop.id)}
        >
            {isBatchMode && (
                <div className="absolute top-2 left-2 z-10">
                    {isBatchSelected ? (
                        <CheckSquare className="w-5 h-5 text-orange-600 fill-white" />
                    ) : (
                        <Square className="w-5 h-5 text-gray-300 fill-white" />
                    )}
                </div>
            )}
            <div className="aspect-square bg-gray-100 relative overflow-hidden flex items-center justify-center">
                {prop.preview ? (
                    <img
                        src={prop.preview}
                        alt={prop.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <Package className="w-12 h-12 text-gray-300" />
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
            <CardContent className="p-3">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm truncate group-hover:text-orange-600 transition-colors">{prop.name}</h3>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(prop.id);
                        }}
                    >
                        <Trash2 className="w-3.3 h-3.3" />
                    </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                    {prop.tags?.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] py-0 px-1 h-4 font-normal">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="mt-3 hidden group-hover:flex items-center gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-[10px] h-6 px-1 border-orange-200 text-orange-600 hover:bg-orange-50"
                        disabled={prop.isGenerating}
                        onClick={(e) => {
                            e.stopPropagation();
                            onGenerate(prop.id);
                        }}
                    >
                        {prop.isGenerating ? (
                            <RotateCw className="w-3 h-3 animate-spin mr-1" />
                        ) : (
                            <Wand2 className="w-3 h-3 mr-1" />
                        )}
                        生图
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
});
