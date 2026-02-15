"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-center px-6 overflow-hidden"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="max-w-5xl mx-auto space-y-8 perspective-1000"
      >
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-white/50"
        >
          Fullstack Developer
        </motion.p>

        {/* Big Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold
          bg-gradient-to-b from-white to-white/30
          bg-clip-text text-transparent
          drop-shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
        >
          PORTFOLIO
        </motion.h1>

        {/* Presented by - subtle glass badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="inline-block px-6 py-2 rounded-full 
          bg-white/5 backdrop-blur-md 
          border border-white/10 
          text-xs md:text-sm 
          text-white/60 tracking-wide"
        >
          Presented by <span className="text-white/80">Chalita Kuebkrathok</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
