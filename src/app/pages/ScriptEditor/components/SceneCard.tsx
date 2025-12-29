// 场景卡片组件
import React, { memo, useState, useCallback } from 'react';
import { Plus, Trash2, Clock, ChevronDown, ChevronUp, Edit2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Checkbox } from '../../../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { DialogueItem } from './DialogueItem';
import type { SceneCardProps, Dialogue } from '../types';

export const SceneCard = memo(function SceneCard({
    scene,
    batchMode,
    isSelected,
    onToggleSelect,
    onUpdate,
    onDelete,
    onAddDialogue,
    onUpdateDialogue,
    onDeleteDialogue
}: SceneCardProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    // 格式化场景标题
    const formatSceneHeading = useCallback(() => {
        return `${scene.sceneNumber}. ${scene.sceneType}. ${scene.location} - ${scene.timeOfDay}`;
    }, [scene.sceneNumber, scene.sceneType, scene.location, scene.timeOfDay]);

    // 获取角色列表（用于对白角色选择）
    const characters = scene.characters.filter((c: string) => c && c !== '角色名');

    return (
        <Card className={`transition-all duration-200 ${isSelected ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:shadow-md'}`}>
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* 批量选择复选框 */}
                        {batchMode && (
                            <Checkbox
                                checked={isSelected}
                                onCheckedChange={() => onToggleSelect(scene.id)}
                            />
                        )}

                        {/* 场景标题 */}
                        <div className="flex-1">
                            {isEditing ? (
                                <div className="flex items-center gap-2">
                                    <Input
                                        value={scene.location ?? ""}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate(scene.id, { location: e.target.value })}
                                        className="h-8 w-40"
                                        placeholder="场景地点"
                                    />
                                    <Select
                                        value={scene.sceneType}
                                        onValueChange={(value: string) => onUpdate(scene.id, { sceneType: value as 'INT' | 'EXT' })}
                                    >
                                        <SelectTrigger className="h-8 w-24">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="INT">INT</SelectItem>
                                            <SelectItem value="EXT">EXT</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select
                                        value={scene.timeOfDay}
                                        onValueChange={(value: string) => onUpdate(scene.id, { timeOfDay: value })}
                                    >
                                        <SelectTrigger className="h-8 w-24">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="白天">白天</SelectItem>
                                            <SelectItem value="夜晚">夜晚</SelectItem>
                                            <SelectItem value="黄昏">黄昏</SelectItem>
                                            <SelectItem value="清晨">清晨</SelectItem>
                                            <SelectItem value="傍晚">傍晚</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button size="sm" variant="ghost" onClick={() => setIsEditing(false)}>
                                        完成
                                    </Button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center gap-2 text-left hover:text-purple-600 transition-colors"
                                >
                                    <span className="font-mono font-bold text-purple-700">
                                        {formatSceneHeading()}
                                    </span>
                                    <Edit2 className="w-3 h-3 opacity-50" />
                                </button>
                            )}
                        </div>

                        {/* 集数标签 */}
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            第 {scene.episodeNumber || 1} 集
                        </span>

                        {/* 时长 */}
                        {(scene.estimatedDuration || 0) > 0 && (
                            <span className="text-xs flex items-center gap-1 text-gray-500">
                                <Clock className="w-3 h-3" />
                                {scene.estimatedDuration}秒
                            </span>
                        )}
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex items-center gap-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                        {!batchMode && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => onDelete(scene.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        )}
                    </div>
                </div>

                {/* 转场效果 */}
                {scene.transition && (
                    <div className="text-xs text-gray-500 italic mt-1">
                        转场: {scene.transition}
                    </div>
                )}
            </CardHeader>

            {isExpanded && (
                <CardContent className="space-y-4">
                    {/* 动作描述 */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">动作描述</Label>
                        <Textarea
                            value={scene.action ?? ""}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onUpdate(scene.id, { action: e.target.value })}
                            placeholder="描述场景中的动作和环境..."
                            className="min-h-[80px] text-sm"
                        />
                    </div>

                    {/* 出场角色 */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">出场角色</Label>
                        <Input
                            value={(scene.characters || []).join(', ')}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate(scene.id, {
                                characters: e.target.value.split(',').map((c: string) => c.trim()).filter((c: string) => c)
                            })}
                            placeholder="角色1, 角色2, ..."
                            className="text-sm"
                        />
                    </div>

                    {/* 对白列表 */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium text-gray-700">
                                对白 ({scene.dialogues.length})
                            </Label>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onAddDialogue(scene.id)}
                                className="gap-1"
                            >
                                <Plus className="w-3 h-3" />
                                添加对白
                            </Button>
                        </div>

                        {scene.dialogues.length === 0 ? (
                            <div className="text-center text-gray-400 py-4 text-sm">
                                暂无对白，点击"添加对白"按钮创建
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {scene.dialogues.map((dialogue: Dialogue) => (
                                    <DialogueItem
                                        key={dialogue.id}
                                        dialogue={dialogue}
                                        sceneId={scene.id}
                                        characters={characters}
                                        onUpdate={onUpdateDialogue}
                                        onDelete={onDeleteDialogue}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 预计时长设置 */}
                    <div className="flex items-center gap-2">
                        <Label className="text-sm text-gray-600">预计时长（秒）</Label>
                        <Input
                            type="number"
                            value={scene.estimatedDuration || 0}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onUpdate(scene.id, { estimatedDuration: parseInt(e.target.value) || 0 })}
                            className="w-24 h-8 text-sm"
                            min="0"
                        />
                    </div>
                </CardContent>
            )}
        </Card>
    );
});
