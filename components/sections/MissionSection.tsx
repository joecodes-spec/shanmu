"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

const images = [
  { src: "/images/bus-1.jpeg", alt: "Global Trade" },
  { src: "/images/tourism-1.jpeg", alt: "Bespoke Travel" },
  { src: "/images/consult-2.jpeg", alt: "Strategic Advisory" },
  { src: "/images/bus-2.jpeg", alt: "Business Operations" },
  { src: "/images/tourism-2.jpeg", alt: "International Tours" },
  { src: "/images/consult-1.jpeg", alt: "Market Insights" },
  { src: "/images/edu-1.jpeg", alt: "Education Placement" },
  { src: "/images/edu-2.jpeg", alt: "Scholarship Support" },
  { src: "/images/swapi.jpg", alt: "Shanmu Enterprise" },
];

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <section id="mission-section" className="relative w-full bg-[#F5F3ED] text-[#1c1c1c] py-24 md:py-32 px-6">
      
      {/* Image Grid - Responsive Strategy */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 mb-16 md:mb-24 mt-8 md:mt-12">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`relative aspect-[3/2] overflow-hidden group bg-black/5 ${
              idx >= 3 ? "hidden lg:block" : "" // Show 3 on mobile/tablet, 9 on desktop
            } ${
              idx === 0 ? "sm:col-span-2 lg:col-span-1" : "" // First image wider on tablet
            }`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="max-w-4xl mx-auto text-center px-4 pb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1c1c1c] mb-10 leading-tight">
          {t.mission.title_part1}<span className="italic">{t.mission.title_part2}</span>
        </h2>
        
        <p className="text-sm md:text-base font-mono text-[#1c1c1c]/80 leading-relaxed mb-12 max-w-3xl mx-auto tracking-wide">
          {t.mission.description}
        </p>
        
        <Link 
          href="/about" 
          className="inline-block border-2 border-[#1c1c1c] px-8 py-4 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-[#1c1c1c] hover:text-[#F5F3ED] transition-colors duration-300"
        >
          {t.buttons.more_about_us}
        </Link>
      </div>

    </section>
  );
}
