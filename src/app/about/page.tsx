"use client";
import Image from "next/image";
import img1 from "../../../public/Images/img1.jpg";
import img2 from "../../../public/Images/Img2.jpg";
import img3 from "../../../public/Images/img3.jpg";
import Skill from "../components/Skill";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page() {
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".AboutImagecontainer .Image", {
      z: -900,
      duration: 0.5,
      opacity: 0,
      stagger: {
        from: "edges",
        amount: 0.5,
      },
    });
  });
  return (
    <section className="space-y-20">
      <div className="w-full p-12 bg-[#202426]">
        <h1 className="abouth1 text-center text-white md:text-3xl font-semibold">
          My name is Abdu Subhan, I’m a Creative Web Developer. I create
          engaging, responsive websites and web applications, ensuring seamless
          user experiences across all devices.
        </h1>
      </div>

      {/* 3 PICS AND TEXT */}
      <div className="space-y-10 flex flex-col items-center justify-center">
        <div className="AboutImagecontainer flex justify-center items-center relative md:gap-x-36 gap-x-24">
          <Image
            src={img1}
            alt="img1"
            quality={100}
            priority
            className="Image md:w-40 w-20 md:h-36 h-20 rounded-[50%]"
          />
          <Image
            src={img2}
            alt="img2"
            quality={100}
            priority
            className="Image md:w-56 w-36 md:h-56 h-36 absolute z-50 rounded-[50%]"
          />
          <Image
            src={img3}
            alt="img3"
            quality={100}
            priority
            className="Image md:w-40 w-20 md:h-36 h-20 rounded-[50%]"
          />
        </div>
        <div className="md:px-80 px-5 text-[#202426] text-center space-y-5">
          <h1 className=" font-semibold md:text-2xl">
            With 1+ year of experience, I specialize in crafting intuitive,
            dynamic, and responsive user interfaces that deliver seamless
            digital experiences. With a deep understanding of modern web
            technologies, including HTML, CSS, Tailwind, TypeScript, JavaScript,
            GSAP, Threejs, Framer Motion, Python, and frameworks like React and
            Next.js, I bring designs to life with clean, efficient, and
            maintainable code.
          </h1>
          <p className="text-1xl">
            I am adept at creating dynamic, visually appealing interfaces,
            implementing animations, and optimizing user experience. Throughout
            my experience, I have worked on various projects, including
            e-commerce websites, inventory management systems, portfolio
            websites, and more, focusing on delivering high-quality solutions
            while continuously learning and adapting to new technologies.
          </p>
        </div>
      </div>

      <Skill />
    </section>
  );
}

export default Page;
