"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2, BarChart2, Users2, Database } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const practiceAreas = [
    "Healthcare & Life Sciences",
    "Consumer Goods & FMCG",
    "Automotive & Mobility",
    "Technology & SaaS",
    "Banking & FinTech",
    "Retail & E-Commerce",
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#F0F5FA]/80 via-white to-white overflow-hidden"
    >
      {/* Subtle Blueprint Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#183B56 1px, transparent 1px), linear-gradient(90deg, #183B56 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN (Col 7) ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo Motto Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F0F5FA] border border-[#D2E0EC] text-[#183B56] text-xs font-black tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#183B56]" />
              <span>FIELD • INSIGHT • INTELLECT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#183B56] tracking-tight leading-[1.08]">
              Actionable Market Intelligence.
              <br />
              <span className="text-[#235277]">
                Built on Verified Field Data.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#183B56]/80 font-medium leading-relaxed max-w-2xl">
              VJTH Market Research delivers high-precision field data collection, proprietary online panel access, and qualitative & quantitative market insights across India and 40+ global territories.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#183B56] hover:bg-[#235277] text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Request Project Proposal (RFQ)</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-[#F0F5FA] text-[#183B56] border border-[#D2E0EC] text-sm font-bold rounded-full shadow-2xs transition-all"
              >
                <span>Explore Methodologies</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#D2E0EC]">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#183B56]">28M+</div>
                <div className="text-[11px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                  Global Panelists
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#183B56]">40+</div>
                <div className="text-[11px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                  Global Markets
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#183B56]">20+</div>
                <div className="text-[11px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                  Years Heritage
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#183B56]">99.2%</div>
                <div className="text-[11px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                  Field Accuracy
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: REAL IMAGE COMPOSITION (Col 5) ================= */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#F0F5FA] border border-[#D2E0EC] p-6 shadow-xl overflow-hidden group">
              
              {/* Main Photo: Real Market Research Workspace */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-white border border-[#D2E0EC]">
                <img
                  src="/hero-market-research.png"
                  alt="Market Research in Action"
                  className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Real Secondary Floating Badge: Real Analytics Photo */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#D2E0EC] shadow-md flex items-center gap-4">
                <div className="w-16 h-14 rounded-xl overflow-hidden relative shrink-0 border border-[#D2E0EC]">
                  <img
                    src="/hero-insights.jpg"
                    alt="Analytics & Insights"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#183B56]/70">
                    Proprietary Fieldwork & Panels
                  </div>
                  <div className="text-sm font-black text-[#183B56]">
                    Quantitative, Qualitative & Audits
                  </div>
                </div>
              </div>

              {/* Bottom Feature Bar */}
              <div className="mt-3 flex items-center justify-between px-2 text-xs font-bold text-[#183B56]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-[#183B56]" />
                  <span>ESOMAR Aligned Quality</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Globe2 size={16} className="text-[#183B56]" />
                  <span>Pan-India & Global Reach</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Practice Areas Strip */}
        <div className="mt-14 pt-6 border-t border-[#D2E0EC] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs font-black uppercase tracking-widest text-[#183B56] shrink-0">
            Core Industry Sectors:
          </div>
          <div className="flex flex-wrap gap-2">
            {practiceAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#D2E0EC] text-xs font-bold text-[#183B56] shadow-2xs"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
