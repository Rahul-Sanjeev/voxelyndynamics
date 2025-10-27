import React, { useState } from "react";
import { michroma } from "@/lib/fonts";
const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Thank you for reaching out!");
    e.currentTarget.reset();
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
              <span>contact@voxelyndyamics.com</span>
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
            {status && (
              <div
                className={`text-green-600 mb-2 text-center ${michroma.className}`}
              >
                {status}
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
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
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
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
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
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:outline-none transition resize-vertical"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 text-white font-bold hover:from-blue-800 hover:to-purple-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
