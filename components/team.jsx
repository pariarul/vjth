"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const team = [
  {
    name: "Naveen Kumar R",
    role: "Co-Founder & Business Head",
    image: "/Naveen.jpeg",
  },
  {
    name: "Govindaiah M T",
    role: "Co-Founder & Senior Manager",
    image: "/Govindaiah.jpeg",
  },
  {
    name: "Kavitha R",
    role: "Senior Project Manager",
    image: "/Kavitha.jpeg",
  },
];

export default function Team() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardsRef = useRef([]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".team-header",
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
          }
        );
      });
    }
  }, [inView]);

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-1/3 h-1/3 bg-blue-100/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-slate-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="team-header mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Experienced professionals committed to delivering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl border-2 border-blue-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold text-blue-700">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
