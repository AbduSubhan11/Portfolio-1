"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Skill() {
  const skills = useRef(null)
  useGSAP(()=>{
    gsap.fromTo(skills.current,{
      x:1200,
      duration:16
    },
    {
      x:-1500,
      duration:16,
      repeat:-1,
    }
  )
  })
  return (
    <>
      {/*MY SKILLS ANIMATION TEXT */}
      <div className="bg-[#202426] h-40 p-4 space-y-5 shadow-lg overflow-hidden max-w-full mx-auto text-center">
        <h1 className="text-[#B9B2AE]">MY SKILLS</h1>
          <div ref={skills} className="text-3xl text-white font-bold whitespace-nowrap animate-pulse">
            → Html &nbsp;→ Css &nbsp;→ Tailwind &nbsp;→ JavaScript &nbsp;→
            TypeScript &nbsp;→ React.js &nbsp;→ Next.js &nbsp;→ GSAP 
          </div>
      </div>
    </>
  );
}

export default Skill;
