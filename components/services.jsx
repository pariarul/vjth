"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Users, Heart, Database, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: BarChart3,
    image: "/cawi.jpg",
    title: "CAWI Market Research",
    description: "Computer-Aided Web Interviewing powered by next-gen digital tools for fast and accurate insights.",
  },
  {
    icon: Globe,
    image: "/online-research.jpg",
    title: "Online Research",
    description: "Digital-first data collection aligned with modern consumer trends and emerging global markets.",
  },
  {
    icon: Users,
    image: "/qualitative.jpg",
    title: "Qualitative Research",
    description: "In-depth methodologies to explore user needs, motivations, and behavioral insights.",
  },
  {
    icon: Heart,
    image: "/healthcare.jpg",
    title: "Health Care Research",
    description: "Clinically informed healthcare research designed for hospitals, pharma, and policy organizations.",
  },
  {
    icon: Database,
    image: "/Panel.jpg",
    title: "Panel Research",
    description: "High-precision market insights backed by expert researchers and verified audience panels.",
  },
  {
    icon: Phone,
    image: "/cati.jpg",
    title: "CATI Market Research",
    description: "Reliable telephone-based data collection for large-scale B2B and B2C research needs.",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 transition-all duration-500 h-[420px] flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-blue-900/40 transition-colors duration-500" />

        {/* Floating Icon */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/50 transform group-hover:rotate-12 transition-transform duration-500">
          <service.icon size={24} className="text-blue-600" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="absolute top-0 right-8 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg text-white">
            <ArrowUpRight size={24} />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors flex-grow">
          {service.description}
        </p>

        {/* Decorative Bottom Bar */}
        <div className="w-full h-1 bg-slate-100 mt-6 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Light Theme Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wide uppercase shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
          >
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium"
          >
            Premium research methodologies tailored for the digital age.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
