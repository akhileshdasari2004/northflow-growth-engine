import { Phone, Star, Users, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Service {
  icon: LucideIcon;
  title: string;
  body: string;
  pill: string;
}

const services: Service[] = [
  {
    icon: Phone,
    title: "Missed Call Recovery",
    body: "We answer after-hours and missed calls instantly with AI text and callback flows that book jobs while you sleep.",
    pill: "Recover up to 30% of lost leads",
  },
  {
    icon: Star,
    title: "Review Growth Engine",
    body: "Automatic review requests after every completed job, with private routing for unhappy customers before they post publicly.",
    pill: "2–4× more 5-star reviews",
  },
  {
    icon: Users,
    title: "Membership Retention",
    body: "Turn one-off tune-ups into recurring maintenance plans with nurture campaigns and seasonal reminders.",
    pill: "Predictable monthly recurring revenue",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-accent" />
            <Badge variant="eyebrow">WHAT WE BUILD</Badge>
            <span className="block w-7 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl text-foreground max-w-2xl mx-auto leading-tight">
            Growth infrastructure for HVAC teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border-accent border border-border-accent">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-10 hover:bg-surface transition-colors"
            >
              <s.icon className="text-accent-dark w-8 h-8 mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-foreground mb-4">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{s.body}</p>
              <span className="border border-border-accent text-accent-dark text-xs tracking-widest uppercase px-3 py-1 inline-block">
                {s.pill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
