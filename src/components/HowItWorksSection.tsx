import { Badge } from "@/components/ui/badge";

const steps = [
  {
    n: "01",
    title: "Free Revenue Leak Audit",
    body: "We map exactly where jobs are slipping — missed calls, no-shows, churned members.",
  },
  {
    n: "02",
    title: "Done-for-you setup in 7 days",
    body: "We build and connect all automations to your existing CRM and phone system.",
  },
  {
    n: "03",
    title: "Automations go live",
    body: "Missed call recovery, review campaigns, and membership nurture launch across your stack.",
  },
  {
    n: "04",
    title: "Weekly optimization",
    body: "We review performance weekly and run seasonal campaigns around weather swings.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-accent" />
            <Badge variant="eyebrow">HOW IT WORKS</Badge>
            <span className="block w-7 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl text-foreground max-w-2xl mx-auto leading-tight">
            A simple rollout with measurable wins
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-border-accent pt-8">
              <div className="font-serif text-6xl text-border-accent leading-none mb-6">
                {s.n}
              </div>
              <h3 className="text-sm font-medium text-foreground mb-2 font-sans">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
