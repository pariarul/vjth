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
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const cardsRef = useRef([])

  useEffect(() => {
    if (inView) {
      gsap.fromTo(".contact-header", { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.8 })
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, delay: index * 0.15, duration: 0.8 }
        )
      })
      gsap.fromTo(".contact-form", { opacity: 0, y: 50 }, { opacity: 1, y: 0, delay: 0.4, duration: 0.9 })
    }
  }, [inView])

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-4 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="contact-header mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Let’s discuss how our research insights can drive your next decision.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 hover:opacity-100 transition" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 shadow">
                    <Icon size={30} className="text-blue-900" />
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {info.title}
                  </h3>

                  <div className="space-y-2 text-slate-600">
                    {info.details.map((d, i) => (
                      <p key={i}>{d}</p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="contact-form relative bg-white rounded-[2rem] shadow-2xl p-14 border border-slate-200 max-w-4xl">
          <h3 className="text-3xl font-bold text-blue-900 mb-10">
            Send us a Message
          </h3>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Your Name"
                className="input-field"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input-field"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Your Message"
              className="input-field resize-none"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-blue-900 px-12 py-4 font-bold text-white shadow-lg hover:bg-blue-800 hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Input Utility */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          transition: all 0.3s ease;
        }
        .input-field:focus {
          outline: none;
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
      `}</style>
    </section>
  )
}
