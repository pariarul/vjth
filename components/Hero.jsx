"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo(
        ".hero-image",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-buttons",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        "-=0.6"
      );

    gsap.to(".hero-image", {
      y: -30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".bg-float-1", {
      y: -40,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden">

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-float-1 absolute top-10 left-4 w-60 h-60 md:w-96 md:h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-4 w-52 h-52 md:w-80 md:h-80 bg-slate-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-blue-50/20 rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-center relative z-10">

        {/* Left content */}
        <div className="space-y-6 text-center lg:text-left">
          
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Market Research Excellence
          </h1>

          <p className="hero-subtitle text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
            Field – Insight – Intellect. Transform your business decisions with
            data-driven insights from VjTH Market Research.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Research
            </button>
            <button className="px-8 py-3 bg-white text-blue-900 border-2 border-blue-900 rounded-lg font-semibold hover:bg-slate-50 hover:shadow-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex items-center justify-center">
          <div className="hero-image relative w-full max-w-sm sm:max-w-md perspective">
            <div
              className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src="/office-team-research-working.jpg"
                alt="Market Research Team"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-white/10"></div>
            </div>

            {/* Floating shapes */}
            <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-lg rotate-45 opacity-60 animate-pulse-glow"></div>

            <div
              className="absolute -bottom-3 -left-3 w-20 h-20 sm:w-28 sm:h-28 bg-slate-200 rounded-lg rotate-12 opacity-40 animate-pulse-glow"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Location tag */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200">
              <p className="text-sm sm:text-base font-semibold text-blue-900">
                Chennai • India
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
