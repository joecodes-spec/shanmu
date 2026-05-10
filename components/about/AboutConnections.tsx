"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function AboutConnections() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#9ea692] text-[#1c1c1c] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Side: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shrink-0 bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Meaningful Connections"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="max-w-md flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-[#1c1c1c]">
              {t.about_page.connections.title}
            </h2>
            <p className="font-mono text-sm md:text-base leading-relaxed mb-10 opacity-90 text-center md:text-left text-[#1c1c1c]">
              {t.about_page.connections.description}
            </p>
            <a 
              href="#join-us" 
              className="inline-block bg-[#4b7064] text-[#F5F3ED] px-8 py-4 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-[#1c1c1c] transition-colors duration-300"
            >
              {t.about_page.connections.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
