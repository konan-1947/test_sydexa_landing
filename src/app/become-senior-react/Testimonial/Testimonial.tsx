"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "./testimonial.scss";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";

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
      glowColor: "shadow-purple-500/40",
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        "I am extremely impressed with tool for designers. It has truly revolutionized the way I approach my design projects. The intuitive interface and powerful capabilities have made my workflow more efficient and creative. I highly recommend ChanAI to any designer looking to elevate their work.",
      gradient: "from-pink-500/80 via-rose-500/70 to-orange-400/60",
      glowColor: "shadow-pink-500/40",
    },
    {
      img: "/images/testimonial/ry-thompson.jpg",
      name: "Ryan Thompson",
      bio: "Product Designer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-green-500/80 via-emerald-500/70 to-teal-400/60",
      glowColor: "shadow-emerald-500/40",
    },
    {
      img: "/images/testimonial/gr-morgan.jpg",
      name: "Grace Morgan",
      bio: "Front-end Developer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-indigo-600/80 via-purple-600/70 to-pink-500/60",
      glowColor: "shadow-indigo-500/40",
    },
    {
      img: "/images/testimonial/js-miller.jpg",
      name: "Jason Miller",
      bio: "Design Lead @betahub",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-purple-600/80 via-blue-600/70 to-cyan-500/60",
      glowColor: "shadow-purple-500/40",
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        "I am extremely impressed with tool for designers. It has truly revolutionized the way I approach my design projects. The intuitive interface and powerful capabilities have made my workflow more efficient and creative. I highly recommend ChanAI to any designer looking to elevate their work.",
      gradient: "from-pink-500/80 via-rose-500/70 to-orange-400/60",
      glowColor: "shadow-pink-500/40",
    },
    {
      img: "/images/testimonial/ry-thompson.jpg",
      name: "Ryan Thompson",
      bio: "Product Designer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-green-500/80 via-emerald-500/70 to-teal-400/60",
      glowColor: "shadow-emerald-500/40",
    },
    {
      img: "/images/testimonial/gr-morgan.jpg",
      name: "Grace Morgan",
      bio: "Front-end Developer",
      content:
        "I don't think of it as replacing designers. I think of it as making us superhuman.",
      gradient: "from-indigo-600/80 via-purple-600/70 to-pink-500/60",
      glowColor: "shadow-indigo-500/40",
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

  const getSlideOpacity = (index: number) => {
    // Giữ opacity cao để slide không bị mờ đen
    const centerIndex = Math.floor(slidesPerView / 2);
    const distance = Math.abs(index - (activeIndex + centerIndex));

    if (distance === 0) return 1; // Center slide - full opacity
    if (distance === 1) return 0.9; // Adjacent slides - vẫn rõ
    if (distance === 2) return 0.85; // Further slides - vẫn rõ
    return 0.8; // Far slides - vẫn rõ
  };

  const getSlideScale = (index: number) => {
    const centerIndex = Math.floor(slidesPerView / 2);
    const distance = Math.abs(index - (activeIndex + centerIndex));

    if (distance === 0) return 1.05; // Center slide - slightly larger
    if (distance === 1) return 0.95; // Adjacent slides
    return 0.9; // Other slides
  };

  const getGlowIntensity = (index: number) => {
    const centerIndex = Math.floor(slidesPerView / 2);
    const distance = Math.abs(index - (activeIndex + centerIndex));

    // Smooth exponential decay for more natural fade
    const maxDistance = Math.max(slidesPerView, 5);
    const normalizedDistance = Math.min(distance, maxDistance) / maxDistance;

    // Exponential decay curve for smooth falloff
    // Round to 6 decimal places to ensure consistency between server/client
    return (
      Math.round(Math.pow(1 - normalizedDistance, 2.5) * 1000000) / 1000000
    );
  };

  const getGlowColor = (item: (typeof testimonialData)[0], index: number) => {
    const glowIntensity = getGlowIntensity(index);
    const isActive = index === activeIndex;

    const glowColors = {
      "from-purple-600/80 via-blue-600/70 to-cyan-500/60": {
        active: `0 0 ${Math.round(50 * glowIntensity * 100) / 100}px rgba(139, 69, 197, ${Math.round(0.7 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(100 * glowIntensity * 100) / 100}px rgba(139, 69, 197, ${Math.round(0.4 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(180 * glowIntensity * 100) / 100}px rgba(139, 69, 197, ${Math.round(0.2 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(300 * glowIntensity * 100) / 100}px rgba(139, 69, 197, ${Math.round(0.08 * glowIntensity * 1000) / 1000}), 0 ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(50 * glowIntensity * 100) / 100}px ${Math.round(-12 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.25 * glowIntensity * 1000) / 1000})`,
        inactive: `0 0 ${Math.round(30 * glowIntensity * 100) / 100}px rgba(139, 69, 197, ${Math.round(0.25 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(70 * glowIntensity * 100) / 100}px rgba(139, 69, 197, ${Math.round(0.12 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(150 * glowIntensity * 100) / 100}px rgba(139, 69, 197, ${Math.round(0.05 * glowIntensity * 1000) / 1000}), 0 ${Math.round(10 * glowIntensity * 100) / 100}px ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(-5 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.15 * glowIntensity * 1000) / 1000})`,
      },
      "from-pink-500/80 via-rose-500/70 to-orange-400/60": {
        active: `0 0 ${Math.round(50 * glowIntensity * 100) / 100}px rgba(236, 72, 153, ${Math.round(0.7 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(100 * glowIntensity * 100) / 100}px rgba(236, 72, 153, ${Math.round(0.4 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(180 * glowIntensity * 100) / 100}px rgba(236, 72, 153, ${Math.round(0.2 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(300 * glowIntensity * 100) / 100}px rgba(236, 72, 153, ${Math.round(0.08 * glowIntensity * 1000) / 1000}), 0 ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(50 * glowIntensity * 100) / 100}px ${Math.round(-12 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.25 * glowIntensity * 1000) / 1000})`,
        inactive: `0 0 ${Math.round(30 * glowIntensity * 100) / 100}px rgba(236, 72, 153, ${Math.round(0.25 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(70 * glowIntensity * 100) / 100}px rgba(236, 72, 153, ${Math.round(0.12 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(150 * glowIntensity * 100) / 100}px rgba(236, 72, 153, ${Math.round(0.05 * glowIntensity * 1000) / 1000}), 0 ${Math.round(10 * glowIntensity * 100) / 100}px ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(-5 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.15 * glowIntensity * 1000) / 1000})`,
      },
      "from-green-500/80 via-emerald-500/70 to-teal-400/60": {
        active: `0 0 ${Math.round(50 * glowIntensity * 100) / 100}px rgba(34, 197, 94, ${Math.round(0.7 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(100 * glowIntensity * 100) / 100}px rgba(34, 197, 94, ${Math.round(0.4 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(180 * glowIntensity * 100) / 100}px rgba(34, 197, 94, ${Math.round(0.2 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(300 * glowIntensity * 100) / 100}px rgba(34, 197, 94, ${Math.round(0.08 * glowIntensity * 1000) / 1000}), 0 ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(50 * glowIntensity * 100) / 100}px ${Math.round(-12 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.25 * glowIntensity * 1000) / 1000})`,
        inactive: `0 0 ${Math.round(30 * glowIntensity * 100) / 100}px rgba(34, 197, 94, ${Math.round(0.25 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(70 * glowIntensity * 100) / 100}px rgba(34, 197, 94, ${Math.round(0.12 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(150 * glowIntensity * 100) / 100}px rgba(34, 197, 94, ${Math.round(0.05 * glowIntensity * 1000) / 1000}), 0 ${Math.round(10 * glowIntensity * 100) / 100}px ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(-5 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.15 * glowIntensity * 1000) / 1000})`,
      },
      "from-indigo-600/80 via-purple-600/70 to-pink-500/60": {
        active: `0 0 ${Math.round(50 * glowIntensity * 100) / 100}px rgba(79, 70, 229, ${Math.round(0.7 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(100 * glowIntensity * 100) / 100}px rgba(79, 70, 229, ${Math.round(0.4 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(180 * glowIntensity * 100) / 100}px rgba(79, 70, 229, ${Math.round(0.2 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(300 * glowIntensity * 100) / 100}px rgba(79, 70, 229, ${Math.round(0.08 * glowIntensity * 1000) / 1000}), 0 ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(50 * glowIntensity * 100) / 100}px ${Math.round(-12 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.25 * glowIntensity * 1000) / 1000})`,
        inactive: `0 0 ${Math.round(30 * glowIntensity * 100) / 100}px rgba(79, 70, 229, ${Math.round(0.25 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(70 * glowIntensity * 100) / 100}px rgba(79, 70, 229, ${Math.round(0.12 * glowIntensity * 1000) / 1000}), 0 0 ${Math.round(150 * glowIntensity * 100) / 100}px rgba(79, 70, 229, ${Math.round(0.05 * glowIntensity * 1000) / 1000}), 0 ${Math.round(10 * glowIntensity * 100) / 100}px ${Math.round(25 * glowIntensity * 100) / 100}px ${Math.round(-5 * glowIntensity * 100) / 100}px rgba(0, 0, 0, ${Math.round(0.15 * glowIntensity * 1000) / 1000})`,
      },
    };

    const colorKey = item.gradient as keyof typeof glowColors;
    return glowColors[colorKey]
      ? glowColors[colorKey][isActive ? "active" : "inactive"]
      : glowColors["from-purple-600/80 via-blue-600/70 to-cyan-500/60"][
          isActive ? "active" : "inactive"
        ];
  };

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
        speed={1000}
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
          const opacity = getSlideOpacity(index);
          const scale = getSlideScale(index);
          const glowIntensity = getGlowIntensity(index);
          const isActive = index === activeIndex;

          return (
            <SwiperSlide className="h-auto" key={index + ""}>
              <div
                className={`testimonial-item rounded-2xl overflow-hidden text-white w-full h-full relative z-10 transition-all duration-700 ease-out ${
                  isActive
                    ? `shadow-2xl ${item.glowColor} shadow-lg`
                    : `shadow-md ${item.glowColor} shadow-sm`
                }`}
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  boxShadow: getGlowColor(item, index),
                }}
              >
                {/* Near glow effect */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${item.gradient} rounded-3xl transition-all duration-700 ease-out`}
                  style={{
                    opacity:
                      Math.round(
                        glowIntensity * (isActive ? 0.5 : 0.2) * 1000
                      ) / 1000,
                    filter: `blur(${Math.round(25 * Math.pow(glowIntensity, 0.8) * 100) / 100}px)`,
                    zIndex: -1,
                  }}
                />

                {/* Medium glow */}
                <div
                  className={`absolute -inset-8 bg-gradient-to-br ${item.gradient} rounded-3xl transition-all duration-700 ease-out`}
                  style={{
                    opacity:
                      Math.round(
                        glowIntensity * (isActive ? 0.3 : 0.12) * 1000
                      ) / 1000,
                    filter: `blur(${Math.round(45 * Math.pow(glowIntensity, 0.7) * 100) / 100}px)`,
                    zIndex: -2,
                  }}
                />

                {/* Far glow with smooth falloff */}
                <div
                  className={`absolute -inset-16 bg-gradient-to-br ${item.gradient} rounded-3xl transition-all duration-700 ease-out`}
                  style={{
                    opacity:
                      Math.round(
                        glowIntensity * (isActive ? 0.15 : 0.05) * 1000
                      ) / 1000,
                    filter: `blur(${Math.round(80 * Math.pow(glowIntensity, 0.6) * 100) / 100}px)`,
                    zIndex: -3,
                  }}
                />

                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl transition-all duration-700 ease-out ${
                    isActive ? "opacity-90" : "opacity-20"
                  }`}
                  style={{
                    filter: isActive ? "blur(0px)" : "blur(0.5px)",
                  }}
                />

                {/* Animated border gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-700 ease-out ${
                    isActive
                      ? "ring-2 ring-white/40 shadow-inner"
                      : "ring-1 ring-white/10"
                  }`}
                />

                <div className="testimonial-content flex rounded-2xl overflow-hidden border border-solid border-white/10 flex-col justify-between backdrop-blur-sm relative z-10 p-4 w-full h-full">
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default TestimonialComponent;
