import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import IndustriesStrip from "@/components/sections/IndustriesStrip";
import StatsSection from "@/components/sections/StatsSection";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <IndustriesStrip />
      <StatsSection />
      <CTABand />
    </>
  );
}
