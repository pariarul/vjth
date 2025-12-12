"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["info@vjthmr.com", "rfq@vjthmr.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9500033037", "+91 9980677134"],
  },
  {
    icon: MapPin,
    title: "Office Locations",
    details: ["Bangalore – 560091", "Chennai – 600017"],
  },
]

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const cardsRef = useRef([])

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: index === 1 ? 0 : index === 0 ? -60 : 60, y: 40 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
          }
        )
      })

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        }
      )
    }
  }, [inView])

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="contact-header mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 font-light">
            We'd love to hear from you. Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                ref={(el) => el && (cardsRef.current[index] = el)}
                className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 group-hover:from-blue-500/10 group-hover:to-slate-500/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-all duration-300 shadow-lg">
                    <Icon size={28} className="text-blue-900" />
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-4">{info.title}</h3>

                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
<div className="contact-form relative bg-white rounded-3xl shadow-xl p-12 border border-slate-200">
  <h3 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h3>

  <form className="space-y-6">
    {/* Inputs */}
    <div className="grid md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>

    {/* Message Box */}
    <textarea
      rows={5}
      placeholder="Your Message"
      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
    />

    {/* Button */}
    <button
      type="submit"
      className="px-10 py-3 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Send Message
    </button>
  </form>
</div>

      </div>
    </section>
  )
}
