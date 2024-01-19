import Link from "next/link";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const FooterBottom = () => {
  return (
    <footer className="bg-[#cfcdcd] py-2 w-full ">
      <div className="container mx-auto  flex flex-col gap-2  text-center w-full lg:flex-row justify-between items-center">
        <p className="text-sm text-gray-600  sm:whitespace-nowrap">
          copyrights © MARS Web Solution. All rights reserved.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-1 ">
          <Link href="/" className="footer-social-link">
            <BsFacebook size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <BsTwitter size={20} className="footer-social-icon" />
          </Link>

          <Link href="/" className="footer-social-link">
            <FaInstagram size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <TfiYoutube size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <AiFillLinkedin size={20} className="footer-social-icon" />
          </Link>
          <Link href="/" className="footer-social-link">
            <FaPinterest size={20} className="footer-social-icon" />
          </Link>
        </div>
        <p className="text-sm text-gray-700 w-[300px]">
          Powered by MARS Web Solution
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
