import React from "react";
import { michroma } from "@/lib/fonts";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className={`bg-gradient-to-r from-blue-950 to-gray-900 text-gray-300 ${michroma.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand/Logo and Slogan */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              {/* Brand Logo or Emoji can go here */}
              <span className="font-bold text-xl tracking-wide text-white">
                Voxelyn Dynamics
              </span>
            </div>
            <p className="max-w-xs text-sm mb-0 opacity-60">
              Your Next Digital Move
            </p>
          </div>

          {/* Navigation Links matching Nav component */}
          <nav className="flex flex-col sm:flex-row gap-4 md:gap-8 text-base">
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
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* SVG Icon */}
              <svg
                className="w-6 h-6 fill-gray-400 group-hover:fill-blue-500 transition"
                viewBox="0 0 24 24"
              >
                <path d="M6.94 5.5a2.06 2.06 0 11-.001-4.119A2.06 2.06 0 016.94 5.5zM3.59 8.6H10.3v12.94H3.59zM14.33 8.6h6.19v2.04h.09c.86-1.62 2.73-2.16 4.21-2.16 4.51 0 5.34 2.96 5.34 6.8v7.2h-6.71v-6.36c0-1.52-.03-3.47-2.35-3.47-2.35 0-2.71 1.67-2.71 3.39v6.44h-6.71V8.6z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 fill-gray-400 group-hover:fill-pink-400 transition"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2c-1.64 0-2.46.07-3.32.3a5.06 5.06 0 00-1.81.75 5.05 5.05 0 00-1.38 1.38c-.34.47-.6.98-.75 1.81C.07 5.29 0 6.11 0 7.75v8.5c0 1.64.07 2.46.3 3.32.15.83.41 1.34.75 1.81.31.43.72.85 1.38 1.38.47.34.98.6 1.81.75.86.23 1.68.3 3.32.3h8.5c1.64 0 2.46-.07 3.32-.3.83-.15 1.34-.41 1.81-.75.43-.31.85-.72 1.38-1.38.34-.47.6-.98.75-1.81.23-.86.3-1.68.3-3.32v-8.5c0-1.64-.07-2.46-.3-3.32-.15-.83-.41-1.34-.75-1.81a5.05 5.05 0 00-1.38-1.38 5.06 5.06 0 00-1.81-.75C18.21.07 17.39 0 15.75 0h-8.5zm7.57 1.49c1.59 0 2.41.06 2.96.18.65.15 1.14.38 1.53.77.39.39.62.88.77 1.53.12.55.18 1.37.18 2.96v8.5c0 1.59-.06 2.41-.18 2.96-.15.65-.38 1.14-.77 1.53-.39.39-.88.62-1.53.77-.55.12-1.37.18-2.96.18h-8.5c-1.59 0-2.41-.06-2.96-.18-.65-.15-1.14-.38-1.53-.77-.39-.39-.62-.88-.77-1.53C1.55 18.71 1.49 17.89 1.49 16.3v-8.5c0-1.59.06-2.41.18-2.96.15-.65.38-1.14.77-1.53.39-.39.88-.62 1.53-.77.55-.12 1.37-.18 2.96-.18h8.5zM12 5.85a6.16 6.16 0 100 12.31 6.16 6.16 0 000-12.31zm0 10.16a3.99 3.99 0 110-7.97 3.99 3.99 0 010 7.97zm6.49-10.67a1.44 1.44 0 11-2.87 0 1.44 1.44 0 012.87 0z" />
              </svg>
            </a>
            <a
              href="mailto:contact@yourcompany.com"
              aria-label="Email"
              className="group"
            >
              <svg
                className="w-6 h-6 fill-gray-400 group-hover:fill-green-400 transition"
                viewBox="0 0 24 24"
              >
                <path d="M1.5 4.75A2.25 2.25 0 013.75 2.5H20.25A2.25 2.25 0 0122.5 4.75v14.5a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 19.25V4.75zm2.25-.25a.25.25 0 00-.25.25v.638l9 5.489 9-5.489V4.75a.25.25 0 00-.25-.25H3.75zm16.5 2.28L12 12.356 4.5 6.78v12.47c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25V6.78z" />
              </svg>
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
