"use client";

import React, { useState } from "react";
import { michroma } from "@/lib/fonts";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`
    fixed top-3 left-1/2 transform -translate-x-1/2 z-50
    backdrop-blur-md bg-white bg-opacity-10 rounded-full
    border border-white border-opacity-20

    w-9/12    /* 91.666% width on mobile */
    sm:w-10/12 /* 83.333% on small screens */
    md:w-full  /* 100% on medium and up */
    max-w-6xl  /* caps width on desktop */

    h-16

    px-6 sm:px-6 md:px-8
    flex items-center
    ${michroma.className}
  `}
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-black font-bold text-lg">Voxelyn Dynamics</div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Projects
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-11/12 max-w-sm bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg py-4 md:hidden text-center">
          <a
            href="#"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Projects
          </a>
          <a
            href="#"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
