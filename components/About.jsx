"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Globe2, Award, Target, Zap, Building2, MapPin, Users } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "20+ Years Field Excellence",
      icon: Award,
      desc: "Deep domain knowledge across on-the-ground fieldwork, interviewer networks, and multi-tier demographic quotas across India and international markets.",
    },
    {
      title: "Actionable Strategic Focus",
      icon: Target,
      desc: "We turn complex raw field findings into structured, decision-ready market intelligence that supports confident business expansion.",
    },
    {
      title: "Comprehensive Methodology",
      icon: Zap,
      desc: "From initial survey scripting to CATI/CAWI fieldwork, focus groups, and deep qualitative transcriptions, we handle the entire project lifecycle.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white text-[#183B56] border-t border-[#D2E0EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Text (7 Cols) */}
       
<div className="lg:col-span-7 space-y-6">
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F5FA] border border-[#D2E0EC] text-xs font-black uppercase tracking-wider text-[#183B56]">
    <span className="w-2 h-2 rounded-full bg-[#183B56]" />
    <span>Who We Are</span>
  </div>

  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183B56] tracking-tight leading-tight">
    Empowering Decisions with{" "}
    <span className="text-[#235277]">
      Precision Field Data
    </span>
  </h2>

  <p className="text-base sm:text-lg text-[#183B56]/85 font-medium leading-relaxed">
    At <strong className="font-black text-[#183B56]">VjTH Market Research</strong>, we are dedicated to delivering high-quality insights and actionable outcomes for clients across global markets. Headquartered in Bengaluru, our strong ground network across India and international regions enables seamless multi-country research with speed, accuracy, and reliability.
  </p>

  <p className="text-base sm:text-lg text-[#183B56]/85 font-medium leading-relaxed">
    Our clients value our deep industry expertise, rigorous data collection standards, and hands-on project management to guarantee verified, defensible data for board-level decisions.
  </p>

  {/* Checklist */}
  <div className="pt-2 grid sm:grid-cols-2 gap-3.5">
    {[
      "Global Reach with Local Field Expertise",
      "Strict Audio & Geo-Audit Quality Control",
      "Advanced AI-Assisted Telemetry & Sampling",
      "Multi-Country Speed & Delivery Agility",
    ].map((item, idx) => (
      <div key={idx} className="flex items-start gap-2.5 text-sm font-bold text-[#183B56]">
        <CheckCircle2 className="w-5 h-5 text-[#183B56] shrink-0 mt-0.5" />
        <span>{item}</span>
      </div>
    ))}
  </div>
</div>


          {/* Right Real Image Composition (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-[#F0F5FA] border border-[#D2E0EC] p-5 shadow-xl space-y-4">
              
              {/* Image 1: Real Experience Photo */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-[#D2E0EC] group">
                <img
                  src="/experience.jpg"
                  alt="VjTH 20+ Years Field Experience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183B56]/90 via-[#183B56]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-2xl font-black">20+ Years</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Field Leadership & Research Excellence
                  </div>
                </div>
              </div>

              {/* Image 2: Real Online Analytics Photo */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-[#D2E0EC] group">
                <img
                  src="/online-research.jpg"
                  alt="Online Research and Advanced Telemetry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2436]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                  <span>Advanced Digital Scripting & Analytics</span>
                  <span className="bg-[#183B56] px-2.5 py-1 rounded-md text-[10px]">Verified</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#F0F5FA] border border-[#D2E0EC] hover:border-[#183B56] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#183B56] text-white flex items-center justify-center mb-6 shadow-sm">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-xl font-black text-[#183B56] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#183B56]/80 font-medium leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D2E0EC] flex items-center gap-2 text-xs font-black text-[#183B56] text-sm sm:text-xl lg:text-[15px] tracking-wider">
                <span>VjTH Market Research</span>
              </div>
            </div>
          ))}
        </div>

        {/* At a Glance Banner */}
        <div className="rounded-3xl bg-[#183B56] text-white p-5 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-wider mb-2.5 border border-white/20">
              <Building2 size={12} />
              <span>Company Snapshot</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Company at a Glance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Agile research infrastructure backed by seasoned field directors
            </p>
          </div>

          {/* Desktop 4-Column Layout (hidden lg:grid) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 text-center">
            {[
              {
                value: "Market Research",
                label: "Industry Domain",
                sub: "Global Data & Insights",
                icon: Globe2,
              },
              {
                value: "2025",
                label: "Modern Foundation",
                sub: "Innovative Infrastructure",
                icon: Building2,
              },
              {
                value: "28M+",
                label: "Panel Reach",
                sub: "Verified Panelists",
                icon: Users,
              },
              {
                value: "Bengaluru",
                label: "Headquarters",
                sub: "Karnataka 562162, India",
                icon: MapPin,
              },
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 transition-all flex flex-col items-center justify-between text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4">
                    <IconComp size={22} />
                  </div>
                  <div className="text-2xl xl:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Responsive Layout (grid-cols-1 sm:grid-cols-2 lg:hidden) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3 sm:gap-4">
            {[
              {
                value: "Market Research",
                label: "Industry Domain",
                sub: "Global Data & Insights",
                icon: Globe2,
              },
              {
                value: "2025",
                label: "Modern Foundation",
                sub: "Innovative Infrastructure",
                icon: Building2,
              },
              {
                value: "28M+",
                label: "Panel Reach",
                sub: "Verified Panelists",
                icon: Users,
              },
              {
                value: "Bengaluru",
                label: "Headquarters",
                sub: "Karnataka 562162, India",
                icon: MapPin,
              },
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-4 text-left shadow-xs hover:bg-white/15 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                    <IconComp size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg sm:text-xl font-black text-white tracking-tight leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 truncate sm:whitespace-normal">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
