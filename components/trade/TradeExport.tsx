"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TradeExport() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#1c1c1c] py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-[#dfa63a] text-xs font-bold tracking-[0.4em] uppercase mb-8">
          {t.trade_page.export.subtitle}
        </span>
        <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-12">
          {t.trade_page.export.title_part1} <span className="italic text-[#dfa63a]">{t.trade_page.export.title_part2}</span>
        </h2>
        <p className="max-w-2xl text-white/60 font-mono text-sm md:text-lg leading-relaxed mb-16">
          {t.trade_page.export.description}
        </p>
        <div className="w-full h-[1px] bg-white/10 mb-16"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
          {t.trade_page.export.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] font-bold text-[#dfa63a] uppercase tracking-widest mb-2">0{idx + 1}</span>
              <span className="text-white font-serif italic">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
