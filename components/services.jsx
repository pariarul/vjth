"use client";

import React, { useState } from "react";
import { Users, BarChart3, MessageSquare, Store, Code2, Languages, FileText, Laptop, CheckCircle2, ArrowRight } from "lucide-react";

const specializations = [
  {
    id: "online-panels",
    category: "panels",
    image: "/Panel.jpg",
    title: "Global Online Panels",
    badge: "28M+ Panelists",
    description: "Extensive global panel reach with 28M+ double opt-in respondents across 40+ countries. Specialized in Healthcare (physicians, patients), B2B executives, and general consumer communities.",
    features: ["20+ Demographic & industry profilers", "Healthcare & B2B specialist panels", "Multi-layer fraud & bot defense"],
  },
  {
    id: "quantitative",
    category: "quantitative",
    image: "/cawi.jpg",
    title: "Quantitative Fieldwork",
    badge: "CLT, HUT & F2F",
    description: "Robust, audited data collection including Central Location Tests (CLTs), Home Usage Tests (HUTs), Computer-Assisted Personal Interviewing (CAPI), and door-to-door Face-to-Face surveys.",
    features: ["Controlled CLT test facilities", "Audio audit & GPS field verification", "Tier 1-4 Pan-India & global coverage"],
  },
  {
    id: "qualitative",
    category: "qualitative",
    image: "/qualitative.jpg",
    title: "Qualitative Research",
    badge: "FGDs & IDIs",
    description: "In-depth behavioral understanding through Focus Group Discussions (FGDs), In-Depth Interviews (IDIs), ethnographic immersions, and executive stakeholder sessions.",
    features: ["Native language certified moderators", "High-spec viewing & live video feeds", "Thematic coding & verbatim reports"],
  },
  {
    id: "healthcare",
    category: "quantitative",
    image: "/healthcare.jpg",
    title: "Healthcare & Life Sciences",
    badge: "Medical Specialists",
    description: "Specialized research across Key Opinion Leaders (KOLs), practicing physicians, pharmacists, hospital administrators, and patient journey studies.",
    features: ["Verified healthcare practitioner panel", "Strict regulatory & ethical compliance", "Therapeutic area expertise"],
  },
  {
    id: "cati-cawi",
    category: "quantitative",
    image: "/cati.jpg",
    title: "CATI & Telephonic Surveys",
    badge: "CATI / CAWI",
    description: "High-volume telephonic interviews and hybrid web-assisted surveys backed by native-speaking interviewers, live recording, and real-time supervisor monitoring.",
    features: ["Trained tele-research professionals", "100% Digital call recording audits", "Rapid turnaround on large quotas"],
  },
  {
    id: "retail-audits",
    category: "quantitative",
    image: "/hero-analytics.jpg",
    title: "Retail & Mystery Audits",
    badge: "Point of Sale",
    description: "Comprehensive in-store audits including Mystery Shopping, Retail Census, Planogram Display Compliance, and Sales & Inventory movement checks.",
    features: ["Geo-tagged store photo verification", "Mystery shopper evaluation rubrics", "Competitor pricing intelligence"],
  },
  {
    id: "scripting",
    category: "panels",
    image: "/online-research.jpg",
    title: "Survey Scripting & Logic",
    badge: "Advanced Logic",
    description: "Complex questionnaire programming in Confirmit, Decipher, and modern survey platforms with dynamic piping, conjoint analysis, MaxDiff, and media testing.",
    features: ["Mobile-first questionnaire rendering", "Complex branching & quota routing", "Real-time client telemetry dashboard"],
  },
  {
    id: "moderation",
    category: "qualitative",
    image: "/experience.jpg",
    title: "Moderation & Translations",
    badge: "Multi-Lingual",
    description: "Seamless multi-country execution with accredited simultaneous interpreters, native moderators, and high-accuracy forward/backward translations.",
    features: ["20+ Regional and global languages", "Simultaneous translation for clients", "Fast audio transcription turnarounds"],
  },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "quantitative", label: "Quantitative & Fieldwork" },
    { id: "qualitative", label: "Qualitative & Moderation" },
    { id: "panels", label: "Panels & Scripting" },
  ];

  const filteredServices =
    activeFilter === "all"
      ? specializations
      : specializations.filter((s) => s.category === activeFilter);

  return (
    <section id="services" className="py-24 bg-[#F0F5FA]/60 text-[#183B56] border-t border-[#D2E0EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D2E0EC] text-xs font-black uppercase tracking-wider text-[#183B56]">
            <CheckCircle2 size={14} className="text-[#183B56]" />
            <span>Research Methodologies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183B56] tracking-tight leading-tight">
            Capabilities That Drive{" "}
            <span className="text-[#235277]">
              Business Growth
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#183B56]/80 font-medium">
            We leverage advanced methodologies and robust real-world data collection strategies to deliver actionable insights globally.
          </p>

          {/* Filter Tabs */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-[#183B56] text-white shadow-xs"
                    : "bg-white border border-[#D2E0EC] text-[#183B56] hover:bg-[#F0F5FA]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Real-Photo Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((spec) => (
            <div
              key={spec.id}
              className="rounded-3xl bg-white border border-[#D2E0EC] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#183B56] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Real Image Header */}
                <div className="relative h-44 w-full bg-[#183B56] overflow-hidden border-b border-[#D2E0EC]">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#183B56]/90 backdrop-blur-xs text-[10px] font-black uppercase tracking-wider text-white border border-white/20">
                      {spec.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#183B56] mb-2.5">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-[#183B56]/80 font-medium leading-relaxed mb-4">
                    {spec.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-[#D2E0EC]">
                    {spec.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] font-bold text-[#183B56] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#183B56] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Inquire Action */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 bg-[#F0F5FA] hover:bg-[#183B56] text-[#183B56] hover:text-white rounded-xl text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-3xl bg-[#183B56] text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need a Custom Multi-Methodology Research Framework?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              We design integrated quantitative + qualitative proposals tailored to your exact target audience and timeline.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-7 py-3.5 bg-white text-[#183B56] hover:bg-[#F0F5FA] text-xs font-black rounded-full shadow-md transition-all uppercase tracking-wider"
          >
            Request Research Proposal
          </a>
        </div>

      </div>
    </section>
  );
}
