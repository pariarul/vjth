import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white mt-16">
      {/* Background */}
      <div className="absolute inset-0 ">
        <div className="absolute right-0 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-bl from-blue-100/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-purple-100/40 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-center">
        <div className="space-y-6 sm:space-y-10">
          {/* Badge */}
          <span className="inline-block rounded-full bg-blue-900 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg">
                Field – Insight – Intellect
          </span>

       
{/* Heading */}
<h1 className="whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-800">
    Market Research <span className="text-red-600">Excellence</span>
</h1>


          {/* Description */}
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-2xl text-gray-700 font-light leading-relaxed">
            Transform your business decisions with data-driven insights from{" "}
            <span className="font-bold text-gray-900">
              VjTH Market Research
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-8 md:pt-12 mt-18">
            <button className="w-50 md:w-80 sm:w-60  sm:w-auto rounded-full bg-blue-800 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-blue-900">
              Start Research
            </button>

            <button className="w-50 sm:w-60 md:w-60  rounded-full border-2 border-gray-900 bg-white px-8 py-4 text-base sm:text-lg font-bold text-gray-900 shadow-xl transition hover:scale-105 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
