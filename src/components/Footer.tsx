import React from "react";
import { michroma } from "@/lib/fonts";
import Link from "next/link";
import { Linkedin, Instagram, Mail } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className={`bg-gradient-to-r from-blue-950 to-gray-900 text-gray-300 ${michroma.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
          {/* Brand/Logo and Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
              <Image
                src="/images/Logo/vdFooter.png"
                alt="Voxelyn Dynamics Logo"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-xl tracking-wide text-white">
                Voxelyn Dynamics
              </span>
            </div>
            <p className="max-w-xs text-sm mb-0 opacity-60">
              Your Next Digital Move
            </p>
          </div>

          {/* Navigation Links matching Nav component */}
          <nav className="flex flex-col items-center sm:flex-row gap-4 md:gap-8 text-base">
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-400 transition">
              Services
            </Link>
            <Link href="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex gap-5 items-center mt-4 md:mt-0">
            <a
              href="http://www.linkedin.com/company/voxelyndynamics"
              aria-label="LinkedIn"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </a>
            <a
              href="https://instagram.com/voxelyndynamics"
              aria-label="Instagram"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="mailto:voxelyndynamics@gmail.com"
              aria-label="Email"
              className="group"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 opacity-60" />
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 text-sm opacity-50">
          <span>
            © {new Date().getFullYear()} Voxelyn Dynamics. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
