"use client";

import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Twitter, Facebook, Instagram, ArrowRight, Send } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#" },
    { name: "Careers", href: "#contact" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Compliance", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact Support", href: "#contact" },
    { name: "Sitemap", href: "#" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 text-slate-600 pt-24 pb-12 overflow-hidden border-t border-slate-200">
      {/* Massive Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden select-none flex items-center justify-center">
        <h1 className="text-[20vw] font-black text-slate-900/[0.03] tracking-tighter leading-none">
          VjTH
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-8 mb-20">

          {/* Brand & Newsletter */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-1 shadow-md border border-slate-100">
                <Image src="/vjth-logo.png" alt="Logo" width={56} height={56} className="object-cover rounded-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">VjTH Market<br />Research</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Stay Updated</h4>
              <p className="text-xs text-slate-500 mb-4">Get the latest market insights delivered.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="w-full bg-slate-50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-slate-200" />
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <div key={title} className="lg:pl-8">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full" /> {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <ArrowRight size={12} className="text-blue-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <a href={link.href} className="hover:text-blue-600 transition-colors text-sm font-medium group flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex gap-4">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 shadow-sm border border-slate-100 hover:border-blue-200 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <p>&copy; {currentYear} VjTH Market Research. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
