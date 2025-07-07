import React from 'react';
import Image from 'next/image';

interface ImageOptimizedProps {
  /** Tên file Image (không cần đuôi .jpg, .png, .webp) */
  name: string;
  /** Kích thước image (width và height) - phải là number */
  size?: number;
  /** Width tùy chỉnh (ghi đè size) */
  width?: number;
  /** Height tùy chỉnh (ghi đè size) */
  height?: number;
  /** CSS className tùy chỉnh */
  className?: string;
  /** Priority loading cho Next.js Image */
  priority?: boolean;
  type?: 'jpg' | 'png' | 'webp' | 'svg';
  style?: React.CSSProperties;
}

const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  name,
  size = 96,
  width,
  height,
  className = '',
  priority = false,
  type = 'jpg',
  style,
  ...props
}) => {
  // Xử lý kích thước
  const finalWidth = width || size;
  const finalHeight = height || size;
  
  // Tạo đường dẫn đến file SVG
  const iconPath = `/images/${name}.${type}`;
  console.log(iconPath);
  
  return (
    <Image
      src={iconPath}
      alt={name}
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      className={`inline-block ${className}`}
      style={style}
      {...props}
    />
  );
};

export default ImageOptimized; 