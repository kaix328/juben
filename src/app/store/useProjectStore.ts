import { create } from 'zustand';
import type { Project } from '../types';
import { projectStorage } from '../utils/storage';

interface ProjectState {
    currentProject: Project | null;
    isLoading: boolean;
    error: string | null;

    // Actions
    setCurrentProject: (project: Project | null) => void;
    loadProject: (id: string) => Promise<void>;
    updateProject: (project: Project) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set) => ({
    currentProject: null,
    isLoading: false,
    error: null,

    setCurrentProject: (project) => set({ currentProject: project }),

    loadProject: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const project = await projectStorage.getById(id);
            if (project) {
                set({ currentProject: project, isLoading: false });
            } else {
                set({ error: 'Project not found', isLoading: false });
            }
        } catch (err) {
            set({ error: (err as Error).message, isLoading: false });
        }
    },

    updateProject: async (project) => {
        try {
            await projectStorage.save(project);
            set({ currentProject: project });
        } catch (err) {
            set({ error: (err as Error).message });
        }
    },
}));
