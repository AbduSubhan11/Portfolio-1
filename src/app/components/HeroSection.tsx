"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import React from "react";
gsap.registerPlugin(useGSAP);

function HeroSection() {

  useGSAP(() => {
    gsap.fromTo(
      ".heroFrontEndText span",
      {
        y: 0,
        opacity: 0,
      },
      {
        y: 100,
        opacity: 1,
        stagger: {
          each: 0.2,
          from: "random",
        },
        repeat: -1,
        yoyo: true,
        ease: "elastic.inOut",
      }
    );
    gsap.from(".scrollArrow", {
      y: -10,
      duration: 1,
      yoyo:true,
      repeat:-1
    });
  }, []);

  return (
    <>
      {/* FRONT PART */}
      <div className="text-center space-y-5 md:py-12 py-10 ">
        <div className="text-center space-y-5 md:py-12 py-10">
          <div className="heroFrontEndText text-[#202426] font-bold md:text-[6vw] text-[15vw]">
            <span>C</span>
            <span>r</span>
            <span>e</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>v</span>
            <span>e</span>
            <span> </span>
            <span>W</span>
            <span>e</span>
            <span>b</span>
            <span> </span>
            <span className="text-[#FF5A13]">D</span>
            <span className="text-[#FF5A13]">e</span>
            <span className="text-[#FF5A13]">v</span>
            <span className="text-[#FF5A13]">e</span>
            <span className="text-[#FF5A13]">l</span>
            <span className="text-[#FF5A13]">o</span>
            <span className="text-[#FF5A13]">p</span>
            <span className="text-[#FF5A13]">e</span>
            <span className="text-[#FF5A13]">r</span>
            <span className="text-[#FF5A13]">.</span>
          </div>
          <p className="heorPara1 text-1xl md:px-80 px-10">
            Crafting beautiful, responsive websites that deliver seamless user
            experiences. Turning ideas into reality through code and design. I
            create responsive, interactive interfaces that engage users across
            all devices. With a strong commitment to performance and
            accessibility, I transform design visions into dynamic web
            applications, ensuring every interaction is intuitive and
            delightful.
          </p>
          <div className="flex items-center justify-center text-[#B9B2AE] pt-5">
            <p>SCROLL</p>
            <ArrowDown className="scrollArrow"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
