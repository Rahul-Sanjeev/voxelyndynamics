"use client";

import React, { useRef } from "react";
import { michroma } from "@/lib/fonts";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // You can pass a callback prop for preloader if needed, or control it here

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      />

      {/* Heading Content */}
      <div className="relative z-40 flex items-center justify-center min-h-screen px-4">
        <div className={`text-center ${michroma.className}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Voxelyn Dynamics
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Your Next Digital Move
          </p>
        </div>
      </div>

      {/* Scroll down animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            ease: "easeInOut",
          },
          opacity: { duration: 0.8 },
        }}
      >
        <div className="flex flex-col items-center">
          <span
            className={`text-sm text-white/70 uppercase tracking-widest ${michroma.className}`}
          >
            Scroll Down
          </span>
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
