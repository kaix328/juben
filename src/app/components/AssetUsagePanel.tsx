import { Users, Film, AlertCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import type { UsageLocation } from '../utils/assetTracker';

interface AssetUsagePanelProps {
  usageLocations: UsageLocation[];
  usageCount: number;
}

export function AssetUsagePanel({ usageLocations, usageCount }: AssetUsagePanelProps) {
  if (usageCount === 0) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-2 text-gray-500">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">此资源暂未被使用</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <Film className="w-4 h-4 text-blue-600" />
        <span className="font-semibold text-blue-900">
          使用情况 ({usageCount} 处)
        </span>
      </div>
      
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {usageLocations.map((location, index) => (
          <div key={index} className="bg-white rounded px-3 py-2 text-sm">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={location.type === 'script' ? 'default' : 'secondary'}>
                {location.type === 'script' ? '剧本' : '分镜'}
              </Badge>
              <span className="font-medium text-gray-900">{location.chapterTitle}</span>
            </div>
            {location.context && (
              <p className="text-gray-600 text-xs">{location.context}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
