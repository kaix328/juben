import { Link, Outlet, useLocation } from 'react-router-dom';
import { Book, House, ArrowLeft, Settings as SettingsIcon } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  // 计算返回目标路径(用于Link组件)
  const getBackPath = (): string => {
    const path = location.pathname;

    // 导演风格页面 -> 项目详情
    if (path.includes('/style')) {
      const projectId = path.split('/')[2];
      return `/projects/${projectId}`;
    }

    // 项目详情页 -> 首页
    if (path.match(/^\/projects\/[^/]+$/)) {
      return '/';
    }

    // 章节/剧本/分镜/资源页面 -> 项目详情
    if (path.includes('/projects/')) {
      const projectId = path.split('/')[2];
      return `/projects/${projectId}`;
    }

    // 设置页面 -> 首页
    if (path.includes('/settings')) {
      return '/';
    }

    // 默认返回首页
    return '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              {/* 使用 Link 组件确保 HashRouter 正确处理导航 */}
              <Link
                to={getBackPath()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors inline-block"
                title="返回"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <Link to="/" className="flex items-center gap-2">
                <Book className="w-8 h-8 text-purple-600" />
                <span className="text-xl text-gray-900">AI漫剧制作平台</span>
              </Link>
            </div>

            <nav className="flex gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                <House className="w-5 h-5" />
                <span>书架</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                <SettingsIcon className="w-5 h-5" />
                <span>设置</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 主内容区域 */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* 底部信息 */}
      <footer className="mt-16 py-8 border-t bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>AI漫剧全流程制作平台 - 让创作更简单</p>
        </div>
      </footer>
    </div>
  );
}