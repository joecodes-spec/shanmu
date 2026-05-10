"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function AboutFounder() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#F5F3ED] px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 md:gap-10">
          {/* Top Left Image */}
          <div className="w-full h-[400px] md:h-[550px] bg-black/5 relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Global Journey" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Bottom Left Image */}
          <div className="w-full h-[350px] md:h-[450px] bg-black/5 relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Partnership" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 md:gap-10 pt-0 md:pt-12">
          {/* Quote Block */}
          <div className="flex flex-col mb-4 md:mb-0">
            <div className="relative bg-[#dfa63a] p-8 md:p-12 mb-8 md:mb-6">
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.8] text-[#1c1c1c]">
                {t.about_page.founder.quote}
              </p>
              
              {/* The Triangle Tail */}
              <div 
                className="absolute -bottom-[24px] right-0 w-0 h-0"
                style={{
                  borderTop: '24px solid #dfa63a',
                  borderLeft: '24px solid transparent'
                }}
              />
            </div>
            
            {/* Author */}
            <div className="text-right pr-2">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-[#4b7064]">
                &mdash; {t.about_page.founder.author}
              </span>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="w-full h-[400px] md:h-[500px] bg-black/5 relative overflow-hidden mt-4 md:mt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
