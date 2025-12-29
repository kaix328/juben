// 剧本页数/时长显示组件
import React, { memo, useMemo } from 'react';
import { FileText, Clock, Film } from 'lucide-react';
import type { Script } from '../types';

interface PageCounterProps {
    script: Script;
}

// 专业剧本规则：1页 ≈ 1分钟
const WORDS_PER_PAGE = 250; // 中文约250字/页
const SECONDS_PER_PAGE = 60;

export const PageCounter = memo(function PageCounter({ script }: PageCounterProps) {
    const stats = useMemo(() => {
        if (!script || script.scenes.length === 0) {
            return { pageCount: 0, runtime: '00:00', sceneCount: 0, dialogueCount: 0 };
        }

        // 计算总字数
        let totalWords = 0;
        let dialogueCount = 0;

        script.scenes.forEach(scene => {
            // 动作描述字数
            totalWords += (scene.action || '').length;

            // 对白字数（添加空值检查）
            if (scene.dialogues && Array.isArray(scene.dialogues)) {
                scene.dialogues.forEach(dialogue => {
                    totalWords += (dialogue.lines || '').length;
                    dialogueCount++;
                });
            }
        });

        // 计算页数（向上取整）
        const pageCount = Math.ceil(totalWords / WORDS_PER_PAGE);

        // 计算时长（基于预估时长或页数）
        const estimatedSeconds = script.scenes.reduce(
            (sum, s) => sum + (s.estimatedDuration || 15),
            0
        );
        const totalMinutes = Math.floor(estimatedSeconds / 60);
        const remainingSeconds = estimatedSeconds % 60;
        const runtime = `${String(totalMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

        return {
            pageCount,
            runtime,
            sceneCount: script.scenes.length,
            dialogueCount,
            totalWords,
        };
    }, [script]);

    return (
        <div className="flex items-center gap-4 text-sm bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            {/* 页数 */}
            <div className="flex items-center gap-1.5 text-purple-600" title="预计页数（1页≈1分钟）">
                <FileText className="w-4 h-4" />
                <span className="font-medium">{stats.pageCount}</span>
                <span className="text-gray-400 text-xs">页</span>
            </div>

            <div className="w-px h-4 bg-gray-200" />

            {/* 时长 */}
            <div className="flex items-center gap-1.5 text-blue-600" title="预计时长">
                <Clock className="w-4 h-4" />
                <span className="font-mono font-medium">{stats.runtime}</span>
            </div>

            <div className="w-px h-4 bg-gray-200" />

            {/* 场景数 */}
            <div className="flex items-center gap-1.5 text-green-600" title="总场景数">
                <Film className="w-4 h-4" />
                <span className="font-medium">{stats.sceneCount}</span>
                <span className="text-gray-400 text-xs">场景</span>
            </div>

            {/* 总字数（鼠标悬停显示） */}
            <div
                className="text-xs text-gray-400 cursor-help"
                title={`总字数：${stats.totalWords} | 对白：${stats.dialogueCount}句`}
            >
                {stats.totalWords}字
            </div>
        </div>
    );
});
