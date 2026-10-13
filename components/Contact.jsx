"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    inquiryType: "Request Research Proposal (RFQ)",
    name: "",
    email: "",
    phone: "",
    organization: "",
    methodology: "Quantitative Fieldwork (CLT/F2F)",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rfq@vjthmr.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F0F5FA]/80 text-[#183B56] border-t border-[#D2E0EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D2E0EC] text-xs font-black uppercase tracking-wider text-[#183B56]">
            <Mail size={14} className="text-[#183B56]" />
            <span>Connect & Request Proposals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183B56] tracking-tight leading-tight">
            Partner with Our Field{" "}
            <span className="text-[#235277]">
              Intelligence Team
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#183B56]/80 font-medium">
            Whether you need rapid sample feasibility, full-service fieldwork execution, or want to join our global research panel, submit your inquiry below.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details + Single Unified Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Headquarters & Contact Card */}
            <div className="p-7 rounded-3xl bg-[#183B56] text-white shadow-xl space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Global Coordination Center
                </div>
                <h3 className="text-xl font-black text-white mt-1">
                  VjTH Market Research HQ
                </h3>
              </div>

              {/* Email */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-white mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                      Email Inquiries
                    </div>
                    <a
                      href="mailto:rfq@vjthmr.com"
                      className="text-sm font-bold text-white hover:text-slate-200 transition-colors"
                    >
                      rfq@vjthmr.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="p-2 rounded-xl bg-white/10 text-white mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Direct Phone Line
                  </div>
                  <a
                    href="tel:+919500033037"
                    className="text-sm font-bold text-white hover:text-slate-200 transition-colors"
                  >
                    +91 9500033037
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="p-2 rounded-xl bg-white/10 text-white mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Office Location
                  </div>
                  <p className="text-xs font-medium text-slate-200 leading-relaxed mt-1">
                    Ground Floor, No.4, 1st Main, Lakshmipura Rd, near Ganesha Temple, Rajeshwari Nagar, Bengaluru, Karnataka 562162, India
                  </p>
                </div>
              </div>

              {/* Security & Confidentiality */}
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-slate-300">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>Strict Non-Disclosure (NDA) & ESOMAR standards</span>
              </div>
            </div>

          </div>

          {/* Right Side: The Single Unified Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#D2E0EC] shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F0F5FA] text-[#183B56] mx-auto flex items-center justify-center border border-[#D2E0EC]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-[#183B56]">
                    Thank You! Inquiry Received.
                  </h3>
                  <p className="text-sm text-[#183B56]/80 font-medium max-w-md mx-auto">
                    A VjTH Project Director will review your specifications and contact you shortly at <strong className="text-[#183B56] font-bold">{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#183B56] text-white text-xs font-bold rounded-full hover:bg-[#235277] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-bold text-[#183B56] uppercase tracking-wider mb-1.5">
                      How Can We Help You? *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F0F5FA] border border-[#D2E0EC] rounded-xl text-xs font-bold text-[#183B56] focus:outline-none focus:border-[#183B56] cursor-pointer"
                    >
                      <option value="Request Research Proposal (RFQ)">Request Research Project Proposal (RFQ)</option>
                      <option value="Join Research Panel">Join VjTH Research Panel (Participant)</option>
                      <option value="Sample Feasibility & Quota Check">Sample Feasibility & Quota Check</option>
                      <option value="General Business Partnership">General Partnership & Vendor Inquiry</option>
                    </select>
                  </div>

                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#183B56] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 bg-[#F0F5FA] border border-[#D2E0EC] rounded-xl text-xs font-medium text-[#183B56] placeholder:text-[#183B56]/40 focus:outline-none focus:border-[#183B56]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#183B56] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-3 bg-[#F0F5FA] border border-[#D2E0EC] rounded-xl text-xs font-medium text-[#183B56] placeholder:text-[#183B56]/40 focus:outline-none focus:border-[#183B56]"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#183B56] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 bg-[#F0F5FA] border border-[#D2E0EC] rounded-xl text-xs font-medium text-[#183B56] placeholder:text-[#183B56]/40 focus:outline-none focus:border-[#183B56]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#183B56] uppercase tracking-wider mb-1.5">
                        Organization / City
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Acme Insights / Mumbai"
                        className="w-full px-4 py-3 bg-[#F0F5FA] border border-[#D2E0EC] rounded-xl text-xs font-medium text-[#183B56] placeholder:text-[#183B56]/40 focus:outline-none focus:border-[#183B56]"
                      />
                    </div>
                  </div>

                  {/* Primary Methodology */}
                  <div>
                    <label className="block text-xs font-bold text-[#183B56] uppercase tracking-wider mb-1.5">
                      Methodology Interest
                    </label>
                    <select
                      value={formData.methodology}
                      onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F0F5FA] border border-[#D2E0EC] rounded-xl text-xs font-bold text-[#183B56] focus:outline-none focus:border-[#183B56] cursor-pointer"
                    >
                      <option value="Quantitative Fieldwork (CLT/F2F)">Quantitative Fieldwork (CLT, HUT, F2F)</option>
                      <option value="Qualitative Immersion (FGD/IDI)">Qualitative Immersion (FGDs, IDIs, Ethnography)</option>
                      <option value="Global Online Panels (28M+)">Global Online Panels (28M+ Respondents)</option>
                      <option value="Healthcare Specialized Research">Healthcare & Medical Practitioner Research</option>
                      <option value="Retail & Mystery Shopping Audits">Retail & Mystery Shopping Audits</option>
                      <option value="Survey Scripting & Logic Programming">Survey Scripting & CAWI Programming</option>
                      <option value="Panelist Registration">Participant / Panelist Sign-up</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#183B56] uppercase tracking-wider mb-1.5">
                      Project Specifications or Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share target sample size (N), target geographies, screening criteria, or timeline..."
                      className="w-full px-4 py-3 bg-[#F0F5FA] border border-[#D2E0EC] rounded-xl text-xs font-medium text-[#183B56] placeholder:text-[#183B56]/40 focus:outline-none focus:border-[#183B56] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[#183B56]/60 font-medium text-center sm:text-left">
                      We respond to all verified project RFQs within 4 business hours.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#183B56] hover:bg-[#235277] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <Send size={14} />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
