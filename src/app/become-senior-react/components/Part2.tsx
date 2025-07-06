import StyledButton1 from "@/app/components/StyledButton1";
import "./path2.scss";
import BorderComponent from "@/app/components/border/border";
import SvgIconOptimized from "@/app/components/SvgIconOptimized";
const Part2 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-screen relative z-10">
      <StyledButton1 text="Hình thức học" />
      <div className="text-center text-4xl mt-[17px] font-semibold leading-tight bg-gradient-to-b from-[#2EC5E4] to-[#E9EBF0] text-transparent bg-clip-text">
        Trải nghiệm học tập <br /> cá nhân hóa <br /> linh hoạt & thực chiến.
      </div>
      <div className="w-full h-full relative flex justify-center items-start pt-17">
        <div className="container mx-auto relative z-10">
          <div className="first-block relative overflow-hidden rounded-2xl mb-4">
            <BorderComponent>
              <div className="flex w-full px-5 pt-5 pb-3">
                <div className="w-1/2 px-5 pt-5 pb-2">
                  <h3 className="font-semibold text-[28px] mb-4">
                    Học qua{" "}
                    <span className="title-block text-transparent bg-clip-text">
                      Video bài giảng,
                    </span>
                    <br />
                    code mẫu và tài liệu thực hành
                  </h3>
                  <p className="text-white/40 text-[14px] mb-8">
                    Hỏi đáp & thảo luận mỗi ngày trên cộng đồng Discord
                  </p>
                  <button
                    className="flex items-center justify-center cursor-pointer text-[14px] leading-5 text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-2 font-medium"
                    style={{
                      background: `linear-gradient(135deg, #5050DD 0%, #FC80B6 100%)`,
                      borderRadius: "40px",
                      border: "none",
                    }}>
                    Xem nội dung khóa học
                  </button>
                </div>
              </div>
            </BorderComponent>
          </div>
          <div className="-ml-2 flex flex-wrap -mr-2">
            <div className="mb-4 w-1/3 px-2">
              <BorderComponent className="min-h-64 h-full flex items-center justify-center">
                BLOCK 2
              </BorderComponent>
            </div>
            <div className="mb-4 w-2/3 px-2">
              <div className="-ml-2 -mr-2  flex flex-wrap">
                <div className="mb-4 w-1/2 px-2">
                  <BorderComponent className="h-32 flex items-center justify-center">
                    BLOCK 3
                  </BorderComponent>
                </div>
                <div className="mb-4 w-1/2 px-2">
                  <BorderComponent className="h-32 flex items-center justify-center">
                    BLOCK 4
                  </BorderComponent>
                </div>
                <div className="w-full px-2">
                  <BorderComponent className="h-32 flex items-center justify-center">
                    BLOCK 5
                  </BorderComponent>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-1">
          <SvgIconOptimized
            width={28}
            name="ScrollLine2"
            className="w-full h-[1000px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Part2;
