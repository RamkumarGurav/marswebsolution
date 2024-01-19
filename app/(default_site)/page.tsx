import AboutCompany from "@/components/AboutCompany";
import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import Portfolio from "@/components/PortFolio/Portfolio";
import Services from "@/components/Services/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className=" min-h-[500px] w-[100%] ">
      <HomeCarousel />
      <AboutCompany />
      <Services />
      <Portfolio />
      <Work />
    </div>
  );
}
