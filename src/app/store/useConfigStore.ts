import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ApiSettings {
    volcApiKey?: string;
    llmEndpointId?: string;
    imageEndpointId?: string;
}

interface ConfigState {
    apiSettings: ApiSettings;

    // Actions
    setApiSettings: (settings: ApiSettings) => void;
}

export const useConfigStore = create<ConfigState>()(
    persist(
        (set) => ({
            apiSettings: {
                volcApiKey: '',
                llmEndpointId: '',
                imageEndpointId: '',
            },

            setApiSettings: (settings) => set({ apiSettings: settings }),
        }),
        {
            name: 'comic-ai-config', // localStorage key
        }
    )
);
