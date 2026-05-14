"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Search, Settings, Zap, LineChart, Phone, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free Revenue Leak Audit",
    description:
      "We map exactly where jobs are slipping — missed calls, no-shows, churned members.",
    detail: "Discover hidden revenue opportunities",
  },
  {
    number: "02",
    icon: Settings,
    title: "Done-for-you setup in 7 days",
    description: "We build and connect all automations to your existing CRM and phone system.",
    detail: "Zero disruption to your team",
  },
  {
    number: "03",
    icon: Zap,
    title: "Automations go live",
    description:
      "Missed call recovery, review campaigns, and membership nurture launch across your stack.",
    detail: "Instant results",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Weekly optimization",
    description: "We review performance weekly and run seasonal campaigns around weather swings.",
    detail: "Continuous improvement",
  },
];

export function HowItWorksSection() {
  const Icon0 = steps[0].icon;
  const Icon1 = steps[1].icon;
  const Icon2 = steps[2].icon;
  const Icon3 = steps[3].icon;

  return (
    <section className="py-16 md:py-32 bg-surface">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-heading-animate flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-primary" />
            <Badge variant="eyebrow">HOW IT WORKS</Badge>
            <span className="block w-7 h-px bg-primary" />
          </div>
          <h2 className="section-heading-animate text-4xl md:text-5xl font-sans text-foreground mb-4">
            A simple rollout with measurable wins
          </h2>
        </div>

        {/* Features-11 Layout Grid */}
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          {/* Card 1 - Large Left (col-span-3) */}
          <Card className="process-step-animate stagger-delay-0 group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <span className="text-xs tracking-widest uppercase text-[oklch(0.65_0.18_50)]">
                    {steps[0].number}
                  </span>
                  <Icon0 className="size-4 text-[oklch(0.65_0.18_50)]" />
                </div>
                <p className="font-medium text-lg text-foreground">{steps[0].title}</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  {steps[0].description}
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12 pb-6">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]" />
              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2">
                <div className="flex items-center gap-4 p-4 bg-[oklch(0.65_0.18_50/0.05)] rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                    <Phone className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Missed Call Recovered</p>
                    <p className="text-xs text-muted-foreground">Dallas, TX • 2 min ago</p>
                  </div>
                  <CheckCircle className="size-5 text-[oklch(0.65_0.18_50)] ml-auto" />
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2 - Right (col-span-2) */}
          <Card className="process-step-animate stagger-delay-1 group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="text-xs tracking-widest uppercase text-[oklch(0.65_0.18_50)]">
                  {steps[1].number}
                </span>
                <Icon1 className="size-4 text-[oklch(0.65_0.18_50)]" />
              </div>
              <p className="font-medium text-lg text-foreground mb-2">{steps[1].title}</p>
              <p className="text-muted-foreground text-sm">{steps[1].description}</p>
            </div>

            <CardContent className="mt-auto">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]" />
                <div className="flex justify-center gap-4">
                  <div className="inset-shadow-sm bg-[oklch(0.65_0.18_50/0.1)] relative flex aspect-square size-14 items-center rounded-xl border border-[oklch(0.65_0.18_50/0.3)] p-3 shadow-lg">
                    <Icon1 className="size-6 text-[oklch(0.65_0.18_50)]" />
                  </div>
                  <div className="inset-shadow-sm bg-[oklch(0.65_0.18_50/0.1)] relative flex aspect-square size-14 items-center rounded-xl border border-[oklch(0.65_0.18_50/0.3)] p-3 shadow-lg">
                    <Icon2 className="size-6 text-[oklch(0.65_0.18_50)]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Bottom Left (col-span-2) */}
          <Card className="process-step-animate stagger-delay-2 group p-6 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <span className="text-xs tracking-widest uppercase text-[oklch(0.65_0.18_50)]">
                {steps[2].number}
              </span>
              <Icon2 className="size-4 text-[oklch(0.65_0.18_50)]" />
            </div>
            <p className="font-medium text-lg text-foreground mb-2">{steps[2].title}</p>
            <p className="text-muted-foreground text-sm mb-6">{steps[2].description}</p>

            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-accent rounded-full text-white text-sm font-medium">
                <Phone className="size-4" />
                <span>Calls Active</span>
                <ArrowRight className="size-4" />
              </div>
            </div>
          </Card>

          {/* Card 4 - Bottom Right (col-span-3) */}
          <Card className="process-step-animate stagger-delay-3 group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="text-xs tracking-widest uppercase text-[oklch(0.65_0.18_50)]">
                  {steps[3].number}
                </span>
                <Icon3 className="size-4 text-[oklch(0.65_0.18_50)]" />
              </div>
              <p className="font-medium text-lg text-foreground mb-2">{steps[3].title}</p>
              <p className="text-muted-foreground text-sm max-w-sm">{steps[3].description}</p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-3 md:grid-cols-4">
                {[
                  { label: "Reviews", value: "+89%" },
                  { label: "Calls", value: "+127" },
                  { label: "MRR", value: "+$8k" },
                  { label: "Retention", value: "94%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-dashed border-[oklch(0.65_0.18_50/0.3)] bg-[oklch(0.65_0.18_50/0.05)] p-3 text-center"
                  >
                    <p className="text-lg font-semibold text-gradient-accent">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  const metrics = [
    { value: "18–30%", label: "More appointments from existing lead flow" },
    { value: "2–4×", label: "Lift in monthly Google review volume" },
    { value: "$8k+", label: "New monthly recurring plan revenue" },
  ];

  return (
    <section id="results" className="py-24">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <div className="section-heading-animate flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-primary" />
            <Badge variant="eyebrow">IMPACT</Badge>
            <span className="block w-7 h-px bg-primary" />
          </div>
          <h2 className="section-heading-animate font-sans text-4xl md:text-5xl text-foreground max-w-3xl mx-auto leading-tight">
            Built to increase booked jobs, trust, and recurring revenue
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`stat-card-animate stagger-delay-${i} bg-white text-center py-16 px-8 border border-border`}
            >
              <div className="font-sans text-5xl md:text-6xl text-gradient-accent mb-3">
                {m.value}
              </div>
              <div className="text-muted-foreground text-sm leading-relaxed max-w-[180px] mx-auto">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
