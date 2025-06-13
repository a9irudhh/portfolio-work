"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect, useRef } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
      updateCirclePos();
    };

    const updateCirclePos = () => {
      if (hamburgerRef.current) {
        const rect = hamburgerRef.current.getBoundingClientRect();
        setCirclePos({
          top: rect.top + rect.height / 2,
          left: rect.left + rect.width / 2,
        });
      }
    };

    updateCirclePos();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Delay showing menu content until after circle expands
  useEffect(() => {
    let timeout;

    if (isMenuOpen) {
      timeout = setTimeout(() => {
        setShowMenuContent(true);
      }, 300);
    } else {
      setShowMenuContent(false);
    }

    return () => clearTimeout(timeout);
  }, [isMenuOpen]);


  return (
    <div className="relative z-[1000]">
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

      {/* Expanding Circle Background */}
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] pointer-events-none z-[998]">
        <div
          className={`absolute bg-[#7E57C2] rounded-full w-[100px] h-[100px] transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "scale-[25]" : "scale-0"
          }`}
          style={{
            top: circlePos.top - 50,
            left: circlePos.left - 50,
            transformOrigin: "center",
          }}
        ></div>
      </div>

      {/* Hamburger Button */}
      <button
        ref={hamburgerRef}
        className={`md:hidden w-10 h-10 sm:w-12 sm:h-12 ${
          isMenuOpen ? "bg-[#EDE7F6]" : "bg-[#7E57C2]"
        } rounded-full flex items-center justify-center transition-all duration-300 fixed top-[20px] sm:top-[30px] right-[20px] sm:right-[30px] z-[1001]`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ pointerEvents: "auto" }}
      >
        {isMenuOpen ? (
          <img src="/cross.png" alt="Close Menu" className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <img src="/hamburger.png" alt="Menu" className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>

      {/* Fullscreen Menu Content */}
      {showMenuContent && (
        <div className="md:hidden fixed inset-0 z-[999] flex flex-col items-center justify-center transition-opacity duration-500">
          {"Home About Work Contact".split(" ").map((item) => (
            <div
              key={item}
              className="text-[20px] sm:text-[24px] font-normal text-[#FFFFFF] mb-4 cursor-pointer z-[1002]"
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
