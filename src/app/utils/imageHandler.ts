// 图片处理和上传工具
import { toast } from 'sonner';

/**
 * 图片文件类型限制
 */
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

/**
 * 图片大小限制（10MB）
 */
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

/**
 * 验证图片文件
 */
export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: '不支持的图片格式，请上传 JPG、PNG、WebP 或 GIF 格式的图片',
    };
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return {
      valid: false,
      error: '图片大小不能超过 10MB',
    };
  }

  return { valid: true };
}

/**
 * 读取图片文件并转换为 Data URL
 */
export function readImageAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        resolve(event.target.result as string);
      } else {
        reject(new Error('读取图片失败'));
      }
    };

    reader.onerror = () => {
      reject(new Error('读取图片失败'));
    };

    reader.readAsDataURL(file);
  });
}

/**
 * 压缩图片
 */
export function compressImage(
  dataUrl: string,
  maxWidth: number = 1920,
  maxHeight: number = 1920,
  quality: number = 0.85
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      // 计算缩放比例
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = width * ratio;
        height = height * ratio;
      }

      // 创建 canvas
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('创建画布失败'));
        return;
      }

      // 绘制图片
      ctx.drawImage(img, 0, 0, width, height);

      // 转换为 Data URL
      try {
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      } catch (error) {
        reject(new Error('压缩图片失败'));
      }
    };

    img.onerror = () => {
      reject(new Error('加载图片失败'));
    };

    img.src = dataUrl;
  });
}

/**
 * 处理图片上传
 */
export async function handleImageUpload(
  file: File,
  options?: {
    compress?: boolean;
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
  }
): Promise<string> {
  // 验证文件
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // 读取文件
  const dataUrl = await readImageAsDataURL(file);

  // 是否压缩
  if (options?.compress !== false) {
    return await compressImage(
      dataUrl,
      options?.maxWidth,
      options?.maxHeight,
      options?.quality
    );
  }

  return dataUrl;
}

/**
 * 从剪贴板粘贴图片
 */
export async function handlePasteImage(event: ClipboardEvent): Promise<string | null> {
  const items = event.clipboardData?.items;
  if (!items) return null;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type.indexOf('image') !== -1) {
      const file = item.getAsFile();
      if (file) {
        try {
          return await handleImageUpload(file);
        } catch (error) {
          toast.error(error instanceof Error ? error.message : '粘贴图片失败');
          return null;
        }
      }
    }
  }

  return null;
}

/**
 * 拖放图片处理
 */
export async function handleDropImage(event: DragEvent): Promise<string | null> {
  event.preventDefault();
  event.stopPropagation();

  const files = event.dataTransfer?.files;
  if (!files || files.length === 0) return null;

  const file = files[0];
  if (!file.type.startsWith('image/')) {
    toast.error('请拖放图片文件');
    return null;
  }

  try {
    return await handleImageUpload(file);
  } catch (error) {
    toast.error(error instanceof Error ? error.message : '上传图片失败');
    return null;
  }
}

/**
 * 获取图片的宽高比
 */
export function getImageAspectRatio(dataUrl: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve(img.width / img.height);
    };

    img.onerror = () => {
      reject(new Error('加载图片失败'));
    };

    img.src = dataUrl;
  });
}

/**
 * 裁剪图片到指定比例
 */
export function cropImageToRatio(
  dataUrl: string,
  targetRatio: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const currentRatio = img.width / img.height;
      
      let sourceX = 0;
      let sourceY = 0;
      let sourceWidth = img.width;
      let sourceHeight = img.height;

      if (currentRatio > targetRatio) {
        // 图片太宽，裁剪宽度
        sourceWidth = img.height * targetRatio;
        sourceX = (img.width - sourceWidth) / 2;
      } else if (currentRatio < targetRatio) {
        // 图片太高，裁剪高度
        sourceHeight = img.width / targetRatio;
        sourceY = (img.height - sourceHeight) / 2;
      }

      const canvas = document.createElement('canvas');
      canvas.width = sourceWidth;
      canvas.height = sourceHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('创建画布失败'));
        return;
      }

      ctx.drawImage(
        img,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        sourceWidth,
        sourceHeight
      );

      try {
        const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
        resolve(croppedDataUrl);
      } catch (error) {
        reject(new Error('裁剪图片失败'));
      }
    };

    img.onerror = () => {
      reject(new Error('加载图片失败'));
    };

    img.src = dataUrl;
  });
}

/**
 * 预设比例
 */
export const ASPECT_RATIOS = {
  '1:1': 1,
  '3:4': 3 / 4,
  '4:3': 4 / 3,
  '16:9': 16 / 9,
  '9:16': 9 / 16,
};

/**
 * 创建图片缩略图
 */
export function createThumbnail(
  dataUrl: string,
  size: number = 200
): Promise<string> {
  return compressImage(dataUrl, size, size, 0.8);
}
