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
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#F0F5FA]/80 via-white to-white overflow-hidden"
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
        
        {/* ========================================================== */}
        {/* 1. MOBILE-ONLY VIEW (block lg:hidden) - PUNCHY & COMPACT  */}
        {/* ========================================================== */}
        <div className="block lg:hidden space-y-5">
          
          {/* Motto Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B56] text-white shadow-sm border border-[#0E2436]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">
              FIELD • INSIGHT • INTELLECT
            </span>
          </div>

          {/* Mobile Headline */}
          <h1 className="text-3xl sm:text-4xl font-black text-[#183B56] tracking-tight leading-[1.12]">
            Market Research
            <br />
            <span className="text-[#235277]">
              Excellence.
            </span>
          </h1>

          {/* Mobile Description */}
          <p className="text-xs sm:text-sm text-[#183B56]/80 font-medium leading-relaxed">
            VJTH Market Research delivers high-precision field data, proprietary online panel access (28M+), and qualitative insights across India and 40+ countries.
          </p>

          {/* Mobile Compact Visual Card */}
          <div className="rounded-2xl bg-[#F0F5FA] border border-[#D2E0EC] overflow-hidden shadow-sm">
            <div className="h-44 w-full bg-white flex items-center justify-center p-3 relative">
              <img
                src="/hero-market-research.png"
                alt="Market Research"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-3 bg-white border-t border-[#D2E0EC] flex items-center justify-between text-[11px] font-bold text-[#183B56]">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-[#183B56]" />
                ESOMAR Aligned
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe2 size={13} className="text-[#183B56]" />
                40+ Countries
              </span>
              <span>•</span>
              <span className="text-emerald-700">99.2% Verified</span>
            </div>
          </div>

          {/* Mobile Primary Actions */}
          <div className="space-y-2.5 pt-1">
            <a
              href="#contact"
              className="w-full py-3.5 px-6 bg-[#183B56] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 text-center"
            >
              <span>Request Project Proposal (RFQ)</span>
              <ArrowRight size={14} />
            </a>

            <a
              href="#services"
              className="w-full py-3 px-6 bg-white border border-[#D2E0EC] text-[#183B56] text-xs font-bold rounded-xl text-center block"
            >
              Explore Capabilities & Methodologies
            </a>
          </div>

          {/* Mobile 4-Metric Compact Grid Card */}
          <div className="grid grid-cols-2 gap-2 p-3.5 rounded-2xl bg-[#F0F5FA] border border-[#D2E0EC] text-center">
            <div className="p-2.5 bg-white rounded-xl border border-[#D2E0EC]/60 shadow-2xs">
              <div className="text-xl font-black text-[#183B56]">28M+</div>
              <div className="text-[10px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                Global Panelists
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-xl border border-[#D2E0EC]/60 shadow-2xs">
              <div className="text-xl font-black text-[#183B56]">40+</div>
              <div className="text-[10px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                Global Markets
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-xl border border-[#D2E0EC]/60 shadow-2xs">
              <div className="text-xl font-black text-[#183B56]">20+</div>
              <div className="text-[10px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                Years Heritage
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-xl border border-[#D2E0EC]/60 shadow-2xs">
              <div className="text-xl font-black text-[#183B56]">99.2%</div>
              <div className="text-[10px] font-bold text-[#183B56]/70 uppercase tracking-wider mt-0.5">
                Field Accuracy
              </div>
            </div>
          </div>

          {/* Mobile Practice Areas (Horizontal Snap Scroll) */}
          <div className="pt-2">
            <div className="text-[10px] font-black uppercase tracking-wider text-[#183B56] mb-2">
              Industry Practice Domains:
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4">
              {practiceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white border border-[#D2E0EC] text-[11px] font-bold text-[#183B56] shadow-2xs shrink-0 whitespace-nowrap"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================== */}
        {/* 2. DESKTOP / LAPTOP VIEW (hidden lg:grid) - PRESERVED OKAY */}
        {/* ========================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN (Col 7) ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Motto Badge */}
            <div className="inline-flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#183B56] rounded-full hidden sm:block" />
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#183B56] text-white shadow-md border border-[#0E2436] hover:bg-[#235277] transition-all">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-black tracking-[0.25em] uppercase text-white">
                  FIELD • INSIGHT • INTELLECT
                </span>
              </div>
              <span className="h-0.5 w-8 bg-[#183B56] rounded-full hidden sm:block" />
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#183B56] tracking-tight leading-[1.08]">
              Market Research
              <br />
              <span className="text-[#235277]">
                Excellence.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#183B56]/80 font-medium leading-relaxed max-w-2xl">
              VJTH Market Research delivers high-precision field data collection, proprietary online panel access, and qualitative & quantitative market insights across India and 40+ global territories.
            </p>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-4 pt-2">
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
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-[#D2E0EC]">
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

        {/* Practice Areas Strip (Desktop Only) */}
        <div className="hidden lg:flex mt-14 pt-6 border-t border-[#D2E0EC] flex-row items-center justify-between gap-4">
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
