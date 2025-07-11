"use client";

import { useRef, useState } from "react";

const CourseFooter = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        // Chỉ chạy hiệu ứng trên màn hình lớn để tối ưu cho mobile
        if (window.innerWidth < 768) return;

        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = `${(e.clientX - rect.left) / rect.width * 100}%`;
        const y = `${(e.clientY - rect.top) / rect.height * 100}%`;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: "50%", y: "-100%" });
    };

    const cssVariables = {
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
    } as React.CSSProperties;

    return (
        <footer
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={cssVariables}
            // Thay đổi: Chiều cao và padding responsive
            className="relative w-full text-white overflow-hidden min-h-[450px] md:min-h-[550px] lg:min-h-[650px] flex items-end pb-10 md:pb-16"
        >
            {/* Lớp chứa hiệu ứng chữ nền */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Chữ nền mờ */}
                <div className="absolute inset-0 flex items-center justify-center transform -translate-y-1/8">
                    {/* Thay đổi: Font-size responsive */}
                    <span className="text-[140px] sm:text-[200px] lg:text-[300px] font-extrabold text-white/5 whitespace-nowrap">
                        Sydexa
                    </span>
                </div>
                {/* Chữ nền được mask */}
                <div
                    className="absolute inset-0 flex items-center justify-center transform -translate-y-1/8"
                    style={{
                        maskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 10%, transparent 50%)',
                        WebkitMaskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 10%, transparent 50%)',
                    }}
                >
                    {/* Thay đổi: Font-size responsive */}
                    <span className="text-[140px] sm:text-[200px] lg:text-[300px] font-extrabold text-white/60 whitespace-nowrap">
                        Sydexa
                    </span>
                </div>
            </div>

            {/* Nội dung footer */}
            {/* Thay đổi: Bỏ h-64 để chiều cao tự động, điều chỉnh padding và space */}
            <div className="relative z-20 w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left space-y-8 md:space-y-0">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <p className="opacity-80">We learn, We share, We grow</p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                    <p className="opacity-80">Powered By Cộng đồng System Design Việt Nam</p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <p className="opacity-80">sydexa@gmail.com <br /> 0971489013</p>
                </div>
            </div>
        </footer>
    );
};

export default CourseFooter;