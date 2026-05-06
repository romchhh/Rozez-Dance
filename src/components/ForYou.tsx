import { LEVEL_GOALS } from "@/lib/data";

export function ForYou() {
  return (
    <section className="bg-noir-2">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="mb-16 reveal">
          <p className="text-pink text-[10px] font-mono tracking-[4px] uppercase mb-4">
            ✦ Who It&apos;s For
          </p>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-none tracking-wider text-white">
            THIS PROGRAM IS FOR YOU
            <br />
            <span className="text-white/30 text-[0.5em] tracking-[6px] font-body font-light">IF YOU WANNA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {LEVEL_GOALS.map((level, idx) => (
            <div key={level.title} className={`bg-noir-2 p-10 group relative overflow-hidden`}>
              {/* Hover glow */}
              <div className="absolute inset-0 bg-pink/0 group-hover:bg-pink/5 transition-colors duration-500" />

              {/* Level label */}
              <div className="inline-flex items-center gap-3 mb-10">
                <span className="w-6 h-px bg-pink" />
                <span className="text-pink text-[10px] font-mono tracking-[3px] uppercase">
                  {idx === 0 ? "Beginner" : "Intermediate"}
                </span>
              </div>

              <h3 className="font-display text-2xl tracking-widest text-white mb-8">
                {level.title.toUpperCase()}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {level.goals.map((g) => (
                  <div key={g.num} className="group/item">
                    <div className="text-pink font-mono text-xs tracking-widest mb-1.5">/{g.num}</div>
                    <div className="text-white/55 text-sm leading-snug">{g.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
