// src/app/become-senior-react/components/NhungGiBanSeHocDuoc.tsx

import Image from "next/image";

// Đây là một Server Component, không cần 'use client'.

const learningPoints = [
    "Hiểu rõ về React và cách hoạt động của Virtual DOM",
    "Cách tạo component bằng function & class, tái sử dụng component hiệu quả",
    "Quản lý state và props, kỹ thuật truyền dữ liệu giữa các component",
    "Sử dụng React Hooks (useState, useEffect, useContext...) chuẩn hiện đại",
    "Thiết kế giao diện responsive với React + CSS Modules/Tailwind",
    "Tích hợp API: fetch dữ liệu từ server, xử lý bất đồng bộ",
];

const CheckmarkIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 mr-3 mt-1"
    >
        <path
            d="M16.6668 5.83301L7.50016 14.9997L3.3335 10.833"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const NhungGiBanSeHocDuoc = () => {
    return (
        <section className="relative bg-[#05001f] py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Cột Trái: Nội dung văn bản */}
                    {/* GIẢI PHÁP 1: Dịch cột VĂN BẢN sang phải bằng margin-right âm */}
                    <div className="text-left relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#a78bfa" >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                            <span className="text-sm font-medium text-white/80">
                                What you&apos;ll learn
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
                            Những gì bạn sẽ <br /> học được trong <br /> khóa React
                        </h2>

                        <ul className="space-y-4">
                            {learningPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckmarkIcon />
                                    <span className="text-white/70">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cột Phải: Hình ảnh mô phỏng VSCode */}
                    <div className="relative w-full flex justify-center items-center">
                        {/* Glow effect */}
                        <div className="absolute inset-0 z-0 flex justify-center items-center">
                            <div className="w-[90%] h-[90%] rounded-5xl blur-2xl bg-blue-500/30" />
                            {/* Extra blue glow, larger and softer */}
                            <div className="absolute w-[110%] h-[110%] rounded-5xl blur-3xl bg-blue-400/20" />
                            {/* Subtle purple glow */}
                            <div className="absolute w-[80%] h-[80%] rounded-5xl blur-2xl bg-purple-400/20" />
                            {/* White highlight glow */}
                            <div className="absolute w-[60%] h-[60%] rounded-5xl blur-2xl bg-white/10" />
                        </div>
                        {/* Image */}
                        <div className="relative z-10 w-full -ml-25">
                            <Image
                                src="/nhung_gi_ban_se_hoc_duoc.svg"
                                alt="Mô phỏng giao diện code trong khóa học React"
                                width={3200}
                                height={1778}
                                quality={95}
                                className="rounded-2xl shadow-2xl shadow-blue-500/10 w-full h-auto max-w-none scale-110 lg:scale-125"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NhungGiBanSeHocDuoc;