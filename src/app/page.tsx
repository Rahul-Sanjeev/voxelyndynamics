"use client";

import { useState } from "react";
import MultilingualPreloader from "../components/ui/skiper-ui/MultilingualPreloader";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
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
        <Hero shouldPlayVideo={!showPreloader} />
        <Nav />
        <About />
        <Services />
        <Projects />
      </main>
    </>
  );
}
