// 角色对白统计组件
import React, { memo, useMemo } from 'react';
import { Users, MessageCircle, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import type { Script } from '../types';

interface CharacterStatsProps {
    script: Script;
}

interface CharacterStat {
    name: string;
    lineCount: number;
    wordCount: number;
    percentage: number;
}

export const CharacterStats = memo(function CharacterStats({ script }: CharacterStatsProps) {
    const stats = useMemo(() => {
        if (!script || script.scenes.length === 0) return [];

        // 统计每个角色的对白
        const characterMap = new Map<string, { lineCount: number; wordCount: number }>();
        let totalWords = 0;

        script.scenes.forEach(scene => {
            // 🆕 null 安全检查
            if (!scene.dialogues || !Array.isArray(scene.dialogues)) return;

            scene.dialogues.forEach(dialogue => {
                const name = dialogue.character;
                if (!name || name === '角色名') return;

                // 🆕 null 安全检查
                const wordCount = dialogue.lines?.length || 0;
                totalWords += wordCount;

                const existing = characterMap.get(name) || { lineCount: 0, wordCount: 0 };
                characterMap.set(name, {
                    lineCount: existing.lineCount + 1,
                    wordCount: existing.wordCount + wordCount,
                });
            });
        });

        // 转换为数组并排序
        const result: CharacterStat[] = Array.from(characterMap.entries())
            .map(([name, data]) => ({
                name,
                lineCount: data.lineCount,
                wordCount: data.wordCount,
                percentage: totalWords > 0 ? Math.round((data.wordCount / totalWords) * 100) : 0,
            }))
            .sort((a, b) => b.wordCount - a.wordCount);

        return result;
    }, [script]);

    if (stats.length === 0) {
        return null;
    }

    // 生成渐变颜色
    const getBarColor = (index: number): string => {
        const colors = [
            'bg-purple-500',
            'bg-blue-500',
            'bg-green-500',
            'bg-orange-500',
            'bg-pink-500',
            'bg-teal-500',
            'bg-indigo-500',
            'bg-red-400',
        ];
        return colors[index % colors.length];
    };

    return (
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-indigo-700 text-base">
                    <BarChart2 className="w-5 h-5" />
                    角色对白统计
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {stats.slice(0, 8).map((stat, index) => (
                        <div key={stat.name} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-800">{stat.name}</span>
                                    {index === 0 && (
                                        <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">
                                            主角
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 text-gray-500 text-xs">
                                    <span className="flex items-center gap-1">
                                        <MessageCircle className="w-3 h-3" />
                                        {stat.lineCount}句
                                    </span>
                                    <span>{stat.wordCount}字</span>
                                    <span className="font-medium text-gray-700">{stat.percentage}%</span>
                                </div>
                            </div>
                            {/* 进度条 */}
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${getBarColor(index)}`}
                                    style={{ width: `${stat.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}

                    {stats.length > 8 && (
                        <div className="text-center text-xs text-gray-400 pt-2">
                            还有 {stats.length - 8} 个角色...
                        </div>
                    )}
                </div>

                {/* 总计 */}
                <div className="mt-4 pt-3 border-t border-indigo-100 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        共 {stats.length} 个角色
                    </span>
                    <span className="text-gray-600">
                        总对白 {stats.reduce((sum, s) => sum + s.lineCount, 0)} 句
                    </span>
                </div>
            </CardContent>
        </Card>
    );
});
