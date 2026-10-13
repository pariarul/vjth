"use client";

import React from "react";
import { ArrowUp, Linkedin, Facebook, Instagram, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Quantitative Fieldwork (CLT/F2F)", href: "#services" },
    { name: "Qualitative Immersion (FGD/IDI)", href: "#services" },
    { name: "Global Online Panels (28M+)", href: "#services" },
    { name: "Healthcare Specialized Research", href: "#services" },
    { name: "Retail & Mystery Shopping Audits", href: "#services" },
    { name: "Survey Scripting & Logic", href: "#services" },
  ],
  company: [
    { name: "About VjTH", href: "#about" },
    { name: "The Leadership", href: "#team" },
    { name: "Research Methodology", href: "#workflow" },
    { name: "Core Industry Practice", href: "#home" },
    { name: "Request a Proposal (RFQ)", href: "#contact" },
  ],
  governance: [
    { name: "ESOMAR Research Ethics", href: "#" },
    { name: "Participant Privacy & GDPR", href: "#" },
    { name: "Strict Non-Disclosure Standard", href: "#" },
    { name: "Data Security Standards", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/110223105", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/share/1AKnpjLpxA/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/vjthmr/?utm_source=ig_web_button_share_sheet", icon: Instagram },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0E2436] text-slate-300 pt-20 pb-12 border-t border-[#183B56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Mission (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-sm flex items-center justify-center">
                <img
                  src="/vjth-logo.png"
                  alt="VjTH Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-black text-white tracking-tight leading-none">
                  VjTH
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                  Market Research
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              VJTH Market Research provides data-driven market analysis, proprietary global panel reach, and actionable intelligence to help organizations make smarter decisions and achieve sustainable growth.
            </p>

            <div className="text-xs font-black uppercase tracking-widest text-slate-400 pt-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-white" />
              <span>FIELD • INSIGHT • INTELLECT</span>
            </div>
          </div>

          {/* Services Links (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Research Capabilities
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight size={11} className="text-slate-400" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links (Col 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards & Direct HQ (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Quality & Governance
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.governance.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2 text-[11px] text-slate-400">
              <span className="font-bold text-slate-200">Headquarters:</span> Bengaluru, Karnataka 562162, India
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            &copy; {currentYear} VjTH Market Research. All rights reserved.
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white hover:text-[#0E2436] flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label={soc.name}
              >
                <soc.icon size={16} />
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white hover:text-[#0E2436] flex items-center justify-center text-white transition-all cursor-pointer ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
