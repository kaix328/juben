import type { StoryboardTemplate } from '../types';

/**
 * 内置分镜模板
 */
export const DEFAULT_TEMPLATES: StoryboardTemplate[] = [
  {
    id: 'template-dialogue-1',
    name: '经典对话模板',
    description: '正反打对话场景，适合两人对话',
    category: '对话',
    usageCount: 0,
    panels: [
      {
        description: '角色A说话',
        shot: '近景',
        angle: '平视',
        cameraMovement: '静止',
        duration: 3,
        characters: [],
        props: [],
        notes: '正打镜头',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '角色B说话',
        shot: '近景',
        angle: '平视',
        cameraMovement: '静止',
        duration: 3,
        characters: [],
        props: [],
        notes: '反打镜头',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '两人对话全景',
        shot: '全景',
        angle: '平视',
        cameraMovement: '静止',
        duration: 4,
        characters: [],
        props: [],
        notes: '建立空间关系',
        aiPrompt: '',
        aiVideoPrompt: ''
      }
    ]
  },
  {
    id: 'template-action-1',
    name: '动作场景模板',
    description: '展现动作的快速剪辑',
    category: '动作',
    usageCount: 0,
    panels: [
      {
        description: '动作准备',
        shot: '中景',
        angle: '平视',
        cameraMovement: '静止',
        duration: 2,
        characters: [],
        props: [],
        notes: '蓄力镜头',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '动作执行特写',
        shot: '特写',
        angle: '平视',
        cameraMovement: '推镜',
        duration: 1,
        characters: [],
        props: [],
        notes: '动作高潮',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '动作结果',
        shot: '全景',
        angle: '俯视',
        cameraMovement: '静止',
        duration: 3,
        characters: [],
        props: [],
        notes: '展现结果',
        aiPrompt: '',
        aiVideoPrompt: ''
      }
    ]
  },
  {
    id: 'template-chase-1',
    name: '追逐场景模板',
    description: '紧张的追逐戏',
    category: '追逐',
    usageCount: 0,
    panels: [
      {
        description: '追逐者视角',
        shot: '中景',
        angle: '平视',
        cameraMovement: '跟镜',
        duration: 3,
        characters: [],
        props: [],
        notes: '追赶镜头',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '被追者回头',
        shot: '近景',
        angle: '斜侧',
        cameraMovement: '摇镜',
        duration: 2,
        characters: [],
        props: [],
        notes: '紧张表情',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '环境障碍',
        shot: '全景',
        angle: '俯视',
        cameraMovement: '移镜',
        duration: 4,
        characters: [],
        props: [],
        notes: '空间展示',
        aiPrompt: '',
        aiVideoPrompt: ''
      }
    ]
  },
  {
    id: 'template-fight-1',
    name: '战斗场景模板',
    description: '激烈的战斗镜头',
    category: '战斗',
    usageCount: 0,
    panels: [
      {
        description: '对峙',
        shot: '全景',
        angle: '平视',
        cameraMovement: '环绕',
        duration: 3,
        characters: [],
        props: [],
        notes: '双方对峙',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '攻击动作',
        shot: '特写',
        angle: '仰视',
        cameraMovement: '推镜',
        duration: 2,
        characters: [],
        props: [],
        notes: '力量感',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '防御反击',
        shot: '中景',
        angle: '俯视',
        cameraMovement: '摇镜',
        duration: 2,
        characters: [],
        props: [],
        notes: '快速剪辑',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '战斗结果',
        shot: '远景',
        angle: '鸟瞰',
        cameraMovement: '升降',
        duration: 4,
        characters: [],
        props: [],
        notes: '胜负分明',
        aiPrompt: '',
        aiVideoPrompt: ''
      }
    ]
  },
  {
    id: 'template-transition-1',
    name: '场景转场模板',
    description: '流畅的场景过渡',
    category: '转场',
    usageCount: 0,
    panels: [
      {
        description: '前场景结束细节',
        shot: '特写',
        angle: '平视',
        cameraMovement: '静止',
        duration: 2,
        characters: [],
        props: [],
        notes: '承上',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '过渡镜头',
        shot: '远景',
        angle: '鸟瞰',
        cameraMovement: '拉镜',
        duration: 3,
        characters: [],
        props: [],
        notes: '空间过渡',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '新场景建立',
        shot: '全景',
        angle: '平视',
        cameraMovement: '推镜',
        duration: 3,
        characters: [],
        props: [],
        notes: '启下',
        aiPrompt: '',
        aiVideoPrompt: ''
      }
    ]
  },
  {
    id: 'template-reveal-1',
    name: '揭示镜头模板',
    description: '逐步揭示重要信息',
    category: '其他',
    usageCount: 0,
    panels: [
      {
        description: '神秘元素暗示',
        shot: '特写',
        angle: '斜侧',
        cameraMovement: '静止',
        duration: 2,
        characters: [],
        props: [],
        notes: '制造悬念',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '逐步揭示',
        shot: '中景',
        angle: '平视',
        cameraMovement: '拉镜',
        duration: 4,
        characters: [],
        props: [],
        notes: '缓慢展现',
        aiPrompt: '',
        aiVideoPrompt: ''
      },
      {
        description: '完全展示',
        shot: '全景',
        angle: '鸟瞰',
        cameraMovement: '环绕',
        duration: 3,
        characters: [],
        props: [],
        notes: '震撼效果',
        aiPrompt: '',
        aiVideoPrompt: ''
      }
    ]
  }
];
