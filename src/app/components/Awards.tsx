"use client";

import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import {
  Trophy,
  Database,
  Code2,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Image from "next/image";

export function Awards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  const awards = [
    {
      icon: Trophy,
      title: "Cooperative Education Completion – Full Stack Developer",
      organization:
        "Suranaree University of Technology & The Federation of Thai Industries (FTI)",
      sub: "Company: GoSoft (Thailand) Co., Ltd.",
      date: "September 1, 2025",
      description:
        "Successfully completed Cooperative Education with enterprise-level experience in full stack development.",
      image: "/certificates/co-op-2025.png",
      highlight: true,
    },
    {
      icon: Layers,
      title: "PTG Academy – Travel Solution Platform",
      organization: "PTG Energy Public Company Limited",
      date: "June 23, 2024",
      description:
        "Contributed to UI design and solution development in a project-based program.",
      image: "/certificates/ptg-2024.png",
    },
    {
      icon: Code2,
      title: "Software Engineering Certificate",
      organization: "Suranaree University of Technology",
      date: "May 27, 2024",
      description:
        "Software development lifecycle and system design principles.",
      image: "/certificates/software-engineering-2024.png",
    },
    {
      icon: Code2,
      title: "Object-Oriented Programming & Data Structures",
      organization: "Suranaree University of Technology",
      date: "May 27, 2024",
      description:
        "OOP principles and data structure implementation.",
      image: "/certificates/oop-2024.png",
    },
    {
      icon: Layers,
      title: "iOS Application Development",
      organization: "Suranaree University of Technology",
      date: "August 30, 2024",
      description:
        "Mobile app architecture and cross-platform understanding.",
      image: "/certificates/ios-2024.png",
    },
    {
      icon: Database,
      title: "Oracle Academy – Database Programming with PL/SQL",
      organization: "Oracle Academy",
      date: "October 31, 2023",
      description: "SQL development and PL/SQL programming.",
      image: "/certificates/plsql-2023.png",
    },
    {
      icon: Database,
      title: "Oracle Academy – Database Foundations",
      organization: "Oracle Academy",
      date: "October 17, 2023",
      description:
        "Relational database concepts and SQL fundamentals.",
      image: "/certificates/database-foundations-2023.png",
    },
    {
      icon: Database,
      title: "Database Administration",
      organization: "Suranaree University of Technology",
      date: "December 26, 2023",
      description:
        "Database management and administration principles.",
      image: "/certificates/db-admin-2023.png",
    },
  ];

  return (
    <section id="awards" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Awards & Certifications
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full transition"
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
        >
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`min-w-[320px] rounded-2xl overflow-hidden shadow-lg cursor-pointer
                  ${
                    award.highlight
                      ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/40"
                      : "bg-white/5 border border-white/10"
                  }`}
              >
                <div
                  className="relative h-48 w-full"
                  onClick={() => setSelectedImage(award.image)}
                >
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-blue-400" size={20} />
                    <h3 className="text-white font-semibold text-sm">
                      {award.title}
                    </h3>
                  </div>

                  <p className="text-blue-400 text-xs">
                    {award.organization}
                  </p>
                  {award.sub && (
                    <p className="text-blue-300 text-xs">{award.sub}</p>
                  )}
                  <p className="text-gray-400 text-xs mb-2">
                    {award.date}
                  </p>

                  <p className="text-gray-300 text-xs">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white"
              >
                <X size={28} />
              </button>

              <Image
                src={selectedImage}
                alt="Certificate"
                width={1200}
                height={800}
                className="rounded-xl object-contain w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
