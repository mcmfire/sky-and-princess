import Navbar from "@/components/elements/Navbar";
import PortfolioSection from "@/components/sections/PortfolioSection";
import HeroSection from "@/components/sections/HeroSection";
import ProgramSection from "@/components/sections/ProgramSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Navbar />
      <PortfolioSection />
      <ProgramSection />
    </main>
  );
}
