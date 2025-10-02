"use client";

import { useState, useRef } from "react";
import MultilingualPreloader from "../components/ui/skiper-ui/MultilingualPreloader";
import Nav from "@/components/Nav";
import { michroma } from "@/lib/fonts";

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
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        />

        {/* Navigation */}
        <Nav />

        {/* Main Content */}
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
      </main>
    </>
  );
}
