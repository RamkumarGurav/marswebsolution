import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import PaymentImage from "@/public/payment-gateway.webp";
import Tech from "@/public/footerTech.webp";
import { FaPhone } from "react-icons/fa6";
import FooterTopLeft from "./FooterTopLeft";
import FooterTopRight from "./FooterTopRight";
export default function FooterTop() {
  return (
    <footer id="footer-top " className=" bg-[#E6E4E4] w-[100%] py-6">
      <div className="container mx-auto grid lg:grid-cols-2 ">
        <FooterTopLeft />
        <FooterTopRight />
      </div>
    </footer>
  );
}
