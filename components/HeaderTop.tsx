import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import WhatsappLogo from "@/public/whatsapplogo_1.png";
import Image from "next/image";
export default function HeaderTop() {
  return (
    <div id="header-top" className="bg-[#164058] text-white ">
      {" "}
      <div className="container mx-auto   grid lg:grid-cols-2 gap-x-4">
        <form className=" bg-gray-200 text-black lg:text-white lg:bg-[#164058] flex items-center justify-between gap-2 py-2 px-1">
          <div className="text-[13px] flex flex-nowrap">
            {" "}
            <span className=" hidden lg:flex lg:visible whitespace-nowrap">
              Register your Domain Name : &nbsp;
            </span>
            www.
          </div>
          <div className="grow">
            <input
              type="text"
              className=" w-full px-2 py-[2px] focus:outline-none focus-visible:none  text-sm   rounded-3xl bg-gray-700/50 text-white border border-gray-300"
            />
          </div>

          <div>.</div>
          <div>
            <select className="min-w-[30px]  focus:outline-none focus-visible:none py-[2px] pl-2 text-sm  rounded-3xl bg-gray-700/50  text-white border border-gray-300">
              <option value="com">com</option>
              <option value="in">in</option>
              <option value="co.in">co.in</option>
              <option value="net">net</option>
              <option value="org">org</option>
              <option value="info">info</option>
              <option value="biz">biz</option>
              <option value="us">us</option>
              <option value="name">name</option>
              <option value="net.in">net.in</option>
              <option value="org.in">org.in</option>
              <option value="ind.in">ind.in</option>
              <option value="tv">tv</option>
              <option value="mobi">mobi</option>
            </select>
          </div>
          <div>
            <button className="bg-[#3088B4] text-white text-sm font-semibold py-[3px] px-4 upppercase border border-[#47adde]  rounded-3xl hover:bg-white hover:text-black hover">
              GO
            </button>
          </div>
        </form>
        <div className="bg-[#164058] flex justify-between md:justify-end  lg:justify-end gap-4   text-[13px] ">
          <div className="flex justify-center items-center ">
            <Link
              href="https://api.whatsapp.com/send?phone=+918088230479&amp;text=MARS%20Web%20Solutions%20"
              title="Contact Us via WhatsApp"
              target="_blank"
            >
              <Image
                src={WhatsappLogo}
                alt="Contact Us via WhatsApp"
                width={200}
                height={200}
                className="w-[23px] h-[23px] object-cover"
              />
            </Link>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex gap-4 items-center ">
              <div className="hidden lg:flex justify-center items-center  gap-1">
                <FiMail size={15} className="text-gray-100" />

                <Link
                  href="mailto:contactus@marswebsolution.com"
                  title="Contact Us via Email"
                  className="hover:underline"
                >
                  {" "}
                  contactus@marswebsolution.com
                </Link>
              </div>
              <div className="flex justify-center gap-1 items-center">
                <FaPhone size={13} className="text-gray-100" />

                <Link
                  href="tel:+918088230479"
                  title="Contact Us via Phone"
                  className="hover:underline"
                >
                  +918088230479
                </Link>
              </div>
            </div>
            <div className="bg-[#2f8ab8] grid place-content-center font-semibold px-4 h-[50px]">
              <Link href="/" className="hover:underline whitespace-nowrap">
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
