import Image from "next/image";
import Link from "next/link";

const INCLUDES = [
  { icon: "📅", text: "Classes 2 times a week" },
  { icon: "⏱", text: "7 classes = 11h of training (1.5h each)" },
  { icon: "🎬", text: "Professional filming solo at end of program" },
];

export function Program() {
  return (
    <section
      id="program"
      className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 px-6 md:px-14 py-24 bg-cream items-center"
    >
      {/* Text */}
      <div className="reveal">
        <div className="text-red text-[11px] font-bold tracking-[3px] uppercase mb-4">✦ The Program</div>

        <h2 className="font-barlow-condensed font-black uppercase leading-none text-[clamp(36px,4vw,56px)] mb-7">
          <span className="text-red">3 Weeks</span> Technique
          <br />
          Dance Program
          <br />
          by Kristi Rozez
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <strong className="block text-xs font-bold tracking-widest uppercase text-dark mb-2.5">2 Levels:</strong>
            <div className="flex items-center gap-2.5 text-[15px] text-text-body mb-2">
              <span className="text-red">👠</span> High Heels from 0 / Beginners Course
            </div>
            <div className="flex items-center gap-2.5 text-[15px] text-text-body">
              <span className="text-red">💃</span> High Heels Intermediate Course
            </div>
          </div>

          <div>
            <strong className="block text-xs font-bold tracking-widest uppercase text-dark mb-2.5">What&apos;s Included:</strong>
            {INCLUDES.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-[15px] text-text-body mb-2">
                <span className="text-red">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div>
            <strong className="block text-xs font-bold tracking-widest uppercase text-dark mb-2.5">Location:</strong>
            <div className="flex items-center gap-2.5 text-[15px] text-text-body">
              <span className="text-red">📍</span> West Hollywood, Los Angeles
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="#book"
            className="inline-block bg-red text-white px-11 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-red-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(139,26,26,0.4)] transition-all"
          >
            Book Your Spot
          </Link>
          <Link
            href="#levels"
            className="text-red font-bold text-sm flex items-center gap-1.5 hover:gap-3 transition-all"
          >
            Learn more →
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="reveal relative rounded-[20px] overflow-hidden aspect-[3/4] bg-dark group">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80"
          alt="Dance class"
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
      </div>
    </section>
  );
}
