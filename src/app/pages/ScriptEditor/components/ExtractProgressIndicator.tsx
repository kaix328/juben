// AI 提取进度指示器组件
import React, { memo } from 'react';
import { Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import type { ExtractProgress } from '../types';

interface ExtractProgressIndicatorProps {
    progress: ExtractProgress;
}

export const ExtractProgressIndicator = memo(function ExtractProgressIndicator({
    progress
}: ExtractProgressIndicatorProps) {
    if (progress.step === 'idle') return null;

    const getIcon = () => {
        switch (progress.step) {
            case 'parsing':
            case 'extracting':
            case 'validating':
                return <Loader2 className="w-4 h-4 animate-spin" />;
            case 'done':
                return <CheckCircle className="w-4 h-4 text-green-500" />;
            case 'error':
                return <AlertCircle className="w-4 h-4 text-red-500" />;
            default:
                return <Sparkles className="w-4 h-4" />;
        }
    };

    const getStepNumber = () => {
        switch (progress.step) {
            case 'parsing': return 1;
            case 'extracting': return 2;
            case 'validating': return 3;
            case 'done': return 4;
            default: return 0;
        }
    };

    const getBgColor = () => {
        switch (progress.step) {
            case 'done':
                return 'bg-green-50 border-green-200 text-green-700';
            case 'error':
                return 'bg-red-50 border-red-200 text-red-700';
            default:
                return 'bg-blue-50 border-blue-200 text-blue-700';
        }
    };

    return (
        <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${getBgColor()}`}>
            {getIcon()}
            <div className="flex-1">
                <div className="text-sm font-medium">{progress.message}</div>
                {progress.step !== 'done' && progress.step !== 'error' && (
                    <div className="flex gap-1 mt-1">
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className={`h-1 w-8 rounded-full ${step <= getStepNumber() ? 'bg-blue-500' : 'bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
});
