import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
  Bookshelf,
  ProjectDetail,
  ChapterEditor,
  ScriptEditor,
  StoryboardEditor,
  AssetLibrary,
} from './pages';
import { ProjectDashboard } from './pages/ProjectDashboard';
import { DirectorStyleEditor } from './pages/DirectorStyleEditor';
import { Settings } from './pages/Settings';
import { initializeDemoData } from './utils/initData';

export default function App() {
  useEffect(() => {
    // 初始化示例数据
    initializeDemoData();
  }, []);

  return (
    <HashRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Bookshelf />} />
          <Route path="settings" element={<Settings />} />
          <Route path="projects/:projectId" element={
            <ErrorBoundary>
              <ProjectDetail />
            </ErrorBoundary>
          } />
          <Route path="projects/:projectId/dashboard" element={
            <ErrorBoundary>
              <ProjectDashboard />
            </ErrorBoundary>
          } />
          {/* 为复杂组件添加ErrorBoundary,防止导航时白屏 */}
          <Route path="projects/:projectId/style" element={
            <ErrorBoundary>
              <DirectorStyleEditor />
            </ErrorBoundary>
          } />
          <Route path="projects/:projectId/chapter/:chapterId" element={
            <ErrorBoundary>
              <ChapterEditor />
            </ErrorBoundary>
          } />
          <Route path="projects/:projectId/script/:chapterId" element={
            <ErrorBoundary>
              <ScriptEditor />
            </ErrorBoundary>
          } />
          <Route path="projects/:projectId/storyboard/:chapterId" element={
            <ErrorBoundary>
              <StoryboardEditor />
            </ErrorBoundary>
          } />
          <Route path="projects/:projectId/assets" element={
            <ErrorBoundary>
              <AssetLibrary />
            </ErrorBoundary>
          } />
          {/* 兼容旧路由 */}
          <Route path="project/:id" element={<Navigate to="/projects/:id" replace />} />
          <Route path="project/:id/chapter/:chapterId" element={<Navigate to="/projects/:id/chapter/:chapterId" replace />} />
          <Route path="project/:id/script/:chapterId" element={<Navigate to="/projects/:id/script/:chapterId" replace />} />
          <Route path="project/:id/storyboard/:chapterId" element={<Navigate to="/projects/:id/storyboard/:chapterId" replace />} />
          <Route path="project/:id/assets" element={<Navigate to="/projects/:id/assets" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}