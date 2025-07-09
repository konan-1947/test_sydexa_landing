import GradientText from "@/animation/GradientText";
import { SvgIcon } from "@/app/components";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="w-full h-18 flex justify-center mt-8 bg-transparent">
      <div className="grid grid-cols-3 items-center w-[82%] px-[16px] py-[8px]">
        <div className="justify-self-start">
          <GradientText
            colors={[
              "rgba(125, 165, 250, 0.75)",
              "rgba(255, 255, 255, 1)",
              "rgba(136, 184, 251, 1)",
              "rgba(242, 247, 254, 1)",
              "rgba(87, 157, 255, 1)",
            ]}
            animationSpeed={3}
            className="text-xl"
          >
            Sydexa
          </GradientText>
        </div>
        <div className="justify-self-center">
          <Navigation />
        </div>
        <div className="flex items-center space-x-6 justify-self-end">
          <button className="flex items-center px-6 py-3 border border-solid border-sd-gray rounded-full text-white cursor-pointer">
            <SvgIcon name="Lookup" size={24} />
            <div className="ml-2 font-[500] text-[17px] leading-[20px] tracking-[3%] align-middle">
              Tìm kiếm
            </div>
          </button>
          <button className="px-6 py-3 bg-white border border-solid border-sd-gray text-sd-black rounded-full font-[500] text-[17px]">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
