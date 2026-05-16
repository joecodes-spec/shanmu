"use client";

import React from 'react';

export default function TradeShowcase() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <img 
        src="/images/observe-export-import.jpg" 
        alt="Global Sourcing" 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white italic leading-tight">
            "We don't just move cargo. We cultivate the global supply lines that empower your unique vision."
          </h2>
          <div className="mt-12 w-24 h-[2px] bg-[#dfa63a] mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
