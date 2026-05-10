"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function ConsultancyHero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#1c1c1c] text-[#F5F3ED] py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-2/3">
          <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase">
            {t.consulting_page.hero.title_part1} <br /> <span className="text-[#dfa63a]">{t.consulting_page.hero.title_part2}</span>
          </h1>
          <p className="mt-8 text-sm md:text-base font-mono tracking-widest uppercase opacity-60 max-w-md">
            {t.consulting_page.hero.description}
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end md:pr-12 lg:pr-20">
           <div className="w-full aspect-square bg-[#dfa63a] flex items-center justify-center p-8 transition-all duration-500 hover:scale-105"
                style={{
                  animation: 'jelly-morph 8s ease-in-out infinite',
                }}>
              <span className="text-4xl md:text-5xl font-serif italic text-[#1c1c1c] text-center select-none whitespace-pre-line">
                {t.consulting_page.hero.bubble}
              </span>
           </div>
           <style dangerouslySetInnerHTML={{ __html: `
              @keyframes jelly-morph {
                0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
                50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
              }
           `}} />
        </div>
      </div>
    </section>
  );
}
