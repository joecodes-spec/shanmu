"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function ConsultancyEducation() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#F5F3ED] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Overlapping Image Composition */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
          <div className="absolute top-0 left-0 w-3/4 h-3/4 z-10 border-8 border-white shadow-2xl overflow-hidden">
             <img src="/images/edu-1.jpeg" alt="Education 1" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 z-0 border-8 border-[#dfa63a]/20 overflow-hidden">
             <img src="/images/edu-2.jpeg" alt="Education 2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="text-[#dfa63a] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            {t.consulting_page.education.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-[#1c1c1c] whitespace-pre-line">
            {t.consulting_page.education.title}
          </h2>
          <p className="font-mono text-sm md:text-base leading-relaxed text-[#1c1c1c]/80 mb-8 max-w-lg">
            {t.consulting_page.education.description}
          </p>
          <div className="flex flex-col gap-4 w-full">
            <div className="p-6 bg-[#dfa63a] border-l-8 border-[#1c1c1c] flex justify-between items-center group cursor-pointer hover:bg-[#1c1c1c] transition-all duration-500 shadow-xl">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1c1c1c] group-hover:text-[#dfa63a]">
                {t.consulting_page.education.button}
              </span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1c1c1c] text-[#dfa63a] group-hover:bg-[#dfa63a] group-hover:text-[#1c1c1c] transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
