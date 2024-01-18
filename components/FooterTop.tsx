import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Image from "next/image";
import PaymentImage from "@/public/payment-gateway.webp";
import Tech from "@/public/footerTech.webp";
import { FaPhone } from "react-icons/fa6";
export default function FooterTop() {
  return (
    <footer id="footer-top " className=" bg-[#E6E4E4] w-[100%] py-6">
      <div className="container mx-auto grid lg:grid-cols-2 ">
        <div className="footTopLeft p-4">
          <h4 className="text-xl pb-2 text-gray-900  font-semibold border-b-2 border-slate-50 text-center lg:text-start">
            Services
          </h4>
          <div className="grid lg:grid-cols-2">
            <ul className="quickLinkUl  px-4 pt-4 flex flex-col items-center lg:items-start">
              <li className="mb-2 ">
                <Link
                  href="privacy-policy.html"
                  title="Website Design"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Website Design
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="terms-condition.html"
                  title="Web Design & Development"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Web Design &amp; Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="disclaimer.html"
                  title="Portal Design & Development"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Portal Design &amp; Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="portfolio.html"
                  title="E Commerce Solution"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  E Commerce Solution
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="contact-us.html"
                  title="Web Design Johannesburg"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Web Design Johannesburg
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.marswebsolution.com/blog/"
                  title="E Commerce Development  Johannesburg"
                  target="_blank"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  E Commerce Development Johannesburg
                </Link>
              </li>
            </ul>

            <ul className="quickLinkUl  px-4  pt-4 flex flex-col items-center lg:items-start">
              <li className="mb-2 ">
                <Link
                  href="privacy-policy.html"
                  title="Software Development"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Software Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="terms-condition.html"
                  title="Application Development"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Application Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="disclaimer.html"
                  title="Search Engine Optimization"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="portfolio.html"
                  title="Search Engine Marketing"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Search Engine Marketing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="contact-us.html"
                  title="Bulk SMS"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Bulk SMS
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.marswebsolution.com/blog/"
                  title="Digital Marketing Johannesburg"
                  target="_blank"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Digital Marketing Johannesburg
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="sitemap.html"
                  title="Data Science Solution"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Data Science Solution
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-center lg:justify-start items-center">
            <Image
              src={Tech}
              alt="payment gateway"
              width={200}
              height={200}
              className="h-[60px] w-auto object-cover"
            />
          </div>
        </div>
        <div className="footTopRight lg:grid lg:grid-cols-3 ">
          <div className="footTopRightQLinks p-4">
            <h4 className="text-xl pb-2 text-gray-900  font-semibold border-b-2 border-slate-50 text-center lg:text-start">
              Quick Links
            </h4>
            <ul className="quickLinkUl  px-4 pt-4 flex flex-col items-center lg:items-start">
              <li className="mb-2 ">
                <Link
                  href="privacy-policy.html"
                  title="Privacy Policy"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="terms-condition.html"
                  title="Application Development"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Terms &amp; Condition
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="disclaimer.html"
                  title="Disclaimer"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Disclaimer
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="portfolio.html"
                  title="Portfolio"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="contact-us.html"
                  title="Contact Us"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.marswebsolution.com/blog/"
                  title="Blog"
                  target="_blank"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="sitemap.html"
                  title="Sitemap"
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="footTopRightAddress lg:col-span-2 flex flex-col justify-center items-center  z-0">
            <div className="flex justify-center items-center h-[150px]">
              <div className="footPhoneNo bg-[#FF9900] shadow-lg relative  px-[30px] py-[15px] flex justify-center items-center gap-2 z-[999] ">
                <FaPhone size={22} className="footPhoneIcon text-gray-100" />

                <Link
                  href="tel:+918088230479"
                  title="Contact Us via Phone"
                  className="text-black text-[22px] font-semibold hover:underline z-10"
                >
                  +918088230479
                </Link>

                {/* //LEFT SIDE WINGS */}
                <div className="absolute  bottom-[-20px] left-[-40px] w-0 h-0 border-solid border-b-[40px] border-l-[40px] border-b-[#FF9900] border-l-transparent  "></div>
                <div className="absolute  bottom-[0px] left-[-40px] w-0 h-0 border-solid border-t-[40px] border-l-[40px] border-t-[#FF9900] border-l-transparent  "></div>
                <div className="absolute  bottom-[-20px] left-[0px] w-0 h-0 border-solid border-t-[20px] border-l-[20px] border-t-[#d07f05] border-l-transparent  "></div>
                <div className="absolute  bottom-[-20px] left-[0px] w-0 h-0 border-solid border-b-[20px] border-r-[20px] border-b-[#FF9900] border-r-transparent  "></div>

                {/* //RIGHT SIDE WINGS */}
                <div className="absolute  bottom-[-20px] right-[-40px] w-0 h-0 border-solid border-b-[40px] border-r-[40px] border-b-[#FF9900] border-r-transparent  "></div>
                <div className="absolute  bottom-[0px] right-[-40px] w-0 h-0 border-solid border-t-[40px] border-r-[40px] border-t-[#FF9900] border-r-transparent  "></div>
                <div className="absolute  bottom-[-20px] right-[0px] w-0 h-0 border-solid border-t-[20px] border-r-[20px] border-t-[#d07f05] border-r-transparent  "></div>
                <div className="absolute  bottom-[-20px] right-[0px] w-0 h-0 border-solid border-b-[20px] border-l-[20px] border-b-[#FF9900] border-l-transparent  "></div>
              </div>
            </div>
            <p className="mb-4 w-full text-black text-center font-semibold">
              <FaMapMarkerAlt
                size={15}
                className="text-black inline-block text-start mr-2"
              />
              #1204, 1st Floor, ASHVA Building,
              <br />
              26th Main, 41st Cross, Jayanagar 9th Block
              <br />
              Bangalore-560 069, Karnataka, India
            </p>
            <div className="mb-4 flex w-full justify-center items-center gap-2 ">
              <FiMail size={15} className="text-black  " />

              <Link
                href="mailto:contactus@marswebsolution.com"
                title="Contact Us via Email"
                className="text-black font-semibold hover:underline"
              >
                {" "}
                contactus@marswebsolution.com
              </Link>
            </div>
            <div className="flex w-full justify-center items-center">
              <Image
                src={PaymentImage}
                alt="payment gateway"
                width={200}
                height={200}
                className="h-[40px] w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
