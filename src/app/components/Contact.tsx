"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Github, MapPin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chalita.kuebkrathok@gmail.com",
      href: "mailto:chalita.kuebkrathok@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "093-436-6719",
      href: "tel:+66934366719",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/chalita2003",
      href: "https://github.com/chalita2003",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nakhon Ratchasima, Thailand",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Feel free to reach out for collaboration opportunities or just a friendly hello.
          </p>
          <div className="mt-4 inline-block px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <p className="text-blue-400 font-semibold">
              Actively Seeking Full-Stack Developer Roles
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const content = (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">
                      {contact.label}
                    </p>
                    <p className="text-white group-hover:text-blue-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            );

            return contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {content}
              </a>
            ) : (
              <div key={contact.label}>{content}</div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            © 2026 Chalita Kuebkrathok. Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}