import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          background: `
            linear-gradient(to right, rgba(26,16,8,0.88) 40%, rgba(26,16,8,0.3) 100%),
            url('https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1800&q=80') center/cover no-repeat
          `,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-14 pb-24 max-w-2xl animate-[fadeUp_1.2s_ease_both]">
        <div className="inline-block text-gold text-[11px] font-semibold tracking-[3px] uppercase mb-5 border border-gold/40 px-4 py-1.5 rounded-full">
          ✦ Rozez Dance Studio · Los Angeles
        </div>

        <h1 className="font-barlow-condensed font-black uppercase leading-[0.95] text-white mb-6 text-[clamp(54px,8vw,100px)] tracking-tight">
          High Heels
          <br />& Jazz{" "}
          <em className="not-italic text-gold">Funk</em>
        </h1>

        <p className="text-white/75 text-lg font-light leading-relaxed mb-4">
          Bloom through dance. Open your femininity and power with every step.
        </p>

        <p className="text-white text-sm font-bold tracking-[2.5px] uppercase mb-9 flex items-center gap-3">
          <span className="inline-block w-8 h-0.5 bg-red" />
          New Season — Starting May 11
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="#book"
            className="inline-block bg-red text-white px-11 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(139,26,26,0.4)] transition-all"
          >
            Book Your Spot
          </Link>
          <Link
            href="#program"
            className="text-white/80 text-sm font-medium underline underline-offset-4 hover:text-gold transition-colors"
          >
            Explore the Program
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-14 z-10 hidden md:flex flex-col items-center gap-2 text-white/50 text-[10px] tracking-[2px] uppercase scroll-line" />
    </section>
  );
}
