import SvgIconOptimized from "@/app/components/SvgIconOptimized";
import Image from "next/image";
import DualScrollingLightSpots from "./components/DualScrollingLightSpots";
import GiangVien from "./components/GiangVien";
import Header from "./components/Header";
import Model from "./components/Model";
// import ModelTest from "./components/ModelTest"; // Commented out - debugging complete
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

const BecomeSeniorReactPage = () => {
  return (
    <div className="w-screen overflow-hidden">
      {/* Test Component - Removed after successful debugging */}
      {/* 
      <div style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, background: "white", padding: "20px" }}>
        <ModelTest />
      </div>
      */}
      <div className="relative flex h-screen z-30">
        <div className="z-40 h-full absolute top-0 left-0 right-0 bg-transparent">
          <Header />
          <Part1 />
          <div className="absolute right-0 z-10 bottom-0 w-full h-full flex items-center justify-end overflow-visible">
            {/* <Model /> */}
          </div>
        </div>

        <Image
          src="/images/BgMain1.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="z-10"
          style={{ objectFit: "cover", objectPosition: "center 0%" }}
        />
      </div>
      <div className="h-fit w-screen flex justify-center items-center">
        <SvgIconOptimized className="w-full" name="ScrollLine1" />
      </div>
      <Part2 />

      <div className="mt-64">
        <GiangVien />
      </div>



      <div className="relative w-full flex justify-center items-center mt-10">
        <DualScrollingLightSpots />
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05001f] to-transparent pointer-events-none z-10"></div>
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#05001f] to-transparent pointer-events-none z-10"></div>
      </div>
      {/* chỗ này này */}
      <div className="ml-100 -mt-30">
        <NhungGiBanSeHocDuoc />
      </div>


      <div className="relative w-full flex justify-center items-center -mt-40 -ml-65 mr-0 z-0">
        <EndScrollingLightSpots />
        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#05001f] to-transparent pointer-events-none z-10"></div>
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#05001f] to-transparent pointer-events-none z-10"></div>
      </div >


      <Syllabus />
      <TestimonialComponent />

      <Pricing />
      <Register />
      <QuestionAndAnswer />
      <CourseFooter />
    </div >
  );
};

export default BecomeSeniorReactPage;
