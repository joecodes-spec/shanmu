"use client";
import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section id="testimonials-section" className="relative w-full bg-[#9ea692] text-[#1c1c1c] py-24 md:py-32 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1c1c1c]">{t.testimonials.title}</h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-12">
        {t.testimonials.items.map((testimonial, idx) => (
          <div key={idx} className="flex flex-col">
            
            {/* The Box */}
            <div className="relative bg-[#1c1c1c] p-8 md:p-10 mb-6 flex-grow">
              <p className="font-serif text-sm md:text-base leading-relaxed text-[#F5F3ED]">
                {testimonial.quote}
              </p>
              
              {/* The Triangle */}
              <div 
                className="absolute -bottom-[20px] right-0 w-0 h-0"
                style={{
                  borderTop: '20px solid #dfa63a',
                  borderLeft: '20px solid transparent'
                }}
              />
            </div>
            
            {/* The Author */}
            <div className="text-right mt-1 pr-2">
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-[#1c1c1c]">
                — {testimonial.author}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
