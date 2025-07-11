import BlurText from "@/animation/BlurText";
import StyledButton1 from "@/app/components/StyledButton1";

const Part1 = () => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full h-3/4 pl-48 flex flex-col justify-center items-left gap-8">
        <StyledButton1 text="Khoá học React" />
        {/* <div className="text-[48px] font-semibold text-left ">
          React Nâng Cao<br />Chuyên Sâu với Tối Ưu <br />Hiệu Năng
        </div> */}
        <h1 className="text-[48px] font-semibold text-left leading-tight">
          {/* Dòng 1: Có màu gradient */}
          <span className="block bg-gradient-to-r from-[#A7B3FF] to-white bg-clip-text text-transparent">
            React Nâng Cao
          </span>

          {/* Dòng 2 và 3: Màu trắng. Lưu ý: sẽ không nhìn thấy trên nền trắng */}
          <span className="block text-white">
            Chuyên Sâu với Tối Ưu
          </span>
          <span className="block text-white">
            Hiệu Năng
          </span>
        </h1>
        <button
          className="flex mt-12 cursor-pointer items-center justify-center text-[14px] text-white hover:opacity-90 transition-opacity w-fit h-fit px-4 py-2"
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
