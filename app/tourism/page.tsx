import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import FooterInfo from "@/components/layout/FooterInfo";
import TourismHero from "@/components/tourism/TourismHero";
import TourismBridge from "@/components/tourism/TourismBridge";
import TourismExperience from "@/components/tourism/TourismExperience";
import TourismCallToAction from "@/components/tourism/TourismCallToAction";

export const metadata = {
  title: "Tourism | SHANMU.",
  description: "Bespoke cultural exchange and tourism between Ghana and China.",
};

export default function TourismPage() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      <Header />
      <SideNav />

      <TourismHero />
      <TourismBridge />
      <TourismExperience />
      <TourismCallToAction />

      <FooterInfo />
    </main>
  );
}
