// 对白条目组件
import React, { memo } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import type { DialogueItemProps } from '../types';

export const DialogueItem = memo(function DialogueItem({
    dialogue,
    sceneId,
    characters,
    onUpdate,
    onDelete
}: DialogueItemProps) {
    return (
        <div className="flex gap-2 items-start bg-gray-50 p-3 rounded-lg border border-gray-200">
            {/* 角色选择 */}
            <div className="w-32 flex-shrink-0">
                <Select
                    value={dialogue.character ?? ""}
                    onValueChange={(value: string) => onUpdate(sceneId, dialogue.id, { character: value })}
                >
                    <SelectTrigger className="h-9">
                        <SelectValue placeholder="选择角色" />
                    </SelectTrigger>
                    <SelectContent>
                        {characters.length > 0 ? (
                            characters.map((char: string) => (
                                <SelectItem key={char} value={char}>
                                    {char}
                                </SelectItem>
                            ))
                        ) : (
                            <SelectItem value="角色名">角色名</SelectItem>
                        )}
                        <SelectItem value="新角色">+ 新角色</SelectItem>
                    </SelectContent>
                </Select>
                {dialogue.character === '新角色' && (
                    <Input
                        placeholder="输入角色名"
                        className="mt-2 h-8 text-sm"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.value) {
                                onUpdate(sceneId, dialogue.id, { character: e.target.value });
                            }
                        }}
                    />
                )}
            </div>

            {/* 台词内容 */}
            <div className="flex-1">
                <Textarea
                    value={dialogue.lines ?? ""}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onUpdate(sceneId, dialogue.id, { lines: e.target.value })}
                    placeholder="输入台词..."
                    className="min-h-[60px] text-sm"
                />
                {/* 可选的表演提示 */}
                {dialogue.parenthetical !== undefined && (
                    <Input
                        value={dialogue.parenthetical ?? ""}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate(sceneId, dialogue.id, { parenthetical: e.target.value })}
                        placeholder="（表演提示，如：轻声地）"
                        className="mt-2 h-8 text-xs text-gray-500 italic"
                    />
                )}
            </div>

            {/* 删除按钮 */}
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(sceneId, dialogue.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
                <Trash2 className="w-4 h-4" />
            </Button>
        </div>
    );
});
