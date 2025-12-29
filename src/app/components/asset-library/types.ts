// 资源库子组件的共享类型定义
import type { AssetLibrary, Character, Scene, Prop, Costume, Project } from '../../types';
import type { UsageLocation } from '../../utils/assetTracker';

// 角色标签页 Props
export interface CharacterTabProps {
    assets: AssetLibrary;
    project: Project | null;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedCharacterId: string | null;
    setSelectedCharacterId: (id: string | null) => void;
    handleAddCharacter: () => void;
    handleUpdateCharacter: (id: string, updates: Partial<Character>) => void;
    handleDeleteCharacter: (id: string) => void;
    handleAddTag: (id: string, type: 'character', tag: string) => void;
    handleRemoveTag: (id: string, type: 'character', tag: string) => void;
    getCharacterUsageLocations: (character: Character) => UsageLocation[];
    usageMap: Map<string, number>;
    handleGenerateCharacterFullBody: (id: string) => Promise<void>;
    handleGenerateCharacterFace: (id: string) => Promise<void>;
    projectId: string;
}

// 场景标签页 Props
export interface SceneTabProps {
    assets: AssetLibrary;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedSceneId: string | null;
    setSelectedSceneId: (id: string | null) => void;
    handleAddScene: () => void;
    handleUpdateScene: (id: string, updates: Partial<Scene>) => void;
    handleDeleteScene: (id: string) => void;
    handleAddTag: (id: string, type: 'scene', tag: string) => void;
    handleRemoveTag: (id: string, type: 'scene', tag: string) => void;
    handleGenerateSceneWide: (id: string) => Promise<void>;
    handleGenerateSceneMedium: (id: string) => Promise<void>;
    handleGenerateSceneCloseup: (id: string) => Promise<void>;
}

// 道具标签页 Props
export interface PropTabProps {
    assets: AssetLibrary;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedPropId: string | null;
    setSelectedPropId: (id: string | null) => void;
    handleAddProp: () => void;
    handleUpdateProp: (id: string, updates: Partial<Prop>) => void;
    handleDeleteProp: (id: string) => void;
    handleAddTag: (id: string, type: 'prop', tag: string) => void;
    handleRemoveTag: (id: string, type: 'prop', tag: string) => void;
    handleGenerateProp: (id: string) => Promise<void>;
}

// 服饰标签页 Props
export interface CostumeTabProps {
    assets: AssetLibrary;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedCostumeId: string | null;
    setSelectedCostumeId: (id: string | null) => void;
    handleAddCostume: () => void;
    handleUpdateCostume: (id: string, updates: Partial<Costume>) => void;
    handleDeleteCostume: (id: string) => void;
    handleAddTag: (id: string, type: 'costume', tag: string) => void;
    handleRemoveTag: (id: string, type: 'costume', tag: string) => void;
    handleGenerateCostume: (id: string) => Promise<void>;
}
