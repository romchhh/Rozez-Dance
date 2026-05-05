import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_IMAGES } from "@/lib/data";

export function Community() {
  return (
    <section id="community" className="bg-dark text-white px-6 md:px-14 py-24 text-center">
      <div className="text-gold text-[11px] font-bold tracking-[3px] uppercase mb-4">✦ Community</div>

      <h2 className="reveal font-barlow-condensed font-black uppercase text-[clamp(40px,5vw,72px)] leading-none mb-5">
        Join the Rozez
        <br />
        Family 🌹
      </h2>

      <p className="reveal text-base text-white/60 max-w-xl mx-auto leading-[1.7] mb-14">
        Follow our journey, get inspired, and connect with a community of dancers who lift each other
        up.
      </p>

      <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {INSTAGRAM_IMAGES.map((img) => (
          <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover saturate-[0.8] group-hover:saturate-100 group-hover:scale-[1.08] transition-all duration-400"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-red/0 group-hover:bg-red/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Link
        href="https://www.instagram.com/kristirozez/"
        target="_blank"
        className="text-gold text-lg font-semibold tracking-wide inline-flex items-center gap-2 hover:gap-4 transition-all"
      >
        Follow @kristirozez →
      </Link>
    </section>
  );
}
