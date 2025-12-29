// 分镜编辑器预设常量
import { Camera, MessageSquare, Film, Maximize2 } from 'lucide-react';
import type { StoryboardPanel, ShotSize, CameraAngleType, CameraMovementType } from '../../types';

// 快捷参数预设（专业版）
export const QUICK_PRESETS: Array<{
    name: string;
    icon: typeof Camera;
    description: string;
    params: Partial<StoryboardPanel>;
}> = [
        {
            name: '建立镜头',
            icon: Camera,
            description: '新场景开场，展示环境',
            params: { shot: '远景', shotSize: 'WS' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '静止', movementType: 'STATIC' as CameraMovementType, duration: 5, shotIntent: '建立空间关系' }
        },
        {
            name: '对话正打',
            icon: MessageSquare,
            description: '对话场景 A 角度',
            params: { shot: '近景', shotSize: 'MCU' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '静止', movementType: 'STATIC' as CameraMovementType, duration: 3, composition: '三分法人物居右' }
        },
        {
            name: '对话反打',
            icon: MessageSquare,
            description: '对话场景 B 角度',
            params: { shot: '近景', shotSize: 'MCU' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '静止', movementType: 'STATIC' as CameraMovementType, duration: 3, composition: '三分法人物居左', setupShot: 'B角' }
        },
        {
            name: '过肩镜头',
            icon: Film,
            description: '双人对话过肩视角',
            params: { shot: '中景', shotSize: 'OTS' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '静止', movementType: 'STATIC' as CameraMovementType, duration: 4, shotIntent: '过肩双人视角' }
        },
        {
            name: '特写反应',
            icon: Maximize2,
            description: '强调角色情绪反应',
            params: { shot: '特写', shotSize: 'CU' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '静止', movementType: 'STATIC' as CameraMovementType, duration: 2, shotIntent: '捕捉情绪反应', focusPoint: '眼部' }
        },
        {
            name: '推进镜头',
            icon: Camera,
            description: '渐进式接近主体',
            params: { shot: '中景', shotSize: 'MS' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '推', movementType: 'DOLLY_IN' as CameraMovementType, duration: 4, shotIntent: '增加紧张感' }
        },
        {
            name: '跟随镜头',
            icon: Film,
            description: '跟随角色移动',
            params: { shot: '中景', shotSize: 'MS' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '跟', movementType: 'FOLLOW' as CameraMovementType, duration: 4, shotIntent: '保持动态感' }
        },
        {
            name: '低角仰视',
            icon: Camera,
            description: '突出角色力量感',
            params: { shot: '全景', shotSize: 'MWS' as ShotSize, angle: '仰视', cameraAngle: 'LOW' as CameraAngleType, cameraMovement: '静止', movementType: 'STATIC' as CameraMovementType, duration: 3, shotIntent: '展现权威/力量' }
        },
    ];

// 景别代码映射
export const SHOT_SIZE_MAP: Record<string, string> = {
    'ECU': '大特写', 'CU': '特写', 'MCU': '中近景', 'MS': '中景',
    'MWS': '中全景', 'WS': '全景', 'EWS': '远景', 'POV': '主观',
    'OTS': '过肩', 'TWO': '双人', 'GROUP': '群戏', 'INSERT': '插入',
    'AERIAL': '航拍', 'CUSTOM': '自定义'
};

// 运动代码映射
export const MOVEMENT_MAP: Record<string, string> = {
    'STATIC': '静止', 'PAN_L': '左横摇', 'PAN_R': '右横摇',
    'TILT_UP': '上纵摇', 'TILT_DOWN': '下纵摇',
    'DOLLY_IN': '推', 'DOLLY_OUT': '拉',
    'TRACK_L': '左跟踪', 'TRACK_R': '右跟踪',
    'CRANE_UP': '升', 'CRANE_DOWN': '降',
    'ZOOM_IN': '变焦推', 'ZOOM_OUT': '变焦拉',
    'HANDHELD': '手持', 'STEADICAM': '斯坦尼康',
    'DUTCH': '荷兰角', 'WHIP': '甩镜头', 'ARC': '弧形', 'FOLLOW': '跟随'
};

// 🆕 场景模板库（多分镜连续模板）
export const SCENE_TEMPLATES: Array<{
    name: string;
    category: '对话' | '动作' | '追逐' | '战斗' | '转场';
    description: string;
    panels: Partial<StoryboardPanel>[];
}> = [
        {
            name: '双人对话场景',
            category: '对话',
            description: '标准对话场景：建立镜头 → 正打 → 反打 → 反应',
            panels: [
                { description: '双人中景，交代场景关系', shot: '中景', shotSize: 'MS' as ShotSize, angle: '平视', cameraAngle: 'EYE_LEVEL' as CameraAngleType, cameraMovement: '静止', duration: 3, shotIntent: '建立对话空间' },
                { description: 'A角色近景，正在说话', shot: '近景', shotSize: 'MCU' as ShotSize, angle: '平视', cameraMovement: '静止', duration: 3, composition: '三分法人物居右' },
                { description: 'B角色近景，聆听/回应', shot: '近景', shotSize: 'MCU' as ShotSize, angle: '平视', cameraMovement: '静止', duration: 3, composition: '三分法人物居左', setupShot: 'B角' },
                { description: '反应特写，情绪变化', shot: '特写', shotSize: 'CU' as ShotSize, angle: '平视', cameraMovement: '静止', duration: 2, shotIntent: '捕捉情绪反应' }
            ]
        },
        {
            name: '追逐场景',
            category: '追逐',
            description: '追逐场景：远景建立 → 跟拍追逐者 → 跟拍逃跑者 → 推进紧张',
            panels: [
                { description: '远景，展示追逐发生的环境', shot: '远景', shotSize: 'EWS' as ShotSize, angle: '俯视', cameraAngle: 'HIGH' as CameraAngleType, cameraMovement: '摇', duration: 4, shotIntent: '建立追逐空间', soundEffects: ['急促脚步声', '风声'] },
                { description: '跟拍追逐者，动态冲击', shot: '中景', shotSize: 'MS' as ShotSize, angle: '平视', cameraMovement: '跟', movementType: 'FOLLOW' as CameraMovementType, duration: 3, motionSpeed: 'fast', soundEffects: ['喘息声'] },
                { description: '跟拍逃跑者，惊恐表情', shot: '近景', shotSize: 'MCU' as ShotSize, angle: '平视', cameraMovement: '跟', movementType: 'FOLLOW' as CameraMovementType, duration: 3, motionSpeed: 'fast' },
                { description: '推镜头，距离逼近', shot: '中景', shotSize: 'MS' as ShotSize, angle: '平视', cameraMovement: '推', movementType: 'DOLLY_IN' as CameraMovementType, duration: 2, shotIntent: '增加紧张感', music: '紧张鼓点BGM' }
            ]
        },
        {
            name: '战斗场景',
            category: '战斗',
            description: '战斗场景：对峙 → 特写蓄力 → 交锋 → 结果',
            panels: [
                { description: '双方对峙，紧张氛围', shot: '远景', shotSize: 'WS' as ShotSize, angle: '平视', cameraMovement: '静止', duration: 3, shotIntent: '建立对峙关系', soundEffects: ['风声', '衣袂飘动'], music: '悬疑弦乐' },
                { description: '特写，一方蓄力准备', shot: '特写', shotSize: 'CU' as ShotSize, angle: '仰视', cameraAngle: 'LOW' as CameraAngleType, cameraMovement: '推', duration: 2, shotIntent: '蓄力紧张', soundEffects: ['聚气声'] },
                { description: '快速交锋，动作模糊', shot: '中景', shotSize: 'MS' as ShotSize, angle: '平视', cameraMovement: '摇', movementType: 'WHIP' as CameraMovementType, duration: 1, motionSpeed: 'fast', soundEffects: ['刀剑交击', '拳风呼啸'] },
                { description: '结果镜头，分出胜负', shot: '远景', shotSize: 'WS' as ShotSize, angle: '平视', cameraMovement: '静止', duration: 3, transition: '闪白', soundEffects: ['落地声'] }
            ]
        },
        {
            name: '场景过渡',
            category: '转场',
            description: '场景过渡：结束镜头 → 淡出 → 新场景建立',
            panels: [
                { description: '当前场景最后一个画面', shot: '远景', shotSize: 'WS' as ShotSize, angle: '平视', cameraMovement: '拉', movementType: 'DOLLY_OUT' as CameraMovementType, duration: 3, transition: '淡出', shotIntent: '告别当前场景' },
                { description: '新场景建立镜头，展示环境', shot: '远景', shotSize: 'EWS' as ShotSize, angle: '平视', cameraMovement: '静止', duration: 4, transition: '淡入', shotIntent: '开启新篇章' }
            ]
        }
    ];
