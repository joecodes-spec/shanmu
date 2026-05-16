"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function SideNav() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [navTheme, setNavTheme] = useState<'default' | 'dark' | 'yellow'>('default');

  const navItems = [
    { label: t.nav.trade, href: "/trade" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.tourism, href: "/tourism" },
    { label: t.nav.consulting, href: "/consulting" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const yellowSections = [
        document.getElementById("trade-hero-new"),
        document.getElementById("tourism-hero"),
        document.getElementById("tourism-cta")
      ];
      
      const lightSections = [
        document.getElementById("intelligence-section"),
        document.getElementById("mission-section"),
        document.getElementById("tourism-bridge"),
        document.getElementById("consultancy-edu")
      ];

      let isOverYellow = false;
      let isOverLight = false;

      const checkIntersection = (sections: (HTMLElement | null)[]) => {
        for (const section of sections) {
          if (section) {
            const rect = section.getBoundingClientRect();
            // Checking if the nav (around top 10%) is over the section
            if (rect.top <= window.innerHeight * 0.2 && rect.bottom >= window.innerHeight * 0.1) {
              return true;
            }
          }
        }
        return false;
      };

      isOverYellow = checkIntersection(yellowSections);
      isOverLight = checkIntersection(lightSections);

      if (isOverYellow) {
        setNavTheme('yellow');
      } else if (isOverLight) {
        setNavTheme('dark');
      } else {
        setNavTheme('default');
      }
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
                    ? navTheme === 'yellow' ? "text-[#1c1c1c]" : "text-[#dfa63a]" 
                    : navTheme === 'default' ? "text-white" : "text-[#1c1c1c]"
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
                <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  navTheme === 'yellow' ? "bg-[#1c1c1c]" : "bg-[#dfa63a]"
                }`} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
