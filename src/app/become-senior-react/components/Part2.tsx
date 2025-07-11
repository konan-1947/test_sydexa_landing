import BorderComponent from "@/app/components/border/border";
import ImageOptimized from "@/app/components/ImageOptimized";
import StyledButton1 from "@/app/components/StyledButton1";
import "./path2.scss";
import HeaderBlockComponent from "@/app/components/header-block/HeaderBlock";
import CssCursorWrapper from "./CssCursorWrapper";
import ScrollingLines from "./ScrollingLines";

const Part2 = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center h-fit relative z-10">
      <StyledButton1 text="Hình thức học" />
      {/* Thay đổi: Giảm font-size trên màn hình nhỏ */}
      <HeaderBlockComponent className="mt-4 text-3xl lg:text-5xl">
        Trải nghiệm học tập <br /> cá nhân hóa <br /> linh hoạt & thực chiến.
      </HeaderBlockComponent>
      {/* Thay đổi: pt-10 trên mobile, pt-17 trên desktop */}
      <div className="w-full h-fit relative flex justify-center items-start pt-10 lg:pt-17">
        <div className="container mx-auto h-10/12 relative z-10">
          <div className=" relative overflow-hidden rounded-2xl mb-4">
            <BorderComponent>
              {/* Thay đổi: flex-col trên mobile, flex-row trên desktop. h-fit trên mobile */}
              <div className="flex flex-col lg:flex-row w-full h-fit lg:h-[300px]">
                <div className="absolute w-[590px] h-[186px] left-30 top-50 hidden lg:block"> {/* Ẩn hiệu ứng blur lớn trên mobile */}
                  <div
                    className="w-full h-full"
                    style={{
                      background: "#CDB99C",
                      filter: "blur(163px)",
                      borderRadius: "220px",
                      transform: "rotate(-42deg)",
                      opacity: 0.8,
                    }}
                  />
                </div>
                {/* Thay đổi: w-full trên mobile, w-1/2 trên desktop. Padding nhỏ hơn trên mobile */}
                <div className="w-full lg:w-1/2 p-6 lg:px-10 lg:pt-8 lg:pb-2 order-2 lg:order-1">
                  {/* Thay đổi: font-size nhỏ hơn trên mobile */}
                  <h3 className="font-semibold title-block text-2xl lg:text-[28px] mb-4">
                    Học qua{" "}
                    <span className="text-transparent bg-clip-text">
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
                    }}
                  >
                    Xem nội dung khóa học
                  </button>
                </div>
                {/* Thay đổi: flex-grow để giữ layout desktop. Bỏ trên mobile */}
                <div className="flex-grow h-full hidden lg:block"></div>
                {/* Thay đổi: w-full trên mobile, w-5/12 trên desktop. set height cụ thể trên mobile */}
                <div className="w-full lg:w-5/12 h-[200px] lg:h-full pt-0 order-1 lg:order-2">
                  <ImageOptimized
                    name="BrowerTab"
                    type="png"
                    className="w-full h-full object-cover"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </BorderComponent>
          </div>

          {/* Thay đổi: flex-col trên mobile, flex-row trên desktop */}
          <div className="-ml-2 flex flex-col lg:flex-row flex-wrap -mr-2 ">
            {/* --- BOX 2 --- */}
            {/* Thay đổi: w-full trên mobile, w-1/3 trên desktop */}
            <CssCursorWrapper className="mb-4 w-full lg:w-1/3 px-2">
              <BorderComponent className="max-h-[600px] overflow-hidden h-full flex flex-col items-center justify-start">
                {/* Thay đổi: padding nhỏ hơn trên mobile */}
                <div className="w-full p-6 lg:px-10 lg:pt-8 lg:pb-2">
                  {/* Thay đổi: font-size nhỏ hơn trên mobile */}
                  <h3 className="font-semibold text-2xl lg:text-[28px] mb-4 bg-clip-text title-block">
                    Mentoring 1:1 <br />2 buổi riêng cho bạn
                  </h3>
                  <p className="text-white/40 text-[14px] mb-8">
                    Review code & góp ý chi tiết. <br /> Cá nhân hóa lộ trình
                    học. <br /> Hướng dẫn trình bày rõ ràng, định hướng nghề
                    nghiệp
                  </p>
                </div>
                {/* Thay đổi: Thêm overflow-x-auto để code không bị tràn trên mobile */}
                <div className="flex-grow flex items-center justify-center p-6 opacity-20 overflow-x-auto">
                  <div className="w-full min-w-[336px]"> {/* Thêm min-width để code không bị bóp méo */}
                    <pre className="text-white/80 text-sm leading-relaxed space-y-2 font-mono">
                      {/* ... Nội dung thẻ pre không đổi ... */}
                    </pre>
                  </div>
                </div>
                <div className="absolute -bottom-10 left-10 w-[335px] h-[254px] pointer-events-none">
                  <div
                    className="w-full h-full opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, #4F4FD6 0%, #F57EB1 100%)",
                      filter: "blur(80px)",
                      transform: "rotate(20deg) scale(1.2)",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </BorderComponent>
            </CssCursorWrapper>

            {/* Thay đổi: w-full trên mobile, w-2/3 trên desktop */}
            <div className="mb-4 w-full lg:w-2/3 px-2">
              <div className="-ml-2 -mr-2 flex flex-wrap">
                {/* --- BOX 3 --- */}
                {/* Thay đổi: w-full trên mobile, w-1/2 trên desktop. h-fit trên mobile */}
                <div className="mb-4 w-full lg:w-1/2 px-2">
                  <BorderComponent className="h-fit lg:h-[290px] flex items-start justify-center">
                    {/* Thay đổi: padding nhỏ hơn trên mobile */}
                    <div className="w-full p-6 lg:px-10 lg:pt-8 lg:pb-2">
                      {/* Thay đổi: font-size nhỏ hơn trên mobile */}
                      <h3 className="font-semibold text-2xl lg:text-[28px] mb-4 bg-clip-text title-block">
                        Mock Interview 1:1 <br /> 2 buổi luyện tập thực chiến
                      </h3>
                      <p className="text-white/40 text-[14px] mb-8">
                        Giả lập phỏng vấn thật <br /> Phân tích điểm mạnh/yếu và
                        hướng dẫn cải thiện <br /> Gợi ý cách trả lời ấn tượng,
                        thu hút nhà tuyển dụng
                      </p>
                    </div>
                  </BorderComponent>
                </div>
                {/* --- BOX 4 --- */}
                {/* Thay đổi: w-full trên mobile, w-1/2 trên desktop. h-fit trên mobile */}
                <div className="mb-4 w-full lg:w-1/2 px-2">
                  <BorderComponent className="h-fit lg:h-[290px] flex items-start justify-center">
                    {/* Thay đổi: padding nhỏ hơn trên mobile */}
                    <div className="w-full p-6 lg:px-10 lg:pt-8 lg:pb-2">
                      {/* Thay đổi: font-size nhỏ hơn trên mobile */}
                      <h3 className="font-semibold text-2xl lg:text-[28px] mb-4 bg-clip-text title-block">
                        Thời gian khoá học 3 tháng
                      </h3>
                      <p className="text-white/40 text-[14px] mb-8">
                        Giả lập phỏng vấn thật <br /> Phân tích điểm mạnh/yếu và
                        hướng dẫn cải thiện <br /> Gợi ý cách trả lời ấn tượng,
                        thu hút nhà tuyển dụng
                      </p>
                    </div>
                  </BorderComponent>
                </div>
                {/* --- BOX 5 --- */}
                {/* Thay đổi: h-fit trên mobile */}
                <div className="w-full px-2">
                  <BorderComponent className="h-fit lg:h-[290px] relative flex flex-col lg:flex-row items-start justify-start">
                    {/* Thay đổi: w-full trên mobile, w-1/2 trên desktop. position static trên mobile */}
                    <div className="relative lg:absolute z-20 w-full lg:w-1/2 p-6 lg:px-10 lg:pt-8 lg:pb-2 order-2 lg:order-1">
                      {/* Thay đổi: font-size nhỏ hơn trên mobile */}
                      <h3 className="font-semibold text-2xl lg:text-[28px] mb-4 bg-clip-text title-block">
                        Cộng đồng học tập đông đảo, chia sẻ kiến thức
                      </h3>
                      <p className="text-white/40 text-[14px] mb-8">
                        Tham gia Discord Senior React, chia sẻ kiến thức, <br />
                        nhận tài liệu hay mỗi tuần
                      </p>
                    </div>
                    {/* ... Hiệu ứng blur ... */}
                    {/* Thay đổi: w-full trên mobile, w-2/3 trên desktop. Đặt height cho mobile */}
                    <div className="relative lg:absolute top-0 right-0 w-full lg:w-2/3 h-[250px] lg:h-full z-0 order-1 lg:order-2">
                      <ImageOptimized
                        name="Discord"
                        type="png"
                        className="w-full h-full object-cover"
                        width={800}
                        height={800}
                        style={{
                          zIndex: -1,
                          mask: "radial-gradient(ellipse 80% 80% at center, black 20%, transparent 70%)",
                          WebkitMask:
                            "radial-gradient(ellipse 80% 80% at center, black 20%, transparent 70%)",
                        }}
                      />
                    </div>
                  </BorderComponent>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-1">
          <ScrollingLines />
        </div>
      </div>
    </div>
  );
};

export default Part2;