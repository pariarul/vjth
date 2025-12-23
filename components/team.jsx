"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const team = [
  {
    name: "Naveen Kumar R",
    role: "Co-Founder & Business Head",
    image: "/Naveen.jpeg",
    bio: "Driving strategic growth and business innovation.",
    linkedin: "https://www.linkedin.com/in/naveenkumar-r-5a317123b ",
  },
  {
    name: "Govindaiah M T",
    role: "Co-Founder & Director - Client Services",
    image: "/Govindaiah.jpeg",
    bio: "Ensuring client success through dedicated service.",
    linkedin: "https://www.linkedin.com/in/govindaiah-m-t",
  },
  {
    name: "Kavitha R",
    role: "Associate Director - Project Management",
    image: "/Kavitha.jpeg",
    bio: "Expert project delivery and operational excellence.",
    linkedin: "https://www.linkedin.com/in/kavitha-r-58408439a",
  },
];

const Card = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl"
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="p-2 bg-white/10 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-white"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>
          <p className="text-blue-400 font-medium mb-4">{member.role}</p>
          <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
            {member.bio}
          </p>

          <div className="flex gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
<Link
  href={member.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 hover:text-blue-400 text-slate-400 transition-colors"
>
  <Linkedin size={20} />
</Link>


   
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Team() {
  return (
    <section id="team" className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-200 blur-3xl rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-32">

        {/* Mission / Trusted Partner Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              Masters of <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Market Intel</span>
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed"
          >
            <p>
              With over <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">20+ years</span> of collective experience, VjTH is your data architect. We don't just find data; we forge it into strategy.
            </p>
            <div className="pl-6 border-l-4 border-blue-500/20 italic text-slate-500">
              “We focus on long-term value creation by transforming complex data into clear, actionable strategies.”
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between border-b border-slate-200 pb-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900">The Leadership</h3>
              <p className="text-slate-500">Architects of your business growth</p>
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-4xl font-black text-slate-200">03</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Members</div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} member={member} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
