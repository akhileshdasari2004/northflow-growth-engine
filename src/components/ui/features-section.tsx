"use client";

import { Phone, Star, Users, Shield, Zap, Heart, CheckCircle, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid } from "recharts";

const features = [
  {
    icon: Phone,
    subtitle: "Missed Call Recovery",
    title: "Stop losing jobs to missed calls",
    description:
      "AI-powered call answering with instant text and callback flows that book jobs while you sleep. Recover up to 30% of lost leads automatically.",
    stat: "127+",
    statLabel: "Calls Recovered Yearly",
  },
  {
    icon: Star,
    subtitle: "Review Growth Engine",
    title: "Build your online reputation effortlessly",
    description:
      "Automatic review requests after every job with private routing for unhappy customers. Build your online reputation effortlessly.",
    stat: "2-4x",
    statLabel: "More 5-Star Reviews",
  },
  {
    icon: Users,
    subtitle: "Membership Programs",
    title: "Predictable recurring revenue",
    description:
      "Turn one-off tune-ups into recurring maintenance plans with automated nurture campaigns and seasonal reminders.",
    stat: "$8k+",
    statLabel: "Monthly MRR Growth",
  },
  {
    icon: Shield,
    subtitle: "Secure & Reliable",
    title: "Enterprise-grade security for your customer data",
    description: "SOC 2 Compliant • GDPR Ready",
    stat: "99.9%",
    statLabel: "Uptime Guarantee",
  },
];

const chartConfig = {
  calls: {
    label: "Calls Recovered",
    color: "oklch(0.65 0.18 50)",
  },
  revenue: {
    label: "Revenue ($k)",
    color: "oklch(0.55 0.22 45)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "Jan", calls: 45, revenue: 3.2 },
  { month: "Feb", calls: 52, revenue: 3.8 },
  { month: "Mar", calls: 68, revenue: 4.5 },
  { month: "Apr", calls: 85, revenue: 5.2 },
  { month: "May", calls: 92, revenue: 6.1 },
  { month: "Jun", calls: 110, revenue: 7.0 },
];

export function FeaturesSection() {
  return (
    <section className="px-4 py-16 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 -z-10">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FF8C00"
              speed={0.5}
            />
          </div>
          <div className="section-heading-animate flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-primary" />
            <Badge variant="eyebrow">WHAT WE BUILD</Badge>
            <span className="block w-7 h-px bg-primary" />
          </div>
          <div className="relative">
            <h2 className="section-heading-animate text-4xl md:text-5xl font-sans text-foreground mb-4">
              Growth infrastructure for HVAC teams
            </h2>
            <div className="absolute inset-x-20 top-full mt-2 mx-auto h-[2px] w-3/4 bg-gradient-to-r from-transparent via-[oklch(0.65_0.18_50)] to-transparent" />
          </div>
          <p className="section-heading-animate text-muted-foreground max-w-2xl mx-auto text-lg mt-6">
            Three powerful systems working together to recover revenue, build trust, and create
            predictable recurring income.
          </p>
        </div>

        {/* Features-9 Grid Layout */}
        <div className="mx-auto grid max-w-5xl border border-border md:grid-cols-2">
          {/* Feature 1 - Left */}
          <div className="relative">
            <div className="stagger-animate stagger-delay-0">
              <div className="p-6 sm:p-12">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Phone className="size-4 text-[oklch(0.65_0.18_50)]" />
                  {features[0].subtitle}
                </span>
                <p className="mt-8 text-2xl font-semibold text-foreground">{features[0].title}</p>
              </div>
              <div className="px-6 pb-6 sm:px-12">
                <p className="text-muted-foreground text-sm">{features[0].description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-sans text-gradient-accent">
                    {features[0].stat}
                  </span>
                  <span className="text-sm text-muted-foreground">{features[0].statLabel}</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
          </div>

          {/* Feature 2 - Right */}
          <div className="stagger-animate stagger-delay-1">
            <div className="overflow-hidden border-t bg-surface p-6 sm:p-12 md:border-0 md:border-l border-border">
              <div className="relative z-10">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Star className="size-4 text-[oklch(0.65_0.18_50)]" />
                  {features[1].subtitle}
                </span>
                <p className="my-8 text-2xl font-semibold text-foreground">{features[1].title}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="size-8 rounded-full border-2 border-background bg-gradient-accent flex items-center justify-center"
                      >
                        <Star className="size-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">+84 reviews</span>
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-sans text-gradient-accent">{features[1].stat}</span>
                <span className="text-sm text-muted-foreground">{features[1].statLabel}</span>
              </div>
            </div>
          </div>
          <div className="stagger-animate stagger-delay-2 col-span-full border-y border-border p-12">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-semibold lg:text-5xl text-gradient-accent">
                  {features[2].stat}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{features[2].statLabel}</p>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-center">
                <p className="text-4xl font-semibold lg:text-5xl text-gradient-accent">
                  {features[3].stat}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{features[3].statLabel}</p>
              </div>
            </div>
          </div>

          {/* Feature 4 - Activity Chart */}
          <div className="stagger-animate stagger-delay-3 relative col-span-full">
            <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
              <span className="text-muted-foreground flex items-center gap-2">
                <Activity className="size-4 text-[oklch(0.65_0.18_50)]" />
                Performance Dashboard
              </span>
              <p className="my-8 text-2xl font-semibold text-foreground">
                Monitor your growth in real-time.{" "}
                <span className="text-muted-foreground">
                  Track recovered calls and revenue increase.
                </span>
              </p>
            </div>
            <FeaturesChart />
          </div>
        </div>

        {/* Trust Indicators Below */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">
            Trusted by HVAC businesses across North America
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["SOC 2 Compliant", "24/7 Support", "99.9% Uptime", "GDPR Ready"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-[oklch(0.65_0.18_50)]" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FeaturesChart = () => {
  return (
    <ChartContainer className="h-64 aspect-auto md:h-96" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 0,
          right: 0,
        }}
      >
        <defs>
          <linearGradient id="fillCalls" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-calls)" stopOpacity={0.8} />
            <stop offset="55%" stopColor="var(--color-calls)" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-revenue)" stopOpacity={0.6} />
            <stop offset="55%" stopColor="var(--color-revenue)" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} className="stroke-border/50" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          strokeWidth={2}
          dataKey="calls"
          type="monotone"
          fill="url(#fillCalls)"
          fillOpacity={0.3}
          stroke="var(--color-calls)"
        />
        <Area
          strokeWidth={2}
          dataKey="revenue"
          type="monotone"
          fill="url(#fillRevenue)"
          fillOpacity={0.2}
          stroke="var(--color-revenue)"
        />
      </AreaChart>
    </ChartContainer>
  );
};
