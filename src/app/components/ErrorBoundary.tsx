import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
    errorInfo?: React.ErrorInfo;
}

/**
 * Error Boundary组件
 * 用于捕获子组件树中的JavaScript错误,防止整个应用崩溃白屏
 */
export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): Partial<State> {
        // 更新state,下次渲染时显示fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // 记录错误信息
        console.error('ErrorBoundary caught an error:', error);
        console.error('Component stack:', errorInfo.componentStack);
        this.setState({ errorInfo });
    }

    handleReset = () => {
        this.setState({ hasError: false, error: undefined, errorInfo: undefined });
        // 使用原生导航重新加载当前页面,避免React Router的潜在问题
        window.location.reload();
    };

    handleGoHome = () => {
        // 使用 hash 路径返回首页，兼容 HashRouter
        window.location.href = window.location.pathname + '#/';
    };

    render() {
        if (this.state.hasError) {
            // 如果提供了自定义fallback,使用它
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // 默认的错误UI
            return (
                <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 max-w-md">
                        <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                            页面加载出错
                        </h2>
                        <p className="text-gray-600 mb-6">
                            很抱歉,页面在加载或切换时发生了错误。请尝试刷新页面或返回首页。
                        </p>

                        {/* 错误详情 */}
                        {this.state.error && (
                            <details className="text-left mb-4 p-3 bg-gray-100 rounded text-sm">
                                <summary className="cursor-pointer text-gray-700 font-medium">
                                    错误详情
                                </summary>
                                <pre className="mt-2 text-xs text-red-600 overflow-auto">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}

                        <div className="flex gap-3 justify-center">
                            <Button
                                onClick={this.handleReset}
                                className="gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                刷新页面
                            </Button>
                            <Button
                                variant="outline"
                                onClick={this.handleGoHome}
                                className="gap-2"
                            >
                                <Home className="w-4 h-4" />
                                返回首页
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
