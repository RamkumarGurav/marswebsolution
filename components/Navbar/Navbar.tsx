"use client";
import Image from "next/image";
import LogoBlack from "@/public/marslogo_scroll.png";
import LogoWhite from "@/public/marlogo_white.png";
import { useEffect, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { RiArrowDropDownLine, RiArrowDropDownFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import SideNav from "./SideNav";
import NavLinks from "./NavLinks";

// If loading a variable font, you don't need to specify the font weight
const font = Poppins({
  weight: "400",
  subsets: ["latin"],
  // preload: false,
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navLinkName, setNavLinkName] = useState("");
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleNavLinkName = (name: string) => {
    setNavLinkName((prevName) => (prevName === name ? "" : name));
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!open) {
      setNavLinkName("");
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolled = scrollTop > 50; //when scroll reaches above 50px lengthh

      setIsScrolled(isScrolled);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]); // Empty

  // if (isScrolled) {
  //   console.log("scrolled");
  // }
  return (
    <div
      className={` min-w-[100%] ${
        isScrolled
          ? "bg-white text-gray-900/80  sticky top-0"
          : "bg-transparent text-gray-300  absolute top-[94px] lg:top-[50px]"
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
              placeholder="blur"
            />
          </Link>
          <NavLinks isScrolled={isScrolled} />

          {/* <div className="hidden lg:flex lg:visible items-center justify-evenly gap-0">
            <Link
              href={"/"}
              className={`navLink w-full text-start ${
                isScrolled && "hover:text-black"
              }`}
              title="Home"
            >
              Home
            </Link>
            <div className="dropDownContainer relative ">
              <div
                className={`flex justify-center relative items-center flex-nowrap ${
                  isScrolled && "hover:text-black"
                }`}
              >
                <span
                  className={`navLink text-inherit hover:text-inherit  inline-block p-2`}
                  title="Company"
                >
                  Company
                </span>

                <RiArrowDropDownLine
                  size={24}
                  className={`   p-0 m-0 absolute right-[-2px] top-[9px]`}
                />
              </div>

              <div className=" dropDownLinks   absolute top-[40px] left-0   border   text-gray-900 visible">
                <div className="dropDownLinks-x w-full h-full  relative">
                  <div className="cap absolute  top-[-20px] left-[20px] w-0 h-0 border-solid border-t-[10px] border-l-[10px]  border-b-[10px]  border-r-[10px]  border-b-[#ffffff] border-r-transparent border-l-transparent border-t-transparent "></div>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    About Company
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid  block whitespace-nowrap "
                  >
                    Life@Mars
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href={"/"}
              className={`navLink ${isScrolled && "hover:text-black"}`}
              title="Portfolio"
            >
              Portfolio
            </Link>
            <div className="dropDownContainer relative ">
              <div
                className={`relative flex justify-center items-center flex-nowrap ${
                  isScrolled && "hover:text-black"
                }`}
              >
                <span
                  className={`navLink text-inherit hover:text-inherit  inline-block p-2`}
                  title="Services"
                >
                  Services
                </span>
                <RiArrowDropDownLine
                  size={24}
                  className={`   p-0 m-0 absolute right-[-2px] top-[9px]`}
                />
              </div>

              <div className=" dropDownLinks   absolute top-[40px] left-0   border   text-gray-900 visible">
                <div className="dropDownLinks-x w-full h-full  relative">
                  <div className="cap absolute  top-[-20px] left-[20px] w-0 h-0 border-solid border-t-[10px] border-l-[10px]  border-b-[10px]  border-r-[10px]  border-b-[#ffffff] border-r-transparent border-l-transparent border-t-transparent "></div>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Web Design
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Portal Development
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    E commerce Solution
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Software Development
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Application Development
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Data Science Solution
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    SEO & SEM
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid  block whitespace-nowrap "
                  >
                    Bulk SMS
                  </Link>
                </div>
              </div>
            </div>
            <div className="dropDownContainer relative ">
              <div
                className={`relative flex justify-center items-center flex-nowrap ${
                  isScrolled && "hover:text-black"
                }`}
              >
                <span
                  className={`navLink text-inherit hover:text-inherit  inline-block p-2`}
                  title="Company"
                >
                  Career
                </span>
                <RiArrowDropDownLine
                  size={24}
                  className={`   p-0 m-0 absolute right-[-2px] top-[9px]`}
                />
              </div>

              <div className=" dropDownLinks   absolute top-[40px] left-0   border   text-gray-900 visible">
                <div className="dropDownLinks-x w-full h-full  relative">
                  <div className="cap absolute  top-[-20px] left-[20px] w-0 h-0 border-solid border-t-[10px] border-l-[10px]  border-b-[10px]  border-r-[10px]  border-b-[#ffffff] border-r-transparent border-l-transparent border-t-transparent "></div>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Join our team
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid border-b-gray-400 block whitespace-nowrap mb-2"
                  >
                    Current Opening
                  </Link>
                  <Link
                    href="/"
                    className="px-4 py-2 pb-4  border-b border-solid  block whitespace-nowrap "
                  >
                    Internship
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href={"/"}
              className={`navLink ${isScrolled && "hover:text-black"}`}
              title="Testimonials"
            >
              Testimonials
            </Link>
            <Link
              href={"/"}
              className={`navLink ${isScrolled && "hover:text-black"}`}
              title="Contact Us"
            >
              Contact Us
            </Link>
          </div> */}
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
          <SideNav
            open={open}
            navLinkName={navLinkName}
            handleNavLinkName={handleNavLinkName}
            handleOpen={handleOpen}
          />
          // <div
          //   className={`visible  fixed bg-[#3390c2c4] w-[220px] right-0 h-screen  ${
          //     open ? " top-0" : "top-[-100vh] "
          //   } flex flex-col items-end gap-4  pt-4  transition-all duration-700 ease-in-out lg:hidden`}
          // >
          //   <CgClose
          //     size={30}
          //     color={"white"}
          //     onClick={handleOpen}
          //     className="visible lg:hidden cursor-pointer text-md text-end  text-gray-300 hover:text-gray-100 font-[400] mr-4"
          //   />

          //   <Link href={"/"} className="navLinkMobile text-white" title="Home">
          //     Home
          //   </Link>
          //   <div
          //     className="navLinkMobile  pr-[10px] w-full cursor-pointer"
          //     title="Company"
          //     onClick={() => handleNavLinkName("company")}
          //   >
          //     <div className=" flex justify-end ">
          //       <span className={`navLinkMobile `} title="Company">
          //         Company
          //       </span>
          //       <span className="relative">
          //         <RiArrowDropDownLine
          //           size={30}
          //           className={`navLinkMobile  inline-block text-inherit hover:text-inherit p-0 m-0 absolute left-[-12px] top-[-4px]`}
          //         />
          //       </span>
          //     </div>
          //     {navLinkName === "company" && (
          //       <div className=" w-full   bg-blue-500/50 text-gray-900 visible normal-case">
          //         <Link href="/" className="px-4 mobileDropDownLink">
          //           About Company
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Life@Mars
          //         </Link>
          //       </div>
          //     )}
          //   </div>
          //   <Link href={"/"} className=" navLinkMobile" title="Portfolio">
          //     Portfolio
          //   </Link>
          //   <div
          //     className="navLinkMobile  pr-[10px] w-full cursor-pointer"
          //     title="Services"
          //     onClick={() => handleNavLinkName("services")}
          //   >
          //     <div className=" flex justify-end ">
          //       <span className={`navLinkMobile `} title="Services">
          //         Services
          //       </span>
          //       <span className="relative">
          //         <RiArrowDropDownLine
          //           size={30}
          //           className={`navLinkMobile  inline-block text-inherit hover:text-inherit p-0 m-0 absolute left-[-12px] top-[-4px]`}
          //         />
          //       </span>
          //     </div>
          //     {navLinkName === "services" && (
          //       <div className=" w-full   bg-blue-500/50 text-gray-900 visible normal-case">
          //         <Link href="/" className="px-4 mobileDropDownLink">
          //           Web Design
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Web Development
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Portal Development
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           E-Commerce Solution
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Software Development
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Data Science Solution
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Application Development
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           SEO & SEM
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Bulk SMS
          //         </Link>
          //       </div>
          //     )}
          //   </div>
          //   <div
          //     className="navLinkMobile  pr-[10px] w-full cursor-pointer"
          //     title="Careers"
          //     onClick={() => handleNavLinkName("careers")}
          //   >
          //     <div className=" flex justify-end ">
          //       <span className={`navLinkMobile `} title="Careers">
          //         Careers
          //       </span>
          //       <span className="relative">
          //         <RiArrowDropDownLine
          //           size={30}
          //           className={`navLinkMobile  inline-block text-inherit hover:text-inherit p-0 m-0 absolute left-[-12px] top-[-4px]`}
          //         />
          //       </span>
          //     </div>
          //     {navLinkName === "careers" && (
          //       <div className=" w-full   bg-blue-500/50 text-gray-900 visible normal-case">
          //         <Link href="/" className="px-4 mobileDropDownLink">
          //           Join Our Team
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           Current Openings
          //         </Link>
          //         <Link href="/" className="mobileDropDownLink">
          //           {" "}
          //           Internship
          //         </Link>
          //       </div>
          //     )}
          //   </div>
          //   <Link href={"/"} className="navLinkMobile " title="Testimonials">
          //     Testimonials
          //   </Link>
          //   <Link href={"/"} className="navLinkMobile " title="Contact Us">
          //     Contact Us
          //   </Link>
          // </div>
        }
      </div>
    </div>
  );
}
