"use client";

import { useRef, useState } from "react";

const CourseFooter = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
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
            className="relative w-full  text-white overflow-hidden min-h-[450px] flex items-end pb-16"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center transform -translate-y-1/8">
                    <span className="text-[200px] md:text-[300px] font-extrabold text-white/5">
                        Sydexa
                    </span>
                </div>
                <div
                    className="absolute inset-0 flex items-center justify-center transform -translate-y-1/8"
                    style={{
                        maskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 10%, transparent 50%)',
                        WebkitMaskImage: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), black 10%, transparent 50%)',
                    }}
                >
                    <span className="text-[200px] md:text-[300px] font-extrabold text-white/60">
                        Sydexa
                    </span>
                </div>
            </div>
            <div className="relative z-20 w-full px-4 md:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <p>Level Up Your Coding Skill</p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                    <p>9A Phạm Văn Hai, P1, Tân Bình, TP.HCM</p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <p>Hotline: 0777098082</p>
                </div>
            </div>
        </footer>
    );
};

export default CourseFooter;