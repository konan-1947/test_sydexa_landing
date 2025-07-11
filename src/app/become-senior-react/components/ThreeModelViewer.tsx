// src/app/become-senior-react/components/ThreeModelViewer.tsx
"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, Environment } from '@react-three/drei';

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={1} />; // Bạn có thể thêm prop scale ở đây nếu muốn
}

interface ThreeModelViewerProps {
    modelUrl?: string;
    className?: string;
}

const ThreeModelViewer = ({
    modelUrl = "/images/model27.glb",
    className,
}: ThreeModelViewerProps) => {
    return (
        <div className={className || "w-full h-full"}>
            <Canvas camera={{ fov: 45 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6} shadows="contact">
                        <Model url={modelUrl} />
                    </Stage>
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={1.0} enableZoom={true} />
            </Canvas>
        </div>
    );
};

// !!! QUAN TRỌNG: Loại bỏ dòng này khỏi đây.
// Chúng ta sẽ gọi preload một cách có chủ đích trong component controller.
// useGLTF.preload("/images/model27.glb");

export default ThreeModelViewer;