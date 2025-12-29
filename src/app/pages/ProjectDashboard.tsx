import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Users,
  MapPin,
  Box,
  Film,
  Clock,
  CheckCircle2,
  TrendingUp,
  FileText,
  Camera,
  Image as ImageIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import type { Project } from '../types';
import { projectStorage, chapterStorage } from '../utils/storage';
import { calculateProjectStats, formatDuration, getCharacterAppearances, getSceneUsageFrequency } from '../utils/projectStats';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

export function ProjectDashboard() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [characterStats, setCharacterStats] = useState<Record<string, number>>({});
  const [sceneStats, setSceneStats] = useState<Record<string, number>>({});

  useEffect(() => {
    const loadData = async () => {
      if (projectId) {
        const proj = await projectStorage.getById(projectId);
        if (proj) {
          // 计算统计数据
          const stats = await calculateProjectStats(projectId);
          setProject({ ...proj, stats });

          // 角色和场景统计
          const charStats = await getCharacterAppearances(projectId);
          const scnStats = await getSceneUsageFrequency(projectId);
          setCharacterStats(charStats);
          setSceneStats(scnStats);
        }
      }
    };
    loadData();
  }, [projectId]);

  if (!project || !project.stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">加载中...</p>
      </div>
    );
  }

  const stats = project.stats;
  const topCharacters = Object.entries(characterStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
  const topScenes = Object.entries(sceneStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/projects/${projectId}`}>{project.title}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>数据统计</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
          <p className="text-gray-600 mt-1">项目数据总览</p>
        </div>
        <Button onClick={() => navigate(`/projects/${projectId}`)}>
          返回书架
        </Button>
      </div>

      {/* 完成度进度条 */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            项目完成度
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">{stats.completionRate}%</span>
              <span className="text-sm opacity-90">
                {stats.completionRate < 30 && '刚刚起步'}
                {stats.completionRate >= 30 && stats.completionRate < 60 && '稳步推进'}
                {stats.completionRate >= 60 && stats.completionRate < 90 && '接近完成'}
                {stats.completionRate >= 90 && '即将大功告成'}
              </span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${stats.completionRate}%` }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3 text-sm opacity-90">
              <div>
                <CheckCircle2 className="w-4 h-4 inline mr-1" />
                原文编写
              </div>
              <div>
                <CheckCircle2 className="w-4 h-4 inline mr-1" />
                剧本改写
              </div>
              <div>
                <CheckCircle2 className="w-4 h-4 inline mr-1" />
                分镜制作
              </div>
              <div>
                <CheckCircle2 className="w-4 h-4 inline mr-1" />
                图片生成
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 核心数据统计 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-gray-600">
              <FileText className="w-4 h-4" />
              章节总数
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{stats.totalChapters}</div>
            <p className="text-xs text-gray-500 mt-1">个章节</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-gray-600">
              <Film className="w-4 h-4" />
              场景总数
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{stats.totalScenes}</div>
            <p className="text-xs text-gray-500 mt-1">个剧本场景</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-gray-600">
              <Camera className="w-4 h-4" />
              分镜总数
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">{stats.totalPanels}</div>
            <p className="text-xs text-gray-500 mt-1">个分镜画面</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              总时长
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">
              {Math.floor(stats.totalDuration / 60)}
            </div>
            <p className="text-xs text-gray-500 mt-1">分钟</p>
          </CardContent>
        </Card>
      </div>

      {/* 资源库统计 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              角色数量
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-indigo-600">{stats.charactersCount}</div>
            <p className="text-xs text-gray-500 mt-1">个角色</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              场景数量
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-600">{stats.scenesCount}</div>
            <p className="text-xs text-gray-500 mt-1">个场景</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-gray-600">
              <Box className="w-4 h-4" />
              道具数量
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-pink-600">{stats.propsCount}</div>
            <p className="text-xs text-gray-500 mt-1">个道具</p>
          </CardContent>
        </Card>
      </div>

      {/* 详细统计 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 角色出场统计 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              角色出场统计 TOP 5
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topCharacters.length > 0 ? (
              <div className="space-y-3">
                {topCharacters.map(([name, count], index) => (
                  <div key={name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                          {index + 1}
                        </span>
                        {name}
                      </span>
                      <span className="text-gray-600">{count} 次</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full h-2"
                        style={{ width: `${(count / topCharacters[0][1]) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">暂无角色出场数据</p>
            )}
          </CardContent>
        </Card>

        {/* 场景使用频率 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              场景使用频率 TOP 5
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topScenes.length > 0 ? (
              <div className="space-y-3">
                {topScenes.map(([location, count], index) => (
                  <div key={location} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium flex items-center gap-2">
                        <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                          {index + 1}
                        </span>
                        <span className="truncate max-w-[200px]">{location}</span>
                      </span>
                      <span className="text-gray-600">{count} 次</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 rounded-full h-2"
                        style={{ width: `${(count / topScenes[0][1]) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">暂无场景使用数据</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 快捷操作 */}
      <Card>
        <CardHeader>
          <CardTitle>快捷操作</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate(`/projects/${projectId}`)}
            >
              <FileText className="w-6 h-6" />
              <span>查看章节</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate(`/projects/${projectId}/assets`)}
            >
              <Users className="w-6 h-6" />
              <span>资源库</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate(`/projects/${projectId}/style`)}
            >
              <ImageIcon className="w-6 h-6" />
              <span>导演风格</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col gap-2"
              onClick={() => window.location.reload()}
            >
              <BarChart3 className="w-6 h-6" />
              <span>刷新统计</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
