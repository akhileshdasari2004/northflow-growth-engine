import { Phone, Star, Users, TrendingUp, CheckCircle, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Globe3DDemo from "@/components/ui/3d-globe-demo";
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

export function Features() {
  const features = [
    {
      icon: Phone,
      title: "Missed Call Recovery",
      description: "AI-powered call answering that books jobs while you sleep",
    },
    {
      icon: TrendingUp,
      title: "Lead Conversion",
      description: "Recover up to 30% of lost leads automatically",
    },
    {
      icon: Star,
      title: "Review Growth",
      description: "Automated review requests that multiply 5-star reviews",
    },
    {
      icon: Users,
      title: "Membership Revenue",
      description: "Turn one-off tune-ups into recurring monthly plans",
    },
    {
      icon: CheckCircle,
      title: "Client Retention",
      description: "94% client retention with automated follow-ups",
    },
    {
      icon: BarChart3,
      title: "Revenue Growth",
      description: "$8k+ new monthly recurring plan revenue",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="opacity-40"
          color="oklch(0.65 0.18 50)"
          squareSize={3}
          gridGap={3}
          flickerChance={0.15}
          maxOpacity={0.25}
        />
      </div>
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-heading-animate flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-[oklch(0.65_0.18_50)]" />
            <Badge variant="eyebrow">IMPACT</Badge>
            <span className="block w-7 h-px bg-[oklch(0.65_0.18_50)]" />
          </div>
          <h2 className="section-heading-animate font-sans text-4xl md:text-5xl text-foreground max-w-2xl mx-auto leading-tight">
            Built to increase booked jobs, trust, and recurring revenue
          </h2>
        </div>

        <div className="section-heading-animate grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative h-[400px] lg:h-auto lg:min-h-[480px] rounded-2xl overflow-hidden border border-[oklch(0.88_0.015_90/0.3)] bg-surface/80 backdrop-blur-sm">
            <Globe3DDemo />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-y border border-[oklch(0.88_0.015_90/0.3)] bg-background/90 backdrop-blur-sm h-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`stagger-animate stagger-delay-${index} bg-transparent p-6`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[oklch(0.65_0.18_50)] to-[oklch(0.55_0.22_45)]">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-sans text-base text-foreground font-medium">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
