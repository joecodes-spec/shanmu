"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TourismExperience() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#9ea692] text-[#1c1c1c] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center">
           <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-[#F5F3ED]/30">
              <img 
                src="/images/tourism-2.jpeg" 
                alt="Bespoke Experience"
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-[#1c1c1c]">
            {t.tourism_page.experience.title_part1} <br /> {t.tourism_page.experience.title_part2}
          </h2>
          <p className="font-mono text-sm md:text-base leading-relaxed max-w-md opacity-90 mb-10">
            {t.tourism_page.experience.description}
          </p>
          <a href="#" className="inline-block bg-[#1c1c1c] text-white px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#dfa63a] hover:text-[#1c1c1c] transition-all duration-300">
            {t.tourism_page.experience.button}
          </a>
        </div>

      </div>
    </section>
  );
}
