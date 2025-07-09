"use client";

import { useState } from "react";

const items = [
  { label: "Homepage", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Learn", href: "#" },
];

const Navigation = () => {
  const [activeItem, setActiveItem] = useState<string>("Homepage");

  return (
    <nav className="flex items-center space-x-6 text-lg">
      {items.map((item, index) => (
        <button
          key={item.label + index}
          onClick={() => setActiveItem(item.label)}
          className={`text-white hover:text-gray-300 cursor-pointer transition-all duration-300 ease-in-out flex items-center ${
            activeItem === item.label 
              ? 'font-bold transform scale-105' 
              : 'font-normal'
          }`}
        >
          {item.label}
          {item.label === "Learn" && (
            <svg
              className="ml-2 w-2 h-[5px]"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.4 0.416667L4 4.16667L7.6 0.416667"
                stroke="#F3F3FA"
                strokeWidth="0.833333"
              />
            </svg>
          )}
        </button>
      ))}
    </nav>
  );
};

export default Navigation; 