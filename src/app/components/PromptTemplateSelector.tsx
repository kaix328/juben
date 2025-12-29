import { useState } from 'react';
import { Wand2, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { PROMPT_TEMPLATES } from '../utils/promptOptimizer';

interface PromptTemplateSelectorProps {
  type: 'character' | 'scene' | 'prop' | 'costume';
  subType?: 'fullBody' | 'face' | 'wide' | 'medium' | 'closeup';
  onSelect: (template: string) => void;
  className?: string;
}

export function PromptTemplateSelector({
  type,
  subType,
  onSelect,
  className = '',
}: PromptTemplateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getTemplates = () => {
    if (type === 'character' && subType) {
      return PROMPT_TEMPLATES.character[subType as 'fullBody' | 'face'];
    }
    if (type === 'scene' && subType) {
      return PROMPT_TEMPLATES.scene[subType as 'wide' | 'medium' | 'closeup'];
    }
    if (type === 'prop') {
      return PROMPT_TEMPLATES.prop;
    }
    if (type === 'costume') {
      return PROMPT_TEMPLATES.costume;
    }
    return [];
  };

  const templates = getTemplates();

  const handleSelect = (template: string) => {
    onSelect(template);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Wand2 className="w-3 h-3" />
        使用模板
        <ChevronDown className="w-3 h-3" />
      </Button>

      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* 下拉菜单 */}
          <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
            <div className="p-2">
              <div className="text-xs text-gray-500 px-2 py-1 font-medium">
                选择提示词模板
              </div>
              {templates.map((template, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(template)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-700 transition-colors"
                >
                  {template}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
