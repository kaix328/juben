import type { ScriptScene, Character, Scene, AssetLibrary, StoryboardPanel, DirectorStyle } from '../types';
import { generateId } from './storage';
import { callDeepSeek, callDoubaoImage, optimizePrompt, parseJSON } from './volcApi';
import {
  generateStoryboardImagePrompt,
  generateStoryboardVideoPrompt,
  SOUND_PRESETS,
  MUSIC_PRESETS,
  EMOTIONAL_CAMERA_PRESETS,
  CAMERA_SPEED_KEYWORDS
} from './promptGenerator';
import { PromptEngine } from './promptEngine';
import { DENSITY_CONFIG, splitLongDialogue, detectSpeakingWithAction, type DensityMode } from '../constants/densityConfig';

// 🆕 开发环境日志工具（生产环境不输出）
const isDev = import.meta.env?.DEV ?? true;
const devLog = (...args: any[]) => {
  if (isDev) console.log(...args);
};

// 🆕 AI 调用重试机制（指数退避）
async function callWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error | null = null;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e as Error;
      console.warn(`[重试机制] 第 ${i + 1} 次调用失败，${i < maxRetries - 1 ? `${baseDelay * Math.pow(2, i)}ms 后重试` : '已达最大重试次数'}`);
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, baseDelay * Math.pow(2, i)));
      }
    }
  }
  throw lastError || new Error('未知错误');
}

// 🆕 长对白拆分已移至 constants/densityConfig.ts，直接使用导入的 splitLongDialogue

// 🆕 角色一致性检查（返回未知角色列表）
function checkCharacterConsistency(
  panelCharacters: string[],
  assetCharacters: Character[]
): string[] {
  if (!panelCharacters || panelCharacters.length === 0) return [];
  const knownNames = new Set(assetCharacters.map(c => c.name));
  return panelCharacters.filter(name => !knownNames.has(name));
}

// 剧本模式配置
export type ScriptMode = 'movie' | 'tv_drama' | 'short_video' | 'web_series';

const MODE_DESCRIPTIONS: Record<ScriptMode, string> = {
  movie: '电影剧本，标准三幕或四幕结构，场景较长，注重视觉叙事',
  tv_drama: '电视剧剧本，每集约45分钟，有明确的集数划分和幕间高潮',
  short_video: '短视频剧本，3分钟以内，节奏快，开场即高潮',
  web_series: '网络剧剧本，每集10-20分钟，注重悬念和钩子'
};

// 从原文提取剧本（专业版 - 支持导演风格）
export async function extractScript(
  originalText: string,
  mode: ScriptMode = 'tv_drama',
  directorStyle?: { artStyle?: string; mood?: string; customPrompt?: string }
): Promise<ScriptScene[]> {
  const modeDesc = MODE_DESCRIPTIONS[mode];

  // 构建风格提示
  let styleHint = '';
  if (directorStyle) {
    const hints: string[] = [];
    if (directorStyle.artStyle) {
      // 根据艺术风格调整对白风格
      if (directorStyle.artStyle.includes('赛博') || directorStyle.artStyle.includes('科幻')) {
        hints.push('对白风格：简洁干练，带有科技感和未来感');
      } else if (directorStyle.artStyle.includes('港片') || directorStyle.artStyle.includes('复古')) {
        hints.push('对白风格：干脆利落，经典港片风格，可适当使用经典台词结构');
      } else if (directorStyle.artStyle.includes('日系') || directorStyle.artStyle.includes('动画')) {
        hints.push('对白风格：情感细腻，可适当使用内心独白强化情感');
      }
    }
    if (directorStyle.mood) {
      hints.push(`整体氛围：${directorStyle.mood}`);
    }
    if (hints.length > 0) {
      styleHint = `\n\n【导演风格提示】\n${hints.join('\n')}`;
    }
  }

  const prompt = `你是一位拥有20年经验的专业编剧。请将以下文本改编为标准影视剧本格式。

【剧本类型】${modeDesc}${styleHint}

【输出规范】
1. 场景行格式：场景号. 内/外景. 地点 - 时间
2. 动作描述：现在时态，第三人称，简洁有力，视觉化表达
3. 角色首次出场：标记 isFirstAppearance=true，并提供简短外貌描述
4. 对白标记：
   - V.O. = 画外音（角色在画外说话）
   - O.S. = 场外音（角色在场景中但不在画面内）
   - CONT'D = 延续对白（同一角色连续说话被动作打断后继续）
5. 括号指示：仅用于必要的表演提示，如"（轻声地）"、"（怒视）"

【专业技巧】
- 每个场景应有明确的戏剧目的（推进剧情/揭示角色/制造冲突）
- 删除冗余的叙述性语言，只保留可视化内容
- 对白应自然、口语化，符合角色性格
- 适当添加转场指示（切至、淡出、溶至等）
- 估算每个场景的时长（秒）

【特殊场景类型】
- FLASHBACK: 闪回
- MONTAGE: 蒙太奇
- INSERT: 插入镜头
- INTERCUT: 交叉剪辑

请严格按照以下 JSON 格式返回，不要包含 Markdown 格式标记：
[
  {
    "sceneNumber": 1,
    "episodeNumber": 1,
    "location": "场景地点",
    "subLocation": "子场景（可选）",
    "timeOfDay": "白天/夜晚/黄昏/清晨",
    "sceneType": "INT/EXT",
    "continuity": "CONTINUOUS/LATER/SAME（可选）",
    "specialSceneType": "FLASHBACK/MONTAGE/INSERT（可选）",
    "action": "动作描述，现在时态，视觉化表达",
    "beat": "情绪节拍（可选，如：紧张升级、情感爆发）",
    "transition": "切至/淡出/溶至（可选）",
    "estimatedDuration": 30,
    "characters": ["角色A", "角色B"],
    "dialogues": [
      {
        "character": "角色A",
        "extension": "V.O./O.S.（可选）",
        "parenthetical": "表演提示（可选）",
        "lines": "台词内容",
        "isFirstAppearance": true/false,
        "isContinued": false
      }
    ],
    "notes": "编剧备注（可选）"
  }
]

文本内容：
${originalText.substring(0, 15000)}
`;

  try {
    const result = await callDeepSeek([{ role: 'user', content: prompt }]);
    const scenes = parseJSON(result);

    // 补全 ID 等前端需要的字段
    return scenes.map((s: any, index: number) => ({
      id: generateId(),
      sceneNumber: s.sceneNumber || index + 1,
      episodeNumber: s.episodeNumber || 1,
      location: s.location || '未知场景',
      subLocation: s.subLocation,
      timeOfDay: s.timeOfDay || '白天',
      sceneType: s.sceneType || 'INT',
      continuity: s.continuity,
      specialSceneType: s.specialSceneType,
      dayNightNumber: s.dayNightNumber,
      characters: s.characters || [],
      action: s.action || '',
      beat: s.beat,
      dialogues: (s.dialogues || []).map((d: any) => ({
        id: generateId(),
        character: d.character,
        extension: d.extension,
        parenthetical: d.parenthetical,
        lines: d.lines,
        isFirstAppearance: d.isFirstAppearance || false,
        isContinued: d.isContinued || false,
        dual: d.dual
      })),
      transition: s.transition,
      estimatedDuration: s.estimatedDuration || 15,
      notes: s.notes
    }));
  } catch (error) {
    console.error('DeepSeek extractScript failed:', error);
    throw new Error('AI 剧本生成失败，请检查网络或 Key');
  }
}

// 🆕 智能后处理：自动填充音效、音乐、起始帧、结束帧（含上下文感知）
function smartFillPanel(
  panel: any,
  scene?: ScriptScene,
  prevPanel?: any,  // 🆕 前一个分镜（上下文感知）
  nextPanel?: any,  // 🆕 后一个分镜（上下文感知）
  allPanels?: any[] // 🆕 所有分镜（用于场景级统一）
): any {
  const desc = (panel.description || '').toLowerCase();
  const location = (scene?.location || '').toLowerCase();
  const beat = scene?.beat || '';
  const mood = (panel.atmosphere || panel.emotionalBeat || beat || '').toUpperCase();

  // 🆕 0. 上下文感知：开始帧承接上一镜结束帧
  if (prevPanel && prevPanel.endFrame && (!panel.startFrame || panel.startFrame === '')) {
    panel.startFrame = `承接上一镜：${prevPanel.endFrame}`;
  }

  // 🆕 0.1 场景级音乐统一：同sceneId使用相同音乐
  if (allPanels && allPanels.length > 0 && (!panel.music || panel.music === '')) {
    const sameScenePanels = allPanels.filter(p => p.sceneId === panel.sceneId && p.music);
    if (sameScenePanels.length > 0) {
      panel.music = sameScenePanels[0].music;
    }
  }

  // 🆕 0.2 集级调色统一：同episodeNumber使用相同基础调色
  if (allPanels && allPanels.length > 0 && (!panel.colorGrade || panel.colorGrade === '' || panel.colorGrade === '自然调色')) {
    const sameEpisodePanels = allPanels.filter(p => p.episodeNumber === panel.episodeNumber && p.colorGrade && p.colorGrade !== '自然调色');
    if (sameEpisodePanels.length > 0) {
      panel.colorGrade = sameEpisodePanels[0].colorGrade;
    }
  }


  // 1. 智能推断音效 (接入 SOUND_PRESETS)
  if (!panel.soundEffects || panel.soundEffects.length === 0) {
    const soundEffects: string[] = [];

    // 根据场景类型匹配音效预设
    if (location.includes('战斗') || desc.includes('打斗') || desc.includes('击')) {
      soundEffects.push(...SOUND_PRESETS['战斗']);
    } else if (location.includes('雨') || desc.includes('下雨')) {
      soundEffects.push(...SOUND_PRESETS['雨景']);
    } else if (location.includes('森') || location.includes('山') || location.includes('野')) {
      soundEffects.push(...SOUND_PRESETS['森林']);
    } else if (location.includes('市') || location.includes('街') || location.includes('路')) {
      soundEffects.push(...SOUND_PRESETS['城市环境']);
    } else if (location.includes('海') || location.includes('水') || location.includes('湖')) {
      soundEffects.push(...SOUND_PRESETS['水边']);
    } else if (location.includes('科幻') || location.includes('机械') || location.includes('船')) {
      soundEffects.push(...SOUND_PRESETS['科幻/机械']);
    } else {
      soundEffects.push('环境背景音');
    }

    // 根据动作追加具体音效
    if (desc.includes('脚步') || desc.includes('走') || desc.includes('跑')) {
      soundEffects.push('规律脚步声');
    }
    if (desc.includes('门') || desc.includes('开') || desc.includes('关')) {
      soundEffects.push('木门转轴声');
    }
    if (desc.includes('说') || desc.includes('喊') || panel.dialogue) {
      soundEffects.push('清晰人声对白');
    }

    panel.soundEffects = [...new Set(soundEffects)].slice(0, 3); // 去重并截断
  }

  // 2. 智能推断背景音乐 (接入 MUSIC_PRESETS)
  if (!panel.music || panel.music === '背景音乐') {
    if (mood.includes('TENSE') || mood.includes('紧张') || mood.includes('危险')) {
      panel.music = MUSIC_PRESETS['紧张'][0];
    } else if (mood.includes('ROMANTIC') || mood.includes('浪漫') || mood.includes('温馨')) {
      panel.music = MUSIC_PRESETS['浪漫'][0];
    } else if (mood.includes('SAD') || mood.includes('悲伤') || mood.includes('忧郁')) {
      panel.music = MUSIC_PRESETS['悲伤'][0];
    } else if (mood.includes('HAPPY') || mood.includes('欢快') || mood.includes('轻松')) {
      panel.music = MUSIC_PRESETS['欢快'][0];
    } else if (mood.includes('ACTION') || mood.includes('动作') || mood.includes('热血')) {
      panel.music = MUSIC_PRESETS['热血'][0];
    } else if (location.includes('古') || location.includes('武侠') || location.includes('庙')) {
      panel.music = MUSIC_PRESETS['古风'][0];
    } else {
      panel.music = '通用叙事背景音乐';
    }
  }

  // 3. 智能情绪运镜推荐 (🆕 上下文连贯性版)
  if (!panel.cameraMovement || panel.cameraMovement === '静止') {
    // 🆕 上下文连贯性推断（替代纯随机）
    const prevMovement = prevPanel?.cameraMovement || '';
    const nextHasDialogue = nextPanel?.dialogue && nextPanel.dialogue.length > 10;
    const isSceneStart = panel.panelNumber === 1 || panel.sceneId !== prevPanel?.sceneId;
    const isSceneEnd = nextPanel && panel.sceneId !== nextPanel.sceneId;

    // 🆕 运镜连贯性规则
    const getCoherentMovement = (): string => {
      // 规则1: 场景开始用建立镜头
      if (isSceneStart) return '静止'; // 建立镜头保持稳定

      // 规则2: 场景结束前用拉镜
      if (isSceneEnd) return '抽离后拉';

      // 规则3: 下一镜是对话，当前保持稳定过渡
      if (nextHasDialogue) return '静止';

      // 规则4: 推镜后通常静止
      if (prevMovement === '聚焦推进' || prevMovement === '爆发急推' || prevMovement.includes('推')) {
        return '静止';
      }

      // 规则5: 拉镜后可再推
      if (prevMovement === '抽离后拉' || prevMovement.includes('拉')) {
        return '聚焦推进';
      }

      // 规则6: 静止后可开始运动
      if (prevMovement === '静止' || prevMovement === '') {
        // 根据情绪选择运镜方向
        if (mood.includes('TENSE') || mood.includes('ANGRY')) return '爆发急推';
        if (mood.includes('SAD') || mood.includes('LONELY')) return '压抑下降';
        if (mood.includes('REVEAL')) return '升华上升';
        return '陪伴平移';
      }

      return '静止'; // 默认稳定
    };

    // 如果有明确情绪，优先情绪驱动
    if (mood.includes('TENSE') || mood.includes('ANGRY')) {
      panel.cameraMovement = isSceneStart ? '静止' : '手持抖动';
    } else if (mood.includes('SAD') || mood.includes('LONELY')) {
      panel.cameraMovement = getCoherentMovement();
    } else if (mood.includes('MYSTERY') || mood.includes('SUSPENSE')) {
      panel.cameraMovement = '探索横摇';
    } else if (mood.includes('REVEAL') || mood.includes('SUBLIME')) {
      panel.cameraMovement = isSceneEnd ? '抽离后拉' : '升华上升';
    } else if (mood.includes('ROMANTIC') || mood.includes('CALM')) {
      panel.cameraMovement = '陪伴平移';
    } else if (mood.includes('ACTION') || mood.includes('CHASE')) {
      panel.cameraMovement = '跟';
    } else if (panel.dialogue && panel.dialogue.length > 20) {
      panel.cameraMovement = '静止'; // 长对话保持稳定
    } else {
      panel.cameraMovement = getCoherentMovement();
    }
  }

  // 4. 智能推断起始帧和结束帧 (增强专业性)
  if (!panel.startFrame || panel.startFrame === '静止画面') {
    const chars = panel.characters?.join('、') || '主体';
    const movement = panel.movementType || panel.cameraMovement || '静止';

    if (movement === 'DOLLY_IN' || movement === '推' || movement === '聚焦推进' || movement === '爆发急推') {
      panel.startFrame = `${chars}处于全景构图中心`;
      panel.endFrame = `${chars}面部特写，表情细节清晰`;
    } else if (movement === 'DOLLY_OUT' || movement === '拉' || movement === '抽离后拉' || movement === '爆发急拉') {
      panel.startFrame = `${chars}近景特写`;
      panel.endFrame = `${chars}在广阔远景中显得渺小`;
    } else if (movement === 'FOLLOW' || movement === '跟' || movement === '陪伴平移') {
      panel.startFrame = `${chars}开始侧向/正向移动`;
      panel.endFrame = `保持与${chars}同步高度的动态跟随`;
    } else if (movement === 'PAN_L' || movement === 'PAN_R' || movement === '探索横摇') {
      panel.startFrame = `场景边缘起始点，${chars}尚未入画`;
      panel.endFrame = `横移扫过场景，${chars}出现在黄金分割点`;
    } else if (panel.dialogue) {
      panel.startFrame = `${chars}开口瞬间的气息捕捉`;
      panel.endFrame = `${chars}说完对白后的微表情收尾`;
    } else {
      panel.startFrame = `${chars}处于画面稳定构图位置`;
      panel.endFrame = `画面保持稳定，光影微动`;
    }
  }

  // 5. 智能转场推断
  if (!panel.transition || panel.transition === '切至') {
    if (desc.includes('回忆') || desc.includes('过去')) {
      panel.transition = '溶至';
    } else if (desc.includes('惊醒') || desc.includes('突变')) {
      panel.transition = '闪白';
    } else if (desc.includes('落幕') || desc.includes('结束')) {
      panel.transition = '淡出';
    }
  }

  // 6. 智能推断运动速度 (接入 CAMERA_SPEED_KEYWORDS)
  if (!panel.motionSpeed || panel.motionSpeed === 'normal') {
    if (mood.includes('TENSE') || mood.includes('ACTION')) {
      panel.motionSpeed = 'fast';
    } else if (mood.includes('CALM') || mood.includes('SAD')) {
      panel.motionSpeed = 'slow';
    }
  }

  // 🆕 7. 智能推断镜头参数 (lens/fStop/depthOfField) - 行业标准修正版
  const shotSize = panel.shotSize || panel.shot || 'MS';
  if (!panel.lens) {
    // 🎬 基于电影工业标准的镜头参数映射
    if (shotSize === 'ECU' || shotSize === '大特写') {
      panel.lens = '100mm macro';  // 微距镜头用于极端特写
      panel.fStop = 'f/2.8';
      panel.depthOfField = 'SHALLOW';
    } else if (shotSize === 'CU' || shotSize === '特写') {
      panel.lens = '85mm';  // 人像首选
      panel.fStop = 'f/2';
      panel.depthOfField = 'SHALLOW';
    } else if (shotSize === 'MCU' || shotSize === '近景') {
      panel.lens = '50mm';  // 标准镜头，近景最佳
      panel.fStop = 'f/2.8';
      panel.depthOfField = 'SHALLOW';
    } else if (shotSize === 'MS' || shotSize === '中景') {
      panel.lens = '50mm';  // 标准镜头，中景通用
      panel.fStop = 'f/4';
      panel.depthOfField = 'NORMAL';
    } else if (shotSize === 'MWS' || shotSize === '中全景') {
      panel.lens = '35mm';  // 小广角，中全景最佳
      panel.fStop = 'f/5.6';
      panel.depthOfField = 'NORMAL';
    } else if (shotSize === 'WS' || shotSize === '全景' || shotSize === '远景') {
      panel.lens = '24mm';  // 广角镜头
      panel.fStop = 'f/8';
      panel.depthOfField = 'DEEP';
    } else if (shotSize === 'EWS' || shotSize === '大远景') {
      panel.lens = '16mm';  // 超广角
      panel.fStop = 'f/11';
      panel.depthOfField = 'DEEP';
    } else {
      panel.lens = '50mm';  // 默认标准镜头
      panel.fStop = 'f/4';
      panel.depthOfField = 'NORMAL';
    }
  }

  // 🆕 8. 智能推断灯光氛围 (lighting.mood)
  if (!panel.lighting || !panel.lighting.mood) {
    panel.lighting = panel.lighting || {};
    if (mood.includes('TENSE') || mood.includes('紧张') || mood.includes('SUSPENSE')) {
      panel.lighting.mood = '低调光影，高反差';
      panel.lighting.keyLight = '侧光为主，形成明暗对比';
    } else if (mood.includes('ROMANTIC') || mood.includes('浪漫') || mood.includes('温馨')) {
      panel.lighting.mood = '柔和暖光，高调氛围';
      panel.lighting.keyLight = '柔光正面，轮廓光勾边';
    } else if (mood.includes('SAD') || mood.includes('悲伤') || mood.includes('忧郁')) {
      panel.lighting.mood = '冷色调，低饱和';
      panel.lighting.keyLight = '顶光或逆光，形成剪影';
    } else if (mood.includes('ACTION') || mood.includes('动作') || mood.includes('热血')) {
      panel.lighting.mood = '高对比，动态光效';
      panel.lighting.keyLight = '硬光为主，强调立体';
    } else if (location.includes('夜') || location.includes('晚')) {
      panel.lighting.mood = '夜景氛围，点光源为主';
      panel.lighting.keyLight = '实景光源（路灯/月光）';
      panel.lighting.practicalLights = ['城市灯光', '月光'];
    } else if (location.includes('日') || location.includes('白天')) {
      panel.lighting.mood = '自然日光，通透明亮';
      panel.lighting.keyLight = '太阳光为主光';
    } else {
      panel.lighting.mood = '自然光影';
    }
  }

  // 🆕 9. 智能提取道具列表 (props)
  if (!panel.props || panel.props.length === 0) {
    const propsExtracted: string[] = [];
    const propKeywords = ['剑', '刀', '枪', '书', '杯', '碗', '椅', '桌', '门', '窗', '灯', '镜', '笔', '纸', '信', '手机', '电脑', '车', '包', '伞', '钥匙', '戒指', '项链', '眼镜', '帽子', '花', '酒', '药', '钱', '地图', '照片'];
    for (const keyword of propKeywords) {
      if (desc.includes(keyword)) {
        propsExtracted.push(keyword);
      }
    }
    if (propsExtracted.length > 0) {
      panel.props = propsExtracted.slice(0, 5);
    }
  }

  // 🆕 10. 智能推断视觉特效 (vfx)
  if (!panel.vfx || panel.vfx.length === 0) {
    const vfxList: string[] = [];
    if (desc.includes('爆炸') || desc.includes('火')) {
      vfxList.push('火焰特效', '烟尘粒子');
    }
    if (desc.includes('魔法') || desc.includes('法术') || desc.includes('能量')) {
      vfxList.push('魔法光效', '能量波动');
    }
    if (desc.includes('雨') || desc.includes('雪')) {
      vfxList.push('天气粒子系统');
    }
    if (desc.includes('闪电') || desc.includes('电')) {
      vfxList.push('闪电特效');
    }
    if (desc.includes('模糊') || desc.includes('慢动作')) {
      vfxList.push('运动模糊');
    }
    if (vfxList.length > 0) {
      panel.vfx = vfxList;
    }
  }

  // 🆕 11. 智能推断调色参考 (colorGrade)
  if (!panel.colorGrade) {
    if (mood.includes('TENSE') || mood.includes('紧张')) {
      panel.colorGrade = '冷调蓝绿，去饱和';
    } else if (mood.includes('ROMANTIC') || mood.includes('浪漫')) {
      panel.colorGrade = '暖调橙黄，柔化高光';
    } else if (mood.includes('SAD') || mood.includes('悲伤')) {
      panel.colorGrade = '低饱和蓝灰，压暗中间调';
    } else if (mood.includes('ACTION') || mood.includes('热血')) {
      panel.colorGrade = '高对比橙蓝色调';
    } else if (location.includes('古') || location.includes('武侠')) {
      panel.colorGrade = '复古暖黄，略微去饱和';
    } else {
      panel.colorGrade = '自然调色';
    }
  }

  // 🆕 12. 智能推断机位标记 (setupShot/axisNote)
  if (!panel.setupShot) {
    const idx = panel.panelNumber || 1;
    if (panel.composition?.includes('居右') || panel.composition?.includes('左侧')) {
      panel.setupShot = 'A机位';
    } else if (panel.composition?.includes('居左') || panel.composition?.includes('右侧')) {
      panel.setupShot = 'B机位';
    } else if (idx % 2 === 1) {
      panel.setupShot = 'A机位';
    } else {
      panel.setupShot = 'B机位';
    }
  }

  // 🆕 12.1 智能轴线判断 - 增强版：多人场景 + 连续性
  if (!panel.axisNote) {
    const charCount = panel.characters?.length || 0;
    const prevChars = prevPanel?.characters || [];
    const sameChars = panel.characters?.filter((c: string) => prevChars.includes(c)) || [];
    const isSceneChange = panel.sceneId !== prevPanel?.sceneId;

    // 规则1: 场景切换，重新建立轴线
    if (isSceneChange) {
      panel.axisNote = '新场景，重新建立轴线';
    }
    // 规则2: 群戏场景（3人以上）
    else if (charCount >= 3) {
      panel.axisNote = '群戏场景，建立主轴后保持一致';
    }
    // 规则3: 双人对话，180°规则
    else if (panel.dialogue && charCount >= 2) {
      panel.axisNote = '保持180°轴线，正反打切换';
    }
    // 规则4: 延续角色，保持位置
    else if (sameChars.length > 0 && charCount <= 2) {
      panel.axisNote = `延续上一镜轴线，${sameChars[0]}位置保持`;
    }
    // 规则5: 跟镜动态轴线
    else if (panel.cameraMovement === '跟' || panel.movementType === 'FOLLOW') {
      panel.axisNote = '动态轴线，随角色移动';
    }
    // 规则6: 单人镜头
    else if (charCount === 1) {
      panel.axisNote = '单人镜头，注意与前后镜头朝向一致';
    }
    // 默认
    else {
      panel.axisNote = '保持轴线';
    }
  }

  // 🆕 13. 智能推断构图 (composition) - 增强版：基于描述内容
  if (!panel.composition) {
    const shotSize = panel.shotSize || panel.shot || '';

    // 🆕 优先检测描述中的构图关键词
    if (desc.includes('窗') || desc.includes('门框') || desc.includes('拱门') || desc.includes('走廊尽头')) {
      panel.composition = '框架构图，人物被门窗框住';
    } else if (desc.includes('道路') || desc.includes('走廊') || desc.includes('隧道') || desc.includes('铁轨')) {
      panel.composition = '引导线构图，纵深延伸';
    } else if (desc.includes('镜子') || desc.includes('水面倒影') || desc.includes('对称')) {
      panel.composition = '对称/反射构图';
    } else if (desc.includes('背影') || desc.includes('剪影') || desc.includes('逆光')) {
      panel.composition = '轮廓构图，强调形态';
    } else if (desc.includes('俯瞰') || desc.includes('鸟瞰') || desc.includes('从上往下')) {
      panel.composition = '俯视构图，展示空间关系';
    } else if (desc.includes('仰望') || desc.includes('从下往上') || desc.includes('高耸')) {
      panel.composition = '仰视构图，强调威严/渺小';
    } else if (desc.includes('角落') || desc.includes('边缘') || desc.includes('靠窗')) {
      panel.composition = '负空间构图，主体偏侧留白';
    } else if (desc.includes('人群') || desc.includes('围观') || desc.includes('中心')) {
      panel.composition = '中心放射构图';
    } else if (shotSize === 'WS' || shotSize === 'EWS' || shotSize === '远景' || shotSize === '大远景') {
      panel.composition = '三分法构图，环境占2/3';
    } else if (shotSize === 'OTS' || panel.dialogue) {
      panel.composition = '过肩构图，主体偏一侧';
    } else if (panel.characters?.length >= 2) {
      panel.composition = '对称构图，双人居中';
    } else if (shotSize === 'CU' || shotSize === 'ECU' || shotSize === '特写') {
      panel.composition = '中心构图，人物居中';
    } else {
      panel.composition = '三分法构图';
    }
  }

  // 🆕 14. 智能推断镜头意图 (shotIntent)
  if (!panel.shotIntent) {
    const shotSize = panel.shotSize || panel.shot || '';
    if (shotSize === 'WS' || shotSize === 'EWS' || shotSize === '远景') {
      panel.shotIntent = '建立空间，交代环境';
    } else if (panel.dialogue) {
      panel.shotIntent = '展示对话，传递信息';
    } else if (shotSize === 'CU' || shotSize === 'ECU' || shotSize === '特写') {
      panel.shotIntent = '揭示细节，强调情绪';
    } else if (mood.includes('TENSE') || mood.includes('紧张')) {
      panel.shotIntent = '制造紧张，推进冲突';
    } else if (mood.includes('REVEAL')) {
      panel.shotIntent = '揭示人物，引发好奇';
    } else if (panel.panelNumber <= 2) {
      panel.shotIntent = '开场建立，吸引注意';
    } else {
      panel.shotIntent = '推进叙事';
    }
  }

  // 🆕 15. 智能推断环境动态 (environmentMotion) - 增强版：时间段映射
  if (!panel.environmentMotion) {
    const timeOfDay = (scene?.timeOfDay || '').toLowerCase();

    // 🆕 时间段环境动态映射
    const TIME_ENVIRONMENT_MAP: Record<string, string> = {
      '清晨': '晨雾弥漫，露水滴落',
      '早晨': '阳光渐强，鸟鸣阵阵',
      '黄昏': '夕阳余晖，天色渐暗',
      '傍晚': '霞光万道，影子拉长',
      '深夜': '月光摇曳，虫鸣阵阵',
      '夜晚': '灯光点点，夜色朦胧',
      '正午': '阳光直射，影子短小',
      '午后': '阳光斜照，微风轻拂'
    };

    // 优先检测天气/环境关键词
    if (location.includes('雨') || desc.includes('下雨') || desc.includes('暴雨')) {
      panel.environmentMotion = '雨水滴落，水花飞溅';
    } else if (location.includes('雪') || desc.includes('下雪') || desc.includes('飘雪')) {
      panel.environmentMotion = '雪花飘落，白雪皑皑';
    } else if (location.includes('风') || desc.includes('狂风') || desc.includes('大风')) {
      panel.environmentMotion = '狂风呼啸，尘土飞扬';
    } else if (location.includes('风') || desc.includes('微风') || desc.includes('风')) {
      panel.environmentMotion = '微风轻拂，衣袂飘动';
    } else if (location.includes('海') || location.includes('港')) {
      panel.environmentMotion = '海浪拍岸，海鸥盘旋';
    } else if (location.includes('河') || location.includes('溪') || location.includes('水')) {
      panel.environmentMotion = '水波涟漪，倒影摇曳';
    } else if (location.includes('森') || location.includes('林') || location.includes('树')) {
      panel.environmentMotion = '树叶轻摇，光影斑驳';
    } else if (location.includes('火') || desc.includes('火焰') || desc.includes('篝火')) {
      panel.environmentMotion = '火焰跳动，烟雾升腾';
    } else if (location.includes('市') || location.includes('街') || location.includes('道')) {
      panel.environmentMotion = '行人走动，车辆穿梭';
    } else if (location.includes('酒') || location.includes('餐') || location.includes('咖啡')) {
      panel.environmentMotion = '人声鼎沸，杯盏交错';
    } else if (location.includes('工厂') || location.includes('车间')) {
      panel.environmentMotion = '机器运转，蒸汽喷涌';
    }
    // 🆕 检测时间段
    else {
      let matched = false;
      for (const [key, value] of Object.entries(TIME_ENVIRONMENT_MAP)) {
        if (timeOfDay.includes(key) || location.includes(key)) {
          panel.environmentMotion = value;
          matched = true;
          break;
        }
      }
      if (!matched) {
        panel.environmentMotion = '环境平静，光影自然';
      }
    }
  }

  // 🆕 16. 智能提取角色动作 (characterActions) - 增强版：多动词+动作短语
  if (!panel.characterActions || panel.characterActions.length === 0) {
    const actions: string[] = [];

    // 🆕 扩展动词列表 + 动作短语
    const ACTION_PATTERNS = [
      // 表情动作
      '皱眉', '微笑', '大笑', '哭泣', '叹息', '惊讶', '愤怒', '沉思', '凝视', '闭眼',
      // 肢体动作
      '转身', '点头', '摇头', '挥手', '握手', '拥抱', '推开', '拉住', '低头', '抬头',
      '起身', '坐下', '躺下', '跪下', '弯腰', '伸手', '缩手', '跺脚', '踱步',
      // 移动动作
      '走向', '走过', '跑向', '冲向', '逃离', '靠近', '后退', '绕过', '跳起', '踏入',
      // 交互动作
      '拿起', '放下', '打开', '关上', '翻开', '撕毁', '扔掉', '接住', '推门', '敲门',
      // 说话相关
      '说道', '喊道', '低语', '怒吼', '呢喃', '询问', '回答', '解释', '命令', '恳求'
    ];

    if (panel.characters && panel.characters.length > 0) {
      // 🆕 为每个角色提取动作
      for (let i = 0; i < Math.min(panel.characters.length, 3); i++) {
        const char = panel.characters[i];
        const charFound: string[] = [];

        // 检测描述中是否有"角色名+动作"模式
        for (const action of ACTION_PATTERNS) {
          if (desc.includes(`${char}${action}`) || desc.includes(`${char} ${action}`)) {
            charFound.push(`${char}:${action}`);
          } else if (desc.includes(action) && i === 0) {
            // 第一个角色承接无主语动作
            charFound.push(`${char}:${action}`);
            break; // 每个角色最多一个动作
          }
        }

        if (charFound.length > 0) {
          actions.push(charFound[0]);
        }
      }

      // 如果有对话，添加说话动作
      if (panel.dialogue && panel.characters[0] && !actions.some(a => a.includes('说'))) {
        actions.push(`${panel.characters[0]}:说话`);
      }
    }

    if (actions.length > 0) {
      panel.characterActions = actions;
    }
  }

  console.log(`[智能填充增强版] 音效: ${panel.soundEffects?.join(',')} | 音乐: ${panel.music} | 运镜: ${panel.cameraMovement} | 镜头: ${panel.lens} | 光影: ${panel.lighting?.mood}`);

  return panel;
}

// 🆕 智能 Fallback 分镜生成（独立函数，用于场景过多或 AI 调用失败时）
async function generateFallbackPanels(
  scenes: ScriptScene[],
  characters: Character[],
  assetsScenes: Scene[],
  densityMode: 'compact' | 'standard' | 'detailed',
  directorStyle?: DirectorStyle
): Promise<StoryboardPanel[]> {
  const allPanels: any[] = [];
  let panelNumber = 1;

  scenes.forEach((scene) => {
    const dialogueCount = scene.dialogues?.length || 0;
    const actionLength = (scene.action || '').length;

    devLog(`[Fallback 场景${scene.sceneNumber}] ${dialogueCount}句对白, ${actionLength}字动作`);

    // 1. 建立镜头
    allPanels.push({
      id: generateId(),
      panelNumber: panelNumber++,
      sceneId: scene.id,
      episodeNumber: scene.episodeNumber,
      description: `${scene.location || '场景'}，${scene.timeOfDay || '日'}。${(scene.action || '').substring(0, 80)}`,
      shot: '远景',
      angle: '平视',
      cameraMovement: '静止',
      duration: 4,
      characters: scene.characters || [],
      dialogue: '',
      props: [],
      notes: '建立场景',
      aiPrompt: '',
      aiVideoPrompt: ''
    });

    // 2. 对话分镜
    if (scene.dialogues && scene.dialogues.length > 0) {
      const config = DENSITY_CONFIG[densityMode as DensityMode] || DENSITY_CONFIG.standard;

      scene.dialogues.forEach((dialogue, idx) => {
        const fullDialogue = dialogue.lines || '';
        const character = dialogue.character;
        const dialogueChunks = splitLongDialogue(fullDialogue, config.longDialogueThreshold);

        dialogueChunks.forEach((chunk, chunkIdx) => {
          const isFirst = idx === 0 && chunkIdx === 0;
          allPanels.push({
            id: generateId(),
            panelNumber: panelNumber++,
            sceneId: scene.id,
            episodeNumber: scene.episodeNumber,
            description: `${isFirst ? '近景' : '特写'}，${character}${dialogue.parenthetical ? `（${dialogue.parenthetical}）` : ''}说话，表情变化`,
            shot: isFirst ? '近景' : '特写',
            angle: '平视',
            cameraMovement: '静止',
            duration: Math.max(2, Math.ceil(chunk.length / 20)),
            characters: [character],
            dialogue: chunk,
            props: [],
            notes: dialogueChunks.length > 1 ? `对话 ${idx + 1}-${chunkIdx + 1}` : `对话 ${idx + 1}`,
            aiPrompt: '',
            aiVideoPrompt: ''
          });
        });
      });
    }

    // 3. 动作分镜
    const config = DENSITY_CONFIG[densityMode as DensityMode] || DENSITY_CONFIG.standard;
    if (actionLength > config.actionCharsPerPanel / 2) {
      const actionParts = Math.ceil(actionLength / config.actionCharsPerPanel);
      for (let i = 0; i < Math.min(actionParts, 3); i++) {
        const actionText = (scene.action || '').substring(i * config.actionCharsPerPanel, (i + 1) * config.actionCharsPerPanel);
        if (actionText.trim()) {
          allPanels.push({
            id: generateId(),
            panelNumber: panelNumber++,
            sceneId: scene.id,
            episodeNumber: scene.episodeNumber,
            description: `中景，${actionText}`,
            shot: '中景',
            angle: '平视',
            cameraMovement: i === 0 ? '静止' : '跟',
            duration: 3,
            characters: scene.characters || [],
            dialogue: '',
            props: [],
            notes: '动作描写',
            aiPrompt: '',
            aiVideoPrompt: ''
          });
        }
      }
    }
  });

  // 应用智能填充和生成提示词
  const filledPanels = allPanels.map((panel, index) => {
    const matchedScene = scenes.find(s => s.id === panel.sceneId);
    const prevPanel = index > 0 ? allPanels[index - 1] : undefined;
    const nextPanel = index < allPanels.length - 1 ? allPanels[index + 1] : undefined;
    const filledPanel = smartFillPanel(panel, matchedScene, prevPanel, nextPanel, allPanels);
    filledPanel.aiPrompt = generateStoryboardImagePrompt(filledPanel as StoryboardPanel, characters, assetsScenes, directorStyle);
    filledPanel.aiVideoPrompt = generateStoryboardVideoPrompt(filledPanel as StoryboardPanel, characters, assetsScenes, directorStyle, prevPanel);
    return filledPanel;
  });

  devLog(`[智能Fallback] 共生成 ${filledPanels.length} 个分镜（${scenes.length} 个场景）`);
  return filledPanels;
}

// 从剧本提取分镜（专业版）
export async function extractStoryboard(
  scenes: ScriptScene[],
  characters: Character[] = [],
  assetsScenes: Scene[] = [],
  densityMode: 'compact' | 'standard' | 'detailed' = 'standard',
  directorStyle?: DirectorStyle
): Promise<StoryboardPanel[]> {
  // 🆕 场景数量限制检查（超过 15 个场景时使用智能 Fallback，避免超时）
  const MAX_SCENES_FOR_AI = 15;
  if (scenes.length > MAX_SCENES_FOR_AI) {
    devLog(`[extractStoryboard] 场景数量 ${scenes.length} 超过限制 ${MAX_SCENES_FOR_AI}，直接使用智能 Fallback`);
    return generateFallbackPanels(scenes, characters, assetsScenes, densityMode, directorStyle);
  }

  // 构建包含完整信息的场景数据
  const scenesData = scenes.map((s, idx) => ({
    id: s.id,
    sceneNumber: s.sceneNumber,
    location: s.location,
    timeOfDay: s.timeOfDay,
    sceneType: s.sceneType,
    action: s.action,
    characters: s.characters,
    dialogues: s.dialogues?.map(d => ({
      character: d.character,
      lines: d.lines?.substring(0, 500) // 增加对白长度，保留更多戏剧细节
    })),
    beat: s.beat,
    specialSceneType: s.specialSceneType
  }));

  // 准备资产上下文，帮助 AI 精准生成提示词
  const characterContext = characters.map(c => `- ${c.name}: ${c.appearance || c.description}`).join('\n');
  const sceneContext = assetsScenes.map(s => `- ${s.name}: ${s.environment || s.description}`).join('\n');

  // 🆕 使用统一密度配置中的提示词描述
  const densityPrompt = DENSITY_CONFIG[densityMode as DensityMode]?.promptDescription
    || DENSITY_CONFIG.standard.promptDescription;

  // 🆕 计算预估分镜数量，作为 AI 生成的参考
  const config = DENSITY_CONFIG[densityMode as DensityMode] || DENSITY_CONFIG.standard;
  let estimatedTotal = 0;
  scenes.forEach(scene => {
    const dialogueCount = scene.dialogues?.length || 0;
    const actionLength = (scene.action || '').length;
    estimatedTotal += config.basePerScene + Math.ceil(dialogueCount * config.panelsPerDialogue) + Math.ceil(actionLength / config.actionCharsPerPanel);
  });

  const prompt = `你是专业分镜设计师兼音效设计师，将剧本场景逐帧转换为精确的漫画分镜。

【⚠️ 核心约束 - 必须严格遵守】
1. **预估分镜数量：约 ${estimatedTotal} 个**，请确保生成数量接近此目标
2. **🔴 每句对话必须生成独立分镜**：一句对白 = 一个分镜，不可合并！
3. **每个场景开头必须有建立镜头**（远景/全景）
4. **长动作描写（>50字）必须拆分为多个动作镜头**

【🎬 蒙太奇/快速剪辑规则】
- 如果剧本描述"一系列动作"或"快速剪辑"，必须逐个动作拆分
- 例如："洗脸、换衣、吃吐司" = 3个独立分镜，每个动作一镜
- 日常动作序列必须完整呈现，不可压缩合并

【✨ 超现实/特效描写规则】
- 眩晕、幻觉、闪回等主观体验必须独立成镜
- 发光、变形、扭曲等视觉特效必须专门描述
- 声音扭曲、时间变慢等感官变化需转化为视觉语言

【密度要求】
${densityPrompt}

【数量检查规则】
- 如果场景有 N 句对话，该场景至少生成 N+1 个分镜（1建立镜头 + N对话镜头）
- 如果动作描写超过 ${config.actionCharsPerPanel} 字，增加动作分镜
- 蒙太奇序列中每个动词对应一个分镜
- 多人对话场景，每 2-3 句对话可增加 1 个反应镜头

【角色与环境参考】
${characterContext ? `角色描述：\n${characterContext}\n` : ''}
${sceneContext ? `环境描述：\n${sceneContext}\n` : ''}
${directorStyle ? `导演风格：${directorStyle.artStyle || ''}, 氛围: ${directorStyle.mood || ''}\n` : ''}

【分镜类型】
- 建立镜头：远景/全景展示场景环境（每个场景开头必须有）
- 动作镜头：中景/近景展示人物动作（🔴 每个动作一镜）
- 对话镜头：近景/特写展示说话者表情 + 完整对白（🔴 每句对话一镜）
- 反应镜头：特写展示听者反应
- 特效镜头：展示超现实/幻觉/特效画面（🔴 必须独立成镜）
- 过渡镜头：衔接场景的视觉过渡

【景别代码】ECU(大特写)/CU(特写)/MCU(近景)/MS(中景)/MWS(中全景)/WS(远景)/EWS(大远景)/POV(主观)/OTS(过肩)
【角度代码】EYE_LEVEL(平视)/HIGH(俯视)/LOW(仰视)/DUTCH(倾斜)
【运动代码】STATIC(静止)/PAN_L(左摇)/PAN_R(右摇)/DOLLY_IN(推)/DOLLY_OUT(拉)/TRACK_L(左移)/TRACK_R(右移)/FOLLOW(跟随)

【专业导演字段规范】
- composition: 构图方式（三分法/对称/框架/引导线/黄金分割/对角线等）
- shotIntent: 镜头意图（建立空间/展示情绪/推进剧情/揭示细节/制造悬念等）
- axisNote: 轴线备注（保持轴线/跨轴用_切换/人物相对位置等）
- environmentMotion: 环境动态（风吹树叶/烟雾飘散/水波涟漪/雨水滴落等）
- characterActions: 角色动作数组（如["李明:转身","张三:点头"]）

【音效设计规范】
- soundEffects：根据画面内容设计精确音效，如「铠甲碰撞声」「古琴悠扬」「马蹄踏尘」「雨打芭蕉」
- music：根据情绪节拍设计背景音乐，如「古风悲壮BGM渐强」「电子节拍动感UP」「钢琴抒情轻柔」
- startFrame：起始帧画面描述，如「剑士背影，夕阳血红」
- endFrame：结束帧画面描述，如「剑士转身，眼神坚毅」

【输出规则】
1. 只输出纯 JSON 数组
2. description 字段 50-150 字，描述画面内容 + 光影氛围，请结合【角色与环境参考】中的具体描述
3. 对话分镜必须包含 dialogue 字段（完整对白，不可省略或合并）
4. 每个分镜必须有明确的 characters 数组
5. 每个分镜必须有 soundEffects（数组）和 music（字符串）
6. 每个分镜必须有 startFrame 和 endFrame 描述
7. **每个分镜必须有 composition、shotIntent、axisNote、environmentMotion、characterActions**
8. **🔴 生成的分镜总数必须接近 ${estimatedTotal} 个**

【JSON 格式】
[{"sceneId":"场景ID","description":"画面描述（含光影）","shotSize":"MS","angle":"EYE_LEVEL","movementType":"STATIC","duration":3,"characters":["角色名"],"dialogue":"完整对白（如有）","emotionalBeat":"CALM","focusSubject":"视觉焦点","atmosphere":"氛围","transition":"切至","soundEffects":["具体音效1","具体音效2"],"music":"具体背景音乐描述","startFrame":"起始帧画面","endFrame":"结束帧画面","composition":"构图方式","shotIntent":"镜头意图","axisNote":"轴线备注","environmentMotion":"环境动态","characterActions":["角色名:动作"]}]

【示例：对话场景必须拆分】
假设场景有 2 句对话："你好" 和 "再见"，必须生成至少 3 个分镜：
1. 建立镜头（场景全景）
2. 对话镜头1（"你好"）
3. 对话镜头2（"再见"）

【剧本场景】
${JSON.stringify(scenesData)}
`;

  try {
    // 🆕 使用重试机制调用 AI（最多3次，指数退避）
    const result = await callWithRetry(
      () => callDeepSeek([{ role: 'user', content: prompt }]),
      3,
      1000
    );
    let shots = parseJSON(result);

    // 🆕 数据结构验证和容错
    if (!shots) {
      console.error('extractStoryboard: parseJSON returned null/undefined');
      shots = [];
    }
    if (!Array.isArray(shots)) {
      // 如果返回的是对象，尝试提取数组
      if (shots.panels) shots = shots.panels;
      else if (shots.shots) shots = shots.shots;
      else if (shots.storyboard) shots = shots.storyboard;
      else {
        console.error('extractStoryboard: unexpected data structure', typeof shots);
        shots = [];
      }
    }
    if (shots.length === 0) {
      console.warn('extractStoryboard: no shots extracted, using smart fallback');

      // 🆕 智能 Fallback：根据场景复杂度生成分镜
      const allPanels: any[] = [];
      let panelNumber = 1;

      scenes.forEach((scene) => {
        const dialogueCount = scene.dialogues?.length || 0;
        const actionLength = (scene.action || '').length;

        console.log(`[场景${scene.sceneNumber}] 分析: ${dialogueCount}句对白, ${actionLength}字动作`);

        // 1. 建立镜头（场景开头）
        allPanels.push({
          id: generateId(),
          panelNumber: panelNumber++,
          sceneId: scene.id,
          episodeNumber: scene.episodeNumber,
          description: `${scene.location || '场景'}，${scene.timeOfDay || '日'}。${(scene.action || '').substring(0, 80)}`,
          shot: '远景',
          angle: '平视',
          cameraMovement: '静止',
          duration: 4,
          characters: scene.characters || [],
          dialogue: '',
          props: [],
          notes: '建立场景',
          aiPrompt: '',
          aiVideoPrompt: ''
        });

        // 2. 为每句对话生成分镜（🆕 增强版：长对话拆分 + 反应镜头）
        if (scene.dialogues && scene.dialogues.length > 0) {
          const config = DENSITY_CONFIG[densityMode as DensityMode] || DENSITY_CONFIG.standard;

          scene.dialogues.forEach((dialogue, idx) => {
            const fullDialogue = dialogue.lines || '';
            const character = dialogue.character;

            // 🆕 使用统一配置的长对话拆分阈值
            const dialogueChunks = splitLongDialogue(fullDialogue, config.longDialogueThreshold);

            dialogueChunks.forEach((chunk, chunkIdx) => {
              const isFirst = idx === 0 && chunkIdx === 0;
              allPanels.push({
                id: generateId(),
                panelNumber: panelNumber++,
                sceneId: scene.id,
                episodeNumber: scene.episodeNumber,
                description: `${isFirst ? '近景' : '特写'}，${character}${dialogue.parenthetical ? `（${dialogue.parenthetical}）` : ''}说话${chunkIdx > 0 ? '（续）' : ''}，表情变化`,
                shot: isFirst ? '近景' : '特写',
                angle: '平视',
                cameraMovement: '静止',
                duration: Math.max(2, Math.ceil(chunk.length / 20)),
                characters: [character],
                dialogue: chunk,
                props: [],
                notes: dialogueChunks.length > 1 ? `对话 ${idx + 1}-${chunkIdx + 1}` : `对话 ${idx + 1}`,
                aiPrompt: '',
                aiVideoPrompt: ''
              });
            });

            // 🆕 添加反应镜头（如果配置启用且有其他角色）
            if (config.addReactionShots && scene.characters && scene.characters.length >= 2) {
              const otherCharacters = (scene.characters || []).filter(c => c !== character);
              if (otherCharacters.length > 0 && idx < scene.dialogues.length - 1) {
                // 每2-3句对话添加一个反应镜头
                if (idx % 2 === 1) {
                  const reactor = otherCharacters[0];
                  allPanels.push({
                    id: generateId(),
                    panelNumber: panelNumber++,
                    sceneId: scene.id,
                    episodeNumber: scene.episodeNumber,
                    description: `特写，${reactor}倾听反应，表情微变`,
                    shot: '特写',
                    angle: '平视',
                    cameraMovement: '静止',
                    duration: 2,
                    characters: [reactor],
                    dialogue: '',
                    props: [],
                    notes: '反应镜头',
                    aiPrompt: '',
                    aiVideoPrompt: ''
                  });
                }
              }
            }
          });
        }

        // 3. 动作分镜（🆕 使用统一配置的字数阈值）
        const config = DENSITY_CONFIG[densityMode as DensityMode] || DENSITY_CONFIG.standard;
        if (actionLength > config.actionCharsPerPanel / 2) {
          const actionParts = Math.ceil(actionLength / config.actionCharsPerPanel);
          const maxActionPanels = config.maxPerScene - allPanels.filter(p => p.sceneId === scene.id).length;
          for (let i = 0; i < Math.min(actionParts, maxActionPanels, 5); i++) {
            const actionText = (scene.action || '').substring(i * config.actionCharsPerPanel, (i + 1) * config.actionCharsPerPanel);
            if (actionText.trim()) {
              allPanels.push({
                id: generateId(),
                panelNumber: panelNumber++,
                sceneId: scene.id,
                episodeNumber: scene.episodeNumber,
                description: `中景，${actionText}`,
                shot: '中景',
                angle: '平视',
                cameraMovement: i === 0 ? '静止' : '跟',
                duration: 3,
                characters: scene.characters || [],
                dialogue: '',
                props: [],
                notes: '动作描写',
                aiPrompt: '',
                aiVideoPrompt: ''
              });
            }
          }
        }
      });

      // 为所有分镜应用智能填充并生成提示词（含上下文感知）
      const filledPanels = allPanels.map((panel, index) => {
        // 找到对应的场景
        const matchedScene = scenes.find(s => s.id === panel.sceneId);

        // 🆕 获取上下文分镜
        const prevPanel = index > 0 ? allPanels[index - 1] : undefined;
        const nextPanel = index < allPanels.length - 1 ? allPanels[index + 1] : undefined;

        // 应用智能填充（含上下文感知）
        const filledPanel = smartFillPanel(panel, matchedScene, prevPanel, nextPanel, allPanels);

        // 生成提示词（含上下文过渡）
        filledPanel.aiPrompt = generateStoryboardImagePrompt(filledPanel as StoryboardPanel, characters, assetsScenes, directorStyle);
        filledPanel.aiVideoPrompt = generateStoryboardVideoPrompt(filledPanel as StoryboardPanel, characters, assetsScenes, directorStyle, prevPanel);

        return filledPanel;
      });

      console.log(`[智能Fallback] 共生成 ${filledPanels.length} 个分镜（${scenes.length} 个场景，含对话分镜）`);
      return filledPanels;
    }

    // 专业代码到 UI 中文值的映射
    const SHOT_CODE_TO_CN: Record<string, string> = {
      'ECU': '大特写', 'CU': '特写', 'MCU': '近景',
      'MS': '中景', 'MWS': '全景', 'WS': '远景',
      'EWS': '大远景', 'POV': '中景', 'OTS': '中景',
      'TWO': '中景', 'GROUP': '全景', 'INSERT': '特写'
    };

    const ANGLE_CODE_TO_CN: Record<string, string> = {
      'EYE_LEVEL': '平视', 'HIGH': '俯视', 'LOW': '仰视',
      'BIRDS_EYE': '俯视', 'WORMS_EYE': '仰视', 'DUTCH': '平视'
    };

    const MOVEMENT_CODE_TO_CN: Record<string, string> = {
      'STATIC': '静止', 'PAN_L': '摇', 'PAN_R': '摇',
      'TILT_UP': '摇', 'TILT_DOWN': '摇',
      'DOLLY_IN': '推', 'DOLLY_OUT': '拉',
      'TRACK_L': '移', 'TRACK_R': '移',
      'CRANE_UP': '升降', 'CRANE_DOWN': '升降',
      'ZOOM_IN': '推', 'ZOOM_OUT': '拉',
      'HANDHELD': '移', 'STEADICAM': '移',
      'FOLLOW': '跟', 'ARC': '环绕', 'WHIP': '摇'
    };

    // 映射回 StoryboardPanel 结构，支持新字段
    // 🆕 第一遍：收集所有面板基础数据
    const allPanels = shots.map((shot: any, index: number) => {
      // 查找对应的场景
      const matchedScene = scenes.find(s => s.id === shot.sceneId) || scenes[Math.floor(index / 3)];

      // 获取 AI 返回的原始代码
      const rawShotSize = shot.shotSize || shot.shot || 'MS';
      const rawAngle = shot.angle || 'EYE_LEVEL';
      const rawMovement = shot.movementType || shot.cameraMovement || 'STATIC';

      return {
        id: generateId(),
        panelNumber: index + 1,
        sceneId: matchedScene?.id || generateId(),
        episodeNumber: matchedScene?.episodeNumber || 1,
        description: shot.description || '',
        dialogue: shot.dialogue || '',

        // UI 兼容字段（使用中文值）
        shot: SHOT_CODE_TO_CN[rawShotSize] || '中景',
        angle: ANGLE_CODE_TO_CN[rawAngle] || '平视',
        cameraMovement: MOVEMENT_CODE_TO_CN[rawMovement] || '静止',

        // 新专业字段（保留原始代码用于导出）
        shotSize: rawShotSize as any,
        cameraAngle: rawAngle as any,
        movementType: rawMovement as any,

        duration: shot.duration || 4,
        characters: shot.characters || matchedScene?.characters || [],
        props: shot.props || [],
        notes: shot.notes || '',

        // 专业扩展字段（AI返回值，可能为空）
        composition: shot.composition,
        shotIntent: shot.shotIntent,
        focusPoint: shot.focusPoint,
        axisNote: shot.axisNote,

        // 🆕 音效和转场（直接读取 AI 返回值）
        soundEffects: shot.soundEffects || [],
        transition: shot.transition || '切至',
        music: shot.music || '',

        // 🆕 帧描述（直接读取 AI 返回值）
        startFrame: shot.startFrame || '',
        endFrame: shot.endFrame || '',
        motionSpeed: shot.motionSpeed || 'normal',
        environmentMotion: shot.environmentMotion || '',
        characterActions: shot.characterActions || [],

        keyFrames: [],
        _matchedScene: matchedScene  // 临时存储，用于第二遍
      };
    });

    // 🆕 第二遍：应用智能填充（含上下文感知）
    const processedPanels = allPanels.map((panelData: any, index: number) => {
      const matchedScene = panelData._matchedScene;
      delete panelData._matchedScene;  // 清理临时字段

      // 🆕 获取上下文分镜
      const prevPanel = index > 0 ? allPanels[index - 1] : undefined;
      const nextPanel = index < allPanels.length - 1 ? allPanels[index + 1] : undefined;

      // 应用智能填充（🆕 传入完整上下文）
      const filledPanel = smartFillPanel(panelData, matchedScene, prevPanel, nextPanel, allPanels);

      // 🆕 自动生成提示词（使用填充后的面板）
      const imagePrompt = generateStoryboardImagePrompt(filledPanel as StoryboardPanel, characters, assetsScenes, directorStyle);
      const videoPrompt = generateStoryboardVideoPrompt(filledPanel as StoryboardPanel, characters, assetsScenes, directorStyle, prevPanel);

      console.log(`[分镜${index + 1}] 智能填充完成:`, {
        soundEffects: filledPanel.soundEffects,
        music: filledPanel.music,
        composition: filledPanel.composition,
        axisNote: filledPanel.axisNote,
        cameraMovement: filledPanel.cameraMovement
      });

      // 🆕 角色一致性检查
      const unknownChars = checkCharacterConsistency(filledPanel.characters || [], characters);
      if (unknownChars.length > 0) {
        console.warn(`[分镜${index + 1}] ⚠️ 未知角色: ${unknownChars.join(', ')}`);
        // 可选：将警告添加到面板备注中
        filledPanel.notes = `${filledPanel.notes || ''} [警告: 未知角色 ${unknownChars.join(', ')}]`.trim();
      }

      filledPanel.aiPrompt = imagePrompt;
      filledPanel.aiVideoPrompt = videoPrompt;

      return filledPanel;
    });

    // 🆕 【关键修复】场景覆盖验证：检查哪些场景没有分镜，使用 Fallback 补充
    const coveredSceneIds = new Set(processedPanels.map((p: any) => p.sceneId));
    const missingScenes = scenes.filter(s => !coveredSceneIds.has(s.id));

    if (missingScenes.length > 0) {
      console.warn(`[extractStoryboard] ⚠️ AI 遗漏了 ${missingScenes.length} 个场景，使用 Fallback 补充:`,
        missingScenes.map(s => `场景${s.sceneNumber}: ${s.location}`).join(', '));

      // 为缺失场景生成 Fallback 分镜
      let panelNumber = processedPanels.length + 1;
      const configForFallback = DENSITY_CONFIG[densityMode as DensityMode] || DENSITY_CONFIG.standard;

      missingScenes.forEach(scene => {
        // 1. 建立镜头
        const establishingPanel = {
          id: generateId(),
          panelNumber: panelNumber++,
          sceneId: scene.id,
          episodeNumber: scene.episodeNumber,
          description: `${scene.location || '场景'}，${scene.timeOfDay || '日'}。${(scene.action || '').substring(0, 80)}`,
          shot: '远景',
          angle: '平视',
          cameraMovement: '静止',
          duration: 4,
          characters: scene.characters || [],
          dialogue: '',
          props: [],
          notes: '建立场景（AI遗漏补充）',
          aiPrompt: '',
          aiVideoPrompt: '',
          soundEffects: [],
          music: '',
          startFrame: '',
          endFrame: '',
          composition: '三分法',
          shotIntent: '建立空间'
        };

        // 应用智能填充和提示词生成
        const filledEstablishing = smartFillPanel(establishingPanel, scene, undefined, undefined, processedPanels);
        filledEstablishing.aiPrompt = generateStoryboardImagePrompt(filledEstablishing as StoryboardPanel, characters, assetsScenes, directorStyle);
        filledEstablishing.aiVideoPrompt = generateStoryboardVideoPrompt(filledEstablishing as StoryboardPanel, characters, assetsScenes, directorStyle, undefined);
        processedPanels.push(filledEstablishing);

        // 2. 为每句对话生成分镜
        if (scene.dialogues && scene.dialogues.length > 0) {
          scene.dialogues.forEach((dialogue, idx) => {
            const dialoguePanel = {
              id: generateId(),
              panelNumber: panelNumber++,
              sceneId: scene.id,
              episodeNumber: scene.episodeNumber,
              description: `${idx === 0 ? '近景' : '特写'}，${dialogue.character}${dialogue.parenthetical ? `（${dialogue.parenthetical}）` : ''}说话，表情变化`,
              shot: idx === 0 ? '近景' : '特写',
              angle: '平视',
              cameraMovement: '静止',
              duration: Math.max(2, Math.ceil((dialogue.lines || '').length / 20)),
              characters: [dialogue.character],
              dialogue: dialogue.lines || '',
              props: [],
              notes: `对话 ${idx + 1}（AI遗漏补充）`,
              aiPrompt: '',
              aiVideoPrompt: '',
              soundEffects: [],
              music: '',
              startFrame: '',
              endFrame: '',
              composition: '三分法',
              shotIntent: '展示情绪'
            };

            const filledDialogue = smartFillPanel(dialoguePanel, scene, undefined, undefined, processedPanels);
            filledDialogue.aiPrompt = generateStoryboardImagePrompt(filledDialogue as StoryboardPanel, characters, assetsScenes, directorStyle);
            filledDialogue.aiVideoPrompt = generateStoryboardVideoPrompt(filledDialogue as StoryboardPanel, characters, assetsScenes, directorStyle, undefined);
            processedPanels.push(filledDialogue);
          });
        }

        // 3. 动作分镜（如果动作描写较长）
        const actionLength = (scene.action || '').length;
        if (actionLength > configForFallback.actionCharsPerPanel / 2) {
          const actionParts = Math.ceil(actionLength / configForFallback.actionCharsPerPanel);
          for (let i = 0; i < Math.min(actionParts, 3); i++) {
            const actionText = (scene.action || '').substring(i * configForFallback.actionCharsPerPanel, (i + 1) * configForFallback.actionCharsPerPanel);
            if (actionText.trim()) {
              const actionPanel = {
                id: generateId(),
                panelNumber: panelNumber++,
                sceneId: scene.id,
                episodeNumber: scene.episodeNumber,
                description: `中景，${actionText}`,
                shot: '中景',
                angle: '平视',
                cameraMovement: i === 0 ? '静止' : '跟',
                duration: 3,
                characters: scene.characters || [],
                dialogue: '',
                props: [],
                notes: '动作描写（AI遗漏补充）',
                aiPrompt: '',
                aiVideoPrompt: '',
                soundEffects: [],
                music: '',
                startFrame: '',
                endFrame: ''
              };

              const filledAction = smartFillPanel(actionPanel, scene, undefined, undefined, processedPanels);
              filledAction.aiPrompt = generateStoryboardImagePrompt(filledAction as StoryboardPanel, characters, assetsScenes, directorStyle);
              filledAction.aiVideoPrompt = generateStoryboardVideoPrompt(filledAction as StoryboardPanel, characters, assetsScenes, directorStyle, undefined);
              processedPanels.push(filledAction);
            }
          }
        }

        console.log(`[场景覆盖补充] 场景${scene.sceneNumber} "${scene.location}" 补充完成`);
      });

      console.log(`[extractStoryboard] ✅ 场景覆盖补充完成，共 ${processedPanels.length} 个分镜（原 ${allPanels.length} + 补充 ${processedPanels.length - allPanels.length}）`);
    }

    return processedPanels;
  } catch (error) {
    console.error('DeepSeek extractStoryboard failed:', error);
    throw new Error('AI 分镜生成失败');
  }
}

// 模拟AI生成图片(接入 Doubao) - 🆕 增加重试机制
export async function generateStoryboardImage(
  panel: StoryboardPanel,
  characters: Character[],
  scenes: Scene[],
  directorStyle?: DirectorStyle,
  enableOptimization: boolean = true,
  maxRetries: number = 3,
  imageSize?: string  // 🆕 可选图片尺寸参数
): Promise<string> {
  // 1. 使用完整的提示词生成函数
  const { generateStoryboardImagePrompt } = await import('./promptGenerator');
  let imagePrompt = generateStoryboardImagePrompt(panel, characters, scenes, directorStyle);

  // 2. 可选的AI优化
  if (enableOptimization) {
    try {
      const { optimizePrompt } = await import('./volcApi');
      imagePrompt = await optimizePrompt(
        imagePrompt,
        directorStyle?.artStyle || 'Cinematic',
        'storyboard'
      );
    } catch (e) {
      console.warn('Prompt optimization failed, using original', e);
    }
  }

  // 3. 调用生图（🆕 支持自定义尺寸）
  const { IMAGE_SIZES } = await import('../constants/imageSizes');
  const { callDoubaoImage } = await import('./volcApi');

  // 🆕 根据 aspectRatio 或 imageSize 选择尺寸
  let selectedSize: string = IMAGE_SIZES.STORYBOARD;
  if (imageSize && (IMAGE_SIZES as any)[imageSize]) {
    selectedSize = (IMAGE_SIZES as any)[imageSize];
  } else if (panel.aspectRatio) {
    const aspectSizeMap: Record<string, string> = {
      '16:9': IMAGE_SIZES.STORYBOARD_16_9,
      '9:16': IMAGE_SIZES.STORYBOARD_9_16,
      '1:1': IMAGE_SIZES.STORYBOARD_1_1,
      '4:3': IMAGE_SIZES.STORYBOARD_4_3,
      '21:9': IMAGE_SIZES.STORYBOARD_21_9,
    };
    selectedSize = aspectSizeMap[panel.aspectRatio] || IMAGE_SIZES.STORYBOARD;
  }

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[图片生成] 第 ${attempt}/${maxRetries} 次尝试，尺寸: ${selectedSize}...`);
      return await callDoubaoImage(imagePrompt, selectedSize, directorStyle?.negativePrompt);
    } catch (error) {
      lastError = error as Error;
      console.warn(`[图片生成] 第 ${attempt} 次失败:`, error);

      // 如果还有重试次数，等待后重试
      if (attempt < maxRetries) {
        const delay = 1000 * attempt; // 递增延时：1s, 2s, 3s
        console.log(`[图片生成] ${delay}ms 后重试...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // 所有重试都失败
  console.error('[图片生成] 所有重试均失败:', lastError);
  return `https://placehold.co/1024x576?text=${encodeURIComponent('AI生成失败（已重试' + maxRetries + '次）')}`;
}

/**
 * 从剧本中提取资产（角色、场景、道具、服装）
 */
export async function extractAssets(
  originalText: string,
  scenesCount: any[],
  directorStyle?: DirectorStyle
): Promise<{
  characters: any[];
  scenes: any[];
  props: any[];
  costumes: any[];
}> {
  const characterNames = new Set<string>();
  scenesCount.forEach((scene: any) => {
    if (scene.characters && Array.isArray(scene.characters)) {
      scene.characters.forEach((name: string) => characterNames.add(name));
    }
    scene.dialogues?.forEach((d: any) => characterNames.add(d.character));
  });

  // 初始化提示词引擎
  const engine = new PromptEngine(directorStyle, { includeNegative: false });

  // 故事文本截取长度增加到 15000，以包含更多剧本细节
  const contextText = originalText.substring(0, 15000);

  const prompt = `你是一位拥有15年经验的资深影视美术总监，曾参与多部大型电影和电视剧的前期视觉开发。

【任务】分析以下故事文本，提取所有视觉资产，为后续的美术制作和AI图像生成提供详尽的参考资料。

【角色提取要求】
- 名字：角色全名或昵称
- 年龄段：如"20多岁"、"中年"、"老年"
- 体型：如"高大魁梧"、"纤细娇小"、"中等身材"
- 发型发色：具体描述，如"黑色长发披肩"、"银白短发"
- 五官特征：眼睛、鼻子、嘴唇的特点
- 标志性特点：疤痕、胎记、配饰等独特识别特征
- 性格：简短性格描述

【场景提取要求】
- 地点名称：场景的名称
- 空间类型：室内/室外/半开放
- 光线条件：自然光/人工光/混合光，以及光线氛围（明亮/昏暗/戏剧性）
- 时代特征：古代/近代/现代/未来
- 氛围描述：情感氛围，如"阴森压抑"、"温馨舒适"
- 关键物件：场景中的重要道具和陈设

【道具提取要求】
- 名称：道具名称
- 类别：武器/日用品/交通工具/食物/文件/珠宝/其他
- 材质：如"青铜"、"木质"、"玻璃"
- 时代特征：与故事背景匹配
- 功能/意义：在剧情中的作用

【服装提取要求】
- 归属角色：穿戴这套服装的角色名
- 服装名称：如"婚纱"、"铠甲"、"校服"
- 款式描述：剪裁、版型
- 颜色：主色调和配色
- 材质：如"丝绸"、"皮革"、"棉麻"
- 风格：如"华丽宫廷风"、"简约现代风"

请严格按照以下 JSON 对象格式返回，不要包含 Markdown 标记：
{
  "characters": [{ "name": "角色名", "age": "年龄段", "bodyType": "体型描述", "hair": "发型发色", "facialFeatures": "五官特征", "appearance": "完整外貌描述", "distinguishingFeatures": "标志性特点", "personality": "性格描述" }],
  "scenes": [{ "name": "场景名称", "location": "具体地点", "spaceType": "室内/室外", "lighting": "光线条件", "era": "时代特征", "atmosphere": "氛围描述", "environment": "完整环境描述", "keyObjects": ["物件1"] }],
  "props": [{ "name": "道具名称", "category": "类别", "material": "材质", "era": "时代特征", "description": "详细描述", "significance": "剧情意义" }],
  "costumes": [{ "characterName": "角色名", "name": "服装名称", "style": "款式", "color": "颜色", "material": "材质", "description": "服装描述" }]
}

已知角色名单（请优先使用这些名字）：${Array.from(characterNames).join('、') || '待提取'}

故事文本：
${contextText}
`;

  try {
    const result = await callDeepSeek([{ role: 'user', content: prompt }]);
    let data = parseJSON(result);

    // 🆕 自适应数据结构：如果返回的是数组，尝试重分类
    if (Array.isArray(data)) {
      console.log('extractAssets: AI 返回了数组结构，正在尝试自动归类...');
      const reconstructed: any = { characters: [], scenes: [], props: [], costumes: [] };
      data.forEach((item: any) => {
        if (item.age || item.hair || item.facialFeatures) reconstructed.characters.push(item);
        else if (item.lighting || item.spaceType || item.atmosphere) reconstructed.scenes.push(item);
        else if (item.material && item.characterName) reconstructed.costumes.push(item);
        else if (item.material || item.category) reconstructed.props.push(item);
      });
      data = reconstructed;
    }

    // 构建角色名到ID的映射
    const characterIdMap = new Map<string, string>();
    const characterNamesExtracted = new Set<string>();

    const characters = (data.characters || []).map((c: any) => {
      const id = generateId();
      characterIdMap.set(c.name, id);
      characterNamesExtracted.add(c.name);

      const namePinyin = c.name.split('').map((char: string) => char.charCodeAt(0) > 255 ? 'c' : char.toLowerCase()).join('').substring(0, 8);
      const triggerWord = `char_${namePinyin}_${id.slice(-4)}`;

      const standardParts: string[] = [];
      if (c.age) standardParts.push(c.age);
      if (c.bodyType) standardParts.push(c.bodyType);
      if (c.hair) standardParts.push(c.hair);
      if (c.facialFeatures) standardParts.push(c.facialFeatures);
      const standardAppearance = standardParts.join(', ');

      const charObj = {
        id,
        name: c.name,
        description: c.description || `${c.age || ''} ${c.bodyType || ''} ${c.facialFeatures || ''}`.trim(),
        appearance: c.appearance || `${c.hair || ''}, ${c.facialFeatures || ''}, ${c.bodyType || ''}, ${c.distinguishingFeatures || ''}`.trim(),
        personality: c.personality,
        avatar: '',
        triggerWord,
        standardAppearance,
        fullBodyPrompt: '',
        facePrompt: ''
      };

      // 预填绘图提示词
      const fullBody = engine.forCharacterFullBody(charObj as any);
      const face = engine.forCharacterFace(charObj as any);
      charObj.fullBodyPrompt = fullBody.positive;
      charObj.facePrompt = face.positive;

      return charObj;
    });

    // 🆕 角色兜底：如果已知角色没在 AI 提取结果里，自动加上
    characterNames.forEach(name => {
      if (!characterNamesExtracted.has(name)) {
        const id = generateId();
        characterIdMap.set(name, id);
        characters.push({
          id,
          name,
          description: '从剧本自动识别的角色',
          appearance: '待进一步详细描述',
          personality: '待设定',
          avatar: '',
          triggerWord: `char_gen_${id.slice(-4)}`,
          standardAppearance: '默认外貌'
        });
      }
    });

    return {
      characters,
      scenes: (data.scenes || []).map((s: any) => {
        const id = generateId();
        const sceneObj = {
          id,
          name: s.name,
          description: s.description || s.environment,
          location: s.location || s.name,
          environment: s.environment || `${s.spaceType || ''}, ${s.lighting || ''}, ${s.atmosphere || ''}, ${s.era || ''}`.trim(),
          image: '',
          widePrompt: '',
          mediumPrompt: '',
          closeupPrompt: ''
        };

        // 预填提示词
        sceneObj.widePrompt = engine.forSceneWide(sceneObj as any).positive;
        sceneObj.mediumPrompt = engine.forSceneMedium(sceneObj as any).positive;
        sceneObj.closeupPrompt = engine.forSceneCloseup(sceneObj as any).positive;

        return sceneObj;
      }),
      props: (data.props || []).map((p: any) => {
        const id = generateId();
        const propObj = {
          id,
          name: p.name,
          description: p.description || `${p.material || ''} ${p.name}, ${p.significance || ''}`.trim(),
          category: p.category,
          image: '',
          aiPrompt: ''
        };

        // 预填提示词
        propObj.aiPrompt = engine.forProp(propObj as any).positive;

        return propObj;
      }),
      costumes: (data.costumes || []).map((c: any) => {
        const id = generateId();
        const charId = characterIdMap.get(c.characterName) || generateId();
        const character = characters.find((char: any) => char.id === charId);

        const costumeObj = {
          id,
          characterId: charId,
          characterName: c.characterName,
          name: c.name,
          description: c.description || `${c.style || ''}, ${c.color || ''}, ${c.material || ''}`.trim(),
          style: c.style || '默认',
          image: '',
          aiPrompt: ''
        };

        // 预填提示词
        costumeObj.aiPrompt = engine.forCostume(costumeObj as any, character as any).positive;

        return costumeObj;
      })
    };
  } catch (error) {
    console.error('DeepSeek extractAssets failed:', error);
    // 失败时也返回已知角色名，而不是全空
    const fallbackCharacters = Array.from(characterNames).map(name => {
      const id = generateId();
      return {
        id,
        name,
        description: '从剧本自动识别的角色(提取失败回退)',
        appearance: '待设定',
        personality: '待设定',
        avatar: '',
        triggerWord: `char_fb_${id.slice(-4)}`,
        standardAppearance: '默认外貌'
      };
    });
    return { characters: fallbackCharacters, scenes: [], props: [], costumes: [] };
  }
}