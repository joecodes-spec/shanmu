"use client";
import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TradeCategories() {
  const { t } = useTranslation();

  const categoryImages = [
    "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section className="relative w-full bg-[#dfa63a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#1c1c1c] uppercase tracking-tighter">
            {t.trade_page.categories.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.trade_page.categories.items.map((cat, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden bg-[#1c1c1c]">
              <img 
                src={categoryImages[idx]} 
                alt={cat.name} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h3 className="text-xl font-bold text-white uppercase mb-2">{cat.name}</h3>
                <p className="text-[10px] text-white/60 font-mono uppercase tracking-widest">{cat.items}</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full border border-white/0 group-hover:border-white/20 transition-all pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
