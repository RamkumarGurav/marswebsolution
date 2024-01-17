import ServiceCard from "./ServiceCard";
import { IoMdDesktop } from "react-icons/io";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { FaBarsProgress } from "react-icons/fa6";
export default function Services() {
  let servicesArr = [
    {
      title: "Web Development",
      desc: "A professional website scoped correctly translates measurable results",
      icon: <IoMdDesktop size={50} className="text-white" />,
      link: "/",
    },
    {
      title: "Application Development",
      desc: "We have solutions for most dynamic and complex applicaiton that runs business.",
      icon: <BsFillRocketTakeoffFill size={50} className="text-white" />,
      link: "/",
    },
    {
      title: "Portal Development",
      desc: "We convert versatile shopping cart into an online super store for your business.",
      icon: <BsCartCheckFill size={50} className="text-white" />,
      link: "/",
    },
    {
      title: "Software Development",
      desc: "Creative ideas addressing their expectations planned.",
      icon: <FaBarsProgress size={50} className="text-white" />,
      link: "/",
    },
    {
      title: "E-Commerce Solution",
      desc: "Transforming your ideas inot an engaging shopping experience.",
      icon: <FaDollarSign size={50} className="text-white" />,
      link: "/",
    },
    {
      title: "Seo & Sem",
      desc: "Leverage the SEO Insights to Engage with Right targeted Audience.",
      icon: <FaSearch size={50} className="text-white" />,
      link: "/",
    },
  ];

  return (
    <div
      id="services"
      className=" min-w-[100%] py-10 bg-blue-800/50 text-white"
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl text-gray-100 font-semibold text-center">
          Featured Services
        </h2>
        <p className="text-center text-base font-medium text-gray-100 max-w-[700px] mb-4">
          We provide solutions for business by creative design, scalable
          development and interactive digital engagement. Our design team helps
          you in translating your services and products into powerful business.
          Check below for some of our key services and solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4  ">
          {servicesArr.map((serv, i) => (
            <div key={i}>
              <ServiceCard service={serv} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
