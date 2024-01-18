"use client";
import Image from "next/image";
import LogoBlack from "@/public/marslogo_scroll.png";
import LogoWhite from "@/public/marlogo_white.png";
import { useEffect, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const font = Montserrat({
  weight: "400",
  subsets: ["latin"],
  // preload: false,
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolled = scrollTop > 50;

      setIsScrolled(isScrolled);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]); // Empty

  if (isScrolled) {
    console.log("scrolled");
  }
  return (
    <div
      className={` min-w-[100%] ${
        isScrolled
          ? "bg-white text-[#333] sticky top-0"
          : "bg-transparent text-white absolute top-[94px] lg:top-[50px]"
      }   px-2 sm:px-0 py-2    flex items-center z-[999] font.className`}
    >
      <div className="relative flex w-full lg:px-1">
        <div className="container mx-auto flex items-center justify-between relative ">
          <Link href="/">
            <Image
              src={isScrolled ? LogoBlack : LogoWhite}
              alt="logo"
              width={200}
              height={200}
              className="w-auto h-10 sm:h-16 object-cover"
            />
          </Link>

          <div className="hidden lg:flex lg:visible items-center justify-evenly gap-6">
            <Link
              href={"/"}
              className="text-md   font-[400] uppercase "
              title="Home"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-md   font-[400] uppercase "
              title="Company"
            >
              Company
            </Link>
            <Link
              href={"/"}
              className="text-md   font-[400] uppercase "
              title="Portfolio"
            >
              Portfolio
            </Link>
            <Link
              href={"/"}
              className="text-md   font-[400] uppercase "
              title="Services"
            >
              Services
            </Link>
            <Link
              href={"/"}
              className="text-md   font-[400] uppercase "
              title="Career"
            >
              Career
            </Link>
            <Link
              href={"/"}
              className="text-md   font-[400] uppercase "
              title="Testimonials"
            >
              Testimonials
            </Link>
            <Link
              href={"/"}
              className="text-md   font-[400] uppercase "
              title="Contact Us"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {!open && (
          <div className="absolute right-2 top-[5px] sm:top-[10px] visible lg:hidden">
            <LiaBarsSolid
              color={isScrolled ? "#164058" : "white"}
              onClick={handleOpen}
              className="visible lg:hidden cursor-pointer text-[25px] sm:text-[30px]  "
            />
          </div>
        )}

        {
          <div
            className={`visible  fixed bg-[#3390c2c4] w-[220px] right-0   ${
              open ? "h-screen top-0" : "top-[-700px] h-0"
            } flex flex-col items-end gap-4  pt-4 duration-700 ease-in-out lg:hidden`}
          >
            <CgClose
              size={30}
              color={"white"}
              onClick={handleOpen}
              className="visible lg:hidden cursor-pointer text-md text-end  text-[#fff] font-[400] mr-4"
            />

            <Link
              href={"/"}
              className="text-md text-end pr-2 text-[#fff] font-[400] uppercase "
              title="Home"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-md text-end pr-2 text-[#fff]  font-[400] uppercase "
              title="Company"
            >
              Company
            </Link>
            <Link
              href={"/"}
              className="text-md text-end pr-2 text-[#fff]  font-[400] uppercase "
              title="Portfolio"
            >
              Portfolio
            </Link>
            <Link
              href={"/"}
              className="text-md text-end pr-2 text-[#fff]  font-[400] uppercase "
              title="Services"
            >
              Services
            </Link>
            <Link
              href={"/"}
              className="text-md text-end pr-2 text-[#fff]  font-[400] uppercase "
              title="Career"
            >
              Career
            </Link>
            <Link
              href={"/"}
              className="text-md text-end pr-2 text-[#fff]  font-[400] uppercase "
              title="Testimonials"
            >
              Testimonials
            </Link>
            <Link
              href={"/"}
              className="text-md text-end pr-2 text-[#fff]  font-[400] uppercase "
              title="Contact Us"
            >
              Contact Us
            </Link>
          </div>
        }
      </div>
    </div>
  );
}
