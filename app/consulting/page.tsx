import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import FooterInfo from "@/components/layout/FooterInfo";
import ConsultancyHero from "@/components/consulting/ConsultancyHero";
import ConsultancyEducation from "@/components/consulting/ConsultancyEducation";
import ConsultancyTrade from "@/components/consulting/ConsultancyTrade";
import ConsultancyProfessional from "@/components/consulting/ConsultancyProfessional";

export const metadata = {
  title: "Consulting | SHANMU.",
  description: "Expert guidance in education, trade, and professional consultancy.",
};

export default function ConsultingPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#1c1c1c] text-[#F5F3ED] overflow-hidden">
      <Header />
      <SideNav />

      <ConsultancyHero />
      <ConsultancyEducation />
      <ConsultancyTrade />
      <ConsultancyProfessional />

      <FooterInfo />
    </main>
  );
}
