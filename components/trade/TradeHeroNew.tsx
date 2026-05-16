"use client";

import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TradeHeroNew() {
  const { t } = useTranslation();

  return (
    <section id="trade-hero-new" className="relative w-full h-[90vh] md:h-screen bg-[#dfa63a] flex items-center justify-center overflow-hidden">
      {/* Background large image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/images/bg-rm-ports.png" 
          alt="Ports Background" 
          className="w-full h-full object-contain opacity-100 scale-110"
        />
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <div className="w-[1px] h-12 bg-[#1c1c1c]/30"></div>
      </div>
    </section>
  );
}
