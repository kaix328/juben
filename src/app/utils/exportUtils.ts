import type { Project, Chapter, Script, Storyboard, AssetLibrary, Character } from '../types';

/**
 * 导出为JSON文件
 */
export function downloadJSON(data: any, filename: string): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 导出分镜脚本为文本格式（简化版，完整版需要PDF库）
 */
export function exportStoryboardScript(
  project: Project,
  chapter: Chapter,
  script: Script,
  storyboard: Storyboard,
  assets: AssetLibrary
): string {
  let output = '';

  // 标题信息
  output += `======================================\n`;
  output += `项目：${project.title}\n`;
  output += `章节：${chapter.title}\n`;
  output += `导出时间：${new Date().toLocaleString('zh-CN')}\n`;
  output += `======================================\n\n`;

  // 导演风格
  if (project.directorStyle) {
    output += `【导演风格】\n`;
    output += `艺术风格：${project.directorStyle.artStyle}\n`;
    output += `色调：${project.directorStyle.colorTone}\n`;
    output += `光照风格：${project.directorStyle.lightingStyle}\n`;
    output += `镜头风格：${project.directorStyle.cameraStyle}\n`;
    output += `情绪氛围：${project.directorStyle.mood}\n`;
    if (project.directorStyle.customPrompt) {
      output += `自定义提示：${project.directorStyle.customPrompt}\n`;
    }
    output += `\n`;
  }

  // 角色列表
  if (assets.characters.length > 0) {
    output += `【角色列表】\n`;
    assets.characters.forEach((char, index) => {
      output += `${index + 1}. ${char.name}\n`;
      output += `   外貌：${char.appearance}\n`;
      output += `   性格：${char.personality}\n`;
    });
    output += `\n`;
  }

  // 分镜详情
  output += `【分镜脚本】\n`;
  output += `总分镜数：${storyboard.panels.length}\n`;
  output += `总时长：${Math.floor(storyboard.panels.reduce((sum, p) => sum + (p.duration || 0), 0) / 60)}分${storyboard.panels.reduce((sum, p) => sum + (p.duration || 0), 0) % 60}秒\n\n`;

  storyboard.panels.forEach((panel, index) => {
    output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    output += `分镜 #${panel.panelNumber}\n`;
    output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;

    // 摄影参数
    output += `【摄影参数】\n`;
    output += `景别：${panel.shot}\n`;
    output += `角度：${panel.angle}\n`;
    output += `运动：${panel.cameraMovement || '静止'}\n`;
    output += `时长：${panel.duration || 3}秒\n\n`;

    // 画面描述
    output += `【画面描述】\n`;
    output += `${panel.description}\n\n`;

    // 角色和道具
    if (panel.characters.length > 0) {
      output += `【角色】${panel.characters.join('、')}\n`;
    }
    if (panel.props.length > 0) {
      output += `【道具】${panel.props.join('、')}\n`;
    }
    output += `\n`;

    // 备注
    if (panel.notes) {
      output += `【导演备注】\n`;
      output += `${panel.notes}\n\n`;
    }

    // AI提示词
    if (panel.aiPrompt) {
      output += `【AI绘画提示词】\n`;
      output += `${panel.aiPrompt}\n\n`;
    }

    if (panel.aiVideoPrompt) {
      output += `【AI视频提示词】\n`;
      output += `${panel.aiVideoPrompt}\n\n`;
    }

    output += `\n`;
  });

  return output;
}

/**
 * 导出所有AI提示词
 */
export function exportAllPrompts(
  project: Project,
  chapter: Chapter,
  storyboard: Storyboard
): string {
  let output = '';

  output += `======================================\n`;
  output += `AI提示词清单\n`;
  output += `项目：${project.title}\n`;
  output += `章节：${chapter.title}\n`;
  output += `======================================\n\n`;

  storyboard.panels.forEach((panel, index) => {
    output += `【分镜 ${panel.panelNumber}】\n`;

    if (panel.aiPrompt) {
      output += `绘画提示词：\n${panel.aiPrompt}\n\n`;
    }

    if (panel.aiVideoPrompt) {
      output += `视频提示词：\n${panel.aiVideoPrompt}\n\n`;
    }

    output += `---\n\n`;
  });

  return output;
}

/**
 * 导出角色设定集
 */
export function exportCharacterProfiles(
  project: Project,
  assets: AssetLibrary
): string {
  let output = '';

  output += `======================================\n`;
  output += `角色设定集\n`;
  output += `项目：${project.title}\n`;
  output += `导出时间：${new Date().toLocaleString('zh-CN')}\n`;
  output += `======================================\n\n`;

  assets.characters.forEach((char, index) => {
    output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    output += `角色 ${index + 1}：${char.name}\n`;
    output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    output += `【基本信息】\n`;
    output += `${char.description}\n\n`;

    output += `【外貌特征】\n`;
    output += `${char.appearance}\n\n`;

    output += `【性格特点】\n`;
    output += `${char.personality}\n\n`;

    if (char.aiPrompt) {
      output += `【AI绘画提示词】\n`;
      output += `${char.aiPrompt}\n\n`;
    }

    output += `\n`;
  });

  return output;
}

/**
 * 导出完整项目数据
 */
export function exportProjectData(
  project: Project,
  chapters: Chapter[],
  scripts: Script[],
  storyboards: Storyboard[],
  assets: AssetLibrary
): void {
  const projectData = {
    project,
    chapters,
    scripts,
    storyboards,
    assets,
    exportDate: new Date().toISOString(),
    version: '1.0'
  };

  downloadJSON(projectData, `${project.title}_完整数据_${new Date().getTime()}.json`);
}

/**
 * 导出文本文件
 */
export function downloadText(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 导出剧本为Markdown格式（专业版）
 */
export function exportScriptToMarkdown(chapter: Chapter, script: Script): string {
  let output = '';

  // 标题信息
  output += `# ${script.metadata?.title || chapter.title}\n\n`;

  // 元数据
  if (script.metadata) {
    output += `> **编剧**: ${script.metadata.author || '未署名'}  \n`;
    output += `> **稿号**: ${script.metadata.draft || '初稿'}  \n`;
    output += `> **日期**: ${script.metadata.draftDate || new Date().toLocaleDateString('zh-CN')}  \n`;
    if (script.metadata.logline) {
      output += `> **故事概要**: ${script.metadata.logline}  \n`;
    }
  } else {
    output += `> 导出时间：${new Date().toLocaleString('zh-CN')}\n`;
  }
  output += `\n---\n\n`;

  // 统计信息
  const totalScenes = script.scenes.length;
  const episodes = new Set(script.scenes.map(s => s.episodeNumber || 1));
  const totalDuration = script.scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;
  const totalDialogues = script.scenes.reduce((sum, s) => sum + s.dialogues.length, 0);

  output += `## 📊 统计信息\n\n`;
  output += `| 项目 | 数值 |\n`;
  output += `|------|------|\n`;
  output += `| 总场景数 | ${totalScenes} |\n`;
  output += `| 总集数 | ${episodes.size} |\n`;
  output += `| 总对白数 | ${totalDialogues} |\n`;
  output += `| 预计时长 | ${minutes}分${seconds}秒 |\n\n`;
  output += `---\n\n`;

  // 场景列表
  output += `## 📝 剧本内容\n\n`;

  script.scenes.forEach((scene, index) => {
    // 场景标题（支持特殊场景类型）
    let sceneHeader = `### 场景 ${scene.sceneNumber}`;
    if (scene.specialSceneType) {
      sceneHeader += ` [${scene.specialSceneType}]`;
    }
    output += `${sceneHeader}\n\n`;

    // 场景行（Slugline）
    let slugline = scene.slugline || `${scene.sceneType}. ${scene.location}`;
    if (scene.subLocation) {
      slugline += ` - ${scene.subLocation}`;
    }
    slugline += ` - ${scene.timeOfDay}`;
    if (scene.continuity) {
      slugline += ` (${scene.continuity})`;
    }
    output += `**${slugline}**\n\n`;

    // 场景元信息
    output += `- 集数：第${scene.episodeNumber}集\n`;
    output += `- 预估时长：${scene.estimatedDuration || 0}秒\n`;
    if (scene.characters.length > 0) {
      output += `- 出场角色：${scene.characters.join('、')}\n`;
    }
    if (scene.beat) {
      output += `- 🎭 **节拍**: ${scene.beat}\n`;
    }
    output += `\n`;

    // 动作描述
    if (scene.action) {
      output += `#### 动作描述\n\n`;
      output += `${scene.action}\n\n`;
    }

    // 对话（支持专业标记）
    if (scene.dialogues.length > 0) {
      output += `#### 对话\n\n`;
      scene.dialogues.forEach((dialogue) => {
        // 角色名（首次出场大写处理）
        let characterName = dialogue.character;
        if (dialogue.isFirstAppearance) {
          characterName = characterName.toUpperCase();
        }

        // 扩展标记（V.O./O.S. 等）
        let extension = '';
        if (dialogue.extension) {
          extension = ` (${dialogue.extension})`;
        } else if (dialogue.isContinued) {
          extension = ` (CONT'D)`;
        }

        output += `**${characterName}${extension}**`;
        if (dialogue.parenthetical) {
          output += ` *(${dialogue.parenthetical})*`;
        }
        output += `\n\n`;
        output += `> ${dialogue.lines}\n\n`;
      });
    }

    // 编剧备注
    if (scene.notes) {
      output += `> 💡 **编剧备注**: ${scene.notes}\n\n`;
    }

    // 转场
    if (scene.transition && index < script.scenes.length - 1) {
      output += `*${scene.transition}*\n\n`;
    }

    output += `---\n\n`;
  });

  output += `\n**剧终**\n`;

  return output;
}

/**
 * 导出剧本为纯文本格式（专业电影剧本格式）
 */
export function exportScriptToText(chapter: Chapter, script: Script): string {
  let output = '';
  const LINE_WIDTH = 60;

  // 居中函数
  const center = (text: string, width: number = LINE_WIDTH): string => {
    const padding = Math.max(0, Math.floor((width - text.length) / 2));
    return ' '.repeat(padding) + text;
  };

  // 右对齐函数
  const rightAlign = (text: string, width: number = LINE_WIDTH): string => {
    const padding = Math.max(0, width - text.length);
    return ' '.repeat(padding) + text;
  };

  // 标题页
  output += `\n\n\n`;
  output += center(script.metadata?.title || chapter.title) + '\n\n';
  output += center('剧本') + '\n\n\n';

  if (script.metadata) {
    if (script.metadata.author) {
      output += center(`编剧：${script.metadata.author}`) + '\n';
    }
    output += center(`${script.metadata.draft || '初稿'} - ${script.metadata.draftDate || new Date().toLocaleDateString('zh-CN')}`) + '\n';
  } else {
    output += center(`导出时间：${new Date().toLocaleString('zh-CN')}`) + '\n';
  }
  output += `\n\n\n\n`;

  // 统计信息
  const totalDuration = script.scenes.reduce((sum, s) => sum + (s.estimatedDuration || 0), 0);
  const minutes = Math.floor(totalDuration / 60);
  const seconds = totalDuration % 60;

  output += `统计信息：\n`;
  output += `总场景数：${script.scenes.length}  `;
  output += `总时长：${minutes}分${seconds}秒\n`;
  output += `\n\n`;
  output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  // 场景列表
  script.scenes.forEach((scene, index) => {
    // 场景标题（标准 Slugline 格式）
    let slugline = `${scene.sceneNumber}. ${scene.sceneType}. ${scene.location.toUpperCase()}`;
    if (scene.subLocation) {
      slugline += ` - ${scene.subLocation.toUpperCase()}`;
    }
    slugline += ` - ${scene.timeOfDay.toUpperCase()}`;
    if (scene.continuity) {
      slugline += ` (${scene.continuity})`;
    }

    // 特殊场景类型前缀
    if (scene.specialSceneType) {
      output += `${scene.specialSceneType}:\n`;
    }

    output += `${slugline}\n\n`;

    // 动作描述
    if (scene.action) {
      output += `${scene.action}\n\n`;
    }

    // 对话
    scene.dialogues.forEach((dialogue) => {
      // 角色名（居中，大写）
      let characterLine = dialogue.character.toUpperCase();

      // 首次出场强调
      if (dialogue.isFirstAppearance) {
        characterLine = characterLine; // 已经大写，无需额外处理
      }

      // 扩展标记（V.O./O.S. 等）
      if (dialogue.extension) {
        characterLine += ` (${dialogue.extension})`;
      } else if (dialogue.isContinued) {
        characterLine += ` (CONT'D)`;
      }

      output += center(characterLine) + '\n';

      // 括号指示
      if (dialogue.parenthetical) {
        const parenthetical = `(${dialogue.parenthetical})`;
        output += center(parenthetical) + '\n';
      }

      // 台词（缩进效果，模拟标准剧本格式）
      const DIALOGUE_MARGIN = 10;
      const lines = dialogue.lines.split('\n');
      lines.forEach(line => {
        if (line.trim()) {
          output += ' '.repeat(DIALOGUE_MARGIN) + line + '\n';
        }
      });
      output += `\n`;
    });

    // 转场（右对齐）
    if (scene.transition && index < script.scenes.length - 1) {
      const transition = `${scene.transition}：`;
      output += rightAlign(transition) + '\n\n';
    }

    output += `\n`;
  });
  // 结尾
  output += `\n\n` + center('剧终') + '\n';

  return output;
}

// ============ 🆕 导出功能增强 ============

/**
 * 视频提示词平台类型
 */
export type VideoPlatform = 'kling' | 'runway' | 'pika' | 'generic';

/**
 * 🆕 导出视频提示词（分平台格式）
 */
export function exportVideoPromptsByPlatform(
  panels: any[],
  platform: VideoPlatform,
  projectTitle: string = '未命名项目'
): string {
  let output = '';
  const timestamp = new Date().toLocaleString('zh-CN');
  const friendlyName = generateFriendlyFilename(projectTitle, platform);

  // 平台特定格式说明
  const platformGuide: Record<VideoPlatform, { header: string; format: (p: any) => string }> = {
    kling: {
      header: `# 可灵AI视频提示词\n# 项目: ${projectTitle}\n# 导出时间: ${timestamp}\n# 建议: 每条提示词150字以内，时长4-6秒最佳\n\n`,
      format: (p) => {
        // 可灵格式：简洁、关键词化
        const parts = [];
        if (p.shotSize) parts.push(p.shotSize);
        if (p.cameraMovement && p.cameraMovement !== '静止') parts.push(p.cameraMovement);
        if (p.description) parts.push(p.description.substring(0, 100));
        if (p.startFrame) parts.push(`从${p.startFrame}`);
        if (p.endFrame) parts.push(`到${p.endFrame}`);
        return parts.join('，');
      }
    },
    runway: {
      header: `# Runway Gen-3 视频提示词\n# 项目: ${projectTitle}\n# 导出时间: ${timestamp}\n# 建议: 使用英文效果更好，时长4-16秒\n\n`,
      format: (p) => {
        // Runway格式：更详细的描述
        const parts = [];
        if (p.description) parts.push(p.description);
        if (p.cameraMovement && p.cameraMovement !== '静止') parts.push(`camera: ${p.cameraMovement}`);
        if (p.motionSpeed) parts.push(`speed: ${p.motionSpeed}`);
        if (p.soundEffects?.length) parts.push(`atmosphere: ${p.soundEffects.slice(0, 2).join(', ')}`);
        return parts.join('. ');
      }
    },
    pika: {
      header: `# Pika Labs 视频提示词\n# 项目: ${projectTitle}\n# 导出时间: ${timestamp}\n# 建议: 3秒短视频，动作简洁\n\n`,
      format: (p) => {
        // Pika格式：简短动作描述
        const parts = [];
        if (p.description) parts.push(p.description.substring(0, 80));
        if (p.characterActions?.length) parts.push(p.characterActions[0]);
        return parts.join('，');
      }
    },
    generic: {
      header: `# 通用视频提示词\n# 项目: ${projectTitle}\n# 导出时间: ${timestamp}\n\n`,
      format: (p) => p.aiVideoPrompt || p.description || ''
    }
  };

  const { header, format } = platformGuide[platform];
  output += header;

  panels.forEach((panel, index) => {
    output += `--- 分镜 ${panel.panelNumber || index + 1} ---\n`;
    output += `时长: ${panel.duration || 4}秒\n`;
    output += `提示词:\n${format(panel)}\n\n`;
  });

  return output;
}

/**
 * 🆕 生成友好文件名
 */
export function generateFriendlyFilename(
  projectTitle: string,
  suffix: string,
  extension: string = 'txt'
): string {
  const date = new Date();
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const safeName = projectTitle.replace(/[<>:"/\\|?*]/g, '_').substring(0, 30);
  return `${safeName}_${suffix}_${dateStr}.${extension}`;
}

/**
 * 🆕 导出分镜为CSV格式（可用Excel打开）
 */
export function exportStoryboardToCSV(panels: any[], projectTitle: string = '未命名项目'): string {
  // CSV 头部
  const headers = [
    '分镜号', '集数', '场景', '景别', '角度', '运镜', '时长(秒)',
    '画面描述', '对白', '角色', '道具', '音效', '音乐',
    '镜头', '光圈', '景深', '起始帧', '结束帧', '备注',
    '图像提示词', '视频提示词'
  ];

  const rows = panels.map(p => [
    p.panelNumber || '',
    p.episodeNumber || 1,
    p.sceneId || '',
    p.shot || p.shotSize || '',
    p.angle || p.cameraAngle || '',
    p.cameraMovement || '',
    p.duration || 3,
    (p.description || '').replace(/"/g, '""'),
    (p.dialogue || '').replace(/"/g, '""'),
    (p.characters || []).join('、'),
    (p.props || []).join('、'),
    (p.soundEffects || []).join('、'),
    p.music || '',
    p.lens || '',
    p.fStop || '',
    p.depthOfField || '',
    (p.startFrame || '').replace(/"/g, '""'),
    (p.endFrame || '').replace(/"/g, '""'),
    (p.notes || '').replace(/"/g, '""'),
    (p.aiPrompt || '').replace(/"/g, '""'),
    (p.aiVideoPrompt || '').replace(/"/g, '""')
  ]);

  // 生成CSV内容（UTF-8 BOM for Excel兼容）
  const BOM = '\uFEFF';
  const csvContent = BOM + [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  return csvContent;
}

/**
 * 🆕 下载CSV文件
 */
export function downloadCSV(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 🆕 收集所有分镜图片URL（用于批量下载）
 */
export function collectPanelImages(panels: any[]): { panelNumber: number; imageUrl: string }[] {
  return panels
    .filter(p => p.previewImage && p.previewImage.startsWith('data:'))
    .map(p => ({
      panelNumber: p.panelNumber || 0,
      imageUrl: p.previewImage
    }));
}

/**
 * 🆕 批量下载图片（逐个触发下载）
 */
export async function downloadAllImages(
  images: { panelNumber: number; imageUrl: string }[],
  projectTitle: string,
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  const total = images.length;

  for (let i = 0; i < total; i++) {
    const { panelNumber, imageUrl } = images[i];
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = generateFriendlyFilename(projectTitle, `分镜${panelNumber}`, 'png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onProgress?.(i + 1, total);

    // 添加延迟避免浏览器阻止多次下载
    await new Promise(resolve => setTimeout(resolve, 300));
  }
}