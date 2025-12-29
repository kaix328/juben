import React from 'react';
import { Users, MapPin, Package, Shirt, BarChart3 } from 'lucide-react';

interface Stats {
    characters: { total: number; withImages: number };
    scenes: { total: number; withImages: number };
    props: { total: number; withImages: number };
    costumes: { total: number; withImages: number };
    completionRate: number;
}

interface AssetStatsPanelProps {
    stats: Stats | null;
}

export const AssetStatsPanel: React.FC<AssetStatsPanelProps> = ({ stats }) => {
    if (!stats) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-purple-600">角色</span>
                </div>
                <p className="font-bold text-purple-900">{stats.characters.total}</p>
                <p className="text-xs text-purple-600">{stats.characters.withImages} 已生成图</p>
            </div>

            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-600">场景</span>
                </div>
                <p className="font-bold text-green-900">{stats.scenes.total}</p>
                <p className="text-xs text-green-600">{stats.scenes.withImages} 已生成图</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-orange-600" />
                    <span className="text-xs text-orange-600">道具</span>
                </div>
                <p className="font-bold text-orange-900">{stats.props.total}</p>
                <p className="text-xs text-orange-600">{stats.props.withImages} 已生成图</p>
            </div>

            <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                <div className="flex items-center gap-2 mb-1">
                    <Shirt className="w-4 h-4 text-pink-600" />
                    <span className="text-xs text-pink-600">服饰</span>
                </div>
                <p className="font-bold text-pink-900">{stats.costumes.total}</p>
                <p className="text-xs text-pink-600">{stats.costumes.withImages} 已生成图</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-blue-600">完成度</span>
                </div>
                <p className="font-bold text-blue-900">{stats.completionRate}%</p>
                <p className="text-xs text-blue-600">资源完整度</p>
            </div>
        </div>
    );
};
