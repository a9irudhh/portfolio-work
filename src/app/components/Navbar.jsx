"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`relative z-50 ${poppins.className}`}>
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full max-w-[530px] h-[72px] bg-[#EDE7F6] rounded-[20px] border border-[#D1C4E9] justify-around items-center top-[30px] left-1/2 transform -translate-x-1/2 absolute">
        {"Home About Work Contact".split(" ").map((item) => (
          <div
            key={item}
            className="w-[80px] h-[40px] md:w-[116px] md:h-[50px] flex justify-center items-center rounded-[10px] font-normal text-[16px] md:text-[18px] leading-[100%] cursor-pointer transition-all duration-500 transform hover:scale-105 hover:bg-[#7E57C2] text-[#757575] hover:text-[#FFFFFF]"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center justify-end w-full h-[72px] px-4">
        <button
          className={`w-12 h-12 ${
            isMenuOpen ? "bg-[#EDE7F6]" : "bg-[#7E57C2]"
          } rounded-full flex items-center justify-center transition-all duration-300 fixed top-[30px] right-[30px] z-50`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img src="/cross.png" alt="Close Menu" className="w-6 h-6" />
          ) : (
            <img src="/hamburger.png" alt="Menu" className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Menu - Only visible on small screens */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#EDE7F6] flex flex-col items-center justify-center z-40 transition-transform duration-500 scale-100 opacity-100">
          {"Home About Work Contact".split(" ").map((item) => (
            <div
              key={item}
              className="text-[24px] font-normal text-[#757575] mb-4 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
