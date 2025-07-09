"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

// Model URL constant for preloading
const MODEL_URL = "/images/model16.glb";

// Preload model immediately when module loads
useGLTF.preload(MODEL_URL);

// Optimized device performance detection (cached)
let cachedPerformance: 'low' | 'medium' | 'high' | null = null;
let cachedGPUInfo: { hasGPU: boolean; isIntegrated: boolean } | null = null;

const getGPUInfo = () => {
  if (cachedGPUInfo) return cachedGPUInfo;
  if (typeof window === 'undefined') return { hasGPU: true, isIntegrated: false };
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    
    if (!gl) {
      cachedGPUInfo = { hasGPU: false, isIntegrated: true };
      return cachedGPUInfo;
    }
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
    
    // Check for integrated graphics (no dedicated GPU)
    const isIntegrated = /Intel|HD Graphics|UHD Graphics|Iris|Mali|Adreno|PowerVR|VideoCore/i.test(renderer as string);
    
    cachedGPUInfo = { hasGPU: true, isIntegrated };
    return cachedGPUInfo;
  } catch (error) {
    console.warn('GPU detection failed:', error);
    cachedGPUInfo = { hasGPU: true, isIntegrated: false };
    return cachedGPUInfo;
  }
};

const getDevicePerformance = (): 'low' | 'medium' | 'high' => {
  if (cachedPerformance) return cachedPerformance;
  if (typeof window === 'undefined') return 'medium';
  
  // Fast mobile detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    cachedPerformance = 'low';
    return 'low';
  }
  
  // GPU check
  const gpuInfo = getGPUInfo();
  if (!gpuInfo.hasGPU || gpuInfo.isIntegrated) {
    cachedPerformance = 'low';
    return 'low';
  }
  
  // Memory check (if available)
  const memory = (navigator as { deviceMemory?: number }).deviceMemory;
  if (memory) {
    if (memory < 4) {
      cachedPerformance = 'low';
      return 'low';
    }
    if (memory >= 8) {
      cachedPerformance = 'high';
      return 'high';
    }
  }
  
  cachedPerformance = 'medium';
  return 'medium';
};

// Optimized performance presets (imperceptible but efficient)
const PERFORMANCE_SETTINGS = {
  low: { 
    targetFPS: 20, // Lower FPS for weak devices - still smooth for slow rotation
    pixelRatio: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.25), // Slight increase for sharpness
    shadows: false,
    antialias: true // Enable antialiasing for smoother edges on weak devices
  },
  medium: { 
    targetFPS: 24, // Reduced from 25
    pixelRatio: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5), 
    shadows: true,
    antialias: true // Enable for better quality
  },
  high: { 
    targetFPS: 25, 
    pixelRatio: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2), 
    shadows: true,
    antialias: true 
  }
};

// Minimal loading fallback for faster loading
const LoadingBox = () => {
  return null; // No visible loader for fastest experience
};

// Optimized Auto-rotating Model component
const AutoRotatingModel = ({ 
  url, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1,
  autoRotateSpeed = 0.35,
  targetFPS = 60,
  devicePerformance = 'medium'
}: { 
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotateSpeed?: number;
  targetFPS?: number;
  devicePerformance?: 'low' | 'medium' | 'high';
}) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  const lastFrameTime = useRef(0);
  
  // Optimize model materials on load (once)
  const optimizedScene = useMemo(() => {
    const clonedScene = scene.clone();
    
    // Material optimization based on device performance
    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Disable shadows on low-end devices
        if (devicePerformance === 'low') {
          child.castShadow = false;
          child.receiveShadow = false;
        }
        
        // Optimize materials (removed lowp precision to avoid pixelation)
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => {
              // Keep default precision for better quality
              mat.needsUpdate = true;
            });
          } else {
            // Keep default precision for better quality
            child.material.needsUpdate = true;
          }
        }
      }
    });
    
    return clonedScene;
  }, [scene, devicePerformance]);
  
  // Memory cleanup on unmount
  useEffect(() => {
    return () => {
      if (optimizedScene) {
        optimizedScene.traverse((child) => {
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
  }, [optimizedScene]);
  
  // Consistent 24-25fps rotation for optimal battery/smoothness balance
  useFrame((_, delta) => {
    if (!modelRef.current) return;
    
    const now = performance.now();
          const frameDelay = 1000 / targetFPS; // 24-25fps optimal
    
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
      <primitive object={optimizedScene} />
    </group>
  );
};

const Model = () => {
  // Cached performance detection (runs once)
  const devicePerformance = useMemo(() => getDevicePerformance(), []);
  const gpuInfo = useMemo(() => getGPUInfo(), []);
  const settings = PERFORMANCE_SETTINGS[devicePerformance];
  
  // GPU-based rotation configuration
  const hasGoodGPU = gpuInfo.hasGPU && !gpuInfo.isIntegrated;
  const shouldAutoRotate = hasGoodGPU && devicePerformance !== 'low'; // Disable camera orbit for weak devices
  const rotationSpeed = devicePerformance === 'low' ? 0.05 : (hasGoodGPU ? 0.15 : 0.08); // Very slow rotation for weak devices
  const orbitSpeed = hasGoodGPU ? 0.8 : 0.3; // Slower orbit for weak GPU
  
  // Model configuration (GPU-optimized)
  const modelPosition: [number, number, number] = [0, -2.5, 0];
  const modelRotation: [number, number, number] = [0, 0, 0];
  const modelScale = 1;
  const autoRotateSpeed = rotationSpeed;
  
  // Camera settings
  const cameraPosition: [number, number, number] = [3, 2, 3];
  const cameraFov = 50;

  return (
    <div className="w-full h-full flex items-center justify-end">
      <div className="w-10/12 h-full translate-x-32">
        <Canvas 
          camera={{ position: cameraPosition, fov: cameraFov }}
          dpr={settings.pixelRatio}
          gl={{ 
            antialias: settings.antialias,
            powerPreference: devicePerformance === 'low' ? 'low-power' : 'high-performance',
            alpha: true, // Enable transparency for transparent background
            stencil: false, // Disable stencil buffer
            depth: true
          }}
          frameloop="always"
          performance={{ min: 0.8 }} // Adaptive performance scaling
        >
          {/* Optimized lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1.2}
            castShadow={settings.shadows}
            shadow-mapSize-width={devicePerformance === 'low' ? 512 : 1024}
            shadow-mapSize-height={devicePerformance === 'low' ? 512 : 1024}
            shadow-camera-near={1}
            shadow-camera-far={50}
          />
          
          {/* Environment for all devices, but optimized */}
          <Environment 
            preset={devicePerformance === 'low' ? 'studio' : 'sunset'} 
            background={false} 
          />
          
          <Suspense fallback={<LoadingBox />}>
            <AutoRotatingModel 
              url={MODEL_URL}
              position={modelPosition}
              rotation={modelRotation}
              scale={modelScale}
              autoRotateSpeed={autoRotateSpeed}
              targetFPS={settings.targetFPS}
              devicePerformance={devicePerformance}
            />
          </Suspense>
          
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={shouldAutoRotate} // Disable for weak GPU
            autoRotateSpeed={orbitSpeed} // GPU-adaptive speed
            enableDamping={true}
            dampingFactor={0.05}
            maxPolarAngle={Math.PI * 0.75} // Limit vertical rotation
            minPolarAngle={Math.PI * 0.25}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Model;
