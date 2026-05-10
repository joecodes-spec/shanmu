"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "@/context/LanguageContext";

const Counter = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * target));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return <>{count}{suffix}</>;
};

export default function IntelligenceSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const statValues = [
    { number: 15, suffix: "+" },
    { number: 50, suffix: "+" },
    { number: 99, suffix: "%" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="intelligence-section" 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#F0EDE3] text-[#1a1a1a] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-[1800px] w-full mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 pl-0 md:pl-8">
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase block mb-4 text-[#1a1a1a]/70">
            FILE: 003/CONSULTANCY
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
            {t.intelligence.title}
          </h2>
        </div>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {t.intelligence.stats.map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col border-l border-[#1a1a1a]/10 pl-6 md:pl-10 pr-4 md:pr-10 py-8 md:py-4 overflow-hidden"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] font-black tracking-tighter leading-none mb-6">
                <Counter target={statValues[i].number} suffix={statValues[i].suffix} isVisible={isVisible} />
              </div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase border-b border-[#1a1a1a]/10 pb-4 mb-6">
                {stat.label}
              </div>
              <p className="text-sm md:text-base font-serif leading-relaxed text-[#1a1a1a]/90">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
