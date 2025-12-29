/**
 * 分镜密度配置
 * 统一 AI 提示词、Fallback 逻辑和 UI 预估的拆分规则
 */

export interface DensityConfig {
    /** 每场景基础分镜数（建立镜头等） */
    basePerScene: number;
    /** 每句对话产生的分镜数（包括可能的反应镜头） */
    panelsPerDialogue: number;
    /** 每 N 字动作描写产生 1 个分镜 */
    actionCharsPerPanel: number;
    /** 每场景最小分镜数 */
    minPerScene: number;
    /** 每场景最大分镜数 */
    maxPerScene: number;
    /** 长对话拆分阈值（超过此字数自动拆分） */
    longDialogueThreshold: number;
    /** 是否为多人对话添加反应镜头 */
    addReactionShots: boolean;
    /** UI 预估乘数（用于显示范围） */
    estimateMultiplier: number;
    /** AI 提示词描述 */
    promptDescription: string;
}

export type DensityMode = 'compact' | 'standard' | 'detailed';

/**
 * 分镜密度配置常量
 */
export const DENSITY_CONFIG: Record<DensityMode, DensityConfig> = {
    compact: {
        basePerScene: 0.8,  // 🆕 进一步降低
        panelsPerDialogue: 0.4,
        actionCharsPerPanel: 400,  // 每400字1镜
        minPerScene: 1,
        maxPerScene: 3,
        longDialogueThreshold: 150,
        addReactionShots: false,
        estimateMultiplier: 0.6,
        promptDescription: '分镜密度：精简模式。每个场景生成约 1-2 个核心分镜。'
    },
    standard: {
        basePerScene: 0.7,  // 🆕 降低：AI 约每场景1.5镜
        panelsPerDialogue: 0.6,  // 🆕 降低
        actionCharsPerPanel: 200,  // 🆕 增大：每200字1镜
        minPerScene: 1,
        maxPerScene: 5,
        longDialogueThreshold: 100,
        addReactionShots: false,
        estimateMultiplier: 1,
        promptDescription: '分镜密度：标准模式。每个场景生成约 1-3 个分镜。'
    },
    detailed: {
        basePerScene: 1.5,  // 🆕 降低
        panelsPerDialogue: 1.0,
        actionCharsPerPanel: 100,
        minPerScene: 3,
        maxPerScene: 8,
        longDialogueThreshold: 80,
        addReactionShots: true,
        estimateMultiplier: 1.4,
        promptDescription: '分镜密度：详细模式。每个场景生成约 3-6 个分镜。'
    }
};

/**
 * 计算场景预估分镜数量
 */
export function estimatePanelCount(
    dialogueCount: number,
    actionLength: number,
    characterCount: number,
    mode: DensityMode
): { min: number; max: number } {
    const config = DENSITY_CONFIG[mode];

    // 基础分镜
    let baseCount = config.basePerScene;

    // 对话分镜
    const dialoguePanels = dialogueCount * config.panelsPerDialogue;

    // 动作分镜
    const actionPanels = Math.ceil(actionLength / config.actionCharsPerPanel);

    // 多人场景反应镜头加成
    const reactionBonus = (config.addReactionShots && characterCount >= 2 && dialogueCount >= 2)
        ? Math.floor(dialogueCount * 0.3)  // 30% 的对话有反应镜头
        : 0;

    const total = baseCount + dialoguePanels + actionPanels + reactionBonus;

    // 🆕 修复：确保 min <= max
    const rawMin = Math.floor(total * 0.8);
    const rawMax = Math.ceil(total * 1.2);

    // 应用场景约束，但确保 min <= max
    const constrainedMin = Math.max(config.minPerScene, rawMin);
    const constrainedMax = Math.max(constrainedMin, Math.min(config.maxPerScene, rawMax));

    return {
        min: constrainedMin,
        max: constrainedMax
    };
}

/**
 * 拆分长对话
 * @param dialogue 原始对白
 * @param threshold 拆分阈值（字数）
 * @returns 拆分后的对白数组
 */
export function splitLongDialogue(dialogue: string, threshold: number = 100): string[] {
    if (!dialogue || dialogue.length <= threshold) {
        return [dialogue];
    }

    const chunks: string[] = [];
    // 按句子拆分（句号、问号、感叹号、省略号）
    const sentences = dialogue.split(/([。！？!?…]+)/);
    let current = '';

    for (let i = 0; i < sentences.length; i++) {
        const part = sentences[i];
        if ((current + part).length <= threshold) {
            current += part;
        } else {
            if (current.trim()) chunks.push(current.trim());
            current = part;
        }
    }
    if (current.trim()) chunks.push(current.trim());

    return chunks.filter(c => c.length > 0);
}

/**
 * 检测是否为"边说边做"场景
 * 通过检测对话中的动作描写词
 */
export function detectSpeakingWithAction(dialogue: string, action: string): boolean {
    const actionKeywords = ['边说边', '一边', '说着', '同时', '随即', '顺手', '转身说', '走向'];
    const fullText = `${dialogue} ${action}`;
    return actionKeywords.some(kw => fullText.includes(kw));
}
