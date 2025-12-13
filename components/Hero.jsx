// import React from "react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden mt-16 bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/cati.jpg')", // update image if needed
//       }}
//     >
//       {/* White Overlay */}
//       <div className="absolute inset-0 bg-white/85" />

//       {/* Decorative Gradients */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute right-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-bl from-blue-100/40 to-transparent blur-3xl" />
//         <div className="absolute bottom-0 left-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-purple-100/40 to-transparent blur-3xl" />
//       </div>

//       {/* Content */}
//       <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-center">
//         <div className="space-y-6 sm:space-y-10">

//           {/* Heading */}
//           <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-800">
//             Market Research{" "}
//             <span className="text-blue-700">Excellence</span>
//           </h1>

//           {/* Sub-line */}
//           <div className="flex items-center justify-center gap-4">
//             <span className="h-[2px] w-10 bg-blue-700" />
//             <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-gray-700 uppercase">
//               Field · Insight · Intellect
//             </p>
//             <span className="h-[2px] w-10 bg-blue-700" />
//           </div>

//           {/* Description */}
//           <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-2xl text-gray-700 font-light leading-relaxed">
//             Transform your business decisions with data-driven insights from{" "}
//             <span className="font-bold text-gray-900">
//               VjTH Market Research
//             </span>.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-10">

//             {/* Contact Us */}
//             <a
//               href="mailto:rfq@vjthmr.com"
//               className="rounded-full bg-blue-800 px-10 py-4 text-base sm:text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-blue-900"
//             >
//               Contact Us
//             </a>

//             {/* Learn More */}
//             <a href="#about">
//               <button className="rounded-full border-2 border-gray-900 bg-white px-10 py-4 text-base sm:text-lg font-bold text-gray-900 shadow-xl transition hover:scale-105 hover:bg-gray-50">
//                 Learn More
//               </button>
//             </a>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import React, { useEffect, useState } from "react";
import { BarChart3, Globe2, Brain } from "lucide-react";

const images = [
  "/hero-research.jpg",
  "/hero-data.webp",
  "/hero-analytics.jpg",
  "/hero-insights.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden mt-16">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Decorative Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-20 text-center">
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900">
            Market Research <span className="text-blue-700">Excellence</span>
          </h1>

          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-blue-700" />
            <p className="text-sm sm:text-base md:text-lg font-semibold tracking-widest text-gray-700 uppercase">
              Field · Insight · Intellect
            </p>
            <span className="h-[2px] w-12 bg-blue-700" />
          </div>

          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-2xl text-gray-700">
            Transform your business decisions with data-driven insights from{" "}
            <span className="font-bold text-gray-900">
              VjTH Market Research
            </span>.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-semibold text-gray-700">
            <span className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 shadow-md">
              <BarChart3 className="h-5 w-5 text-blue-700" />
              Data Accuracy
            </span>

            <span className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 shadow-md">
              <Globe2 className="h-5 w-5 text-blue-700" />
              Global Reach
            </span>

            <span className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-2 shadow-md">
              <Brain className="h-5 w-5 text-blue-700" />
              Strategic Insights
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8">
            <a
              href="mailto:rfq@vjthmr.com"
              className="rounded-full bg-blue-800 px-12 py-4 text-base sm:text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-blue-900"
            >
              Contact Us
            </a>

            <a href="#about">
              <button className="rounded-full border-2 border-gray-900 bg-white px-12 py-4 text-base sm:text-lg font-bold text-gray-900 shadow-xl transition hover:scale-105 hover:bg-gray-50">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
