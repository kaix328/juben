/**
 * 风格应用设置组件
 * 控制导演风格如何应用到资源
 */

import { Settings, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import type { StyleApplicationSettings } from '../types';

interface StyleApplicationSettingsProps {
  settings: StyleApplicationSettings;
  onSettingsChange: (settings: StyleApplicationSettings) => void;
}

export function StyleApplicationSettingsPanel({
  settings,
  onSettingsChange,
}: StyleApplicationSettingsProps) {
  const updateSetting = <K extends keyof StyleApplicationSettings>(
    key: K,
    value: StyleApplicationSettings[K]
  ) => {
    onSettingsChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Settings className="w-5 h-5 text-blue-600" />
          风格应用设置
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* 应用模式 */}
        <div className="p-4 bg-white rounded-lg border border-blue-100 space-y-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 mb-1">应用模式</h4>
              <p className="text-sm text-gray-600 mb-3">
                选择导演风格如何应用到资源的AI提示词
              </p>
              <div className="flex gap-3">
                <button
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                    settings.mode === 'manual'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => updateSetting('mode', 'manual')}
                >
                  <div className="font-medium">手动模式</div>
                  <div className="text-xs mt-1">需要手动点击"应用导演风格"按钮</div>
                </button>
                <button
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                    settings.mode === 'auto'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => updateSetting('mode', 'auto')}
                >
                  <div className="font-medium">自动模式</div>
                  <div className="text-xs mt-1">修改导演风格后自动应用到全部资源</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 新建资源自动应用 */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex-1 pr-4">
            <Label className="text-base font-medium text-gray-900">
              新建资源自动应用风格
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              创建新的角色、场景等资源时，自动将导演风格应用到AI提示词
            </p>
          </div>
          <Switch
            checked={settings.autoApplyToNew}
            onCheckedChange={(checked) => updateSetting('autoApplyToNew', checked)}
          />
        </div>

        {/* 保护手动编辑 */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex-1 pr-4">
            <Label className="text-base font-medium text-gray-900">
              保护手动编辑的提示词
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              批量应用导演风格时，跳过已经手动编辑过的提示词，防止覆盖
            </p>
            <p className="text-xs text-orange-600 mt-1">
              💡 推荐开启：避免意外覆盖你精心调整的提示词
            </p>
          </div>
          <Switch
            checked={settings.protectManualEdits}
            onCheckedChange={(checked) => updateSetting('protectManualEdits', checked)}
          />
        </div>

        {/* 应用前确认 */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex-1 pr-4">
            <Label className="text-base font-medium text-gray-900">
              批量应用前显示确认
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              点击"应用导演风格到全部"时，先显示确认对话框和影响范围
            </p>
          </div>
          <Switch
            checked={settings.confirmBeforeApply}
            onCheckedChange={(checked) => updateSetting('confirmBeforeApply', checked)}
          />
        </div>

        {/* 显示预览对比 */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex-1 pr-4">
            <Label className="text-base font-medium text-gray-900">
              应用前显示预览对比
            </Label>
            <p className="text-sm text-gray-600 mt-1">
              在确认对话框中显示应用前后的提示词对比
            </p>
            <p className="text-xs text-gray-500 mt-1">
              注意：预览大量资源时可能稍慢
            </p>
          </div>
          <Switch
            checked={settings.showPreview}
            onCheckedChange={(checked) => updateSetting('showPreview', checked)}
          />
        </div>

        {/* 当前设置总结 */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <h4 className="font-medium text-purple-900 mb-2 flex items-center gap-2">
            <Info className="w-4 h-4" />
            当前配置总结
          </h4>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>
              • <strong>应用模式：</strong>
              {settings.mode === 'manual' ? '手动模式（需要手动点击应用）' : '自动模式（修改后自动应用）'}
            </li>
            <li>
              • <strong>新建资源：</strong>
              {settings.autoApplyToNew ? '自动应用导演风格' : '不自动应用'}
            </li>
            <li>
              • <strong>手动编辑：</strong>
              {settings.protectManualEdits ? '保护，不会被覆盖' : '不保护，可能被覆盖'}
            </li>
            <li>
              • <strong>批量应用：</strong>
              {settings.confirmBeforeApply ? '显示确认对话框' : '直接应用'}
            </li>
            <li>
              • <strong>预览对比：</strong>
              {settings.showPreview ? '显示前后对比' : '不显示'}
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
