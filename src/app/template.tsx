"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Template({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".template",
      {
        x: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      {
        x: 800,
        duration: 1,
        opacity: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power2.inOut",
      }
    );
  });
  return (
    <div>
      <div className="template fixed top-0 left-0 w-[70px] sm:w-[110px] md:w-1/4 h-full bg-black z-50"></div>
      <div className="template fixed top-0 left-1/4 w-[70px] sm:w-[110px] md:w-1/4 h-full bg-black z-50"></div>
      <div className="template fixed top-0 left-2/4 w-[70px] sm:w-[110px] md:w-1/4 h-full bg-black z-50"></div>
      <div className="template fixed top-0 left-3/4 w-[70px] sm:w-[110px] md:w-1/4 h-full bg-black z-50"></div>
      {children}
    </div>
  );
}

export default Template;
