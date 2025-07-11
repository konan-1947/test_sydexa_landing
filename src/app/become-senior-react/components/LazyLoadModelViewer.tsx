// src/app/become-senior-react/components/LazyLoadModelViewer.tsx
"use client";

import React, { useState, useEffect } from 'react';
import ThreeModelViewer from './ThreeModelViewer';

// `maskImageUrl` không còn cần thiết nữa
interface LazyLoadModelViewerProps {
    className?: string;
    modelUrl: string;
}

const LazyLoadModelViewer = ({
    className,
    modelUrl,
}: LazyLoadModelViewerProps) => {
    const [isActivated, setIsActivated] = useState(false);

    // Logic lắng nghe tương tác người dùng vẫn giữ nguyên
    useEffect(() => {
        if (isActivated) {
            return;
        }

        const handleFirstInteraction = () => {
            setIsActivated(true);
            window.removeEventListener('mousemove', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
        };

        window.addEventListener('mousemove', handleFirstInteraction);
        window.addEventListener('scroll', handleFirstInteraction);

        return () => {
            window.removeEventListener('mousemove', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
        };
    }, [isActivated]);

    // Nếu đã được kích hoạt, render component model thật
    if (isActivated) {
        return (
            <ThreeModelViewer
                className={className}
                modelUrl={modelUrl}
            />
        );
    }

    // --- THAY ĐỔI CHÍNH ---
    // Nếu chưa, chỉ hiển thị một div trống.
    // div này đóng vai trò là một placeholder để giữ chỗ trên layout.
    // Quan trọng: `className` được truyền vào PHẢI định nghĩa kích thước (width, height)
    // cho div này, nếu không nó sẽ có kích thước 0x0 và gây ra hiện tượng "nhảy layout" (layout shift)
    // khi model thật được tải.
    return (
        <div
            className={className}
            aria-label="Vùng chứa mô hình 3D, sẽ được tải khi bạn tương tác với trang"
        />
    );
};

export default LazyLoadModelViewer;