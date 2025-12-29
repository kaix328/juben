import { useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { toast } from 'sonner';

// Hooks
import { useAssetData, AssetType } from './hooks/useAssetData';
import { useImageGeneration } from './hooks/useImageGeneration';
import { useAssetUsage } from './hooks/useAssetUsage';

// Components
import { AssetLibraryHeader } from './components/AssetLibraryHeader';
import { AssetStatsPanel } from './components/AssetStatsPanel';
import { ExtractDialog } from './components/ExtractDialog';
import { StyleApplicationDialog } from '../../components/StyleApplicationDialog';
import {
    CharacterTab,
    SceneTab,
    PropTab,
    CostumeTab
} from '../../components/asset-library';

export function AssetLibrary() {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const location = useLocation();

    // 1. 数据管理 Hook
    const {
        project,
        assets,
        setAssets,
        isExtracting,
        isSyncing,
        styleSettings,
        setStyleSettings,
        handleSave,
        handleAIExtract,
        handleSyncDirectorStyle,
        handleUpdateCharacter,
        handleAddCharacter,
        handleDeleteCharacter,
        handleUpdateScene,
        handleAddScene,
        handleDeleteScene,
        handleUpdateProp,
        handleAddProp,
        handleDeleteProp,
        handleUpdateCostume,
        handleAddCostume,
        handleDeleteCostume,
        handleAddTag,
        handleRemoveTag,
        handleBatchDelete,
        handleReorderAssets,
    } = useAssetData({ projectId });

    // 2. 图片生成 Hook
    const {
        enablePromptOptimization,
        setEnablePromptOptimization,
        isBatchGenerating,  // 🆕
        batchProgress,      // 🆕
        handleGenerateCharacterFullBody,
        handleGenerateCharacterFace,
        handleGenerateSceneWide,
        handleGenerateSceneMedium,
        handleGenerateSceneCloseup,
        handleGenerateProp,
        handleGenerateCostume,
        handleBatchGenerateAll  // 🆕
    } = useImageGeneration({
        assets,
        project,
        handleUpdateCharacter,
        handleUpdateScene,
        handleUpdateProp,
        handleUpdateCostume
    });

    // 3. 使用率追踪 Hook
    const {
        usageMap,
        getCharacterUsageLocations,
        getSceneUsageLocations,
        getPropUsageLocations,
        getCostumeUsageLocations
    } = useAssetUsage({ projectId, assets, setAssets });

    // UI 状态
    const [searchTerm, setSearchTerm] = useState('');
    const [showExtractDialog, setShowExtractDialog] = useState(false);
    const [showStyleDialog, setShowStyleDialog] = useState(false);
    const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
    const [selectedSceneId, setSelectedSceneId] = useState<string | null>(null);
    const [selectedPropId, setSelectedPropId] = useState<string | null>(null);
    const [selectedCostumeId, setSelectedCostumeId] = useState<string | null>(null);
    const [groupBy, setGroupBy] = useState<'none' | 'tags' | 'source'>('none');
    const importInputRef = useRef<HTMLInputElement>(null);

    // 选项卡管理
    const getInitialTab = (): AssetType => {
        const params = new URLSearchParams(location.search);
        const tabParam = params.get('tab') as AssetType | null;
        const validTabs: AssetType[] = ['character', 'scene', 'prop', 'costume'];
        return tabParam && validTabs.includes(tabParam) ? tabParam : 'character';
    };
    const [activeTab, setActiveTab] = useState<AssetType>(getInitialTab);

    const handleTabChange = (value: string) => {
        const validTabs: AssetType[] = ['character', 'scene', 'prop', 'costume'];
        const tab = validTabs.includes(value as AssetType) ? (value as AssetType) : 'character';
        setActiveTab(tab);
        const params = new URLSearchParams(location.search);
        params.set('tab', tab);
        navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    };

    // 统计数据计算
    const stats = assets ? {
        characters: {
            total: assets.characters.length,
            withImages: assets.characters.filter(c => c.fullBodyPreview || c.facePreview).length
        },
        scenes: {
            total: assets.scenes.length,
            withImages: assets.scenes.filter(s => s.widePreview || s.mediumPreview || s.closeupPreview).length
        },
        props: {
            total: assets.props.length,
            withImages: assets.props.filter(p => p.preview).length
        },
        costumes: {
            total: assets.costumes.length,
            withImages: assets.costumes.filter(c => c.preview).length
        },
        completionRate: (function () {
            const total = assets.characters.length + assets.scenes.length + assets.props.length + assets.costumes.length;
            if (total === 0) return 0;
            const withImages = assets.characters.filter(c => c.fullBodyPreview || c.facePreview).length +
                assets.scenes.filter(s => s.widePreview || s.mediumPreview || s.closeupPreview).length +
                assets.props.filter(p => p.preview).length +
                assets.costumes.filter(c => c.preview).length;
            return Math.round((withImages / total) * 100);
        })()
    } : null;

    // 导入导出处理
    const handleExport = () => {
        if (!assets) return;
        const dataStr = JSON.stringify(assets, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `项目库_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        toast.success('导出成功');
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target?.result as string);
                if (projectId) imported.projectId = projectId;
                setAssets(imported);
                toast.success('导入成功');
            } catch (error) {
                toast.error('导入失败，文件格式错误');
            }
        };
        reader.readAsText(file);
    };

    if (!projectId) return null;

    return (
        <div className="space-y-6 pb-20">
            <AssetLibraryHeader
                projectId={projectId}
                projectName={project?.title}
                isExtracting={isExtracting}
                isSyncing={isSyncing}
                isBatchGenerating={isBatchGenerating}
                onAIExtractClick={() => setShowExtractDialog(true)}
                onSyncStyle={() => {
                    if (styleSettings.confirmBeforeApply) {
                        setShowStyleDialog(true);
                    } else {
                        handleSyncDirectorStyle();
                    }
                }}
                onBatchGenerate={handleBatchGenerateAll}
                onSave={handleSave}
                onExport={handleExport}
                onImportClick={() => importInputRef.current?.click()}
                importInputRef={importInputRef as any}
                enablePromptOptimization={enablePromptOptimization}
                setEnablePromptOptimization={setEnablePromptOptimization}
                groupBy={groupBy}
                onGroupByChange={setGroupBy}
            />
            <input
                type="file"
                ref={importInputRef}
                onChange={handleImport}
                className="hidden"
                accept=".json"
            />

            <Card>
                <CardHeader>
                    <AssetStatsPanel stats={stats} />
                </CardHeader>
                <CardContent>
                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                            <TabsTrigger value="character">
                                角色 ({assets?.characters.length || 0})
                            </TabsTrigger>
                            <TabsTrigger value="scene">
                                场景 ({assets?.scenes.length || 0})
                            </TabsTrigger>
                            <TabsTrigger value="prop">
                                道具 ({assets?.props.length || 0})
                            </TabsTrigger>
                            <TabsTrigger value="costume">
                                服饰 ({assets?.costumes.length || 0})
                            </TabsTrigger>
                        </TabsList>

                        <div className="mt-6">
                            <TabsContent value="character">
                                <CharacterTab
                                    assets={assets || { projectId, characters: [], scenes: [], props: [], costumes: [] }}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    selectedCharacterId={selectedCharacterId}
                                    setSelectedCharacterId={setSelectedCharacterId}
                                    handleAddCharacter={handleAddCharacter}
                                    handleUpdateCharacter={handleUpdateCharacter}
                                    handleDeleteCharacter={(id) => handleDeleteCharacter(id, usageMap.get(id) || 0)}
                                    handleAddTag={handleAddTag as any}
                                    handleRemoveTag={handleRemoveTag as any}
                                    getCharacterUsageLocations={getCharacterUsageLocations}
                                    usageMap={usageMap}
                                    handleGenerateCharacterFullBody={handleGenerateCharacterFullBody}
                                    handleGenerateCharacterFace={handleGenerateCharacterFace}
                                    projectId={projectId}
                                    project={project}
                                    onReorder={(start, end) => handleReorderAssets('character', start, end)}
                                    groupBy={groupBy}
                                />
                            </TabsContent>

                            <TabsContent value="scene">
                                <SceneTab
                                    assets={assets || { projectId, characters: [], scenes: [], props: [], costumes: [] }}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    selectedSceneId={selectedSceneId}
                                    setSelectedSceneId={setSelectedSceneId}
                                    handleAddScene={handleAddScene}
                                    handleUpdateScene={handleUpdateScene}
                                    handleDeleteScene={(id) => handleDeleteScene(id, usageMap.get(id) || 0)}
                                    handleAddTag={handleAddTag as any}
                                    handleRemoveTag={handleRemoveTag as any}
                                    handleGenerateSceneWide={handleGenerateSceneWide}
                                    handleGenerateSceneMedium={handleGenerateSceneMedium}
                                    handleGenerateSceneCloseup={handleGenerateSceneCloseup}
                                    onReorder={(start, end) => handleReorderAssets('scene', start, end)}
                                    getSceneUsageLocations={getSceneUsageLocations}
                                    usageMap={usageMap}
                                    groupBy={groupBy}
                                />
                            </TabsContent>

                            <TabsContent value="prop">
                                <PropTab
                                    assets={assets || { projectId, characters: [], scenes: [], props: [], costumes: [] }}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    selectedPropId={selectedPropId}
                                    setSelectedPropId={setSelectedPropId}
                                    handleAddProp={handleAddProp}
                                    handleUpdateProp={handleUpdateProp}
                                    handleDeleteProp={(id) => handleDeleteProp(id, usageMap.get(id) || 0)}
                                    handleAddTag={handleAddTag as any}
                                    handleRemoveTag={handleRemoveTag as any}
                                    handleBatchDelete={handleBatchDelete}
                                    handleGenerateProp={handleGenerateProp}
                                    onReorder={(start, end) => handleReorderAssets('prop', start, end)}
                                    getPropUsageLocations={getPropUsageLocations}
                                    usageMap={usageMap}
                                    groupBy={groupBy}
                                />
                            </TabsContent>

                            <TabsContent value="costume">
                                <CostumeTab
                                    assets={assets || { projectId, characters: [], scenes: [], props: [], costumes: [] }}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    selectedCostumeId={selectedCostumeId}
                                    setSelectedCostumeId={setSelectedCostumeId}
                                    handleAddCostume={handleAddCostume}
                                    handleUpdateCostume={handleUpdateCostume}
                                    handleDeleteCostume={(id) => handleDeleteCostume(id, usageMap.get(id) || 0)}
                                    handleAddTag={handleAddTag as any}
                                    handleRemoveTag={handleRemoveTag as any}
                                    handleBatchDelete={handleBatchDelete}
                                    handleGenerateCostume={handleGenerateCostume}
                                    onReorder={(start, end) => handleReorderAssets('costume', start, end)}
                                    getCostumeUsageLocations={getCostumeUsageLocations}
                                    usageMap={usageMap}
                                    groupBy={groupBy}
                                />
                            </TabsContent>
                        </div>
                    </Tabs>
                </CardContent>
            </Card>

            <ExtractDialog
                open={showExtractDialog}
                onOpenChange={setShowExtractDialog}
                onExtract={handleAIExtract}
            />

            {project?.directorStyle && (
                <StyleApplicationDialog
                    isOpen={showStyleDialog}
                    onClose={() => setShowStyleDialog(false)}
                    onConfirm={handleSyncDirectorStyle}
                    directorStyle={project.directorStyle}
                    characters={assets?.characters || []}
                    scenes={assets?.scenes || []}
                    props={assets?.props || []}
                    costumes={assets?.costumes || []}
                    protectManualEdits={styleSettings.protectManualEdits}
                    showPreview={styleSettings.showPreview}
                />
            )}
        </div>
    );
}
