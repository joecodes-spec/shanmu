"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TradeIcons() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-white flex flex-col md:flex-row min-h-[600px]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-24 py-20">
        <h2 className="text-4xl md:text-6xl font-black text-[#1c1c1c] mb-8 leading-tight tracking-tighter uppercase whitespace-pre-line">
          {t.trade_page.icons.title}
        </h2>
        <p className="max-w-md text-[#1c1c1c]/70 font-mono text-sm md:text-base leading-relaxed mb-12">
          {t.trade_page.icons.description}
        </p>
        <div className="flex gap-8">
          <a href="#" className="border-b-2 border-[#1c1c1c] text-[#1c1c1c] text-xs font-bold tracking-widest uppercase pb-1 hover:opacity-70 transition-opacity">
            {t.trade_page.icons.buttons.women}
          </a>
          <a href="#" className="border-b-2 border-[#1c1c1c] text-[#1c1c1c] text-xs font-bold tracking-widest uppercase pb-1 hover:opacity-70 transition-opacity">
            {t.trade_page.icons.buttons.men}
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative bg-black/5">
        <img 
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Market Icons" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
