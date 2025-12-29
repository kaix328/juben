# PromptEngine 迁移指南

## 📋 概述

新的 `promptEngine.ts` 统一了原有的两套系统：
- ✅ `promptGenerator.ts` - 旧系统（分镜使用）
- ✅ `promptOptimizer.ts` - 新系统（项目库使用）

统一后的优势：
- 🎯 **一致性**：全局使用相同的提示词生成逻辑
- 🔧 **可维护**：单一代码库，易于修改和扩展
- 📦 **功能完整**：正负提示词、权重控制、中英文分离
- ⚡ **向后兼容**：旧代码无需修改即可工作

---

## 🚀 快速开始

### 基础用法

```typescript
import { PromptEngine } from '../utils/promptEngine';

// 1. 创建引擎实例
const engine = new PromptEngine(project.directorStyle);

// 2. 生成各类提示词
const fullBodyPrompt = engine.forCharacterFullBody(character);
const facePrompt = engine.forCharacterFace(character);
const scenePrompt = engine.forSceneWide(scene);
const storyboardPrompt = engine.forStoryboardImage(panel, characters, scenes);

// 3. 使用结果
console.log(fullBodyPrompt.positive); // 正面提示词
console.log(fullBodyPrompt.negative); // 负面提示词
console.log(fullBodyPrompt.metadata); // 元数据
```

### 高级配置

```typescript
import { PromptEngine } from '../utils/promptEngine';

// 自定义配置
const engine = new PromptEngine(directorStyle, {
  separateLanguages: true,    // 中英文分离
  useWeights: false,           // 不使用权重
  includeNegative: true,       // 包含负面提示词
  qualityTags: 'professional'  // 专业级质量标签
});

const result = engine.forCharacterFullBody(character, existingPrompt);
```

---

## 📚 完整API参考

### PromptEngine 类

#### 构造函数

```typescript
constructor(style?: DirectorStyle, config?: Partial<EngineConfig>)
```

**参数：**
- `style?`: 导演风格（可选）
- `config?`: 引擎配置（可选）

**配置选项：**
```typescript
interface EngineConfig {
  separateLanguages: boolean;  // 是否分离中英文，默认 true
  useWeights: boolean;         // 是否使用权重，默认 false
  includeNegative: boolean;    // 是否包含负面提示词，默认 true
  qualityTags: 'basic' | 'professional' | 'none'; // 质量标签级别
}
```

#### 角色相关方法

```typescript
// 角色全身图
forCharacterFullBody(character: Character, existingPrompt?: string): AdvancedPrompt

// 角色脸部图
forCharacterFace(character: Character, existingPrompt?: string): AdvancedPrompt
```

#### 场景相关方法

```typescript
// 场景远景
forSceneWide(scene: Scene, existingPrompt?: string): AdvancedPrompt

// 场景中景
forSceneMedium(scene: Scene, existingPrompt?: string): AdvancedPrompt

// 场景特写
forSceneCloseup(scene: Scene, existingPrompt?: string): AdvancedPrompt
```

#### 道具和服饰方法

```typescript
// 道具
forProp(prop: Prop, existingPrompt?: string): AdvancedPrompt

// 服饰
forCostume(costume: Costume, character?: Character, existingPrompt?: string): AdvancedPrompt
```

#### 分镜相关方法

```typescript
// 分镜图片提示词
forStoryboardImage(
  panel: StoryboardPanel,
  characters: Character[],
  scenes: Scene[]
): AdvancedPrompt

// 分镜视频提示词
forStoryboardVideo(
  panel: StoryboardPanel,
  characters: Character[]
): AdvancedPrompt
```

### AdvancedPrompt 接口

```typescript
interface AdvancedPrompt {
  positive: string;              // 正面提示词
  negative: string;              // 负面提示词
  weights?: Record<string, number>; // 权重映射（可选）
  metadata?: {
    totalParts: number;          // 总部分数
    hasStyle: boolean;           // 是否包含导演风格
    language: 'zh' | 'en' | 'mixed'; // 语言类型
  };
}
```

---

## 🔄 迁移步骤

### 第1步：更新导入语句

#### 旧代码（promptOptimizer.ts）
```typescript
import {
  applyStyleToCharacterFullBody,
  applyStyleToCharacterFace,
  applyStyleToSceneWide,
} from '../utils/promptOptimizer';
```

#### 新代码（promptEngine.ts）
```typescript
import { PromptEngine } from '../utils/promptEngine';
```

### 第2步：替换函数调用

#### 旧代码
```typescript
// promptOptimizer.ts 风格
const enhanced = applyStyleToCharacterFullBody(
  character,
  project.directorStyle!,
  character.fullBodyPrompt
);

handleUpdateCharacter(character.id, { fullBodyPrompt: enhanced });
```

#### 新代码
```typescript
// promptEngine.ts 风格
const engine = new PromptEngine(project.directorStyle);
const result = engine.forCharacterFullBody(character, character.fullBodyPrompt);

handleUpdateCharacter(character.id, { 
  fullBodyPrompt: result.positive 
});
```

### 第3步：更新批量操作

#### 旧代码
```typescript
import { batchApplyStyleToCharacters } from '../utils/promptOptimizer';

const updatedCharacters = batchApplyStyleToCharacters(
  assets.characters,
  project.directorStyle
);
```

#### 新代码
```typescript
import { PromptEngine } from '../utils/promptEngine';

const engine = new PromptEngine(project.directorStyle);

const updatedCharacters = assets.characters.map(character => ({
  ...character,
  fullBodyPrompt: engine.forCharacterFullBody(character).positive,
  facePrompt: engine.forCharacterFace(character).positive,
}));
```

---

## 📖 实际应用示例

### 示例1：项目库中应用导演风格

```typescript
// AssetLibraryNew.tsx

import { PromptEngine } from '../utils/promptEngine';

const handleApplyDirectorStyle = () => {
  if (!assets || !project?.directorStyle) {
    toast.error('请先在"导演风格"页面设置导演风格');
    return;
  }
  
  const confirmed = confirm('确定要将导演风格应用到所有资源的AI提示词吗？');
  if (!confirmed) return;
  
  // 创建引擎实例
  const engine = new PromptEngine(project.directorStyle);
  
  // 批量更新角色
  const updatedCharacters = assets.characters.map(character => ({
    ...character,
    fullBodyPrompt: engine.forCharacterFullBody(character, character.fullBodyPrompt).positive,
    facePrompt: engine.forCharacterFace(character, character.facePrompt).positive,
  }));
  
  // 批量更新场景
  const updatedScenes = assets.scenes.map(scene => ({
    ...scene,
    widePrompt: engine.forSceneWide(scene, scene.widePrompt).positive,
    mediumPrompt: engine.forSceneMedium(scene, scene.mediumPrompt).positive,
    closeupPrompt: engine.forSceneCloseup(scene, scene.closeupPrompt).positive,
  }));
  
  // 批量更新道具
  const updatedProps = assets.props.map(prop => ({
    ...prop,
    aiPrompt: engine.forProp(prop, prop.aiPrompt).positive,
  }));
  
  // 批量更新服饰
  const updatedCostumes = assets.costumes.map(costume => {
    const character = assets.characters.find(c => c.id === costume.characterId);
    return {
      ...costume,
      aiPrompt: engine.forCostume(costume, character, costume.aiPrompt).positive,
    };
  });
  
  // 更新状态
  setAssets({
    ...assets,
    characters: updatedCharacters,
    scenes: updatedScenes,
    props: updatedProps,
    costumes: updatedCostumes,
  });
  
  toast.success('导演风格已应用到所有资源');
};
```

### 示例2：单个资源应用导演风格

```typescript
// 在角色编辑页面

import { PromptEngine } from '../utils/promptEngine';

const handleApplyStyleToFullBody = () => {
  if (!project?.directorStyle) {
    toast.error('请先设置导演风格');
    return;
  }
  
  const engine = new PromptEngine(project.directorStyle);
  const result = engine.forCharacterFullBody(character, character.fullBodyPrompt);
  
  handleUpdateCharacter(character.id, { 
    fullBodyPrompt: result.positive 
  });
  
  toast.success('已应用导演风格');
};
```

### 示例3：分镜页面生成提示词

```typescript
// Storyboard.tsx

import { PromptEngine } from '../utils/promptEngine';

const handleGenerateImagePrompt = (panel: StoryboardPanel) => {
  const engine = new PromptEngine(project.directorStyle);
  
  const result = engine.forStoryboardImage(
    panel,
    assets.characters,
    assets.scenes
  );
  
  // 使用完整的提示词（包含负面提示词）
  console.log('正面提示词:', result.positive);
  console.log('负面提示词:', result.negative);
  
  // 更新分镜
  updatePanel(panel.id, {
    imagePrompt: result.positive,
    negativePrompt: result.negative, // 新增负面提示词字段
  });
};
```

### 示例4：使用高级配置

```typescript
// 需要更精细控制时

import { PromptEngine } from '../utils/promptEngine';

// 场景1：仅生成英文提示词（对接某些AI服务）
const engineEnOnly = new PromptEngine(directorStyle, {
  separateLanguages: false, // 不分离（会混合中英文）
  qualityTags: 'basic',     // 使用基础质量标签
  includeNegative: true,    // 包含负面提示词
});

// 场景2：使用权重控制（Stable Diffusion风格）
const engineWithWeights = new PromptEngine(directorStyle, {
  useWeights: true,         // 启用权重
  qualityTags: 'professional',
});

const result = engineWithWeights.forCharacterFullBody(character);
console.log(result.weights); // { '角色名': 1.2, '外貌': 1.1 }

// 场景3：极简提示词（不要质量标签）
const engineMinimal = new PromptEngine(directorStyle, {
  qualityTags: 'none',
  includeNegative: false,
});
```

---

## 🔍 对比：新旧系统差异

| 功能 | 旧系统 | 新系统 | 改进 |
|------|--------|--------|------|
| 提示词生成 | 两套逻辑 | 统一引擎 | ✅ 一致性 |
| 负面提示词 | ❌ 无 | ✅ 内置 | ✅ 更专业 |
| 中英文处理 | 混杂 | 智能分离 | ✅ 更清晰 |
| 权重控制 | ❌ 无 | ✅ 可选 | ✅ 更灵活 |
| 质量标签 | 固定 | 可配置 | ✅ 可定制 |
| 扩展性 | 低 | 高 | ✅ 易维护 |
| 元数据 | ❌ 无 | ✅ 完整 | ✅ 可追踪 |

---

## ⚠️ 注意事项

### 1. 向后兼容

**旧的导入仍然可用**（但建议迁移到新系统）：

```typescript
// 这些导入仍然有效
import { generateCharacterPrompt } from '../utils/promptEngine';
import { generateScenePrompt } from '../utils/promptEngine';
import { generateStoryboardImagePrompt } from '../utils/promptEngine';

// 它们内部调用 PromptEngine，保证一致性
const prompt = generateCharacterPrompt(character, directorStyle);
```

### 2. 性能考虑

```typescript
// ❌ 不推荐：每次都创建新实例
assets.characters.forEach(char => {
  const engine = new PromptEngine(style); // 重复创建
  const prompt = engine.forCharacterFullBody(char);
});

// ✅ 推荐：复用引擎实例
const engine = new PromptEngine(style); // 创建一次
assets.characters.forEach(char => {
  const prompt = engine.forCharacterFullBody(char); // 复用
});
```

### 3. 现有提示词合并

新引擎会智能合并现有提示词：

```typescript
const character = {
  fullBodyPrompt: '穿着红色裙子, 长发飘逸',
  // ...
};

const engine = new PromptEngine(directorStyle);
const result = engine.forCharacterFullBody(character, character.fullBodyPrompt);

// result.positive 会包含：
// 1. 角色基础信息（名字、外貌）
// 2. 现有提示词（穿着红色裙子...）
// 3. 导演风格
// 4. 质量标签
```

### 4. 负面提示词的使用

```typescript
// 如果你的AI生成服务支持负面提示词
const result = engine.forCharacterFullBody(character);

await generateImage({
  prompt: result.positive,
  negativePrompt: result.negative, // 使用负面提示词
  steps: 50,
  cfg: 7,
});

// 如果不支持，可以关闭
const engine = new PromptEngine(style, { includeNegative: false });
```

---

## 🎯 迁移清单

使用此清单逐步迁移你的代码：

- [ ] **第1步**：阅读本文档，理解新系统
- [ ] **第2步**：在开发环境测试新引擎
- [ ] **第3步**：更新 `AssetLibraryNew.tsx` 中的导入
- [ ] **第4步**：更新 `Storyboard.tsx` 中的导入
- [ ] **第5步**：测试角色提示词生成
- [ ] **第6步**：测试场景提示词生成
- [ ] **第7步**：测试分镜提示词生成
- [ ] **第8步**：测试批量应用导演风格
- [ ] **第9步**：检查生成结果是否符合预期
- [ ] **第10步**：（可选）删除旧的 `promptOptimizer.ts` 中的批量函数

---

## 🆘 故障排除

### 问题1：生成的提示词太长

**解决方案：**
```typescript
// 使用基础质量标签或关闭质量标签
const engine = new PromptEngine(style, { 
  qualityTags: 'basic' // 或 'none'
});
```

### 问题2：中文和英文混杂导致AI理解困难

**解决方案：**
```typescript
// 确保启用语言分离
const engine = new PromptEngine(style, { 
  separateLanguages: true 
});
```

### 问题3：应用导演风格后覆盖了手动编辑的内容

**解决方案：**
```typescript
// 方案1：不传入 existingPrompt
const result = engine.forCharacterFullBody(character); // 不传第二个参数

// 方案2：使用条件判断
if (!character.manuallyEdited) {
  const result = engine.forCharacterFullBody(character, character.fullBodyPrompt);
  // 应用
}
```

### 问题4：负面提示词不适合我的AI服务

**解决方案：**
```typescript
// 关闭负面提示词
const engine = new PromptEngine(style, { 
  includeNegative: false 
});
```

---

## 📞 获取帮助

如果在迁移过程中遇到问题：

1. 查看 `promptEngine.ts` 源代码中的注释
2. 参考本文档的示例代码
3. 检查控制台是否有错误信息
4. 对比新旧提示词的差异

---

## 🎉 总结

新的 `PromptEngine` 提供了：
- ✅ 统一的提示词生成接口
- ✅ 更专业的负面提示词
- ✅ 灵活的配置选项
- ✅ 完整的向后兼容
- ✅ 更好的可维护性

迁移后，你的项目将拥有更一致、更专业的AI提示词生成能力！🚀
