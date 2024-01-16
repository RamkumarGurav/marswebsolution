"use client";
import Image from "next/image";
import Logo from "@/public/marslogo_scroll.png";
import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className=" min-w-[100%] bg-white  px-2 sm:px-0 py-2 sticky top-0  z-10 flex items-center "
      style={{ position: "sticky", top: "0" }}
    >
      <div className="relative flex w-full lg:px-1">
        <div className="container mx-auto flex items-center justify-between relative ">
          <div>
            <Image
              src={Logo}
              alt="logo"
              width={200}
              height={200}
              className="w-auto h-10 sm:h-16 object-cover"
            />
          </div>

          <div className="hidden lg:flex lg:visible items-center justify-evenly gap-6">
            <Link
              href={"/"}
              className="text-md  text-[#333] font-[400] uppercase "
              title="Home"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-md text-[#333]  font-[400] uppercase "
              title="Company"
            >
              Company
            </Link>
            <Link
              href={"/"}
              className="text-md text-[#333]  font-[400] uppercase "
              title="Portfolio"
            >
              Portfolio
            </Link>
            <Link
              href={"/"}
              className="text-md text-[#333]  font-[400] uppercase "
              title="Services"
            >
              Services
            </Link>
            <Link
              href={"/"}
              className="text-md text-[#333]  font-[400] uppercase "
              title="Career"
            >
              Career
            </Link>
            <Link
              href={"/"}
              className="text-md text-[#333]  font-[400] uppercase "
              title="Testimonials"
            >
              Testimonials
            </Link>
            <Link
              href={"/"}
              className="text-md text-[#333]  font-[400] uppercase "
              title="Contact Us"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {!open && (
          <div className="absolute right-2 top-[5px] sm:top-[10px] visible lg:hidden">
            <LiaBarsSolid
              color={"#164058"}
              onClick={handleOpen}
              className="visible lg:hidden cursor-pointer text-[25px] sm:text-[30px]  "
            />
          </div>
        )}

        {open && (
          <div className=" visible fixed bg-[#3390c2c4] w-[220px] right-0 top-0 bottom-0 flex flex-col items-end gap-4 lg:hidden pt-4">
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
        )}
      </div>
    </div>
  );
}
