"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [activeProject, setActiveProject] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Auto carousel
  useEffect(() => {
    if (!emblaApi || !activeProject) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, activeProject]);

  // Indicator update
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // ESC close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

// Lightbox keyboard navigation
useEffect(() => {
  if (lightboxIndex === null || !activeProject) return;

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setLightboxIndex(null);
    }

    if (e.key === "ArrowRight") {
      setLightboxIndex((prev) =>
        prev === null
          ? null
          : (prev + 1) % activeProject.images.length
      );
    }

    if (e.key === "ArrowLeft") {
      setLightboxIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + activeProject.images.length) %
            activeProject.images.length
      );
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [lightboxIndex, activeProject]);

// Hide navbar + disable scroll when lightbox open
useEffect(() => {
  const navbar = document.getElementById("navbar");

  if (lightboxIndex !== null) {
    document.body.style.overflow = "hidden"; // ปิด scroll
    navbar?.classList.add("opacity-0", "pointer-events-none");
  } else {
    document.body.style.overflow = "auto";
    navbar?.classList.remove("opacity-0", "pointer-events-none");
  }

  return () => {
    document.body.style.overflow = "auto";
    navbar?.classList.remove("opacity-0", "pointer-events-none");
  };
}, [lightboxIndex]);


  const projects = [
    { title: "Fit Life – Student Fitness Application", description: "A cross-platform fitness application designed to increase student engagement through gamified workouts and real-time activity tracking.", features: [ "Built a cross-platform mobile application using React Native with personalized workout plans and gamified leaderboards.", "Integrated Google Maps API to enable real-time activity tracking and route visualization.", "Designed and implemented an admin dashboard using Next.js and Firebase for performance monitoring and user management.", "Increased user retention by 25% and achieved 90% tracking accuracy through feature optimization.", ], technologies: [ "React Native", "Next.js", "Firebase", "Google Maps API", "JavaScript", ],
      images: ["/projects/Picture1.png", "/projects/Picture2.png", "/projects/Picture21.jpg", "/projects/Picture18.jpg", "/projects/Picture22.jpg", "/projects/Picture11.png", "/projects/Picture3.png", "/projects/Picture5.png", "/projects/Picture19.jpg", "/projects/Picture8.png", "/projects/Picture9.png", "/projects/Picture13.png", "/projects/Picture14.png", "/projects/Picture15.png", "/projects/Picture16.png", "/projects/Picture17.png"],
      githubUrl: "https://github.com/chalita2003",
      liveUrl: null,
    },
    {
     title: "MovieShake – Movie Recommendation Platform", description: "A personalized movie recommendation platform delivering tailored suggestions through optimized backend performance and interactive features.", features: [ "Developed a cross-platform application using React Native and Appwrite backend services.", "Implemented an interactive 'Shake' feature to generate random movie suggestions and enhance engagement.", "Optimized API performance and caching strategies, improving system response speed by 30%.", "Collaborated within a 4-member Agile team using GitHub workflows and sprint planning.", ], technologies: ["React Native", "JavaScript", "Appwrite", "GitHub"],
      images: ["/projects/movie1.png", "/projects/movie2.png", "/projects/movie3.png", "/projects/movie4.png", "/projects/movie5.png", "/projects/movie6.png", "/projects/movie7.png", "/projects/movie8.png", "/projects/movie9.png"],
      githubUrl: "https://github.com/chalita2003",
      liveUrl: null,
    },
{ title: "PetShop – Online Pet Food Management System", description: "A full-stack web application designed to digitize inventory and sales management for pet shop businesses, supporting customer purchasing workflows and admin management.", features: [ "Engineered a role-based system supporting Admin and Customer access control.", "Implemented real-time inventory tracking and structured product categorization.", "Built a complete e-commerce workflow including cart, checkout, and order tracking.", "Designed advanced product filtering by pet type, brand, promotion, and new arrivals.", "Integrated secure authentication and an administrative dashboard for order management.", "Containerized the application using Docker with MariaDB integration.", ], technologies: [ "Java", "Spring Boot", "MariaDB", "Docker", "Git", ],
  images: [ "/projects/Pet1.png","/projects/Pet2.png","/projects/Pet3.png","/projects/Pet4.png","/projects/Pet5.png","/projects/Pet6.png","/projects/Pet7.png","/projects/Pet8.png","/projects/Pet9.png","/projects/Pet10.png","/projects/Pet11.png","/projects/Pet12.png","/projects/Pet13.png","/projects/Pet14.png","/projects/Pet15.png",],
  githubUrl: "https://github.com/chalita2003",
  liveUrl: null,
},

  ];

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-gray-400 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => setActiveProject(project)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm"
                >
                  View Gallery
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl text-sm"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= POPUP ================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl p-8 border border-white/10 shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white"
              >
                <X size={28} />
              </button>

              <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-8">
                {activeProject.title}
              </h2>

              {/* Frame */}
              <div className="relative mb-8">
                <div className="bg-zinc-800 rounded-2xl p-3">
                  <div className="bg-black rounded-xl overflow-hidden aspect-video">
                    <div ref={emblaRef} className="overflow-hidden h-full">
                      <div className="flex h-full">
                        {activeProject.images.map((img: string, i: number) => (
                          <div
                            key={i}
                            className="min-w-full flex items-center justify-center"
                            onClick={() => setLightboxIndex(i)}
                          >
                            <img
                              src={img}
                              className="max-h-full max-w-full object-contain cursor-zoom-in"
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indicator Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {activeProject.images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`h-2 w-2 rounded-full transition ${
                        selectedIndex === index
                          ? "bg-blue-500"
                          : "bg-gray-500/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-6">
                {activeProject.description}
              </p>

              <ul className="space-y-2 mb-6">
                {activeProject.features.map((feature: string) => (
                  <li key={feature} className="flex gap-3 text-gray-400 text-sm">
                    <span className="text-blue-400 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={activeProject.githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl text-sm"
              >
                <Github size={16} />
                View Code
              </a>
            </motion.div>

            {/* Lightbox */}
            {/* Lightbox */}
<AnimatePresence>
  {lightboxIndex !== null && activeProject && (
    <motion.div
      className="fixed inset-0 bg-black/95 flex items-center justify-center p-6 z-[60]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setLightboxIndex(null)}
    >
      <motion.img
        key={lightboxIndex}
        src={activeProject.images[lightboxIndex]}
        className="max-w-[95vw] max-h-[85vh] object-contain rounded-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Left Arrow Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLightboxIndex(
            (lightboxIndex - 1 + activeProject.images.length) %
              activeProject.images.length
          );
        }}
        className="absolute left-6 text-white text-4xl"
      >
        ‹
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLightboxIndex(
            (lightboxIndex + 1) % activeProject.images.length
          );
        }}
        className="absolute right-6 text-white text-4xl"
      >
        ›
      </button>
    </motion.div>
  )}
</AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
