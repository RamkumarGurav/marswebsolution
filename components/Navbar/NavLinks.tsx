import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavLinks({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="hidden lg:flex lg:visible items-center justify-evenly gap-0">
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
            <Link href="/" className="navLinkInDrop">
              About Company
            </Link>
            <Link href="/" className="navLinkInDrop ">
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
            <Link href="/" className="navLinkInDrop">
              Web Design
            </Link>
            <Link href="/" className="navLinkInDrop">
              Web Development
            </Link>
            <Link href="/" className="navLinkInDrop">
              Portal Development
            </Link>
            <Link href="/" className="navLinkInDrop">
              E commerce Solution
            </Link>
            <Link href="/" className="navLinkInDrop">
              Software Development
            </Link>
            <Link href="/" className="navLinkInDrop">
              Application Development
            </Link>
            <Link href="/" className="navLinkInDrop">
              Data Science Solution
            </Link>
            <Link href="/" className="navLinkInDrop">
              SEO & SEM
            </Link>
            <Link href="/" className="navLinkInDrop">
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
            <Link href="/" className="navLinkInDrop">
              Join our team
            </Link>
            <Link href="/" className="navLinkInDrop">
              Current Opening
            </Link>
            <Link href="/" className="navLinkInDrop ">
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
    </div>
  );
}
