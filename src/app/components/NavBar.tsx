"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function NavBar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const pathname = usePathname();
  const tabLinks = useRef(null);
  const NavHeading = useRef(null);
  const SocialLinks = useRef(null);

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };

  const closeMenu = () => {
    setIsHamburger(false);
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from([tabLinks.current, NavHeading.current, SocialLinks.current], {
      y: -400,
      opacity: 0,
      duration: 1,
      stagger: {
        from:"center",
        amount:0.5,
      },
    });
  });

  return (
    <nav className="flex justify-between items-center max-w-full z-20 md:p-8 p-5 sticky top-0 border-b-2 text-[#202426] bg-[#F4F4F4]">
      {/* NAV LINKS */}
      <div
        ref={tabLinks}
        className={`lg:space-x-6 font-serif font-bold text-xl ${
          isHamburger
            ? "flex flex-col fixed right-0 top-0 h-screen w-52 px-16 py-28 space-y-5 border-2 bg-[#F4F4F4]"
            : "lg:flex hidden"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className={`hover:underline underline-offset-4 ${
            pathname === "/" ? "text-red-500 underline underline-offset-4" : ""
          }`}
        >
          Work
        </Link>
        <Link
          href="/about"
          onClick={closeMenu}
          className={`hover:underline underline-offset-4 ${
            pathname === "/about"
              ? "text-red-500 underline underline-offset-4"
              : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/services"
          onClick={closeMenu}
          className={`hover:underline underline-offset-4 ${
            pathname === "/services"
              ? "text-red-500 underline underline-offset-4"
              : ""
          }`}
        >
          Services
        </Link>
        <Link
          href="/contact"
          onClick={closeMenu}
          className={`hover:underline underline-offset-4 ${
            pathname === "/contact"
              ? "text-red-500 underline underline-offset-4"
              : ""
          }`}
        >
          Contact
        </Link>
      </div>

      {/* NAV CENTER HEADING */}
      <div ref={NavHeading}>
        <h1 className="font-bold font-sans md:text-5xl text-3xl">
          Subhan<span className="text-[#FF5A13]">.</span>
        </h1>
      </div>

      {/* SOCIAL LINKS AND NAV BUTTON */}
      <div
        ref={SocialLinks}
        className={`justify-center items-center md:space-x-5 ${
          isHamburger
            ? "flex flex-col fixed right-4 top-96 space-y-5"
            : "lg:flex hidden"
        }`}
      >
        {/* SOCIAL LINKS */}
        <div className={`flex space-x-3`}>
          {/* LINKEDIN ICON */}
          <Link href="/">
            <svg
              className="h-8 w-6"
              viewBox="0 0 24 24"
              fill="black"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>

          {/* INSTAGRAM ICON */}
          <Link href="/">
            <svg
              className="h-8 w-6 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </Link>

          {/* GITHUB ICON */}
          <Link href="https://github.com/AbduSubhan11">
            <svg
              className="h-8 w-6 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </Link>
        </div>

        {/* NAV WORK BUTTON */}
        <Link
          href="/contact"
          onClick={closeMenu} 
          className="relative inline-block md:px-6 px-3 py-2 text-white border-2 border-black group bg-[#202426] overflow-hidden rounded-3xl"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#202426]">
            Let&apos;s Work Together
          </span>
          <span className="absolute inset-0 bg-white transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-bottom "></span>
        </Link>
      </div>

      {/* HAMBURGER */}
      <div className="lg:hidden z-20">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
