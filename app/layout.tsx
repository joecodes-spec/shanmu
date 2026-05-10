import type { Metadata } from "next";
import { Inter, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHANMU.",
  description: "A worldwide network for the curated exchange of commodities, culture, and strategic foresight.",
};

import PageLoader from "@/components/layout/PageLoader";
import DynamicTitle from "@/components/layout/DynamicTitle";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-foreground selection:text-background">
        <LanguageProvider>
          <PageLoader />
          <DynamicTitle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
