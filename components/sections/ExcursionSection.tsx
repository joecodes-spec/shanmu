"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function ExcursionSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[#9ea692] text-foreground flex items-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-[1800px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

        {/* Left Side: Image */}
        <div className="lg:col-span-7 w-full h-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="City at night"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="border-b border-black/20 pb-4 mb-10">
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              FILE: 002/TOURISM
            </span>
          </div>

          <h2 className="flex flex-col text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase leading-[0.85] mb-8 break-words">
            <span>{t.excursion.title_part1}</span>
            <span className="font-serif italic font-normal tracking-normal">{t.excursion.title_part2}</span>
          </h2>

          <p className="text-sm md:text-base font-medium leading-relaxed max-w-md text-foreground/80 mb-12">
            {t.excursion.description}
          </p>

          <div>
            <Link href="/tourism" className="inline-block border-b border-black text-[10px] md:text-xs font-bold tracking-widest uppercase pb-1 hover:opacity-70 transition-opacity">
              {t.buttons.explore_destinations}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
