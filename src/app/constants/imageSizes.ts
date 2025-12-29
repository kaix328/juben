// 图片尺寸配置
// 所有尺寸必须满足 API 最小要求: 3,686,400 像素

export const IMAGE_SIZES = {
    // 角色图片
    CHARACTER_FULL_BODY: "1920x1920",  // 1:1 正方形 (3,686,400 像素) ✓ 改用正方形避免边界问题
    CHARACTER_FACE: "1920x1920",       // 1:1 正方形 (3,686,400 像素) ✓

    // 场景图片
    SCENE_WIDE: "2560x1440",           // 16:9 横图 (3,686,400 像素) ✓
    SCENE_MEDIUM: "1920x1920",         // 1:1 正方形 (3,686,400 像素) ✓
    SCENE_CLOSEUP: "1920x1920",        // 1:1 正方形 (3,686,400 像素) ✓

    // 道具和服饰
    PROP: "1920x1920",                 // 1:1 正方形 (3,686,400 像素) ✓
    COSTUME: "1600x2304",              // 接近 3:4 竖图 (3,686,400 像素) ✓

    // 分镜图片（🆕 多尺寸支持）
    STORYBOARD: "2560x1440",           // 16:9 横图 (3,686,400 像素) ✓ 默认
    STORYBOARD_16_9: "2560x1440",      // 16:9 横屏电影
    STORYBOARD_9_16: "1440x2560",      // 9:16 竖屏手机
    STORYBOARD_1_1: "1920x1920",       // 1:1 方形社交
    STORYBOARD_4_3: "2080x1560",       // 4:3 经典比例
    STORYBOARD_21_9: "2940x1260",      // 21:9 超宽电影
} as const;

export type ImageSizeKey = keyof typeof IMAGE_SIZES;

// 🆕 分镜图片尺寸选项（供UI选择）
export const STORYBOARD_SIZE_OPTIONS = [
    { value: 'STORYBOARD_16_9', label: '16:9 横屏', desc: '电影/视频' },
    { value: 'STORYBOARD_9_16', label: '9:16 竖屏', desc: '手机/短视频' },
    { value: 'STORYBOARD_1_1', label: '1:1 方形', desc: '社交媒体' },
    { value: 'STORYBOARD_4_3', label: '4:3 经典', desc: '传统比例' },
    { value: 'STORYBOARD_21_9', label: '21:9 超宽', desc: '电影院' },
] as const;
