import { useState, useRef } from 'react';
import { Upload, ImageIcon, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { handleImageUpload, handleDropImage } from '../utils/imageHandler';
import { toast } from 'sonner';

interface ImageUploadBoxProps {
  imageUrl?: string;
  alt: string;
  aspectRatio: string; // '1:1' | '3:4' | '16:9'
  onImageChange: (url: string) => void;
  generateButton?: React.ReactNode;
}

export function ImageUploadBox({
  imageUrl,
  alt,
  aspectRatio,
  onImageChange,
  generateButton,
}: ImageUploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const aspectRatioClasses = {
    '1:1': 'aspect-square',
    '3:4': 'aspect-[3/4]',
    '16:9': 'aspect-video',
  };

  const handleFileSelect = async (file: File) => {
    setIsUploading(true);
    try {
      const dataUrl = await handleImageUpload(file, { compress: true });
      onImageChange(dataUrl);
      toast.success('图片上传成功');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '上传失败');
    } finally {
      setIsUploading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        await handleFileSelect(file);
      } else {
        toast.error('请拖放图片文件');
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <div
        className={`${aspectRatioClasses[aspectRatio]} bg-white rounded-lg flex items-center justify-center border-2 border-dashed overflow-hidden relative cursor-pointer transition-all ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {isUploading ? (
          <div className="text-center p-4">
            <Loader2 className="w-12 h-12 text-blue-500 mx-auto mb-2 animate-spin" />
            <p className="text-blue-600 text-sm">上传中...</p>
          </div>
        ) : imageUrl ? (
          <img src={imageUrl} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center p-4">
            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">点击或拖拽上传图片</p>
            <p className="text-gray-400 text-xs mt-1">支持 JPG、PNG、WebP</p>
          </div>
        )}

        {/* 悬停遮罩 */}
        {imageUrl && !isUploading && (
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
            <Upload className="w-8 h-8 text-white" />
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
        />
      </div>

      {generateButton}
    </div>
  );
}
