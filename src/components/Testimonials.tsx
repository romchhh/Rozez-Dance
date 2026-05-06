import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-ivory-2">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-wider reveal">
            REAL WORDS.<br />REAL WOMEN.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="relative reveal group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote */}
              <div className="border border-noir/10 p-8 group-hover:border-pink/30 transition-colors duration-300">
                <div className="font-display text-6xl text-pink/20 leading-none mb-2">&ldquo;</div>
                <p className="text-noir/70 text-sm italic leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3 border-t border-noir/8 pt-5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-noir tracking-wide">{t.name}</div>
                    <div className="text-noir/40 text-[11px]">{t.detail}</div>
                  </div>
                </div>
              </div>
              {/* Pink corner on hover */}
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-pink opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
