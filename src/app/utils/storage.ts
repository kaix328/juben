import { db } from '../db/db';
import type {
  Project,
  Chapter,
  Script,
  Storyboard,
  AssetLibrary,
  StoryboardTemplate,
  ProjectVersion,
  CharacterRelation
} from '../types';

// Migration Helper: If we want to import from localStorage once, we can do it here.
// But for now, let's just implement the async methods.

// 项目相关
export const projectStorage = {
  getAll: async (): Promise<Project[]> => {
    return await db.projects.toArray();
  },

  getById: async (id: string): Promise<Project | undefined> => {
    return await db.projects.get(id);
  },

  save: async (project: Project): Promise<void> => {
    await db.projects.put(project);
  },

  delete: async (id: string): Promise<void> => {
    await db.transaction('rw', [db.projects, db.chapters, db.scripts, db.storyboards, db.assets, db.versions, db.relations], async () => {
      // 1. 删除所有关联的章节及其下属内容
      const chapters = await db.chapters.where('projectId').equals(id).toArray();
      for (const chapter of chapters) {
        await db.scripts.where('chapterId').equals(chapter.id).delete();
        await db.storyboards.where('chapterId').equals(chapter.id).delete();
        await db.chapters.delete(chapter.id);
      }

      // 2. 删除独立关联的数据
      await db.assets.delete(id);
      await db.versions.where('projectId').equals(id).delete();
      await db.relations.where('projectId').equals(id).delete();

      // 3. 最后删除项目本身
      await db.projects.delete(id);
    });
  },
};

// 章节相关
export const chapterStorage = {
  getAll: async (): Promise<Chapter[]> => {
    return await db.chapters.toArray();
  },

  getByProjectId: async (projectId: string): Promise<Chapter[]> => {
    return await db.chapters
      .where('projectId')
      .equals(projectId)
      .sortBy('orderIndex');
  },

  getById: async (id: string): Promise<Chapter | undefined> => {
    return await db.chapters.get(id);
  },

  getProjectIdByChapterId: async (chapterId: string): Promise<string | undefined> => {
    const chapter = await db.chapters.get(chapterId);
    return chapter?.projectId;
  },

  save: async (chapter: Chapter): Promise<void> => {
    await db.chapters.put(chapter);
  },

  delete: async (id: string): Promise<void> => {
    await db.chapters.delete(id);
  },
};

// 剧本相关
export const scriptStorage = {
  getByChapterId: async (chapterId: string): Promise<Script | undefined> => {
    // Since scripts isn't indexed by chapterId in our simple schema above?
    // Wait, in db.ts I defined: scripts: 'id, chapterId'
    // So chapterId is indexed.
    return await db.scripts.where('chapterId').equals(chapterId).first();
  },

  save: async (script: Script): Promise<void> => {
    // If ID is missing but script exists for chapter, we should be careful.
    // Script usually has ID.
    // Check if script exists for this chapter?
    // Note: Script ID is unique.
    await db.scripts.put(script);
  },
};

// 分镜相关
export const storyboardStorage = {
  getByChapterId: async (chapterId: string): Promise<Storyboard | undefined> => {
    return await db.storyboards.where('chapterId').equals(chapterId).first();
  },

  save: async (storyboard: Storyboard): Promise<void> => {
    await db.storyboards.put(storyboard);
  },
};

// 资源库相关
export const assetStorage = {
  getByProjectId: async (projectId: string): Promise<AssetLibrary | undefined> => {
    return await db.assets.get(projectId);
  },

  save: async (asset: AssetLibrary): Promise<void> => {
    await db.assets.put(asset);
  },

  // Helper to init if not exists
  initForProject: async (projectId: string): Promise<AssetLibrary> => {
    const existing = await db.assets.get(projectId);
    if (existing) return existing;

    const newAssets: AssetLibrary = {
      projectId,
      characters: [],
      scenes: [],
      props: [],
      costumes: []
    };
    await db.assets.add(newAssets);
    return newAssets;
  }
};

// 分镜模板相关
export const templateStorage = {
  getAll: async (): Promise<StoryboardTemplate[]> => {
    return await db.templates.toArray();
  },

  getById: async (id: string): Promise<StoryboardTemplate | undefined> => {
    return await db.templates.get(id);
  },

  save: async (template: StoryboardTemplate): Promise<void> => {
    await db.templates.put(template);
  },

  delete: async (id: string): Promise<void> => {
    await db.templates.delete(id);
  },
};

// 项目版本相关
export const versionStorage = {
  getAll: async (): Promise<ProjectVersion[]> => {
    return await db.versions.toArray();
  },

  getById: async (id: string): Promise<ProjectVersion | undefined> => {
    return await db.versions.get(id);
  },

  save: async (version: ProjectVersion): Promise<void> => {
    await db.versions.put(version);
  },

  delete: async (id: string): Promise<void> => {
    await db.versions.delete(id);
  },
};

// 角色关系相关
export const relationStorage = {
  getAll: async (): Promise<CharacterRelation[]> => {
    return await db.relations.toArray();
  },

  getById: async (id: string): Promise<CharacterRelation | undefined> => {
    return await db.relations.get(id);
  },

  save: async (relation: CharacterRelation): Promise<void> => {
    await db.relations.put(relation);
  },

  delete: async (id: string): Promise<void> => {
    await db.relations.delete(id);
  },
};

// 生成唯一ID
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}