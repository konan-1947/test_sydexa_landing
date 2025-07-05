import React from 'react';
import Image from 'next/image';

interface SvgIconOptimizedProps {
  /** Tên file SVG (không cần đuôi .svg) */
  name: string;
  /** Kích thước icon (width và height) - phải là number */
  size?: number;
  /** Width tùy chỉnh (ghi đè size) */
  width?: number;
  /** Height tùy chỉnh (ghi đè size) */
  height?: number;
  /** CSS className tùy chỉnh */
  className?: string;
  /** Alt text cho accessibility */
  alt?: string;
  /** Priority loading cho Next.js Image */
  priority?: boolean;
  /** Props khác cho Next.js Image */
  [key: string]: string | number | boolean | undefined;
}

const SvgIcon: React.FC<SvgIconOptimizedProps> = ({
  name,
  size = 24,
  width,
  height,
  className = '',
  alt,
  priority = false,
  ...props
}) => {
  // Xử lý kích thước
  const finalWidth = width || size;
  const finalHeight = height || size;
  
  // Tạo đường dẫn đến file SVG
  const iconPath = `/icons/${name}.svg`;
  console.log(iconPath);
  
  // Alt text mặc định
  const altText = alt || `${name} icon`;

  return (
    <Image
      src={iconPath}
      alt={altText}
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      className={`inline-block ${className}`}
      {...props}
    />
  );
};

export default SvgIcon; 