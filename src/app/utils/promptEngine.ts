/**
 * 统一提示词生成引擎
 * 整合 promptGenerator.ts 和 promptOptimizer.ts 的功能
 * 提供一致的、可扩展的提示词生成接口
 */

import type { DirectorStyle, Character, Scene, Prop, Costume, StoryboardPanel } from '../types';

// ============ 类型定义 ============

/**
 * 提示词元素
 */
interface PromptPart {
  type: 'subject' | 'appearance' | 'style' | 'lighting' | 'mood' | 'technical' | 'quality';
  value: string;
  weight?: number; // 权重，默认1.0
  language?: 'zh' | 'en' | 'mixed'; // 语言标识
}

/**
 * 高级提示词（包含正负提示词和参数）
 */
export interface AdvancedPrompt {
  positive: string; // 正面提示词
  negative: string; // 负面提示词
  weights?: Record<string, number>; // 权重映射
  metadata?: {
    totalParts: number;
    hasStyle: boolean;
    language: 'zh' | 'en' | 'mixed';
  };
}

/**
 * 引擎配置
 */
interface EngineConfig {
  separateLanguages: boolean; // 是否分离中英文
  useWeights: boolean; // 是否使用权重
  includeNegative: boolean; // 是否包含负面提示词
  qualityTags: 'basic' | 'professional' | 'none'; // 质量标签级别
}

// ============ 负面提示词库 ============

const NEGATIVE_PROMPTS = {
  general: 'low quality, worst quality, blurry, out of focus, bad art, ugly, watermark, signature, text',
  character: 'deformed, bad anatomy, disfigured, poorly drawn face, mutation, extra limbs, bad proportions, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers',
  scene: 'cluttered, messy, poor composition, bad perspective, distorted, unrealistic lighting',
  storyboard: 'inconsistent style, bad framing, poor cinematography, amateur',
  prop: 'broken, damaged, low detail, pixelated',
  costume: 'ill-fitting, unrealistic, bad texture',
};

// ============ 质量标签库 ============

const QUALITY_TAGS = {
  basic: {
    zh: ['高质量', '清晰'],
    en: ['high quality', 'detailed'],
  },
  professional: {
    zh: ['超高质量', '8K分辨率', '专业级', '精细细节', '完美构图'],
    en: ['masterpiece', 'best quality', '8k', 'ultra detailed', 'professional', 'perfect composition'],
  },
};

// ============ 景别和角度映射 ============

const SHOT_TYPE_MAP: Record<string, string> = {
  '大远景': 'extreme long shot, establishing shot',
  '远景': 'long shot, wide shot',
  '全景': 'full shot',
  '中景': 'medium shot',
  '近景': 'medium close-up',
  '特写': 'close-up',
  '大特写': 'extreme close-up',
};

const ANGLE_MAP: Record<string, string> = {
  '平视': 'eye level angle',
  '仰视': 'low angle shot',
  '俯视': 'high angle shot',
  '斜侧': 'dutch angle, tilted frame',
  '顶视': 'top-down view',
  '鸟瞰': "bird's eye view",
};

const MOVEMENT_MAP: Record<string, string> = {
  '静止': 'static shot, locked camera',
  '推镜': 'push in, dolly forward, zoom in',
  '拉镜': 'pull out, dolly backward, zoom out',
  '摇镜': 'pan shot, panning movement',
  '移镜': 'tracking shot, dolly shot',
  '跟镜': 'follow shot, tracking subject',
  '升降': 'crane shot, vertical movement',
  '环绕': 'orbit shot, circular movement, 360 degree rotation',
};

// ============ 提示词生成引擎 ============

export class PromptEngine {
  private style?: DirectorStyle;
  private config: EngineConfig;

  constructor(style?: DirectorStyle, config?: Partial<EngineConfig>) {
    this.style = style;
    this.config = {
      separateLanguages: true,
      useWeights: false, // 默认不使用权重（兼容性）
      includeNegative: true,
      qualityTags: 'professional',
      ...config,
    };
  }

  /**
   * 生成标准化的角色触发词
   * 格式: char_[姓名简码]_[随机Hash]
   */
  static generateTriggerWord(name: string, characterId: string): string {
    // 简易拼音/英文字符提取: 非 ASCII 字符转为 'c'，移除特殊字符
    const safeName = name.split('')
      .map(char => char.charCodeAt(0) > 255 ? 'c' : char.toLowerCase())
      .join('')
      .replace(/[^a-z0-9]/g, '')
      .substring(0, 8);

    // 取 ID 后 4 位作为 Hash
    const hash = characterId.substring(characterId.length - 4);
    return `char_${safeName}_${hash}`;
  }

  // ============ 公共接口 ============

  /**
   * 生成角色全身图提示词
   */
  forCharacterFullBody(character: Character, existingPrompt?: string): AdvancedPrompt {
    const parts: PromptPart[] = [];

    // 基础信息
    if (character.name) {
      parts.push({ type: 'subject', value: character.name, weight: 1.2, language: 'zh' });
    }

    // 注入触发词 (Trigger Word)
    if (character.triggerWord) {
      parts.push({ type: 'subject', value: character.triggerWord, weight: 1.3, language: 'en' });
    }

    if (character.appearance) {
      parts.push({ type: 'appearance', value: character.appearance, weight: 1.1, language: 'zh' });
    }

    // 视图类型
    parts.push({ type: 'technical', value: '全身正视图', language: 'zh' });
    parts.push({ type: 'technical', value: 'full body shot, standing pose, front view', language: 'en' });
    parts.push({ type: 'technical', value: '白色背景', language: 'zh' });
    parts.push({ type: 'technical', value: 'white background, simple background', language: 'en' });

    // 现有提示词
    if (existingPrompt) {
      parts.push({ type: 'style', value: existingPrompt, language: 'mixed' });
    }

    // 导演风格
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }

    // 质量标签
    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'character design, reference sheet', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'character');
  }

  /**
   * 生成角色脸部图提示词
   */
  forCharacterFace(character: Character, existingPrompt?: string): AdvancedPrompt {
    const parts: PromptPart[] = [];

    // 基础信息
    if (character.name) {
      parts.push({ type: 'subject', value: character.name, weight: 1.2, language: 'zh' });
    }

    // 注入触发词
    if (character.triggerWord) {
      parts.push({ type: 'subject', value: character.triggerWord, weight: 1.3, language: 'en' });
    }

    // 提取面部特征（前3个特征）
    if (character.appearance) {
      const features = character.appearance.split(/[，,]/).slice(0, 3).join('，');
      parts.push({ type: 'appearance', value: features, weight: 1.1, language: 'zh' });
    }

    // 视图类型
    parts.push({ type: 'technical', value: '脸部特写', language: 'zh' });
    parts.push({ type: 'technical', value: 'face close-up, portrait, facial features', language: 'en' });
    parts.push({ type: 'technical', value: '正面视角，中性表情', language: 'zh' });
    parts.push({ type: 'technical', value: 'front view, neutral expression', language: 'en' });

    // 现有提示词
    if (existingPrompt) {
      parts.push({ type: 'style', value: existingPrompt, language: 'mixed' });
    }

    // 导演风格
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }

    // 质量标签
    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'detailed face, clear eyes, sharp focus', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'character');
  }

  /**
   * 生成场景远景提示词
   */
  forSceneWide(scene: Scene, existingPrompt?: string): AdvancedPrompt {
    const parts: PromptPart[] = [];

    // 场景信息
    if (scene.name) {
      parts.push({ type: 'subject', value: scene.name, weight: 1.2, language: 'zh' });
    }

    if (scene.location) {
      parts.push({ type: 'appearance', value: scene.location, weight: 1.1, language: 'zh' });
    }

    // 景别
    parts.push({ type: 'technical', value: '远景镜头', language: 'zh' });
    parts.push({ type: 'technical', value: 'wide shot, establishing shot, panoramic view', language: 'en' });

    if (scene.environment) {
      parts.push({ type: 'appearance', value: scene.environment, language: 'zh' });
    }

    // 时间和天气
    if (scene.timeOfDay) {
      const timeDesc = this.getTimeOfDayDescription(scene.timeOfDay);
      parts.push({ type: 'lighting', value: timeDesc.zh, language: 'zh' });
      parts.push({ type: 'lighting', value: timeDesc.en, language: 'en' });
    }

    if (scene.weather) {
      parts.push({ type: 'mood', value: `${scene.weather}天气`, language: 'zh' });
    }

    // 现有提示词
    if (existingPrompt) {
      parts.push({ type: 'style', value: existingPrompt, language: 'mixed' });
    }

    // 导演风格
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }

    // 质量标签
    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'cinematic, detailed environment, atmospheric', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'scene');
  }

  /**
   * 生成场景中景提示词
   */
  forSceneMedium(scene: Scene, existingPrompt?: string): AdvancedPrompt {
    const parts: PromptPart[] = [];

    if (scene.name) {
      parts.push({ type: 'subject', value: scene.name, weight: 1.2, language: 'zh' });
    }

    parts.push({ type: 'technical', value: '中景镜头', language: 'zh' });
    parts.push({ type: 'technical', value: 'medium shot, balanced composition', language: 'en' });

    if (scene.description) {
      parts.push({ type: 'appearance', value: scene.description, weight: 1.1, language: 'zh' });
    }

    if (scene.environment) {
      parts.push({ type: 'appearance', value: scene.environment, language: 'zh' });
    }

    if (scene.timeOfDay) {
      const timeDesc = this.getTimeOfDayDescription(scene.timeOfDay);
      parts.push({ type: 'lighting', value: timeDesc.zh, language: 'zh' });
      parts.push({ type: 'lighting', value: timeDesc.en, language: 'en' });
    }

    if (existingPrompt) {
      parts.push({ type: 'style', value: existingPrompt, language: 'mixed' });
    }

    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }

    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'detailed scene, cinematic lighting', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'scene');
  }

  /**
   * 生成场景特写提示词
   */
  forSceneCloseup(scene: Scene, existingPrompt?: string): AdvancedPrompt {
    const parts: PromptPart[] = [];

    if (scene.name) {
      parts.push({ type: 'subject', value: scene.name, weight: 1.2, language: 'zh' });
    }

    parts.push({ type: 'technical', value: '特写镜头', language: 'zh' });
    parts.push({ type: 'technical', value: 'close-up shot, detail view, focused composition', language: 'en' });

    if (scene.description) {
      parts.push({ type: 'appearance', value: scene.description, weight: 1.1, language: 'zh' });
    }

    if (existingPrompt) {
      parts.push({ type: 'style', value: existingPrompt, language: 'mixed' });
    }

    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }

    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'extreme detail, texture focus, macro photography', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'scene');
  }

  /**
   * 生成道具提示词
   */
  forProp(prop: Prop, existingPrompt?: string): AdvancedPrompt {
    const parts: PromptPart[] = [];

    if (prop.name) {
      parts.push({ type: 'subject', value: prop.name, weight: 1.2, language: 'zh' });
    }

    if (prop.description) {
      parts.push({ type: 'appearance', value: prop.description, weight: 1.1, language: 'zh' });
    }

    if (prop.category) {
      parts.push({ type: 'appearance', value: prop.category, language: 'zh' });
    }

    parts.push({ type: 'technical', value: '产品视图', language: 'zh' });
    parts.push({ type: 'technical', value: 'product view, item showcase, clean composition', language: 'en' });
    parts.push({ type: 'technical', value: '白色背景', language: 'zh' });
    parts.push({ type: 'technical', value: 'white background, studio lighting', language: 'en' });

    if (existingPrompt) {
      parts.push({ type: 'style', value: existingPrompt, language: 'mixed' });
    }

    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }

    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'clear details, professional photography, sharp focus', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'prop');
  }

  /**
   * 生成服饰提示词
   */
  forCostume(costume: Costume, character?: Character, existingPrompt?: string): AdvancedPrompt {
    const parts: PromptPart[] = [];

    if (costume.name) {
      parts.push({ type: 'subject', value: costume.name, weight: 1.2, language: 'zh' });
    }

    if (costume.description) {
      parts.push({ type: 'appearance', value: costume.description, weight: 1.1, language: 'zh' });
    }

    if (costume.style) {
      parts.push({ type: 'style', value: costume.style, language: 'zh' });
    }

    if (character) {
      // 联动角色关键特征
      const characterIdentifier = character.triggerWord || character.name;
      parts.push({
        type: 'subject',
        value: `${characterIdentifier} wearing ${costume.name}`,
        weight: 1.3,
        language: 'en'
      });

      // 提取物理特征以保持一致性 (如发色、瞳色)
      if (character.appearance) {
        const physicalTraits = character.appearance.split(/[，,]/).slice(0, 3).join(', ');
        parts.push({
          type: 'appearance',
          value: physicalTraits,
          weight: 1.1,
          language: 'mixed'
        });
      }

      parts.push({ type: 'appearance', value: `a portrait of ${character.name}`, language: 'zh' });
    }

    parts.push({ type: 'technical', value: '服装展示', language: 'zh' });
    parts.push({ type: 'technical', value: 'costume design, fashion showcase, outfit display', language: 'en' });

    if (existingPrompt) {
      parts.push({ type: 'style', value: existingPrompt, language: 'mixed' });
    }

    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style));
    }

    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'detailed clothing, fabric texture, professional fashion photography', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'costume');
  }

  /**
   * 生成分镜图片提示词
   */
  forStoryboardImage(
    panel: StoryboardPanel,
    characters: Character[],
    scenes: Scene[]
  ): AdvancedPrompt {
    const parts: PromptPart[] = [];

    // 景别和角度
    if (panel.shot && SHOT_TYPE_MAP[panel.shot]) {
      parts.push({ type: 'technical', value: panel.shot, language: 'zh' });
      parts.push({ type: 'technical', value: SHOT_TYPE_MAP[panel.shot], language: 'en' });
    }

    if (panel.angle && ANGLE_MAP[panel.angle]) {
      parts.push({ type: 'technical', value: panel.angle, language: 'zh' });
      parts.push({ type: 'technical', value: ANGLE_MAP[panel.angle], language: 'en' });
    }

    // 画面描述
    if (panel.description) {
      parts.push({ type: 'appearance', value: panel.description, weight: 1.2, language: 'zh' });
    }

    // 角色信息
    if (panel.characters && panel.characters.length > 0) {
      panel.characters.forEach((charName) => {
        const char = characters.find((c) => c.name === charName);
        if (char && char.appearance) {
          parts.push({ type: 'subject', value: `${charName}, ${char.appearance}`, weight: 1.1, language: 'zh' });
        } else {
          parts.push({ type: 'subject', value: charName, language: 'zh' });
        }
      });
    }

    // 道具
    if (panel.props && panel.props.length > 0) {
      parts.push({ type: 'appearance', value: `道具: ${panel.props.join('、')}`, language: 'zh' });
      parts.push({ type: 'appearance', value: `props: ${panel.props.join(', ')}`, language: 'en' });
    }

    // 导演风格
    if (this.style) {
      parts.push(...this.styleToPromptParts(this.style, true)); // 包含镜头风格
    }

    // 质量标签
    parts.push(...this.getQualityTags());
    parts.push({ type: 'quality', value: 'cinematic composition, professional storyboard, movie scene', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'storyboard');
  }

  /**
   * 生成分镜视频提示词
   */
  forStoryboardVideo(panel: StoryboardPanel, characters: Character[]): AdvancedPrompt {
    const parts: PromptPart[] = [];

    // 镜头运动
    if (panel.cameraMovement && MOVEMENT_MAP[panel.cameraMovement]) {
      parts.push({ type: 'technical', value: panel.cameraMovement, language: 'zh' });
      parts.push({ type: 'technical', value: MOVEMENT_MAP[panel.cameraMovement], language: 'en', weight: 1.2 });
    }

    // 时长
    if (panel.duration) {
      parts.push({ type: 'technical', value: `${panel.duration}秒`, language: 'zh' });
      parts.push({ type: 'technical', value: `${panel.duration} seconds duration`, language: 'en' });
    }

    // 动作描述
    if (panel.description) {
      parts.push({ type: 'appearance', value: panel.description, weight: 1.2, language: 'zh' });
    }

    // 角色动作
    if (panel.characters && panel.characters.length > 0) {
      const charActions = panel.characters.map((name) => `${name} in motion`).join(', ');
      parts.push({ type: 'subject', value: charActions, language: 'en', weight: 1.1 });
    }

    // 导演风格（镜头风格）
    if (this.style) {
      if (this.style.cameraStyle) {
        parts.push({ type: 'style', value: this.style.cameraStyle, language: 'zh' });
      }
      if (this.style.mood) {
        parts.push({ type: 'mood', value: `${this.style.mood}氛围`, language: 'zh' });
        parts.push({ type: 'mood', value: `${this.style.mood} atmosphere`, language: 'en' });
      }
      if (this.style.customPrompt) {
        parts.push({ type: 'style', value: this.style.customPrompt, language: 'en' });
      }
    }

    // 视频质量标签
    parts.push({ type: 'quality', value: 'smooth motion, fluid animation', language: 'en' });
    parts.push({ type: 'quality', value: 'cinematic video, professional cinematography', language: 'en' });

    return this.buildAdvancedPrompt(parts, 'storyboard');
  }

  // ============ 私有辅助方法 ============

  /**
   * 将导演风格转换为提示词部分
   */
  private styleToPromptParts(style: DirectorStyle, includeCameraStyle: boolean = false): PromptPart[] {
    const parts: PromptPart[] = [];

    if (style.artStyle) {
      parts.push({ type: 'style', value: style.artStyle, language: 'zh' });
    }

    if (style.colorTone) {
      parts.push({ type: 'style', value: style.colorTone, language: 'zh' });
    }

    if (style.lightingStyle) {
      parts.push({ type: 'lighting', value: style.lightingStyle, language: 'zh' });
    }

    if (includeCameraStyle && style.cameraStyle) {
      parts.push({ type: 'style', value: style.cameraStyle, language: 'zh' });
    }

    if (style.mood) {
      parts.push({ type: 'mood', value: `${style.mood}氛围`, language: 'zh' });
    }

    if (style.customPrompt) {
      parts.push({ type: 'style', value: style.customPrompt, language: 'en' });
    }

    return parts;
  }

  /**
   * 获取质量标签
   */
  private getQualityTags(): PromptPart[] {
    if (this.config.qualityTags === 'none') return [];

    const tags = QUALITY_TAGS[this.config.qualityTags];
    const parts: PromptPart[] = [];

    tags.zh.forEach((tag) => {
      parts.push({ type: 'quality', value: tag, language: 'zh' });
    });

    tags.en.forEach((tag) => {
      parts.push({ type: 'quality', value: tag, language: 'en' });
    });

    return parts;
  }

  /**
   * 获取时间段描述
   */
  private getTimeOfDayDescription(timeOfDay: 'day' | 'night' | 'dawn' | 'dusk'): { zh: string; en: string } {
    const descriptions = {
      day: { zh: '白天，明亮的自然光', en: 'daytime, bright natural light, sunny' },
      night: { zh: '夜晚，月光或灯光照明', en: 'nighttime, moonlight, artificial lighting' },
      dawn: { zh: '黎明，柔和的晨光', en: 'dawn, soft morning light, sunrise' },
      dusk: { zh: '黄昏，温暖的夕阳光线', en: 'dusk, golden hour, warm sunset light' },
    };
    return descriptions[timeOfDay] || { zh: '', en: '' };
  }

  /**
   * 构建高级提示词
   */
  private buildAdvancedPrompt(parts: PromptPart[], category: keyof typeof NEGATIVE_PROMPTS): AdvancedPrompt {
    // 分离中英文
    const zhParts: string[] = [];
    const enParts: string[] = [];
    const mixedParts: string[] = [];
    const weights: Record<string, number> = {};

    parts.forEach((part) => {
      if (!part.value) return;

      const value = part.value.trim();
      if (!value) return;

      // 收集权重
      if (this.config.useWeights && part.weight && part.weight !== 1.0) {
        weights[value] = part.weight;
      }

      // 根据语言分类
      if (part.language === 'zh') {
        zhParts.push(value);
      } else if (part.language === 'en') {
        enParts.push(value);
      } else {
        mixedParts.push(value);
      }
    });

    // 构建最终提示词
    let positive: string;
    if (this.config.separateLanguages) {
      // 中文在前，英文在后
      positive = [...zhParts, ...mixedParts, ...enParts].join(', ');
    } else {
      // 混合排列
      positive = [...zhParts, ...enParts, ...mixedParts].join(', ');
    }

    // 负面提示词
    const negative = this.config.includeNegative
      ? `${NEGATIVE_PROMPTS.general}, ${NEGATIVE_PROMPTS[category]}`
      : '';

    // 元数据
    const metadata = {
      totalParts: parts.length,
      hasStyle: !!this.style,
      language: (zhParts.length > 0 && enParts.length > 0
        ? 'mixed'
        : zhParts.length > 0
          ? 'zh'
          : 'en') as 'zh' | 'en' | 'mixed',
    };

    return {
      positive,
      negative,
      weights: Object.keys(weights).length > 0 ? weights : undefined,
      metadata,
    };
  }
}

// ============ 导出便捷函数（向后兼容） ============

/**
 * 创建默认引擎实例
 */
export function createPromptEngine(style?: DirectorStyle, config?: Partial<EngineConfig>): PromptEngine {
  return new PromptEngine(style, config);
}

/**
 * 快速生成角色提示词（兼容旧API）
 */
export function generateCharacterPrompt(character: Character, directorStyle?: DirectorStyle): string {
  const engine = new PromptEngine(directorStyle, { includeNegative: false });
  return engine.forCharacterFullBody(character).positive;
}

/**
 * 快速生成场景提示词（兼容旧API）
 */
export function generateScenePrompt(scene: Scene, directorStyle?: DirectorStyle): string {
  const engine = new PromptEngine(directorStyle, { includeNegative: false });
  return engine.forSceneWide(scene).positive;
}

/**
 * 快速生成分镜图片提示词（兼容旧API）
 */
export function generateStoryboardImagePrompt(
  panel: StoryboardPanel,
  characters: Character[],
  scenes: Scene[],
  directorStyle?: DirectorStyle
): string {
  const engine = new PromptEngine(directorStyle, { includeNegative: false });
  return engine.forStoryboardImage(panel, characters, scenes).positive;
}

/**
 * 快速生成分镜视频提示词（兼容旧API）
 */
export function generateStoryboardVideoPrompt(
  panel: StoryboardPanel,
  characters: Character[],
  directorStyle?: DirectorStyle
): string {
  const engine = new PromptEngine(directorStyle, { includeNegative: false });
  return engine.forStoryboardVideo(panel, characters).positive;
}
