"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: "1",
    title: "Is this only for big HVAC shops?",
    sub: "Small businesses welcome",
    content:
      "No. Most of our wins come from 1–15 truck businesses that want more consistent booked jobs without adding office staff. We specialize in helping local HVAC contractors compete with larger companies.",
  },
  {
    id: "2",
    title: "Do we need to switch our CRM?",
    sub: "Keep your existing tools",
    content:
      "No. We integrate with what you already use — ServiceTitan, Housecall Pro, Jobber, and most major HVAC platforms. Our system connects seamlessly to your existing workflow without any disruption.",
  },
  {
    id: "3",
    title: "How fast can we launch?",
    sub: "Up and running in days",
    content:
      "Most clients are fully live within 7 business days. The audit itself takes about 15 minutes of your time. From there, our team handles all the technical setup and integration.",
  },
  {
    id: "4",
    title: "What results should we expect?",
    sub: "Measurable growth from day one",
    content:
      "Within 30 days most clients see more reviews and recovered calls. Membership revenue typically builds over 60–90 days. Most clients recover their investment within the first month.",
  },
];

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-5 text-left font-semibold transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <Plus
        size={18}
        strokeWidth={2}
        className="shrink-0 text-[oklch(0.65_0.18_50)] transition-transform duration-200"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-5 pt-0 text-muted-foreground leading-relaxed", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-surface">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-primary" />
            <Badge variant="eyebrow">FAQ</Badge>
            <span className="block w-7 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sans text-foreground">Find what you need</h2>
        </div>

        <Accordion type="single" collapsible className="w-full" defaultValue="1">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="py-1">
              <AccordionTrigger className="text-foreground hover:text-[oklch(0.65_0.18_50)] no-underline">
                <span className="flex flex-col items-start text-left pr-4">
                  <span className="text-base md:text-lg">{faq.title}</span>
                  {faq.sub && (
                    <span className="text-xs md:text-sm font-normal text-muted-foreground mt-1">
                      {faq.sub}
                    </span>
                  )}
                </span>
              </AccordionTrigger>
              <AccordionContent>{faq.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
