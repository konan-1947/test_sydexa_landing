"use client";

import { useEffect, useState, useRef } from "react";

const AnimatedPathSvg = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentLeftCurveSpot, setCurrentLeftCurveSpot] = useState(0.3);
  const [currentLine1Spot, setCurrentLine1Spot] = useState(0.3);
  const [currentLine2Spot, setCurrentLine2Spot] = useState(0.3);
  const [currentRightCurveSpot, setCurrentRightCurveSpot] = useState(0.3);
  const componentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Hàm lerp để tạo smooth transition
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!componentRef.current) return;
      
      const rect = componentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Bắt đầu animation khi component ở giữa màn hình
      const centerPoint = windowHeight / 2;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Tính progress từ khi component bắt đầu vào view đến khi ra khỏi view
        let progress = 0;
        if (rect.top <= centerPoint) {
          progress = Math.min((centerPoint - rect.top) / (rect.height + windowHeight), 1);
        }
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Gọi ngay để check vị trí ban đầu
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect để handle smooth animation
  useEffect(() => {
    const animate = () => {
      const targetLeftCurveSpot = getSpotPosition(0);
      const targetLine1Spot = getSpotPosition(1);
      const targetLine2Spot = getSpotPosition(2);
      const targetRightCurveSpot = getSpotPosition(0);
      
      // Sử dụng lerp với factor 0.08 (càng nhỏ càng mượt nhưng càng chậm)
      setCurrentLeftCurveSpot(prev => lerp(prev, targetLeftCurveSpot, 0.08));
      setCurrentLine1Spot(prev => lerp(prev, targetLine1Spot, 0.08));
      setCurrentLine2Spot(prev => lerp(prev, targetLine2Spot, 0.08));
      setCurrentRightCurveSpot(prev => lerp(prev, targetRightCurveSpot, 0.08));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollProgress]);

  // Tính toán vị trí đốm sáng cho từng line với offset so le
  const getSpotPosition = (lineIndex: number) => {
    const offset = lineIndex * 0.1; // Mỗi line delay 0.2 scroll units
    const adjustedProgress = Math.max(0, scrollProgress - offset);
    return 0.3 + (adjustedProgress * 3);
  };

  return (
    <div ref={componentRef} className="h-fit w-screen flex justify-center items-center">
      <svg width="1440" height="277" viewBox="0 150 1440 277" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lớp base - Các đường path gốc luôn hiển thị */}
        <path d="M0 150H650C667.673 150 682 164.327 682 182V427" stroke="url(#paint0_linear_221_924)" strokeWidth="2"/>
        <path d="M707 149.5V426.5" stroke="url(#paint1_linear_221_924)" strokeWidth="2"/>
        <path d="M733 149.5V426.5" stroke="url(#paint5_linear_221_924)" strokeWidth="2"/>
        <path d="M1440 150H790C772.327 150 758 164.327 758 182V427" stroke="url(#paint6_linear_221_924)" strokeWidth="2"/>
        
        {/* Lớp highlight - Đốm sáng di chuyển */}
        <path d="M0 150H650C667.673 150 682 164.327 682 182V427" stroke="url(#leftCurveHighlight)" strokeWidth="4" opacity="0.9"/>
        <path d="M707 149.5V426.5" stroke="url(#line1Highlight)" strokeWidth="4" opacity="0.9"/>
        <path d="M733 149.5V426.5" stroke="url(#line2Highlight)" strokeWidth="4" opacity="0.9"/>
        <path d="M1440 150H790C772.327 150 758 164.327 758 182V427" stroke="url(#rightCurveHighlight)" strokeWidth="4" opacity="0.9"/>
        
        <defs>
          {/* Gradients gốc cho lớp base */}
          <linearGradient id="paint0_linear_221_924" x1="341" y1="140" x2="341" y2="403.627" gradientUnits="userSpaceOnUse">
            <stop stopColor="#91B0FF" stopOpacity="0"/>
            <stop offset="0.317308" stopColor="#91B0FF"/>
            <stop offset="1" stopColor="#91B0FF" stopOpacity="0"/>
          </linearGradient>
          
          <linearGradient id="paint1_linear_221_924" x1="707.5" y1="149.5" x2="707.5" y2="403.127" gradientUnits="userSpaceOnUse">
            <stop stopColor="#91B0FF" stopOpacity="0"/>
            <stop offset="0.317308" stopColor="#91B0FF"/>
            <stop offset="1" stopColor="#91B0FF" stopOpacity="0"/>
          </linearGradient>
          
          <linearGradient id="paint5_linear_221_924" x1="733.5" y1="149.5" x2="733.5" y2="403.127" gradientUnits="userSpaceOnUse">
            <stop stopColor="#91B0FF" stopOpacity="0"/>
            <stop offset="0.317308" stopColor="#91B0FF"/>
            <stop offset="1" stopColor="#91B0FF" stopOpacity="0"/>
          </linearGradient>
          
          <linearGradient id="paint6_linear_221_924" x1="1099" y1="140" x2="1099" y2="403.627" gradientUnits="userSpaceOnUse">
            <stop stopColor="#91B0FF" stopOpacity="0"/>
            <stop offset="0.317308" stopColor="#91B0FF"/>
            <stop offset="1" stopColor="#91B0FF" stopOpacity="0"/>
          </linearGradient>

          {/* Gradients highlight cho đốm sáng */}
          <linearGradient id="leftCurveHighlight" x1="341" y1="140" x2="341" y2="403.627" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="transparent"/>
            <stop offset={Math.max(0, currentLeftCurveSpot - 0.08)} stopColor="transparent"/>
            <stop offset={Math.max(0, currentLeftCurveSpot - 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={currentLeftCurveSpot} stopColor="white"/>
            <stop offset={Math.min(1, currentLeftCurveSpot + 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={Math.min(1, currentLeftCurveSpot + 0.08)} stopColor="transparent"/>
            <stop offset="1" stopColor="transparent"/>
          </linearGradient>
          
          <linearGradient id="line1Highlight" x1="707.5" y1="149.5" x2="707.5" y2="403.127" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="transparent"/>
            <stop offset={Math.max(0, currentLine1Spot - 0.08)} stopColor="transparent"/>
            <stop offset={Math.max(0, currentLine1Spot - 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={currentLine1Spot} stopColor="white"/>
            <stop offset={Math.min(1, currentLine1Spot + 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={Math.min(1, currentLine1Spot + 0.08)} stopColor="transparent"/>
            <stop offset="1" stopColor="transparent"/>
          </linearGradient>
          
          <linearGradient id="line2Highlight" x1="733.5" y1="149.5" x2="733.5" y2="403.127" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="transparent"/>
            <stop offset={Math.max(0, currentLine2Spot - 0.08)} stopColor="transparent"/>
            <stop offset={Math.max(0, currentLine2Spot - 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={currentLine2Spot} stopColor="white"/>
            <stop offset={Math.min(1, currentLine2Spot + 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={Math.min(1, currentLine2Spot + 0.08)} stopColor="transparent"/>
            <stop offset="1" stopColor="transparent"/>
          </linearGradient>
          
          <linearGradient id="rightCurveHighlight" x1="1099" y1="140" x2="1099" y2="403.627" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="transparent"/>
            <stop offset={Math.max(0, currentRightCurveSpot - 0.08)} stopColor="transparent"/>
            <stop offset={Math.max(0, currentRightCurveSpot - 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={currentRightCurveSpot} stopColor="white"/>
            <stop offset={Math.min(1, currentRightCurveSpot + 0.04)} stopColor="rgba(255,255,255,0.3)"/>
            <stop offset={Math.min(1, currentRightCurveSpot + 0.08)} stopColor="transparent"/>
            <stop offset="1" stopColor="transparent"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedPathSvg; 