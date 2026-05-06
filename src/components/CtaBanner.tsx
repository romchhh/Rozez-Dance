import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section id="book" className="bg-pink grain relative overflow-hidden">
      {/* Big text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[clamp(120px,20vw,240px)] text-white/10 tracking-widest whitespace-nowrap">
          BLOOM
        </span>
      </div>

      <div className="relative max-w-site mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        <h2 className="font-display text-[clamp(54px,8vw,110px)] leading-none tracking-wider text-white mb-6 reveal">
          READY TO<br />BLOOM?
        </h2>
        <p className="text-white/70 text-base mb-10 reveal">
          Limited spots available. Don&apos;t miss your chance.
        </p>
        <Link
          href="mailto:rozezdance@gmail.com"
          className="reveal inline-flex items-center gap-3 bg-white text-pink text-xs font-bold tracking-widest uppercase px-10 py-5 hover:bg-noir hover:text-white transition-colors group"
        >
          Book Your Spot
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
