"use client";
import { useEffect, useState } from "react";

export default function Work() {
  const stats = [
    { label1: "Successful", label2: "Projects", value: 9 },
    { label1: "Completed", label2: "Projects", value: 2100 },
    { label1: "Countries", label2: "with clients", value: 22 },
    { label1: "Customer", label2: "Satisfaction", value: 100 },
  ];

  const [animatedStats, setAnimatedStats] = useState(
    stats.map((stat) => ({ ...stat, animatedValue: 0 }))
  );

  useEffect(() => {
    const animationDuration = 2000; // milliseconds

    const updateAnimatedStats = () => {
      setAnimatedStats((prevStats) =>
        prevStats.map((stat) => {
          const newValue =
            stat.animatedValue +
            Math.ceil(stat.value / (animationDuration / 100));
          return {
            ...stat,
            animatedValue: newValue > stat.value ? stat.value : newValue,
          };
        })
      );
    };

    const intervalId = setInterval(() => {
      updateAnimatedStats();

      // Check if all stats have reached or exceeded their target values
      const shouldStop = animatedStats.every(
        (stat) => stat.animatedValue >= stat.value
      );

      if (shouldStop) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [animatedStats]);

  return (
    <div id="work" className="workShell w-full py-10">
      <div className="container lg:max-w-[1000px] mx-auto">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-10 px-4 place-content-center">
          {animatedStats.map((stat, index) => (
            <div
              key={index}
              className="workBox1 relative min-w-[200px] sm:max-w-[300px] bg-gray-200/50 py-4"
            >
              <div className="workBox2">
                <div className="workBox3">
                  <h1 className="text-4xl text-black font-bold text-center mb-4">
                    {stat.label1 === "Customer"
                      ? `${stat.animatedValue} %`
                      : stat.label1 === "Completed"
                      ? `${stat.animatedValue} +`
                      : stat.animatedValue}
                  </h1>
                  <p className="text-md text-gray-950 font-bold text-center">
                    {stat.label1}
                  </p>
                  <p className="text-gray-950 text-center">{stat.label2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function Work() {
//   return (
//     <div id="work" className="workShell w-full py-10">
//       <div className="container lg:max-w-[1000px] mx-auto ">
//         <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-10 px-4 place-content-center">
//           <div className="workBox1 relative min-w-[200px] sm:max-w-[300px] bg-gray-200/50 py-4">
//             <div className="workBox2 ">
//               <div className="workBox3 ">
//                 <h1 className="text-4xl text-black font-bold text-center mb-4 ">
//                   9+
//                 </h1>
//                 <p className="text-md text-gray-950 font-bold text-center">
//                   Successful
//                 </p>
//                 <p className=" text-gray-950 text-center">Years</p>
//               </div>
//             </div>
//           </div>
//           <div className="workBox1 relative min-w-[200px] sm:max-w-[300px] bg-gray-200/50 py-4">
//             <div className="workBox2 ">
//               <div className="workBox3 ">
//                 <h1 className="text-4xl text-black font-bold text-center mb-4 ">
//                   2100+
//                 </h1>
//                 <p className="text-md text-gray-950 font-bold text-center">
//                   Completed
//                 </p>
//                 <p className=" text-gray-950 text-center">Projects</p>
//               </div>
//             </div>
//           </div>

//           <div className="workBox1 relative min-w-[200px] sm:max-w-[300px] bg-gray-200/50 py-4">
//             <div className="workBox2 ">
//               <div className="workBox3 ">
//                 <h1 className="text-4xl text-black font-bold text-center mb-4 ">
//                   22+
//                 </h1>
//                 <p className="text-md text-gray-950 font-bold text-center">
//                   Countries
//                 </p>
//                 <p className=" text-gray-950 text-center">with Clients</p>
//               </div>
//             </div>
//           </div>
//           <div className="workBox1 relative min-w-[200px] sm:max-w-[300px] bg-gray-200/50 py-4">
//             <div className="workBox2 ">
//               <div className="workBox3 ">
//                 <h1 className="text-4xl text-black font-bold text-center mb-4 ">
//                   100%
//                 </h1>
//                 <p className="text-md text-gray-950 font-bold text-center">
//                   Customer
//                 </p>
//                 <p className=" text-gray-950 text-center">Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
