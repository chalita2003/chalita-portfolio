"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-white/10" />

          {/* Education Card */}
          <div className="relative pl-20 md:pl-28">
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-10 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/50" />

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <GraduationCap className="text-blue-400" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Bachelor of Digital Technology
                  </h3>
                  <p className="text-blue-400 mb-2">
                    Suranaree University of Technology
                  </p>
                  <p className="text-gray-400 text-sm">
                    2022 – 2025
                  </p>
                </div>
              </div>

              {/* Academic Summary */}
              <div className="mb-6 text-gray-300 leading-relaxed">
                <p className="mb-3">
                  Concentrated on full-stack web development, software engineering,
                  and scalable system architecture.
                </p>
                <p>
                  Developed strong foundations in database design, programming principles,
                  system analysis, and collaborative software development practices.
                </p>
              </div>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={20} className="text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">
                    Relevant Coursework
                  </h4>
                </div>

                <ul className="grid md:grid-cols-2 gap-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Software Engineering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Software Testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Structured Programming and Data Structures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Database Design and Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Information System Analysis and Design</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
