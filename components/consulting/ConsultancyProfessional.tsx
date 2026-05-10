"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function ConsultancyProfessional() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#F5F3ED] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        <div className="w-full md:w-1/2">
           <div className="relative w-full aspect-video bg-[#1c1c1c] overflow-hidden">
              <img src="/images/consult-2.jpeg" alt="Professional Services" className="w-full h-full object-cover opacity-80" />
              <div className="absolute top-8 left-8 flex flex-col">
                 <span className="text-[40px] font-black text-[#dfa63a] leading-none">SHANMU</span>
                 <span className="text-xs text-white tracking-[0.4em] uppercase">
                   {t.consulting_page.professional.label}
                 </span>
              </div>
           </div>
        </div>

        <div className="w-full md:w-1/2">
           <h2 className="text-3xl md:text-4xl font-serif text-[#1c1c1c] mb-10 leading-tight">
             {t.consulting_page.professional.title_part1} <br /> <span className="italic">{t.consulting_page.professional.title_part2}</span>
           </h2>
           <ul className="flex flex-col gap-0 border-t border-[#1c1c1c]/10">
              {t.consulting_page.professional.services.map((service, idx) => (
                <li key={idx} className="py-6 border-b border-[#1c1c1c]/10 flex justify-between items-center group cursor-pointer">
                  <span className="text-sm font-mono uppercase tracking-widest text-[#1c1c1c]/70 group-hover:text-[#1c1c1c] transition-colors">
                    {service}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#1c1c1c]/10 flex items-center justify-center group-hover:bg-[#1c1c1c] group-hover:text-white transition-all">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </div>
                </li>
              ))}
           </ul>
        </div>

      </div>
    </section>
  );
}
