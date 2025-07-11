"use client";

import { useEffect, useState, useRef } from "react";

const DualScrollingLightSpots = () => {
  const [, setScrollY] = useState(0);
  const [currentGradientOffset, setCurrentGradientOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Hàm lerp để tạo smooth transition
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect để handle smooth animation
  useEffect(() => {
    const animate = () => {
      const targetGradientOffset = getGradientOffset();

      // Sử dụng lerp với factor 0.08 (càng nhỏ càng mượt nhưng càng chậm)
      setCurrentGradientOffset(prev => lerp(prev, targetGradientOffset, 0.08));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Tính toán vị trí của đốm sáng dọc theo vector dựa trên scroll
  const getGradientOffset = () => {
    if (!containerRef.current) return 0;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;

    const normalizedPosition =
      (viewportCenter - elementCenter) / (windowHeight / 2);
    const clampedPosition = Math.max(-1, Math.min(1, normalizedPosition));
    const gradientOffset = ((clampedPosition + 1) / 2) * 100;

    return gradientOffset;
  };

  return (
    <div ref={containerRef} className="relative flex items-start z-10">
      {/* Left SVG */}
      <div className="relative z-10" style={{ marginRight: "6px" }}>
        <div className="w-[590px] h-[283px] relative pointer-events-none">
          {/* Base line - luôn hiển thị với opacity thấp */}
          <svg
            width="590"
            height="283"
            viewBox="0 0 590 283"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute inset-0"
          >
            <path
              d="M589 0V99.23C589 116.903 574.673 131.23 557 131.23H33C15.3269 131.23 1 145.557 1 163.23L1 283"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="2"
            />
          </svg>

          {/* Moving light spot - chỉ đốm sáng di chuyển */}
          <svg
            width="590"
            height="283"
            viewBox="0 0 590 283"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute inset-0"
          >
            <defs>
              <linearGradient
                id="movingLightGradientLeft"
                x1="295"
                y1="0"
                x2="295"
                y2="243"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset={`${Math.max(0, (currentGradientOffset - 50) / 100)}`}
                  stopColor="white"
                  stopOpacity="0"
                />
                <stop
                  offset={`${Math.max(0, (currentGradientOffset - 20) / 100)}`}
                  stopColor="white"
                  stopOpacity="0.3"
                />
                <stop
                  offset={`${currentGradientOffset / 100}`}
                  stopColor="white"
                  stopOpacity="1"
                />
                <stop
                  offset={`${Math.min(1, (currentGradientOffset + 20) / 100)}`}
                  stopColor="white"
                  stopOpacity="0.3"
                />
                <stop
                  offset={`${Math.min(1, (currentGradientOffset + 50) / 100)}`}
                  stopColor="white"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              d="M589 0V99.23C589 116.903 574.673 131.23 557 131.23H33C15.3269 131.23 1 145.557 1 163.23L1 283"
              stroke="url(#movingLightGradientLeft)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Right SVG */}
      <div className="relative z-10" style={{ marginLeft: "6px" }}>
        <div className="w-[469px] h-[279px] relative pointer-events-none">
          {/* Base line - luôn hiển thị với opacity thấp */}
          <svg
            width="469"
            height="279"
            viewBox="0 0 469 279"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute inset-0"
          >
            <path
              d="M0.999969 0V99.7105C0.999969 117.384 15.3269 131.71 33 131.71H352C369.673 131.71 384 146.034 384 163.707C384 172.979 384 182.803 384 191M384 278.5C384 278.5 384 215.994 384 191M384 191C362.739 191 333.752 191 315.985 191C307.149 191 300 198.163 300 207V275.5M384 191C405.261 191 434.248 191 452.015 191C460.851 191 468 198.163 468 207L468 275.5"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="2"
            />
          </svg>

          {/* Moving light spot - chỉ đốm sáng di chuyển */}
          <svg
            width="469"
            height="279"
            viewBox="0 0 469 279"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute inset-0"
          >
            <defs>
              <linearGradient
                id="movingLightGradientRight"
                x1="234.5"
                y1="0"
                x2="234.5"
                y2="255"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset={`${Math.max(0, (currentGradientOffset - 50) / 100)}`}
                  stopColor="white"
                  stopOpacity="0"
                />
                <stop
                  offset={`${Math.max(0, (currentGradientOffset - 20) / 100)}`}
                  stopColor="white"
                  stopOpacity="0.3"
                />
                <stop
                  offset={`${currentGradientOffset / 100}`}
                  stopColor="white"
                  stopOpacity="1"
                />
                <stop
                  offset={`${Math.min(1, (currentGradientOffset + 20) / 100)}`}
                  stopColor="white"
                  stopOpacity="0.3"
                />
                <stop
                  offset={`${Math.min(1, (currentGradientOffset + 50) / 100)}`}
                  stopColor="white"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            <path
              d="M0.999969 0V99.7105C0.999969 117.384 15.3269 131.71 33 131.71H352C369.673 131.71 384 146.034 384 163.707C384 172.979 384 182.803 384 191M384 278.5C384 278.5 384 215.994 384 191M384 191C362.739 191 333.752 191 315.985 191C307.149 191 300 198.163 300 207V275.5M384 191C405.261 191 434.248 191 452.015 191C460.851 191 468 198.163 468 207L468 275.5"
              stroke="url(#movingLightGradientRight)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DualScrollingLightSpots;
