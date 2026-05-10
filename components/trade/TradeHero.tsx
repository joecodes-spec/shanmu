"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from "@/context/LanguageContext";

export default function TradeHero() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {
            // Handle silent fail (e.g. user hasn't interacted yet)
          });
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback failed:", err);
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onPlay={handlePlay}
        onPause={handlePause}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-20 md:pb-32">
        <h1 className="text-[12vw] md:text-[10vw] font-black text-white leading-none tracking-tighter uppercase">
          {t.trade_page.hero.title_part1} <br /> {t.trade_page.hero.title_part2}
        </h1>
        <p className="mt-6 max-w-md text-white/80 font-mono text-sm md:text-base leading-relaxed">
          {t.trade_page.hero.description}
        </p>
        <div className="mt-10 flex gap-6">
          <button className="border-b-2 border-white text-white text-xs font-bold tracking-widest uppercase pb-1 hover:opacity-70 transition-opacity">
            {t.trade_page.hero.buttons.imports}
          </button>
          <button className="border-b-2 border-white text-white text-xs font-bold tracking-widest uppercase pb-1 hover:opacity-70 transition-opacity">
            {t.trade_page.hero.buttons.export}
          </button>
        </div>
      </div>

      {/* Play/Pause Control */}
      <button
        onClick={togglePlay}
        type="button"
        className="absolute bottom-10 right-10 z-[100] w-16 h-16 flex items-center justify-center rounded-full border-2 border-white/40 text-white hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer pointer-events-auto"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        )}
      </button>
    </section>
  );
}
