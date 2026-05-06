import Link from "next/link";

const WORDS = [
  "THIS IS MORE THAN DANCE",
  "✦",
  "THIS IS HOW YOU FEEL YOURSELF",
  "✦",
  "FEMININITY",
  "✦",
  "CONFIDENCE",
  "✦",
  "MOVEMENT",
  "✦",
];

const REPEAT = [...WORDS, ...WORDS];

export function ManifestoBanner() {
  return (
    <section
      className="relative bg-noir overflow-hidden grain"
      style={{
        background:
          "linear-gradient(rgba(10,10,10,0.92),rgba(10,10,10,0.92)), url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=60') center/cover no-repeat",
      }}
    >
      {/* Marquee */}
      <div className="py-5 border-y border-white/10 overflow-hidden">
        <div className="marquee-track">
          {REPEAT.map((w, i) => (
            <span
              key={i}
              className="font-display text-lg tracking-widest text-white/70 px-6 whitespace-nowrap"
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 text-center">
        <h2 className="font-display text-[clamp(36px,6vw,80px)] leading-[1] text-white tracking-wider mb-8 reveal">
          THIS IS MORE THAN DANCE.<br />
          <span className="text-pink">THIS IS HOW YOU FEEL YOURSELF.</span>
        </h2>
        <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed mb-10 reveal">
          Movement as a form of self-love, confidence and expression.
          Every class is a step closer to the woman you&apos;re becoming.
        </p>
        <Link
          href="#program"
          className="reveal inline-block border border-pink text-pink text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-pink hover:text-white transition-colors"
        >
          Join the Movement
        </Link>
      </div>

      {/* Second marquee — reversed */}
      <div className="py-5 border-y border-white/10 overflow-hidden">
        <div className="marquee-track" style={{ animationDirection: "reverse" }}>
          {REPEAT.map((w, i) => (
            <span
              key={i}
              className="font-display text-lg tracking-widest text-pink/40 px-6 whitespace-nowrap"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
