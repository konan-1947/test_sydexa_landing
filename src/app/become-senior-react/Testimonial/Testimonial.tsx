"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "./testimonial.scss";
import { Autoplay } from "swiper/modules";

const TestimonialComponent = () => {
  const testimonialData = [
    {
      img: "/images/testimonial/js-miller.jpg",
      name: "Jason Miller",
      bio: "Design Lead @betahub",
      content:
        '"I don’t think of it as replacing designers. I think of it as making us superhuman."',
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        '"I am extremely impressed with tool for designers. It has truly revolutionized the way I approach my design projects. The intuitive interface and powerful capabilities have made my workflow more efficient and creative. I highly recommend ChanAI to any designer looking to elevate their work."',
    },
    {
      img: "/images/testimonial/ry-thompson.jpg",
      name: "Ryan Thompson",
      bio: "Product Designer",
      content:
        '"I don’t think of it as replacing designers. I think of it as making us superhuman."',
    },
    {
      img: "/images/testimonial/gr-morgan.jpg",
      name: "Grace Morgan",
      bio: "Front-end Developer",
      content:
        '"I don’t think of it as replacing designers. I think of it as making us superhuman."',
    },
    {
      img: "/images/testimonial/js-miller.jpg",
      name: "Jason Miller",
      bio: "Design Lead @betahub",
      content:
        '"I don’t think of it as replacing designers. I think of it as making us superhuman."',
    },
    {
      img: "/images/testimonial/sm-lee.jpg",
      name: "Samantha Lee",
      bio: "Head of UI @lunarworks",
      content:
        '"I am extremely impressed with tool for designers. It has truly revolutionized the way I approach my design projects. The intuitive interface and powerful capabilities have made my workflow more efficient and creative. I highly recommend ChanAI to any designer looking to elevate their work."',
    },
    {
      img: "/images/testimonial/ry-thompson.jpg",
      name: "Ryan Thompson",
      bio: "Product Designer",
      content:
        '"I don’t think of it as replacing designers. I think of it as making us superhuman."',
    },
    {
      img: "/images/testimonial/gr-morgan.jpg",
      name: "Grace Morgan",
      bio: "Front-end Developer",
      content:
        '"I don’t think of it as replacing designers. I think of it as making us superhuman."',
    },
  ];
  return (
    <div className="w-full py-15">
      <Swiper
        // autoHeight={true}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        centeredSlides={true}>
        {testimonialData.map((item, index) => (
          <SwiperSlide className="h-auto" key={index + ""}>
            <div className="testimonial-item rounded-2xl overflow-hidden text-white w-full h-full relative z-10">
              <div className="testimonial-content flex rounded-2xl overflow-hidden border border-solid border-white/10 flex-col justify-between backdrop-blur-sm  relative z-10 p-4 w-full h-full">
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
                    <p className="text-sm font-normal opacity-70">{item.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TestimonialComponent;
