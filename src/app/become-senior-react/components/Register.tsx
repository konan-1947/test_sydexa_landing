"use client";

import { useState } from "react";
import { SvgIcon } from "@/app/components";
import ImageOptimized from "@/app/components/ImageOptimized";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal", // personal hoặc business
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, type: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Xử lý gửi form ở đây
  };

  const InfoCard = ({
    iconName,
    children,
    className = "",
  }: {
    iconName: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        className={`bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm flex items-center space-x-3 ${className}`}
      >
        <div className="flex-shrink-0 w-6 h-6 mt-1">
          <SvgIcon name={iconName} size={24} />
        </div>
        <div className="text-white text-sm leading-5">{children}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-row w-full relative justify-center items-center rounded-t-2xl px-24 py-24 gap-12">
      <div className="absolute inset-0 z-10 rounded-t-2xl overflow-hidden mx-6">
        <div 
          className="w-full h-full relative"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        >
          <ImageOptimized name="register" className="w-full h-full" type="png" />
        </div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, transparent 100%)', // Gradient từ trắng ở trên, trong suốt ở giữa, và hoàn toàn trong suốt ở dưới
            backdropFilter: 'blur(6px)', // Background blur effect
            WebkitBackdropFilter: 'blur(6px)' // Safari support
          }}
        ></div>
      </div>

      <div className="w-1/2 relative z-10">
        <div className="mb-10">
          <h2 className="text-5xl leading-14 font-bold bg-gradient-to-b from-[#2EC5E4] to-[#E9EBF0] text-transparent bg-clip-text mb-4">
            React Nâng Cao
          </h2>
          <h3 className="text-3xl font-bold bg-gradient-to-b from-[#2EC5E4] to-[#E9EBF0] text-transparent bg-clip-text">
            Chuyên Sâu với Tối Ưu Hiệu Năng
          </h3>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-base opacity-60">Lịch khai giảng</h4>

          <InfoCard iconName="ReactIcon" className="items-start">
            Hình thức học: Online & Offline, các mentor sẽ livestream share
            screen. Mỗi buổi đều có record lại và upload trên hệ thống học
            online của 200Lab.
          </InfoCard>

          <InfoCard iconName="EduIcon">
            Thời lượng dự kiến: 20 buổi, 120phút/buổi
          </InfoCard>

          <InfoCard iconName="ClockIcon">
            Thời gian học: Tối thứ 3 & thứ 5, 19h-21h.
          </InfoCard>

          <InfoCard iconName="CalendarIcon">Khai giảng: 18/02/2025</InfoCard>
        </div>
      </div>

      {/* Phần bên phải - Form đăng ký */}
      <div className="w-1/2 relative z-10">
        {/* Form container */}
        <div className="flex flex-col space-y-6  mx-auto">
          {/* Header */}
          <div className="flex flex-col space-y-3">
            <h2 className="text-[40px] font-semibold bg-gradient-to-r from-[#0B96FF] via-white to-[#57A0FF] text-transparent bg-clip-text">
              Sydexa
            </h2>
            <h3 className="text-2xl text-white font-medium">
              Đăng ký khóa học
            </h3>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* Họ và tên */}
            <div className="bg-white/10 border border-white/16 rounded-xl">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Họ và tên"
                className="w-full px-4 py-4 bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="bg-white/10 border border-white/16 rounded-xl">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-4 bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>

            {/* Số điện thoại */}
            <div className="bg-white/10 border border-white/16 rounded-xl">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số điện thoại"
                className="w-full px-4 py-4 bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>

            {/* Hình thức học */}
            <div className="space-y-4">
              <p className="text-white">Hình thức học</p>
              <div className="flex space-x-16">
                {/* Học viên cá nhân */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="type"
                      checked={formData.type === "personal"}
                      onChange={() => handleRadioChange("personal")}
                      className=" absolute h-5 w-5"
                    />
                    <div
                      className={`border-2 rounded-full h-5 w-5 flex items-center justify-center ${formData.type === "personal" ? "border-white" : "border-white/50"}`}
                    >
                      {formData.type === "personal" && (
                        <div className="rounded-full h-2.5 w-2.5 bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-white">Học viên cá nhân</span>
                </label>

                {/* Doanh nghiệp */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="type"
                      checked={formData.type === "business"}
                      onChange={() => handleRadioChange("business")}
                      className=" absolute h-5 w-5"
                    />
                    <div
                      className={`border-2 rounded-full h-5 w-5 flex items-center justify-center ${formData.type === "business" ? "border-white" : "border-white/50"}`}
                    >
                      {formData.type === "business" && (
                        <div className="rounded-full h-2.5 w-2.5 bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-white">Doanh nghiệp</span>
                </label>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-[#5050de] to-[#fc80b6] text-[#f0f0f2] py-3 px-6 rounded-full font-medium text-center"
            >
              Đăng ký tư vấn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
