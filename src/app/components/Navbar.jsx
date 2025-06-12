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
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full max-w-[90%] lg:max-w-[530px] h-[60px] sm:h-[72px] bg-[#EDE7F6] rounded-[20px] border border-[#D1C4E9] justify-around items-center top-[20px] sm:top-[30px] left-1/2 transform -translate-x-1/2 absolute">
        {"Home About Work Contact".split(" ").map((item) => (
          <div
            key={item}
            className="w-[70px] h-[35px] sm:w-[80px] sm:h-[40px] md:w-[116px] md:h-[50px] flex justify-center items-center rounded-[10px] font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] cursor-pointer transition-all duration-500 transform hover:scale-105 hover:bg-[#7E57C2] text-[#757575] hover:text-[#FFFFFF]"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center justify-end w-full h-[60px] sm:h-[72px] px-4">
        <button
          className={`w-10 h-10 sm:w-12 sm:h-12 ${
            isMenuOpen ? "bg-[#EDE7F6]" : "bg-[#7E57C2]"
          } rounded-full flex items-center justify-center transition-all duration-300 fixed top-[20px] sm:top-[30px] right-[20px] sm:right-[30px] z-50`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <img src="/cross.png" alt="Close Menu" className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <img src="/hamburger.png" alt="Menu" className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Menu - Only visible on small screens */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 w-[105vw] h-[105vh] bg-[#7E57C2] flex flex-col items-center justify-center z-[999] transition-transform duration-500 scale-100 opacity-100 m-0 p-0">
          {"Home About Work Contact".split(" ").map((item) => (
            <div
              key={item}
              className="text-[20px] sm:text-[24px] font-normal text-[#FFFFFF] mb-4 cursor-pointer"
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