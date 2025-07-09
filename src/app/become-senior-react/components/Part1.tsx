import BlurText from "@/animation/BlurText";
import ModelViewer from "@/animation/ModelInner";
import StyledButton1 from "@/app/components/StyledButton1";

const Part1 = () => {
  return (
    <div className="w-full relative h-full flex">
      <div className="w-1/3 h-3/4 pl-48 flex flex-col justify-center items-left gap-8">
        <StyledButton1 text="Khoá học React" />
        {/* <div className="text-[48px] font-semibold text-left ">
          React Nâng Cao<br />Chuyên Sâu với Tối Ưu <br />Hiệu Năng
        </div> */}
        <div className="w-full">
          <BlurText
            text="React Nâng Cao Chuyên Sâu với Tối Ưu Hiệu Năng"
            className="text-[48px] font-semibold text-left leading-tight"
          />
        </div>
        <button
          className="flex mt-12 items-center justify-center cursor-pointer text-[14px] text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-2"
          style={{
            background: `linear-gradient(135deg, #5050DD 0%, #FC80B6 100%)`,
            borderRadius: "40px",
            border: "none",
          }}
        >
          <span className="text-lg font-medium">Đăng ký ngay</span>
        </button>
      </div>
    </div>
  );
};

export default Part1;
