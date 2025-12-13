"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import JoinPanelForm from "./JoinPanelForm"; // Separate component

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate mobile menu
  useEffect(() => {
    gsap.to(".mobile-menu", {
      duration: 0.35,
      opacity: mobileMenuOpen ? 1 : 0,
      y: mobileMenuOpen ? 0 : -20,
      pointerEvents: mobileMenuOpen ? "auto" : "none",
      ease: "power3.out",
    });
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
         
             "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-md"
            
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/vjth-logo.png"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shadow-md"
            />
            <div className="leading-tight">
              <h1 className="text-base sm:text-lg font-bold text-blue-900">
                VjTH Market Research
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-500 flex items-center gap-1">
                <img src="/icons/location.png" className="w-3 h-3" />
                Chennai, India
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
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

          {/* Desktop Join Panel */}
          <div className="hidden md:flex">
            <button
              className="px-5 py-2 bg-blue-900 text-white rounded-xl shadow-md hover:bg-blue-800 hover:shadow-xl transition"
              onClick={() => setModalOpen(true)}
            >
              Join Panel
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="mobile-menu md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 px-5 py-4 space-y-2 opacity-0 pointer-events-none shadow-lg">
          {["about", "services", "team", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left text-sm font-medium text-slate-700 hover:text-blue-900 transition py-3 capitalize"
            >
              {item}
            </button>
          ))}
          <button
            className="w-full mt-3 px-5 py-3 bg-blue-900 text-white rounded-xl shadow-md hover:bg-blue-800 transition"
            onClick={() => setModalOpen(true)}
          >
            Join Panel
          </button>
        </div>
      </header>

      {/* Join Panel Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-auto">
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl">
            <button
              className="absolute top-4 right-4 text-slate-700 hover:text-red-500"
              onClick={() => setModalOpen(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Join Our Panel
            </h2>

            {/* Use separate form component */}
            <JoinPanelForm />
          </div>
        </div>
      )}
    </>
  );
}
