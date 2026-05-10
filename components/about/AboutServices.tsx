"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function AboutServices() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#F5F3ED] text-[#1c1c1c] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
          <div className="max-w-md flex flex-col items-center md:items-end">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-[#1c1c1c]">
              {t.about_page.services.title}
            </h2>
            <p className="font-mono text-sm md:text-base leading-relaxed mb-10 opacity-90 text-center md:text-right text-[#1c1c1c]">
              {t.about_page.services.description}
            </p>
            <a 
              href="#where-we-go" 
              className="inline-block bg-[#4b7064] text-[#F5F3ED] px-8 py-4 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-[#1c1c1c] transition-colors duration-300"
            >
              {t.about_page.services.button}
            </a>
          </div>
        </div>

        {/* Right Side: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shrink-0 bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Trade and Travel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
