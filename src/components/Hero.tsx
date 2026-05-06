import Link from "next/link";
import { ArrowRight, Instagram, Youtube } from "lucide-react";

const HERO_BG_MOBILE = "/Gemini_Generated_Image_oqclpdoqclpdoqcl.png";
const HERO_BG_DESKTOP = "/Gemini_Generated_Image_fiev9vfiev9vfiev.png";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden bg-white">
      {/* BG — mobile */}
      <div
        className="absolute inset-0 hero-bg md:hidden"
        style={{ background: `url('${HERO_BG_MOBILE}') center/cover no-repeat` }}
      />
      {/* BG — desktop */}
      <div
        className="absolute inset-0 hero-bg hidden md:block"
        style={{ background: `url('${HERO_BG_DESKTOP}') center/cover no-repeat` }}
      />

      {/* Bottom gradient darkening (stronger on mobile) */}
      <div className="absolute inset-x-0 bottom-0 h-[66%] md:h-[60%] bg-gradient-to-t from-noir/85 via-noir/40 md:from-noir/55 md:via-noir/18 to-transparent z-[1]" />

      {/* Side socials — desktop */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4 pl-4">
        <div className="w-px h-16 bg-white/20" />
        <Link href="https://www.instagram.com/kristirozez/" target="_blank"
          className="text-white/55 hover:text-pink transition-colors rotate-0">
          <Instagram size={15} />
        </Link>
        <Link href="https://www.tiktok.com/@rozezdance" target="_blank"
          className="text-white/55 hover:text-pink transition-colors">
          <Youtube size={15} />
        </Link>
        <div className="w-px h-16 bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-site mx-auto px-6 md:px-10 pb-20 md:pb-28">
        {/* Headline */}
        <h1 className="font-display text-[clamp(70px,13vw,160px)] leading-[0.88] text-white md:text-noir tracking-wider mb-6">
          ROZEZ
          <br />
          <span className="text-pink">DANCE</span>
        </h1>

        <p className="text-white/85 md:text-noir/70 text-lg md:text-xl font-medium leading-snug max-w-lg mb-5">
          Bloom through dance. Open your femininity and power with every step.
        </p>

        <p className="flex items-center text-white/90 md:text-noir/80 text-sm font-mono tracking-[3px] uppercase mb-10">
          <span className="pink-line" />
          New Season — Starting May 11
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#book"
            className="inline-flex items-center gap-2 bg-pink text-white text-sm font-semibold tracking-[0.22em] uppercase px-9 py-5 hover:bg-pink-light transition-colors group shadow-[0_18px_45px_rgba(255,31,142,0.30)]"
          >
            Book Your Spot
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#program"
            className="text-white/85 md:text-noir/70 text-sm font-semibold tracking-[0.22em] uppercase hover:text-white md:hover:text-noir transition-colors pink-link"
          >
            Explore Program
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/40 text-[9px] font-mono tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
