"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "./testimonial.scss";
import { Autoplay } from "swiper/modules";
import { useState, useEffect, useMemo } from "react";

const TestimonialComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonialData = useMemo(() => [
    // ... Dữ liệu của bạn không thay đổi
    {
      img: "/images/testimonial/js-miller.jpg",
      name: "Jason Miller",
      bio: "Design Lead @betahub",
      content:
        "Công cụ này không thay thế designer, nó biến chúng tôi thành siêu nhân.",
      gradient: "from-purple-500 to-blue-500",
      glowColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        "Thực sự ấn tượng. Nó đã cách mạng hóa cách tôi tiếp cận dự án. Giao diện trực quan và các tính năng mạnh mẽ giúp quy trình làm việc của tôi hiệu quả và sáng tạo hơn.",
      gradient: "from-pink-500 to-orange-500",
      glowColor: "rgba(236, 72, 153, 0.5)",
    },
    {
      img: "/images/testimonial/ry-thompson.jpg",
      name: "Ryan Thompson",
      bio: "Product Designer",
      content:
        "Tốc độ và sự linh hoạt của nó thật đáng kinh ngạc. Tôi có thể thử nghiệm các ý tưởng mới chỉ trong vài phút thay vì vài giờ.",
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.5)",
    },
    {
      img: "/images/testimonial/gr-morgan.jpg",
      name: "Grace Morgan",
      bio: "Front-end Developer",
      content:
        "Là một developer, tôi đánh giá cao việc nó tạo ra code sạch và dễ dàng tích hợp. Tiết kiệm rất nhiều thời gian.",
      gradient: "from-indigo-500 to-fuchsia-500",
      glowColor: "rgba(99, 102, 241, 0.5)",
    },
    {
      img: "/images/testimonial/js-miller.jpg",
      name: "Jason Miller",
      bio: "Design Lead @betahub",
      content:
        "Công cụ này không thay thế designer, nó biến chúng tôi thành siêu nhân.",
      gradient: "from-purple-500 to-blue-500",
      glowColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        "Thực sự ấn tượng. Nó đã cách mạng hóa cách tôi tiếp cận dự án. Giao diện trực quan và các tính năng mạnh mẽ giúp quy trình làm việc của tôi hiệu quả và sáng tạo hơn.",
      gradient: "from-pink-500 to-orange-500",
      glowColor: "rgba(236, 72, 153, 0.5)",
    },
  ], []);

  if (!isMounted) {
    return (
      <div className="w-full py-20">
        <div className="h-96 flex items-center justify-center">
          <div className="animate-pulse text-white">Loading testimonials...</div>
        </div>
      </div>
    );
  }

  return (
    // Thay đổi: Thêm padding ngang cho container
    <div className="w-full py-20 testimonial-container px-4 sm:px-0">
      <Swiper
        // Thay đổi: slidesPerView mặc định là 1.2
        slidesPerView={1.2}
        spaceBetween={16}
        loop={true}
        speed={800}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          // Thay đổi: breakpoint bắt đầu từ sm (640px)
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Autoplay]}
        centeredSlides={true}
      >
        {testimonialData.map((item, index) => (
          <SwiperSlide className="h-auto py-10" key={index}>
            {({ isActive }) => (
              <div
                className="testimonial-item-wrapper h-full transition-all duration-500 ease-out"
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.85)', // Thay đổi: scale cho active là 1, không active nhỏ hơn
                  opacity: isActive ? 1 : 0.6,
                  boxShadow: isActive
                    ? `0 0 50px 8px ${item.glowColor}`
                    : '0 10px 25px -10px rgba(0, 0, 0, 0.4)',
                  borderRadius: '16px',
                }}
              >
                <div className={`p-[1.5px] rounded-2xl h-full bg-gradient-to-br ${item.gradient}`}>
                  <div className="relative z-10 flex flex-col justify-between p-5 w-full h-full text-white bg-[#0D0A1B] rounded-[15px] min-h-[320px]">
                    <p className="mb-6 text-base leading-relaxed line-clamp-7">
                      {item.content}
                    </p>
                    <div className="flex items-center mt-auto">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="overflow-hidden rounded-full border-2 border-white/20"
                      />
                      <div className="pl-4">
                        <h4 className="text-base font-semibold">{item.name}</h4>
                        <p className="text-sm font-normal opacity-70">{item.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialComponent;