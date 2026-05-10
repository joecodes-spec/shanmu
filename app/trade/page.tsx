import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import FooterInfo from "@/components/layout/FooterInfo";
import TradeHero from "@/components/trade/TradeHero";
import TradeIcons from "@/components/trade/TradeIcons";
import TradeCategories from "@/components/trade/TradeCategories";
import TradeExport from "@/components/trade/TradeExport";

export const metadata = {
  title: "Import & Export | SHANMU.",
  description: "Seamless global trade and sourcing based on your unique needs.",
};

export default function TradePage() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-hidden">
      <Header />
      <SideNav />

      <TradeHero />
      <TradeIcons />
      <TradeCategories />
      <TradeExport />

      <FooterInfo />
    </main>
  );
}
