"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

// Detect device performance (simple version)
const getDevicePerformance = () => {
  if (typeof window === 'undefined') return 'medium';
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const memory = (navigator as { deviceMemory?: number }).deviceMemory || 4;
  
  if (isMobile || memory < 4) return 'low';
  if (memory >= 8) return 'high';
  return 'medium';
};

// Performance presets
const PERFORMANCE_SETTINGS = {
  low: { targetFPS: 30, pixelRatio: 1, shadows: false },
  medium: { targetFPS: 45, pixelRatio: 1.5, shadows: true },
  high: { targetFPS: 60, pixelRatio: 2, shadows: true }
};

// Simple loading fallback
const LoadingBox = () => {
  return (
    <>  </>
  );
};

// Auto-rotating Model component with adjustable position
const AutoRotatingModel = ({ 
  url, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1,
  autoRotateSpeed = 0.35,
  targetFPS = 60
}: { 
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotateSpeed?: number;
  targetFPS?: number;
}) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  const lastFrameTime = useRef(0);
  
  // Memory cleanup on unmount
  useEffect(() => {
    return () => {
      if (scene) {
        scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry?.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => mat.dispose());
            } else if (child.material) {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [scene]);
  
  // Performance-optimized rotation
  useFrame((_, delta) => {
    if (!modelRef.current) return;
    
    const now = performance.now();
    const frameDelay = 1000 / targetFPS;
    
    if (now - lastFrameTime.current >= frameDelay) {
      modelRef.current.rotation.y += autoRotateSpeed * delta;
      lastFrameTime.current = now;
    }
  });
  
  return (
    <group 
      ref={modelRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <primitive object={scene} />
    </group>
  );
};

const Model = () => {
  // Performance detection
  const devicePerformance = useMemo(() => getDevicePerformance(), []);
  const settings = PERFORMANCE_SETTINGS[devicePerformance];
  
  // Điều chỉnh các giá trị này để thay đổi vị trí model
  const modelPosition: [number, number, number] = [0, -2.5, 0]; // [x, y, z] - y âm để hạ xuống
  const modelRotation: [number, number, number] = [0, 0, 0]; // [x, y, z] rotation in radians
  const modelScale = 1; // Tăng/giảm kích thước
  const autoRotateSpeed = 0.35; // Tốc độ quay
  
  // Camera settings
  const cameraPosition: [number, number, number] = [3, 2, 3]; // [x, y, z]
  const cameraFov = 50; // Field of view

  return (
    <div className="w-full h-full flex items-center justify-end">
      <div className="w-10/12 h-full translate-x-32">
        <Canvas 
          camera={{ position: cameraPosition, fov: cameraFov }}
          dpr={settings.pixelRatio}
          gl={{ 
            antialias: devicePerformance !== 'low',
            powerPreference: devicePerformance === 'low' ? 'low-power' : 'high-performance'
          }}
          frameloop="always" // Render liên tục để auto-rotate hoạt động
        >
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1}
            castShadow={settings.shadows}
          />
          <Environment preset="sunset" background={false} />
          
          <Suspense fallback={<LoadingBox />}>
            <AutoRotatingModel 
              url="/images/model16.glb"
              position={modelPosition}
              rotation={modelRotation}
              scale={modelScale}
              autoRotateSpeed={autoRotateSpeed}
              targetFPS={settings.targetFPS}
            />
          </Suspense>
          
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={2}
            enableDamping={true}
            dampingFactor={0.05}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Model;
