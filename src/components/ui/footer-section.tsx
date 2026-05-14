"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SpotlightBackground from "@/components/ui/spotlight-background";
import { cn } from "@/lib/utils";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Clock,
  Shield,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { motion } from "motion/react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Missed Call Recovery", href: "#services" },
      { title: "Review Growth", href: "#services" },
      { title: "Membership Programs", href: "#services" },
      { title: "Lead Routing", href: "#services" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Contact", href: "#cta" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "FAQs", href: "#faq" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Cookie Policy", href: "#" },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "#", icon: Facebook },
      { title: "Instagram", href: "#", icon: Instagram },
      { title: "Youtube", href: "#", icon: Youtube },
      { title: "LinkedIn", href: "#", icon: Linkedin },
    ],
  },
];

export function CTASection() {
  return (
    <section id="cta" className="py-0 relative overflow-hidden bg-gradient-to-b from-background to-[oklch(0.98_0.004_90)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Card className="cta-animate relative overflow-hidden border-[oklch(0.65_0.18_50/0.4)] bg-gradient-to-br from-[oklch(0.99_0.005_90)] to-[oklch(0.96_0.008_90)]/90 backdrop-blur-md shadow-2xl shadow-[oklch(0.65_0.18_50/0.15)]">
            <CardDecorator />
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="block w-7 h-px bg-[oklch(0.65_0.18_50)]" />
                <Badge variant="eyebrow">GET STARTED</Badge>
                <span className="block w-7 h-px bg-[oklch(0.65_0.18_50)]" />
              </div>

              <h2 className="text-4xl md:text-5xl font-sans text-foreground mb-4">
                See your revenue leaks in 15 minutes
              </h2>

              <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8">
                A no-pressure walkthrough of where your shop is leaving money on the table — and exactly how we&apos;d plug it.
              </p>

              <a href="https://calendly.com/akhileshdasari2004/new-meeting" target="_blank" rel="noopener noreferrer">
                <Button size="xl" className="bg-gradient-to-r from-[oklch(0.65_0.18_50)] to-[oklch(0.55_0.22_45)] text-white hover:opacity-90 shadow-lg shadow-[oklch(0.65_0.18_50/0.3)]">
                  Book Your Free Audit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>

              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-[oklch(0.88_0.015_90/0.3)]">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-[oklch(0.65_0.18_50)]" />
                  <span className="text-sm">15-minute call</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="w-4 h-4 text-[oklch(0.65_0.18_50)]" />
                  <span className="text-sm">No commitment</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="w-4 h-4 text-[oklch(0.65_0.18_50)]" />
                  <span className="text-sm">100% free</span>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}

const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-[oklch(0.65_0.18_50)]" />
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-[oklch(0.65_0.18_50)]" />
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-[oklch(0.65_0.18_50)]" />
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-[oklch(0.65_0.18_50)]" />
  </>
);

export function Footer() {
  const shouldReduceMotion = false;
  
  const AnimatedContainer = ({ className, delay = 0.1, children }: { className?: string; delay?: number; children: React.ReactNode }) => {
    if (shouldReduceMotion) {
      return <>{children}</>;
    }
    return (
      <motion.div
        initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
        whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,oklch(0.65_0.18_50/0.08),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-[oklch(0.65_0.18_50)]/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.65_0.18_50)] to-[oklch(0.55_0.22_45)] flex items-center justify-center">
            <Zap className="size-5 text-white" />
          </div>
          <p className="text-muted-foreground mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} NorthFlow. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-medium text-foreground">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-[oklch(0.65_0.18_50)] inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}