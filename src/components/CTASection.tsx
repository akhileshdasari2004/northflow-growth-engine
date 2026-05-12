import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="cta" className="py-32 bg-surface border-t border-border-accent text-center">
      <div className="max-w-3xl mx-auto px-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-7 h-px bg-accent" />
          <Badge variant="eyebrow">GET STARTED</Badge>
          <span className="block w-7 h-px bg-accent" />
        </div>
        <h2 className="font-serif text-5xl text-foreground mb-6 leading-tight">
          See your revenue leaks in 15 minutes
        </h2>
        <p className="text-muted mb-10 max-w-xl mx-auto">
          A no-pressure walkthrough of where your shop is leaving money on the table — and exactly
          how we'd plug it.
        </p>
        <Button variant="hero-primary" size="xl">
          Book Your Free Audit
        </Button>
      </div>
    </section>
  );
}
