"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  // แบบง่ายสุด ไม่ต้องแยกไฟล์ data
  const project =
    slug === "fit-life"
      ? {
          title: "Fit Life",
          description:
            "Student fitness application with gamified workouts.",
          images: ["/projects/fit1.png", "/projects/fit2.png"],
        }
      : null;

  if (!project)
    return <div className="text-white p-20">Project not found</div>;

  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold">
            {project.title}
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Macbook Frame */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-zinc-900 rounded-3xl p-4 shadow-2xl border border-white/10">
            <div className="bg-black rounded-2xl overflow-hidden">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="min-w-full cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt="project"
                        className="w-full object-cover hover:scale-105 transition duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-6 bg-zinc-800 rounded-b-3xl mx-12 shadow-lg" />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[90vh] rounded-2xl"
            />
            <X className="absolute top-8 right-8 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
