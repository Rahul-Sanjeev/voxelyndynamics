"use client";

import React, { useState } from "react";
import { michroma } from "@/lib/fonts";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

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
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/Logo/vd.png"
            alt="Voxelyn Dynamics Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-black font-bold text-sm sm:text-lg whitespace-nowrap">
            Voxelyn Dynamics
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition-colors"
          >
            Contact
          </Link>
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
          <Link
            href="/"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block px-6 py-2 text-black hover:bg-gray-200 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
