"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

const carouselItems = [
  {
    image: "/images/sam-2.jpeg",
    subtitle: "Exclusive Tourism",
    title: "BEYOND BORDERS",
    description: "Bespoke itineraries and immersive travel experiences to the world's most breathtaking destinations.",
    buttonText: "View Experiences",
    href: "/tourism"
  },
  {
    image: "/images/consult-2.jpeg",
    subtitle: "Strategic Consultancy",
    title: "EXPERT FORESIGHT",
    description: "Unmatched advisory on international markets, strategic growth, and cross-border expansion.",
    buttonText: "Consult With Us",
    href: "/consulting"
  },
  {
    image: "/images/consult-1.jpeg",
    subtitle: "Global Solutions",
    title: "SOURCED ON DEMAND",
    description: "Providing seamless access to high-value commodities and professional services globally.",
    buttonText: "Explore Solutions",
    href: "/trade"
  },
  {
    image: "/images/edu-2.jpeg",
    subtitle: "Education & Scholarship",
    title: "ACADEMIC REACH",
    description: "Empowering students through scholarship advisory and study abroad placement in leading institutions.",
    buttonText: "Scholarship Support",
    href: "/consulting"
  }
];

export default function CoreValuesCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/sam-2.jpeg",
    "/images/consult-2.jpeg",
    "/images/consult-1.jpeg",
    "/images/edu-2.jpeg"
  ];

  const hrefs = [
    "/tourism",
    "/consulting",
    "/trade",
    "/consulting"
  ];

  useEffect(() => {
    const totalItems = images.length;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= totalItems ? 0 : next;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Bottom gradient to blend smoothly if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-80"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Subtitle */}
        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 opacity-90 transition-all duration-500">
          Shanmu • {t.carousel[currentIndex].subtitle}
        </span>

        {/* Main Title */}
        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-none mb-6 drop-shadow-lg transition-all duration-500 text-white">
          {t.carousel[currentIndex].title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg font-serif italic opacity-90 mb-10 max-w-2xl transition-all duration-500">
          {t.carousel[currentIndex].description}
        </p>

        {/* CTA Button */}
        <Link
          key={`carousel-link-${currentIndex}-${t.carousel[currentIndex].buttonText}`}
          href={hrefs[currentIndex]}
          className="inline-block px-8 py-3 border border-white text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 mb-16"
        >
          {t.carousel[currentIndex].buttonText}
        </Link>

        {/* Dots Indicator */}
        <div className="flex gap-3 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
