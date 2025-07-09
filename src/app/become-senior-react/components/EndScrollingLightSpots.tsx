"use client";

import { useEffect, useState, useRef } from "react";

const EndScrollingLightSpots = () => {
    const [, setScrollY] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
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

    const gradientOffset = getGradientOffset();

    const xScale = 532 / 592;

    const scalePathX = (d: string, scale: number) => {
        const dScaled = "M1.35 0.0454102L1.35 42.9068C1.35 60.634 14.31 74.9831 30.24 74.9065L501.66 72.6389C517.65 72.5623 531 86.9115 531 104.639V184.5";
        return dScaled;
    };

    const scaledPath = scalePathX(
        "M1.5 0.0454102L1.5 42.9068C1.5 60.634 15.9113 74.9831 33.6383 74.9065L558.362 72.6389C576.089 72.5623 590.5 86.9115 590.5 104.639V184.5",
        xScale
    );

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
                                offset={`${Math.max(0, (gradientOffset - 30) / 100)}`}
                                stopColor="#FFFFFF"
                                stopOpacity="0"
                            />
                            <stop
                                offset={`${Math.max(0, (gradientOffset - 10) / 100)}`}
                                stopOpacity="0"
                            />
                            <stop
                                offset={`${gradientOffset / 100}`}
                                stopColor="#FFFFFF"
                                stopOpacity="0.7"
                            />
                            <stop
                                offset={`${Math.min(1, (gradientOffset + 10) / 100)}`}
                                stopColor="#FFFFFF"
                                stopOpacity="0"
                            />
                            <stop
                                offset={`${Math.min(1, (gradientOffset + 30) / 100)}`}
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
