"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function ConsultancyTrade() {
  const { t } = useTranslation();

  const tradeServiceImages = [
    "/images/bus-1.jpeg",
    "/images/bus-2.jpeg",
    "/images/consult-1.jpeg"
  ];

  return (
    <section className="relative w-full bg-[#dfa63a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1c1c1c] leading-none uppercase italic font-black whitespace-pre-line">
            {t.consulting_page.trade.title}
          </h2>
          <p className="max-w-xs font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#1c1c1c]/80 text-right">
            {t.consulting_page.trade.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {t.consulting_page.trade.services.map((service, idx) => (
            <div key={idx} className="relative group aspect-[4/5] overflow-hidden bg-[#1c1c1c]">
              <img 
                src={tradeServiceImages[idx]} 
                alt={service} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                 <span className="text-[10px] font-bold text-white tracking-widest uppercase">0{idx + 1}</span>
                 <h3 className="text-xl md:text-2xl font-serif text-white leading-tight uppercase">{service}</h3>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
