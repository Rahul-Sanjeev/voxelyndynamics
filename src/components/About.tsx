"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { michroma } from "@/lib/fonts";

const titles = [
  { text: "Voxelyn Dynamics", color: "#FBBF24" }, // amber-400
  { text: "Developers", color: "#60A5FA" }, // blue-400
  { text: "Innovators", color: "#F87171" }, // red-400
  { text: "Educators", color: "#34D399" }, // green-400
];

export default function About() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black backdrop-blur-lg py-20 px-6 sm:px-12 lg:px-24 text-center">
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 ${michroma.className}`}
      >
        We Are{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="block"
            style={{ color: titles[idx].color }}
          >
            {titles[idx].text}
          </motion.span>
        </AnimatePresence>
      </h2>

      <motion.p
        className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        At Voxelyn Dynamics, we design and deliver tailored software solutions
        that drive business growth and digital innovation. We also empower
        future IT professionals through expert training and mentoring.
      </motion.p>

      <motion.div
        className="mt-12 flex flex-col sm:flex-row justify-center gap-10 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {[
          {
            title: "Our Mission",
            text: "To build innovative software and nurture talent for a digital future.",
          },
          {
            title: "Our Vision",
            text: "To be a trusted partner in technology and education.",
          },
          {
            title: "Our Values",
            text: "Quality, integrity, collaboration, and continuous learning.",
          },
        ].map(({ title, text }) => (
          <motion.div
            key={title}
            className="bg-white/10 rounded-xl p-8 flex-1 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
