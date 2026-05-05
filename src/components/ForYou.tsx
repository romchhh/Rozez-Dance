import { LEVEL_GOALS } from "@/lib/data";

export function ForYou() {
  return (
    <section className="bg-cream-dark px-6 md:px-14 py-24">
      <div className="reveal mb-14">
        <h2 className="font-barlow-condensed font-black uppercase leading-none text-[clamp(36px,5vw,68px)]">
          This Program Is For You{" "}
          <span className="font-barlow font-normal text-[0.45em] text-text-muted align-middle ml-4">
            If You Wanna
          </span>
        </h2>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/10">
        {LEVEL_GOALS.map((level, idx) => (
          <div
            key={level.title}
            className={`bg-cream p-10 md:p-12 relative overflow-hidden group ${
              idx === 0 ? "md:border-r border-dark/10" : ""
            }`}
          >
            {/* Top bar reveal on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

            {/* Level header */}
            <div className="relative bg-dark text-white px-6 py-4 rounded-xl text-sm font-barlow-condensed font-extrabold tracking-widest uppercase mb-9 overflow-hidden">
              {level.title}
              <span className="absolute -right-5 -top-5 w-20 h-20 rounded-full bg-red/15" />
            </div>

            {/* Goals grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {level.goals.map((goal) => (
                <div key={goal.num} className="flex items-start gap-2.5">
                  <span className="font-barlow-condensed text-xs font-extrabold text-red tracking-wider mt-0.5 shrink-0">
                    {goal.num}
                  </span>
                  <span className="text-sm text-text-body leading-snug">{goal.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
