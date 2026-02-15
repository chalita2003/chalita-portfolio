"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb } from "lucide-react";

export function Mindset() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const mindsetItems = [
    "Designing scalable and maintainable systems",
    "Writing clean, reusable component architecture",
    "Applying RESTful API best practices",
    "Performance optimization and caching",
    "Continuous learning in DevOps and Cloud infrastructure",
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering Philosophy
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
              <Lightbulb className="text-blue-400" size={32} />
            </div>
          </div>

          <div className="space-y-4">
            {mindsetItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform" />
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}