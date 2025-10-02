"use client";

import { useState, useRef } from "react";
import MultilingualPreloader from "../components/ui/skiper-ui/MultilingualPreloader";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Services from "@/components/Services";
import Hero from "@/components/Hero";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      {showPreloader && (
        <MultilingualPreloader onFinish={handlePreloaderFinish} />
      )}

      <main
        className="relative min-h-screen overflow-hidden transition-opacity duration-1000"
        style={{ opacity: showPreloader ? 0 : 1 }}
      >
        <Hero />
        <Nav />
        <About />
        <Services />
      </main>
    </>
  );
}
