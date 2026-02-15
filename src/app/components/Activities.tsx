"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Users, Code, Briefcase, Sparkles } from "lucide-react";

export function Activities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const activities = [
    {
      icon: Briefcase,
      title: "Full Stack Developer Internship",
      organization: "GoSoft (Thailand) Co., Ltd.",
      period: "June – August 2025",
      description:
        "Enterprise chatbot development, promotion system, Docker deployment",
      color: "blue",
    },
    {
      icon: Code,
      title: "University Tech Projects",
      organization: "Computer Science Department",
      period: "2022 – Present",
      description:
        "Developed multiple fullstack applications including fitness tracker and movie recommendation platform",
      color: "purple",
    },
    {
      icon: Users,
      title: "Tech Workshop Participation",
      organization: "Various Tech Communities",
      period: "2023 – 2025",
      description:
        "Attended workshops on Docker, Kubernetes, and modern web development practices",
      color: "cyan",
    },
    {
      icon: Sparkles,
      title: "Team Leadership & Collaboration",
      organization: "Academic Projects",
      period: "2023 – 2025",
      description:
        "Led development teams using Agile methodology and Git collaboration",
      color: "green",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "border-blue-500/20",
      shadow: "hover:shadow-blue-500/10",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "border-purple-500/20",
      shadow: "hover:shadow-purple-500/10",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      border: "border-cyan-500/20",
      shadow: "hover:shadow-cyan-500/10",
    },
    green: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      border: "border-green-500/20",
      shadow: "hover:shadow-green-500/10",
    },
  };

  return (
    <section id="activities" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Activities & Involvement
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const colors = colorClasses[activity.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${colors.shadow} group`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={colors.text} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {activity.title}
                    </h3>
                    <p className={`${colors.text} text-sm mb-1`}>
                      {activity.organization}
                    </p>
                    <p className="text-gray-400 text-xs">{activity.period}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
