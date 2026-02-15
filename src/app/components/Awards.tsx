"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Trophy, FileCheck, Star } from "lucide-react";

export function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const awards = [
    {
      icon: Trophy,
      title: "Academic Achievement",
      organization: "Rajabhat Nakhon Ratchasima University",
      year: "2024",
      description: "GPA 3.50+ in Computer Science Program",
    },
    {
      icon: FileCheck,
      title: "Full Stack Developer Internship Certificate",
      organization: "GoSoft (Thailand) Co., Ltd.",
      year: "2025",
      description:
        "Completed enterprise-level web development and DevOps training",
    },
    {
      icon: Award,
      title: "Docker Fundamentals Training",
      organization: "Online Certification",
      year: "2024",
      description: "Containerization and deployment best practices",
    },
    {
      icon: Star,
      title: "React Advanced Concepts",
      organization: "Online Learning Platform",
      year: "2024",
      description: "Advanced React patterns and performance optimization",
    },
  ];

  return (
    <section id="awards" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Awards & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-500/20">
                    <Icon className="text-blue-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-blue-400 text-sm mb-1">
                      {award.organization}
                    </p>
                    <p className="text-gray-400 text-xs mb-3">{award.year}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}