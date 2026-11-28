import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesPreview from "../components/home/ServicesPreview";
import TradingSection from "../components/home/TradingSection";
import QuoteCallout from "../components/home/QuoteCallout";
import CEOQuote from "../components/home/CEOQuote";
import DomesticSection from "../components/home/DomesticSection";
import RoadCTA from "../components/home/RoadCTA";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <TradingSection />
      <QuoteCallout />
      <CEOQuote />
      <DomesticSection />
      <RoadCTA />
    </div>
  );
}