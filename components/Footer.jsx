"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "footer",
          start: "top center",
          once: true,
        },
      }
    )
  }, [])

  return (
    <footer className="bg-blue-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="footer-content grid md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo / Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white text-blue-900 font-bold rounded-xl flex items-center justify-center shadow">
                       <img
            src="/vjth-logo.png"
            alt="Company Logo"
            className="w-12 h-12 rounded-xl object-cover shadow-md"
          />
              </div>
              <h3 className="text-xl font-bold">VjTH Market Research</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for market research and strategic insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Home", "About", "Services", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white transition-all duration-300 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>info@vjthmr.com</li>
              <li>rfq@vjthmr.com</li>
              <li>+91 9500033037</li>
              <li>+91 9980677134</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Locations</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Bangalore – 560091</li>
              <li>Chennai – 600017</li>
              <li className="pt-2 font-semibold text-white">Field – Insight – Intellect!</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/60">
            © {currentYear} VjTH Market Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
