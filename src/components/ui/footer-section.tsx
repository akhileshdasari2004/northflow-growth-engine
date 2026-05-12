"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SpotlightBackground from "@/components/ui/spotlight-background";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, ArrowRight, Zap, Clock, Shield, Star, FrameIcon, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function CTASection() {
  return (
    <section id="cta" className="py-16 md:py-32 relative overflow-hidden">
      <SpotlightBackground>
        <div className="relative z-10">
        <Card className="relative overflow-hidden border-[oklch(0.65_0.18_50/0.4)] bg-background/80 backdrop-blur-md shadow-2xl shadow-[oklch(0.65_0.18_50/0.15)]">
          <CardDecorator />
          <CardContent className="p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="block w-7 h-px bg-primary" />
              <Badge variant="eyebrow">GET STARTED</Badge>
              <span className="block w-7 h-px bg-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              See your revenue leaks in 15 minutes
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-8">
              A no-pressure walkthrough of where your shop is leaving money on the table — and
              exactly how we&apos;d plug it.
            </p>

            <a
              href="https://calendly.com/akhileshdasari2004/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="xl"
                className="bg-gradient-accent text-white hover:opacity-90 shadow-lg shadow-[oklch(0.65_0.18_50/0.3)]"
              >
                Book Your Free Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>

            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-border">
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
      </SpotlightBackground>
    </section>
  );
}

const footerLinks = [
  {
    label: "Services",
    links: [
      { title: "Missed Call Recovery", href: "#services", icon: Phone },
      { title: "Review Growth Engine", href: "#services", icon: Star },
      { title: "Membership Programs", href: "#services", icon: Users },
      { title: "Lead Routing", href: "#services", icon: Zap },
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

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
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
}

export function Footer() {
  return (
    <footer className="relative w-full bg-foreground text-background">
      <div className="bg-gradient-accent absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm" />
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          <AnimatedContainer className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-2xl">NorthFlow</span>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                (800) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                hello@northflowhvac.com
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                Serving HVAC businesses nationwide
              </div>
            </div>
            <p className="text-background/60 text-sm mt-6 md:mt-0">
              © {new Date().getFullYear()} NorthFlow. All rights reserved.
            </p>
          </AnimatedContainer>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider">{section.label}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="inline-flex items-center text-sm text-background/70 hover:text-[oklch(0.65_0.18_50)] transition-all duration-300"
                        >
                          {link.icon && <link.icon className="me-1.5 size-4" />}
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
      </div>
    </footer>
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

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}