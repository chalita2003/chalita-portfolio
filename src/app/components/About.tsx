"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Mail, Phone, Github } from "lucide-react";
import Image from "next/image";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
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

    {/* Glow Background */}
    <div className="absolute inset-0 rounded-3xl 
      bg-gradient-to-br from-blue-500/20 to-purple-500/20 
      blur-2xl opacity-40 group-hover:opacity-70 
      transition duration-500"
    />

    {/* Image Card */}
    <div className="relative aspect-square rounded-3xl 
      overflow-hidden border border-white/10 
      backdrop-blur-xl bg-white/5 p-2">

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
  className="space-y-6"
>
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">

    {/* Name */}
    <h3 className="text-2xl font-semibold text-white mb-2">
      Chalita Kuebkrathok
    </h3>

    {/* Professional Headline */}
    <p className="text-blue-400 text-lg mb-6">
      Fullstack Developer focused on scalable web architecture
    </p>

    {/* Professional Summary */}
    <p className="text-gray-300 leading-relaxed mb-6">
      Fullstack developer experienced in building scalable web applications 
      using Next.js, Node.js, and PostgreSQL. Strong interest in DevOps 
      practices and container-based deployment with Docker and Kubernetes. 
      Passionate about designing maintainable systems and user-centered 
      interfaces.
    </p>

    {/* Core Skills Snapshot */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
      <div>
        <span className="text-white font-medium">Frontend:</span> React, Next.js, TypeScript
      </div>
      <div>
        <span className="text-white font-medium">Backend:</span> Node.js, Express, REST API
      </div>
      <div>
        <span className="text-white font-medium">Database:</span> PostgreSQL, Prisma
      </div>
      <div>
        <span className="text-white font-medium">DevOps:</span> Docker, Kubernetes
      </div>
    </div>

    {/* Contact */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-400">
      <div className="flex items-center gap-3">
        <MapPin size={18} className="text-blue-400" />
        <span className="text-sm">Nakhon Ratchasima, Thailand</span>
      </div>

      <div className="flex items-center gap-3">
        <Mail size={18} className="text-blue-400" />
        <span className="text-sm">chalita.kuebkrathok@gmail.com</span>
      </div>

      <div className="flex items-center gap-3">
        <Github size={18} className="text-blue-400" />
        <a
          href="https://github.com/chalita2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-blue-400 transition-colors"
        >
          github.com/chalita2003
        </a>
      </div>
    </div>

  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
