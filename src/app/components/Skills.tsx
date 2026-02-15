"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  Database,
  Container,
  Wrench,
  PenTool,
} from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Primary Stack",
      subtitle: "Ready to contribute in production",
      icon: Code2,
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      color: "blue",
    },
    {
      title: "Comfortable With",
      subtitle: "Applied in projects and integrations",
      icon: Database,
      skills: [
        "Node.js",
        "REST API Integration",
        "Firebase",
        "Appwrite",
        "React Native",
      ],
      color: "purple",
    },
    {
      title: "Familiar With",
      subtitle: "Basic deployment & infrastructure exposure",
      icon: Container,
      skills: [
        "Docker",
        "Kubernetes",
        "Helm",
      ],
      color: "cyan",
    },
    {
      title: "UI & Design",
      subtitle: "Design-to-code workflow",
      icon: PenTool,
      skills: [
        "Figma (UI Design & Prototyping)",
        "Responsive Design",
      ],
      color: "pink",
    },
    {
      title: "Workflow & Collaboration",
      subtitle: "Team-based development process",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Agile / Scrum",
      ],
      color: "green",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20",
      shadow: "hover:shadow-blue-500/20",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/20",
      shadow: "hover:shadow-purple-500/20",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/20",
      shadow: "hover:shadow-cyan-500/20",
    },
    green: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/20",
      shadow: "hover:shadow-green-500/20",
    },
    pink: {
      bg: "bg-pink-500/10",
      text: "text-pink-400",
      border: "border-pink-500/20",
      shadow: "hover:shadow-pink-500/20",
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Clear positioning of tools and technologies I actively use and continue to develop.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors =
              colorClasses[category.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl ${colors.shadow} group`}
              >
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={colors.text} size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="text-xs text-gray-400 mb-4 mt-1">
                  {category.subtitle}
                </p>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-3 py-2 ${colors.bg} ${colors.text} rounded-xl text-sm border ${colors.border} text-center`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
