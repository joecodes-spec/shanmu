import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import HeroTitle from "@/components/hero/HeroTitle";
import HeroDetails from "@/components/hero/HeroDetails";
import FooterInfo from "@/components/layout/FooterInfo";
import ManifestSection from "@/components/sections/ManifestSection";
import ExcursionSection from "@/components/sections/ExcursionSection";
import MissionSection from "@/components/sections/MissionSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import CoreValuesCarousel from "@/components/sections/CoreValuesCarousel";
import TradeHighlight from "@/components/sections/TradeHighlight";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      <Header />
      <SideNav />
      <TradeHighlight />

      <div className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-32 bg-background">
        <HeroTitle />
        <HeroDetails />
      </div>
      <ManifestSection />

      <ExcursionSection />

      <MissionSection />

      <TestimonialsSection />

      <IntelligenceSection />

      <CoreValuesCarousel />

      <FooterInfo />
    </main>
  );
}
