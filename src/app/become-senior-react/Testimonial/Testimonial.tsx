"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "./testimonial.scss";
import { Autoplay } from "swiper/modules";
import { useState, useEffect, useMemo } from "react";

const TestimonialComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonialData = [
    {
      img: "/images/testimonial/js-miller.jpg",
      name: "Jason Miller",
      bio: "Design Lead @betahub",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-purple-600/80 via-blue-600/70 to-cyan-500/60",
      glowColor: "rgba(139, 69, 197, 0.4)",
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        "I am extremely impressed with tool for designers. It has truly revolutionized the way I approach my design projects. The intuitive interface and powerful capabilities have made my workflow more efficient and creative. I highly recommend ChanAI to any designer looking to elevate their work.",
      gradient: "from-pink-500/80 via-rose-500/70 to-orange-400/60",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      img: "/images/testimonial/ry-thompson.jpg",
      name: "Ryan Thompson",
      bio: "Product Designer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-green-500/80 via-emerald-500/70 to-teal-400/60",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
    {
      img: "/images/testimonial/gr-morgan.jpg",
      name: "Grace Morgan",
      bio: "Front-end Developer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-indigo-600/80 via-purple-600/70 to-pink-500/60",
      glowColor: "rgba(79, 70, 229, 0.4)",
    },
    {
      img: "/images/testimonial/js-miller.jpg",
      name: "Jason Miller",
      bio: "Design Lead @betahub",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-purple-600/80 via-blue-600/70 to-cyan-500/60",
      glowColor: "rgba(139, 69, 197, 0.4)",
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        "I am extremely impressed with tool for designers. It has truly revolutionized the way I approach my design projects. The intuitive interface and powerful capabilities have made my workflow more efficient and creative. I highly recommend ChanAI to any designer looking to elevate their work.",
      gradient: "from-pink-500/80 via-rose-500/70 to-orange-400/60",
      glowColor: "rgba(236, 72, 153, 0.4)",
    },
    {
      img: "/images/testimonial/ry-thompson.jpg",
      name: "Ryan Thompson",
      bio: "Product Designer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-green-500/80 via-emerald-500/70 to-teal-400/60",
      glowColor: "rgba(34, 197, 94, 0.4)",
    },
    {
      img: "/images/testimonial/gr-morgan.jpg",
      name: "Grace Morgan",
      bio: "Front-end Developer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-indigo-600/80 via-purple-600/70 to-pink-500/60",
      glowColor: "rgba(79, 70, 229, 0.4)",
    },
  ];

  const handleSlideChange = (swiper: { realIndex: number }) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleBreakpoint = (
    swiper: object,
    breakpointParams: { slidesPerView?: number | "auto" }
  ) => {
    const slidesCount =
      typeof breakpointParams.slidesPerView === "number"
        ? breakpointParams.slidesPerView
        : 2;
    setSlidesPerView(slidesCount);
  };

  // Tối ưu hóa tính toán với useMemo
  const slideStyles = useMemo(() => {
    const centerIndex = Math.floor(slidesPerView / 2);
    
    return testimonialData.map((item, index) => {
    const distance = Math.abs(index - (activeIndex + centerIndex));
    const isActive = index === activeIndex;

      // Tính toán đơn giản hơn
      let opacity = 1;
      let scale = 1;
      let glowIntensity = 1;
      
      if (distance === 0) {
        opacity = 1;
        scale = 1.05;
        glowIntensity = 1;
      } else if (distance === 1) {
        opacity = 0.9;
        scale = 0.95;
        glowIntensity = 0.6;
      } else if (distance === 2) {
        opacity = 0.85;
        scale = 0.9;
        glowIntensity = 0.3;
      } else {
        opacity = 0.8;
        scale = 0.9;
        glowIntensity = 0.1;
      }

      // Box shadow đơn giản hơn
      const boxShadow = isActive
        ? `0 0 30px ${item.glowColor}, 0 0 60px ${item.glowColor.replace('0.4', '0.2')}, 0 20px 40px -10px rgba(0, 0, 0, 0.3)`
        : `0 0 15px ${item.glowColor.replace('0.4', '0.2')}, 0 10px 25px -5px rgba(0, 0, 0, 0.2)`;

      return {
        opacity,
        scale,
        glowIntensity,
        boxShadow,
        isActive
      };
    });
  }, [activeIndex, slidesPerView, testimonialData]);

  // Prevent hydration mismatch by not rendering complex calculations until mounted
  if (!isMounted) {
    return (
      <div className="w-full py-15">
        <div className="h-96 flex items-center justify-center">
          <div className="animate-pulse text-white">
            Loading testimonials...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-15">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 70,
          },
        }}
        modules={[Autoplay]}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        onBreakpoint={handleBreakpoint}
      >
        {testimonialData.map((item, index) => {
          const slideStyle = slideStyles[index];

          return (
            <SwiperSlide className="h-auto" key={index + ""}>
              <div
                className={`testimonial-item relative z-10 transition-all duration-500 ease-out overflow-hidden`}
                style={{
                  opacity: slideStyle.opacity,
                  transform: `scale(${slideStyle.scale})`,
                  boxShadow: slideStyle.boxShadow,
                }}
              >
                {/* Glow effect đơn giản hơn - chỉ 1 layer */}
                <div
                  className={`absolute -inset-6 bg-gradient-to-br ${item.gradient} rounded-3xl transition-all duration-500 ease-out`}
                  style={{
                    opacity: slideStyle.glowIntensity * (slideStyle.isActive ? 0.3 : 0.15),
                    filter: `blur(${slideStyle.isActive ? 30 : 20}px)`,
                    zIndex: -1,
                  }}
                />

                {/* Card container với border radius cố định */}
                <div className="relative z-20 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-gray-500/10 backdrop-blur-sm border border-white/20">
                {/* Background gradient overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-all duration-500 ease-out`}
                  style={{
                      opacity: slideStyle.isActive ? 0.8 : 0.3,
                  }}
                />

                  {/* Content */}
                  <div className="testimonial-content relative z-30 flex flex-col justify-between p-4 w-full h-full text-white">
                  <p className="mb-16 text-base text-ellipsis line-clamp-7">
                    {item.content}
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="overflow-hidden rounded-full"
                    />
                    <div className="pl-4 flex flex-col grow">
                      <h4 className="text-base font-semibold">{item.name}</h4>
                      <p className="text-sm font-normal opacity-70">
                        {item.bio}
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default TestimonialComponent;
