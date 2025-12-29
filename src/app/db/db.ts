import Dexie, { Table } from 'dexie';
import type {
    Project,
    Chapter,
    Script,
    Storyboard,
    AssetLibrary,
    ProjectVersion,
    CharacterRelation,
    StoryboardTemplate
} from '../types';

export class AppDatabase extends Dexie {
    projects!: Table<Project, string>;
    chapters!: Table<Chapter, string>;
    scripts!: Table<Script, string>; // ID is string (guid)
    storyboards!: Table<Storyboard, string>;
    assets!: Table<AssetLibrary, string>; // Keyed by projectId usually, but let's see. logic in storage.ts uses find. 
    // We'll index by id (string) and index projectId.

    templates!: Table<StoryboardTemplate, string>;
    versions!: Table<ProjectVersion, string>;
    relations!: Table<CharacterRelation, string>;

    constructor() {
        super('AiComicDB');
        this.version(1).stores({
            projects: 'id, title, updatedAt',
            chapters: 'id, projectId, orderIndex',
            scripts: 'id, chapterId', // script.id is PK, chapterId is indexed
            storyboards: 'id, chapterId',
            assets: 'projectId', // One asset library per project. We use projectId as PK? No, usually id. 
            // But types says AssetLibrary has projectId but maybe not its own id? 
            // Looking at types: interface AssetLibrary { projectId: string; ... } 
            // It doesn't have an 'id'. So projectId is the PK.
            templates: 'id, category',
            versions: 'id, projectId, versionNumber',
            relations: 'id, projectId, fromCharacterId, toCharacterId'
        });
    }
}

export const db = new AppDatabase();
