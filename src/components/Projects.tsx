import React from "react";
import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";
import { michroma } from "@/lib/fonts";

export default function Projects() {
  const cards = [
    {
      id: 1,
      image: "/images/img1.png",
      alt: "Description 1",
    },
    {
      id: 2,
      image: "/images/img2.png",
      alt: "Description 2",
    },
    {
      id: 3,
      image: "/images/img3.png",
      alt: "Description 3",
    },
    {
      id: 4,
      image: "/images/img4.png",
      alt: "Description 4",
    },
  ];

  return (
    <>
      {/* 1. This container holds the StickyCard component. */}
      {/* It needs to be visible at the top of the page. */}
      <div className="relative w-full bg-black py-10 px-6 sm:px-12 lg:px-24 text-center h-screen">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 ${michroma.className}`}
        >
          What We Done
        </h2>
        <StickyCard002
          cards={cards}
          className="h-full w-full bg-black"
          containerClassName="rounded-4xl shadow-2xl"
          imageClassName="object-contain"
        />
      </div>

      {/* 2. CRITICAL FIX: Add a dummy element to force the page to scroll. */}
      {/* A height of 300vh (3 times the viewport height) is safe for 3 cards. */}
      <div className="h-[400vh] w-full bg-black text-white p-20 flex items-center justify-center text-4xl"></div>
    </>
  );
}
