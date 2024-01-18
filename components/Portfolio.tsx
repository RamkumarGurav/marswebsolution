import Image from "next/image";
import PortfolioCard from "./PortfolioCard";
import Link from "next/link";

Image;
export default function Portfolio() {
  let sitesArr = [
    {
      link: "https://lavinagranites.com/",
      image: "https://www.marswebsolution.com/images/portfolio/design9.jpg",
      name: "Construciton Industry",
      title: "Granite Website development in Bengaluru",
      alt: "portfolio ",
    },
    {
      link: "https://karnatakafurnishing.com/",
      image: "https://www.marswebsolution.com/images/portfolio/seo2.jpg",
      name: "Furnishing Industry",
      title: "Furnishing Website development in Bengaluru",
      alt: "Furnishing Website ",
    },
    {
      link: "https://www.taazashahimewa.com/",
      image: "https://www.marswebsolution.com/images/portfolio/e-commerce4.jpg",
      name: "Dry Fruit Products",
      title: "E-commerce Website development in Bengaluru",
      alt: "E-commerce Website ",
    },

    {
      link: "https://www.fabmodula.com/",
      image: "https://www.marswebsolution.com/images/portfolio/seo1.jpg",
      name: "Interior Designing",
      title: "Interior Website development in Bengaluru",
      alt: "Interior Website ",
    },
    {
      link: "https://www.sizzleproperties.com/",
      image: "https://www.marswebsolution.com/images/portfolio/design1.jpg",
      name: "Construction",
      title: "Construction Website development in Bengaluru",
      alt: "Construction Website ",
    },
    {
      link: "https://www.bionovastore.com/",
      image: "https://www.marswebsolution.com/images/portfolio/design56.jpg",
      name: "Ecommerce",
      title: "Ecommerce Website development in Bengaluru",
      alt: "Ecommerce Website",
    },
  ];

  return (
    <div id="portfolio" className="portfolioShell py-20 px-12 ">
      <h1 className="text-4xl text-center font-semibold text-gray-700 mb-8">
        Port Folio
      </h1>
      <div className="mx-auto lg:max-w-[1000px] grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-center">
        {sitesArr.map((siteDetails, i) => (
          <div key={i}>
            <PortfolioCard siteDetails={siteDetails} />
          </div>
        ))}
      </div>

      <div className="w-full mt-10 grid place-content-center">
        <Link
          href="https://www.marswebsolution.com/portfolio.html"
          className="mx-auto text-sm md:text-base text-center bg-[#5695AB] text-gray-100  font-semibold py-2 px-4 border border-[#5695AB] rounded hover:bg-white hover:text-[#5695AB] uppercase"
        >
          All works in our portfolio
        </Link>
      </div>
    </div>
  );
}
