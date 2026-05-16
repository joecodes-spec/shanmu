"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function TradeHighlight() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-black pt-20">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-2xl">
          <span className="text-[#dfa63a] text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
            {t.trade_page.hero.subtitle}
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
            {t.trade_page.hero.title_part1} <br /> <span className="italic text-[#dfa63a]">{t.trade_page.hero.title_part2}</span>
          </h2>
          <p className="text-white/70 font-mono text-sm md:text-base lg:text-lg leading-relaxed mb-12 uppercase tracking-wide">
            {t.trade_page?.hero?.description || "From high-performance vehicles to luxury fashion, we source and deliver exactly what you need, when you need it."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <Link 
              href="/trade" 
              className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase border-b-2 border-[#dfa63a] pb-2 hover:opacity-70 transition-all w-fit"
            >
              {t.trade_page?.hero?.buttons?.imports || "Shop Imports"}
            </Link>
            <Link 
              href="/trade#export-solutions" 
              className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase border-b-2 border-white/30 pb-2 hover:border-white transition-all w-fit"
            >
              {t.trade_page?.hero?.buttons?.export || "Export Inquiry"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
