import { createFileRoute } from "@tanstack/react-router";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ImpactSection from "@/components/ImpactSection";
import ExtrasSection from "@/components/ExtrasSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "NorthFlow HVAC Growth — Recover Missed Calls, Grow Reviews & Memberships",
      },
      {
        name: "description",
        content:
          "Growth infrastructure for HVAC contractors: recover missed calls, multiply Google reviews, and build recurring maintenance membership revenue.",
      },
      { property: "og:title", content: "NorthFlow HVAC Growth" },
      {
        property: "og:description",
        content:
          "Recover missed calls, grow reviews, and build recurring membership revenue for your HVAC business.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <ImpactSection />
        <ExtrasSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
