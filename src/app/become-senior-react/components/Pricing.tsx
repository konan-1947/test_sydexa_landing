"use client";
import { useState } from "react";
import HeaderBlockComponent from "@/app/components/header-block/HeaderBlock";
import ImageOptimized from "@/app/components/ImageOptimized";
import StyledButton1 from "@/app/components/StyledButton1";

const Pricing = () => {
  const [activeCard, setActiveCard] = useState(1);

  // Thông tin các gói (không đổi)
  const packages = [
    {
      id: 0,
      title: "Học viên cá nhân",
      price: "5,990,000đ",
      originalPrice: "6,990,000đ",
      type: "Online",
      benefits: [
        { text: "20 buổi học" },
        { text: "Video Recoard sau mỗi buổi học" },
        { text: "Full tài liệu + Source code" },
        { text: "Mentoring hỗ trợ Online + Nhóm chat" },
        { text: "Chứng chỉ hoàn thành khóa học" },
        { text: "Hỗ trợ review CV" },
      ],
    },
    {
      id: 1,
      title: "Học viên cá nhân",
      price: "6,490,000đ",
      originalPrice: "7,990,000đ",
      type: "Offline",
      benefits: [
        { text: "20 buổi học" },
        { text: "Video Recoard sau mỗi buổi học" },
        { text: "Full tài liệu + Source code" },
        { text: "Mentoring hỗ trợ Online + Nhóm chat" },
        { text: "Chứng chỉ hoàn thành khóa học" },
        { text: "Hỗ trợ review CV" },
      ],
    },
    {
      id: 2,
      title: "Doanh nghiệp",
      price: "Liên hệ",
      benefits: [
        { text: "Setup theo nhu cầu doanh nghiệp" },
        { text: "Chương trình học thực tế" },
        { text: "Video Recoard sau mỗi buổi học" },
        { text: "Full tài liệu + Source code" },
        { text: "Mentoring hỗ trợ Online/Offline" },
        { text: "Chứng chỉ hoàn thành khóa học" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center py-14 px-4 sm:px-6 lg:px-8">
      <StyledButton1 text="What you'll lean" />
      {/* Thay đổi: Bỏ width cố định, dùng max-width và text-center */}
      <HeaderBlockComponent className="mt-4 mb-10 w-full max-w-2xl text-center">
        Hơn 2.000+ học viên đã chọn khoá học tại Sydexa
      </HeaderBlockComponent>
      {/* Thay đổi: flex-col trên mobile, lg:flex-row. Bỏ height cố định trên mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 w-full lg:h-[700px]">
        {packages.map((pkg, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={pkg.id}
              className={`
                transition-all duration-300 rounded-2xl overflow-hidden w-full
                ${/* Thay đổi: Order chỉ áp dụng trên desktop */''}
                ${index === activeCard ? "lg:order-2" : index < activeCard ? "lg:order-1" : "lg:order-3"}
                ${/* Thay đổi: Kích thước responsive */''}
                ${isActive ? "relative lg:w-[402px] lg:h-[568px] z-20" : "relative lg:w-[402px] lg:h-[480px] z-10 cursor-pointer"} 
              `}
              onClick={() => setActiveCard(index)}
            >
              {/* Background và hiệu ứng */}
              <div
                className={`absolute inset-0 ${isActive
                    ? "bg-gradient-to-br from-[#06021c]/10 to-[#999]/10 backdrop-blur-md border-2 border-white/[0.16] rounded-2xl shadow-[45px_-9px_-8px_rgba(33,24,114,0.2),7px_9px_69px_rgba(160,93,158,0.2)]"
                    : "bg-gradient-to-b from-[rgba(10,2,39,0.1)] to-[rgba(8,2,32,0.1)] backdrop-blur-md rounded-2xl"
                  }`}
              ></div>

              {/* Thay đổi: Ẩn hiệu ứng phức tạp trên mobile */}
              {isActive && (
                <div className="hidden lg:block absolute -top-[33px] w-full h-[123px]">
                  <div className="w-full h-full bg-cover bg-no-repeat brightness-[0.9] contrast-[1] saturate-[1] blur-0 hue-rotate-[-1deg]"></div>
                </div>
              )}

              {/* Hiệu ứng ellipse mờ cho card không active */}
              {!isActive && (
                <div className="absolute w-[284px] h-[284px] left-[38px] top-[128px] bg-gradient-to-br from-[#c4b11a] to-[#334498] blur-[213px]"></div>
              )}

              {/* Thay đổi: Ẩn hiệu ứng phức tạp trên mobile */}
              {isActive && (
                <div className="hidden lg:block absolute -right-[347px] -top-[174px] w-[1235px] h-[1105px] blur-[162px] opacity-70">
                  <div className="absolute top-[346px] right-[44px] w-[683px] h-[612px] bg-gradient-to-br from-[#4f4fd6] to-[#f57eb1] rotate-[15deg]"></div>
                  <div className="absolute top-[266px] right-[8px] w-[525px] h-[532px] opacity-50 mix-blend-luminosity"></div>
                  <div className="absolute -top-[58px] -right-[347px] w-[612px] h-[464px] bg-[#095985] blur-0"></div>
                </div>
              )}

              {/* Nội dung */}
              <div className="relative z-10 h-full flex flex-col p-4">
                {/* Header */}
                <div className="flex items-center relative mb-4">
                  {isActive && (
                    <div className="absolute top-[2px] left-0 w-full h-[123px] opacity-80 z-0">
                      <ImageOptimized
                        width={402}
                        height={123}
                        quality={100}
                        name="BackgroundPricing"
                        className="w-full h-auto object-contain"
                        type="svg"
                      />
                    </div>
                  )}

                  <h3
                    className={`text-white text-base font-light relative z-10 uppercase ${!isActive && "opacity-70"}`}
                  >
                    {pkg.title}
                  </h3>
                </div>

                {/* Main content */}
                <div
                  className={`flex-1 rounded-2xl ${isActive ? "" : "backdrop-blur-sm bg-white/5 shadow-lg"}`}
                >
                  <div className="flex flex-col h-full p-4 bg-white/[0.05] rounded-2xl">
                    {/* Price section */}
                    <div className="flex flex-col mb-4">
                      <span className="text-white text-2xl lg:text-[28px] font-medium">
                        {pkg.price}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-white text-base line-through opacity-70">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Registration button */}
                    <button
                      className={`w-full py-3 px-4 rounded-full cursor-pointer ${isActive
                          ? "bg-gradient-to-r from-[#5050de] to-[#fc80b6]"
                          : "bg-gradient-to-r from-[#a4a4f4] to-[#fc80b6]"
                        } mb-6`}
                    >
                      <span
                        className={`${isActive ? "text-[#f0f0f2]" : "text-[#03021f]"} font-medium`}
                      >
                        Đăng ký tư vấn
                      </span>
                    </button>

                    {/* Benefits section */}
                    <div className="flex items-center mb-3">
                      <span className="text-white opacity-70">
                        Quyền lợi đi kèm
                      </span>
                      <div className="flex-1 h-px bg-white/10 ml-2 opacity-70"></div>
                    </div>

                    {/* Benefits list */}
                    <div
                      className={`flex flex-col gap-4 text-sm`}
                    >
                      {pkg.type && (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6.75L10.5 0.75L11.25 1.5L4.5 8.25L0.75 4.5L1.5 3.75L4.5 6.75Z" fill="white" /></svg>
                          </div>
                          <span className="text-white">Hình thức học</span>
                          <div
                            className={`px-4 py-2 rounded-full ${pkg.type === "Offline"
                                ? "bg-gradient-to-br from-[#d776be]/50 to-[#785bd4]/50 border border-[#ad9df0]/36"
                                : "bg-[#3a2e3b]/50 border border-[#ac8ad2]/36"
                              }`}
                          >
                            <span className="text-white text-sm">
                              {pkg.type}
                            </span>
                          </div>
                        </div>
                      )}

                      {pkg.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5">
                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 6.75L10.5 0.75L11.25 1.5L4.5 8.25L0.75 4.5L1.5 3.75L4.5 6.75Z" fill="white" /></svg>
                          </div>
                          <span className="text-white">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;