// 项目类型定义
export interface Project {
  id: string;
  title: string;
  cover: string;
  description: string;
  directorStyle?: DirectorStyle;
  createdAt: string;
  updatedAt: string;
  stats?: ProjectStats; // 项目统计
}

// 项目统计
export interface ProjectStats {
  totalChapters: number;
  totalScenes: number;
  totalPanels: number;
  totalDuration: number; // 总时长（秒）
  charactersCount: number;
  scenesCount: number;
  propsCount: number;
  completionRate: number; // 完成度（0-100）
}

// 导演风格
export interface DirectorStyle {
  artStyle: string; // 艺术风格：写实、赛博朋克、水彩、油画等
  colorTone: string; // 色调：暖色调、冷色调、黑白、高饱和度等
  lightingStyle: string; // 光照风格：自然光、戏剧性光影、柔和光线等
  cameraStyle: string; // 镜头风格：电影感、纪实风格、梦幻风格等
  mood: string; // 情绪氛围：温馨、紧张、神秘、欢快等
  customPrompt: string; // 自定义提示词
  // 🆕 一致性相关
  negativePrompt?: string; // 负面提示词（避免变形、多手指等）
  // 🆕 画面比例
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | '21:9'; // 画面比例
  // 🆕 视频专属选项
  videoFrameRate?: '24' | '30' | '60'; // 帧率
  motionIntensity?: 'subtle' | 'normal' | 'dynamic'; // 运动强度
}

// 风格应用设置
export interface StyleApplicationSettings {
  mode: 'auto' | 'manual'; // 应用模式：自动/手动
  autoApplyToNew: boolean; // 新建资源时自动应用导演风格
  protectManualEdits: boolean; // 保护手动编辑过的提示词
  confirmBeforeApply: boolean; // 批量应用前显示确认对话框
  showPreview: boolean; // 应用前显示预览对比
}

// 章节类型
export interface Chapter {
  id: string;
  projectId: string;
  title: string;
  orderIndex: number;
  originalText: string;
  createdAt: string;
}

// 剧本元数据（专业版）
export interface ScriptMetadata {
  title: string;                    // 剧本标题
  author?: string;                  // 编剧
  draft?: string;                   // 稿号（初稿/修改稿/定稿）
  draftDate?: string;               // 日期
  contact?: string;                 // 联系方式
  copyright?: string;               // 版权信息
  logline?: string;                 // 一句话故事摘要
  genre?: string;                   // 类型（动作/喜剧/爱情等）
  format?: 'FEATURE' | 'TV' | 'SHORT' | 'WEB'; // 剧本格式
}

// 剧本统计（专业版）
export interface ScriptStatistics {
  pageCount: number;                // 总页数（1页≈1分钟）
  estimatedRuntime: string;         // 预计时长（HH:MM）
  sceneCount: number;               // 场景数
  dialogueWordCount: number;        // 对白总字数
  actionWordCount: number;          // 动作描述总字数
  dialoguePercentage: number;       // 对白占比 (0-100)
  topCharacters: { name: string; lineCount: number; wordCount: number }[];
  locationBreakdown: { location: string; count: number }[];
  intExtRatio: { int: number; ext: number };
}

// 剧本类型
export interface Script {
  id: string;
  chapterId: string;
  content: string;
  scenes: ScriptScene[];
  updatedAt: string;
  // 新增专业字段
  metadata?: ScriptMetadata;        // 剧本元数据
  statistics?: ScriptStatistics;    // 剧本统计
  mode?: 'movie' | 'tv_drama' | 'short_video' | 'web_series'; // 剧本模式
}

// 剧本场景
export interface ScriptScene {
  id: string;
  sceneNumber: number;
  episodeNumber: number; // 集数
  location: string;
  timeOfDay: string;
  sceneType: 'INT' | 'EXT'; // 内景/外景
  characters: string[];
  action: string; // 动作描述
  dialogues: Dialogue[]; // 对话列表
  transition?: string; // 转场，如"切至"、"淡出"等
  estimatedDuration?: number; // 预估时长（秒）
  // 新增专业字段
  slugline?: string;           // 自定义场景行（覆盖自动生成）
  subLocation?: string;        // 子场景（如：办公室 - 会议室）
  continuity?: 'CONTINUOUS' | 'LATER' | 'MOMENTS LATER' | 'SAME'; // 时间连续性
  dayNightNumber?: number;     // 日/夜序号（DAY 1, NIGHT 3）
  specialSceneType?: 'FLASHBACK' | 'DREAM' | 'FANTASY' | 'MONTAGE' | 'INSERT' | 'INTERCUT'; // 特殊场景类型
  pageStart?: number;          // 起始页码
  pageEnd?: number;            // 结束页码
  beat?: string;               // 节拍标记/情绪转折点
  notes?: string;              // 编剧备注
}

// 对话扩展类型
export type DialogueExtension = 'V.O.' | 'O.S.' | 'O.C.' | 'CONT\'D' | 'PRE-LAP' | 'FILTER' | 'SUBTITLE';

// 对话
export interface Dialogue {
  id: string;
  character: string; // 角色名
  parenthetical?: string; // 括号指示（对话方式）
  lines: string; // 台词内容
  // 新增专业字段
  extension?: DialogueExtension;   // 扩展标记（V.O.画外音/O.S.场外音等）
  isFirstAppearance?: boolean;     // 角色首次出场（需大写处理）
  dual?: 'LEFT' | 'RIGHT';         // 双人对白位置
  isContinued?: boolean;           // 是否为延续对白 (CONT'D)
}

// 专业景别类型
export type ShotSize =
  | 'ECU'    // 大特写 (Extreme Close Up) - 眼睛、嘴唇等局部
  | 'CU'     // 特写 (Close Up) - 面部
  | 'MCU'    // 中近景 (Medium Close Up) - 头肩
  | 'MS'     // 中景 (Medium Shot) - 腰部以上
  | 'MWS'    // 中全景 (Medium Wide Shot) - 膝盖以上
  | 'WS'     // 全景 (Wide Shot) - 全身
  | 'EWS'    // 远景 (Extreme Wide Shot) - 环境建立
  | 'POV'    // 主观镜头 (Point of View)
  | 'OTS'    // 过肩镜头 (Over The Shoulder)
  | 'TWO'    // 双人镜头 (Two Shot)
  | 'GROUP'  // 群戏镜头 (Group Shot)
  | 'INSERT' // 插入镜头 (Insert Shot)
  | 'AERIAL' // 航拍镜头
  | 'CUSTOM';// 自定义

// 专业镜头运动类型
export type CameraMovementType =
  | 'STATIC'    // 静止
  | 'PAN_L'     // 左横摇
  | 'PAN_R'     // 右横摇
  | 'TILT_UP'   // 上纵摇
  | 'TILT_DOWN' // 下纵摇
  | 'DOLLY_IN'  // 推镜头
  | 'DOLLY_OUT' // 拉镜头
  | 'TRACK_L'   // 左跟踪
  | 'TRACK_R'   // 右跟踪
  | 'CRANE_UP'  // 升
  | 'CRANE_DOWN'// 降
  | 'ZOOM_IN'   // 变焦推
  | 'ZOOM_OUT'  // 变焦拉
  | 'HANDHELD'  // 手持
  | 'STEADICAM' // 斯坦尼康
  | 'DUTCH'     // 荷兰角
  | 'WHIP'      // 甩镜头
  | 'ARC'       // 弧形运动
  | 'FOLLOW'    // 跟随
  | 'CUSTOM';   // 自定义

// 景深类型
export type DepthOfFieldType = 'SHALLOW' | 'DEEP' | 'SELECTIVE' | 'NORMAL';

// 镜头角度类型
export type CameraAngleType =
  | 'EYE_LEVEL'   // 平视
  | 'HIGH'        // 俯视
  | 'LOW'         // 仰视
  | 'BIRDS_EYE'   // 鸟瞰
  | 'WORMS_EYE'   // 蚁视
  | 'DUTCH'       // 倾斜
  | 'CUSTOM';     // 自定义

// 灯光设计
export interface LightingDesign {
  keyLight?: string;     // 主光描述
  fillLight?: string;    // 补光描述
  backLight?: string;    // 背光描述
  mood?: string;         // 光影氛围（如：高调/低调/自然光）
  practicalLights?: string[]; // 实景光源（如：台灯、窗光）
}

// 动作提示
export interface ActionCue {
  startAction?: string;  // 起始动作
  endAction?: string;    // 结束动作
  timing?: string;       // 动作节拍
  direction?: string;    // 动作方向
}

// 分镜类型
export interface Storyboard {
  id: string;
  chapterId: string;
  panels: StoryboardPanel[];
  updatedAt: string;
  // 新增专业字段
  aspectRatio?: '16:9' | '2.39:1' | '4:3' | '1:1' | '9:16'; // 项目画幅比例
  targetPlatform?: 'cinema' | 'tv' | 'web' | 'mobile'; // 目标平台
}

// 分镜面板（专业版）
export interface StoryboardPanel {
  id: string;
  panelNumber: number;
  sceneId: string;
  description: string;
  dialogue?: string; // 对白内容
  shot: string; // 景别（兼容旧数据的字符串格式）
  angle: string; // 镜头角度
  cameraMovement?: string; // 镜头运动
  duration?: number; // 时长（秒）
  characters: string[];
  props: string[];
  notes: string;
  aiPrompt?: string; // AI绘画提示词
  aiVideoPrompt?: string; // AI视频提示词
  generatedImage?: string; // AI生成的图片URL
  isGenerating?: boolean; // 是否正在生成
  transition?: string; // 转场效果
  soundEffects?: string[]; // 音效列表
  music?: string; // 背景音乐
  keyFrames?: string[]; // 关键帧标记

  // 新增专业字段
  episodeNumber?: number;           // 所属集数
  shotSize?: ShotSize;              // 专业景别代码
  cameraAngle?: CameraAngleType;    // 专业角度代码
  movementType?: CameraMovementType;// 专业运动类型
  lens?: string;                    // 镜头焦距（如：50mm, 24mm）
  fStop?: string;                   // 光圈值（如：f/2.8）
  lighting?: LightingDesign;        // 灯光设计
  composition?: string;             // 构图描述（三分法、对称等）
  focusPoint?: string;              // 焦点位置
  depthOfField?: DepthOfFieldType;  // 景深
  actionCue?: ActionCue;            // 动作提示
  vfx?: string[];                   // 视觉特效列表
  colorGrade?: string;              // 调色参考
  referenceImage?: string;          // 参考图片URL
  shotIntent?: string;              // 镜头意图/情绪目标
  setupShot?: string;               // A/B机位标记
  axisNote?: string;                // 轴线备注

  // 🆕 视频提示词增强字段
  startFrame?: string;              // 起始帧描述（如：角色站立，面向镜头）
  endFrame?: string;                // 结束帧描述（如：角色转身离开）
  motionSpeed?: 'slow' | 'normal' | 'fast' | 'timelapse'; // 运动速度
  environmentMotion?: string;       // 环境动态描述（如：风吹树叶）
  characterActions?: string[];      // 角色动作列表（如：["张三:转身", "李四:挥手"]）
  aspectRatio?: '16:9' | '9:16' | '1:1' | '4:3' | '21:9'; // 🆕 视频宽高比
}

// 项目资源库类型
export interface AssetLibrary {
  projectId: string;
  characters: Character[];
  scenes: Scene[];
  props: Prop[];
  costumes: Costume[];
}

// 角色
export interface Character {
  id: string;
  name: string;
  description: string;
  appearance: string;
  personality: string;
  avatar: string;
  // 全身正视图
  fullBodyPrompt?: string; // AI绘画提示词 - 全身正视图
  fullBodyPreview?: string; // 全身图预览URL
  isGeneratingFullBody?: boolean; // 是否正在生成全身图
  // 脸部正视图
  facePrompt?: string; // AI绘画提示词 - 脸部正视图
  facePreview?: string; // 脸部图预览URL
  isGeneratingFace?: boolean; // 是否正在生成脸部图
  // 保留旧字段以兼容
  aiPrompt?: string; // 废弃，保留以兼容旧数据
  // 新增字段
  tags?: string[]; // 标签
  createdAt?: string; // 创建时间
  usageCount?: number; // 使用次数（在分镜中的引用）

  // 🆕 角色一致性相关字段
  triggerWord?: string; // 角色触发词（如：char_zhangsan_001）
  standardAppearance?: string; // 标准化外貌描述（结构化格式）
}

// 场景
export interface Scene {
  id: string;
  name: string;
  description: string;
  location: string;
  environment: string;
  image: string;
  aiPrompt?: string; // AI绘画提示词（保留以兼容）
  // 远景
  widePrompt?: string; // AI绘画提示词 - 远景
  widePreview?: string; // 远景图预览URL
  isGeneratingWide?: boolean; // 是否正在生成远景图
  // 中景
  mediumPrompt?: string; // AI绘画提示词 - 中景
  mediumPreview?: string; // 中景图预览URL
  isGeneratingMedium?: boolean; // 是否正在生成中景图
  // 特写
  closeupPrompt?: string; // AI绘画提示词 - 特写
  closeupPreview?: string; // 特写图预览URL
  isGeneratingCloseup?: boolean; // 是否正在生成特写图
  // 新增字段
  tags?: string[]; // 标签：室内/室外、现代/古代等
  timeOfDay?: 'day' | 'night' | 'dawn' | 'dusk'; // 时间段
  weather?: string; // 天气
  createdAt?: string; // 创建时间
  usageCount?: number; // 使用次数
}

// 道具
export interface Prop {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  aiPrompt?: string; // AI绘画提示词
  preview?: string; // 图片预览URL
  isGenerating?: boolean; // 是否正在生成
  tags?: string[]; // 标签
  createdAt?: string; // 创建时间
  usageCount?: number; // 使用次数
}

// 服饰
export interface Costume {
  id: string;
  characterId: string;
  name: string;
  description: string;
  style: string;
  image: string;
  aiPrompt?: string; // AI绘画提示词
  preview?: string; // 图片预览URL
  isGenerating?: boolean; // 是否正在生成
  tags?: string[]; // 标签
  createdAt?: string; // 创建时间
  usageCount?: number; // 使用次数
}

// 分镜模板
export interface StoryboardTemplate {
  id: string;
  name: string;
  description: string;
  category: '对话' | '动作' | '追逐' | '战斗' | '转场' | '其他';
  panels: Omit<StoryboardPanel, 'id' | 'panelNumber' | 'sceneId' | 'generatedImage' | 'isGenerating'>[];
  previewImage?: string;
  usageCount: number;
}

// 项目版本
export interface ProjectVersion {
  id: string;
  projectId: string;
  versionNumber: number;
  description: string;
  timestamp: string;
  data: {
    chapters: Chapter[];
    scripts: Script[];
    storyboards: Storyboard[];
    assetLibrary: AssetLibrary;
  };
}

// 角色关系
export interface CharacterRelation {
  id: string;
  projectId: string;
  fromCharacterId: string;
  toCharacterId: string;
  relationType: '主角' | '配角' | '反派' | '朋友' | '敌人' | '家人' | '恋人' | '师徒' | '其他';
  description: string;
}