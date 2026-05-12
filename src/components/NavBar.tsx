import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md border-b border-border-accent transition-colors",
        scrolled ? "bg-background/90" : "bg-background/40",
      )}
    >
      <div className="max-w-6xl mx-auto px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-accent text-xl">
          NorthFlow
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted text-sm tracking-wide hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <Button variant="hero-ghost" size="sm" asChild>
          <a href="#cta">Book Free Audit</a>
        </Button>
      </div>
    </nav>
  );
}
