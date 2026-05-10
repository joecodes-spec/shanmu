"use client";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

export default function ManifestTextGrid() {
  const { t } = useTranslation();

  const hrefs = ["/trade", "/tourism", "/consulting"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full pl-0 md:pl-24 pr-4 md:pr-12 mt-8 md:mt-12 pb-24">
      {t.expertise.items.map((block, i) => (
        <div key={i} className="flex flex-col border-t border-white/20 pt-6">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/70 uppercase mb-4">
            {block.category}
          </span>
          <p className="text-xl md:text-2xl font-serif text-white/90 leading-snug mb-6">
            {block.description}
          </p>
          <Link 
            href={hrefs[i]} 
            className="group flex items-center gap-2 text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-[#dfa63a] hover:opacity-70 transition-opacity mt-auto"
          >
            {t.buttons.explore_channel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform duration-300 group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
