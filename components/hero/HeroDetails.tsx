"use client";
import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export default function HeroDetails() {
  const { t } = useTranslation();

  return (
    <div className="mt-8 md:mt-16 w-full flex flex-col md:flex-row justify-between items-start lg:items-end gap-12 pr-4 md:pr-12">
      
      {/* Stats Section */}
      <div className="flex gap-12 md:gap-24">
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
            {t.hero.details.operations}
          </span>
          <span className="text-sm md:text-base font-extrabold uppercase">
            {t.hero.details.logistics}
          </span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">
            {t.hero.details.expertise}
          </span>
          <span className="text-sm md:text-base font-extrabold uppercase">
            {t.hero.details.tourism_consultancy}
          </span>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-md lg:max-w-xl text-lg md:text-2xl lg:text-3xl font-serif italic leading-snug">
        {t.hero.details.description}
      </div>
      
    </div>
  );
}
