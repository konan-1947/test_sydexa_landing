import DualScrollingLightSpots from "./components/DualScrollingLightSpots";
import GiangVien from "./components/GiangVien";
import Header from "./components/Header";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Syllabus from "./components/Syllabus";
import TestimonialComponent from "./Testimonial/Testimonial";
import Pricing from "./components/Pricing";
import Register from "./components/Register";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import CourseFooter from "./components/CourseFooter";
import NhungGiBanSeHocDuoc from "./components/NhungGiBanSeHocDuoc";
import EndScrollingLightSpots from "./components/EndScrollingLightSpots";
import AnimatedPathSvg from "./components/AnimatedPathSvg";
import ImageOptimized from "@/app/components/ImageOptimized";
import ThreeModelViewer from "./components/ThreeModelViewer";
// Không cần import isMobile cho layout nữa

const BecomeSeniorReactPage = () => {
  return (
    <div className="w-screen overflow-x-hidden">

      <div className="relative h-screen w-full flex flex-col">
        <ImageOptimized
          name="Bg1"
          priority
          size={500}
          quality={100}
          type="svg"
          className="absolute inset-0 w-full h-full z-0 object-cover"
        />
        <div className="w-full z-20">
          <Header />
        </div>

        {/*
          NỘI DUNG CHÍNH:
          - Mặc định là flex-col cho mobile.
          - Chuyển sang grid 2 cột cho desktop (lg).
        */}
        <main className="flex-grow flex flex-col lg:grid lg:grid-cols-2 items-center z-10">
          {/* Cột nội dung (Part1) */}
          <div className="w-full h-full flex items-center justify-center lg:justify-start px-6 sm:px-8 lg:px-12">
            <Part1 />
          </div>

          {/* 
            Cột mô hình 3D
            - `hidden lg:block`: Ẩn hoàn toàn trên mobile, chỉ hiện trên desktop.
              Đây là cách làm đúng của Tailwind, thay thế cho `isMobile`.
          */}
          <div className="hidden lg:relative lg:block h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ThreeModelViewer className="w-[1500px] h-[1500px] max-w-none max-h-none" />
            </div>
          </div>
        </main>
      </div>

      {/* --- PHẦN CÒN LẠI CỦA TRANG GIỮ NGUYÊN --- */}
      <AnimatedPathSvg />
      <Part2 />
      <div className="mt-32">
        <GiangVien />
      </div>

      <div className="relative w-full flex justify-center items-center mt-10">
        <DualScrollingLightSpots />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05001f] to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#05001f] to-transparent pointer-events-none z-10"></div>
      </div>
      <div className="ml-[10%] -mt-30">
        <NhungGiBanSeHocDuoc />
      </div>

      <div className="relative w-full flex justify-center items-center -mt-40 -ml-65 mr-0 z-0">
        <EndScrollingLightSpots />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05001f] to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#05001f] to-transparent pointer-events-none z-10"></div>
      </div>

      <Syllabus />
      <TestimonialComponent />

      <Pricing />
      <Register />
      <QuestionAndAnswer />
      <CourseFooter />
    </div>
  );
};

export default BecomeSeniorReactPage;