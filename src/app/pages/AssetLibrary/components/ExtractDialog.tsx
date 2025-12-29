import React from 'react';
import { Sparkles, RefreshCw, RotateCw } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../../../components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";

interface ExtractDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onExtract: (isMerge: boolean) => void;
}

export const ExtractDialog: React.FC<ExtractDialogProps> = ({
    open,
    onOpenChange,
    onExtract,
}) => {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        AI 一键提取资源库
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        AI 将扫描所有章节内容，自动提取其中的角色、场景、道具和服饰。请选择提取模式：
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="grid grid-cols-1 gap-4 py-4">
                    <Button
                        variant="outline"
                        className="flex flex-col items-start gap-1 h-auto p-4 hover:border-purple-500 hover:bg-purple-50"
                        onClick={() => {
                            onExtract(true);
                            onOpenChange(false);
                        }}
                    >
                        <div className="flex items-center gap-2 font-bold text-purple-700">
                            <RefreshCw className="w-4 h-4" />
                            增量分析 (推荐)
                        </div>
                        <p className="text-xs text-gray-500 text-left">
                            保留现有已生成的图片和 ID，仅补充新发现的资产或更新描述。
                        </p>
                    </Button>

                    <Button
                        variant="outline"
                        className="flex flex-col items-start gap-1 h-auto p-4 hover:border-red-500 hover:bg-red-50"
                        onClick={() => {
                            onExtract(false);
                            onOpenChange(false);
                        }}
                    >
                        <div className="flex items-center gap-2 font-bold text-red-700">
                            <RotateCw className="w-4 h-4" />
                            全量覆盖
                        </div>
                        <p className="text-xs text-gray-500 text-left">
                            清除当前库中所有内容，完全根据最新原文重新生成一份完整的资源库。
                        </p>
                    </Button>
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel>取消</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
