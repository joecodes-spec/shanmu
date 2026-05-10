"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function SideNav() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [isDarkText, setIsDarkText] = useState(false);

  const navItems = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.trade, href: "/trade" },
    { label: t.nav.tourism, href: "/tourism" },
    { label: t.nav.consulting, href: "/consulting" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const lightSections = [
        document.getElementById("intelligence-section"),
        document.getElementById("mission-section")
      ];

      let isOverLightSection = false;

      for (const section of lightSections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.2) {
            isOverLightSection = true;
            break;
          }
        }
      }

      setIsDarkText(isOverLightSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed right-0 top-[6%] md:top-[8%] w-12 md:w-20 flex flex-col items-center z-50 bg-transparent">
      <ul className="flex flex-col gap-4 md:gap-5 items-center w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="w-full flex flex-col items-center gap-2 group">
              <Link
                href={item.href}
                className={`text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 hover:opacity-70 ${
                  isActive 
                    ? "text-[#dfa63a]" 
                    : isDarkText ? "text-[#1a1a1a]" : "text-white"
                }`}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                {item.label}
              </Link>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#dfa63a] animate-pulse" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
