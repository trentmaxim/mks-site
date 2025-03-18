"use client";

import "@/app/globals.css";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const headerBg = document.querySelector(".main-header-bg");
      const scrollY = window.scrollY;
      const scaleValue = Math.max(1 - scrollY / 100, 0.9); // Adjust the divisor to control the shrink factor

      headerBg.style.transform = `scale(${scaleValue})`;
      headerBg.style.transformOrigin = 'center'; // Ensure scaling happens from the center
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[80vh] main-header flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 main-header-bg transition ease-in-out duration-300"></div>
      <div className="relative z-10">
        {/* Add your content here */}
      </div>
    </div>
  );
}
