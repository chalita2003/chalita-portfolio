"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full opacity-70" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotateY: 5, rotateX: -5 }}
            className="relative group perspective-[1000px] flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profile.jpg"
                    alt="Chalita Kuebkrathok"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-blue-500/5">

              {/* Name */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                Chalita Kuebkrathok
              </h3>

              {/* Professional Headline */}
              <p className="text-blue-400 text-lg">
                Full Stack Developer (Frontend-Focused)
              </p>

              {/* Professional Summary */}
              <div className="text-gray-300 leading-relaxed space-y-4 mt-6 mb-8">
                <p>
                  I am a Full Stack Developer with a strong focus on frontend 
                  engineering and user experience. I build responsive, scalable, 
                  and maintainable web applications that balance clean design 
                  with structured system architecture.
                </p>

                <p>
                  I have experience developing web and mobile applications 
                  across the full development lifecycle — from UI design and 
                  frontend implementation to API integration and deployment 
                  workflows.
                </p>

                <p>
                  I am committed to writing clean, reusable code, collaborating 
                  effectively within cross-functional teams, and continuously 
                  improving both technical and problem-solving skills to deliver 
                  meaningful business value.
                </p>
              </div>

              {/* Personal Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mb-8">
                <div>✓ Frontend-focused with full-stack understanding</div>
                <div>✓ Strong ownership and accountability</div>
                <div>✓ Detail-oriented and structured problem-solving</div>
                <div>✓ Adaptable and committed to continuous improvement</div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <a
                  href="/Resume_ChalitaKuebkrathok.pdf"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition shadow-lg shadow-blue-500/20"
                >
                  Download Resume
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
