import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Palette, Save, Sparkles, Wand2, RotateCcw, RefreshCw, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { StyleApplicationSettingsPanel } from '../components/StyleApplicationSettings';
import type { Project, DirectorStyle, StyleApplicationSettings, Storyboard, Chapter } from '../types';
import { projectStorage, chapterStorage, storyboardStorage } from '../utils/storage';
import { DIRECTOR_STYLE_PRESETS } from '../utils/promptGenerator';
import { toast } from 'sonner';
import { useProjectStore } from '../store/useProjectStore';
import { useConfigStore } from '../store/useConfigStore';
import { optimizePrompt } from '../utils/volcApi';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";

// 默认风格应用设置
const DEFAULT_STYLE_SETTINGS: StyleApplicationSettings = {
  mode: 'manual',
  autoApplyToNew: true,
  protectManualEdits: true,
  confirmBeforeApply: true,
  showPreview: true,
};

export function DirectorStyleEditor() {
  const { projectId } = useParams<{ projectId: string }>();

  // Zustand Stores
  const { currentProject, loadProject, updateProject } = useProjectStore();
  const { apiSettings } = useConfigStore();

  const isMountedRef = useRef(true);

  // 局部状态仅保留临时编辑的 style (为了避免输入时的性能抖动/控制)
  const [style, setStyle] = useState<DirectorStyle>({
    artStyle: '',
    colorTone: '',
    lightingStyle: '',
    cameraStyle: '',
    mood: '',
    customPrompt: '',
    negativePrompt: '',
    aspectRatio: '16:9',
    videoFrameRate: '24',
    motionIntensity: 'normal'
  });

  const [styleSettings, setStyleSettings] = useState<StyleApplicationSettings>(DEFAULT_STYLE_SETTINGS);

  // 安全的toast封装,确保在组件卸载后不触发
  const safeToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    // 使用requestAnimationFrame确保在下一帧执行,避免unmount冲突
    requestAnimationFrame(() => {
      if (isMountedRef.current) {
        if (type === 'success') {
          toast.success(message);
        } else {
          toast.error(message);
        }
      }
    });
  }, []);

  // 安全的style更新,使用函数式更新避免闭包陷阱
  const safeUpdateStyle = useCallback(<K extends keyof DirectorStyle>(key: K, value: DirectorStyle[K]) => {
    if (isMountedRef.current) {
      setStyle(prev => ({ ...prev, [key]: value }));
    }
  }, []);

  // 安全的styleSettings更新
  const safeUpdateStyleSettings = useCallback((newSettings: StyleApplicationSettings) => {
    if (!isMountedRef.current) return;

    setStyleSettings(newSettings);

    // 延迟localStorage写入,避免在unmount过程中执行
    requestAnimationFrame(() => {
      if (isMountedRef.current && projectId) {
        try {
          localStorage.setItem(`styleSettings_${projectId}`, JSON.stringify(newSettings));
          safeToast('应用设置已保存');
        } catch (error) {
          console.error('Failed to save settings:', error);
        }
      }
    });
  }, [projectId, safeToast]);

  useEffect(() => {
    isMountedRef.current = true;

    if (projectId) {
      loadProject(projectId);

      // 加载本地风格应用设置
      const savedSettings = localStorage.getItem(`styleSettings_${projectId}`);
      if (savedSettings && isMountedRef.current) {
        setStyleSettings(JSON.parse(savedSettings));
      }
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [projectId, loadProject]);

  // 当全局项目加载完成后，同步本地编辑状态
  useEffect(() => {
    if (currentProject?.directorStyle) {
      setStyle(currentProject.directorStyle);
    }
  }, [currentProject]);

  const handleSave = async () => {
    if (!currentProject || !isMountedRef.current) return;

    // 🆕 检测风格是否有变化
    const oldStyle = currentProject.directorStyle;
    const hasStyleChanged = JSON.stringify(oldStyle) !== JSON.stringify(style);

    const updatedProject = {
      ...currentProject,
      directorStyle: style,
      updatedAt: new Date().toISOString()
    };

    try {
      await updateProject(updatedProject);
      safeToast('导演风格已保存并同步至全局');

      // 🆕 如果风格有变化，提示用户同步项目库
      if (hasStyleChanged && oldStyle) {
        setTimeout(() => {
          if (isMountedRef.current) {
            toast.info('💡 导演风格已更新，建议前往项目库点击"同步风格"按钮更新所有资源提示词', {
              duration: 8000,
              action: {
                label: '前往项目库',
                onClick: () => window.location.href = `/projects/${projectId}/assets`
              }
            });
          }
        }, 1000);
      }
    } catch (error) {
      safeToast('保存失败', 'error');
    }
  };

  const handleApplyPreset = (presetName: string) => {
    if (!isMountedRef.current) return;

    const preset = DIRECTOR_STYLE_PRESETS[presetName];
    if (preset) {
      setStyle(preset);
      safeToast(`已应用 ${presetName}`);
    }
  };

  // 🆕 建议4：应用风格到所有分镜的功能
  const [isApplyingToAll, setIsApplyingToAll] = useState(false);

  const handleApplyStyleToAllPanels = useCallback(async () => {
    if (!currentProject || !projectId || !isMountedRef.current) return;

    // 先保存当前风格
    await handleSave();

    const confirmed = window.confirm(
      '确定要将当前导演风格应用到项目中所有分镜的提示词吗？\n\n' +
      '这将为每个分镜重新生成优化后的AI提示词，可能需要一些时间。'
    );
    if (!confirmed) return;

    setIsApplyingToAll(true);
    const toastId = 'apply-style-to-all';
    toast.loading('正在加载项目分镜...', { id: toastId });

    try {
      // 1. 获取所有章节
      const chapters = await chapterStorage.getByProjectId(projectId);
      if (!chapters || chapters.length === 0) {
        toast.warning('项目中没有章节', { id: toastId });
        setIsApplyingToAll(false);
        return;
      }

      // 2. 获取所有分镜
      let totalPanels = 0;
      let processedPanels = 0;
      const storyboards: Storyboard[] = [];

      for (const chapter of chapters) {
        const sb = await storyboardStorage.getByChapterId(chapter.id);
        if (sb && sb.panels && sb.panels.length > 0) {
          storyboards.push(sb);
          totalPanels += sb.panels.length;
        }
      }

      if (totalPanels === 0) {
        toast.warning('项目中没有分镜面板', { id: toastId });
        setIsApplyingToAll(false);
        return;
      }

      toast.loading(`正在更新 ${totalPanels} 个分镜的提示词...`, { id: toastId });

      // 3. 批量更新每个分镜的提示词
      for (const storyboard of storyboards) {
        const updatedPanels = await Promise.all(
          storyboard.panels.map(async (panel) => {
            try {
              // 使用 optimizePrompt 重新生成提示词（传递完整风格）
              const newPrompt = await optimizePrompt(
                panel.description || '',
                style,  // 传递完整的导演风格对象
                'storyboard'
              );
              processedPanels++;
              toast.loading(`已处理 ${processedPanels}/${totalPanels} 个分镜...`, { id: toastId });

              return {
                ...panel,
                aiPrompt: newPrompt,
                appliedStyleHash: `style_${Date.now().toString(16).substring(0, 8)}`,
                generatedAt: new Date().toISOString()
              };
            } catch (error) {
              console.error(`Failed to update panel ${panel.id}:`, error);
              processedPanels++;
              return panel; // 保持原样
            }
          })
        );

        // 保存更新后的分镜
        await storyboardStorage.save({
          ...storyboard,
          panels: updatedPanels,
          updatedAt: new Date().toISOString()
        });
      }

      toast.success(`已成功更新 ${processedPanels} 个分镜的提示词！`, { id: toastId });
    } catch (error) {
      console.error('Failed to apply style to all panels:', error);
      toast.error('应用风格时出错，请稍后重试', { id: toastId });
    } finally {
      setIsApplyingToAll(false);
    }
  }, [currentProject, projectId, style, handleSave]);

  if (!currentProject) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">加载项目配置中...</p>
      </div>
    );
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
            <BreadcrumbLink href={`/projects/${projectId}`}>{currentProject.title}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>导演风格</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Palette className="w-8 h-8" />
            导演风格设定
          </h1>
          <p className="text-gray-600 mt-1">为整个项目设定统一的视觉风格，将自动应用到所有AI提示词</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              setStyle({
                artStyle: '',
                colorTone: '',
                lightingStyle: '',
                cameraStyle: '',
                mood: '',
                customPrompt: '',
                negativePrompt: '',
                aspectRatio: '16:9',
                videoFrameRate: '24',
                motionIntensity: 'normal'
              });
              safeToast('已重置所有风格设置');
            }}
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            重置
          </Button>
          <Button onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" />
            保存风格
          </Button>
          {/* 🆕 建议4：应用到所有分镜按钮 */}
          <Button
            variant="secondary"
            onClick={handleApplyStyleToAllPanels}
            disabled={isApplyingToAll}
            className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
          >
            {isApplyingToAll ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Layers className="w-4 h-4" />
            )}
            {isApplyingToAll ? '正在应用...' : '应用到所有分镜'}
          </Button>
        </div>
      </div>

      {/* 风格预设 */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-purple-600" />
            风格预设模板
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.keys(DIRECTOR_STYLE_PRESETS).map(presetName => (
              <Button
                key={presetName}
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2 hover:bg-purple-100 hover:border-purple-400"
                onClick={() => handleApplyPreset(presetName)}
              >
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">{presetName}</span>
              </Button>
            ))}
          </div>
          <p className="text-sm text-purple-700 mt-4">
            💡 点击预设模板可快速应用经典电影风格，也可以自定义修改
          </p>
        </CardContent>
      </Card>

      {/* 风格参数设置 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 艺术风格 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">艺术风格</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择艺术风格</Label>
            <Select value={style.artStyle} onValueChange={(value) => safeUpdateStyle('artStyle', value)}>
              <SelectTrigger>
                <SelectValue placeholder="选择艺术风格" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="写实主义">写实主义</SelectItem>
                <SelectItem value="手绘动画">手绘动画</SelectItem>
                <SelectItem value="唯美写实">唯美写实</SelectItem>
                <SelectItem value="赛博朋克">赛博朋克</SelectItem>
                <SelectItem value="复古胶片">复古胶片</SelectItem>
                <SelectItem value="黑白胶片">黑白胶片</SelectItem>
                <SelectItem value="水彩风格">水彩风格</SelectItem>
                <SelectItem value="油画风格">油画风格</SelectItem>
                <SelectItem value="漫画风格">漫画风格</SelectItem>
                <SelectItem value="像素艺术">像素艺术</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              定义画面的整体艺术表现形式
            </p>
          </CardContent>
        </Card>

        {/* 色调 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">色调设定</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择色调</Label>
            <Select value={style.colorTone} onValueChange={(value) => safeUpdateStyle('colorTone', value)}>
              <SelectTrigger>
                <SelectValue placeholder="选择色调" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="温暖色调">温暖色调</SelectItem>
                <SelectItem value="冷色调">冷色调</SelectItem>
                <SelectItem value="中性色调">中性色调</SelectItem>
                <SelectItem value="高饱和度">高饱和度</SelectItem>
                <SelectItem value="低饱和度">低饱和度</SelectItem>
                <SelectItem value="霓虹色彩">霓虹色彩</SelectItem>
                <SelectItem value="黑白高对比">黑白高对比</SelectItem>
                <SelectItem value="柔和色彩">柔和色彩</SelectItem>
                <SelectItem value="复古色调">复古色调</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              设定画面的主色调和色彩倾向
            </p>
          </CardContent>
        </Card>

        {/* 光照风格 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">光照风格</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择光照风格</Label>
            <Select value={style.lightingStyle} onValueChange={(value) => safeUpdateStyle('lightingStyle', value)}>
              <SelectTrigger>
                <SelectValue placeholder="选择光照风格" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="自然光">自然光</SelectItem>
                <SelectItem value="柔和光线">柔和光线</SelectItem>
                <SelectItem value="戏剧性光影">戏剧性光影</SelectItem>
                <SelectItem value="强对比光">强对比光</SelectItem>
                <SelectItem value="霓虹灯光">霓虹灯光</SelectItem>
                <SelectItem value="黄金时刻">黄金时刻（Golden Hour）</SelectItem>
                <SelectItem value="蓝调时刻">蓝调时刻（Blue Hour）</SelectItem>
                <SelectItem value="强烈阴影">强烈阴影</SelectItem>
                <SelectItem value="均匀照明">均匀照明</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              控制画面的光影效果和氛围
            </p>
          </CardContent>
        </Card>

        {/* 镜头风格 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">镜头风格</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择镜头风格</Label>
            <Select value={style.cameraStyle} onValueChange={(value) => safeUpdateStyle('cameraStyle', value)}>
              <SelectTrigger>
                <SelectValue placeholder="选择镜头风格" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="电影感">电影感（Cinematic）</SelectItem>
                <SelectItem value="纪实风格">纪实风格（Documentary）</SelectItem>
                <SelectItem value="梦幻风格">梦幻风格（Dreamy）</SelectItem>
                <SelectItem value="IMAX">IMAX 大画幅</SelectItem>
                <SelectItem value="手持摄影">手持摄影（Handheld）</SelectItem>
                <SelectItem value="稳定器">稳定器拍摄（Gimbal）</SelectItem>
                <SelectItem value="广角镜头">广角镜头</SelectItem>
                <SelectItem value="长焦镜头">长焦镜头</SelectItem>
                <SelectItem value="鱼眼镜头">鱼眼镜头</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              定义镜头的拍摄风格和视角
            </p>
          </CardContent>
        </Card>

        {/* 情绪氛围 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">情绪氛围</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择情绪氛围</Label>
            <Select value={style.mood} onValueChange={(value) => safeUpdateStyle('mood', value)}>
              <SelectTrigger>
                <SelectValue placeholder="选择情绪氛围" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="温馨">温馨</SelectItem>
                <SelectItem value="紧张">紧张</SelectItem>
                <SelectItem value="神秘">神秘</SelectItem>
                <SelectItem value="欢快">欢快</SelectItem>
                <SelectItem value="悲伤">悲伤</SelectItem>
                <SelectItem value="浪漫">浪漫</SelectItem>
                <SelectItem value="恐怖">恐怖</SelectItem>
                <SelectItem value="史诗">史诗感</SelectItem>
                <SelectItem value="忧郁">忧郁</SelectItem>
                <SelectItem value="激动">激动人心</SelectItem>
                <SelectItem value="宁静">宁静</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              设定画面传递的整体情绪
            </p>
          </CardContent>
        </Card>

        {/* 🆕 画面比例 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">画面比例</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择画面比例</Label>
            <Select value={style.aspectRatio || '16:9'} onValueChange={(value) => safeUpdateStyle('aspectRatio', value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="选择画面比例" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16:9">16:9（电影/横屏）</SelectItem>
                <SelectItem value="4:3">4:3（传统电视）</SelectItem>
                <SelectItem value="1:1">1:1（方形/社交媒体）</SelectItem>
                <SelectItem value="9:16">9:16（竖屏/短视频）</SelectItem>
                <SelectItem value="21:9">21:9（超宽屏/电影院）</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              定义生成图片和视频的宽高比
            </p>
          </CardContent>
        </Card>

        {/* 🆕 视频帧率 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">视频帧率</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择帧率</Label>
            <Select value={style.videoFrameRate || '24'} onValueChange={(value) => safeUpdateStyle('videoFrameRate', value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="选择帧率" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24">24 fps（电影标准）</SelectItem>
                <SelectItem value="30">30 fps（电视/网络）</SelectItem>
                <SelectItem value="60">60 fps（流畅/游戏）</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              视频的帧率设置，影响流畅度
            </p>
          </CardContent>
        </Card>

        {/* 🆕 运动强度 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">运动强度</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>选择运动强度</Label>
            <Select value={style.motionIntensity || 'normal'} onValueChange={(value) => safeUpdateStyle('motionIntensity', value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="选择运动强度" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="subtle">微妙（细腻动作）</SelectItem>
                <SelectItem value="normal">正常（标准运动）</SelectItem>
                <SelectItem value="dynamic">强烈（动态激烈）</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              控制视频中的运动幅度和动态感
            </p>
          </CardContent>
        </Card>

        {/* 自定义提示词 */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">自定义提示词</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>额外的风格描述（英文效果更佳）</Label>
            <Textarea
              value={style.customPrompt}
              onChange={(e) => safeUpdateStyle('customPrompt', e.target.value)}
              rows={4}
              placeholder="例如：Studio Ghibli style, hand-drawn animation, watercolor aesthetic, nature elements..."
              className="font-mono text-sm"
            />
            <p className="text-xs text-gray-500">
              可以添加更具体的风格描述，这些内容会自动添加到所有AI提示词中
            </p>
          </CardContent>
        </Card>

        {/* 🆕 负面提示词 */}
        <Card className="lg:col-span-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-lg text-red-700">负面提示词（Negative Prompt）</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label>需要避免的元素（英文）</Label>
            <Textarea
              value={style.negativePrompt || ''}
              onChange={(e) => safeUpdateStyle('negativePrompt', e.target.value)}
              rows={3}
              placeholder="deformed, distorted, bad anatomy, extra fingers, missing limbs, blurry, lowres, watermark, text..."
              className="font-mono text-sm bg-white"
            />
            <p className="text-xs text-red-600">
              💡 这些描述会告诉AI需要避免生成的内容，如变形、多余手指、模糊等常见问题
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 风格预览 */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            当前风格预览
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">艺术风格</p>
                <p className="font-medium text-blue-600">{style.artStyle || '未设置'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">色调</p>
                <p className="font-medium text-green-600">{style.colorTone || '未设置'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">光照</p>
                <p className="font-medium text-orange-600">{style.lightingStyle || '未设置'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">镜头</p>
                <p className="font-medium text-purple-600">{style.cameraStyle || '未设置'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">情绪</p>
                <p className="font-medium text-pink-600">{style.mood || '未设置'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">画面比例</p>
                <p className="font-medium text-indigo-600">{style.aspectRatio || '16:9'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">帧率</p>
                <p className="font-medium text-cyan-600">{style.videoFrameRate || '24'}fps</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">运动强度</p>
                <p className="font-medium text-amber-600">
                  {style.motionIntensity === 'subtle' ? '微妙' :
                    style.motionIntensity === 'dynamic' ? '强烈' : '正常'}
                </p>
              </div>
            </div>

            {style.customPrompt && (
              <div className="pt-4 border-t">
                <p className="text-xs text-gray-500 mb-2">自定义提示词</p>
                <p className="text-sm font-mono bg-gray-50 p-3 rounded border">
                  {style.customPrompt}
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-100 border border-blue-300 rounded-lg">
            <p className="text-sm text-blue-900">
              <Sparkles className="w-4 h-4 inline mr-2" />
              这些风格设定将自动应用到：
            </p>
            <ul className="text-sm text-blue-800 mt-2 ml-6 list-disc space-y-1">
              <li>项目库中的角色AI提示词生成</li>
              <li>项目库中的场景AI提示词生成</li>
              <li>分镜的AI绘画提示词生成</li>
              <li>分镜的AI视频提示词生成</li>
            </ul>
          </div>

          {/* 🆕 建议5：示例分镜提示词预览 */}
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
            <p className="text-sm font-medium text-purple-900 mb-3">
              📸 示例分镜提示词预览（基于当前风格）
            </p>
            <div className="bg-white rounded-md p-4 border">
              <p className="text-xs text-gray-500 mb-2">示例场景：森林中奔跑的少年</p>
              <p className="text-sm font-mono text-gray-700 leading-relaxed">
                中景镜头，年轻少年在森林小径上奔跑
                {style.artStyle && `，${style.artStyle}风格`}
                {style.colorTone && `，${style.colorTone}`}
                {style.lightingStyle && `，${style.lightingStyle}照明`}
                {style.cameraStyle && `，${style.cameraStyle}镜头`}
                {style.mood && `，${style.mood}的氛围`}
                ，高质量渲染，分镜级别细节
                {style.customPrompt && `，${style.customPrompt}`}
              </p>
            </div>
            {style.negativePrompt && (
              <div className="mt-3 bg-red-50 rounded-md p-3 border border-red-200">
                <p className="text-xs text-red-600 mb-1">负面提示词：</p>
                <p className="text-xs font-mono text-red-700">{style.negativePrompt}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 风格应用设置 */}
      <StyleApplicationSettingsPanel
        settings={styleSettings}
        onSettingsChange={safeUpdateStyleSettings}
      />
    </div>
  );
}