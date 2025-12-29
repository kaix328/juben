import type { DirectorStyle, Character, Scene, StoryboardPanel } from '../types';

/**
 * 🆕 音效预设词库（按场景类型分类 - 扩展至 40+ 类）
 */
export const SOUND_PRESETS: Record<string, string[]> = {
  // === 战斗/动作 ===
  '战斗': ['刀剑交击', '铠甲碰撞声', '战吼声', '拳拳到肉', '骨骼碎裂'],
  '打斗': ['拳风呼啸', '踢腿破空', '身体撞击', '闷哼声'],
  '枪战': ['枪声回响', '弹壳落地', '子弹穿墙', '装弹声', '硝烟弥漫'],
  '追逐': ['急促脚步', '喘息声', '撞翻物品', '玻璃破碎'],

  // === 自然环境 ===
  '户外': ['风声', '鸟鸣', '虫鸣', '树叶沙沙'],
  '山林': ['瀑布轰鸣', '溪水潺潺', '兽吼', '枝桠折断'],
  '森林': ['鸟鸣啾啾', '树叶沙沙', '风吹树梢', '溪流潺潺'],
  '海边': ['海浪拍岸', '海鸥鸣叫', '帆布扑腾', '锚链声'],
  '沙漠': ['风沙呼啸', '沙粒摩擦', '骆驼嘶鸣', '脚踩沙地'],
  '草原': ['风吹草浪', '马蹄声', '羊群咩咩', '鹰隼鸣叫'],
  '雨景': ['雨打芭蕉', '屋檐滴水', '雷声隆隆', '雨水汇流'],

  // === 城市/室内 ===
  '街道': ['车流声', '人群喧哗', '脚步声', '叫卖声'],
  '酒馆': ['玻璃碰撞', '喧闹笑声', '木凳刮蹭', '酒水倾倒'],
  '宫殿': ['脚步回响', '衣袍窸窣', '玉佩叮当', '宫门吱呀'],
  '办公室': ['键盘敲击', '电话铃声', '打印机运转', '纸张翻动'],
  '咖啡厅': ['咖啡机蒸汽', '瓷杯轻碰', '低声交谈', '轻音乐'],
  '医院': ['监护仪滴滴', '推车滚轮', '对讲机', '脚步匆匆'],
  '学校': ['下课铃声', '学生喧闹', '翻书声', '粉笔书写'],

  // === 天气 ===
  '雨天': ['雨打屋檐', '雷声隆隆', '水花四溅', '雨伞撑开'],
  '雪天': ['踩雪咯吱', '寒风呼啸', '雪块滑落', '冰凌碎裂'],
  '晴天': ['微风轻拂', '鸟鸣悦耳', '蝉鸣阵阵'],
  '暴风': ['狂风呼啸', '树枝折断', '门窗撞击', '雷电交加'],

  // === 情绪 ===
  '紧张': ['心跳加速', '急促呼吸', '咽口水声', '手指敲击'],
  '悲伤': ['抽泣声', '泪水滴落', '叹息声', '雨声伴奏'],
  '喜悦': ['欢笑声', '掌声', '欢呼声', '碰杯声'],
  '恐惧': ['心跳剧烈', '颤抖呼吸', '地板咯吱', '门声吱呀'],

  // === 科幻/魔幻 ===
  '科幻': ['机械启动', '电子嗡鸣', '能量充能', '飞船引擎', '激光束'],
  '机械': ['齿轮运转', '液压声', '蒸汽喷射', '金属摩擦'],
  '魔法': ['法术吟唱', '能量涌动', '魔法爆发', '传送门开启'],
  '仙侠': ['剑鸣悠扬', '御风飞行', '灵气涌动', '天雷滚滚'],

  // === 传统/历史 ===
  '古风': ['古琴悠扬', '琵琶声', '箫声空灵', '钟声回响'],
  '武侠': ['剑出鞘声', '内力激荡', '衣袂飘飞', '点穴声'],
  '宫廷': ['编钟鸣响', '礼乐齐奏', '侍女轻步', '圣旨宣读'],

  // === 现代都市 ===
  '夜店': ['电子音乐', '人群欢呼', '灯光闪烁', '酒杯碰撞'],
  '地铁': ['列车呼啸', '报站声', '刷卡滴声', '车门开关'],
  '机场': ['广播声', '行李箱滚轮', '飞机引擎', '登机口提示'],
  '工厂': ['机器轰鸣', '传送带运转', '警报声', '焊接火花']
};

/**
 * 🆕 背景音乐预设（按情绪/风格 - 扩展版）
 */
export const MUSIC_PRESETS: Record<string, string[]> = {
  // === 情绪 ===
  '紧张': ['紧张鼓点BGM', '悬疑弦乐渐强', '心跳节奏', '电子紧迫感'],
  '悲伤': ['钢琴抒情轻柔', '提琴悲鸣', '哀伤笛声', '大提琴低沉'],
  '欢快': ['轻快小调', '欢乐节奏', '热闘BGM', '爵士欢快'],
  '浪漫': ['小提琴柔情', '钢琴二重奏', '萨克斯低鸣', '吉他轻弹'],
  '恐怖': ['不协和弦', '低频嗡鸣', '心跳加速', '尖锐弦乐'],
  '热血': ['激昂管弦', '电吉他嘶吼', '战鼓震天', '合唱高潮'],

  // === 风格 ===
  '古风': ['古琴悠扬', '琵琶轻弹', '箫声空灵', '古筝流水', '二胡婉转'],
  '史诗': ['交响乐高潮', '战鼓轰鸣', '合唱渐强', '号角嘹亮'],
  '科幻': ['电子合成器', '太空氛围', '数字脉冲', '赛博朋克'],
  '爵士': ['萨克斯慵懒', '钢琴即兴', '低音贝斯', '鼓刷轻扫'],
  '摇滚': ['电吉他失真', '架子鼓狂躁', '贝斯低沉', '人声嘶吼']
};

/**
 * 🆕 情绪化运镜预设
 */
export const EMOTIONAL_CAMERA_PRESETS: Record<string, string> = {
  '聚焦推进': '镜头从宽泛视野慢向核心主体推进，画面边缘逐渐收缩，传递渐沉浸、情绪递进的张力',
  '抽离后拉': '镜头从主体近景后拉，主体在画面中占比缩小，传递疏离感、释然、时空延展的氛围',
  '探索横摇': '镜头沿水平方向缓慢摇动，如同视线在空间中游走，传递追寻、好奇、不安的情绪',
  '陪伴平移': '镜头与主体保持平行轨迹，始终以主体为视觉锚点，传递无声陪伴、叙事流动感',
  '升华上升': '镜头从低角度缓慢向上升起，视野从局部扩展至开阔空间，传递崇高、希望、释然的力量',
  '压抑下降': '镜头从高处缓慢下沉降，视野从开阔空间收拢至特定主体，传递压抑、失落、聚焦的沉重感',
  '迷幻旋转': '镜头以主体为中心环绕旋转，画面元素随运镜产生动态模糊，传递混乱、迷幻、情绪剧烈波动',
  '爆发急推': '镜头以快速爆发力向前急推，动态冲击强烈，传递突发冲突、紧张爆发的冲击力',
  '爆发急拉': '镜头以快速爆发力向后急拉，画面在短时间内压缩/拉伸，传递紧张爆发的冲击力',
  '手持抖动': '手持镜头伴随轻微自然抖动，画面呈现生活化的不稳定性，传递真实、慌乱、紧张',
  '静动转换': '镜头先保持静止，再自然切换为动态运镜，传递从平静到涌动、从抑制到释放的转变'
};

/**
 * 🆕 特殊场景拍摄模式
 */
export const SCENE_SHOOTING_PRESETS: Record<string, string> = {
  '雨景': '120fps 慢镜头，手持微晃从肩头移至积水，凸显雨滴滴落与氛围感',
  '舞蹈': '3-5 米半径环绕跟拍（腰高镜头），节奏变速突出肢体舒展弧线',
  '美食': '50mm 特写推进（0.5 倍速俯视），展现酱汁纹理与食材色泽',
  '夜景': '30cm 低角平移 + 15° 上扬，1-2 秒长曝光呈现路灯光晕与车流反光交织',
  '跑步': '前跟拍（2-3 米距，肩下角度），动作起伏强化力量与速度感',
  '婚礼': '85mm 长焦侧后推进，从交握的手拉远至花海，凸显仪式庄重与细节',
  '自然风光': '无人机环绕上升（50m 至 100m），每秒 5° 转，呈现山体与云层层次',
  '昆虫': '微距 1:1 倍率镜头左右 10° 摇镜，聚焦爬行轨迹，浅景深虚化背景',
  '动物跳跃': '跟拍（与动物平齐）+ 快速对焦，捕捉起跳瞬间，凸显轻盈与爆发力'
};

/**
 * 🆕 专业运镜模版（25种运镜提示词）
 */
export const PROFESSIONAL_CAMERA_TEMPLATES: Record<string, string> = {
  // 特效运镜
  '希区柯克变焦': 'dolly zoom effect，镜头推进同时变焦拉远，制造悬疑感或心理扭曲的视觉冲击',
  '一镜到底': 'continuous tracking shot，无剪辑长镜头跟随主体穿越多个空间，沉浸式叙事',

  // 俯冲与升降
  '俯冲镜头': 'Dive Shot，从高空云层急速俯冲逼近地面，配合镜头抖动特效，营造强烈视觉冲击',
  '升降镜头': 'Crane Shot，镜头从地面低角度垂直抬升至高空俯瞰，呈现广阔环境中的渺小感',
  '俯瞰全景': 'overhead shot，从正上方高空垂直拍摄，展示场景的宏观结构如建筑群落的布局',

  // 动态转场
  '旋转淡出': 'spin fade transition，镜头旋转同时渐隐，用于衔接不同场景或时间线',
  '动态匹配': 'match cut，通过相似动作或形状匹配衔接两个不同场景',

  // 跟随与环绕
  '跟随运镜': 'Tracking Shot，稳定器跟拍奔跑的运动员/悬浮车辆，主体始终居中，背景产生运动模糊',
  '动态环绕': 'Orbital Shot，360度环绕拍摄，镜头半径7米，保持仰角15度，突出环境与主体的互动关系',
  '低角环绕': 'low-angle orbit，低角度环绕主体，营造视觉冲击力和力量感',

  // 曲线与速度
  '曲线运镜': 'curved camera path，镜头沿曲线轨迹运动，模拟真实手持或特殊设备运动轨迹',
  '加速推进': 'accelerated zoom，镜头逐渐加速推进，增强紧张感和冲击力',
  '慢速平移': 'slow dolly movement，镜头缓慢平稳移动，传递流畅、平稳的叙事节奏',

  // 视角切换
  '仰视广角': 'low-angle wide shot，从较低位置向上拍摄，使主体显得更为高耸、庄重',
  '俯视拍摄': 'overhead shot，从较高位置向下拍摄，令主体显得相对渺小，营造压迫、孤立感',
  '第一人称': 'POV shot，模拟角色眼睛所看到的景象，引导观众以角色的主观视野体验情境',
  '客观视角': 'neutral angle，采用中立的拍摄角度，真实地再现场景，不夹杂主观判断'
};

/**
 * 🆕 运镜速度关键词
 */
export const CAMERA_SPEED_KEYWORDS: Record<string, string> = {
  '平稳': 'steady，镜头运动平稳流畅，适合叙事性场景',
  '急促': 'abrupt，镜头运动急促突然，适合紧张冲突场景',
  '流畅': 'smooth，镜头运动如水般流畅，适合优雅舞蹈或自然风光',
  '颠簸': 'shaky，镜头伴随颠簸抖动，适合追逐或战斗场景',
  '缓慢': 'slow，镜头缓慢运动，适合情感沉浸或悬念铺垫',
  '快速': 'fast，镜头快速运动，适合动作场景或时间压缩'
};

/**
 * 🆕 视觉特效运镜预设
 */
export const VISUAL_EFFECT_PRESETS: Record<string, string> = {
  '广角畸变': '运用鱼眼镜头拍摄，画面边缘呈现显著的变形效果，构建夸张化、非写实的视觉感受',
  '画面分割': '将单一屏幕划分为若干个独立区域，用以同步展现不同的场景或多个视点',
  '影像叠加': '将两个或更多的画面素材重叠融合在一起，创造出如梦似幻或具有抽象意味的视觉效果',
  '单色镜头': '除去画面中所有色彩信息，仅以不同程度的灰色调来呈现，强化复古感、戏剧张力',
  '轮廓剪影': '当主体处于强烈逆光环境下，形成一个深暗的轮廓，细节被隐去，强调物体外形线条',
  '失焦朦胧': '通过控制景深，使得画面的主体或其背景部分呈现模糊状态，引导观众注意力',
  '精细放大': '对极其微小的物体进行极度近距离的特写拍摄，展现平常肉眼难以观察到的细节'
};

/**
 * 🆕 时间控制运镜预设
 */
export const TIME_CONTROL_PRESETS: Record<string, string> = {
  '延时慢放': '通过高速捕捉影像后再以较慢速度播放，细致入微地展现动作的每一个瞬间，增强画面情绪感染力',
  '缩时摄影': '将较长时间内发生的事件压缩在短时间内快速播放，以直观展现事物发展或时间流逝的过程',
  '瞬间静止': '影像在某一刻突然停止不动，着重突出某个特定的瞬间，常用于剧情达到高潮点或影片收尾',
  '快速摇摆': '以极快的速度水平转动摄影机，导致画面瞬间模糊，常用于场景的快速切换或转场技巧',
  '焦距变换': '利用镜头焦距的调整，实现画面从远距离景物迅速过渡到近距离特写，或由特写迅速转为远景'
};

/**
 * 生成角色AI提示词
 */
export function generateCharacterPrompt(
  character: Character,
  directorStyle?: DirectorStyle
): string {
  const parts: string[] = [];

  // 基础描述
  if (character.name) {
    parts.push(character.name);
  }

  if (character.appearance) {
    parts.push(character.appearance);
  }

  // 🆕 详细属性（如有）
  const charAny = character as any;
  if (charAny.age) parts.push(`${charAny.age}岁`);
  if (charAny.gender) parts.push(charAny.gender);
  if (charAny.height) parts.push(`身高${charAny.height}`);
  if (charAny.bodyType) parts.push(charAny.bodyType);
  if (charAny.hairStyle) parts.push(charAny.hairStyle);
  if (charAny.hairColor) parts.push(`${charAny.hairColor}发色`);
  if (charAny.eyeColor) parts.push(`${charAny.eyeColor}眼睛`);
  if (charAny.clothing) parts.push(charAny.clothing);

  // 🆕 中文化性格描述
  if (character.personality) {
    parts.push(`性格特征：${character.personality}`);
  }

  // 应用导演风格（🆕 中文化）
  if (directorStyle) {
    if (directorStyle.artStyle) {
      parts.push(`${directorStyle.artStyle}风格`);
    }
    if (directorStyle.colorTone) {
      parts.push(`色调：${directorStyle.colorTone}`);
    }
    if (directorStyle.lightingStyle) {
      parts.push(`光影：${directorStyle.lightingStyle}`);
    }
    if (directorStyle.customPrompt) {
      parts.push(directorStyle.customPrompt);
    }
  }

  // 添加质量标签（🆕 中文化）
  parts.push('高品质', '精细刻画', '专业插画');

  return parts.filter(p => p).join(', ');
}

/**
 * 生成场景AI提示词
 */
export function generateScenePrompt(
  scene: Scene,
  directorStyle?: DirectorStyle
): string {
  const parts: string[] = [];

  // 基础描述
  if (scene.location) {
    parts.push(scene.location);
  }

  if (scene.environment) {
    parts.push(scene.environment);
  }

  if (scene.description) {
    parts.push(scene.description);
  }

  // 🆕 天气和季节（如有）
  const sceneAny = scene as any;
  if (sceneAny.weather) {
    const weatherMap: Record<string, string> = {
      '晴': '晴空万里', '阴': '阴云密布', '雨': '细雨绵绵',
      '雪': '白雪皑皑', '雾': '雾气弥漫', '风': '狂风呼啸'
    };
    parts.push(weatherMap[sceneAny.weather] || sceneAny.weather);
  }
  if (sceneAny.season) {
    const seasonMap: Record<string, string> = {
      '春': '春暖花开', '夏': '炎炎夏日', '秋': '金秋时节', '冬': '寒冬腊月'
    };
    parts.push(seasonMap[sceneAny.season] || sceneAny.season);
  }

  // 应用导演风格（🆕 中文化）
  if (directorStyle) {
    if (directorStyle.artStyle) {
      parts.push(`${directorStyle.artStyle}风格`);
    }
    if (directorStyle.colorTone) {
      parts.push(directorStyle.colorTone);
    }
    if (directorStyle.lightingStyle) {
      parts.push(directorStyle.lightingStyle);
    }
    if (directorStyle.mood) {
      parts.push(`${directorStyle.mood}氛围`);
    }
    if (directorStyle.customPrompt) {
      parts.push(directorStyle.customPrompt);
    }
  }

  // 添加质量标签（🆕 中文化）
  parts.push('电影感', '精细环境', '高品质');

  return parts.filter(p => p).join(', ');
}

/**
 * 🆕 提示词权重控制辅助函数
 * 支持格式：(关键词:权重) 或 ((关键词)) 语法
 */
export function applyPromptWeight(text: string, weight: number = 1.2): string {
  if (weight === 1.0) return text;
  // 使用 (text:weight) 格式，兼容大多数 AI 模型
  return `(${text}:${weight.toFixed(1)})`;
}

/**
 * 🆕 批量应用权重到关键词
 */
export function applyWeightsToKeywords(
  prompt: string,
  keywords: { word: string; weight: number }[]
): string {
  let result = prompt;
  keywords.forEach(({ word, weight }) => {
    if (result.includes(word)) {
      result = result.replace(word, applyPromptWeight(word, weight));
    }
  });
  return result;
}

/**
 * 生成分镜AI绘画提示词（专业增强版 v3）
 * 优化结构：镜头语言 > 角色触发词 > 主体内容 > 导演风格 > 质量标签
 */
export function generateStoryboardImagePrompt(
  panel: StoryboardPanel,
  characters: Character[],
  scenes: Scene[],
  directorStyle?: DirectorStyle
): string {
  // 分层结构
  const cameraLang: string[] = [];     // 镜头语言（最前面）
  const triggerWords: string[] = [];   // 角色触发词
  const subjects: string[] = [];       // 主体内容（压缩版）
  const styleWords: string[] = [];     // 导演风格（统一中文）
  const qualityTags: string[] = [];    // 质量标签

  // ========== 第一层：镜头语言（最重要，放最前面） ==========
  // 🆕 增强版镜头层级描述（含专业说明）
  const shotCodeMap: Record<string, string> = {
    'ECU': '大特写，极致聚焦主体微小局部，几乎排除环境干扰，制造强烈视觉冲击力',
    'CU': '特写，聚焦主体局部细节，弱化远景环境，突出细微动作如手势、眼神变化',
    'MCU': '近景，胸部以上入画，压缩环境空间，强化观众与主体近距离感',
    'MS': '中景，腰部以上入画，聚焦主体主要活动区域，兼顾动作细节和局部环境',
    'MWS': '中全景，膝部以上入画，主体与环境平衡呈现',
    'WS': '远景，全身入画，完整呈现主体全貌及周围核心环境',
    'EWS': '大远景，广阔场景取景，主体占比极小，重点呈现环境整体氛围，空间纵深感强',
    'POV': '主观视角，第一人称视角，观众代入角色所见',
    'OTS': '过肩镜头，前景人物虚化肩部入画，后景清晰呈现对话主体'
  };
  // 🆕 增强版角度描述
  const angleMap: Record<string, string> = {
    'EYE_LEVEL': '平视，与主体视线平齐，呈现客观中立视角',
    'HIGH': '俯拍，从高于主体视角向下拍摄，突出整体秩序或环境包围感',
    'LOW': '仰拍，从低于主体视角向上拍摄，传递主体权威感、力量感或压迫感',
    'DUTCH': '倾斜，画面倾斜构图，传递不安、紧张或戏剧性张力'
  };

  // 景别（🆕 智能默认）
  if (panel.shotSize && shotCodeMap[panel.shotSize]) {
    cameraLang.push(shotCodeMap[panel.shotSize]);
  } else {
    // 🆕 根据场景内容智能选择默认景别
    let defaultShot = '中景';

    // 有对白 → 近景（专注说话者）
    if (panel.dialogue && panel.dialogue.trim()) {
      defaultShot = '近景';
    }
    // 无角色或场景建立 → 远景
    else if (!panel.characters || panel.characters.length === 0) {
      defaultShot = '远景';
    }
    // 多角色 → 中全景（容纳多人）
    else if (panel.characters.length > 2) {
      defaultShot = '中全景';
    }
    // 情绪爆发 → 特写
    else if ((panel as any).emotionalBeat === 'CLIMAX' || (panel as any).emotionalBeat === 'SHOCK') {
      defaultShot = '特写';
    }

    cameraLang.push(defaultShot);
  }

  // 角度
  if (panel.angle && angleMap[panel.angle]) {
    cameraLang.push(angleMap[panel.angle]);
  }

  // 🆕 构图指导（根据景别自动添加）
  const shotSize = panel.shotSize || 'MS';
  const compositionGuide: Record<string, string> = {
    'ECU': '面部居中，极致细节',
    'CU': '面部居中，表情清晰',
    'MCU': '胸部以上，留白适中',
    'MS': '腰部以上，人物居中',
    'MWS': '膝部以上，环境可见',
    'WS': '全身入画，环境占比大',
    'EWS': '人物渺小，环境壮阔',
    'POV': '第一人称视角',
    'OTS': '前景虚化，后景清晰'
  };
  if (compositionGuide[shotSize]) {
    cameraLang.push(compositionGuide[shotSize]);
  }

  // ========== 第二层：角色触发词（🆕 权重控制 + 格式优化） ==========
  if (panel.characters && panel.characters.length > 0) {
    panel.characters.forEach((charName, index) => {
      const char = characters.find(c => c.name === charName);
      if (char?.triggerWord) {
        // 主角（第一个角色）权重更高
        const weight = index === 0 ? 1.5 : 1.2;
        // 🆕 移除尖括号，使用更通用的格式（兼容主流 AI 模型）
        triggerWords.push(applyPromptWeight(char.triggerWord, weight));
      }
    });
  }

  // ========== 第三层：主体内容（压缩版，≤50字） ==========
  // 角色简要描述（🆕 主角添加权重）
  if (panel.characters && panel.characters.length > 0) {
    const charNames = panel.characters.slice(0, 3).map((name, i) =>
      i === 0 ? applyPromptWeight(name, 1.3) : name
    ).join('、');
    subjects.push(charNames);
  }

  // 画面描述（🆕 智能截断：保留关键词）
  if (panel.description) {
    let desc = panel.description;

    // 如果超过 80 字，按逗号/句号分割保留前半部分
    if (desc.length > 80) {
      const parts = desc.split(/[，。,\.]/);
      desc = '';
      for (const part of parts) {
        if ((desc + part).length <= 70) {
          desc += (desc ? '，' : '') + part.trim();
        } else {
          break;
        }
      }
      if (!desc) {
        desc = panel.description.substring(0, 70);
      }
    }

    subjects.push(desc);
  }

  // ========== 场景光影（基于时间段） ==========
  const scene = scenes.find(s => s.id === panel.sceneId);
  if (scene?.timeOfDay) {
    const timeOfDayLighting: Record<string, string> = {
      '白天': '自然光', '日间': '自然光', '上午': '晨光',
      '中午': '顶光', '下午': '斜阳', '黄昏': '金色暖光',
      '傍晚': '暮光', '夜晚': '月光', '深夜': '暗调', '凌晨': '冷蓝光'
    };
    if (timeOfDayLighting[scene.timeOfDay]) {
      subjects.push(timeOfDayLighting[scene.timeOfDay]);
    }
  }

  // 情绪氛围
  if ((panel as any).atmosphere) {
    subjects.push((panel as any).atmosphere);
  }

  // ========== 第四层：导演风格（统一中文） ==========
  if (directorStyle) {
    // 艺术风格（翻译常见英文）
    if (directorStyle.artStyle) {
      const artStyleCN = translateToChineseStyle(directorStyle.artStyle);
      styleWords.push(artStyleCN);
    }
    // 色调
    if (directorStyle.colorTone) {
      styleWords.push(directorStyle.colorTone);
    }
    // 光影风格
    if (directorStyle.lightingStyle) {
      styleWords.push(directorStyle.lightingStyle);
    }
    // 🆕 镜头风格
    if (directorStyle.cameraStyle) {
      styleWords.push(directorStyle.cameraStyle);
    }
    // 情绪氛围
    if (directorStyle.mood) {
      styleWords.push(`${directorStyle.mood}氛围`);
    }
    // 自定义（仅中文部分）
    if (directorStyle.customPrompt) {
      // 过滤掉英文，只保留中文
      const chineseOnly = directorStyle.customPrompt.replace(/[a-zA-Z,\s]+/g, '').trim();
      if (chineseOnly) {
        styleWords.push(chineseOnly);
      }
    }
  }

  // ========== 第五层：质量标签（🆕 动态调整） ==========
  // 基础质量标签
  qualityTags.push('电影构图', '专业分镜', '高清');

  // 🆕 根据导演风格动态添加
  if (directorStyle?.artStyle) {
    const artStyle = directorStyle.artStyle;
    if (artStyle.includes('国风') || artStyle.includes('水墨') || artStyle.includes('工笔')) {
      qualityTags.push('东方美学', '中式意境');
    }
    if (artStyle.includes('赛博') || artStyle.includes('科幻')) {
      qualityTags.push('未来感', '科技质感');
    }
    if (artStyle.includes('动画') || artStyle.includes('二次元')) {
      qualityTags.push('动画风格', '精致线条');
    }
    if (artStyle.includes('写实') || artStyle.includes('真人')) {
      qualityTags.push('真实感', '细腻光影');
    }
  }

  // ========== 组装最终提示词 ==========
  const allParts = [
    ...cameraLang,
    ...triggerWords,
    ...subjects,
    ...styleWords,
    ...qualityTags
  ].filter(p => p);

  let result = allParts.join(', ');

  // 画面比例（使用导演风格设置，默认 16:9）
  const aspectRatio = directorStyle?.aspectRatio || '16:9';
  result += ` --ar ${aspectRatio}`;

  // 负面提示词（默认 + 自定义）
  const defaultNegative = '变形, 多手指, 模糊, 低质量';
  const negPrompt = directorStyle?.negativePrompt
    ? `${defaultNegative}, ${directorStyle.negativePrompt}`
    : defaultNegative;
  result += ` --neg ${negPrompt}`;

  return result;
}

// 辅助函数：翻译常见英文风格词为中文
function translateToChineseStyle(style: string): string {
  const translations: Record<string, string> = {
    'film noir': '黑色电影风格',
    'anime': '日系动漫风格',
    'realistic': '写实风格',
    'watercolor': '水彩风格',
    'oil painting': '油画风格',
    'cyberpunk': '赛博朋克风格',
    'fantasy': '奇幻风格',
    'horror': '恐怖风格',
    'romantic': '浪漫风格',
    'noir': '黑白电影风格'
  };

  const lowerStyle = style.toLowerCase();
  for (const [en, cn] of Object.entries(translations)) {
    if (lowerStyle.includes(en)) {
      return cn;
    }
  }
  return style.includes('风格') ? style : `${style}风格`;
}

/**
 * 视频生成平台类型
 */
export type VideoPlatform = 'generic' | 'runway' | 'pika' | 'kling' | 'comfyui';

/**
 * 生成分镜AI视频提示词（专业增强版 - 支持多平台 + 上下文感知）
 */
export function generateStoryboardVideoPrompt(
  panel: StoryboardPanel,
  characters: Character[],
  scenes: Scene[],
  directorStyle?: DirectorStyle,
  platform: VideoPlatform | any = 'generic', // 🆕 支持平台或prevPanel
  prevPanel?: StoryboardPanel  // 🆕 上一个分镜用于过渡
): string {
  const parts: string[] = [];

  // 🆕 兼容旧调用方式：如果第5个参数是对象，当作prevPanel处理
  const actualPrevPanel = typeof platform === 'object' ? platform : prevPanel;
  const actualPlatform = typeof platform === 'string' ? platform : 'generic';

  // 🆕 1. 上下文过渡描述（如果有上一镜）
  if (actualPrevPanel && actualPrevPanel.endFrame) {
    parts.push(`[过渡] 承接上一镜：${actualPrevPanel.endFrame}，画面自然延续`);
  }

  // 🆕 2. 转场效果描述
  if (panel.transition && panel.transition !== '切至') {
    const transitionMap: Record<string, string> = {
      '溶至': '画面溶解过渡，从前一镜渐变融入',
      '淡出': '画面淡出至黑，再淡入新镜',
      '淡入': '从黑色淡入画面',
      '闪白': '画面闪白过渡，强调冲击感',
      '擦除': '画面擦除过渡'
    };
    if (transitionMap[panel.transition]) {
      parts.push(`[转场] ${transitionMap[panel.transition]}`);
    }
  }

  // 🆕 景别描述（复用图像提示词的增强版）
  const videoShotCodeMap: Record<string, string> = {
    'ECU': '大特写，极致聚焦主体微小局部',
    'CU': '特写，聚焦主体局部细节',
    'MCU': '近景，胸部以上入画',
    'MS': '中景，腰部以上入画',
    'MWS': '中全景，膝部以上入画',
    'WS': '远景，全身入画',
    'EWS': '大远景，广阔场景',
    'POV': '主观视角，第一人称',
    'OTS': '过肩镜头'
  };

  // 🆕 角度描述
  const videoAngleMap: Record<string, string> = {
    'EYE_LEVEL': '平视角度',
    'HIGH': '俯拍角度',
    'LOW': '仰拍角度',
    'DUTCH': '倾斜角度'
  };

  // 🆕 添加景别
  if (panel.shotSize && videoShotCodeMap[panel.shotSize]) {
    parts.push(videoShotCodeMap[panel.shotSize]);
  }

  // 🆕 添加角度
  if (panel.cameraAngle && videoAngleMap[panel.cameraAngle]) {
    parts.push(videoAngleMap[panel.cameraAngle]);
  }

  // 镜头运动映射（中文）
  const movementMap: Record<string, string> = {
    '静止': '静态镜头',
    '推': '推镜头，向前移动',
    '拉': '拉镜头，向后移动',
    '摇': '摇镜头',
    '移': '移动跟拍',
    '跟': '跟随镜头',
    '升降': '升降镜头，垂直运动',
    '环绕': '环绕镜头，圆周运动'
  };

  // 🆕 专业运动代码映射（含参数描述）
  const movementCodeMap: Record<string, string> = {
    'STATIC': '静态镜头，画面保持稳定不动',
    'PAN_L': '向左摇镜，匀速水平摇动8秒扫过30米宽场景',
    'PAN_R': '向右摇镜，匀速水平摇动8秒扫过30米宽场景',
    'TILT_UP': '向上摇镜，快速急摇2秒内从地面摇至天空',
    'TILT_DOWN': '向下摇镜，2秒内从天空摇至地面',
    'DOLLY_IN': '推镜头，缓慢推进每秒15厘米，6秒内从全景推至近景',
    'DOLLY_OUT': '拉镜头，快速拉远0.5秒内从特写拉至全景',
    'TRACK_L': '向左横移，缓慢侧移与主体保持2米距离，每秒50厘米',
    'TRACK_R': '向右横移，缓慢侧移与主体保持2米距离，每秒50厘米',
    'CRANE_UP': '升镜头，缓慢升空从腰部升至10米高空，6秒内完成',
    'CRANE_DOWN': '降镜头，快速下降从20米高空直落至主体头顶1.5米处',
    'ZOOM_IN': '变焦拉近，焦距平滑变化聚焦细节',
    'ZOOM_OUT': '变焦拉远，焦距平滑变化展现全貌',
    'HANDHELD': '手持镜头，伴随轻微自然抖动，呈现真实感',
    'STEADICAM': '稳定器跟拍，与主体步行速度每秒1.2米完全同步',
    'FOLLOW': '跟随镜头，追踪主体移动',
    'ARC': '环绕镜头，以主体为圆心保持3米半径，每秒转动30度',
    'WHIP': '甩镜头，快速摇移1秒内完成360度翻转',
    'ORBIT': '环绕镜头，匀速环绕12秒完成一周始终正对主体'
  };

  // 优先使用专业代码
  if (panel.movementType && movementCodeMap[panel.movementType]) {
    parts.push(movementCodeMap[panel.movementType]);
  } else if (panel.cameraMovement && movementMap[panel.cameraMovement]) {
    parts.push(movementMap[panel.cameraMovement]);
  }

  // 🆕 接入情绪化运镜预设
  if (panel.cameraMovement && EMOTIONAL_CAMERA_PRESETS[panel.cameraMovement]) {
    parts.push(EMOTIONAL_CAMERA_PRESETS[panel.cameraMovement]);
  }

  // 🆕 接入专业运镜模版
  if (panel.cameraMovement && PROFESSIONAL_CAMERA_TEMPLATES[panel.cameraMovement]) {
    parts.push(PROFESSIONAL_CAMERA_TEMPLATES[panel.cameraMovement]);
  }

  // 🆕 接入视觉特效预设
  if (panel.cameraMovement && VISUAL_EFFECT_PRESETS[panel.cameraMovement]) {
    parts.push(VISUAL_EFFECT_PRESETS[panel.cameraMovement]);
  }

  // 🆕 接入时间控制预设
  if (panel.cameraMovement && TIME_CONTROL_PRESETS[panel.cameraMovement]) {
    parts.push(TIME_CONTROL_PRESETS[panel.cameraMovement]);
  }

  // 时长
  if (panel.duration) {
    parts.push(`${panel.duration}秒时长`);
  }

  // 🆕 动作提示（保留旧逻辑兼容）
  if (panel.actionCue) {
    if (panel.actionCue.startAction && panel.actionCue.endAction) {
      parts.push(`动作：从"${panel.actionCue.startAction}"到"${panel.actionCue.endAction}"`);
    } else if (panel.actionCue.startAction) {
      parts.push(`起始动作：${panel.actionCue.startAction}`);
    }
    if (panel.actionCue.direction) {
      parts.push(`方向：${panel.actionCue.direction}`);
    }
  }

  // 🆕 起止帧描述（运动层分离 - 最重要）
  if (panel.startFrame || panel.endFrame) {
    const frameParts: string[] = [];
    if (panel.startFrame) {
      frameParts.push(`【起始帧】${panel.startFrame}`);
    }
    if (panel.endFrame) {
      frameParts.push(`【结束帧】${panel.endFrame}`);
    }
    parts.push(frameParts.join(' → '));
  }

  // 🆕 运动速度
  if (panel.motionSpeed) {
    const speedMap: Record<string, string> = {
      'slow': '慢动作，0.5倍速',
      'normal': '正常速度',
      'fast': '快动作，2倍速',
      'timelapse': '延时摄影，加速运动'
    };
    parts.push(speedMap[panel.motionSpeed] || panel.motionSpeed);
  }

  // 🆕 角色动作列表（运动层分离 - 角色层）
  if (panel.characterActions && panel.characterActions.length > 0) {
    parts.push(`【角色动作】${panel.characterActions.join('；')}`);
  }

  // 🆕 环境动态描述（运动层分离 - 环境层）
  if (panel.environmentMotion) {
    parts.push(`【环境动态】${panel.environmentMotion}`);
  }

  // 场景环境
  const scene = scenes.find(s => s.id === panel.sceneId);
  if (scene) {
    if (scene.location) {
      parts.push(`场景：${scene.location}`);
    }
    if (scene.environment) {
      parts.push(scene.environment);
    }
  }

  // 动作描述
  if (panel.description) {
    parts.push(panel.description);
  }

  // 角色动作（基础角色信息）
  if (panel.characters && panel.characters.length > 0) {
    panel.characters.forEach(name => {
      const char = characters.find(c => c.name === name);
      if (char) {
        // 使用触发词增强一致性
        if (char.triggerWord) {
          parts.push(`【${char.triggerWord}】${name}`);
        } else if (char.appearance) {
          parts.push(`${name}（${char.appearance}）`);
        } else {
          parts.push(name);
        }
      } else {
        parts.push(name);
      }
    });
  }

  // 对白
  if (panel.dialogue) {
    parts.push(`对白："${panel.dialogue}"`);
  }

  // 转场效果已在后面统一处理，此处删除重复代码

  // 🆕 导演风格完整应用
  if (directorStyle) {
    // 艺术风格
    if (directorStyle.artStyle) {
      parts.push(`${directorStyle.artStyle}风格`);
    }
    // 色调
    if (directorStyle.colorTone) {
      parts.push(directorStyle.colorTone);
    }
    // 光影风格
    if (directorStyle.lightingStyle) {
      parts.push(directorStyle.lightingStyle);
    }
    // 镜头风格
    if (directorStyle.cameraStyle) {
      parts.push(directorStyle.cameraStyle);
    }
    // 情绪氛围
    if (directorStyle.mood) {
      parts.push(`${directorStyle.mood}氛围`);
    }
    // 自定义提示词
    if (directorStyle.customPrompt) {
      parts.push(directorStyle.customPrompt);
    }

    // 🆕 帧率设置
    if (directorStyle.videoFrameRate) {
      const frameRateMap: Record<string, string> = {
        '24': '24fps电影流畅',
        '30': '30fps标准流畅',
        '60': '60fps超流畅'
      };
      parts.push(frameRateMap[directorStyle.videoFrameRate] || `${directorStyle.videoFrameRate}fps`);
    }

    // 🆕 运动强度
    if (directorStyle.motionIntensity) {
      const intensityMap: Record<string, string> = {
        'subtle': '微动效果',
        'normal': '标准运动',
        'dynamic': '强烈动态'
      };
      parts.push(intensityMap[directorStyle.motionIntensity] || directorStyle.motionIntensity);
    }
  }

  // 🆕 宽高比（适配不同平台）
  if ((panel as any).aspectRatio) {
    const aspectMap: Record<string, string> = {
      '16:9': '横屏16:9电影比例',
      '9:16': '竖屏9:16手机比例',
      '1:1': '方形1:1社交媒体比例',
      '4:3': '经典4:3比例',
      '21:9': '超宽21:9电影比例'
    };
    parts.push(aspectMap[(panel as any).aspectRatio] || (panel as any).aspectRatio);
  }

  // 🆕 音效提示融入（增强视频氛围）
  if (panel.soundEffects && panel.soundEffects.length > 0) {
    parts.push(`【音效氛围】${panel.soundEffects.slice(0, 3).join('、')}`);
  }

  // 🆕 背景音乐提示
  if (panel.music) {
    parts.push(`【BGM】${panel.music}`);
  }

  // 🆕 动态视频质量标签（根据导演风格调整）
  const videoQualityTags = ['流畅运动', '电影级视频', '专业摄影', '高清画质'];
  if (directorStyle?.artStyle) {
    const styleQualityMap: Record<string, string[]> = {
      '水墨': ['东方美学', '写意风格'],
      '赛博朋克': ['未来感', '霓虹光效'],
      '复古': ['胶片质感', '年代感'],
      '写实': ['真实光影', '自然色彩'],
      '动漫': ['二次元', '日系风格'],
      '奇幻': ['魔幻光效', '梦幻氛围']
    };
    const extraTags = styleQualityMap[directorStyle.artStyle] || [];
    videoQualityTags.push(...extraTags);
  }
  parts.push(...videoQualityTags);

  // 🆕 根据平台格式化输出
  const formatForPlatform = (parts: string[], platform: VideoPlatform): string => {
    switch (platform) {
      case 'runway':
        // Runway Gen-3 格式：结构化标签
        return parts.map(p => {
          if (p.startsWith('【')) return p.replace(/【(.+?)】/, '[$1]');
          return p;
        }).join(', ') + ' --ar 16:9 --quality 4K';

      case 'pika':
        // Pika 格式：简洁自然语言
        return parts.filter(p => !p.includes('效果') && !p.includes('标签'))
          .slice(0, 10).join('，') + '，高质量视频';

      case 'kling':
        // 可灵格式：中文描述 + 参数
        return parts.join('，') + ' #视频生成 #电影感';

      case 'comfyui':
        // ComfyUI 格式：节点参数风格
        return `positive_prompt: "${parts.filter(p => !p.startsWith('--')).join(', ')}"`;

      default:
        // 通用格式
        return parts.filter(p => p).join(', ');
    }
  };

  let result = formatForPlatform(parts, platform);

  // 🆕 负面提示词
  if (directorStyle?.negativePrompt) {
    if (platform === 'comfyui') {
      result += `, negative_prompt: "${directorStyle.negativePrompt}"`;
    } else {
      result += ` --neg ${directorStyle.negativePrompt}`;
    }
  }

  return result;
}

/**
 * 导演风格预设模板
 */
export const DIRECTOR_STYLE_PRESETS: Record<string, DirectorStyle> = {
  '宫崎骏风格': {
    artStyle: '手绘动画',
    colorTone: '温暖柔和色调',
    lightingStyle: '自然柔和光线',
    cameraStyle: '电影级镜头',
    mood: '温馨治愈',
    customPrompt: 'Studio Ghibli style, hand-drawn animation, watercolor aesthetic, nature elements',
    negativePrompt: '写实风格, 3D渲染, 暗黑恐怖, 血腥暴力',
    aspectRatio: '16:9',
    videoFrameRate: '24',
    motionIntensity: 'subtle'
  },
  '新海诚风格': {
    artStyle: '唯美写实',
    colorTone: '高饱和度鲜艳色彩',
    lightingStyle: '戏剧性光影对比',
    cameraStyle: '广角镜头',
    mood: '浪漫忧郁',
    customPrompt: 'Makoto Shinkai style, detailed urban scenery, beautiful sky, lens flare, romantic atmosphere',
    negativePrompt: '卡通Q版, 粗糙线条, 暗沉色调',
    aspectRatio: '16:9',
    videoFrameRate: '24',
    motionIntensity: 'normal'
  },
  '诺兰风格': {
    artStyle: '写实主义',
    colorTone: '冷色调去饱和',
    lightingStyle: '强对比戏剧光',
    cameraStyle: '史诗级IMAX镜头',
    mood: '紧张悬疑',
    customPrompt: 'Christopher Nolan style, realistic, IMAX cinematography, wide angle, dramatic lighting',
    negativePrompt: '卡通风格, 鲜艳色彩, 可爱元素',
    aspectRatio: '21:9',
    videoFrameRate: '24',
    motionIntensity: 'dynamic'
  },
  '昆汀风格': {
    artStyle: '复古胶片',
    colorTone: '鲜艳高饱和色彩',
    lightingStyle: '强烈对比光线',
    cameraStyle: '特写广角交替',
    mood: '暴力美学',
    customPrompt: 'Quentin Tarantino style, retro film grain, vibrant colors, extreme close-ups, stylized violence',
    negativePrompt: '温馨可爱, 柔和色调, 儿童向',
    aspectRatio: '16:9',
    videoFrameRate: '24',
    motionIntensity: 'dynamic'
  },
  '赛博朋克': {
    artStyle: '赛博朋克',
    colorTone: '霓虹色彩',
    lightingStyle: '霓虹灯光效',
    cameraStyle: '未来科技镜头',
    mood: '神秘科技',
    customPrompt: 'cyberpunk style, neon lights, futuristic city, holographic elements, rain and reflections',
    negativePrompt: '自然田园, 古典风格, 暖色调',
    aspectRatio: '21:9',
    videoFrameRate: '30',
    motionIntensity: 'dynamic'
  },
  '黑色电影': {
    artStyle: '黑白胶片',
    colorTone: '黑白高对比',
    lightingStyle: '强烈阴影',
    cameraStyle: '经典胶片镜头',
    mood: '阴郁悬疑',
    customPrompt: 'film noir style, black and white, dramatic shadows, venetian blinds lighting, mystery atmosphere',
    negativePrompt: '彩色画面, 明亮温馨, 可爱卡通',
    aspectRatio: '16:9',
    videoFrameRate: '24',
    motionIntensity: 'subtle'
  },
  // ========== AI漫剧爆款风格 ==========
  '古风仙侠': {
    artStyle: '国风水墨',
    colorTone: '青绿山水色调',
    lightingStyle: '柔和仙气光',
    cameraStyle: '飘逸镜头',
    mood: '仙气飘飘',
    customPrompt: '中国古典仙侠, 水墨画风格, 云雾缭绕, 仙鹤飞舞, 古典建筑, 飘逸衣袂, 唯美意境',
    negativePrompt: '现代元素, 西式建筑, 写实风格',
    aspectRatio: '9:16',
    videoFrameRate: '24',
    motionIntensity: 'subtle'
  },
  '都市甜宠': {
    artStyle: '唯美漫画',
    colorTone: '粉嫩甜美色调',
    lightingStyle: '柔焦梦幻光',
    cameraStyle: '浪漫镜头',
    mood: '甜蜜浪漫',
    customPrompt: '现代都市, 甜宠风格, 柔光效果, 梦幻氛围, 精致五官, 时尚穿搭, 浪漫场景',
    negativePrompt: '暗黑风格, 恐怖元素, 粗糙画风',
    aspectRatio: '9:16',
    videoFrameRate: '30',
    motionIntensity: 'normal'
  },
  '霸总虐恋': {
    artStyle: '写实漫画',
    colorTone: '冷暖对比色调',
    lightingStyle: '戏剧性侧光',
    cameraStyle: '电影级特写',
    mood: '虐恋情深',
    customPrompt: '现代都市, 霸道总裁风格, 高级感, 戏剧性光影, 情绪张力, 豪华场景, 西装革履',
    negativePrompt: '卡通风格, 低质量, 变形',
    aspectRatio: '9:16',
    videoFrameRate: '24',
    motionIntensity: 'normal'
  },
  '重生逆袭': {
    artStyle: '写实漫画',
    colorTone: '高对比鲜艳',
    lightingStyle: '高光打亮',
    cameraStyle: '快节奏剪辑',
    mood: '爽快逆袭',
    customPrompt: '重生题材, 逆袭风格, 表情夸张, 戏剧张力, 对比强烈, 高光时刻, 情绪饱满',
    negativePrompt: '平淡无奇, 暗沉色调',
    aspectRatio: '9:16',
    videoFrameRate: '30',
    motionIntensity: 'dynamic'
  },
  '玄幻修仙': {
    artStyle: '东方玄幻',
    colorTone: '金紫神秘色调',
    lightingStyle: '炫光特效',
    cameraStyle: '史诗级镜头',
    mood: '热血震撼',
    customPrompt: '玄幻修仙, 法阵符文, 金光闪耀, 灵气外溢, 飞剑法宝, 气势磅礴, 仙山福地',
    negativePrompt: '现代科技, 西方魔法, 低质量',
    aspectRatio: '9:16',
    videoFrameRate: '24',
    motionIntensity: 'dynamic'
  },
  '战神归来': {
    artStyle: '硬派写实',
    colorTone: '冷酷金属色调',
    lightingStyle: '硬朗光线',
    cameraStyle: '动作电影镜头',
    mood: '热血战斗',
    customPrompt: '战神题材, 硬汉风格, 军事元素, 肌肉线条, 冷峻表情, 战斗场景, 爆炸特效',
    negativePrompt: '软萌可爱, 女性化',
    aspectRatio: '9:16',
    videoFrameRate: '30',
    motionIntensity: 'dynamic'
  },
  '宫斗权谋': {
    artStyle: '古典华丽',
    colorTone: '宫廷富贵色调',
    lightingStyle: '烛光暖调',
    cameraStyle: '宫廷剧镜头',
    mood: '明争暗斗',
    customPrompt: '古代宫廷, 华丽服饰, 雕梁画栋, 勾心斗角, 美人如玉, 权谋深沉, 宫墙深院',
    negativePrompt: '现代元素, 简约风格',
    aspectRatio: '9:16',
    videoFrameRate: '24',
    motionIntensity: 'subtle'
  },
  '末世求生': {
    artStyle: '废土风格',
    colorTone: '灰暗荒凉色调',
    lightingStyle: '昏暗末日光',
    cameraStyle: '手持晃动镜头',
    mood: '紧张求生',
    customPrompt: '末世废土, 丧尸危机, 荒凉城市, 破败建筑, 求生装备, 紧张氛围, 危机四伏',
    negativePrompt: '明亮温馨, 可爱风格',
    aspectRatio: '16:9',
    videoFrameRate: '30',
    motionIntensity: 'dynamic'
  },
  '校园青春': {
    artStyle: '清新漫画',
    colorTone: '明亮清新色调',
    lightingStyle: '阳光明媚',
    cameraStyle: '青春活力镜头',
    mood: '青涩甜蜜',
    customPrompt: '校园青春, 阳光少年少女, 教室走廊, 樱花飘落, 制服穿搭, 纯真美好, 青春洋溢',
    negativePrompt: '暗黑成人内容, 暴力元素',
    aspectRatio: '9:16',
    videoFrameRate: '30',
    motionIntensity: 'normal'
  },
  '国风唯美': {
    artStyle: '国画工笔',
    colorTone: '水墨淡彩',
    lightingStyle: '中式柔光',
    cameraStyle: '诗意镜头',
    mood: '典雅诗意',
    customPrompt: '中国风, 工笔画风格, 汉服古装, 亭台楼阁, 山水意境, 梅兰竹菊, 诗情画意, 雅致唯美',
    negativePrompt: '西式风格, 现代元素, 粗糙线条',
    aspectRatio: '9:16',
    videoFrameRate: '24',
    motionIntensity: 'subtle'
  }
};

/**
 * 🆕 默认负面提示词模板（统一中文）
 */
export const DEFAULT_NEGATIVE_PROMPT =
  '变形, 扭曲, 比例失调, 画工粗糙, 人体结构错误, ' +
  '多余肢体, 缺失肢体, 悬浮肢体, 断裂肢体, 畸变, 变异, ' +
  '丑陋, 恶心, 模糊, 截肢, 多余手指, 缺失手指, ' +
  '手部畸形, 三只手, 手指过多, 手指粘连, ' +
  '低分辨率, 质量差, 最差质量, 压缩失真, 水印, ' +
  '文字, 签名, 用户名, 画面裁切, 画面外内容';

/**
 * 🆕 生成负面提示词
 */
export function generateNegativePrompt(
  directorStyle?: DirectorStyle
): string {
  if (directorStyle?.negativePrompt) {
    return directorStyle.negativePrompt;
  }
  return DEFAULT_NEGATIVE_PROMPT;
}

/**
 * 🆕 生成角色定义词（用于导出）
 */
export function generateCharacterDefinition(character: Character): string {
  const parts: string[] = [];

  // 触发词
  if (character.triggerWord) {
    parts.push(`[Trigger Word] ${character.triggerWord}`);
  }

  // 名字
  parts.push(`[Name] ${character.name}`);

  // 标准化外貌
  if (character.standardAppearance) {
    parts.push(`[Appearance] ${character.standardAppearance}`);
  } else if (character.appearance) {
    parts.push(`[Appearance] ${character.appearance}`);
  }

  // 性格（可选）
  if (character.personality) {
    parts.push(`[Personality] ${character.personality}`);
  }

  return parts.join('\n');
}

/**
 * 🆕 批量导出所有角色定义词
 */
export function exportAllCharacterDefinitions(characters: Character[]): string {
  return characters.map(char => {
    return `=== ${char.name} ===\n${generateCharacterDefinition(char)}`;
  }).join('\n\n');
}

/**
 * 🆕 导出目标平台类型
 */
export type ExportPlatform = 'generic' | 'midjourney' | 'comfyui' | 'runway' | 'pika';

/**
 * 🆕 平台特定参数
 */
const PLATFORM_PARAMS: Record<ExportPlatform, { suffix: string; format: string }> = {
  generic: { suffix: '', format: 'standard' },
  midjourney: { suffix: ' --ar 16:9 --style raw --v 6.1', format: 'midjourney' },
  comfyui: { suffix: '', format: 'comfyui_json' },
  runway: { suffix: ', high quality video, smooth motion', format: 'runway' },
  pika: { suffix: ', cinematic, detailed motion', format: 'pika' }
};

/**
 * 🆕 生成分镜提示词包（单个分镜）
 */
export function generatePanelPromptPack(
  panel: StoryboardPanel,
  characters: Character[],
  scenes: Scene[],
  directorStyle?: DirectorStyle,
  platform: ExportPlatform = 'generic'
): {
  imagePrompt: string;
  videoPrompt: string;
  negativePrompt: string;
  characterRefs: string[];
  metadata: {
    panelNumber: number;
    duration: number;
    transition: string;
    platform: string;
  };
} {
  const platformConfig = PLATFORM_PARAMS[platform];

  // 生成提示词
  let imagePrompt = generateStoryboardImagePrompt(panel, characters, scenes, directorStyle);
  let videoPrompt = generateStoryboardVideoPrompt(panel, characters, scenes, directorStyle);

  // 添加平台特定参数
  if (platform === 'midjourney') {
    imagePrompt += platformConfig.suffix;
  } else if (platform === 'runway' || platform === 'pika') {
    videoPrompt += platformConfig.suffix;
  }

  // 收集相关角色定义
  const charRefs = panel.characters
    .map(name => characters.find(c => c.name === name))
    .filter((c): c is Character => c !== undefined)
    .map(c => generateCharacterDefinition(c));

  return {
    imagePrompt,
    videoPrompt,
    negativePrompt: generateNegativePrompt(directorStyle),
    characterRefs: charRefs,
    metadata: {
      panelNumber: panel.panelNumber,
      duration: panel.duration || 3,
      transition: panel.transition || '切至',
      platform: platform
    }
  };
}

/**
 * 🆕 批量导出所有分镜提示词包
 */
export function exportAllPanelPrompts(
  panels: StoryboardPanel[],
  characters: Character[],
  scenes: Scene[],
  directorStyle?: DirectorStyle,
  platform: ExportPlatform = 'generic'
): string {
  const output: string[] = [];

  // 添加头部信息
  output.push(`# 分镜提示词导出`);
  output.push(`# 平台: ${platform}`);
  output.push(`# 导出时间: ${new Date().toISOString()}`);
  output.push(`# 总分镜数: ${panels.length}`);
  output.push('');

  // 导出负面提示词（通用）
  output.push('## 负面提示词 (Negative Prompt)');
  output.push(generateNegativePrompt(directorStyle));
  output.push('');

  // 导出角色定义
  output.push('## 角色定义 (Character Definitions)');
  output.push(exportAllCharacterDefinitions(characters));
  output.push('');

  // 导出每个分镜
  output.push('## 分镜提示词');
  panels.forEach((panel, index) => {
    const pack = generatePanelPromptPack(panel, characters, scenes, directorStyle, platform);

    output.push(`\n### 分镜 ${index + 1} (${pack.metadata.duration}秒)`);
    output.push(`**AI绘画提示词:**`);
    output.push(pack.imagePrompt);
    output.push('');
    output.push(`**AI视频提示词:**`);
    output.push(pack.videoPrompt);
    output.push('');
    if (pack.metadata.transition !== '切至') {
      output.push(`**转场:** ${pack.metadata.transition}`);
    }
    output.push('---');
  });

  return output.join('\n');
}
