/**
 * 风格应用确认对话框
 * 显示应用影响范围和预览对比
 */

import { useState } from 'react';
import { AlertCircle, CheckCircle, XCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import type { Character, Scene, Prop, Costume, DirectorStyle } from '../types';
import { PromptEngine } from '../utils/promptEngine';

interface StyleApplicationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  directorStyle: DirectorStyle;
  characters: Character[];
  scenes: Scene[];
  props: Prop[];
  costumes: Costume[];
  protectManualEdits: boolean;
  showPreview: boolean;
}

export function StyleApplicationDialog({
  isOpen,
  onClose,
  onConfirm,
  directorStyle,
  characters,
  scenes,
  props,
  costumes,
  protectManualEdits,
  showPreview,
}: StyleApplicationDialogProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  // 计算影响范围
  const calculateImpact = () => {
    let affectedCount = 0;
    let protectedCount = 0;
    let totalCount = 0;

    // 角色（全身图 + 脸部图）
    characters.forEach((char) => {
      totalCount += 2; // 全身 + 脸部
      if (protectManualEdits) {
        // 如果提示词已存在且非空，视为手动编辑
        if (char.fullBodyPrompt && char.fullBodyPrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
        if (char.facePrompt && char.facePrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
      } else {
        affectedCount += 2;
      }
    });

    // 场景（远景 + 中景 + 特写）
    scenes.forEach((scene) => {
      totalCount += 3;
      if (protectManualEdits) {
        if (scene.widePrompt && scene.widePrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
        if (scene.mediumPrompt && scene.mediumPrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
        if (scene.closeupPrompt && scene.closeupPrompt.trim()) {
          protectedCount++;
        } else {
          affectedCount++;
        }
      } else {
        affectedCount += 3;
      }
    });

    // 道具
    props.forEach((prop) => {
      totalCount++;
      if (protectManualEdits && prop.aiPrompt && prop.aiPrompt.trim()) {
        protectedCount++;
      } else {
        affectedCount++;
      }
    });

    // 服饰
    costumes.forEach((costume) => {
      totalCount++;
      if (protectManualEdits && costume.aiPrompt && costume.aiPrompt.trim()) {
        protectedCount++;
      } else {
        affectedCount++;
      }
    });

    return { affectedCount, protectedCount, totalCount };
  };

  const impact = calculateImpact();

  // 预览示例
  const getPreviewSamples = () => {
    const engine = new PromptEngine(directorStyle, { includeNegative: false });
    const samples: Array<{ type: string; name: string; before: string; after: string }> = [];

    // 角色示例
    if (characters.length > 0) {
      const char = characters[0];
      const before = char.fullBodyPrompt || '（未设置）';
      const after = engine.forCharacterFullBody(char).positive;
      samples.push({
        type: '角色',
        name: char.name,
        before,
        after,
      });
    }

    // 场景示例
    if (scenes.length > 0) {
      const scene = scenes[0];
      const before = scene.widePrompt || '（未设置）';
      const after = engine.forSceneWide(scene).positive;
      samples.push({
        type: '场景',
        name: scene.name,
        before,
        after,
      });
    }

    // 道具示例
    if (props.length > 0) {
      const prop = props[0];
      const before = prop.aiPrompt || '（未设置）';
      const after = engine.forProp(prop).positive;
      samples.push({
        type: '道具',
        name: prop.name,
        before,
        after,
      });
    }

    return samples;
  };

  const previewSamples = showPreview ? getPreviewSamples() : [];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* 标题 */}
        <div className="p-6 border-b bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <AlertCircle className="w-7 h-7 text-purple-600" />
            确认应用导演风格
          </h2>
          <p className="text-gray-600 mt-2">
            即将将导演风格应用到项目资源的AI提示词，请确认操作
          </p>
        </div>

        {/* 内容 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* 影响范围统计 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              影响范围统计
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center border border-blue-100">
                <div className="text-3xl font-bold text-blue-600">{impact.totalCount}</div>
                <div className="text-sm text-gray-600 mt-1">总提示词数</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-green-100">
                <div className="text-3xl font-bold text-green-600">{impact.affectedCount}</div>
                <div className="text-sm text-gray-600 mt-1">将被应用</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-orange-100">
                <div className="text-3xl font-bold text-orange-600">{impact.protectedCount}</div>
                <div className="text-sm text-gray-600 mt-1">受保护（跳过）</div>
              </div>
            </div>

            {protectManualEdits && impact.protectedCount > 0 && (
              <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>保护模式已开启：</strong>
                  {impact.protectedCount} 个已有提示词将被跳过，不会被覆盖
                </p>
              </div>
            )}
          </div>

          {/* 详细清单 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">详细清单</h3>

            {/* 角色 */}
            {characters.length > 0 && (
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 py-3 bg-purple-50 hover:bg-purple-100 transition-colors flex items-center justify-between"
                  onClick={() => toggleSection('characters')}
                >
                  <span className="font-medium text-purple-900">
                    角色 ({characters.length} 个，共 {characters.length * 2} 个提示词)
                  </span>
                  {expandedSection === 'characters' ? (
                    <ChevronDown className="w-5 h-5 text-purple-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-purple-600" />
                  )}
                </button>
                {expandedSection === 'characters' && (
                  <div className="p-4 bg-white space-y-2">
                    {characters.map((char) => (
                      <div key={char.id} className="text-sm text-gray-700 pl-4">
                        • {char.name} - 全身图、脸部图
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 场景 */}
            {scenes.length > 0 && (
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 py-3 bg-green-50 hover:bg-green-100 transition-colors flex items-center justify-between"
                  onClick={() => toggleSection('scenes')}
                >
                  <span className="font-medium text-green-900">
                    场景 ({scenes.length} 个，共 {scenes.length * 3} 个提示词)
                  </span>
                  {expandedSection === 'scenes' ? (
                    <ChevronDown className="w-5 h-5 text-green-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-green-600" />
                  )}
                </button>
                {expandedSection === 'scenes' && (
                  <div className="p-4 bg-white space-y-2">
                    {scenes.map((scene) => (
                      <div key={scene.id} className="text-sm text-gray-700 pl-4">
                        • {scene.name} - 远景、中景、特写
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 道具 */}
            {props.length > 0 && (
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 py-3 bg-orange-50 hover:bg-orange-100 transition-colors flex items-center justify-between"
                  onClick={() => toggleSection('props')}
                >
                  <span className="font-medium text-orange-900">道具 ({props.length} 个)</span>
                  {expandedSection === 'props' ? (
                    <ChevronDown className="w-5 h-5 text-orange-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-orange-600" />
                  )}
                </button>
                {expandedSection === 'props' && (
                  <div className="p-4 bg-white space-y-2">
                    {props.map((prop) => (
                      <div key={prop.id} className="text-sm text-gray-700 pl-4">
                        • {prop.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 服饰 */}
            {costumes.length > 0 && (
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-4 py-3 bg-pink-50 hover:bg-pink-100 transition-colors flex items-center justify-between"
                  onClick={() => toggleSection('costumes')}
                >
                  <span className="font-medium text-pink-900">服饰 ({costumes.length} 个)</span>
                  {expandedSection === 'costumes' ? (
                    <ChevronDown className="w-5 h-5 text-pink-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-pink-600" />
                  )}
                </button>
                {expandedSection === 'costumes' && (
                  <div className="p-4 bg-white space-y-2">
                    {costumes.map((costume) => (
                      <div key={costume.id} className="text-sm text-gray-700 pl-4">
                        • {costume.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 预览对比 */}
          {showPreview && previewSamples.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">提示词预览对比（示例）</h3>
              {previewSamples.map((sample, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                      {sample.type}
                    </span>
                    <span>{sample.name}</span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {/* 应用前 */}
                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                        <XCircle className="w-3 h-3 text-red-500" />
                        应用前
                      </div>
                      <div className="p-3 bg-red-50 border border-red-200 rounded text-sm text-gray-700 font-mono max-h-24 overflow-y-auto">
                        {sample.before}
                      </div>
                    </div>

                    {/* 应用后 */}
                    <div>
                      <div className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        应用后
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded text-sm text-gray-700 font-mono max-h-24 overflow-y-auto">
                        {sample.after}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 警告提示 */}
          {!protectManualEdits && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-900">注意</p>
                <p className="text-sm text-yellow-800 mt-1">
                  保护模式未开启，所有提示词（包括已手动编辑的）都会被覆盖。
                  建议在"风格应用设置"中开启"保护手动编辑的提示词"。
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 底部按钮 */}
        <div className="p-6 border-t bg-gray-50 flex gap-3 justify-end">
          <Button variant="outline" onClick={onClose} className="px-6">
            取消
          </Button>
          <Button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-6 bg-purple-600 hover:bg-purple-700"
          >
            确认应用
          </Button>
        </div>
      </div>
    </div>
  );
}
