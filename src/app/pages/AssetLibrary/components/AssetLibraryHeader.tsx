import React from 'react';
import {
    Sparkles, Save, Upload, Download, Wand2, RefreshCw, ArrowLeft
} from 'lucide-react';
import { Button } from "../../../components/ui/button";
import { CardTitle } from "../../../components/ui/card";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import { toast } from 'sonner';

interface AssetLibraryHeaderProps {
    projectId: string | undefined;
    projectName: string | undefined;
    isExtracting: boolean;
    isSyncing: boolean;
    isBatchGenerating: boolean;  // 🆕
    onAIExtractClick: () => void;
    onSyncStyle: () => void;
    onBatchGenerate: () => void;  // 🆕
    onSave: () => void;
    onExport: () => void;
    onImportClick: () => void;
    importInputRef: React.RefObject<HTMLInputElement>;
    enablePromptOptimization: boolean;
    setEnablePromptOptimization: (val: boolean) => void;
    groupBy: 'none' | 'tags' | 'source';
    onGroupByChange: (val: 'none' | 'tags' | 'source') => void;
}

export const AssetLibraryHeader: React.FC<AssetLibraryHeaderProps> = ({
    projectId,
    projectName,
    isExtracting,
    isSyncing,
    isBatchGenerating,  // 🆕
    onAIExtractClick,
    onSyncStyle,
    onBatchGenerate,    // 🆕
    onSave,
    onExport,
    onImportClick,
    importInputRef,
    enablePromptOptimization,
    setEnablePromptOptimization,
    groupBy,
    onGroupByChange
}) => {
    return (
        <>
            <Breadcrumb className="mb-4">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">首页</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href={`/project/${projectId}`}>{projectName || '项目'}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>项目库</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-2">
                <div>
                    <CardTitle>项目库</CardTitle>
                    <div className="flex items-center gap-4 mt-1">
                        <p className="text-gray-600 text-sm">管理角色、场景、道具和服饰</p>
                        <div className="h-4 w-[1px] bg-gray-300" />
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">分组显示:</span>
                            <div className="flex bg-gray-100 p-0.5 rounded-md">
                                <button
                                    onClick={() => onGroupByChange('none')}
                                    className={`px-2 py-0.5 text-xs rounded transition-all ${groupBy === 'none' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    平铺
                                </button>
                                <button
                                    onClick={() => onGroupByChange('tags')}
                                    className={`px-2 py-0.5 text-xs rounded transition-all ${groupBy === 'tags' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    标签
                                </button>
                                <button
                                    onClick={() => onGroupByChange('source')}
                                    className={`px-2 py-0.5 text-xs rounded transition-all ${groupBy === 'source' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    来源
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant="outline"
                        onClick={onAIExtractClick}
                        disabled={isExtracting}
                        className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                        <Sparkles className={`w-4 h-4 ${isExtracting ? 'animate-spin' : ''}`} />
                        {isExtracting ? '分析中...' : 'AI 一键提取'}
                    </Button>

                    {/* 🆕 批量生成按钮 */}
                    <Button
                        variant="outline"
                        onClick={onBatchGenerate}
                        disabled={isBatchGenerating}
                        className="gap-2 border-green-200 text-green-700 hover:bg-green-50"
                    >
                        <RefreshCw className={`w-4 h-4 ${isBatchGenerating ? 'animate-spin' : ''}`} />
                        {isBatchGenerating ? '生成中...' : '批量生图'}
                    </Button>

                    <Button variant="outline" onClick={onImportClick} className="gap-2">
                        <Upload className="w-4 h-4" />
                        导入
                    </Button>
                    <input
                        type="file"
                        ref={importInputRef}
                        onChange={(e) => {
                            // This is handled in the parent, but we keep the ref here
                        }}
                        className="hidden"
                        accept=".json"
                    />

                    <Button variant="outline" onClick={onExport} className="gap-2">
                        <Download className="w-4 h-4" />
                        导出
                    </Button>

                    <Button
                        variant="outline"
                        onClick={onSyncStyle}
                        disabled={isSyncing}
                        className="gap-2 border-orange-200 text-orange-700 hover:bg-orange-50"
                    >
                        <Wand2 className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                        同步风格
                    </Button>

                    <Button onClick={onSave} className="gap-2">
                        <Save className="w-4 h-4" />
                        保存资源
                    </Button>
                </div>
            </div>
        </>
    );
};
