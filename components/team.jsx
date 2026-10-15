"use client";

import React from "react";
import { Linkedin, ArrowUpRight, Award, ShieldCheck, Quote, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Govindaiah M T",
    role: "Co-Founder & Director - Client Services",
    image: "/Govindaiah.jpeg",
    experience: "20+ Years Domain Leadership",
    focus: ["Client Advisory", "Multi-Market Fieldwork", "Strategic Accounts"],
    bio: "Ensuring client success through dedicated service, hands-on project advocacy, and multi-market research delivery across domestic and global enterprises.",
    linkedin: "https://www.linkedin.com/in/govindaiah-m-t",
  },
  {
    name: "Kavitha R",
    role: "Associate Director - Project Management",
    image: "/Kavitha.jpeg",
    experience: "15+ Years Operational Rigor",
    focus: ["Field Operations", "QC Audits & Governance", "Project Coordination"],
    bio: "Expert project delivery, operational excellence, rigorous data quality audits, and seamless coordination of large-scale quantitative and qualitative fieldwork.",
    linkedin: "https://www.linkedin.com/in/kavitha-r-58408439a",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white text-[#183B56] border-t border-[#D2E0EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F5FA] border border-[#D2E0EC] text-xs font-black uppercase tracking-wider text-[#183B56]">
              <Award size={14} className="text-[#183B56]" />
              <span>The Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183B56] tracking-tight leading-tight">
              Architects of Your{" "}
              <span className="text-[#235277]">
                Business Growth
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#183B56]/80 font-medium max-w-2xl">
              VjTH is steered by seasoned research directors with decades of cumulative expertise in global fieldwork, client advocacy, and operational precision.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
            <div className="p-4 px-6 rounded-2xl bg-[#F0F5FA] border border-[#D2E0EC] text-right min-w-[150px]">
              <div className="text-3xl font-black text-[#183B56]">02</div>
              <div className="text-xs font-bold text-[#183B56]/70 uppercase tracking-widest mt-0.5">
                Executive Directors
              </div>
            </div>
          </div>
        </div>

        {/* Executive Cards Grid - Clear Portrait Photo Display */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#F0F5FA] border border-[#D2E0EC] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#183B56] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 100% CLEAR PORTRAIT CONTAINER - No Dark Overlays, Natural Aspect Ratio */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-[#D2E0EC] shadow-sm mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  {/* Clean verified badge in top right */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-black uppercase tracking-wider text-[#183B56] border border-[#D2E0EC] shadow-xs flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#183B56]" />
                      <span>Verified Director</span>
                    </span>
                  </div>
                </div>

                {/* Director Information - Cleanly Below The Photo */}
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#235277]">
                      {member.experience}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#183B56] tracking-tight mt-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold text-[#183B56]/80 mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Focus Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.focus.map((item, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-lg bg-white border border-[#D2E0EC] text-[11px] font-bold text-[#183B56]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-[#183B56]/85 font-medium leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Connect Bar */}
              <div className="pt-6 mt-6 border-t border-[#D2E0EC] flex items-center justify-between">
                <span className="text-xs font-bold text-[#183B56]/70 uppercase tracking-wider">
                  Professional Profile
                </span>

                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#183B56] text-white hover:bg-[#235277] text-xs font-bold transition-all shadow-xs"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <Linkedin size={15} />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Ethos Quote */}
        <div className="rounded-3xl bg-[#183B56] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-white/10 text-white shrink-0">
                <Quote size={24} />
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold text-slate-100 leading-relaxed italic">
                  “We focus on long-term value creation by transforming complex multi-source field data into clear, actionable business strategies.”
                </p>
            
<div className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-300">
  — VjTH Market Research
</div>

              </div>
            </div>

            <a
              href="#contact"
              className="shrink-0 px-7 py-3 bg-white text-[#183B56] hover:bg-slate-100 text-xs font-black rounded-full shadow-md transition-all uppercase tracking-wider"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
