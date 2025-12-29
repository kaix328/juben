// 统计面板组件
import React, { memo } from 'react';
import { BarChart3, X, Clock, Users, Film, MessageCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import type { ScriptStats } from '../types';

interface StatsPanelProps {
    stats: ScriptStats;
    onClose: () => void;
}

export const StatsPanel = memo(function StatsPanel({ stats, onClose }: StatsPanelProps) {
    return (
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="flex items-center gap-2 text-purple-700">
                    <BarChart3 className="w-5 h-5" />
                    剧本统计
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={onClose}>
                    <X className="w-4 h-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* 总场景数 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                        <div className="flex items-center gap-2 text-purple-600 mb-1">
                            <Film className="w-4 h-4" />
                            <span className="text-sm font-medium">总场景</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {stats.totalScenes}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                            内景: <span className="font-medium text-purple-600">{stats.sceneTypeStats.int}</span>
                            {' / '}
                            外景: <span className="font-medium text-teal-600">{stats.sceneTypeStats.ext}</span>
                        </div>
                    </div>

                    {/* 总对话数 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                        <div className="flex items-center gap-2 text-blue-600 mb-1">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">总对话</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {stats.totalDialogues}
                        </div>
                    </div>

                    {/* 角色数量 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                        <div className="flex items-center gap-2 text-green-600 mb-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-medium">角色数量</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {stats.totalCharacters.length}
                        </div>
                        {stats.totalCharacters.length > 0 && (
                            <div className="text-xs text-gray-500 mt-1 truncate" title={stats.totalCharacters.join(', ')}>
                                {stats.totalCharacters.slice(0, 3).join(', ')}
                                {stats.totalCharacters.length > 3 && '...'}
                            </div>
                        )}
                    </div>

                    {/* 预计时长 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                        <div className="flex items-center gap-2 text-orange-600 mb-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">预计时长</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {stats.totalDuration}
                        </div>
                    </div>

                    {/* 🆕 预估分镜数 */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                        <div className="flex items-center gap-2 text-pink-600 mb-1">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">预估分镜</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            ~{stats.estimatedPanelCount.max}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                            范围: {stats.estimatedPanelCount.min}-{stats.estimatedPanelCount.max} 个
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
});
