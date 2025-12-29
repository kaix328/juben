// 资源引用追踪工具
import type { Script, Storyboard, StoryboardPanel, Character, Scene, Prop, Costume } from '../types';

export interface AssetUsage {
  assetId: string;
  assetType: 'character' | 'scene' | 'prop' | 'costume';
  usageLocations: UsageLocation[];
}

export interface UsageLocation {
  type: 'script' | 'storyboard';
  chapterId: string;
  chapterTitle: string;
  sceneNumber?: number;
  panelNumber?: number;
  context?: string;
}

/**
 * 追踪角色在剧本中的使用
 */
export function trackCharacterInScript(
  character: Character,
  scripts: { script: Script; chapterTitle: string; chapterId: string }[]
): UsageLocation[] {
  const locations: UsageLocation[] = [];

  scripts.forEach(({ script, chapterTitle, chapterId }) => {
    script.scenes.forEach((scene, sceneIndex) => {
      // 检查角色数组
      if (scene.characters?.includes(character.name)) {
        locations.push({
          type: 'script',
          chapterId,
          chapterTitle,
          sceneNumber: scene.sceneNumber || sceneIndex + 1,
          context: `场景 ${scene.sceneNumber || sceneIndex + 1}: ${scene.location || '未知地点'}`,
        });
      }

      // 检查对话
      scene.dialogues?.forEach((dialogue) => {
        if (dialogue.character === character.name) {
          locations.push({
            type: 'script',
            chapterId,
            chapterTitle,
            sceneNumber: scene.sceneNumber || sceneIndex + 1,
            context: `台词: ${dialogue.lines?.slice(0, 50) || ''}...`,
          });
        }
      });
    });
  });

  // 去重
  const uniqueLocations = locations.filter(
    (loc, index, self) =>
      index === self.findIndex((l) => l.chapterId === loc.chapterId && l.sceneNumber === loc.sceneNumber)
  );

  return uniqueLocations;
}

/**
 * 追踪角色在分镜中的使用
 */
export function trackCharacterInStoryboard(
  character: Character,
  storyboards: { storyboard: Storyboard; chapterTitle: string; chapterId: string }[]
): UsageLocation[] {
  const locations: UsageLocation[] = [];

  storyboards.forEach(({ storyboard, chapterTitle, chapterId }) => {
    storyboard.panels.forEach((panel) => {
      if (panel.characters?.includes(character.name)) {
        locations.push({
          type: 'storyboard',
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `镜头 ${panel.panelNumber}: ${panel.description?.slice(0, 50) || ''}...`,
        });
      }
    });
  });

  return locations;
}

/**
 * 追踪场景在剧本中的使用
 */
export function trackSceneInScript(
  scene: Scene,
  scripts: { script: Script; chapterTitle: string; chapterId: string }[]
): UsageLocation[] {
  const locations: UsageLocation[] = [];

  scripts.forEach(({ script, chapterTitle, chapterId }) => {
    script.scenes.forEach((scriptScene, sceneIndex) => {
      // 模糊匹配场景名称或地点
      const scriptLocation = (scriptScene.location || '').toLowerCase();
      const assetName = (scene.name || '').toLowerCase();
      const assetLocation = (scene.location || '').toLowerCase();

      if (
        (assetName && scriptLocation.includes(assetName)) ||
        (assetLocation && scriptLocation.includes(assetLocation)) ||
        (scriptLocation && assetName.includes(scriptLocation))
      ) {
        locations.push({
          type: 'script',
          chapterId,
          chapterTitle,
          sceneNumber: scriptScene.sceneNumber || sceneIndex + 1,
          context: `场景 ${scriptScene.sceneNumber || sceneIndex + 1}: ${scriptScene.location || '未知地点'}`,
        });
      }
    });
  });

  return locations;
}

/**
 * 追踪道具在分镜中的使用
 */
export function trackPropInStoryboard(
  prop: Prop,
  storyboards: { storyboard: Storyboard; chapterTitle: string; chapterId: string }[]
): UsageLocation[] {
  const locations: UsageLocation[] = [];

  storyboards.forEach(({ storyboard, chapterTitle, chapterId }) => {
    storyboard.panels.forEach((panel) => {
      const desc = (panel.description || '').toLowerCase();
      const pName = (prop.name || '').toLowerCase();

      // 检查道具数组
      if (panel.props?.includes(prop.name)) {
        locations.push({
          type: 'storyboard',
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `镜头 ${panel.panelNumber}: ${panel.description?.slice(0, 50) || ''}...`,
        });
      }

      // 检查描述中是否提到道具
      else if (pName && desc.includes(pName)) {
        locations.push({
          type: 'storyboard',
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `描述中提到: ${panel.description?.slice(0, 50) || ''}...`,
        });
      }
    });
  });

  // 去重
  const uniqueLocations = locations.filter(
    (loc, index, self) =>
      index === self.findIndex((l) => l.chapterId === loc.chapterId && l.panelNumber === loc.panelNumber)
  );

  return uniqueLocations;
}

/**
 * 追踪服饰在分镜中的使用
 */
export function trackCostumeInStoryboard(
  costume: Costume,
  storyboards: { storyboard: Storyboard; chapterTitle: string; chapterId: string }[]
): UsageLocation[] {
  const locations: UsageLocation[] = [];

  storyboards.forEach(({ storyboard, chapterTitle, chapterId }) => {
    storyboard.panels.forEach((panel) => {
      // 检查分镜面板是否引用了该服饰
      if (panel.description?.toLowerCase().includes(costume.name.toLowerCase())) {
        locations.push({
          type: 'storyboard',
          chapterId,
          chapterTitle,
          panelNumber: panel.panelNumber,
          context: `分镜 ${panel.panelNumber}: ${panel.description?.slice(0, 50) || ''}...`,
        });
      }
    });
  });

  return locations;
}

/**
 * 获取所有资源的使用统计
 */
export function calculateAssetUsage(
  assets: {
    characters: Character[];
    scenes: Scene[];
    props: Prop[];
    costumes: Costume[];
  },
  scripts: { script: Script; chapterTitle: string; chapterId: string }[],
  storyboards: { storyboard: Storyboard; chapterTitle: string; chapterId: string }[]
): Map<string, number> {
  const usageMap = new Map<string, number>();

  // 统计角色使用次数
  assets.characters.forEach((character) => {
    const scriptUsage = trackCharacterInScript(character, scripts);
    const storyboardUsage = trackCharacterInStoryboard(character, storyboards);
    usageMap.set(character.id, scriptUsage.length + storyboardUsage.length);
  });

  // 统计场景使用次数
  assets.scenes.forEach((scene) => {
    const scriptUsage = trackSceneInScript(scene, scripts);
    usageMap.set(scene.id, scriptUsage.length);
  });

  // 统计道具使用次数
  assets.props.forEach((prop) => {
    const storyboardUsage = trackPropInStoryboard(prop, storyboards);
    usageMap.set(prop.id, storyboardUsage.length);
  });

  // 统计服饰使用次数
  assets.costumes.forEach((costume) => {
    const storyboardUsage = trackCostumeInStoryboard(costume, storyboards);
    usageMap.set(costume.id, storyboardUsage.length);
  });

  return usageMap;
}

/**
 * 检查资源是否可以安全删除
 */
export function canSafelyDeleteAsset(
  assetId: string,
  assetType: 'character' | 'scene' | 'prop' | 'costume',
  usageCount: number
): { canDelete: boolean; warning?: string } {
  if (usageCount === 0) {
    return { canDelete: true };
  }

  const typeNames = {
    character: '角色',
    scene: '场景',
    prop: '道具',
    costume: '服饰',
  };

  return {
    canDelete: true,
    warning: `此${typeNames[assetType]}在 ${usageCount} 个地方被引用，删除后这些引用将失效。`,
  };
}
