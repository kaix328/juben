import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { Save } from 'lucide-react';
import { chapterStorage } from '../utils/storage';
import type { Chapter } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export function ChapterEditor() {
  const { chapterId } = useParams<{ chapterId: string }>();
  // 使用 useLiveQuery 实时获取章节数据
  const chapter = useLiveQuery(
    () => (chapterId ? chapterStorage.getById(chapterId) : undefined),
    [chapterId]
  );

  const [originalText, setOriginalText] = useState('');

  // 当 chapter 加载或变化时，更新本地 originalText 状态
  // 只在初次加载或切换章节时更新，避免输入时被覆盖
  useEffect(() => {
    if (chapter && originalText === '') {
      setOriginalText(chapter.originalText || '');
    }
  }, [chapter]);

  const handleSave = async () => {
    if (!chapter) return;

    const updated = {
      ...chapter,
      originalText,
    };

    await chapterStorage.save(updated);
    toast.success('原文已保存');
  };

  if (!chapter) {
    return <div className="text-center py-20">章节不存在</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{chapter.title}</CardTitle>
            <p className="text-gray-600 text-sm mt-1">在此编辑章节原文</p>
          </div>
          <Button onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" />
            保存
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 text-sm">原文内容</label>
              <span className="text-gray-500 text-sm">{originalText.length} 字</span>
            </div>
            <Textarea
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="请输入或粘贴章节原文..."
              rows={20}
              className="font-mono"
            />
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-blue-900 mb-2">提示</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• 保存原文后，可以在"剧本改写"页面使用AI自动提取剧本</li>
              <li>• 建议保持段落清晰，有助于AI更好地理解内容</li>
              <li>• 对话和动作描述分开编写，提取效果更佳</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
