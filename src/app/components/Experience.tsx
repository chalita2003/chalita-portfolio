"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

const experience = {
  role: "Full Stack Developer Intern",
  company: "GoSoft (Thailand) Co., Ltd.",
  companyUrl: "https://www.gosoft.co.th/",
  logo: "/images/gosoft.png",
  period: "Feb – Jun 2025",
  description:
    "Contributed to the design and frontend development of an enterprise chatbot and promotion comparison system, focusing on user experience and scalable implementation.",
  bullets: [
    "Designed UX/UI for an enterprise chatbot system using Figma, including a dashboard, database management, chat testing, and user role management screens.",
    "Developed the frontend of a promotion comparison system using Next.js, TypeScript, and Tailwind CSS.",
    "Implemented interactive DataTable features with search, filtering, sorting, and CSV export functionality.",
    "Conducted usability testing through real-world scenario simulations and improved UI workflows based on feedback.",
    "Applied containerization practices using Docker and supported deployment workflows with Kubernetes and Helm."
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Kubernetes",
    "Helm",
    "Figma",
  ],
};

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pl-20 md:pl-28"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-white/10" />

          {/* Timeline Dot */}
          <div className="absolute left-6 md:left-10 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/50" />

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex items-start gap-4 mb-6">
              {/* Logo (Optional) */}
              <div className="hidden md:block">
                <Image
                  src={experience.logo}
                  alt="GoSoft Logo"
                  width={60}
                  height={60}
                  className="rounded-xl bg-white p-2"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {experience.role}
                </h3>

                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:underline mb-2"
                >
                  {experience.company}
                  <ExternalLink size={16} />
                </a>

                <p className="text-gray-400 text-sm">{experience.period}</p>
              </div>

              <div className="p-3 bg-blue-500/10 rounded-2xl">
                <Briefcase className="text-blue-400" size={24} />
              </div>
            </div>

            <p className="text-gray-300 mb-6">{experience.description}</p>

            <ul className="space-y-3 mb-6 text-gray-300">
              {experience.bullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl text-sm border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
