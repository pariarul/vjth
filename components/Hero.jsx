
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { BarChart3, Globe2, Brain, ArrowRight, MousePointer2 } from "lucide-react";

// Magnetic Button Component
const MagneticButton = ({ children, className, href }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Content = (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.button>
  );

  return href ? <a href={href}>{Content}</a> : Content;
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  // Mouse Parallax for Background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  const bgX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const bgY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(bgY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(bgX, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden mt-16 flex items-center justify-center bg-slate-50 perspective-1000"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Dynamic Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
        <motion.div
          style={{ rotateX: 60, scale: 2, y: bgY.get() * 50 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 animate-[grid_20s_linear_infinite]"
        />
        {/* Floating Blobs */}
        <motion.div style={{ x: useTransform(bgX, [-1, 1], [-100, 100]), y: useTransform(bgY, [-1, 1], [-100, 100]) }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-[100px]" />
        <motion.div style={{ x: useTransform(bgX, [-1, 1], [100, -100]), y: useTransform(bgY, [-1, 1], [100, -100]) }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 shadow-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-slate-600 font-bold text-xs uppercase tracking-wider">VjTH Market Research</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="text-5xl sm:text-7xl font-black leading-tight tracking-tight text-slate-900"
          >
            {"Market Research Excellence".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                {i === 2 ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{word}</span> : word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Transform your business decisions with data-driven insights from <span className="font-bold text-slate-900">VjTH</span>.
            We deliver <span className="text-blue-600 font-semibold">Field</span>, <span className="text-indigo-600 font-semibold">Insight</span>, and <span className="text-purple-600 font-semibold">Intellect</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4"
          >
            <MagneticButton href="mailto:rfq@vjthmr.com" className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full shadow-xl shadow-slate-900/20 hover:bg-slate-800 flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <MagneticButton href="#about" className="px-10 py-4 bg-white text-slate-900 border-2 border-slate-900 font-bold rounded-full hover:bg-slate-50">
              Learn More
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Visuals - 3D Floating Cards */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="hidden lg:block relative h-[600px] w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center z-20">
            {/* Main 3D Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative w-80 h-96 glass-dark rounded-3xl p-6 border border-white/20 shadow-2xl bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col justify-between transform-style-3d group hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute top-0 right-0 p-5 opacity-20">
                <Brain className="w-32 h-32" />
              </div>
              <div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">98%</div>
                <div className="text-slate-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "98%" }} transition={{ delay: 1.5, duration: 1 }} className="h-full bg-blue-500 rounded-full" />
                </div>
                <div className="h-2 bg-slate-700 rounded-full w-3/4 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ delay: 1.7, duration: 1 }} className="h-full bg-emerald-500 rounded-full" />
                </div>
                <p className="text-xs text-slate-400 mt-2">Precision Data Collection</p>
              </div>
            </motion.div>

            {/* Floating Satellite Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-20 right-10 glass p-4 rounded-2xl shadow-xl flex gap-3 items-center border border-white/50"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Globe2 /></div>
              <div>
                <div className="font-bold text-slate-800">Global</div>
                <div className="text-xs text-slate-500">Reach</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-40 left-0 glass p-4 rounded-2xl shadow-xl flex gap-3 items-center border border-white/50"
            >
              <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><BarChart3 /></div>
              <div>
                <div className="font-bold text-slate-800">Insights</div>
                <div className="text-xs text-slate-500">Real-time</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Marquee "Trusted By / Fields" */}
      <div className="absolute bottom-0 w-full glass-dark border-t border-white/10 py-6 overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-slate-400 font-bold text-xl uppercase tracking-widest">
              <span>Consumer Goods</span> <span>•</span>
              <span>Healthcare</span> <span>•</span>
              <span>Technology</span> <span>•</span>
              <span>Automotive</span> <span>•</span>
              <span>Finance</span> <span>•</span>
              <span>Retail</span> <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
