import DualScrollingLightSpots from "./components/DualScrollingLightSpots";
import GiangVien from "./components/GiangVien";
import Header from "./components/Header";
// import Model from "./components/Model";
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

const BecomeSeniorReactPage = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="relative flex h-screen z-30 bg-">
        <div className="z-40 h-full absolute top-0 left-0 right-0 bg-transparent">
          <div className="w-full h-fit z-20 absolute top-0 left-0 right-0">
            <Header />
          </div>
          <div className="w-1/3  absolute top-20 z-20 left-0 h-full">
            <Part1 />
          </div>
          <div className="absolute right-0 z-10 bottom-0 w-full h-full flex items-center justify-end overflow-visible">
            {/* <Model /> */}
          </div>
        </div>

        <ImageOptimized
          name="Bg1"
          priority
          size={500}
          quality={100}
          type="svg"
          className="z-10 w-full h-full"
        />
      </div>
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
