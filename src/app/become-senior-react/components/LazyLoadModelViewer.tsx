// src/app/become-senior-react/components/LazyLoadModelViewer.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react'; // Thêm useCallback
import { useGLTF } from '@react-three/drei';
// Vui lòng đảm bảo đường dẫn này chính xác tới file hook của bạn
import { useInView } from './useInView';
import ThreeModelViewer from './ThreeModelViewer';

interface LazyLoadModelViewerProps {
    className?: string;
    modelUrl: string;
    maskImageUrl: string;
}

const LazyLoadModelViewer = ({
    className,
    modelUrl,
    maskImageUrl,
}: LazyLoadModelViewerProps) => {
    // State này vẫn giữ nguyên
    const [isActivated, setIsActivated] = useState(false);

    // useInView hook vẫn giữ nguyên
    const [containerRef, isInView] = useInView({ threshold: 0.1, once: true });

    // --- CẢI TIẾN: Tạo một hàm kích hoạt duy nhất ---
    // Sử dụng useCallback để tối ưu, đảm bảo hàm này không được tạo lại mỗi lần render
    // trừ khi isActivated thay đổi.
    const activateModel = useCallback(() => {
        // Nếu đã được kích hoạt rồi, không làm gì cả để tránh xử lý thừa
        if (isActivated) return;

        // Luôn preload model trước khi hiển thị
        useGLTF.preload(modelUrl);

        // Kích hoạt hiển thị
        setIsActivated(true);
    }, [isActivated, modelUrl]); // Phụ thuộc vào isActivated và modelUrl

    // useEffect bây giờ chỉ gọi hàm kích hoạt khi isInView
    useEffect(() => {
        if (isInView) {
            activateModel();
        }
    }, [isInView, activateModel]);

    // Nếu đã được kích hoạt, render component model thật (không thay đổi)
    if (isActivated) {
        return (
            <ThreeModelViewer
                className={className}
                modelUrl={modelUrl}
            />
        );
    }

    // Nếu chưa, hiển thị mặt nạ.
    // Thay vì gọi handleMouseEnter, chúng ta gọi trực tiếp hàm activateModel.
    return (
        <div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            onMouseEnter={activateModel} // Kích hoạt khi hover
            onClick={activateModel} // Thêm onClick để kích hoạt trên thiết bị cảm ứng
            className={`${className} cursor-pointer`}
            style={{
                backgroundImage: `url(${maskImageUrl})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            aria-label="Tải mô hình 3D" // Thêm aria-label cho accessibility
            role="button"
        />
    );
};

export default LazyLoadModelViewer;