import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-cream-dark px-6 md:px-14 py-24 text-center">
      <div className="text-red text-[11px] font-bold tracking-[3px] uppercase mb-4">✦ What Students Say</div>
      <h2 className="reveal font-barlow-condensed font-black uppercase text-[clamp(36px,4vw,56px)] mb-14">
        Real Stories, Real Transformations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="reveal relative bg-cream rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Decorative quote */}
            <span className="absolute top-3 left-6 font-playfair text-[80px] text-red/15 leading-none select-none">
              &ldquo;
            </span>

            <div className="text-gold text-sm tracking-wider mb-3">★★★★★</div>

            <p className="text-[15px] text-text-body leading-[1.7] mb-6 pt-4">{t.text}</p>

            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-warm-gray shrink-0">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
              </div>
              <div>
                <div className="font-bold text-sm text-dark">{t.name}</div>
                <div className="text-xs text-text-muted">{t.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
