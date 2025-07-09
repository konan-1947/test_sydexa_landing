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

    const gradientOffset = getGradientOffset();

    // Giảm chiều dài trục x: giảm width và viewBox, đồng thời điều chỉnh path cho phù hợp
    // Giả sử giảm khoảng 60px (10%) chiều dài, tức width còn 532, viewBox "0 0 532 185"
    // Path cũng cần điều chỉnh các giá trị x tương ứng (giảm 60px)
    // Tuy nhiên, để đơn giản, ta scale toàn bộ path theo tỉ lệ x mới/x cũ = 532/592

    // Tính tỉ lệ scale
    const xScale = 532 / 592;

    // Hàm scale path dọc trục x
    const scalePathX = (d: string, scale: number) => {
        // Chỉ scale các số thực sau lệnh M, L, C, S, Q, T, V, H
        // Đơn giản: chỉ scale các số sau lệnh M, L, C, Q, S, T, H (x), V (bỏ qua), Z (bỏ qua)
        // Ở đây path chỉ dùng M, L, C, V
        // Ta sẽ scale mọi số x (số đầu tiên sau lệnh hoặc sau dấu phẩy)
        // Đơn giản hóa: chỉ scale các số sau lệnh, cách nhau bởi dấu cách hoặc phẩy
        // Do path này đơn giản, ta có thể hardcode lại path đã scale

        // Path gốc:
        // "M1.5 0.0454102L1.5 42.9068C1.5 60.634 15.9113 74.9831 33.6383 74.9065L558.362 72.6389C576.089 72.5623 590.5 86.9115 590.5 104.639V184.5"
        // Các giá trị x: 1.5, 1.5, 1.5, 15.9113, 33.6383, 558.362, 576.089, 590.5, 590.5
        // Scale từng giá trị:
        // 1.5 * xScale = 1.348
        // 15.9113 * xScale = 14.312
        // 33.6383 * xScale = 30.242
        // 558.362 * xScale = 501.655
        // 576.089 * xScale = 517.654
        // 590.5 * xScale = 530.998

        // Path đã scale:
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
                {/* Base line - luôn hiển thị với opacity thấp */}
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
                        stroke="#91B0FF"
                        strokeOpacity="0.15"
                        strokeWidth="2"
                    />
                </svg>

                {/* Moving light spot - chỉ đốm sáng di chuyển */}
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
                                stopColor="#91B0FF"
                                stopOpacity="0"
                            />
                            <stop
                                offset={`${Math.max(0, (gradientOffset - 10) / 100)}`}
                                stopOpacity="0"
                            />
                            <stop
                                offset={`${gradientOffset / 100}`}
                                stopColor="#91B0FF"
                                stopOpacity="0.7"
                            />
                            <stop
                                offset={`${Math.min(1, (gradientOffset + 10) / 100)}`}
                                stopColor="#91B0FF"
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
