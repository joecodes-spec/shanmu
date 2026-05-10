"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TourismHero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#dfa63a] flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-serif leading-[1.2] text-[#1c1c1c] tracking-tight uppercase font-black">
          {t.tourism_page.hero.title_part1} <br /> {t.tourism_page.hero.title_part2} <span className="italic">{t.tourism_page.hero.title_part3}</span>
        </h1>
        <p className="mt-8 text-sm md:text-base font-mono tracking-widest text-[#1c1c1c]/80 uppercase">
          {t.tourism_page.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
