"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { michroma } from "@/lib/fonts";

const greetings = [
  "Hello", // English
  "Hola", // Spanish
  "Olá", // Portuguese
  "Bonjour", // French
  "नमस्कार", // Hindi
  "你好", // Chinese
  "مرحبا", // Arabic
  "Привет", // Russian
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "നമസ്കാരം", // Malayalam
];

interface MultilingualPreloaderProps {
  onFinish: () => void;
}

export default function MultilingualPreloader({
  onFinish,
}: MultilingualPreloaderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 200);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-gray-300 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="fixed inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl 
          lg:text-7xl xl:text-8xl 2xl:text-9xl
          font-bold text-white ${michroma.className}`}
          >
            {greetings[index]}
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
