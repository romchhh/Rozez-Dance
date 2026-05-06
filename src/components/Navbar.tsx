"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#program",   label: "Program" },
  { href: "#levels",    label: "Levels" },
  { href: "#pricing",   label: "Pricing" },
  { href: "#about",     label: "About" },
  { href: "#faq",       label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-noir/96 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-site mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="font-display text-2xl tracking-[3px] text-white leading-none">
            ROZEZ<span className="text-pink">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/60 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors pink-link"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#book"
              className="bg-pink text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-pink-light transition-colors"
            >
              Book a Class
            </Link>
          </div>

          {/* Burger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-noir flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-5xl text-white tracking-widest hover:text-pink transition-colors"
          >
            {l.label.toUpperCase()}
          </Link>
        ))}
        <Link
          href="#book"
          onClick={() => setOpen(false)}
          className="mt-4 bg-pink text-white text-sm font-semibold tracking-widest uppercase px-8 py-4"
        >
          Book a Class
        </Link>
      </div>
    </>
  );
}
