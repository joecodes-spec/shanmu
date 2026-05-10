"use client";
import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export default function HeroTitle() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full z-10 select-none pointer-events-none mt-12 md:mt-20">
      <div className="text-[12vw] sm:text-[10vw] lg:text-[11vw] leading-[1.1] md:leading-[0.85] font-black tracking-tighter text-foreground uppercase flex flex-wrap gap-x-4 md:gap-x-8 items-center">
        <span>{t.hero.import}</span>
        <span>{t.hero.export}</span>
        <span>{t.hero.tourism}</span>
        <span>{t.hero.consultancy}</span>
        <span className="text-[#dfa63a] text-[10.5vw] sm:text-[10vw] lg:text-[11vw]">{t.hero.consultancy}</span>
      </div>
    </div>
  );
}
