import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-ivory">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative img-zoom overflow-hidden aspect-[4/5] reveal from-left">
          <Image
            src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80"
            alt="Kristi Rozez"
            fill
            className="object-cover saturate-[0.7] grayscale-[0.3]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent" />

          {/* Pink corner */}
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink" />

          {/* Badge */}
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-white font-mono text-[10px] tracking-[3px] uppercase opacity-60">Based in</p>
            <p className="text-pink font-display text-xl tracking-widest">LOS ANGELES</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-none tracking-wider text-noir mb-6 reveal">
            I DON&apos;T JUST<br />
            TEACH CHOREO.<br />
            <span className="text-pink">I HELP WOMEN<br />FEEL POWERFUL.</span>
          </h2>

          <p className="text-noir/60 text-sm leading-relaxed mb-4 reveal">
            I&apos;m Kristi — a dancer, creator and mentor. I believe in movement as a form of self-love,
            confidence and expression. Ukrainian-born, LA-raised in the dance world.
          </p>
          <p className="text-noir/60 text-sm leading-relaxed mb-8 reveal">
            Every class is designed to help you discover your power, grace, and authentic self.
            Welcome to my world.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 border-t border-noir/10 pt-8 mb-8 reveal">
            {[["500+","Students"], ["5+","Years"], ["15K+","Followers"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-pink tracking-wider">{n}</div>
                <div className="text-noir/40 text-[10px] font-mono tracking-[2px] uppercase">{l}</div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 reveal">
            <Link
              href="https://www.instagram.com/kristirozez/"
              target="_blank"
              className="flex items-center gap-2 border border-noir/15 text-noir/60 text-xs font-mono tracking-widest uppercase px-4 py-2.5 hover:border-pink hover:text-pink transition-colors"
            >
              <Instagram size={13} /> @kristirozez
            </Link>
            <Link
              href="https://www.tiktok.com/@rozezdance"
              target="_blank"
              className="flex items-center gap-2 border border-noir/15 text-noir/60 text-xs font-mono tracking-widest uppercase px-4 py-2.5 hover:border-pink hover:text-pink transition-colors"
            >
              <Youtube size={13} /> @rozezdance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
