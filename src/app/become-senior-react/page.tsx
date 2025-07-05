import BlurText from "@/animation/BlurText";
import ModelViewer from "@/animation/ModelInner";
import Image from "next/image";
import SvgIcon from "../components/SvgIconOptimized";
import Header from "./components/Header";

const BecomeSeniorReactPage = () => {
  return (
    <div className="relative flex h-screen z-30">
      <div className="z-50 h-full absolute top-0 left-0 right-0">
        <Header />
        <div className="w-full h-full flex">
          <div className="w-1/3 h-1/2 pl-48 pt-24 flex flex-col justify-center items-left gap-8">
            <button
              className="flex items-center gap-2 cursor-pointer text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-2"
              style={{
                border: "1px solid transparent",
                background: `
                linear-gradient(rgba(58, 47, 59, 1), rgba(23, 22, 42, 1)) padding-box,
                linear-gradient(135deg, rgba(80, 80, 221, 1) 0%, rgba(252, 128, 182, 1) 100%) border-box
              `,
                borderRadius: "40px",
              }}
            >
              <SvgIcon name="ReactIcon" size={24} />
              <span className="text-lg font-medium">Khoá học React</span>
            </button>
            {/* <div className="text-[48px] font-semibold text-left ">
            React Nâng Cao<br />Chuyên Sâu với Tối Ưu <br />Hiệu Năng
          </div> */}
            <div className="w-full">
              <BlurText
                text="React Nâng Cao Chuyên Sâu với Tối Ưu Hiệu Năng"
                className="text-[48px] font-semibold text-left"
              />
            </div>
          </div>
          <div className="w-2/3 h-full flex items-center justify-center">
            <div className="w-full h-full flex justify-start">
              <ModelViewer
                url="/images/ToyCar.glb"
                autoRotate={true}
                showScreenshotButton={false}
                width="100%"
                height="60%"
                defaultZoom={0.06}
                autoFrame={false}
                minZoomDistance={0.02}
                maxZoomDistance={3}
                defaultRotationX={-20}
                defaultRotationY={15}
                modelXOffset={0}
                modelYOffset={0.3}
                enableMouseParallax={false}
                enableHoverRotation={false}
                enableManualRotation={false}
                enableManualZoom={false}
                enableOrbitControls={true}
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/Bgdot.svg"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="z-30"
        style={{ objectFit: "cover", objectPosition: "center 0%" }}
      />

      <Image
        src="/images/VangSangNhat.svg"
        alt="Hero Background"
        fill
        priority
        className="object-contain object-right transform scale-100  rigin-right z-30"
        sizes="100vw"
      />

      <Image
        src="/images/Bg3.svg"
        alt="Hero Background"
        fill
        priority
        className="object-contain object-right transform scale-100  rigin-right z-30"
        sizes="100vw"
      />
      <Image
        src="/images/VangSangDam.svg"
        alt="Hero Background"
        fill
        priority
        className="object-fill object-right transform scale-100  rigin-right z-10"
        sizes="100vw"
      />
    </div>
  );
};

export default BecomeSeniorReactPage;
