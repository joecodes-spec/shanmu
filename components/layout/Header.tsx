import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-6 left-6 md:top-10 md:left-12 z-50">
      <Link href="/">
        <img 
          src="/images/logo.png" 
          alt="SHANMU ENTERPRISE" 
          className="h-20 md:h-28 w-auto object-contain" 
        />
      </Link>
    </header>
  );
}
