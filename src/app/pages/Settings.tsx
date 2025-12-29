import { useState, useEffect } from 'react';
import { Save, Key, Server, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { useConfigStore } from '../store/useConfigStore';

export interface AppSettings {
    volcApiKey: string;
    llmEndpointId: string;
    imageEndpointId: string;
}

export function Settings() {
    const { apiSettings, setApiSettings } = useConfigStore();

    const handleSave = () => {
        // useConfigStore 已集成 persist 插件，会自动同步到 localStorage
        toast.success('配置已保存，状态全站实时更新');
    };

    const handleReset = () => {
        if (confirm('确定清除本地配置吗？将恢复使用默认环境变量（如有）。')) {
            setApiSettings({
                volcApiKey: '',
                llmEndpointId: '',
                imageEndpointId: '',
            });
            toast.info('配置表单已重置');
        }
    };

    return (
        <div className="space-y-6 max-w-3xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">系统设置</h1>
                <p className="text-gray-600 mt-1">配置 AI 服务连接参数</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-blue-600" />
                        火山引擎 (Volcano Engine) 配置
                    </CardTitle>
                    <CardDescription>
                        配置 Ark 大模型服务。如果不填写，系统将尝试使用构建时注入的环境变量。
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="apiKey" className="flex items-center gap-2">
                            <Key className="w-4 h-4" /> API Key
                        </Label>
                        <Input
                            id="apiKey"
                            type="password"
                            placeholder="Ex: 443ba98a-..."
                            value={apiSettings.volcApiKey}
                            onChange={(e) => setApiSettings({ ...apiSettings, volcApiKey: e.target.value })}
                        />
                        <p className="text-xs text-gray-500">
                            您的 API 密钥将通过 Zustand 状态管理并自动加密持久化（可选）。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="llmEndpoint">LLM Endpoint ID (DeepSeek)</Label>
                            <Input
                                id="llmEndpoint"
                                placeholder="Ex: ep-2025..."
                                value={apiSettings.llmEndpointId}
                                onChange={(e) => setApiSettings({ ...apiSettings, llmEndpointId: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="imgEndpoint">Image Endpoint ID (Doubao)</Label>
                            <Input
                                id="imgEndpoint"
                                placeholder="Ex: ep-2025..."
                                value={apiSettings.imageEndpointId}
                                onChange={(e) => setApiSettings({ ...apiSettings, imageEndpointId: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <Button onClick={handleSave} className="gap-2">
                            <Save className="w-4 h-4" />
                            保存配置
                        </Button>
                        <Button variant="outline" onClick={handleReset} className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                            <RotateCcw className="w-4 h-4" />
                            重置
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="space-y-1">
                            <h4 className="font-medium text-blue-900">配置说明</h4>
                            <p className="text-sm text-blue-800">
                                1. 请前往火山引擎控制台获取 API Key。<br />
                                2. 创建推理接入点，分别获取支持 <b>DeepSeek</b> (LLM) 和 <b>Doubao-Seedream</b> (文生图) 的 Endpoint ID。<br />
                                3. 保存后，所有 AI 提取和生图功能将自动使用新的配置。
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
