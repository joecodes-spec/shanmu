import Header from "@/components/layout/Header";
import SideNav from "@/components/layout/SideNav";
import FooterInfo from "@/components/layout/FooterInfo";

import AboutHero from "@/components/about/AboutHero";
import AboutWelcome from "@/components/about/AboutWelcome";
import AboutServices from "@/components/about/AboutServices";
import AboutConnections from "@/components/about/AboutConnections";
import AboutFounder from "@/components/about/AboutFounder";
import AboutTopImage from "@/components/about/AboutTopImage";

export const metadata = {
  title: "About Us | SHANMU.",
  description: "Learn more about Shanmu, a worldwide network for the curated exchange of commodities, culture, and strategic foresight.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
      {/* Include Header and Sidebar like the main page */}
      <Header />
      <SideNav />

      {/* About Sections */}
      <AboutTopImage />
      <AboutHero />
      <AboutWelcome />
      <AboutServices />
      <AboutConnections />
      <AboutFounder />

      {/* Include Footer */}
      <FooterInfo />
    </main>
  );
}
