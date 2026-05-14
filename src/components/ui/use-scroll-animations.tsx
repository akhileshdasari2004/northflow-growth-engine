"use client";

import { useEffect } from "react";

export function useScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0,
    };

    const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .hero-animate, .section-heading-animate, .stagger-animate, .process-step-animate, .stat-card-animate, .testimonial-animate, .cta-animate",
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}

export function useNavbarScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar-scroll-blur");
      if (nav) {
        if (window.scrollY > 60) {
          nav.classList.add("is-scrolled");
        } else {
          nav.classList.remove("is-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
