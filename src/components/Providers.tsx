"use client";

import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  /* ── Custom cursor ── */
  useEffect(() => {
    const dot  = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY;
      dot.style.left  = x + "px";
      dot.style.top   = y + "px";
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
    };

    const grow = () => {
      if (!dot || !ring) return;
      dot.style.width  = "14px";
      dot.style.height = "14px";
      ring.style.width  = "56px";
      ring.style.height = "56px";
    };
    const shrink = () => {
      if (!dot || !ring) return;
      dot.style.width  = "8px";
      dot.style.height = "8px";
      ring.style.width  = "36px";
      ring.style.height = "36px";
    };

    let raf: number;
    const animate = () => {
      rx += (parseFloat(dot.style.left || "0") - rx) * 0.14;
      ry += (parseFloat(dot.style.top  || "0") - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 5) * 90}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      {children}
    </>
  );
}
