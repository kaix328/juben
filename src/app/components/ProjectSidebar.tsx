import { Link, useParams, useLocation } from 'react-router-dom';
import { FileText, Users, Image, Palette, Film, ChevronLeft, ChevronRight, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';

interface ProjectSidebarProps {
    projectId: string;
    chapterId?: string;
}

export function ProjectSidebar({ projectId, chapterId }: ProjectSidebarProps) {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(true); // 🆕 默认收起

    const navItems = [
        {
            label: '项目概览',
            path: `/projects/${projectId}`,
            icon: LayoutDashboard,
            exact: true
        },
        {
            label: '剧本编辑',
            path: chapterId ? `/projects/${projectId}/script/${chapterId}` : null,
            icon: FileText,
            disabled: !chapterId
        },
        {
            label: '项目库',
            path: `/projects/${projectId}/assets`,
            icon: Users
        },
        {
            label: '导演风格',
            path: `/projects/${projectId}/style`,
            icon: Palette
        },
        {
            label: '分镜制作',
            path: chapterId ? `/projects/${projectId}/storyboard/${chapterId}` : null,
            icon: Film,
            disabled: !chapterId
        }
    ];

    const isActive = (path: string | null, exact?: boolean) => {
        if (!path) return false;
        if (exact) return location.pathname === path;
        return location.pathname.startsWith(path);
    };

    return (
        <div
            className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white border-r shadow-sm z-40 transition-all duration-300 ${collapsed ? 'w-12' : 'w-48'
                }`}
        >
            {/* 折叠按钮 */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-4 w-6 h-6 bg-white border rounded-full shadow flex items-center justify-center hover:bg-gray-100"
            >
                {collapsed ? (
                    <ChevronRight className="w-4 h-4" />
                ) : (
                    <ChevronLeft className="w-4 h-4" />
                )}
            </button>

            {/* 导航列表 */}
            <nav className="py-4">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = isActive(item.path, item.exact);
                    const disabled = item.disabled;

                    if (disabled || !item.path) {
                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg text-gray-400 cursor-not-allowed ${collapsed ? 'justify-center' : ''
                                    }`}
                                title={collapsed ? item.label : undefined}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                {!collapsed && <span className="text-sm">{item.label}</span>}
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={index}
                            to={item.path}
                            className={`flex items-center gap-3 px-3 py-2.5 mx-2 rounded-lg transition-colors ${collapsed ? 'justify-center' : ''
                                } ${active
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            title={collapsed ? item.label : undefined}
                        >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            {!collapsed && <span className="text-sm">{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
