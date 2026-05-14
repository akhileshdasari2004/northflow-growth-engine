"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cover } from "@/components/ui/cover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star, Users } from "lucide-react";
import DotPattern from "@/components/ui/dot-pattern";

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Array<{ value: string; label: string }>;
}

const ArrowAccent = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={cn("w-full h-full", className)}
    fill="none"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15,75 Q 45,35 85,55" />
    <path d="M65,35 L85,55 L55,70" />
  </svg>
);

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title,
      subtitle,
      primaryCta,
      secondaryCta,
      stats = [
        { value: "127+", label: "Missed calls recovered" },
        { value: "$2.3M", label: "Revenue influenced" },
        { value: "94%", label: "Client retention" },
      ],
      ...props
    },
    ref,
  ) => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-[90vh] w-full overflow-hidden bg-background flex flex-col",
          className,
        )}
        {...props}
      >
        {/* Parallax Background Grid Pattern */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.65_0.18_50/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.65_0.18_50/0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
        />

        {/* Parallax Animated Gradient Orbs */}
        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-[oklch(0.65_0.18_50/0.15)] blur-[100px]"
        />
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-5%] right-[5%] w-[35rem] h-[35rem] rounded-full bg-[oklch(0.55_0.22_45/0.12)] blur-[120px]"
        />

        {/* Main Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-16 max-w-7xl mx-auto w-full"
        >
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Badge */}
              <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[oklch(0.65_0.18_50/0.3)] bg-[oklch(0.65_0.18_50/0.08)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_50)] animate-pulse" />
                <span className="text-xs tracking-widest uppercase text-[oklch(0.55_0.22_45)] font-medium">
                  HVAC Growth Systems
                </span>
              </div>

              {/* Title */}
              <h1 className="hero-animate hero-animate-delay-2 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-foreground mb-6">
                {title || (
                  <>
                    Stop losing jobs to <Cover>missed calls</Cover>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="hero-animate hero-animate-delay-3 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {subtitle ||
                  "We help HVAC contractors recover missed calls, multiply Google reviews, and grow recurring maintenance membership revenue — without adding office staff."}
              </p>

              {/* CTAs */}
              <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {primaryCta && (
                  <a href={primaryCta.href}>
                    <Button
                      size="lg"
                      className="bg-gradient-accent text-white hover:opacity-90 shadow-lg shadow-[oklch(0.65_0.18_50/0.2)] w-full sm:w-auto"
                    >
                      {primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
                {secondaryCta && (
                  <a href={secondaryCta.href}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[oklch(0.65_0.18_50/0.4)] text-foreground hover:bg-[oklch(0.65_0.18_50/0.05)] w-full sm:w-auto"
                    >
                      {secondaryCta.label}
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Right Stats Card */}
            <div className="hero-animate hero-animate-delay-2 flex-1 max-w-md w-full relative">
              {/* Main Stats Card */}
              <div className="bg-white rounded-3xl border border-border shadow-xl shadow-[oklch(0.65_0.18_50/0.08)] overflow-hidden">
                <div className="p-8 border-b border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-serif text-5xl text-gradient-accent">{stats[0].value}</p>
                      <p className="text-sm text-muted-foreground">{stats[0].label}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  {stats.slice(1).map((stat, i) => (
                    <div
                      key={stat.label}
                      className="hero-animate hero-animate-delay-5 p-6 border-r border-b border-border last:border-r-0"
                    >
                      <p className="font-serif text-3xl md:text-4xl text-gradient-accent mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Mini Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.65_0.18_50/0.15)] flex items-center justify-center">
                    <Star className="w-5 h-5 text-[oklch(0.65_0.18_50)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">2-4x</p>
                    <p className="text-xs text-muted-foreground">More reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.65_0.18_50/0.15)] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[oklch(0.65_0.18_50)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">$8k+</p>
                    <p className="text-xs text-muted-foreground">Monthly MRR</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Decorative Arrow */}
          <div className="hero-animate hero-animate-delay-6 absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 text-[oklch(0.65_0.18_50/0.3)] hidden lg:block">
            <ArrowAccent />
          </div>
        </motion.div>
      </section>
    );
  },
);
Hero.displayName = "Hero";

export { Hero };

function HeroAnimations() {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".hero-animate").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  return null;
}

export { HeroAnimations };
