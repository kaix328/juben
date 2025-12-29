import React, { useMemo } from 'react';
import type { StoryboardPanel, Project } from '../../../types';

interface StoryboardPrintTemplateProps {
    panels: StoryboardPanel[];
    project?: Project;
    title?: string;
    showPrompts?: boolean;      // 🆕 是否显示提示词
    layoutMode?: 'card' | 'table';  // 🆕 布局模式
}

/**
 * 分镜PDF打印模板组件
 * 仅在打印时显示，屏幕上默认隐藏
 */
export const StoryboardPrintTemplate: React.FC<StoryboardPrintTemplateProps> = ({
    panels,
    project,
    title,
    showPrompts = false,
    layoutMode = 'card'
}) => {
    const exportDate = new Date().toLocaleString('zh-CN');
    const displayTitle = title || project?.title || '分镜表';

    // 🆕 按场景分组
    const groupedPanels = useMemo(() => {
        const groups: { sceneId: string; sceneName: string; panels: StoryboardPanel[] }[] = [];
        let currentGroup: typeof groups[0] | null = null;

        panels.forEach(panel => {
            const sceneId = panel.sceneId || 'unknown';
            const sceneName = panel.sceneId || '未分组场景';

            if (!currentGroup || currentGroup.sceneId !== sceneId) {
                currentGroup = { sceneId, sceneName, panels: [] };
                groups.push(currentGroup);
            }
            currentGroup.panels.push(panel);
        });

        return groups;
    }, [panels]);

    // 🆕 统计信息
    const stats = useMemo(() => {
        const totalDuration = panels.reduce((sum, p) => sum + (p.duration || 0), 0);
        const withImage = panels.filter(p => p.generatedImage).length;
        const withDialogue = panels.filter(p => p.dialogue).length;
        return { totalDuration, withImage, withDialogue, total: panels.length };
    }, [panels]);

    return (
        <div className="print-template hidden print:block">
            {/* 页头 */}
            <div className="print-header">
                <div className="print-title">{displayTitle}</div>
                <div className="print-subtitle">
                    共 {panels.length} 个分镜 | 导出时间: {exportDate}
                </div>
                {project && project.directorStyle && (
                    <div className="print-subtitle">
                        {project.directorStyle.artStyle && `风格: ${project.directorStyle.artStyle}`}
                    </div>
                )}
            </div>

            {/* 🆕 统计信息 */}
            <div className="print-stats">
                <div className="print-stats-title">📊 分镜统计</div>
                <span className="print-stats-item">总分镜: {stats.total}</span>
                <span className="print-stats-item">总时长: {Math.floor(stats.totalDuration / 60)}分{stats.totalDuration % 60}秒</span>
                <span className="print-stats-item">已生成图片: {stats.withImage}/{stats.total}</span>
                <span className="print-stats-item">有对白: {stats.withDialogue}</span>
            </div>

            {/* 分镜列表 */}
            {layoutMode === 'table' ? (
                // 🆕 表格布局模式
                <table className="print-table-layout">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>预览图</th>
                            <th>景别/角度</th>
                            <th>画面描述</th>
                            <th>对白</th>
                            <th>时长</th>
                        </tr>
                    </thead>
                    <tbody>
                        {panels.map((panel, index) => (
                            <tr key={panel.id}>
                                <td>{panel.panelNumber || index + 1}</td>
                                <td>
                                    {panel.generatedImage ? (
                                        <img src={panel.generatedImage} alt={`分镜 ${panel.panelNumber}`} />
                                    ) : (
                                        <span style={{ color: '#999' }}>无图</span>
                                    )}
                                </td>
                                <td>{panel.shot}{panel.angle && ` / ${panel.angle}`}</td>
                                <td>{panel.description || '-'}</td>
                                <td style={{ fontStyle: 'italic' }}>{panel.dialogue || '-'}</td>
                                <td>{panel.duration ? `${panel.duration}秒` : '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                // 卡片布局模式（带场景分组）
                <div className="print-panels">
                    {groupedPanels.map((group, groupIndex) => (
                        <div key={group.sceneId}>
                            {/* 🆕 场景分组标题 */}
                            {groupedPanels.length > 1 && (
                                <div className="print-scene-group">
                                    场景 {groupIndex + 1}: {group.sceneName}
                                </div>
                            )}

                            {group.panels.map((panel, index) => (
                                <div key={panel.id} className="print-panel no-page-break">
                                    {/* 预览图 */}
                                    {panel.generatedImage ? (
                                        <img
                                            src={panel.generatedImage}
                                            alt={`分镜 ${panel.panelNumber}`}
                                            className="print-panel-image"
                                        />
                                    ) : (
                                        <div className="print-panel-image-placeholder">
                                            暂无预览图
                                        </div>
                                    )}

                                    {/* 内容区 */}
                                    <div className="print-panel-content">
                                        <div className="print-panel-number">
                                            #{panel.panelNumber || index + 1}
                                            {panel.shot && ` - ${panel.shot}`}
                                            {panel.angle && ` / ${panel.angle}`}
                                        </div>

                                        {/* 画面描述 */}
                                        {panel.description && (
                                            <div className="print-panel-desc">
                                                {panel.description}
                                            </div>
                                        )}

                                        {/* 对白 */}
                                        {panel.dialogue && (
                                            <div className="print-panel-dialogue">
                                                "{panel.dialogue}"
                                            </div>
                                        )}

                                        {/* 元数据 */}
                                        <div className="print-panel-meta">
                                            {panel.duration && `${panel.duration}秒`}
                                            {panel.cameraMovement && panel.cameraMovement !== '静止' && ` | ${panel.cameraMovement}`}
                                            {panel.characters?.length > 0 && ` | 角色: ${panel.characters.join(', ')}`}
                                        </div>

                                        {/* 🆕 专业字段 */}
                                        <div className="print-panel-meta" style={{ fontSize: '9px', color: '#666' }}>
                                            {panel.composition && `构图: ${panel.composition}`}
                                            {panel.shotIntent && ` | 意图: ${panel.shotIntent}`}
                                            {panel.axisNote && ` | 轴线: ${panel.axisNote}`}
                                        </div>
                                        {(panel.environmentMotion || (panel.characterActions && panel.characterActions.length > 0)) && (
                                            <div className="print-panel-meta" style={{ fontSize: '9px', color: '#555' }}>
                                                {panel.environmentMotion && `环境: ${panel.environmentMotion}`}
                                                {panel.characterActions && panel.characterActions.length > 0 && ` | 动作: ${panel.characterActions.join(', ')}`}
                                            </div>
                                        )}

                                        {/* 🆕 可选显示提示词 */}
                                        {showPrompts && panel.aiPrompt && (
                                            <div className="print-panel-prompt">
                                                <strong>提示词:</strong> {panel.aiPrompt}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {/* 页脚 */}
            <div className="print-footer">
                {displayTitle} - 由 AI 漫剧工作流生成
            </div>
        </div>
    );
};

export default StoryboardPrintTemplate;
