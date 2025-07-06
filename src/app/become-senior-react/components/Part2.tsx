import ImageOptimized from "@/app/components/ImageOptimized";
import StyledButton1 from "@/app/components/StyledButton1";
import SvgIconOptimized from "@/app/components/SvgIconOptimized";

const Part2 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-screen">
      <StyledButton1 text="Hình thức học" />
      <div className="text-center text-4xl mt-[17px] font-semibold leading-tight bg-gradient-to-b from-[#2EC5E4] to-[#E9EBF0] text-transparent bg-clip-text">
        Trải nghiệm học tập <br /> cá nhân hóa <br /> linh hoạt & thực chiến.
      </div>
      <div className="w-full h-full relative flex justify-center items-start pt-18">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-10/12">
          <div
            className="col-span-3 row-span-1 relative rounded-3xl h-64 z-40 backdrop-blur-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "0.5px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <SvgIconOptimized name="BgBlur1" className="w-1/2 h-full blur-xl" />
            <SvgIconOptimized
              name="BgBlur2"
              className="w-1/2 h-full blur-[40px]"
            />
          </div>
          <div
            className="col-span-1 overflow-hidden relative row-span-2 rounded-3xl  z-40 backdrop-blur-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "0.5px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <ImageOptimized
              name="CodingBg"
              className="w-full h-auto absolute bottom-0 right-0  z-20"
              type="png"
            />
            {/* <ImageOptimized className="absolute left-9 bottom-0 w-1/2 h-full blur-xl z-10" name="BgBlur3" type='png' /> */}
          </div>
          <div
            className="col-span-1 row-span-1 relative rounded-3xl h-64 z-40 backdrop-blur-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "0.5px solid rgba(255, 255, 255, 0.05)",
            }}
          >
        
          </div>
          <div
            className="col-span-1 row-span-1 relative rounded-3xl h-64 z-40 backdrop-blur-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "0.5px solid rgba(255, 255, 255, 0.05)",
            }}
          >
   
          </div>
          <div
            className="col-span-2 row-span-1 relative rounded-3xl h-64 z-40 backdrop-blur-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "0.5px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <SvgIconOptimized name="BgBlur1" className="w-1/2 h-full blur-xl" />
            <SvgIconOptimized
              name="BgBlur2"
              className="w-1/2 h-full blur-[40px]"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-10">
          <SvgIconOptimized name="ScrollLine2" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Part2;
