"use client";

import React from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TradeProcess() {
  const { t } = useTranslation();

  const steps = [
    { 
      num: "01", 
      title: "Consultation", 
      desc: "We align with your vision and specific sourcing requirements." 
    },
    { 
      num: "02", 
      title: "Verification", 
      desc: "Vetting global manufacturers for quality and ethical compliance." 
    },
    { 
      num: "03", 
      title: "Logistics", 
      desc: "Seamless cross-border handling, duties, and transportation." 
    },
    { 
      num: "04", 
      title: "Delivery", 
      desc: "Direct fulfillment to your specified global destination." 
    }
  ];

  return (
    <section className="relative w-full bg-[#F5F3ED] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#dfa63a] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#1c1c1c] leading-tight">
              The Path from <br /> <span className="italic">Concept to Doorstep.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[#1c1c1c]/60 font-mono text-xs uppercase tracking-widest leading-loose">
            Precision-engineered sourcing that removes the complexity of global trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col group">
              <span className="text-5xl md:text-6xl font-black text-[#dfa63a]/20 mb-6 group-hover:text-[#dfa63a] transition-colors duration-500">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-[#1c1c1c] mb-4 uppercase tracking-tighter">
                {step.title}
              </h3>
              <p className="text-sm text-[#1c1c1c]/70 font-mono leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
