"use client"

import { BarChart3, Globe, Users, Heart, Database, Phone } from "lucide-react"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const services = [
  {
    icon: BarChart3,
    title: "CAWI Market Research",
    description:
      "Computer-Aided Web Interviewing powered by next-gen digital tools for fast and accurate insights.",
  },
  {
    icon: Globe,
    title: "Online Research",
    description:
      "Digital-first data collection aligned with modern consumer trends and emerging global markets.",
  },
  {
    icon: Users,
    title: "Qualitative Research",
    description:
      "In-depth methodologies to explore user needs, motivations, and behavioral insights.",
  },
  {
    icon: Heart,
    title: "Health Care Research",
    description:
      "Clinically informed healthcare research designed for hospitals, pharma, and policy organizations.",
  },
  {
    icon: Database,
    title: "Panel Research",
    description:
      "High-precision market insights backed by expert researchers and verified audience panels.",
  },
  {
    icon: Phone,
    title: "CATI Market Research",
    description:
      "Reliable telephone-based data collection for large-scale B2B and B2C research needs.",
  },
]

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const cardRefs = useRef([])

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      )

      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.12,
            ease: "power3.out",
          },
        )
      })
    }
  }, [inView])

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[160px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <h2 className="services-heading text-5xl md:text-6xl font-extrabold text-blue-900">
          Our Services
        </h2>
        <p className="services-heading text-lg md:text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
          Premium research solutions designed for modern businesses and global organizations.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative p-10 bg-white/70 backdrop-blur-xl rounded-2xl border border-blue-100 
                           shadow-lg group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-slate-500/0 
                                group-hover:from-blue-500/10 group-hover:to-slate-500/5 transition-all duration-500">
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 shadow flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300">
                    <Icon size={30} className="text-blue-900" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
