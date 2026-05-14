import React, { useState, useEffect } from "react";
import { Grid2x2PlusIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollBlur = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScrollBlur, { passive: true });
    handleScrollBlur();
    return () => window.removeEventListener("scroll", handleScrollBlur);
  }, []);

  const links = [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "How it works",
      href: "#how",
    },
    {
      label: "Results",
      href: "#results",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 navbar-scroll-blur",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled ? "is-scrolled" : "",
      )}
    >
      <div className="mx-auto w-full max-w-4xl px-4 md:px-6 pt-4">
        <div
          className={cn(
            "rounded-lg border border-border shadow-sm",
            scrolled
              ? "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg"
              : "bg-background/40",
          )}
        >
          <nav className="mx-auto flex items-center justify-between p-1.5">
            <a
              href="#"
              className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 hover:bg-accent/50 transition-colors"
            >
              <Grid2x2PlusIcon className="size-5 text-primary" />
              <p className="font-serif text-lg font-bold text-foreground">NorthFlow</p>
            </a>
            <div className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <a
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a href="#cta" className={buttonVariants({ variant: "default", size: "sm" })}>
                Book Free Audit
              </a>
              <Sheet open={open} onOpenChange={setOpen}>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setOpen(!open)}
                  className="lg:hidden"
                >
                  <MenuIcon className="size-4" />
                </Button>
                <SheetContent
                  className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                  showClose={true}
                  side="left"
                >
                  <div className="flex items-center gap-2 px-4 py-4 border-b border-border">
                    <Grid2x2PlusIcon className="size-5 text-primary" />
                    <p className="font-serif text-lg font-bold text-foreground">NorthFlow</p>
                  </div>
                  <div className="grid gap-y-2 overflow-y-auto px-4 pt-6 pb-5">
                    {links.map((link) => (
                      <a
                        className={buttonVariants({
                          variant: "ghost",
                          className: "justify-start",
                        })}
                        href={link.href}
                        key={link.href}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <SheetFooter className="px-4">
                    <a
                      href="#cta"
                      className={buttonVariants({ variant: "default", size: "sm" })}
                      onClick={() => setOpen(false)}
                    >
                      Book Free Audit
                    </a>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
