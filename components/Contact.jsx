"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-slate-50 overflow-hidden text-slate-900">
      {/* Light Theme Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase mb-6 shadow-sm">
            <MessageSquare size={16} /> Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Excellence</span>
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto font-medium">
            Ready to elevate your market strategy? Our team is standing by to provide the insights you need.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards - Light Clean Design */}
          <div className="lg:col-span-1 space-y-4">
            {[
              { icon: Mail, title: "Email Us", txt: "info@vjthmr.com", sub: "Response within 24h" },
              { icon: Phone, title: "Call Us", txt: "+91 9500033037", sub: "Mon-Fri, 9am-6pm" },
              { icon: MapPin, title: "Visit HQ", txt: "Bangalore, India", sub: "560091" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-600 font-medium">{item.txt}</p>
                  <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Form - Light Clean Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
          >
            <form className="relative space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all font-medium" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all font-medium" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all font-medium resize-none" placeholder="Tell us about your project..." />
              </div>

              <div className="flex justify-end">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 hover:scale-105 active:scale-95">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
