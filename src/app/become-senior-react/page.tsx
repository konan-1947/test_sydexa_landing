import Image from "next/image";
import Header from "./components/Header";
import Part1 from "./components/Part1";
import SvgIconOptimized from "@/app/components/SvgIconOptimized";
import Part2 from "./components/Part2";
import GiangVien from "./components/GiangVien";
import Syllabus from "./components/Syllabus";

const BecomeSeniorReactPage = () => {
  return (
    <div>
      <div className="relative flex h-screen z-30">
        <div className="z-50 h-full absolute top-0 left-0 right-0">
          <Header />
          <Part1 />
        </div>

        <Image
          src="/images/BgMain1.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="z-30"
          style={{ objectFit: "cover", objectPosition: "center 0%" }}
        />
      </div>
      <div className="h-fit w-screen flex justify-center items-center">
        <SvgIconOptimized className="w-full" name="ScrollLine1" />
      </div>
      <Part2 />
      <GiangVien />
      <Syllabus />
    </div>
  );
};

export default BecomeSeniorReactPage;
