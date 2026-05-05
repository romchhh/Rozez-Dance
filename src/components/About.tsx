import Image from "next/image";
import Link from "next/link";

const STATS = [
  { num: "15K+", label: "Followers" },
  { num: "5+", label: "Years Teaching" },
  { num: "500+", label: "Students Trained" },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-dark text-white grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 px-6 md:px-14 py-24 items-center"
    >
      {/* Image */}
      <div className="reveal relative rounded-[20px] overflow-hidden aspect-[4/5] group">
        <Image
          src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80"
          alt="Kristi Rozez"
          fill
          className="object-cover saturate-[0.85] group-hover:scale-[1.03] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
        <div className="absolute bottom-7 left-7 z-10 bg-gold text-dark px-5 py-3 rounded-xl text-sm font-bold tracking-wide">
          📍 Los Angeles, CA
        </div>
      </div>

      {/* Text */}
      <div className="reveal">
        <div className="text-gold text-[11px] font-bold tracking-[3px] uppercase mb-4">✦ Your Instructor</div>

        <h2 className="font-barlow-condensed font-black uppercase leading-none text-[clamp(36px,4vw,56px)] text-white mb-6">
          Kristi
          <br />
          Rozez
        </h2>

        <p className="text-white/70 text-base leading-[1.75] mb-4">
          Ukrainian-born dancer, choreographer, and artist based in Los Angeles. Kristi brings a
          unique blend of raw artistic energy and technical precision to every class she teaches.
        </p>
        <p className="text-white/70 text-base leading-[1.75]">
          As the owner and lead instructor of Rozez Dance, Kristi&apos;s philosophy is simple:{" "}
          <span className="text-gold font-medium">&ldquo;Bloom through dance.&rdquo;</span> Every class is
          designed to help you discover your power, grace, and authentic self.
        </p>

        {/* Stats */}
        <div className="flex gap-10 my-9 py-7 border-y border-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-playfair text-4xl font-bold text-gold leading-none mb-1.5">{s.num}</div>
              <div className="text-[11px] text-white/50 tracking-[1.5px] uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-3 flex-wrap">
          <Link
            href="https://www.instagram.com/kristirozez/"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border border-white/20 rounded-full text-white/80 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
          >
            📸 @kristirozez
          </Link>
          <Link
            href="https://www.tiktok.com/@rozezdance"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border border-white/20 rounded-full text-white/80 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
          >
            🎵 @rozezdance
          </Link>
        </div>
      </div>
    </section>
  );
}
