import { Users, CalendarDays, MapPin, Star } from "lucide-react";

const STATS = [
  { Icon: Users,       num: "500+",  label: "Students" },
  { Icon: CalendarDays,num: "50+",   label: "Classes Monthly" },
  { Icon: MapPin,      num: "3",     label: "Studios in LA" },
  { Icon: Star,        num: "100%",  label: "Confidence Boost" },
];

export function Stats() {
  return (
    <section className="bg-ivory border-y border-noir/8">
      <div className="max-w-site mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map(({ Icon, num, label }) => (
            <div key={label} className="text-center reveal">
              <Icon size={22} className="text-pink mx-auto mb-3" strokeWidth={1.5} />
              <div className="font-display text-[clamp(36px,5vw,56px)] text-noir tracking-wider leading-none mb-1 stat-num">
                {num}
              </div>
              <div className="text-noir/40 text-[10px] font-mono tracking-[2px] uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
