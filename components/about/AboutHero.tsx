"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#dfa63a] flex flex-col justify-center items-center text-center px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[22px] md:text-[26px] lg:text-[32px] font-serif leading-[1.6] text-[#1c1c1c] tracking-wide">
          {t.about_page.hero.title_part1} <br className="hidden md:block" />
          {t.about_page.hero.title_part2} <br className="hidden md:block" />
          {t.about_page.hero.title_part3} <span className="italic">{t.about_page.hero.title_part4}</span>
        </h1>
      </div>
    </section>
  );
}
