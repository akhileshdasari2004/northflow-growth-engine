import { Scene } from "@/components/ui/hero-scene";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-60">
        <Scene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-12 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-7 h-px bg-accent" />
            <Badge variant="eyebrow">HVAC GROWTH SYSTEMS</Badge>
          </div>
          <h1 className="font-serif text-6xl leading-tight text-foreground mb-6">
            Stop losing jobs to <em className="italic text-accent">missed calls</em>
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-md mb-10">
            We help HVAC contractors recover missed calls, multiply Google reviews, and grow
            recurring maintenance membership revenue — without adding office staff.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero-primary" size="xl" asChild>
              <a href="#cta">Start Free Audit</a>
            </Button>
            <Button variant="hero-ghost" size="xl" asChild>
              <a href="#how">See How It Works</a>
            </Button>
          </div>
        </div>

        <div className="space-y-px bg-border-accent">
          <div className="bg-elevated border border-border-accent p-8">
            <div className="font-serif text-5xl text-accent mb-3">127+</div>
            <div className="text-muted text-sm">
              Missed calls recovered per client per year
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border-accent">
            <div className="bg-elevated border border-border-accent p-8">
              <div className="font-serif text-4xl text-accent mb-3">$2.3M</div>
              <div className="text-muted text-sm">Revenue influenced</div>
            </div>
            <div className="bg-elevated border border-border-accent p-8">
              <div className="font-serif text-4xl text-accent mb-3">94%</div>
              <div className="text-muted text-sm">Client retention rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
