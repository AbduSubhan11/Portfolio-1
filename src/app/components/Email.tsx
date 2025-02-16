"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Email() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".container span", {
      y: 400,
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      yoyo: true,
      repeat: -1,
      repeatDelay: 2
    });
  });
  return (
    <>
      {/* LETS TALK */}
      <div className="bg-[#202426] p-12 space-y-2 flex flex-col justify-center items-center ">
        <h1 className="text-[#868381] text-center">LET&apos;S TALK</h1>
        <div className="container overflow-y-hidden flex items-center justify-center text-center text-white md:text-[2vw] text-[4vw] font-bold">
          <span>a</span>
          <span>b</span>
          <span>d</span>
          <span>u</span>
          <span>s</span>
          <span>u</span>
          <span>b</span>
          <span>h</span>
          <span>a</span>
          <span>n</span>
          <span>6</span>
          <span>6</span>
          <span>7</span>
          <span>7</span>
          <span>@</span>
          <span>g</span>
          <span>m</span>
          <span>a</span>
          <span>i</span>
          <span>l</span>
          <span>.</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
        </div>
      </div>
    </>
  );
}

export default Email;
