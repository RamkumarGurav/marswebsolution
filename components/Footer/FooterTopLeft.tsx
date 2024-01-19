import Link from "next/link";
import Image from "next/image";
import Tech from "@/public/footerTech.webp";

export default function FooterTopLeft() {
  return (
    <div className="footTopLeft p-4">
          <h4 className="text-xl pb-2 text-gray-900 w-full  font-semibold border-b-2 border-slate-50 text-center lg:text-start">
            Services
          </h4>
          <div className="grid lg:grid-cols-2">
            <ul
              id="footerQuickLinks1"
              className="quickLinkUl  px-4 pt-4 flex flex-col items-center lg:items-start"
            >
              <li className=" mb-2 ">
                <Link
                  href="privacy-policy.html"
                  title="Website Design"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Website Design
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="terms-condition.html"
                  title="Web Design & Development"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Web Design &amp; Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="disclaimer.html"
                  title="Portal Design & Development"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Portal Design &amp; Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="portfolio.html"
                  title="E Commerce Solution"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  E Commerce Solution
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="contact-us.html"
                  title="Web Design Johannesburg"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Web Design Johannesburg
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.marswebsolution.com/blog/"
                  title="E Commerce Development  Johannesburg"
                  target="_blank"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  E Commerce Development Johannesburg
                </Link>
              </li>
            </ul>

            <ul className="quickLinkUl  px-4  pt-4 flex flex-col items-center lg:items-start">
              <li className="mb-2 w-full ">
                <Link
                  href="privacy-policy.html"
                  title="Software Development"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Software Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="terms-condition.html"
                  title="Application Development"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Application Development
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="disclaimer.html"
                  title="Search Engine Optimization"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="portfolio.html"
                  title="Search Engine Marketing"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Search Engine Marketing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="contact-us.html"
                  title="Bulk SMS"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Bulk SMS
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://www.marswebsolution.com/blog/"
                  title="Digital Marketing Johannesburg"
                  target="_blank"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
                >
                  Digital Marketing Johannesburg
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="sitemap.html"
                  title="Data Science Solution"
                  className="footerQuickLink text-gray-900  font-semibold hover:underline"
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
              className="h-[40px] sm:h-[60px] w-auto object-cover"
              placeholder="blur"
            />
          </div>
        </div>
  );
}