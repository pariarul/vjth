"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JoinPanelForm from "./JoinPanelForm";
import Link from "next/link";
// Removed invalid import

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed z-50 transition-all duration-500 ease-spring",
          scrolled
            ? "top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full py-2 px-6"
            : "top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-6 md:px-8"
        )}
      >
        <nav className="flex items-center justify-between w-full h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-white/50 group-hover:scale-105 transition-transform">
              <img
                src="/vjth-logo.png"
                alt="Logo"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div className="leading-none hidden sm:block">
              <h1 className="text-base font-bold text-slate-800 tracking-tight">
                VjTH Market Research
              </h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">
                Bangalore, India
              </p>
            </div>
          </div>

          {/* Desktop Menu - Lava Lamp */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2 rounded-full text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop Join Panel */}
          <div className="hidden md:flex items-center pl-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2"
              onClick={() => setModalOpen(true)}
            >
              <span>Join Panel</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 mx-2 p-4 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 md:hidden overflow-hidden flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-center py-3 text-slate-700 font-bold hover:bg-slate-50 rounded-xl transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <button
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg"
                onClick={() => {
                  setModalOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Join Panel
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Join Panel Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-lg p-8 relative shadow-2xl border border-white/20"
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                onClick={() => setModalOpen(false)}
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                Join Our Panel
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide">Fast</span>
              </h2>

              {/* Use separate form component */}
              <JoinPanelForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
