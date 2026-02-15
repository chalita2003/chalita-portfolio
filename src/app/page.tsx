"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Activities } from "./components/Activities";
import { Awards } from "./components/Awards";
import { Mindset } from "./components/Mindset";
import { Contact } from "./components/Contact";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Add meta tags for SEO
    document.title = "Chalita Kuebkrathok - Junior Fullstack Developer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Junior Fullstack Developer specializing in React, Next.js, and modern DevOps. Building scalable web applications with user-centered design. Based in Nakhon Ratchasima, Thailand."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Junior Fullstack Developer specializing in React, Next.js, and modern DevOps. Building scalable web applications with user-centered design. Based in Nakhon Ratchasima, Thailand.";
      document.head.appendChild(meta);
    }

    // OpenGraph tags
    const ogTags = [
      { property: "og:title", content: "Chalita Kuebkrathok - Junior Fullstack Developer" },
      { property: "og:description", content: "Building scalable web applications with modern architecture, DevOps practices, and user-focused design." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://chalita-portfolio.com" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Indicator */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Floating Blur Orbs */}
      <div className="blur-orb blur-orb-1" />
      <div className="blur-orb blur-orb-2" />
      <div className="blur-orb blur-orb-3" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Activities />
        <Awards />
        <Mindset />
        <Contact />
      </div>
    </div>
  );
}