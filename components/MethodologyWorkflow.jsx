"use client";

import React from "react";
import { Cpu, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Sample Framing",
    tag: "Design Phase",
    desc: "We align on your strategic hypotheses, define target respondent profiles, engineer quotas across regions, and architect the optimal quantitative/qualitative methodology.",
    bullets: ["Hypothesis structuring", "Incidence rate feasibility", "Multi-country quota mapping"],
  },
  {
    step: "02",
    title: "Scripting & Anti-Fraud Defense",
    tag: "Engineering Phase",
    desc: "Rigorous questionnaire programming with logic checks, device fingerprinting, honeypot questions, and back-translated cultural adaptation.",
    bullets: ["Confirmit / Decipher scripting", "Digital fingerprint screening", "Linguistic adaptation"],
  },
  {
    step: "03",
    title: "Precision Multi-Channel Fieldwork",
    tag: "Execution Phase",
    desc: "Simultaneous field dispatch across CLTs, native face-to-face field agents, and 28M+ panel invitations with live dashboard telemetry and quota tracking.",
    bullets: ["Real-time quota monitoring", "GPS & audio field audit checks", "Native bilingual moderators"],
  },
  {
    step: "04",
    title: "Data Scrubbing & Executive Synthesis",
    tag: "Intelligence Phase",
    desc: "Data cleaning, open-end coding, cross-tabulation tables, statistical weighting, and concise executive summary decks ready for C-suite decision making.",
    bullets: ["SPSS / CSV / PowerBI outputs", "Statistical significance testing", "Boardroom strategic decks"],
  },
];

export default function MethodologyWorkflow() {
  return (
    <section id="workflow" className="py-24 bg-[#183B56] text-white border-t border-[#D2E0EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-black uppercase tracking-wider border border-white/20">
            <Cpu size={14} className="text-white" />
            <span>Operational Rigor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            The VjTH 4-Stage Research{" "}
            <span className="text-slate-300">
              Execution Lifecycle
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            From initial research design to actionable executive deliverables, every stage is audited for statistical integrity, compliance, and speed.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white/10 border border-white/15 p-7 hover:bg-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-3xl font-black text-white">
                    {item.step}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-slate-200 border border-white/20">
                    {item.tag}
                  </span>
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
                    <CheckCircle2 size={13} className="text-slate-300 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Audit Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-white/10 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                100% Data Traceability & Audit Verification
              </h4>
              <p className="text-xs text-slate-300">
                Every interview, survey completion, and qualitative quote is geo-verified and backed by digital proof.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-2.5 bg-white text-[#183B56] hover:bg-slate-100 text-xs font-black rounded-xl shadow-md transition-colors uppercase tracking-wider"
          >
            Request Fieldwork Feasibility
          </a>
        </div>

      </div>
    </section>
  );
}
