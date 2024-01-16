export default function HeaderTop() {
  return (
    <div id="header-top" className="bg-[#164058]">
      {" "}
      <div className="container mx-auto   grid lg:grid-cols-2 ">
        <div className="bg-white text-black lg:bg-[#164058] flex items-center justify-start">
          <div className=" flex flex-nowrap">
            {" "}
            <span className=" hidden lg:flex lg:visible ">
              Register your Domain Name : &nbsp;
            </span>
            www.
          </div>
          <div>2</div>
          <div>.</div>
          <div>4</div>
          <div>
            <button className="bg-[#3088B4] text-white  py-[3px] px-[18px] upppercase border border-[#47adde]  rounded-3xl hover:bg-white hover:text-black hover">
              GO
            </button>
          </div>
        </div>
        <div className="bg-blue-400 lg:bg-[#164058]">right</div>
      </div>
    </div>
  );
}
