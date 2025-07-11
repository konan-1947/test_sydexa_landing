// src/app/become-senior-react/components/LazyLoadModelViewer.tsx
"use client";

import React, { useState, useEffect } from 'react';
// Không cần useGLTF, useInView, useCallback nữa
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
    // State để theo dõi xem mô hình đã được kích hoạt để hiển thị hay chưa
    const [isActivated, setIsActivated] = useState(false);

    // --- CẢI TIẾN: Lắng nghe tương tác toàn cục trên trang ---
    useEffect(() => {
        // Nếu đã được kích hoạt rồi, không cần làm gì nữa.
        if (isActivated) {
            return;
        }

        // Đây là hàm sẽ được gọi MỘT LẦN DUY NHẤT khi người dùng tương tác.
        const handleFirstInteraction = () => {
            // Kích hoạt việc hiển thị component model
            setIsActivated(true);

            // Rất quan trọng: Gỡ bỏ các event listener ngay sau khi chúng được kích hoạt
            // để tránh việc hàm này bị gọi lại và gây ra xử lý thừa.
            window.removeEventListener('mousemove', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
        };

        // Thêm các event listener vào đối tượng `window` để bắt được tương tác ở bất kỳ đâu trên trang.
        window.addEventListener('mousemove', handleFirstInteraction);
        window.addEventListener('scroll', handleFirstInteraction);

        // Hàm dọn dẹp (cleanup function) của useEffect:
        // Sẽ được gọi khi component bị unmount (gỡ khỏi DOM).
        // Điều này đảm bảo không bị rò rỉ bộ nhớ nếu component biến mất trước khi người dùng tương tác.
        return () => {
            window.removeEventListener('mousemove', handleFirstInteraction);
            window.removeEventListener('scroll', handleFirstInteraction);
        };
    }, [isActivated]); // Effect này chỉ chạy lại khi `isActivated` thay đổi.

    // Nếu đã được kích hoạt, render component model thật.
    // Việc tải file .gltf sẽ bắt đầu từ đây, khi component này được mount.
    if (isActivated) {
        return (
            <ThreeModelViewer
                className={className}
                modelUrl={modelUrl}
            />
        );
    }

    // Nếu chưa, hiển thị mặt nạ placeholder.
    // Không cần ref, onMouseEnter, hay onClick nữa vì logic đã được chuyển lên useEffect.
    return (
        <div
            className={className}
            style={{
                backgroundImage: `url(${maskImageUrl})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            // Cập nhật aria-label để phản ánh đúng hành vi mới
            aria-label="Mô hình 3D sẽ được tải khi bạn tương tác với trang"
        />
    );
};

export default LazyLoadModelViewer;