"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".about-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      )

      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.15, ease: "power4.out" },
      )

      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.25,
          ease: "power3.out",
        },
      )
    }
  }, [inView])

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-20 w-[28rem] h-[28rem] bg-slate-200/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* MAIN HEADING */}
        <h2 className="about-heading text-5xl md:text-6xl font-extrabold text-blue-900">
          About Our Company
        </h2>

        {/* SUB TITLE */}
        <p className="about-text text-lg md:text-xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed">
          VjTH Market Research brings over 25+ years of combined team experience,
          helping brands grow through reliable market intelligence, strategic insights,
          and future-ready business solutions.
        </p>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Card 1 */}
          <div className="feature-card bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-100 shadow-lg 
                          hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center mb-5">
              <img src="/icons/experience.png" className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">25+ Years Experience</h3>
            <p className="text-slate-700 leading-relaxed">
              Our team delivers deep domain knowledge across global markets, 
              empowering businesses with precise insights and practical strategies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="feature-card bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-100 shadow-lg 
                          hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center mb-5">
              <img src="/icons/mission.png" className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              Our focus is on turning raw data into meaningful insights, enabling 
              companies to make confident decisions backed by strong research.
            </p>
          </div>

          {/* Card 3 */}
          <div className="feature-card bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-100 shadow-lg 
                          hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center mb-5">
              <img src="/icons/solution.png" className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">What We Deliver</h3>
            <p className="text-slate-700 leading-relaxed">
              From market opportunity analysis to competitor mapping, we offer 
              end-to-end research solutions tailored to your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
