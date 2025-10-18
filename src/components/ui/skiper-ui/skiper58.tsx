"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Custom Software",
    href: "/services/custom-software",
    description: "Bespoke software tailored to your needs.",
  },
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "Robust, scalable web applications.",
    color: "neon-orange",
  },
  {
    name: "Training & Mentoring",
    href: "/services/training",
    description: "Professional IT skill development programs.",
  },
  {
    name: "Digital Innovation",
    href: "/services/innovation",
    description: "Cutting-edge solutions to stay ahead.",
    color: "neon-orange",
  },
  {
    name: "Customer Support",
    href: "/services/support",
    description: "Reliable ongoing technical assistance.",
  },
];

export const Skiper58 = () => {
  return (
    <ul className="bs flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-4 py-1 text-white">
      {navigationItems.map((item, index) => (
        <li
          className="relative flex cursor-pointer flex-col items-center overflow-visible"
          key={index}
        >
          <div className="relative flex items-start">
            <TextRoll
              center
              className={`text-xl sm:text-3xl md:text-5xl font-extrabold uppercase leading-none tracking-tight sm:tracking-normal ${item.color}`}
            >
              {item.name}
            </TextRoll>
          </div>
        </li>
      ))}
    </ul>
  );
};

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split(" ").map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-flex mr-4 sm:mr-6 flex-wrap break-words"
          >
            {word.split("").map((letter, letterIndex) => {
              const delay = center
                ? STAGGER * Math.abs(letterIndex - (word.length - 1) / 2)
                : STAGGER * letterIndex;

              return (
                <motion.span
                  variants={{
                    initial: {
                      y: 0,
                    },
                    hovered: {
                      y: "-100%",
                    },
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay,
                  }}
                  className="inline-block"
                  key={letterIndex}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split(" ").map((word, wordIndex) => (
          <span
            key={`second-${wordIndex}`}
            className="inline-flex mr-2 sm:mr-4"
          >
            {word.split("").map((letter, letterIndex) => {
              const delay = center
                ? STAGGER * Math.abs(letterIndex - (word.length - 1) / 2)
                : STAGGER * letterIndex;

              return (
                <motion.span
                  variants={{
                    initial: {
                      y: "100%",
                    },
                    hovered: {
                      y: 0,
                    },
                  }}
                  transition={{
                    ease: "easeInOut",
                    delay,
                  }}
                  className="inline-block"
                  key={letterIndex}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        ))}
      </div>
    </motion.span>
  );
};

export { TextRoll };
