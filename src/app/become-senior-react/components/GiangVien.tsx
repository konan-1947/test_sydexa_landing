import ImageOptimized from "@/app/components/ImageOptimized";
import StyledButton1 from "@/app/components/StyledButton1";

const GiangVien = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full h-full relative rounded-t-2xl overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 z-10 overflow-hidden">
          <ImageOptimized
            width={900}
            height={900}
            quality={100}
            name="MaskGiangVien"
            className="w-full h-auto object-contain"
            type="svg"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <div className="absolute w-full h-full overflow-hidden">
            <div
              className="absolute"
              style={{
                width: "660px",
                height: "220px",
                backgroundColor: "rgba(112, 220, 211, 1)", // RGB(0.439, 0.863, 0.827) converted to 0-255
                borderRadius: "220px",
                filter: "blur(163.3px)",
                transform: "rotate(-50deg) translate(-50%, -50%)",
                left: "50%",
                top: "40%",
                transformOrigin: "center",
              }}
            ></div>
          </div>
        </div>
        {/*  */}
        <div className="w-full h-full absolute top-0 left-0 z-40 px-5 rounded-t-2xl overflow-hidden">
          <div className="w-full h-full rounded-t-2xl overflow-hidden">
            <div
              className=" top-0 left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(7, 7, 9, 0.07) 100%)",
              }}
            ></div>
          </div>
        </div>
        <div className="w-full h-32 absolute bottom-0 left-0 z-50 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(to top, #05001F 0%, rgba(5, 0, 31, 0) 100%)",
            }}
          ></div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-10/12 h-full z-50 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-8 lg:py-16 mx-auto gap-6 lg:gap-8">
            {/* Left content */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
              <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-xs mx-auto lg:mx-0">
                Với kinh nghiệm thực tế và niềm đam mê trong lĩnh vực phát triển
                Frontend, đặc biệt là React, mình tự tin mang đến cho bạn kiến
                thức quý báu để thăng tiến trong doanh nghiệp và trên con đường
                sự nghiệp.
              </p>
            </div>

            {/* Center content */}
            <div className="flex-2 flex flex-col items-center justify-center order-1 lg:order-2 min-w-0">
              <div className="flex flex-col items-center mb-6 lg:mb-8">
                <StyledButton1 text="Who" />
                <h1 className="text-3xl lg:text-5xl xl:text-6xl mt-8 font-bold text-center leading-tight bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  Gặp gỡ giảng viên
                  <br />
                  khóa học
                </h1>
              </div>

              <div className="relative mt-0 flex justify-center items-center">
                <ImageOptimized
                  name="techer1"
                  width={428}
                  height={642}
                  type="png"
                  className="w-64 h-96 lg:w-80 lg:h-[480px] z-30 xl:w-auto xl:h-[686px] object-cover object-center"
                  quality={100}
                />
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 flex flex-col justify-center text-center lg:text-right order-3 space-y-8 lg:space-y-12">
              <div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                  Nguyễn Văn B
                </h2>
                <div className="text-white/80 text-sm lg:text-base space-y-1">
                  <div>Former Fullstack Developer</div>
                  <div>
                    Frontend Engineer at{" "}
                    <span className="text-blue-400 font-semibold">Sydexa</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
                  2.000+
                </div>
                <div className="text-white/80 text-sm lg:text-base">
                  học viên đăng ký khóa học
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiangVien;
