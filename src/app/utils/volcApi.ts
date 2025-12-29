/// <reference types="vite/client" />

/**
 * 火山引擎 API 调用模块
 * 
 * ⚠️ 安全警告 (Security Notice):
 * 1. API Key 存储在浏览器 localStorage 中，仅适用于本地工具型应用
 * 2. 前端直接调用第三方 API，存在密钥暴露风险
 * 3. 生产环境部署建议：
 *    - 使用后端代理转发 API 请求
 *    - 将 API Key 存储在服务端环境变量
 *    - 添加请求频率限制和用户认证
 * 
 * 当前设计适用于：
 * - 个人本地开发工具
 * - 内网部署的团队协作工具
 * - 原型验证阶段的临时方案
 */

import { ScriptScene, StoryboardPanel } from '../types';

import { useConfigStore } from '../store/useConfigStore';

// 动态获取配置
function getSettings() {
  // 优先从 Zustand Store 获取进度(它会自动处理持久化同步)
  const state = useConfigStore.getState();
  const settings = state.apiSettings;

  if (settings.volcApiKey) {
    return settings;
  }

  // 兜底方案：从环境变量获取
  return {
    volcApiKey: import.meta.env.VITE_VOLC_API_KEY,
    llmEndpointId: import.meta.env.VITE_VOLC_LLM_ENDPOINT_ID,
    imageEndpointId: import.meta.env.VITE_VOLC_IMAGE_ENDPOINT_ID,
  };
}

const BASE_URL = 'https://ark.cn-beijing.volces.com/api/v3';

// 🆕 请求配置
const REQUEST_CONFIG = {
  timeout: 180000,    // 🆕 延长至 180 秒（3分钟），大剧本需要更多处理时间
  maxRetries: 1,      // 🆕 减少重试次数，避免长时间等待
  retryDelay: 1000,   // 重试间隔（毫秒）
  enableLog: true,    // 启用日志
};

// 🆕 请求日志
function logRequest(method: string, endpoint: string, status: 'start' | 'success' | 'error' | 'retry', details?: string) {
  if (!REQUEST_CONFIG.enableLog) return;
  const time = new Date().toISOString().split('T')[1].slice(0, 8);
  const icons = { start: '🚀', success: '✅', error: '❌', retry: '🔄' };
  console.log(`[${time}] ${icons[status]} API ${method} ${endpoint} ${details || ''}`);
}

// 🆕 延迟函数
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 通用请求函数（增强版）
async function volcFetch(endpoint: string, options: RequestInit, retryCount = 0): Promise<any> {
  const settings = getSettings();
  const apiKey = settings.volcApiKey;

  if (!apiKey) throw new Error('Missing API Key. Please configure in Settings (设置页面).');

  // 创建超时控制器
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_CONFIG.timeout);

  logRequest(options.method || 'GET', endpoint, 'start');

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorBody}`);
    }

    const data = await response.json();
    logRequest(options.method || 'GET', endpoint, 'success');
    return data;
  } catch (error: any) {
    clearTimeout(timeoutId);

    // 判断是否可以重试
    const isRetryable =
      error.name === 'AbortError' || // 超时
      error.message?.includes('429') || // 限流
      error.message?.includes('500') || // 服务器错误
      error.message?.includes('502') ||
      error.message?.includes('503');

    if (isRetryable && retryCount < REQUEST_CONFIG.maxRetries) {
      logRequest(options.method || 'GET', endpoint, 'retry', `(${retryCount + 1}/${REQUEST_CONFIG.maxRetries})`);
      await delay(REQUEST_CONFIG.retryDelay * (retryCount + 1)); // 指数退避
      return volcFetch(endpoint, options, retryCount + 1);
    }

    // 超时特殊处理
    if (error.name === 'AbortError') {
      logRequest(options.method || 'GET', endpoint, 'error', 'Timeout');
      throw new Error(`API 请求超时 (${REQUEST_CONFIG.timeout / 1000}秒)`);
    }

    logRequest(options.method || 'GET', endpoint, 'error', error.message);
    throw error;
  }
}

// 1. 调用 LLM (DeepSeek)
export async function callDeepSeek(messages: { role: string; content: string }[], temperature = 0.7) {
  const settings = getSettings();
  const model = settings.llmEndpointId;

  if (!model) throw new Error('Missing LLM Endpoint ID. Please configure in Settings.');

  const data = await volcFetch('/chat/completions', {
    method: 'POST',
    body: JSON.stringify({
      model,
      messages,
      temperature,
      stream: false,
    }),
  });
  return data.choices[0].message.content;
}

// 2. 调用文生图 (Doubao) - 🆕 支持 negativePrompt
export async function callDoubaoImage(
  prompt: string,
  size: string = "1920x1920",
  negativePrompt?: string  // 🆕 负面提示词参数
): Promise<string> {
  const settings = getSettings();
  const model = settings.imageEndpointId;

  if (!model) throw new Error('Missing Image Endpoint ID. Please configure in Settings.');

  // 构建请求体
  const requestBody: Record<string, any> = {
    model,
    prompt,
    n: 1,
    size, // 使用传入的尺寸参数
  };

  // 🆕 添加负面提示词（如果提供）
  if (negativePrompt && negativePrompt.trim()) {
    requestBody.negative_prompt = negativePrompt;
    console.log('[文生图] 使用负面提示词:', negativePrompt.substring(0, 50) + '...');
  }

  // Doubao Seedream 4.5
  const data = await volcFetch('/images/generations', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });

  // 假设返回格式遵循 OpenAI Image API
  return data.data[0].url;
}

// 3. Prompt 优化器 (Enhanced)
export async function optimizePrompt(
  description: string,
  style: string = 'Cinematic',
  resourceType?: 'character' | 'scene' | 'prop' | 'costume' | 'storyboard'
): Promise<string> {
  // 根据资源类型使用不同的系统提示
  let systemPrompt = '';

  if (resourceType === 'character') {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于角色设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的角色描述(服饰、姿态、表情、发型)
3. 添加光影效果(${style}风格)
4. 添加构图建议(视角、景深)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "穿白衬衫的男孩"
输出: "年轻男孩,穿着整洁的白色衬衫,深色长裤,站立姿态,双手自然下垂,表情平静,短发,全身正面视角,柔和的自然光照,电影感构图,细节丰富,高质量渲染,${style}风格"`;
  } else if (resourceType === 'scene') {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于场景设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的场景描述(环境、建筑、植被、天气)
3. 添加光影效果(${style}风格)
4. 添加氛围描述(时间、季节、情绪)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "森林中的小屋"
输出: "茂密森林中的木质小屋,周围环绕着高大的树木,阳光透过树叶洒下斑驳光影,清晨薄雾弥漫,宁静祥和的氛围,细节丰富的木纹和植被,电影感构图,${style}风格,高质量渲染"`;
  } else if (resourceType === 'prop') {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于道具设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的道具描述(材质、颜色、形状、细节)
3. 添加光影效果(${style}风格)
4. 添加背景建议(简洁背景突出道具)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "古老的魔法书"
输出: "古老的魔法书,厚重的皮革封面,金色的神秘符文装饰,泛黄的纸张,精致的金属书扣,柔和的聚光灯照明,简洁的深色背景,细节丰富,${style}风格,高质量渲染"`;
  } else if (resourceType === 'costume') {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于服饰设计。

任务:将用户描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的服饰描述(款式、颜色、材质、纹理、细节)
3. 考虑角色特征和穿着场景
4. 添加光影效果(${style}风格)
5. 添加质量标签(高细节、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "古代将军的战袍"
输出: "古代将军战袍,深红色厚重布料,金色盔甲装饰,精致的龙纹刺绣,威严庄重的气质,细节丰富的金属质感和布料纹理,${style}风格,高质量渲染"`;
  } else if (resourceType === 'storyboard') {
    systemPrompt = `你是专业的AI绘画提示词专家,专注于分镜设计。

任务:将分镜描述扩写为高质量的Doubao-Seedream中文提示词。

输出要求:
1. 保持中文,简洁明了
2. 包含完整的分镜描述(景别、角度、角色、动作、环境)
3. 添加电影感构图建议
4. 添加光影效果(${style}风格)
5. 添加质量标签(分镜级别、专业渲染)
6. 直接输出提示词,不要解释或寒暄

示例:
输入: "medium shot, eye level, 男孩走进教室, 年轻男孩短发, props: 书包"
输出: "中景镜头,平视角度,年轻短发男孩背着书包走进教室,自然光从窗户照入,教室环境清晰可见,电影感构图,分镜级别细节,${style}风格,高质量渲染"`;
  } else {
    // 通用优化器(向后兼容)
    systemPrompt = `你是一位专业的AI绘画提示词专家。
请将用户的简单描述扩写为一段高质量的中文提示词,适用于Doubao-Seedream模型。
要求:
- 包含光影、构图、风格描述
- 包含细节描写(人物服饰、背景材质)
- 保持中文
- 直接输出提示词,不要包含"好的"等废话
- 风格偏向:${style}`;
  }

  return await callDeepSeek([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: description }
  ], 0.3); // 降低温度提高稳定性
}

// 4. JSON 提取辅助 (DeepSeek 可能会返回 Markdown code block)
export function parseJSON(text: string) {
  // 🆕 预处理：清理常见的 JSON 格式问题
  let cleanText = text
    .replace(/[\u201c\u201d]/g, '"')  // 中文双引号 → 英文双引号
    .replace(/[\u2018\u2019]/g, "'")  // 中文单引号 → 英文单引号
    .replace(/，/g, ',')              // 中文逗号 → 英文逗号
    .replace(/：/g, ':')              // 中文冒号 → 英文冒号
    .replace(/\n\s*\/\/[^\n]*/g, '')  // 移除 JavaScript 注释
    .replace(/,(\s*[}\]])/g, '$1')    // 移除尾部逗号
    .replace(/"\s*\n\s*"/g, '", "')   // 修复换行导致的字符串分割
    .replace(/}\s*\n\s*{/g, '},{')    // 修复对象之间缺少逗号
    .replace(/]\s*\n\s*\[/g, '],[');  // 修复数组之间缺少逗号

  // 🆕 修复常见的 JSON 语法错误
  const fixJsonSyntax = (json: string): string => {
    return json
      // 修复缺少逗号的情况: "value"]" -> "value"]
      .replace(/""(\s*[\}\]])/g, '"$1')
      // 修复多余的逗号
      .replace(/,\s*,/g, ',')
      // 修复缺少引号的键
      .replace(/([{\[,]\s*)(\w+)(\s*:)/g, '$1"$2"$3')
      // 移除控制字符
      .replace(/[\x00-\x1F\x7F]/g, ' ')
      // 修复换行符在字符串中
      .replace(/([^\\])\\n/g, '$1\\\\n');
  };

  cleanText = fixJsonSyntax(cleanText);

  try {
    // 尝试直接解析
    return JSON.parse(cleanText);
  } catch (e) {
    console.log('[parseJSON] 直接解析失败，尝试其他策略...');

    // 尝试提取 markdown 代码块
    const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match) {
      try {
        const cleaned = fixJsonSyntax(match[1]);
        return JSON.parse(cleaned);
      } catch (e2) {
        console.error('Failed to parse inner JSON', e2);
      }
    }

    // 🆕 尝试逐个对象解析（处理格式不完整的情况）
    const objectMatches = cleanText.match(/\{[^{}]*\}/g);
    if (objectMatches && objectMatches.length > 0) {
      const validObjects: any[] = [];
      for (const objStr of objectMatches) {
        try {
          const obj = JSON.parse(fixJsonSyntax(objStr));
          if (obj && typeof obj === 'object') {
            validObjects.push(obj);
          }
        } catch {
          // 跳过无法解析的对象
        }
      }
      if (validObjects.length > 0) {
        console.log(`[parseJSON] 逐对象解析成功，提取了 ${validObjects.length} 个对象`);
        return validObjects;
      }
    }

    // 🆕 尝试找到最后一个有效的 JSON 数组结束位置
    const arrayMatch = text.match(/\[[\s\S]*?\](?=\s*$|\s*[^\[\{])/);
    if (arrayMatch) {
      try {
        let cleanJson = fixJsonSyntax(arrayMatch[0]);
        const openBrackets = (cleanJson.match(/\[/g) || []).length;
        const closeBrackets = (cleanJson.match(/\]/g) || []).length;
        if (openBrackets > closeBrackets) {
          cleanJson += ']'.repeat(openBrackets - closeBrackets);
        }
        return JSON.parse(cleanJson);
      } catch (e3) {
        console.error('Failed to parse cleaned array', e3);
      }
    }

    // 🆕 尝试在长文本中寻找包含特定 key 的 JSON 对象 (针对项目库场景优化)
    const keyPatterns = ['"characters"', '"scenes"', '"props"', '"costumes"'];
    for (const key of keyPatterns) {
      const keyIndex = text.indexOf(key);
      if (keyIndex !== -1) {
        // 向上寻找最近的 {
        const startBrace = text.lastIndexOf('{', keyIndex);
        if (startBrace !== -1) {
          // 向下寻找匹配的 }
          let braceCount = 0;
          let endBrace = -1;
          for (let i = startBrace; i < text.length; i++) {
            if (text[i] === '{') braceCount++;
            else if (text[i] === '}') {
              braceCount--;
              if (braceCount === 0) {
                endBrace = i;
                break;
              }
            }
          }
          if (endBrace !== -1) {
            try {
              const potentialJson = text.substring(startBrace, endBrace + 1);
              return JSON.parse(fixJsonSyntax(potentialJson));
            } catch (e) {
              // 继续尝试其他模式
            }
          }
        }
      }
    }

    // 尝试提取大括号内容
    const match2 = text.match(/\{[\s\S]*\}/);
    if (match2) {
      try {
        return JSON.parse(fixJsonSyntax(match2[0]));
      } catch (e4) {
        // 尝试截断到最后一个有效的 }
        let jsonStr = match2[0];
        while (jsonStr.length > 2) {
          try {
            return JSON.parse(fixJsonSyntax(jsonStr));
          } catch {
            // 移除最后一个字符再试
            jsonStr = jsonStr.slice(0, -1);
            // 如果以 } 结尾，尝试解析
            if (jsonStr.endsWith('}')) {
              try {
                return JSON.parse(fixJsonSyntax(jsonStr));
              } catch {
                continue;
              }
            }
          }
        }
      }
    }

    const match3 = text.match(/\[[\s\S]*\]/);
    if (match3) {
      try {
        return JSON.parse(fixJsonSyntax(match3[0]));
      } catch (e5) {
        // 尝试修复常见问题
        let jsonStr = match3[0];
        // 移除尾部的非法字符
        jsonStr = jsonStr.replace(/,\s*\]/g, ']'); // 移除数组末尾的逗号
        jsonStr = jsonStr.replace(/,\s*\}/g, '}'); // 移除对象末尾的逗号
        try {
          return JSON.parse(fixJsonSyntax(jsonStr));
        } catch {
          console.error('Failed even after cleanup');
        }
      }
    }

    console.error('parseJSON failed, raw text:', text.substring(0, 500));
    // 🆕 返回空数组而不是抛出错误，让 Fallback 逻辑处理
    console.warn('[parseJSON] 所有解析策略失败，返回空数组');
    return [];
  }
}
