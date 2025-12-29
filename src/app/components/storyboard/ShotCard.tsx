import React, { useRef, memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier, XYCoord } from 'dnd-core';
import {
    Sparkles, Trash2, Image as ImageIcon, Video, Camera, Wand2,
    Copy, MessageSquare, Music, Volume2, Settings2, RefreshCw, GripVertical, Film, Clock, Layers, Eye, Lightbulb, Plus
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Badge } from '../ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import type { StoryboardPanel } from '../../types';
import type { PanelStatus } from '../../pages/StoryboardEditor/types';
import { QUICK_PRESETS } from '../../pages/StoryboardEditor/presets';

interface DragItem {
    index: number;
    id: string;
}

interface DraggablePanelCardProps {
    panelId: string;
    index: number;
    movePanel: (dragIndex: number, hoverIndex: number) => void;
    children: React.ReactNode;
}

function DraggablePanelCard({ panelId, index, movePanel, children }: DraggablePanelCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: 'panel',
        collect(monitor) {
            return { handlerId: monitor.getHandlerId() };
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) return;
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) return;
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
            movePanel(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag, preview] = useDrag({
        type: 'panel',
        item: () => ({ id: panelId, index }),
        collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    });

    const opacity = isDragging ? 0.5 : 1;
    preview(drop(ref));

    return (
        <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
            <div className="flex items-start gap-2">
                <div ref={drag as unknown as React.LegacyRef<HTMLDivElement>} className="cursor-move pt-6 flex-shrink-0" title="拖动调整顺序">
                    <GripVertical className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
}

export interface ShotCardProps {
    panel: StoryboardPanel;
    index?: number;
    isSelected: boolean;
    status?: PanelStatus;
    onSelect: () => void;
    onUpdate: (params: Partial<StoryboardPanel>) => void;
    onDelete: () => void;
    onGenerateImage: () => Promise<any>;
    onCopy: () => void;
    onSplit: (count: number) => void;
    onGeneratePrompts: () => void;
    onApplyPreset: (params: Partial<StoryboardPanel>) => void;
    onCopyPrompt: (prompt: string, type: 'image' | 'video') => void;
    viewMode?: 'list' | 'grid';
    densityMode?: 'compact' | 'standard' | 'detailed';
}

// 🆕 使用 React.memo 优化，避免不必要的重渲染
export const ShotCard = memo(function ShotCardInner({
    panel,
    isSelected,
    status = 'idle',
    onSelect,
    onUpdate,
    onDelete,
    onGenerateImage,
    onCopy,
    onSplit,
    onGeneratePrompts,
    onApplyPreset,
    onCopyPrompt,
    viewMode = 'list',
    prevPanel,  // 🆕 上一个分镜（用于连贯性检查）
    nextPanel,  // 🆕 下一个分镜（用于连贯性检查）
}: ShotCardProps & { prevPanel?: any; nextPanel?: any }) {
    const isGrid = viewMode === 'grid';

    // 🆕 连贯性警告检测
    const continuityWarnings: string[] = [];

    // 连续相同景别警告
    if (prevPanel && nextPanel &&
        prevPanel.shot === panel.shot &&
        panel.shot === nextPanel.shot) {
        continuityWarnings.push('连续3镜相同景别');
    }

    // 同一机位连续使用警告
    if (prevPanel && prevPanel.setupShot === panel.setupShot && panel.setupShot) {
        continuityWarnings.push('连续同机位');
    }

    // 对话场景轴线警告
    if (panel.dialogue && panel.characters?.length >= 2 && !panel.axisNote) {
        continuityWarnings.push('对话场景需标注轴线');
    }

    const statusStyles: Record<PanelStatus, { label: string; color: string; icon?: React.ElementType }> = {
        idle: { label: '', color: '' },
        pending: { label: '排队中', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: RefreshCw },
        processing: { label: '生成中', color: 'bg-blue-100 text-blue-700 border-blue-200', icon: RefreshCw },
        completed: { label: '已完成', color: 'bg-green-100 text-green-700 border-green-200' },
        failed: { label: '失败', color: 'bg-red-100 text-red-700 border-red-200' },
        cancelled: { label: '已取消', color: 'bg-gray-100 text-gray-700 border-gray-200' }
    };
    const currentStatus = statusStyles[status] || statusStyles['idle'];

    // 🆕 Grid 模式：紧凑卡片布局
    if (isGrid) {
        return (
            <div
                className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all ${isSelected ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200 hover:ring-blue-300'}`}
                onClick={onSelect}
            >
                {/* 预览图 */}
                <div className="aspect-video bg-gray-100 relative">
                    {panel.generatedImage ? (
                        <img src={panel.generatedImage} alt={`分镜 ${panel.panelNumber}`} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                            暂无预览
                        </div>
                    )}
                    {/* 状态徽章 */}
                    {status !== 'idle' && currentStatus.label && (
                        <span className={`absolute top-1 right-1 px-1.5 py-0.5 rounded text-xs font-medium ${currentStatus.color}`}>
                            {currentStatus.label}
                        </span>
                    )}
                    {/* 选中标记 */}
                    {isSelected && (
                        <div className="absolute top-1 left-1 w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                    {/* 悬停操作 */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button variant="secondary" size="sm" onClick={(e) => { e.stopPropagation(); onGenerateImage(); }} className="text-xs">
                            <Sparkles className="w-3 h-3 mr-1" />生成
                        </Button>
                        <Button variant="secondary" size="sm" onClick={(e) => { e.stopPropagation(); onDelete(); }} className="text-xs text-red-500">
                            <Trash2 className="w-3 h-3" />
                        </Button>
                    </div>
                </div>
                {/* 底部信息 */}
                <div className="p-2 bg-white">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-700">#{panel.panelNumber}</span>
                        <span className="text-xs text-gray-500">{panel.shot}</span>
                    </div>
                    <div className="text-xs text-gray-500 truncate mt-0.5">{panel.description || '无描述'}</div>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                        {panel.duration && <span>{panel.duration}s</span>}
                        {panel.characters?.length > 0 && <span>{panel.characters.length}角色</span>}
                    </div>
                </div>
            </div>
        );
    }

    // List 模式：完整卡片布局
    return (
        <div className={`group relative border-2 rounded-xl transition-all ${isSelected ? 'border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/20' : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'}`}>
            {/* 顶部：选中框 + 分镜序号 + 操作按钮 */}
            <div className="flex items-center justify-between p-3 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3">
                    <Checkbox checked={isSelected} onCheckedChange={onSelect} className="w-5 h-5" />
                    <span className="text-lg font-bold text-gray-700">#{panel.panelNumber}</span>
                    {status !== 'idle' && currentStatus && currentStatus.label && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${currentStatus.color} flex items-center gap-1`}>
                            {currentStatus.icon && <currentStatus.icon className={`w-3 h-3 ${status === 'processing' ? 'animate-spin' : ''}`} />}
                            {currentStatus.label}
                        </span>
                    )}
                    {panel.characters.length > 0 && (
                        <Badge variant="outline" className="text-sm">{panel.characters.length} 角色</Badge>
                    )}
                    {/* 🆕 连贯性警告徽章 */}
                    {continuityWarnings.length > 0 && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200 cursor-help" title={continuityWarnings.join('；')}>
                            ⚠️ {continuityWarnings.length}个警告
                        </span>
                    )}
                </div>
                {/* 完整操作按钮栏 */}
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={(e) => { e.stopPropagation(); onGenerateImage(); }} disabled={status === 'processing'} className="gap-1">
                        <Sparkles className="w-4 h-4" />{panel.generatedImage ? '重新生成图片' : '生成预览图'}
                    </Button>
                    <Button variant="outline" size="sm" onClick={onGeneratePrompts} className="gap-1">
                        <Wand2 className="w-4 h-4" />刷新提示词
                    </Button>
                    <Button variant="outline" size="sm" onClick={onCopy} className="gap-1">
                        <Copy className="w-4 h-4" />复制分镜
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                                <Settings2 className="w-4 h-4" />拆分
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => onSplit(2)}>拆分为 2 个</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onSplit(3)}>拆分为 3 个</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                                <Camera className="w-4 h-4" />应用预设
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>专业预设</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {QUICK_PRESETS.map((p) => (
                                <DropdownMenuItem key={p.name} onClick={() => onApplyPreset(p.params)}>
                                    <p.icon className="w-4 h-4 mr-2 text-blue-500" />
                                    <div>
                                        <div className="font-medium">{p.name}</div>
                                        <div className="text-xs text-gray-500">{p.description}</div>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="outline" size="sm" onClick={onDelete} className="gap-1 text-red-600 border-red-200 hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />删除
                    </Button>
                </div>
            </div>

            <div className={`flex ${isGrid ? 'flex-col' : 'flex-row'} gap-4 p-4`}>
                {/* 左侧：图像预览 */}
                <div className={`${isGrid ? 'w-full aspect-video' : 'w-80 h-52'} relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0`}>
                    {panel.generatedImage ? (
                        <img src={panel.generatedImage} alt={`分镜 ${panel.panelNumber}`} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                            {status === 'processing' ? <RefreshCw className="w-12 h-12 animate-spin text-blue-500" /> : <ImageIcon className="w-12 h-12 opacity-40" />}
                            <span className="text-sm mt-2">{status === 'processing' ? '生成中...' : '点击上方按钮生成预览图'}</span>
                        </div>
                    )}
                </div>

                {/* 右侧：编辑区 */}
                <div className="flex-1 space-y-4">
                    {/* 第1行：画面描述 + 对白 */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1"><Camera className="w-4 h-4" />画面描述</Label>
                            <Textarea value={panel.description} onChange={(e) => onUpdate({ description: e.target.value })} className="min-h-[80px] text-sm" placeholder="描述画面内容..." />
                        </div>
                        <div>
                            <Label className="text-sm font-medium text-blue-600 mb-2 flex items-center gap-1"><MessageSquare className="w-4 h-4" />角色对白</Label>
                            <Textarea value={panel.dialogue || ''} onChange={(e) => onUpdate({ dialogue: e.target.value })} className="min-h-[80px] text-sm italic bg-blue-50/50" placeholder="输入角色台词..." />
                        </div>
                    </div>

                    {/* 第2行：基础参数（大按钮式） */}
                    <div className="grid grid-cols-6 gap-3">
                        <div>
                            <Label className="text-xs text-gray-500 mb-1">景别</Label>
                            <Select value={panel.shot} onValueChange={(val) => onUpdate({ shot: val })}>
                                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="全景">全景 (WS)</SelectItem><SelectItem value="中景">中景 (MS)</SelectItem><SelectItem value="特写">特写 (CU)</SelectItem>
                                    <SelectItem value="大特写">大特写 (ECU)</SelectItem><SelectItem value="远景">远景 (EWS)</SelectItem><SelectItem value="近景">近景 (MCU)</SelectItem>
                                    <SelectItem value="过肩">过肩 (OTS)</SelectItem><SelectItem value="主观">主观 (POV)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-xs text-gray-500 mb-1">角度</Label>
                            <Select value={panel.angle} onValueChange={(val) => onUpdate({ angle: val })}>
                                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="平视">平视</SelectItem><SelectItem value="俯视">俯视</SelectItem><SelectItem value="仰视">仰视</SelectItem>
                                    <SelectItem value="鸟瞰">鸟瞰</SelectItem><SelectItem value="蚁视">蚁视</SelectItem><SelectItem value="倾斜">倾斜</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-xs text-gray-500 mb-1">运动</Label>
                            <Select value={panel.cameraMovement || '静止'} onValueChange={(val) => onUpdate({ cameraMovement: val })}>
                                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="静止">静止</SelectItem><SelectItem value="推">推</SelectItem><SelectItem value="拉">拉</SelectItem>
                                    <SelectItem value="跟">跟</SelectItem><SelectItem value="摇">摇</SelectItem><SelectItem value="移">移</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-xs text-gray-500 mb-1">时长</Label>
                            <Select value={String(panel.duration || 3)} onValueChange={(val) => onUpdate({ duration: parseInt(val) })}>
                                <SelectTrigger className="h-9"><Clock className="w-3 h-3 mr-1" />{panel.duration || 3}秒</SelectTrigger>
                                <SelectContent>{[1, 2, 3, 4, 5, 8, 10, 15].map(s => <SelectItem key={s} value={String(s)}>{s}秒</SelectItem>)}</SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-xs text-gray-500 mb-1">转场</Label>
                            <Select value={panel.transition || '切至'} onValueChange={(val) => onUpdate({ transition: val })}>
                                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="切至">切至</SelectItem><SelectItem value="溶至">溶至</SelectItem><SelectItem value="淡出">淡出</SelectItem><SelectItem value="闪白">闪白</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-xs text-gray-500 mb-1">速度</Label>
                            <Select value={panel.motionSpeed || 'normal'} onValueChange={(val) => onUpdate({ motionSpeed: val as any })}>
                                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="slow">慢速</SelectItem><SelectItem value="normal">正常</SelectItem><SelectItem value="fast">快速</SelectItem><SelectItem value="timelapse">延时</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* 第3行：音效/音乐/备注 */}
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <Label className="text-xs text-orange-600 mb-1 flex items-center gap-1"><Volume2 className="w-3 h-3" />音效</Label>
                            <Input value={(panel.soundEffects || []).join(', ')} onChange={(e) => onUpdate({ soundEffects: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="h-9" placeholder="脚步声, 风声..." />
                        </div>
                        <div>
                            <Label className="text-xs text-purple-600 mb-1 flex items-center gap-1"><Music className="w-3 h-3" />背景音乐</Label>
                            <Input value={panel.music || ''} onChange={(e) => onUpdate({ music: e.target.value })} className="h-9" placeholder="紧张氛围音乐..." />
                        </div>
                        <div>
                            <Label className="text-xs text-gray-500 mb-1">备注</Label>
                            <Input value={panel.notes || ''} onChange={(e) => onUpdate({ notes: e.target.value })} className="h-9" placeholder="拍摄备注..." />
                        </div>
                    </div>

                    {/* 第4行：环境/角色动作/镜头意图 */}
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <Label className="text-xs text-teal-600 mb-1">环境动态</Label>
                            <Input value={panel.environmentMotion || ''} onChange={(e) => onUpdate({ environmentMotion: e.target.value })} className="h-9" placeholder="风吹树叶, 雨滴..." />
                        </div>
                        <div>
                            <Label className="text-xs text-teal-600 mb-1">角色动作</Label>
                            <Input value={(panel.characterActions || []).join(', ')} onChange={(e) => onUpdate({ characterActions: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="h-9" placeholder="张三:转身, 李四:挥手..." />
                        </div>
                        <div>
                            <Label className="text-xs text-amber-600 mb-1 flex items-center gap-1"><Eye className="w-3 h-3" />镜头意图</Label>
                            <Input value={panel.shotIntent || ''} onChange={(e) => onUpdate({ shotIntent: e.target.value })} className="h-9" placeholder="展现孤独感..." />
                        </div>
                    </div>

                    {/* 第5行：构图/灯光 */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label className="text-xs text-amber-600 mb-1 flex items-center gap-1"><Layers className="w-3 h-3" />构图</Label>
                            <Input value={panel.composition || ''} onChange={(e) => onUpdate({ composition: e.target.value })} className="h-9" placeholder="三分法, 对称, 引导线..." />
                        </div>
                        <div>
                            <Label className="text-xs text-amber-600 mb-1 flex items-center gap-1"><Lightbulb className="w-3 h-3" />灯光氛围</Label>
                            <Input value={panel.lighting?.mood || ''} onChange={(e) => onUpdate({ lighting: { ...panel.lighting, mood: e.target.value } })} className="h-9" placeholder="低调, 高调, 自然光..." />
                        </div>
                    </div>

                    {/* 🆕 第5.5行：镜头参数 lens/fStop/景深 */}
                    <div className="grid grid-cols-4 gap-3">
                        <div>
                            <Label className="text-xs text-cyan-600 mb-1">镜头</Label>
                            <Input value={panel.lens || ''} onChange={(e) => onUpdate({ lens: e.target.value })} className="h-9" placeholder="35mm" />
                        </div>
                        <div>
                            <Label className="text-xs text-cyan-600 mb-1">光圈</Label>
                            <Input value={panel.fStop || ''} onChange={(e) => onUpdate({ fStop: e.target.value })} className="h-9" placeholder="f/4" />
                        </div>
                        <div>
                            <Label className="text-xs text-cyan-600 mb-1">景深</Label>
                            <Select value={panel.depthOfField || 'NORMAL'} onValueChange={(val) => onUpdate({ depthOfField: val as any })}>
                                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="SHALLOW">浅景深</SelectItem>
                                    <SelectItem value="NORMAL">正常</SelectItem>
                                    <SelectItem value="DEEP">深景深</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-xs text-pink-600 mb-1">调色</Label>
                            <Input value={panel.colorGrade || ''} onChange={(e) => onUpdate({ colorGrade: e.target.value })} className="h-9" placeholder="冷调蓝绿..." />
                        </div>
                    </div>

                    {/* 🆕 第5.6行：道具/特效/机位/轴线 */}
                    <div className="grid grid-cols-4 gap-3">
                        <div>
                            <Label className="text-xs text-lime-600 mb-1">道具</Label>
                            <Input value={(panel.props || []).join(', ')} onChange={(e) => onUpdate({ props: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="h-9" placeholder="剑, 书, 杯..." />
                        </div>
                        <div>
                            <Label className="text-xs text-rose-600 mb-1">视觉特效</Label>
                            <Input value={(panel.vfx || []).join(', ')} onChange={(e) => onUpdate({ vfx: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="h-9" placeholder="火焰, 魔法..." />
                        </div>
                        <div>
                            <Label className="text-xs text-sky-600 mb-1">机位</Label>
                            <Select value={panel.setupShot || 'A机位'} onValueChange={(val) => onUpdate({ setupShot: val })}>
                                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A机位">A机位</SelectItem>
                                    <SelectItem value="B机位">B机位</SelectItem>
                                    <SelectItem value="C机位">C机位</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label className="text-xs text-sky-600 mb-1">轴线</Label>
                            <Input value={panel.axisNote || ''} onChange={(e) => onUpdate({ axisNote: e.target.value })} className="h-9" placeholder="保持180°轴线" />
                        </div>
                    </div>

                    {/* 🆕 第5.7行：环境动态/角色动作 */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label className="text-xs text-emerald-600 mb-1">环境动态</Label>
                            <Input value={panel.environmentMotion || ''} onChange={(e) => onUpdate({ environmentMotion: e.target.value })} className="h-9" placeholder="风吹树叶, 雨水滴落..." />
                        </div>
                        <div>
                            <Label className="text-xs text-orange-600 mb-1">角色动作</Label>
                            <Input value={(panel.characterActions || []).join(', ')} onChange={(e) => onUpdate({ characterActions: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })} className="h-9" placeholder="李明:转身, 张三:点头..." />
                        </div>
                    </div>

                    {/* 第6行：起止帧 */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Label className="text-xs text-indigo-600 mb-1 flex items-center gap-1"><Film className="w-3 h-3" />起始帧描述</Label>
                            <Textarea value={panel.startFrame || ''} onChange={(e) => onUpdate({ startFrame: e.target.value })} className="min-h-[60px] text-sm" placeholder="视频起始画面详细描述..." />
                        </div>
                        <div>
                            <Label className="text-xs text-indigo-600 mb-1 flex items-center gap-1"><Film className="w-3 h-3" />结束帧描述</Label>
                            <Textarea value={panel.endFrame || ''} onChange={(e) => onUpdate({ endFrame: e.target.value })} className="min-h-[60px] text-sm" placeholder="视频结束画面详细描述..." />
                        </div>
                    </div>

                    {/* 第7行：绘画提示词 + 视频提示词 */}
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-dashed border-gray-200">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Label className="text-sm font-medium text-indigo-600 flex items-center gap-1"><ImageIcon className="w-4 h-4" />绘画提示词 (Image Prompt)</Label>
                                <Button size="sm" variant="outline" onClick={() => onCopyPrompt(panel.aiPrompt || '', 'image')} className="h-7 text-xs gap-1">
                                    <Copy className="w-3 h-3" />复制提示词
                                </Button>
                            </div>
                            <Textarea value={panel.aiPrompt || ''} onChange={(e) => onUpdate({ aiPrompt: e.target.value })} className="min-h-[100px] text-sm font-mono bg-indigo-50/50" placeholder="AI 绘图提示词..." />
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <Label className="text-sm font-medium text-purple-600 flex items-center gap-1"><Video className="w-4 h-4" />视频提示词 (Video Prompt)</Label>
                                <Button size="sm" variant="outline" onClick={() => onCopyPrompt(panel.aiVideoPrompt || '', 'video')} className="h-7 text-xs gap-1">
                                    <Copy className="w-3 h-3" />复制提示词
                                </Button>
                            </div>
                            <Textarea value={panel.aiVideoPrompt || ''} onChange={(e) => onUpdate({ aiVideoPrompt: e.target.value })} className="min-h-[100px] text-sm font-mono bg-purple-50/50" placeholder="AI 视频提示词..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

// 🆕 添加 displayName 方便调试
ShotCard.displayName = 'ShotCard';

export const ShotCardDraggable = memo(function ShotCardDraggableInner(
    props: ShotCardProps & { movePanel: (d: number, h: number) => void }
) {
    return (
        <DraggablePanelCard panelId={props.panel.id} index={props.index || 0} movePanel={props.movePanel}>
            <ShotCard {...props} />
        </DraggablePanelCard>
    );
});

ShotCardDraggable.displayName = 'ShotCardDraggable';
