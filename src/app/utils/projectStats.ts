import type { Project, ProjectStats, Chapter, Script, Storyboard, AssetLibrary } from '../types';
import { chapterStorage, scriptStorage, storyboardStorage, assetStorage } from './storage';

/**
 * 计算项目统计数据
 */
export async function calculateProjectStats(projectId: string): Promise<ProjectStats> {
  // 获取章节
  const chapters = await chapterStorage.getByProjectId(projectId);

  // 获取所有剧本和分镜
  let totalScenes = 0;
  let totalPanels = 0;
  let totalDuration = 0;
  let completedPanels = 0;

  // Parallel fetch is better, but sequential is safer for now.
  for (const chapter of chapters) {
    const script = await scriptStorage.getByChapterId(chapter.id);
    if (script) {
      totalScenes += script.scenes.length;
    }

    const storyboard = await storyboardStorage.getByChapterId(chapter.id);
    if (storyboard) {
      totalPanels += storyboard.panels.length;
      storyboard.panels.forEach(panel => {
        totalDuration += panel.duration || 0;
        if (panel.generatedImage) {
          completedPanels++;
        }
      });
    }
  }

  // 获取资源库
  const assets = (await assetStorage.getByProjectId(projectId)) || {
    projectId,
    characters: [],
    scenes: [],
    props: [],
    costumes: []
  };

  // 计算完成度
  // 完成度基于：章节原文、剧本场景、分镜、生成的图片
  let completionPoints = 0;
  let totalPoints = 0;

  // 章节原文（25%）
  totalPoints += chapters.length * 25;
  const chaptersWithText = chapters.filter(c => c.originalText && c.originalText.trim().length > 0);
  completionPoints += chaptersWithText.length * 25;

  // 剧本场景（25%）
  totalPoints += chapters.length * 25;
  // We need to re-check scripts, but we iterate above.
  // Optimization: calculate counts above.
  // But logic here is per chapter.
  // Let's refactor slightly to avoid re-fetching.
  // Actually, we can just do a loop again, or optimize later. 
  // Given user wants it working, let's just do loop again or optimize.
  // I will just use the loop above to gather data first?
  // Or just re-fetch, it's IndexedDB, it's fast.

  for (const c of chapters) {
    const script = await scriptStorage.getByChapterId(c.id);
    if (script && script.scenes.length > 0) completionPoints += 25;

    const storyboard = await storyboardStorage.getByChapterId(c.id);
    if (storyboard && storyboard.panels.length > 0) completionPoints += 25;

    if (storyboard && storyboard.panels.length > 0 && storyboard.panels.some(p => p.generatedImage)) {
      completionPoints += 25;
    }
  }

  // Adjust total points logic: 4 categories per chapter
  // 1. Text (already calc)
  // 2. Script
  // 3. Storyboard
  // 4. Images
  totalPoints = chapters.length * 100; // 25 * 4


  const completionRate = totalPoints > 0 ? Math.round((completionPoints / totalPoints) * 100) : 0;

  return {
    totalChapters: chapters.length,
    totalScenes,
    totalPanels,
    totalDuration,
    charactersCount: assets.characters.length,
    scenesCount: assets.scenes.length,
    propsCount: assets.props.length,
    completionRate
  };
}

/**
 * 格式化时长
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}小时${minutes}分${secs}秒`;
  } else if (minutes > 0) {
    return `${minutes}分${secs}秒`;
  } else {
    return `${secs}秒`;
  }
}

/**
 * 获取角色出场统计
 */
export async function getCharacterAppearances(projectId: string): Promise<Record<string, number>> {
  const chapters = await chapterStorage.getByProjectId(projectId);
  const appearances: Record<string, number> = {};

  for (const chapter of chapters) {
    const storyboard = await storyboardStorage.getByChapterId(chapter.id);
    if (storyboard) {
      storyboard.panels.forEach(panel => {
        panel.characters.forEach(char => {
          appearances[char] = (appearances[char] || 0) + 1;
        });
      });
    }
  }

  return appearances;
}

/**
 * 获取场景使用频率
 */
export async function getSceneUsageFrequency(projectId: string): Promise<Record<string, number>> {
  const chapters = await chapterStorage.getByProjectId(projectId);
  const usage: Record<string, number> = {};

  for (const chapter of chapters) {
    const script = await scriptStorage.getByChapterId(chapter.id);
    if (script) {
      script.scenes.forEach(scene => {
        const locationKey = `${scene.location} (${scene.sceneType})`;
        usage[locationKey] = (usage[locationKey] || 0) + 1;
      });
    }
  }

  return usage;
}

