"use client";

import React from "react";
import { michroma } from "@/lib/fonts";

export default function Nav() {
  return (
    <nav
      className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white bg-opacity-10 rounded-full px-6 py-3 border border-white border-opacity-20 ${michroma.className}`}
    >
      <div className="flex items-center space-x-8">
        <div className="text-black font-bold text-lg">Voxelyn Dynamics</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
