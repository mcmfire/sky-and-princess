import { Suspense } from "react";
import Navbar from "@/components/elements/Navbar";
import PortfolioSection from "@/components/sections/PortfolioSection";
import HeroSection from "@/components/sections/HeroSection";
import ProgramSection from "@/components/sections/ProgramSection";
import RSVPSection from "@/components/sections/RSVPSection";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<></>}>
        <HeroSection />
        <Navbar />
        <PortfolioSection />
        <ProgramSection />
        <RSVPSection />
      </Suspense>
    </main >
  );
}
