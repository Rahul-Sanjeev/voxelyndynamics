"use client";

import React, { useState } from "react";
import { michroma } from "@/lib/fonts";
const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Capture reference before await

    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      form.reset(); // Use captured reference
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage((error as Error).message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen p-6 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video4.mp4" type="video/mp4" />
        {/* Optionally, provide a poster image as a fallback */}
      </video>

      {/* Optional: Add a dark or colored overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-purple-900/30 z-10 pointer-events-none" />

      {/* Main content */}
      <div
        className={`relative z-20 flex flex-col md:flex-row items-center justify-center w-full ${michroma.className}`}
      >
        <div className="w-full md:w-5/12 mb-12 md:mb-0 md:mr-14 text-white">
          <div className="bg-transparent bg-opacity-50 rounded-xl shadow-lg p-8 backdrop-blur-sm">
            <h2
              className={`text-3xl font-bold text-white mb-2 ${michroma.className}`}
            >
              Let&apos;s Connect
            </h2>

            <p className={`mb-6 text-white ${michroma.className}`}>
              Have an idea or project? <br /> Let&apos;s talk about it. <br />{" "}
              Fill the contact form or reach us directly.
            </p>

            <div className={`flex items-center mb-2 ${michroma.className}`}>
              <span className="mr-2">📧</span>
              <span>voxelyndyamics@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              <span>+91 7356 067 458</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12">
          <form
            onSubmit={handleSubmit}
            className={`bg-transparent bg-opacity-90 rounded-xl shadow-lg p-8 space-y-6 backdrop-blur-sm text-white ${michroma.className}`}
          >
            {status === "success" && (
              <div
                className={`text-green-400 bg-green-900/50 p-3 rounded mb-2 text-center border border-green-500 ${michroma.className}`}
              >
                Thank you! We will get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div
                className={`text-red-400 bg-red-900/50 p-3 rounded mb-2 text-center border border-red-500 ${michroma.className}`}
              >
                {errorMessage}
              </div>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-white font-semibold mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={status === "loading"}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none transition disabled:opacity-50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={status === "loading"}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none transition disabled:opacity-50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                disabled={status === "loading"}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none transition resize-vertical disabled:opacity-50"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 text-white font-bold hover:from-blue-800 hover:to-purple-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
