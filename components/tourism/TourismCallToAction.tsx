"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TourismCallToAction() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#dfa63a] py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#1c1c1c] mb-8 leading-tight">
          {t.tourism_page.cta.title_part1} <br /> <span className="italic">{t.tourism_page.cta.title_part2}</span>
        </h2>
        <p className="text-sm md:text-base font-mono text-[#1c1c1c]/80 uppercase tracking-widest mb-12">
          {t.tourism_page.cta.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="/contact" className="px-8 py-4 border-2 border-[#1c1c1c] text-[10px] font-bold tracking-widest uppercase hover:bg-[#1c1c1c] hover:text-[#dfa63a] transition-all duration-300">
            {t.tourism_page.cta.buttons.advisor}
          </a>
          <a href="/about" className="px-8 py-4 bg-[#1c1c1c] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#1c1c1c]/90 transition-all duration-300">
            {t.tourism_page.cta.buttons.more}
          </a>
        </div>
      </div>
    </section>
  );
}
