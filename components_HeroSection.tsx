import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#1a1a1a] via-[#232526] to-[#414345] min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Elevate Your Real Estate Brand
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Bespoke marketing, automated social media, and intelligent productivity tools for the luxury real estate market.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-gold-400 to-yellow-300 text-gray-900 font-semibold rounded-full shadow-xl hover:scale-105 transition"
        >
          Book a Private Demo
        </a>
      </div>
    </section>
  );
}