"use client";

import React from "react";
import { Skiper58 } from "../components/ui/skiper-ui/skiper58";

export default function Services() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlay */}

      {/* Fullscreen video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.36)" }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <Skiper58 />
      </div>
    </div>
  );
}
