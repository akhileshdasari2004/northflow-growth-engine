"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  showVerifiedBadge?: boolean;
  trustedCompanies?: string[];
  trustedCompaniesTitle?: string;
  className?: string;
}

export function TestimonialsSection({
  title = "What Our Clients Say",
  subtitle = "Real results from HVAC contractors who partnered with NorthFlow",
  testimonials = [],
  autoRotateInterval = 6000,
  showVerifiedBadge = true,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by leading HVAC companies",
  className,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [testimonials.length, autoRotateInterval]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-16 md:py-32 relative overflow-hidden flex justify-center bg-surface",
        className,
      )}
    >
      <div className="container items-center px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12 space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-7 h-px bg-primary" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              TESTIMONIALS
            </span>
            <span className="block w-7 h-px bg-primary" />
          </div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif text-foreground"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-[700px] mx-auto text-lg"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:grid md:grid-cols-[1fr_auto] gap-8 items-center max-w-[1000px] mx-auto"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-6 -left-6 z-10">
              <Quote className="h-12 w-12 text-primary/20" strokeWidth={1} />
            </div>

            <div className="relative h-[320px] md:h-[280px]">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 border-border",
                    index === activeIndex
                      ? "opacity-100 translate-x-0 shadow-lg"
                      : "opacity-0 translate-x-[100px] pointer-events-none",
                  )}
                >
                  <CardContent className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[oklch(0.65_0.18_50)] text-[oklch(0.65_0.18_50)]"
                          />
                        ))}
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <p className="flex-1 italic text-base/relaxed text-foreground">
                      "{testimonial.content}"
                    </p>

                    {showVerifiedBadge && (
                      <div className="mt-4 text-xs text-right text-muted-foreground">
                        Verified Customer
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex md:flex-col gap-4 justify-center mt-8 md:mt-0"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full h-10 w-10 border-primary/30 hover:border-primary hover:bg-primary/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </Button>

            <div className="flex md:flex-col gap-2 items-center justify-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors cursor-pointer",
                    index === activeIndex ? "bg-primary" : "bg-muted-foreground/20",
                  )}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(index);
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full h-10 w-10 border-primary/30 hover:border-primary hover:bg-primary/5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </Button>
          </motion.div>
        </motion.div>

        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-border">
            <h3 className="text-sm font-medium text-muted-foreground text-center mb-8">
              {trustedCompaniesTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-2xl font-semibold text-muted-foreground/50">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
