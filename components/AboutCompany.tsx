export default function AboutCompany() {
  return (
    <div className=" min-w-[100%] py-[80px]">
      <div className="container mx-auto flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl sm:text-4xl text-gray-700 font-semibold text-center ">
          Web Design Company in Bangalore
        </h2>
        <p className="text-center text-base font-medium text-gray-600 max-w-[600px]">
          Mars Web Solution is the best website development company in
          Bangalore. With years of experience in Web Designing, our web
          developers have worked with various successful startups, medium &
          large scale enterprises to produce web graphics and interactive
          interfaces website design in Bangalore.
        </p>
        <p className="text-center text-base font-medium text-gray-600">
          We strive for your satisfaction and support.
        </p>
        <div className="flex justify-center items-center gap-5 mt-5">
          <button className="bg-[#5695AB] text-gray-100  font-semibold py-2 px-4 border border-[#5695AB] rounded hover:bg-white hover:text-[#5695AB] uppercase">
            our services
          </button>
          <button className="bg-[#B86A9E] text-gray-100  font-semibold py-2 px-4 border border-[#B86A9E] rounded hover:bg-white hover:text-[#B86A9E] uppercase">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
}
