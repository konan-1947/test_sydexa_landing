"use client";

import { useState } from "react";
import GradientText from "@/animation/GradientText";
// import { SvgIcon } from "@/app/components"; // Không cần SvgIcon nữa
import Navigation from "./Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SVG Icon cho nút tìm kiếm
  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );

  // SVG Icon cho nút mở menu (Hamburger)
  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );

  // SVG Icon cho nút đóng menu
  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );


  return (
    <div className="w-full h-18 flex justify-center mt-8 bg-transparent relative z-50">
      <div className="flex items-center justify-between lg:grid lg:grid-cols-3 w-full max-w-7xl mx-auto px-4 lg:px-6">
        {/* Cột 1: Logo */}
        <div className="lg:justify-self-start">
          <GradientText
            colors={[
              "rgba(125, 165, 250, 0.75)",
              "rgba(255, 255, 255, 1)",
              "rgba(136, 184, 251, 1)",
              "rgba(242, 247, 254, 1)",
              "rgba(87, 157, 255, 1)",
            ]}
            animationSpeed={3}
            className="text-xl font-bold"
          >
            Sydexa
          </GradientText>
        </div>

        {/* Cột 2: Navigation - Chỉ hiển thị trên Desktop */}
        <div className="hidden lg:block lg:justify-self-center">
          <Navigation />
        </div>

        {/* Cột 3: Actions & Hamburger Menu */}
        <div className="flex items-center space-x-4 lg:space-x-6 lg:justify-self-end">
          <button className="flex items-center p-2 lg:p-3 border border-solid border-sd-gray rounded-full text-white cursor-pointer hover:bg-white/10 transition-colors">
            {/* Thay thế SvgIcon bằng component SVG trực tiếp */}
            <SearchIcon />
          </button>

          {/* Hamburger Menu Icon - Chỉ hiển thị trên Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Open main menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Drawer */}
      {isMenuOpen && (
        <div
          // Thêm onClick để khi nhấn vào nền đen thì menu đóng lại
          onClick={() => setIsMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
        >
          {/* Dùng `onClick={e => e.stopPropagation()}` để khi nhấn vào menu thì không bị đóng */}
          <div
            onClick={e => e.stopPropagation()}
            className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-[#101010] p-6 shadow-xl"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col items-start space-y-6">
              {/* Render lại Navigation cho mobile. */}
              {/* Bạn cần đảm bảo Navigation có thể style theo chiều dọc */}
              <Navigation />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;