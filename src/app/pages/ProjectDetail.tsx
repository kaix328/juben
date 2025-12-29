import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useParams, Link } from 'react-router-dom';
import { Plus, FileText, Film, Layers, Library, BarChart3, Palette } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import { EmptyState } from '../components/ui/empty-state';
import { projectStorage, chapterStorage, generateId } from '../utils/storage';
import type { Project, Chapter } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { DialogDescription } from '../components/ui/dialog';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  const project = useLiveQuery(
    () => projectId ? projectStorage.getById(projectId) : Promise.resolve(undefined),
    [projectId]
  );

  const chapters = useLiveQuery(
    () => projectId ? chapterStorage.getByProjectId(projectId) : Promise.resolve([]),
    [projectId]
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newChapterTitle, setNewChapterTitle] = useState('');

  const handleCreateChapter = async () => {
    if (!newChapterTitle || !projectId) return;

    const chapter: Chapter = {
      id: generateId(),
      projectId: projectId,
      title: newChapterTitle,
      orderIndex: chapters?.length || 0,
      originalText: '',
      createdAt: new Date().toISOString(),
    };

    await chapterStorage.save(chapter);
    setNewChapterTitle('');
    setIsDialogOpen(false);
  };

  if (!project) {
    return <div className="text-center py-20">项目不存在</div>;
  }

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* 项目信息 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-gray-900 mb-2 text-2xl font-bold">{project.title}</h1>
            <p className="text-gray-600">{project.description}</p>
          </div>
          <div className="flex gap-2">
            <Link to={`/projects/${projectId}/dashboard`}>
              <Button variant="outline" className="gap-2">
                <BarChart3 className="w-4 h-4" />
                数据统计
              </Button>
            </Link>
            <Link to={`/projects/${projectId}/style`}>
              <Button variant="outline" className="gap-2">
                <Palette className="w-4 h-4" />
                导演风格
              </Button>
            </Link>
            <Link to={`/projects/${projectId}/assets`}>
              <Button variant="outline" className="gap-2">
                <Library className="w-4 h-4" />
                项目库
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 章节管理 */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>章节列表</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                新建章节
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>创建新章节</DialogTitle>
                <DialogDescription>为当前项目添加新的章节</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="chapter-title">章节标题</Label>
                  <Input
                    id="chapter-title"
                    placeholder="例如：第一章 初次相遇"
                    value={newChapterTitle}
                    onChange={(e) => setNewChapterTitle(e.target.value)}
                  />
                </div>
                <Button onClick={handleCreateChapter} className="w-full">
                  创建章节
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {!chapters ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : chapters.length === 0 ? (
            <EmptyState
              icon={FileText}
              title="还没有章节"
              description="开始编写您的第一个剧本章节。"
              actionLabel="新建章节"
              onAction={() => setIsDialogOpen(true)}
            />
          ) : (
            <div className="space-y-3">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow group"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-gray-900 font-medium">{chapter.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm">
                        {chapter.originalText ? `${chapter.originalText.length} 字` : '未编辑'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <Link to={`/projects/${projectId}/chapter/${chapter.id}`}>
                      <Button variant="outline" size="sm" className="w-full gap-2 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700">
                        <FileText className="w-4 h-4" />
                        原文编辑
                      </Button>
                    </Link>
                    <Link to={`/projects/${projectId}/script/${chapter.id}`}>
                      <Button variant="outline" size="sm" className="w-full gap-2 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
                        <Film className="w-4 h-4" />
                        剧本改写
                      </Button>
                    </Link>
                    <Link to={`/projects/${projectId}/storyboard/${chapter.id}`}>
                      <Button variant="outline" size="sm" className="w-full gap-2 hover:border-green-300 hover:bg-green-50 hover:text-green-700">
                        <Layers className="w-4 h-4" />
                        分镜制作
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}