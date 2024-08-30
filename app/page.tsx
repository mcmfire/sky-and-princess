import Navbar from "@/components/elements/Navbar";
import PortfolioSection from "@/components/sections/PortfolioSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Navbar />
      <PortfolioSection />
    </main>
  );
}
