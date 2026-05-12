import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "Is this only for big HVAC shops?",
    a: "No. Most of our wins come from 1–15 truck businesses that want more consistent booked jobs without adding office staff.",
  },
  {
    q: "Do we need to switch our CRM?",
    a: "No. We integrate with what you already use — ServiceTitan, Housecall Pro, Jobber, and most major HVAC platforms.",
  },
  {
    q: "How fast can we launch?",
    a: "Most clients are fully live within 7 business days. The audit itself takes about 15 minutes of your time.",
  },
  {
    q: "What results should we expect?",
    a: "Within 30 days most clients see more reviews and recovered calls. Membership revenue typically builds over 60–90 days.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-2xl mx-auto px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-accent" />
            <Badge variant="eyebrow">FAQ</Badge>
            <span className="block w-7 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-5xl text-foreground">Find what you need</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-t border-border-accent border-b-0"
            >
              <AccordionTrigger className="text-sm text-foreground py-5 hover:text-[oklch(0.65_0.18_50)] font-normal hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
}
