import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Progress } from '../../../components/ui/progress';
import type { StoryboardPanel } from '../../../types';

interface PreviewDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    panels: StoryboardPanel[];
}

export const PreviewDialog: React.FC<PreviewDialogProps> = ({
    open,
    onOpenChange,
    panels
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    const currentPanel = panels[currentIndex];
    const currentDuration = (currentPanel?.duration || 3) * 1000; // 转换为毫秒

    // 播放逻辑
    useEffect(() => {
        if (!isPlaying || !open) return;

        const interval = setInterval(() => {
            setElapsed(prev => {
                const newElapsed = prev + 100;
                if (newElapsed >= currentDuration) {
                    // 切换到下一个分镜
                    if (currentIndex < panels.length - 1) {
                        setCurrentIndex(i => i + 1);
                        return 0;
                    } else {
                        // 播放结束
                        setIsPlaying(false);
                        return prev;
                    }
                }
                return newElapsed;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isPlaying, open, currentDuration, currentIndex, panels.length]);

    // 重置状态
    useEffect(() => {
        if (open) {
            setCurrentIndex(0);
            setElapsed(0);
            setIsPlaying(false);
        }
    }, [open]);

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            setCurrentIndex(i => i - 1);
            setElapsed(0);
        }
    }, [currentIndex]);

    const handleNext = useCallback(() => {
        if (currentIndex < panels.length - 1) {
            setCurrentIndex(i => i + 1);
            setElapsed(0);
        }
    }, [currentIndex, panels.length]);

    const togglePlay = useCallback(() => {
        setIsPlaying(p => !p);
    }, []);

    if (!currentPanel) return null;

    const progress = (elapsed / currentDuration) * 100;
    const totalDuration = panels.reduce((acc, p) => acc + (p.duration || 3), 0);
    const playedDuration = panels.slice(0, currentIndex).reduce((acc, p) => acc + (p.duration || 3), 0) + (elapsed / 1000);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <DialogHeader className="p-4 pb-2">
                    <DialogTitle className="flex items-center justify-between">
                        <span>分镜预览播放</span>
                        <span className="text-sm text-gray-500 font-normal">
                            {currentIndex + 1} / {panels.length}
                        </span>
                    </DialogTitle>
                </DialogHeader>

                {/* 预览图区域 */}
                <div className="relative w-full aspect-video bg-black">
                    {currentPanel.generatedImage ? (
                        <img
                            src={currentPanel.generatedImage}
                            alt={`分镜 ${currentPanel.panelNumber}`}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <div className="text-center">
                                <div className="text-6xl mb-4">#{currentPanel.panelNumber}</div>
                                <div className="text-lg max-w-lg px-4">{currentPanel.description}</div>
                            </div>
                        </div>
                    )}

                    {/* 🆕 对白字幕叠加 */}
                    {currentPanel.dialogue && (
                        <div className="absolute bottom-16 left-0 right-0 px-8">
                            <div className="bg-black/70 text-white text-center py-3 px-6 rounded-lg text-lg backdrop-blur-sm">
                                {currentPanel.dialogue}
                            </div>
                        </div>
                    )}

                    {/* 分镜信息叠加 */}
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm backdrop-blur-sm">
                        #{currentPanel.panelNumber} · {currentPanel.shot} · {currentPanel.duration}秒
                    </div>
                </div>

                {/* 进度条 */}
                <div className="px-4 py-2">
                    <Progress value={progress} className="h-1" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{Math.floor(playedDuration)}秒</span>
                        <span>{totalDuration}秒</span>
                    </div>
                </div>

                {/* 控制栏 */}
                <div className="flex items-center justify-center gap-4 p-4 pt-2 border-t">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <SkipBack className="w-4 h-4" />
                    </Button>
                    <Button
                        variant="default"
                        size="lg"
                        onClick={togglePlay}
                        className="gap-2"
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        {isPlaying ? '暂停' : '播放'}
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleNext}
                        disabled={currentIndex === panels.length - 1}
                    >
                        <SkipForward className="w-4 h-4" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
