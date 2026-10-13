"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ["home", "about", "services", "workflow", "team", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Methodology", id: "workflow" },
    { name: "Leadership", id: "team" },
    { name: "Contact & RFQ", id: "contact" },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D2E0EC] py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-[#D2E0EC]/50 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="w-12 h-12 bg-white rounded-xl p-1 border border-[#D2E0EC] shadow-2xs group-hover:border-[#183B56] transition-all flex items-center justify-center">
              <img
                src="/vjth-logo.png"
                alt="VjTH Market Research Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-black text-[#183B56] tracking-tight leading-none group-hover:text-[#235277] transition-colors">
                VjTH
              </div>
              <div className="text-[10px] text-[#183B56]/80 font-bold uppercase tracking-widest mt-0.5">
                Market Research
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F0F5FA] px-3 py-1.5 rounded-full border border-[#D2E0EC]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#183B56] text-white shadow-xs"
                      : "text-[#183B56] hover:bg-white hover:text-[#183B56]"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Single Form CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-5 py-2.5 bg-[#183B56] hover:bg-[#235277] text-white text-xs font-bold rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Get in Touch / RFQ</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="px-3.5 py-2 bg-[#183B56] text-white text-xs font-bold rounded-xl"
            >
              Contact
            </button>
            <button
              type="button"
              className="p-2.5 rounded-xl text-[#183B56] bg-[#F0F5FA] hover:bg-[#D2E0EC] border border-[#D2E0EC] transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D2E0EC] shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-5 py-5 space-y-2">
            <div className="p-3 rounded-xl bg-[#F0F5FA] border border-[#D2E0EC] text-xs font-bold text-[#183B56] flex items-center gap-2 mb-3">
              <ShieldCheck size={16} className="text-[#183B56]" />
              <span>Field • Insight • Intellect</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left py-3 px-4 rounded-xl text-sm font-bold text-[#183B56] hover:bg-[#F0F5FA] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>{link.name}</span>
                <ArrowRight size={14} className="text-[#183B56]/50" />
              </button>
            ))}

            <div className="pt-3 border-t border-[#D2E0EC]">
              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="w-full py-3.5 bg-[#183B56] text-white text-xs font-bold rounded-xl text-center shadow-md cursor-pointer"
              >
                Request a Research Proposal (RFQ)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
