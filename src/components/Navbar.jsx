"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });
  const [hoveredPath, setHoveredPath] = useState("");
  const hamburgerRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Work", path: "/work" },
      { label: "Contact", path: "/contact" },
    ],
    []
  );

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

  useEffect(() => {
    let timeout;
    if (isMenuOpen) {
      timeout = setTimeout(() => setShowMenuContent(true), 500);
    } else {
      setShowMenuContent(false);
    }
    return () => clearTimeout(timeout);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const NavButton = ({ label, path }) => {
    const isSelected = pathname === path;
    const isHovered = hoveredPath === path && !isSelected;

    return (
      <li
        onMouseEnter={() => setHoveredPath(path)}
        onMouseLeave={() => setHoveredPath("")}
        onClick={() => router.push(path)}
        className={`w-[70px] h-[35px] sm:w-[80px] sm:h-[40px] md:w-[116px] md:h-[50px] flex justify-center items-center rounded-[10px] text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] cursor-pointer transition-all duration-300 transform hover:scale-105
          ${isSelected ? "bg-[#7E57C2] text-white font-bold shadow-[0_2px_8px_rgba(126,87,194,0.15)] border-2 border-[#7E57C2]" : "text-[#757575] border-2 border-transparent"}
          ${isHovered ? "text-[#7E57C2] font-bold" : ""}
        `}
      >
        {label}
      </li>
    );  
  };


  return (
    <nav className={`relative z-[1000] ${poppins.className}`} role="navigation">
      {/* Desktop Navbar */}
      <ul className="hidden md:flex w-full max-w-[90%] lg:max-w-[530px] h-[60px] sm:h-[72px] bg-[#EDE7F6] rounded-[20px] border border-[#D1C4E9] justify-around items-center top-[20px] sm:top-[30px] left-1/2 transform -translate-x-1/2 absolute">
        {navItems.map((item) => (
          <NavButton key={item.label} label={item.label} path={item.path} />
        ))}
      </ul>

      {/* Expanding Circle */}
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
        />
      </div>

      {/* Hamburger Button */}
      <button
        ref={hamburgerRef}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`md:hidden w-10 h-10 sm:w-12 sm:h-12 ${
          isMenuOpen ? "bg-[#EDE7F6]" : "bg-[#7E57C2]"
        } rounded-full flex items-center justify-center transition-all duration-300 fixed top-[20px] sm:top-[30px] right-[20px] sm:right-[30px] z-[1001]`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ pointerEvents: "auto" }}
      >
        <img
          src={isMenuOpen ? "/cross.png" : "/hamburger.png"}
          alt={isMenuOpen ? "Close" : "Menu"}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </button>

      {/* Mobile Menu */}
      {showMenuContent && (
        <div
          className={`md:hidden fixed inset-0 z-[999] flex flex-col items-center justify-center transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="space-y-4 text-center">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="text-[20px] sm:text-[24px] font-normal text-white cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push(item.path);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
