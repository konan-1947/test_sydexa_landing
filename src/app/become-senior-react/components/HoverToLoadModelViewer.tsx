// src/components/HoverToLoadModelViewer.tsx
"use client";

import { useState } from 'react';
import IframeModelViewer from './IframeModelViewer';

interface HoverToLoadModelViewerProps {
    className?: string;
    maskImageSrc: string; // Prop để nhận đường dẫn ảnh mặt nạ
}

const HoverToLoadModelViewer = ({ className, maskImageSrc }: HoverToLoadModelViewerProps) => {
    // State để quyết định xem nên hiển thị mặt nạ hay iframe thật
    const [isActivated, setIsActivated] = useState(false);

    // Nếu đã kích hoạt (đã hover), render iframe thật
    if (isActivated) {
        return <IframeModelViewer className={className} />;
    }

    // Nếu chưa, hiển thị mặt nạ (một thẻ div với ảnh nền)
    return (
        <div
            // Đây là phần quan trọng nhất: kích hoạt khi chuột đi vào
            onMouseEnter={() => setIsActivated(true)}
            // Giữ nguyên các class CSS từ component cha để đảm bảo layout không đổi
            className={className}
            // Thiết lập ảnh mặt nạ làm nền
            style={{
                backgroundImage: `url(${maskImageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer' // Thêm con trỏ để người dùng biết có thể tương tác
            }}
            // Thêm title để cải thiện accessibility và hiện tooltip khi người dùng hover
            title="Di chuột để tải mô hình 3D"
        />
    );
};

export default HoverToLoadModelViewer;