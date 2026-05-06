import Link from "next/link";
import { ArrowRight, Instagram, Youtube } from "lucide-react";

const OVERLAY =
  "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.20) 100%)";

const HERO_BG_MOBILE  = "/541554910_18523535326004241_1418162069959137408_n.jpg";
const HERO_BG_DESKTOP = encodeURI("/Знімок екрана 2026-05-05 о 11.07.08.png");

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] flex items-end overflow-hidden grain">
      {/* BG — mobile */}
      <div
        className="absolute inset-0 hero-bg md:hidden"
        style={{ background: `${OVERLAY}, url('${HERO_BG_MOBILE}') center/cover no-repeat` }}
      />
      {/* BG — desktop */}
      <div
        className="absolute inset-0 hero-bg hidden md:block"
        style={{ background: `${OVERLAY}, url('${HERO_BG_DESKTOP}') center/cover no-repeat` }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-noir to-transparent z-[1]" />

      {/* Side socials — desktop */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4 pl-4">
        <div className="w-px h-16 bg-white/20" />
        <Link href="https://www.instagram.com/kristirozez/" target="_blank"
          className="text-white/40 hover:text-pink transition-colors rotate-0">
          <Instagram size={15} />
        </Link>
        <Link href="https://www.tiktok.com/@rozezdance" target="_blank"
          className="text-white/40 hover:text-pink transition-colors">
          <Youtube size={15} />
        </Link>
        <div className="w-px h-16 bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-site mx-auto px-6 md:px-10 pb-20 md:pb-28">
        {/* Tag */}
        <p className="text-white/50 text-[10px] font-mono tracking-[4px] uppercase mb-4">
          Los Angeles · High Heels · Jazz Funk
        </p>

        {/* Headline */}
        <h1 className="font-display text-[clamp(70px,13vw,160px)] leading-[0.88] text-white tracking-wider mb-6">
          ROZEZ
          <br />
          <span className="text-pink">DANCE</span>
        </h1>

        <p className="text-white/65 text-base md:text-lg font-light leading-relaxed max-w-md mb-3">
          Bloom through dance. Open your femininity and power with every step.
        </p>

        <p className="flex items-center text-white/80 text-xs font-mono tracking-[2px] uppercase mb-8">
          <span className="pink-line" />
          New Season — Starting May 11
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#book"
            className="inline-flex items-center gap-2 bg-pink text-white text-xs font-semibold tracking-widest uppercase px-7 py-4 hover:bg-pink-light transition-colors group"
          >
            Book Your Spot
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#program"
            className="text-white/60 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors pink-link"
          >
            Explore Program
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/30 text-[9px] font-mono tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
