// AI提示词智能优化工具
// 注意：此文件现在基于统一的 PromptEngine
// 为了向后兼容保留原有接口，但内部使用 PromptEngine
import type { DirectorStyle, Character, Scene, Prop, Costume } from '../types';
import { PromptEngine } from './promptEngine';

/**
 * @deprecated 使用 PromptEngine 代替
 * 从导演风格生成基础提示词
 */
export function generateBasePromptFromStyle(style: DirectorStyle): string {
  const engine = new PromptEngine(style, { includeNegative: false, qualityTags: 'none' });
  // 生成一个简单的提示词来获取风格部分
  const dummy: any = { name: '', appearance: '' };
  const result = engine.forCharacterFullBody(dummy, '');
  
  // 提取导演风格相关的部分
  const parts: string[] = [];
  if (style.artStyle) parts.push(style.artStyle);
  if (style.colorTone) parts.push(style.colorTone);
  if (style.lightingStyle) parts.push(style.lightingStyle);
  if (style.cameraStyle) parts.push(style.cameraStyle);
  if (style.mood) parts.push(`${style.mood}氛围`);
  if (style.customPrompt) parts.push(style.customPrompt);
  
  return parts.join(', ');
}

/**
 * @deprecated 使用 PromptEngine.forCharacterFullBody() 代替
 * 为角色全身图应用导演风格
 */
export function applyStyleToCharacterFullBody(
  character: Character,
  style: DirectorStyle,
  existingPrompt?: string
): string {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forCharacterFullBody(character, existingPrompt).positive;
}

/**
 * @deprecated 使用 PromptEngine.forCharacterFace() 代替
 * 为角色脸部图应用导演风格
 */
export function applyStyleToCharacterFace(
  character: Character,
  style: DirectorStyle,
  existingPrompt?: string
): string {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forCharacterFace(character, existingPrompt).positive;
}

/**
 * @deprecated 使用 PromptEngine.forSceneWide() 代替
 * 为场景远景应用导演风格
 */
export function applyStyleToSceneWide(
  scene: Scene,
  style: DirectorStyle,
  existingPrompt?: string
): string {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forSceneWide(scene, existingPrompt).positive;
}

/**
 * @deprecated 使用 PromptEngine.forSceneMedium() 代替
 * 为场景中景应用导演风格
 */
export function applyStyleToSceneMedium(
  scene: Scene,
  style: DirectorStyle,
  existingPrompt?: string
): string {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forSceneMedium(scene, existingPrompt).positive;
}

/**
 * @deprecated 使用 PromptEngine.forSceneCloseup() 代替
 * 为场景特写应用导演风格
 */
export function applyStyleToSceneCloseup(
  scene: Scene,
  style: DirectorStyle,
  existingPrompt?: string
): string {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forSceneCloseup(scene, existingPrompt).positive;
}

/**
 * @deprecated 使用 PromptEngine.forProp() 代替
 * 为道具应用导演风格
 */
export function applyStyleToProp(
  prop: Prop,
  style: DirectorStyle,
  existingPrompt?: string
): string {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forProp(prop, existingPrompt).positive;
}

/**
 * @deprecated 使用 PromptEngine.forCostume() 代替
 * 为服饰应用导演风格
 */
export function applyStyleToCostume(
  costume: Costume,
  character: Character | undefined,
  style: DirectorStyle,
  existingPrompt?: string
): string {
  const engine = new PromptEngine(style, { includeNegative: false });
  return engine.forCostume(costume, character, existingPrompt).positive;
}

/**
 * 获取时间段描述
 */
function getTimeOfDayDescription(timeOfDay: 'day' | 'night' | 'dawn' | 'dusk'): string {
  const descriptions = {
    day: '白天，明亮的自然光',
    night: '夜晚，月光或灯光照明',
    dawn: '黎明，柔和的晨光',
    dusk: '黄昏，温暖的夕阳光线',
  };
  return descriptions[timeOfDay] || '';
}

/**
 * 批量为所有角色应用导演风格
 */
export function batchApplyStyleToCharacters(
  characters: Character[],
  style: DirectorStyle
): Character[] {
  return characters.map((character) => ({
    ...character,
    fullBodyPrompt: applyStyleToCharacterFullBody(character, style, character.fullBodyPrompt),
    facePrompt: applyStyleToCharacterFace(character, style, character.facePrompt),
  }));
}

/**
 * 批量为所有场景应用导演风格
 */
export function batchApplyStyleToScenes(scenes: Scene[], style: DirectorStyle): Scene[] {
  return scenes.map((scene) => ({
    ...scene,
    widePrompt: applyStyleToSceneWide(scene, style, scene.widePrompt),
    mediumPrompt: applyStyleToSceneMedium(scene, style, scene.mediumPrompt),
    closeupPrompt: applyStyleToSceneCloseup(scene, style, scene.closeupPrompt),
  }));
}

/**
 * 批量为所有道具应用导演风格
 */
export function batchApplyStyleToProps(props: Prop[], style: DirectorStyle): Prop[] {
  return props.map((prop) => ({
    ...prop,
    aiPrompt: applyStyleToProp(prop, style, prop.aiPrompt),
  }));
}

/**
 * 批量为所有服饰应用导演风格
 */
export function batchApplyStyleToCostumes(
  costumes: Costume[],
  characters: Character[],
  style: DirectorStyle
): Costume[] {
  return costumes.map((costume) => {
    const character = characters.find((c) => c.id === costume.characterId);
    return {
      ...costume,
      aiPrompt: applyStyleToCostume(costume, character, style, costume.aiPrompt),
    };
  });
}

/**
 * 提示词模板库
 */
export const PROMPT_TEMPLATES = {
  character: {
    fullBody: [
      '全身正视图，站立姿态，双手自然下垂，白色背景',
      '全身像，正面站立，自然光照明，简洁背景',
      '完整身体展示，标准站姿，中性表情，纯色背景',
    ],
    face: [
      '脸部特写，正面视角，中性表情，柔和光线',
      '面部细节，五官清晰，温和表情，肖像摄影',
      '头部特写，正面角度，自然表情，专业肖像',
    ],
  },
  scene: {
    wide: [
      '远景镜头，宽广视角，全景展示，建立镜头',
      '大远景，环境全貌，空间感强，电影构图',
      '广角镜头，整体环境，深度层次，视觉震撼',
    ],
    medium: [
      '中景镜头，主要区域，平衡构图，叙事清晰',
      '中等距离，关键区域，细节可见，视觉聚焦',
      '中景拍摄，重点突出，环境融合，故事感强',
    ],
    closeup: [
      '特写镜头，细节展示，情感表达，视觉冲击',
      '近距离特写，质感清晰，情绪饱满，艺术感强',
      '微距特写，细节丰富，氛围浓厚，视觉焦点',
    ],
  },
  prop: [
    '产品视图，白色背景，清晰细节，专业摄影',
    '物品展示，简洁背景，质感真实，光影自然',
    '道具特写，纯色背景，细节丰富，商业摄影',
  ],
  costume: [
    '服装展示，全身搭配，时尚摄影，清晰细节',
    '服饰特写，款式清晰，材质展示，专业拍摄',
    '穿搭展示，整体造型，风格明确，时尚感强',
  ],
};

/**
 * 获取随机提示词模板
 */
export function getRandomTemplate(
  type: 'character' | 'scene' | 'prop' | 'costume',
  subType?: 'fullBody' | 'face' | 'wide' | 'medium' | 'closeup'
): string {
  if (type === 'character' && subType) {
    const templates = PROMPT_TEMPLATES.character[subType as 'fullBody' | 'face'];
    return templates[Math.floor(Math.random() * templates.length)];
  }

  if (type === 'scene' && subType) {
    const templates = PROMPT_TEMPLATES.scene[subType as 'wide' | 'medium' | 'closeup'];
    return templates[Math.floor(Math.random() * templates.length)];
  }

  if (type === 'prop') {
    const templates = PROMPT_TEMPLATES.prop;
    return templates[Math.floor(Math.random() * templates.length)];
  }

  if (type === 'costume') {
    const templates = PROMPT_TEMPLATES.costume;
    return templates[Math.floor(Math.random() * templates.length)];
  }

  return '';
}