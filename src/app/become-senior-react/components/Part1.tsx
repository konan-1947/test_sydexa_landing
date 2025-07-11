// File: components/Part1.tsx

import StyledButton1 from "@/app/components/StyledButton1";

const Part1 = () => {
  return (
    // CONTAINER CHÍNH
    // - Mặc định (Mobile): flex, h-full.
    <div className="w-full h-full flex">

      {/* 
        CONTAINER NỘI DUNG
        - Mặc định (Mobile): Căn giữa (`items-center`), padding ngang nhỏ (`px-6`).
        - Desktop (`lg:`): Áp dụng lại layout cũ của bạn: căn trái (`lg:items-start`), lề trái lớn (`lg:pl-48`), và bỏ padding ngang (`lg:px-0`).
      */}
      <div className="w-full h-full flex flex-col justify-center items-center lg:items-start gap-8 px-6 lg:px-0 lg:pl-48">

        <StyledButton1 text="Khoá học React" />

        {/* 
          TIÊU ĐỀ H1
          - Font size: `text-4xl` cho mobile, `lg:text-[48px]` cho desktop.
          - Text align: `text-center` cho mobile, `lg:text-left` cho desktop.
        */}
        <h1 className="text-4xl lg:text-[48px] font-semibold text-left leading-tight text-center lg:text-left">

          {/*
            CÁC DÒNG TEXT
            - Mặc định: là inline, nằm trên một hàng.
            - Desktop (`lg:`): Thêm `lg:block` để mỗi span xuống một dòng như cũ.
          */}
          <span className="lg:block bg-gradient-to-r from-[#A7B3FF] to-white bg-clip-text text-transparent">
            React Nâng Cao{' '}
          </span>

          <span className="lg:block text-white">
            Chuyên Sâu với Tối Ưu{' '}
          </span>

          <span className="lg:block text-white">
            Hiệu Năng
          </span>
        </h1>

        <button
          className="mt-4 lg:mt-12 cursor-pointer items-center justify-center text-[14px] text-white hover:opacity-90 transition-opacity w-fit h-fit px-6 py-3"
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