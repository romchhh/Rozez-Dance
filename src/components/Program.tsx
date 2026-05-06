import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Video, MapPin } from "lucide-react";

const DETAILS = [
  { Icon: Calendar, text: "Classes 2 times a week" },
  { Icon: Clock,    text: "7 classes = 11h of training (1.5h each)" },
  { Icon: Video,    text: "Professional filming solo at end of program" },
  { Icon: MapPin,   text: "West Hollywood, Los Angeles" },
];

export function Program() {
  return (
    <section id="program" className="bg-ivory">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-pink text-[10px] font-mono tracking-[4px] uppercase mb-5 reveal">
            ✦ The Program
          </p>
          <h2 className="font-display text-[clamp(42px,6vw,76px)] leading-none tracking-wider mb-8 reveal">
            <span className="text-pink">3 WEEKS</span><br />
            TECHNIQUE<br />
            DANCE PROGRAM
          </h2>

          <p className="text-noir/60 text-sm font-medium tracking-widest uppercase mb-6 reveal">
            2 Levels Available
          </p>

          <div className="space-y-3 mb-8 reveal">
            <div className="flex items-center gap-3 text-sm text-noir/70">
              <span className="w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />
              High Heels from 0 / Beginners Course
            </div>
            <div className="flex items-center gap-3 text-sm text-noir/70">
              <span className="w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />
              High Heels Intermediate Course
            </div>
          </div>

          <div className="border-t border-noir/10 pt-8 space-y-4 mb-10 reveal">
            {DETAILS.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-4 text-sm text-noir/70">
                <Icon size={16} className="text-pink flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5 reveal">
            <Link
              href="#book"
              className="inline-block bg-noir text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 hover:bg-pink transition-colors"
            >
              Book Your Spot
            </Link>
            <Link href="#levels" className="text-noir text-xs font-medium tracking-widest uppercase pink-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative img-zoom overflow-hidden aspect-[3/4] reveal from-right">
          <Image
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900&q=80"
            alt="Dance class"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Pink corner accent */}
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-pink" />
        </div>
      </div>
    </section>
  );
}
