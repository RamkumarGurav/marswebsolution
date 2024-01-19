import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SideNav({
  open,
  handleOpen,
  navLinkName,
  handleNavLinkName,
}: {
  open: boolean;
  handleOpen: () => void;
  navLinkName: string;
  handleNavLinkName: (name: string) => void;
}) {
  return (
    <div
      className={`visible  fixed bg-[#3390c2c4] w-[220px] right-0 h-screen  ${
        open ? " top-0" : "top-[-100vh] "
      } flex flex-col items-end gap-4  pt-4  transition-all duration-700 ease-in-out lg:hidden`}
    >
      <CgClose
        size={30}
        color={"white"}
        onClick={handleOpen}
        className="visible lg:hidden cursor-pointer text-md text-end  text-gray-300 hover:text-gray-100 font-[400] mr-4"
      />

      <Link href={"/"} className="navLinkMobile text-white" title="Home">
        Home
      </Link>
      <div
        className="navLinkMobile  pr-[10px] w-full cursor-pointer"
        title="Company"
        onClick={() => handleNavLinkName("company")}
      >
        <div className=" flex justify-end ">
          <span className={`navLinkMobile `} title="Company">
            Company
          </span>
          <span className="relative">
            <RiArrowDropDownLine
              size={30}
              className={`navLinkMobile  inline-block text-inherit hover:text-inherit p-0 m-0 absolute left-[-12px] top-[-4px]`}
            />
          </span>
        </div>
        {navLinkName === "company" && (
          <div className=" w-full   bg-blue-500/50 text-gray-900 visible normal-case">
            <Link href="/" className="px-4 mobileDropDownLink">
              About Company
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Life@Mars
            </Link>
          </div>
        )}
      </div>
      <Link href={"/"} className=" navLinkMobile" title="Portfolio">
        Portfolio
      </Link>
      <div
        className="navLinkMobile  pr-[10px] w-full cursor-pointer"
        title="Services"
        onClick={() => handleNavLinkName("services")}
      >
        <div className=" flex justify-end ">
          <span className={`navLinkMobile `} title="Services">
            Services
          </span>
          <span className="relative">
            <RiArrowDropDownLine
              size={30}
              className={`navLinkMobile  inline-block text-inherit hover:text-inherit p-0 m-0 absolute left-[-12px] top-[-4px]`}
            />
          </span>
        </div>
        {navLinkName === "services" && (
          <div className=" w-full   bg-blue-500/50 text-gray-900 visible normal-case">
            <Link href="/" className="px-4 mobileDropDownLink">
              Web Design
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Web Development
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Portal Development
            </Link>
            <Link href="/" className="mobileDropDownLink">
              E-Commerce Solution
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Software Development
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Data Science Solution
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Application Development
            </Link>
            <Link href="/" className="mobileDropDownLink">
              SEO & SEM
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Bulk SMS
            </Link>
          </div>
        )}
      </div>
      <div
        className="navLinkMobile  pr-[10px] w-full cursor-pointer"
        title="Careers"
        onClick={() => handleNavLinkName("careers")}
      >
        <div className=" flex justify-end ">
          <span className={`navLinkMobile `} title="Careers">
            Careers
          </span>
          <span className="relative">
            <RiArrowDropDownLine
              size={30}
              className={`navLinkMobile  inline-block text-inherit hover:text-inherit p-0 m-0 absolute left-[-12px] top-[-4px]`}
            />
          </span>
        </div>
        {navLinkName === "careers" && (
          <div className=" w-full   bg-blue-500/50 text-gray-900 visible normal-case">
            <Link href="/" className="px-4 mobileDropDownLink">
              Join Our Team
            </Link>
            <Link href="/" className="mobileDropDownLink">
              Current Openings
            </Link>
            <Link href="/" className="mobileDropDownLink">
              {" "}
              Internship
            </Link>
          </div>
        )}
      </div>
      <Link href={"/"} className="navLinkMobile " title="Testimonials">
        Testimonials
      </Link>
      <Link href={"/"} className="navLinkMobile " title="Contact Us">
        Contact Us
      </Link>
    </div>
  );
}
