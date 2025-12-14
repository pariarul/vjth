"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Target, Users, Zap, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXWithOffsetX = e.clientX - rect.left;
    const mouseYWithOffsetY = e.clientY - rect.top;
    const xPct = mouseXWithOffsetX / width - 0.5;
    const yPct = mouseYWithOffsetY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transform-gpu transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-slate-50"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Top Section: Text & Visual */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-current" />
              Who We Are
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Empowering Decisions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Precision Data</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              With a team bringing over <span className="text-slate-900 font-bold">20+ years</span> of collective experience in market research, VjTH Market Research is your trusted partner for delivering accurate, data-driven insights. We empower both established brands and emerging startups with comprehensive market intelligence and strategic research methodologies that support confident business decision-making.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              At VjTH, we focus on long-term value creation by transforming complex data into clear, actionable strategies. Our expertise spans primary and secondary research, enabling us to deliver reliable insights, strategic recommendations, and measurable market-share growth. We help businesses align their strategic planning with future market opportunities—ensuring sustainable expansion and long-term success.
            </p>

            <div className="flex flex-col gap-4">
              {["Global Reach & Local Expertise", "Advanced Analytics & AI", "Customized Research Solutions"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3 text-slate-700 font-semibold"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - Parallax Stack */}
          <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px] group">
            {/* Back Card */}
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), rotateZ: -5 }}
              className="absolute w-80 h-96 bg-purple-600 rounded-3xl shadow-2xl opacity-20 transform scale-90"
            />
            {/* Middle Card */}
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]), rotateZ: 5 }}
              className="absolute w-80 h-96 bg-blue-600 rounded-3xl shadow-2xl opacity-40 transform scale-95"
            />
            {/* Front Main Image */}
            <TiltCard className="relative w-80 h-[450px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <img src="/experience.jpg" alt="Team" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />

              <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm text-blue-200 uppercase tracking-widest">Years of Excellence</div>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white shadow-lg"
              >
                <Target size={24} />
              </motion.div>
            </TiltCard>
          </div>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "20+ Years Exp", icon: Users, desc: "Deep domain knowledge across global markets empowering businesses.", color: "bg-blue-500" },
            { title: "Our Mission", icon: Target, desc: "Turning raw data into meaningful insights for confident decisions.", color: "bg-purple-500" },
            { title: "What We Deliver", icon: Zap, desc: "End-to-end research solutions tailored to your business goals.", color: "bg-emerald-500" }
          ].map((card, idx) => (
            <TiltCard key={idx} className="group h-full">
              <div className="h-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group-hover:shadow-2xl transition-all">
                <div className={`absolute top-0 right-0 w-32 h-32 ${card.color} opacity-5 rounded-bl-full`} />

                <div className={`w-14 h-14 ${card.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-7 h-7 ${card.color.replace('bg-', 'text-')}`} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {card.desc}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
