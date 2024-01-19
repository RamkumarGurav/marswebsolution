import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import WhatsappLogo from "@/public/whatsapplogo_1.png";
import Image from "next/image";
import HeaderTopLeft from "./HeaderTopLeft";
import HeaderTopRight from "./HeaderTopRight";
export default function HeaderTop() {
  return (
    <div id="header-top" className="bg-[#164058] text-white ">
      {" "}
      <div className="container mx-auto   grid lg:grid-cols-2 gap-x-4">
        <HeaderTopLeft />
        <HeaderTopRight />
      </div>
    </div>
  );
}
