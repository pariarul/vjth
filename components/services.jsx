"use client"

import { BarChart3, Globe, Users, Heart, Database, Phone } from "lucide-react"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const services = [
  {
    icon: BarChart3,
    image: "/cawi.jpg",
    title: "CAWI Market Research",
    description:
      "Computer-Aided Web Interviewing powered by next-gen digital tools for fast and accurate insights.",
  },
  {
    icon: Globe,
    image: "/online-research.jpg",
    title: "Online Research",
    description:
      "Digital-first data collection aligned with modern consumer trends and emerging global markets.",
  },
  {
    icon: Users,
    image: "/qualitative.jpg",
    title: "Qualitative Research",
    description:
      "In-depth methodologies to explore user needs, motivations, and behavioral insights.",
  },
  {
    icon: Heart,
    image: "/healthcare.jpg ",
    title: "Health Care Research",
    description:
      "Clinically informed healthcare research designed for hospitals, pharma, and policy organizations.",
  },
  {
    icon: Database,
    image: "/panel.jpg",
    title: "Panel Research",
    description:
      "High-precision market insights backed by expert researchers and verified audience panels.",
  },
  {
    icon: Phone,
    image: "/cati.jpg",
    title: "CATI Market Research",
    description:
      "Reliable telephone-based data collection for large-scale B2B and B2C research needs.",
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const cardRefs = useRef([])

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      )

      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
          }
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
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[160px]" />

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
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow">
                    <Icon size={22} className="text-blue-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>
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
