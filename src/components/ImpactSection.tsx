import { Badge } from "@/components/ui/badge";

const metrics = [
  { value: "18–30%", label: "More appointments from existing lead flow" },
  { value: "2–4×", label: "Lift in monthly Google review volume" },
  { value: "$8k+", label: "New monthly recurring plan revenue" },
];

export default function ImpactSection() {
  return (
    <section id="results" className="py-24">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-accent" />
            <Badge variant="eyebrow">IMPACT</Badge>
            <span className="block w-7 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl text-foreground max-w-3xl mx-auto leading-tight">
            Built to increase booked jobs, trust, and recurring revenue
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border-accent border border-border-accent">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background text-center py-16 px-8">
              <div className="font-serif text-6xl text-accent mb-3">{m.value}</div>
              <div className="text-muted text-sm leading-relaxed max-w-[180px] mx-auto">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
