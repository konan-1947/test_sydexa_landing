// src/hooks/useInView.ts
"use client";

import { useState, useEffect, useRef } from 'react';

// Interface này không thay đổi
interface UseInViewOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    once?: boolean;
}

// ===================================================================
// === THAY ĐỔI QUAN TRỌNG NHẤT: BỎ CHÚ THÍCH KIỂU TRẢ VỀ CỦA HÀM ===
//
// Bằng cách này, chúng ta để TypeScript tự suy luận kiểu trả về
// từ câu lệnh `return` ở cuối, tránh mọi xung đột.
//
export function useInView(options: UseInViewOptions = {}) {
    // ===================================================================

    // Khai báo ref đúng chuẩn, không thay đổi
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        // Sao chép ref.current vào một biến để kiểm tra
        const element = ref.current;

        // Nếu chưa có element, không làm gì cả
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Cập nhật state dựa trên việc có trong tầm nhìn hay không
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (options.once) {
                        observer.unobserve(element);
                    }
                } else if (!options.once) {
                    setIsInView(false);
                }
            },
            // Truyền các options vào đây
            {
                root: options.root,
                rootMargin: options.rootMargin,
                threshold: options.threshold,
            }
        );

        observer.observe(element);

        // Dọn dẹp observer khi component unmount
        return () => observer.unobserve(element);

    }, [options.root, options.rootMargin, options.threshold, options.once]);

    // TypeScript sẽ tự động suy luận kiểu trả về của hàm từ dòng này
    // là: [React.RefObject<HTMLDivElement>, boolean]
    return [ref, isInView];
}