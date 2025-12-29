import type { Project, Chapter } from '../types';
import { projectStorage, chapterStorage } from './storage';

export async function initializeDemoData() {
  // 检查是否已经有数据
  const existingProjects = await projectStorage.getAll();
  if (existingProjects.length > 0) {
    return; // 已有数据，不需要初始化
  }

  // 创建示例项目
  const demoProject: Project = {
    id: 'demo-project-1',
    title: '示例项目：现代都市奇幻故事',
    description: '一个关于普通上班族意外获得超能力，开始探索城市隐秘世界的故事。',
    cover: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await projectStorage.save(demoProject);

  // 创建示例章节
  const demoChapter: Chapter = {
    id: 'demo-chapter-1',
    projectId: demoProject.id,
    title: '第一章 觉醒',
    orderIndex: 0,
    originalText: `清晨的阳光透过百叶窗的缝隙洒进房间，李明睁开眼睛，看了看床头的闹钟——七点整。

他坐起身来，准备开始又一个平凡的工作日。洗漱、穿衣、吃早餐，一切都和往常一样。

"又要迟到了！"李明看了看手表，急匆匆地冲出了家门。

地铁站里人山人海，李明挤在拥挤的人群中，突然感到一阵眩晕。当他再次睁开眼睛时，周围的一切都变得不同了——人们的身影变得模糊，而他们身上却闪烁着各种颜色的光芒。

"这是怎么回事？"李明惊讶地看着自己的双手，它们也在发出淡淡的蓝色光芒。

一个穿着黑色风衣的女子注意到了他的异常。她走过来，压低声音说："你觉醒了。跟我来，这里不安全。"

李明还没来得及反应，女子就拉着他快步离开了地铁站。`,
    createdAt: new Date().toISOString(),
  };

  await chapterStorage.save(demoChapter);
}
