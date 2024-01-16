import Image from "next/image";
import Logo from "@/public/marslogo_scroll.png";

export default function Navbar() {
  return (
    <div className=" min-w-[100%] bg-yellow-400  px-2 sm:px-0 py-2 ">
      <div className="container mx-auto bg-white flex items-center justify-between ">
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-auto h-10 sm:h-16 object-cover"
          />
        </div>
        <div className="visible md:hidden">ham</div>
        <div className="hidden md:flex items-center justify-evenly gap-4">
          <div>Home </div>
          <div>About </div>
          <div>contact </div>
        </div>
      </div>
    </div>
  );
}
