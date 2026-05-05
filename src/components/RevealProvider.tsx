"use client";

import { useEffect } from "react";

export function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${i % 4 * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
