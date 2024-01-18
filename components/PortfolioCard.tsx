import Image from "next/image";
import Link from "next/link";

export type SiteDetailType = {
  link: string;
  image: string;
  name: string;
  title: string;
  alt: string;
};

export default function PortfolioCard({
  siteDetails: { link, image, name, title, alt },
}: {
  siteDetails: SiteDetailType;
}) {
  return (
    <div
      className="portFolioItem relative w-[300px] md:w-[280px] lg:w-[280px] h-[200px]  flex flex-col justify-center items-center  z-10 cursor-pointer rounded-lg overflow-hidden shadow-2xl border border-gray-400/50"
      title="Granite Website development in Bengaluru"
    >
      <div id="image-container" className="relative w-[400px] h-[300px]">
        <Image src={image} alt={alt} fill className="object-cover " />
      </div>

      <div className="  opacity-0 absolute top-0 hover:opacity-100 hover:bg-blue-900/80 w-full h-full flex flex-col justify-center items-center z-50 gap-4 ease-in-out duration-700">
        <span className="text-white text-lg font-semibold pb-2 border-b border-b-slate-200">
          {name}
        </span>
        <Link
          href={link}
          className="bg-gray-200 text-gray-800 p-1 px-2 rounded-lg"
        >
          view site
        </Link>
      </div>
    </div>
  );
}
