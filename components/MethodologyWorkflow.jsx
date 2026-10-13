"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown,
  ChevronRight, 
  ChevronLeft,
  Compass, 
  Code2, 
  Radio, 
  BarChart3
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    phase: "Design Phase",
    title: "Discovery & Sample Framing",
    shortName: "Discovery",
    icon: Compass,
    desc: "We align on your strategic hypotheses, define target respondent profiles, engineer quotas across regions, and architect the optimal quantitative/qualitative methodology.",
    bullets: [
      "Hypothesis structuring",
      "Incidence rate feasibility",
      "Multi-country quota mapping"
    ],
  },
  {
    step: "02",
    phase: "Engineering Phase",
    title: "Scripting & Anti-Fraud Defense",
    shortName: "Scripting",
    icon: Code2,
    desc: "Rigorous questionnaire programming with logic checks, device fingerprinting, honeypot questions, and back-translated cultural adaptation.",
    bullets: [
      "Confirmit / Decipher scripting",
      "Digital fingerprint screening",
      "Linguistic adaptation"
    ],
  },
  {
    step: "03",
    phase: "Execution Phase",
    title: "Precision Multi-Channel Fieldwork",
    shortName: "Fieldwork",
    icon: Radio,
    desc: "Simultaneous field dispatch across CLTs, native face-to-face field agents, and 28M+ panel invitations with live dashboard telemetry and quota tracking.",
    bullets: [
      "Real-time quota monitoring",
      "GPS & audio field audit checks",
      "Native bilingual moderators"
    ],
  },
  {
    step: "04",
    phase: "Intelligence Phase",
    title: "Data Scrubbing & Executive Synthesis",
    shortName: "Synthesis",
    icon: BarChart3,
    desc: "Data cleaning, open-end coding, cross-tabulation tables, statistical weighting, and concise executive summary decks ready for C-suite decision making.",
    bullets: [
      "SPSS / CSV / PowerBI outputs",
      "Statistical significance testing",
      "Boardroom strategic decks"
    ],
  },
];

export default function MethodologyWorkflow() {
  const [mobileMode, setMobileMode] = useState("timeline");
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section id="workflow" className="py-20 sm:py-24 bg-[#183B56] text-white border-t border-[#D2E0EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-wider border border-white/20">
            <Cpu size={14} className="text-white" />
            <span>Operational Rigor</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            The VjTH 4-Stage Research{" "}
            <span className="text-slate-300">
              Execution Lifecycle
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            From initial research design to actionable executive deliverables, every stage is audited for statistical integrity, compliance, and speed.
          </p>

          {/* Mobile View Toggle */}
          <div className="flex md:hidden items-center justify-center pt-2">
            <div className="inline-flex p-1 rounded-xl bg-white/10 border border-white/20">
              <button
                type="button"
                onClick={() => setMobileMode("timeline")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  mobileMode === "timeline"
                    ? "bg-white text-[#183B56] shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                📍 Connected Pipeline
              </button>
              <button
                type="button"
                onClick={() => setMobileMode("cards")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  mobileMode === "cards"
                    ? "bg-white text-[#183B56] shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                💳 Swipeable Cards
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/* MOBILE RESPONSE DESIGN (block md:hidden)                      */}
        {/* ============================================================= */}
        <div className="block md:hidden">

          {/* TYPE A: CONNECTED VERTICAL PIPELINE TIMELINE */}
          {mobileMode === "timeline" && (
            <div className="relative space-y-6">
              
              {/* Vertical timeline spine */}
              <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-white via-white/50 to-emerald-400" />

              {workflowSteps.map((item, idx) => {
                const IconComponent = item.icon;
                const isLast = idx === workflowSteps.length - 1;

                return (
                  <div key={item.step} className="relative z-10 space-y-3">
                    
                    {/* Stage Header with connected node */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white text-[#183B56] border-2 border-white shadow-lg flex items-center justify-center font-black text-sm shrink-0">
                        {item.step}
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-wider text-slate-200 border border-white/20">
                          {item.phase}
                        </span>
                        <span className="text-[11px] font-bold text-slate-300">
                          Stage {idx + 1} of 4
                        </span>
                      </div>
                    </div>

                    {/* Stage Card Body */}
                    <div className="ml-5 pl-8 border-l-2 border-transparent">
                      <div className="rounded-2xl bg-white/10 border border-white/20 p-5 shadow-lg space-y-3.5 backdrop-blur-xs">
                        
                        {/* Title & Icon */}
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-base font-black text-white leading-snug">
                            {item.title}
                          </h3>
                          <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-slate-200 shrink-0">
                            <IconComponent size={16} />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-200 font-medium leading-relaxed">
                          {item.desc}
                        </p>

                        {/* Deliverables */}
                        <div className="pt-3 border-t border-white/15 space-y-2">
                          <div className="text-[10px] font-black uppercase tracking-wider text-slate-300">
                            Key Deliverables & Verification:
                          </div>
                          <div className="space-y-1.5">
                            {item.bullets.map((bullet, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white"
                              >
                                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Handover link between stages */}
                      {!isLast && (
                        <div className="py-2 flex items-center gap-2 text-[10px] font-bold text-slate-300">
                          <ArrowDown size={12} className="text-emerald-400 animate-bounce" />
                          <span>Quality Handover to Stage {idx + 2}</span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}

            </div>
          )}

          {/* TYPE B: HORIZONTAL SWIPEABLE CARDS */}
          {mobileMode === "cards" && (
            <div className="space-y-4">
              
              {/* Stepper Navigation Indicator */}
              <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-300">
                <span>Stage {activeCardIndex + 1} of {workflowSteps.length}</span>
                <div className="flex items-center gap-1.5">
                  {workflowSteps.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveCardIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeCardIndex === dotIdx ? "w-6 bg-white" : "w-2 bg-white/30"
                      }`}
                      aria-label={`Go to stage ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Active Card Container */}
              {(() => {
                const current = workflowSteps[activeCardIndex];
                const IconComponent = current.icon;

                return (
                  <div className="rounded-3xl bg-white/10 border border-white/20 p-6 shadow-xl space-y-4 relative overflow-hidden">
                    
                    {/* Top Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/15">
                      <div className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-xl bg-white text-[#183B56] flex items-center justify-center font-black text-sm shadow-md">
                          {current.step}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/15 text-[10px] font-black uppercase tracking-wider text-slate-200 border border-white/10">
                          {current.phase}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-slate-200">
                        <IconComponent size={16} />
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <div>
                      <h3 className="text-lg font-black text-white leading-snug">
                        {current.title}
                      </h3>
                      <p className="text-xs text-slate-200 font-medium leading-relaxed mt-2.5">
                        {current.desc}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="pt-3 border-t border-white/15 space-y-2">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-300">
                        Stage Deliverables & Verification:
                      </div>
                      <div className="space-y-1.5">
                        {current.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white"
                          >
                            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Next / Previous Buttons */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        disabled={activeCardIndex === 0}
                        onClick={() => setActiveCardIndex((prev) => prev - 1)}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                          activeCardIndex === 0
                            ? "opacity-30 cursor-not-allowed bg-white/5"
                            : "bg-white/15 hover:bg-white/25 text-white cursor-pointer"
                        }`}
                      >
                        <ChevronLeft size={14} /> Previous
                      </button>

                      <button
                        type="button"
                        disabled={activeCardIndex === workflowSteps.length - 1}
                        onClick={() => setActiveCardIndex((prev) => prev + 1)}
                        className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                          activeCardIndex === workflowSteps.length - 1
                            ? "opacity-30 cursor-not-allowed bg-white/5"
                            : "bg-white text-[#183B56] hover:bg-slate-100 cursor-pointer shadow-md"
                        }`}
                      >
                        Next <ChevronRight size={14} />
                      </button>
                    </div>

                  </div>
                );
              })()}

            </div>
          )}

        </div>

        {/* ============================================================= */}
        {/* DESKTOP / TABLET 4-COLUMN CARDS GRID (hidden md:grid)         */}
        {/* ============================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white/10 border border-white/15 p-7 hover:bg-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-3xl font-black text-white">
                      {item.step}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-slate-200 border border-white/20">
                        {item.phase}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                        <IconComponent size={14} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-medium leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-white/15 space-y-2">
                  {item.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-[11px] font-bold text-slate-200">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= QUALITY AUDIT & FEASIBILITY BAR ================= */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                100% Data Traceability & Audit Verification
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Every interview, survey completion, and qualitative quote is geo-verified and backed by digital proof.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto shrink-0 px-6 py-3 bg-white text-[#183B56] hover:bg-slate-100 text-xs font-black rounded-xl shadow-md transition-colors uppercase tracking-wider text-center cursor-pointer"
          >
            Request Fieldwork Feasibility
          </a>
        </div>

      </div>
    </section>
  );
}
