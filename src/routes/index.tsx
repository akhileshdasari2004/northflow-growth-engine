import { createFileRoute } from "@tanstack/react-router";
import { FloatingHeader } from "@/components/ui/floating-header";
import { Hero, HeroAnimations } from "@/components/ui/hero";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { DashboardSection } from "@/components/ui/dashboard-section";
import { HowItWorksSection, ImpactSection } from "@/components/ui/process-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTASection, Footer } from "@/components/ui/footer-section";
import { Features } from "@/components/ui/features-4";
import { useScrollAnimations, useNavbarScroll } from "@/components/ui/use-scroll-animations";

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
  useScrollAnimations();
  useNavbarScroll();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingHeader />
      <HeroAnimations />
      <main>
        <Hero
          primaryCta={{ label: "Start Free Audit", href: "#cta" }}
          secondaryCta={{ label: "See How It Works", href: "#how" }}
        />
        <TestimonialsSection
          testimonials={[
            {
              id: 1,
              name: "Mike Rodriguez",
              role: "Owner",
              company: "Rodriguez HVAC",
              content:
                "NorthFlow recovered over 40 missed calls in our first month. That's $15,000 in revenue we would have never seen. The team actually takes the time to understand our business.",
              rating: 5,
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              id: 2,
              name: "Jennifer Walsh",
              role: "Operations Manager",
              company: "Walsh Mechanical",
              content:
                "Our Google reviews went from 12 to 89 in six months. The automated request system is seamless and customers love it. Best investment we've made for our business.",
              rating: 5,
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              id: 3,
              name: "David Thompson",
              role: "Founder",
              company: "Thompson Air Solutions",
              content:
                "The membership program helped us build predictable monthly revenue. We went from $2k MRR to over $8k in annual plans. These guys actually deliver on their promises.",
              rating: 5,
              avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            },
          ]}
          trustedCompanies={["ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge", "Commusoft"]}
          trustedCompaniesTitle="Powering HVAC businesses across North America"
        />
        <FeaturesSection />
        <DashboardSection />
        <HowItWorksSection />
        <ImpactSection />
        <Features />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
