"use client";

import { useEffect, useState, useRef } from "react";

const EndScrollingLightSpots = () => {
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

    const scaledPath = "M1.35 0.0454102L1.35 42.9068C1.35 60.634 14.31 74.9831 30.24 74.9065L501.66 72.6389C517.65 72.5623 531 86.9115 531 104.639V184.5";

    return (
        <div ref={containerRef} className="relative flex items-center justify-center w-[700px] max-w-full">
            <div className="relative w-[532px] h-[185px] pointer-events-none">
                <svg
                    width="532"
                    height="185"
                    viewBox="0 0 532 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full absolute inset-0"
                >
                    <path
                        d={scaledPath}
                        stroke="#FFFFFF"
                        strokeOpacity="0.15"
                        strokeWidth="2"
                    />
                </svg>
                <svg
                    width="532"
                    height="185"
                    viewBox="0 0 532 185"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full absolute inset-0"
                >
                    <defs>
                        <linearGradient
                            id="movingLightGradient"
                            x1="261.5"
                            y1="0"
                            x2="261.5"
                            y2="163.953"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop
                                offset={`${Math.max(0, (currentGradientOffset - 100) / 100)}`}
                                stopColor="#FFFFFF"
                                stopOpacity="0"
                            />
                            <stop
                                offset={`${Math.max(0, (currentGradientOffset - 40) / 100)}`}
                                stopColor="#FFFFFF"
                                stopOpacity="0.3"
                            />
                            <stop
                                offset={`${currentGradientOffset / 100}`}
                                stopColor="#FFFFFF"
                                stopOpacity="1"
                            />
                            <stop
                                offset={`${Math.min(1, (currentGradientOffset + 40) / 100)}`}
                                stopColor="#FFFFFF"
                                stopOpacity="0.3"
                            />
                            <stop
                                offset={`${Math.min(1, (currentGradientOffset + 100) / 100)}`}
                                stopColor="#FFFFFF"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                    <path
                        d={scaledPath}
                        stroke="url(#movingLightGradient)"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default EndScrollingLightSpots;
