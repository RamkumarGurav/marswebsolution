import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import WhatsappLogo from "@/public/whatsapplogo_1.png";
export default function HeaderTopRight() {
  return (
    <div className="bg-[#164058] flex justify-between md:justify-end  lg:justify-evenly gap-4   text-[13px] ">
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
            placeholder="blur"
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
  );
}
