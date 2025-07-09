"use client";

import { useState, useEffect, useRef } from "react";

const ScrollingLines = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [elementTop, setElementTop] = useState(0);
  const [currentLeftPosition, setCurrentLeftPosition] = useState(0);
  const [currentRightPosition, setCurrentRightPosition] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Hàm lerp để tạo smooth transition
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Intersection Observer để detect khi vào viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (entry.isIntersecting && componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect();
          setElementTop(window.scrollY + rect.top);
        }
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // useEffect để handle smooth animation
  useEffect(() => {
    const animate = () => {
      const targetLeftPosition = calculateBrightSpotPosition(0);
      const targetRightPosition = calculateBrightSpotPosition(300);
      
      // Sử dụng lerp với factor 0.08 (càng nhỏ càng mượt nhưng càng chậm)
      setCurrentLeftPosition(prev => lerp(prev, targetLeftPosition, 0.08));
      setCurrentRightPosition(prev => lerp(prev, targetRightPosition, 0.08));
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollY, isInViewport, elementTop]);

  // Tính toán vị trí chấm sáng dựa trên scroll relative với component
  const calculateBrightSpotPosition = (offset: number = 0) => {
    const componentHeight = componentRef.current?.offsetHeight || 1000;
    
    // Nếu chưa vào viewport - chấm sáng ở đầu
    if (!isInViewport && scrollY < elementTop) {
      return 0;
    }
    
    // Nếu đã ra khỏi viewport (scroll qua) - chấm sáng ở cuối
    if (!isInViewport && scrollY > elementTop) {
      return componentHeight - 250;
    }
    
    // Khi đang trong viewport - di chuyển theo scroll
    const relativeScroll = scrollY - elementTop + offset;
    const clampedScroll = Math.max(0, Math.min(relativeScroll, componentHeight - 250));
    
    return clampedScroll;
  };

  return (
    <div 
      ref={componentRef}
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[26px] h-full pointer-events-none z-20"
    >
      {/* Debug: thêm background để test */}
      <div className="absolute inset-0"></div>
      
      {/* Chấm sáng trái */}
      <div className="absolute left-0 top-0 w-[2px] h-full">
        <div 
          className="absolute w-full h-[250px] transition-none"
          style={{
            top: `${currentLeftPosition}px`,
            background: `linear-gradient(to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 21.15%,
              rgba(255, 255, 255, 1) 74.04%,
              rgba(255, 255, 255, 0) 99.52%)`
          }}
        />
      </div>

      {/* Chấm sáng phải */}
      <div className="absolute right-0 top-0 w-[2px] h-full">
        <div 
          className="absolute w-full h-[250px] transition-none"
          style={{
            top: `${currentRightPosition}px`,
            background: `linear-gradient(to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 21.15%,
              rgba(255, 255, 255, 1) 74.04%,
              rgba(255, 255, 255, 0) 99.52%)`
          }}
        />
      </div>
    </div>
  );
};

export default ScrollingLines; 