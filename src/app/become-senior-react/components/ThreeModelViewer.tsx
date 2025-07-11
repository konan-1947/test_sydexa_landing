// src/app/become-senior-react/components/ThreeModelViewer.tsx

// BẮT BUỘC: Đánh dấu đây là Client Component
"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// Import thêm <Stage> và <Environment>
import { useGLTF, Stage, OrbitControls, Environment } from '@react-three/drei';

// Component con để tải model, không thay đổi
function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

// Props cho component chính
interface ThreeModelViewerProps {
    modelUrl?: string;
    className?: string;
}

/**
 * Component hiển thị model 3D "cắm và chạy".
 * Tự động có ánh sáng, môi trường, bóng đổ và tự xoay.
 */
const ThreeModelViewer = ({
    modelUrl = "/images/model27.glb",
    className,
}: ThreeModelViewerProps) => {
    return (
        <div className={className || "w-full h-full"}>
            <Canvas camera={{ fov: 45 }}> {/* Điều chỉnh góc nhìn camera một chút */}
                <Suspense fallback={null}>
                    {/* 
            <Stage> sẽ tự động tạo ánh sáng, bóng đổ và căn giữa model.
            Bạn không cần thêm <ambientLight> hay <directionalLight> nữa.
          */}
                    <Stage environment="city" intensity={0.6} shadows="contact">
                        <Model url={modelUrl} />
                    </Stage>

                    {/* 
            <Environment> thêm một nền và nguồn sáng từ môi trường.
            "city" là một preset có sẵn, bạn có thể thử "sunset", "apartment"...
          */}
                    <Environment preset="city" />
                </Suspense>

                {/* Điều khiển camera vẫn giữ nguyên để có tính năng tự xoay */}
                <OrbitControls autoRotate autoRotateSpeed={1.0} enableZoom={true} />
            </Canvas>
        </div>
    );
};

// Preload model để tăng tốc độ hiển thị
useGLTF.preload("/images/model27.glb");

export default ThreeModelViewer;