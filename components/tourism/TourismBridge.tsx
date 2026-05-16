"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TourismBridge() {
  const { t } = useTranslation();

  return (
    <section id="tourism-bridge" className="relative w-full bg-[#F5F3ED] text-[#1c1c1c] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-[#1c1c1c]">
            {t.tourism_page.bridge.title_part1} <br /> {t.tourism_page.bridge.title_part2}
          </h2>
          <p className="font-mono text-sm md:text-base leading-relaxed max-w-md opacity-90 mb-8">
            {t.tourism_page.bridge.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 px-4 py-2 border border-[#1c1c1c] text-[10px] font-bold tracking-widest uppercase">
              {t.tourism_page.bridge.routes.gh_to_cn.split(' to ')[0]} 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              {t.tourism_page.bridge.routes.gh_to_cn.split(' to ')[1] || t.tourism_page.bridge.routes.gh_to_cn.split(' 往返 ')[1]}
            </div>
            <div className="flex items-center gap-3 px-4 py-2 border border-[#1c1c1c] text-[10px] font-bold tracking-widest uppercase">
              {t.tourism_page.bridge.routes.cn_to_gh.split(' to ')[0]} 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              {t.tourism_page.bridge.routes.cn_to_gh.split(' to ')[1] || t.tourism_page.bridge.routes.cn_to_gh.split(' 往返 ')[1]}
            </div>
          </div>
        </div>

        {/* Right Side: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
             <div className="absolute -top-6 -right-6 w-full h-full rounded-full bg-[#dfa63a] opacity-10 blur-3xl"></div>
             <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-[#9ea692]/20">
                <img 
                  src="/images/tourism-1.jpeg" 
                  alt="Cultural Exchange"
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
