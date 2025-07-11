import DualScrollingLightSpots from "./components/DualScrollingLightSpots";
import GiangVien from "./components/GiangVien";
import Header from "./components/Header";
import Model from "./components/Model";
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
import IframeModelViewer from "./components/IframeModelViewer";
import { isMobile } from 'react-device-detect'
import ThreeModelViewer from "./components/ThreeModelViewer";

const BecomeSeniorReactPage = () => {
  return (
    <div className="w-screen overflow-x-hidden"> {/* Đảm bảo chỉ ẩn overflow ngang */}

      {/* ===== BẮT ĐẦU PHẦN ĐƯỢC VIẾT LẠI ===== */}

      {/* 
        Container chính cho phần hero (màn hình đầu tiên).
        - relative: Để định vị ảnh nền tuyệt đối bên trong nó.
        - h-screen: Chiếm toàn bộ chiều cao màn hình.
        - flex flex-col: Sắp xếp các phần tử con (Header và Nội dung chính) theo chiều dọc.
      */}
      <div className="relative h-screen w-full flex flex-col">

        {/* Ảnh nền được đặt ở lớp dưới cùng */}
        <ImageOptimized
          name="Bg1"
          priority
          size={500}
          quality={100}
          type="svg"
          className="absolute inset-0 w-full h-full z-0 object-cover" // object-cover để ảnh lấp đầy
        />

        {/* Header: Là một phần tử flex độc lập, không cần absolute */}
        {/* z-20 để đảm bảo nó luôn ở trên cùng */}
        <div className="w-full z-20">
          <Header />
        </div>

        {/* 
          Nội dung chính:
          - flex-grow: Đây là chìa khóa! Nó sẽ chiếm hết không gian dọc còn lại, đẩy Header lên trên.
          - grid: Giữ lại cấu trúc grid responsive của bạn.
          - z-10: Nằm trên ảnh nền nhưng dưới Header.
        */}
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 items-center z-10">
          {/* Ô Nội dung (Bên trái) */}
          <div className="px-6 sm:px-8 lg:px-12">
            {/* Không cần pt-20 nữa vì layout đã được xử lý bằng flex-grow */}
            <Part1 />
          </div>

          {/* Ô Mô hình 3D (Bên phải) */}
          <div className="hidden lg:block relative h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ThreeModelViewer className="w-[1500px] h-[1500px] max-w-none max-h-none" />
            </div>
          </div>
        </div>

      </div>

      {/* ===== KẾT THÚC PHẦN ĐƯỢC VIẾT LẠI ===== */}

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
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05001f] to-transparent pointer-events-none z-10"></div>
        {/* Bottom fade gradient */}
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