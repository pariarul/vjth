"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import gsap from "gsap"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    gsap.to(".mobile-menu", {
      duration: 0.3,
      opacity: mobileMenuOpen ? 1 : 0,
      y: mobileMenuOpen ? 0 : -10,
      pointerEvents: mobileMenuOpen ? "auto" : "none",
    })
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT — Logo + Company Name + Location */}
        <div className="flex items-center gap-3">
          <img
            src="/vjth-logo.png"
            alt="Company Logo"
            className="w-12 h-12 rounded-xl object-cover shadow-md"
          />

          <div>
            <h1 className="text-lg font-bold text-blue-900">VjTH Market Research</h1>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <img src="/icons/location.png" className="w-3 h-3" />
              Chennai, India
            </p>
          </div>
        </div>

        {/* CENTER — Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {["about", "services", "team", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-slate-700 capitalize hover:text-blue-900 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-900 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </button>
          ))}
        </div>

        {/* RIGHT — Join Panel Button */}
        <div className="hidden md:flex">
          <button className="px-5 py-2 bg-blue-900 text-white rounded-xl shadow-md hover:bg-blue-800 hover:shadow-xl transition">
            Join Panel
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className="mobile-menu md:hidden bg-white border-b border-slate-200 p-4 space-y-3 opacity-0 pointer-events-none">
        {["about", "services", "team", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="block w-full text-left text-sm font-medium text-slate-700 hover:text-blue-900 transition py-2 capitalize"
          >
            {item}
          </button>
        ))}

        {/* Mobile Join Panel Button */}
        <button className="w-full mt-2 px-5 py-3 bg-blue-900 text-white rounded-xl shadow-md hover:bg-blue-800 transition">
          Join Panel
        </button>
      </div>
    </header>
  )
}
