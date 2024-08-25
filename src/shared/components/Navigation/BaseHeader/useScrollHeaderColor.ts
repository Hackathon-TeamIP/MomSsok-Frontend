"use client";
import { useEffect, useState } from "react";

export const useScrollHeaderColor = (threshold: number) => {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setBgColor("white");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll), { passive: true };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return bgColor;
};
