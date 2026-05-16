"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

export default function FooterInfo() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "EN" as const, name: "English" },
    { code: "CH" as const, name: "Chinese" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#1c1c1c] text-white px-6 md:px-12 lg:px-24 py-24 min-h-[60vh] flex flex-col justify-between z-10">
      <div className="max-w-[1800px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 flex-1">

        {/* Left Side: Text Section */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
            {t.footer.connect.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word}{i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <div className="w-20 md:w-24 h-2 bg-[#dfa63a]"></div>
        </div>

        {/* Right Side: Information */}
        <div className="lg:col-span-8 flex flex-col justify-center lg:pl-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-20 md:mb-24 mt-12 lg:mt-0">
            {/* Headquarters */}
            <div className="flex flex-col">
              <span className="text-[#dfa63a] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
                {t.footer.locations}
              </span>
              <div className="flex flex-col gap-6 text-sm md:text-base font-sans text-white/90">
                <div>
                  <p className="font-bold text-white mb-1 uppercase tracking-wider">Ghana</p>
                  <p className="whitespace-nowrap">Central Region, Kasoa</p>
                </div>
                <div>
                  <p className="font-bold text-white mb-1 uppercase tracking-wider">China</p>
                  <p className="whitespace-nowrap">Sichuan Province, Chengdu</p>
                </div>
                <div className="mt-2">
                  <span className="text-[#dfa63a] text-[8px] font-bold tracking-widest uppercase block mb-1">{t.footer.enquiries}</span>
                  <p className="font-bold text-white lowercase whitespace-nowrap overflow-visible mb-1">isaackwesisam@shanmuafrica.com</p>
                  <p className="font-bold text-white whitespace-nowrap overflow-visible">+233547281509</p>
                </div>
              </div>
            </div>

            {/* Channels */}
            <div className="flex flex-col">
              <span className="text-[#dfa63a] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
                {t.footer.channels}
              </span>
              <div className="flex flex-col gap-4 text-base md:text-lg font-serif  text-white/90 uppercase">
                <Link href="/trade" className="hover:text-[#dfa63a] transition-all">{t.nav.trade}</Link>
                <Link href="/tourism" className="hover:text-[#dfa63a] transition-all">{t.nav.tourism}</Link>
                <Link href="/consulting" className="hover:text-[#dfa63a] transition-all">{t.nav.consulting}</Link>
                <Link href="/about" className="hover:text-[#dfa63a] transition-all">{t.nav.about}</Link>
              </div>
            </div>

            {/* Socials & Language */}
            <div className="flex flex-col justify-between min-h-[160px]">
              <div>
                <span className="text-[#dfa63a] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6 block">
                  {t.footer.socials}
                </span>
                <div className="flex gap-6 text-white/90 mb-10">
                  <a 
                    href="https://www.tiktok.com/@shanmu.enterprise?_r=1&_t=ZS-96MTQtA7Vw0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#dfa63a] transition-all" 
                    aria-label="TikTok"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.14-.08-.26-.17-.38-.27v7.34c0 5.54-4.46 10.03-10.02 10.03-4.3 0-8.02-2.69-9.42-6.5-.4-1.08-.6-2.23-.6-3.4 0-5.54 4.46-10.02 10.02-10.02.1 0 .2 0 .3.01V7.12c-1.32.12-2.52.74-3.41 1.7-.89.96-1.39 2.24-1.39 3.58 0 2.91 2.37 5.28 5.28 5.28.18 0 .35-.01.53-.04.18-.03.36-.07.53-.11 1.74-.43 3.01-1.99 3.01-3.84V.02z"/></svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/shanmuenterprise?igsh=MTlzdHo1amNrNmdiMA%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#dfa63a] transition-all" 
                    aria-label="Instagram"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
                  </a>
                </div>
              </div>

              {/* Enhanced Language Switcher in Footer */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between w-full max-w-[140px] px-4 py-3 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dfa63a" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    <span className="text-[12px] font-black tracking-widest">{language}</span>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
                </button>

                {isOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-[140px] bg-[#262626] border border-white/10 shadow-2xl py-2 z-50">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLanguage(l.code); setIsOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold tracking-widest uppercase ${language === l.code ? "text-[#dfa63a] bg-white/5" : "text-white/60 hover:text-white hover:bg-white/10"}`}
                      >
                        {l.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Right Border & Copyright */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-white/60">
              @2026 SHANMU ALL RIGHTS RESERVED
            </span>
            <div className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-[#dfa63a]">
              BUILT WITH <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg> BY A GEE
            </div>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 lg:right-24">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 hover:bg-white hover:text-[#1c1c1c] transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <svg
            width="20" height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
