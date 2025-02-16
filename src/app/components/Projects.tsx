"use client";
import Image from "next/image";
import countryProject from "../../../public/Images/country.png";
import expenseTracker from "../../../public/Images/expense.png";
import staticResume from "../../../public/Images/static.png";
import dynamicResume from "../../../public/Images/dynamic.png";
import ecommerce from "../../../public/Images/e-commerce.png";
import goTrip from "../../../public/Images/go-trip.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MouseEventHandler, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const viewMoreDiv = useRef<HTMLDivElement | null>(null);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".line2",
        scrub: 2,
        start: "top 95%",
        end: "top 0",
      },
    });

    tl.from(
      ".line1.left",
      {
        x: -600,
        opacity: 0,
        duration: 0.5,
      },
      "anim1"
    )
      .from(
        ".line1.right",
        {
          x: 600,
          opacity: 0,
          duration: 1.5,
        },
        "anim1"
      )
      .from(
        ".line2.left",
        {
          x: -600,
          opacity: 0,
          duration: 1.5,
        },
        "anim2"
      )
      .from(
        ".line2.right",
        {
          x: 600,
          opacity: 0,
          duration: 1.5,
        },
        "anim2"
      )
      .from(
        ".line3.left",
        {
          x: -600,
          opacity: 0,
          duration: 1.5,
        },
        "anim3"
      )
      .from(
        ".line3.right",
        {
          x: 600,
          opacity: 0,
          duration: 1.5,
        },
        "anim3"
      );

    const viewMore = viewMoreDiv.current;
    if (!viewMore) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(viewMore, {
        left: e.clientX - 40,
        top: e.clientY - 40,
        duration: 0.3,
        opacity: 1,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(viewMore, { opacity: 1, scale: 1, duration: 0.2 });
    };

    const handleMouseLeave = () => {
      gsap.to(viewMore, { opacity: 0, scale: 0, duration: 0.2 });
    };

    document.querySelectorAll(".Image").forEach((image) => {
      image.addEventListener("mouseenter", handleMouseEnter);
      image.addEventListener("mousemove", handleMouseMove as EventListener);
      image.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.querySelectorAll(".Image").forEach((image) => {
        image.removeEventListener("mouseenter", handleMouseEnter);
        image.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
        image.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section ref={container} className="overflow-x-hidden relative">
      <h1 className="text-[#868381] text-center font-semibold pb-12">
        MY NEW PROJECTS
      </h1>
      <div
        ref={viewMoreDiv}
        className=" fixed scale-0 pointer-events-none z-10 bg-black text-white w-20 h-20 flex items-center justify-center p-1 rounded-full opacity-0"
      >
        View <br /> More
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:px-16 px-5 ">
        <div className="line1 left">
          <Link href="/country-explorer" className="space-y-5 ">
            <Image
              src={countryProject}
              alt="Country Project"
              className="Image shadow-2xl cursor-none shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif ">The Country Explorer</h1>
          </Link>
        </div>

        <div className="line1 right">
          <Link href="/e-commerce" className="space-y-7 ">
            <Image
              src={ecommerce}
              alt="E-commerce"
              className="Image shadow-2xl cursor-none shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">The E-commerce Web</h1>
          </Link>
        </div>

        <div className="line2 left">
          <Link href="/expense-tracker" className="space-y-7 ">
            <Image
              src={expenseTracker}
              alt="Expense Project"
              className="Image shadow-2xl cursor-none shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">The Expense Tracker</h1>
          </Link>
        </div>

        <div className="line2 right">
          <Link href="/go-trip" className="space-y-7">
            <Image
              src={goTrip}
              alt="Go-Trip"
              className="Image shadow-2xl cursor-none shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">The Trip Booking Web</h1>
          </Link>
        </div>

        <div className="line3 left">
          <Link href="/my-resume" className="space-y-7 ">
            <Image
              src={staticResume}
              alt="My Resume"
              className="Image shadow-2xl cursor-none shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">My Resume</h1>
          </Link>
        </div>

        <div className="line3 right">
          <Link href="/dynamic-resume" className="space-y-7">
            <Image
              src={dynamicResume}
              alt="Dynamic Resume"
              className="Image shadow-2xl cursor-none shadow-gray-400 hover:scale-105 transition-all duration-500"
            />
            <h1 className="text-2xl font-serif">The Resume Generator</h1>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
