"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function AboutWelcome() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#9ea692] text-[#1c1c1c] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Side: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Creative Yellow Accent */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-full bg-[#dfa63a] opacity-20 blur-2xl"></div>
            
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shrink-0 bg-black/5 z-10 border-4 border-[#dfa63a]/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/sam-1.jpeg" 
                alt="Global Network"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight max-w-lg text-[#1c1c1c]">
            {t.about_page.welcome.title}
          </h2>
          <p className="font-mono text-sm md:text-base leading-relaxed max-w-md opacity-90 text-[#1c1c1c]">
            {t.about_page.welcome.description}
          </p>
        </div>
      </div>
    </section>
  );
}
