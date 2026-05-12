const extras = [
  {
    title: "Seasonal campaigns",
    body: "Stay fully booked during peak weather swings with timed outreach.",
  },
  {
    title: "Service reminders",
    body: "Automated outreach for tune-ups and maintenance agreements.",
  },
  {
    title: "Lead routing",
    body: "Route high-intent leads to your best closers automatically.",
  },
  {
    title: "Reputation guard",
    body: "Protect your brand and boost local trust signals before issues escalate.",
  },
];

export default function ExtrasSection() {
  return (
    <section className="py-16 bg-elevated">
      <div className="max-w-6xl mx-auto px-12">
        <div className="grid md:grid-cols-4 gap-8">
          {extras.map((e) => (
            <div className="border-t-2 border-t-[oklch(0.65_0.18_50)] pt-6">
              <h3 className="text-sm font-medium text-foreground mb-2 font-sans">{e.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
