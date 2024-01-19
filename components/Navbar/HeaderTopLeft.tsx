export default function HeaderTopLeft() {
  return (
    <form className=" bg-gray-200 text-black lg:text-white lg:bg-[#164058] flex items-center justify-between gap-2 py-2 px-1">
      <div className="text-[13px] flex flex-nowrap">
        {" "}
        <span className=" hidden lg:flex lg:visible whitespace-nowrap">
          Register your Domain Name : &nbsp;
        </span>
        www.
      </div>
      <div className="grow">
        <input
          type="text"
          className=" w-full px-2 py-[2px] focus:outline-none focus-visible:none  text-sm   rounded-3xl bg-gray-700/50 text-white border border-gray-300"
        />
      </div>

      <div>.</div>
      <div>
        <select className="min-w-[30px]  focus:outline-none focus-visible:none py-[2px] pl-2 text-sm  rounded-3xl bg-gray-700/50  text-white border border-gray-300">
          <option value="com">com</option>
          <option value="in">in</option>
          <option value="co.in">co.in</option>
          <option value="net">net</option>
          <option value="org">org</option>
          <option value="info">info</option>
          <option value="biz">biz</option>
          <option value="us">us</option>
          <option value="name">name</option>
          <option value="net.in">net.in</option>
          <option value="org.in">org.in</option>
          <option value="ind.in">ind.in</option>
          <option value="tv">tv</option>
          <option value="mobi">mobi</option>
        </select>
      </div>
      <div>
        <button className="bg-[#3088B4] text-white text-sm font-semibold py-[3px] px-4 upppercase border border-[#47adde]  rounded-3xl hover:bg-white hover:text-black hover">
          GO
        </button>
      </div>
    </form>
  );
}
