"use client";

import { motion } from "framer-motion";
import { User, Calendar, Mail, Phone, MapPin, Globe, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";

export default function JoinPanelForm() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.form
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-5 h-[60vh] overflow-y-auto pr-2 custom-scrollbar"
    >
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* Personal Details Group */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <User size={14} /> Personal Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={item} className="col-span-2 md:col-span-1">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
            </div>
          </motion.div>

          <motion.div variants={item} className="col-span-2 md:col-span-1">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="number" placeholder="Age" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
            </div>
          </motion.div>

          <motion.div variants={item} className="col-span-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold uppercase">DOB</span>
              <input type="date" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700" required />
            </div>
          </motion.div>

          <motion.div variants={item} className="col-span-2 md:col-span-1">
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700" required>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100" />

      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <Mail size={14} /> Contact Info
        </h3>
        <motion.div variants={item}>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="tel" placeholder="Mobile Number" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
          </div>
        </motion.div>
      </div>

      <div className="w-full h-px bg-slate-100" />

      {/* Location */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <MapPin size={14} /> Location
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={item} className="col-span-2">
            <input type="text" placeholder="Address / Street" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
          </motion.div>
          <motion.div variants={item}>
            <input type="text" placeholder="City" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
          </motion.div>
          <motion.div variants={item}>
            <input type="text" placeholder="Zip Code" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
          </motion.div>
          <motion.div variants={item} className="col-span-2">
            <input type="text" placeholder="Country" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400" required />
          </motion.div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100" />

      {/* Professional */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <Briefcase size={14} /> Professional
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={item} className="col-span-2">
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700" required>
              <option value="">Occupation Status</option>
              <option value="employed">Employed</option>
              <option value="student">Student</option>
              <option value="self-employed">Self-Employed</option>
            </select>
          </motion.div>
          <motion.div variants={item} className="col-span-2">
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700" required>
              <option value="">Industry</option>
              <option value="it">IT / Tech</option>
              <option value="health">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="edu">Education</option>
            </select>
          </motion.div>
          <motion.div variants={item} className="col-span-2">
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700" required>
              <option value="">Monthly Income Range</option>
              <option value="low">0 - 25k</option>
              <option value="mid">25k - 50k</option>
              <option value="high">50k+</option>
            </select>
          </motion.div>
        </div>
      </div>

      <motion.div variants={item} className="pt-4 sticky bottom-0 bg-white pb-2 border-t border-slate-100">
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Submit Application <CheckCircle2 size={18} />
        </button>
      </motion.div>

    </motion.form>
  );
}
