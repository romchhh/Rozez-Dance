"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#program", label: "Program" },
  { href: "#levels", label: "Levels" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "Kristi Rozez" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-5 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-dark/95 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <Link href="#" className="font-playfair text-xl font-black text-white tracking-widest">
        Rozez<span className="text-gold">.</span>
      </Link>

      <button
        type="button"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="md:hidden inline-flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-white/25 text-white"
      >
        <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
        <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/80 text-xs font-semibold tracking-widest uppercase hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#book"
            className="bg-red text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full hover:bg-red-light transition-colors"
          >
            Book Now
          </Link>
        </li>
      </ul>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-dark/95 backdrop-blur-md border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-4 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white/85 text-sm font-semibold tracking-wide uppercase hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block bg-red text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full hover:bg-red-light transition-colors"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
