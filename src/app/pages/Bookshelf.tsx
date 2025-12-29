import { useState, useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Link } from 'react-router-dom';
import { Plus, Book, Calendar, Trash2, AlertTriangle, Search, SortDesc } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import { EmptyState } from '../components/ui/empty-state';
import { projectStorage, generateId } from '../utils/storage';
import type { Project } from '../types';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

export function Bookshelf() {
  const projects = useLiveQuery(() => projectStorage.getAll());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
  });

  // 🆕 搜索和排序状态
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'updatedAt' | 'createdAt' | 'title'>('updatedAt');

  // 删除确认对话框状态
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // 🆕 过滤和排序项目
  const filteredProjects = useMemo(() => {
    if (!projects) return [];

    let result = projects.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.description || '').toLowerCase().includes(searchQuery.toLowerCase())
    );

    result.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      const dateA = new Date(sortBy === 'updatedAt' ? (a.updatedAt || a.createdAt) : a.createdAt);
      const dateB = new Date(sortBy === 'updatedAt' ? (b.updatedAt || b.createdAt) : b.createdAt);
      return dateB.getTime() - dateA.getTime(); // 降序
    });

    return result;
  }, [projects, searchQuery, sortBy]);

  const handleCreateProject = async () => {
    if (!newProject.title) return;

    const project: Project = {
      id: generateId(),
      title: newProject.title,
      description: newProject.description,
      cover: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await projectStorage.save(project);
    setNewProject({ title: '', description: '' });
    setIsDialogOpen(false);
    toast.success('项目创建成功');
  };

  // 打开删除确认对话框
  const handleDeleteClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault(); // 阻止 Link 导航
    e.stopPropagation();
    setProjectToDelete(project);
    setDeleteDialogOpen(true);
  };

  // 确认删除
  const handleConfirmDelete = async () => {
    if (!projectToDelete) return;

    setIsDeleting(true);
    try {
      await projectStorage.delete(projectToDelete.id);
      toast.success(`已删除项目"${projectToDelete.title}"`);
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
    } catch (error) {
      toast.error('删除失败，请重试');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-gray-900">我的书架</h1>
          <p className="text-gray-600 mt-2">管理您的AI漫剧作品</p>
        </div>

        {/* 🆕 搜索和排序 */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="搜索项目..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-[200px]"
            />
          </div>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
            <SelectTrigger className="w-[130px]">
              <SortDesc className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="updatedAt">最近修改</SelectItem>
              <SelectItem value="createdAt">创建时间</SelectItem>
              <SelectItem value="title">项目名称</SelectItem>
            </SelectContent>
          </Select>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Plus className="w-5 h-5" />
                新建项目
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>创建新项目</DialogTitle>
                <DialogDescription>填写项目基本信息，创建新的AI漫剧项目</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="title">项目名称</Label>
                  <Input
                    id="title"
                    placeholder="请输入项目名称"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">项目简介</Label>
                  <Textarea
                    id="description"
                    placeholder="请输入项目简介"
                    rows={4}
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  />
                </div>
                <Button onClick={handleCreateProject} className="w-full">
                  创建项目
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* 删除确认对话框 */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="w-5 h-5" />
              确认删除项目
            </DialogTitle>
            <DialogDescription>
              您确定要删除项目"{projectToDelete?.title}"吗？
              <br />
              <span className="text-red-500 font-medium">此操作不可撤销，项目相关的所有章节、剧本、分镜和资源都将被删除。</span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={isDeleting}
            >
              取消
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="gap-2"
            >
              {isDeleting ? (
                <>删除中...</>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  确认删除
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 项目列表 */}
      {!projects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-[300px] border rounded-xl overflow-hidden bg-white shadow-sm space-y-3">
              <Skeleton className="h-[180px] w-full" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <EmptyState
          icon={Book}
          title={searchQuery ? '没有找到匹配的项目' : '还没有项目'}
          description={searchQuery ? '尝试使用其他关键词搜索' : '创建一个新项目，开始您的创作之旅'}
          actionLabel={searchQuery ? undefined : '新建项目'}
          onAction={searchQuery ? undefined : () => setIsDialogOpen(true)}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative group">
              <Link to={`/projects/${project.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    {project.cover ? (
                      <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <Book className="w-16 h-16 text-purple-400" />
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-gray-900 mb-2 truncate font-medium">{project.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
                      {project.description || '暂无简介...'}
                    </p>
                  </CardContent>
                  <CardFooter className="text-gray-500 text-sm flex items-center gap-2 pt-2 border-t mt-4">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(project.updatedAt || project.createdAt).toLocaleDateString()}</span>
                  </CardFooter>
                </Card>
              </Link>

              {/* 删除按钮 - 悬停时显示 */}
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                onClick={(e) => handleDeleteClick(e, project)}
                title="删除项目"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}