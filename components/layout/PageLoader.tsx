"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setIsVisible(true);
    setIsAnimating(false);
    
    // Initial hold time to let the logo be seen
    const startTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, 400);

    // Fade out after a longer duration for impact
    const endTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(endTimeout);
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#1c1c1c] transition-opacity duration-1000 ${
      isAnimating ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className={`transition-all duration-[1800ms] ease-[cubic-bezier(0.7,0,0.3,1)] transform ${
        isAnimating ? 'scale-[35] blur-sm' : 'scale-50 blur-0'
      }`}>
        <img 
          src="/images/logo.png" 
          alt="SHANMU" 
          className="w-40 h-auto object-contain"
        />
      </div>
    </div>
  );
}
