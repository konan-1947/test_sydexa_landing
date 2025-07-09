// src/app/become-senior-react/components/CssCursorWrapper.tsx
"use client";

import type { ReactNode } from "react";

interface CssCursorWrapperProps {
    children: ReactNode;
    className?: string;
}

const CssCursorWrapper = ({ children, className }: CssCursorWrapperProps) => {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Gán giá trị vào biến CSS --x và --y
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            // Áp dụng class chính từ CSS và các class phụ khác
            className={`interactive-card-wrapper ${className || ''}`}
        >
            {children}
        </div>
    );
};

export default CssCursorWrapper;