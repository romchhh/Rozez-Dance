import Image from "next/image";
import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";
import { INSTAGRAM_IMAGES } from "@/lib/data";

export function Community() {
  return (
    <section id="community" className="bg-ivory">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 reveal">
          <div>
            <h2 className="font-display text-[clamp(40px,5vw,68px)] leading-none tracking-wider">
              JOIN THE<br />MOVEMENT 🌹
            </h2>
          </div>
          <Link
            href="https://www.instagram.com/kristirozez/"
            target="_blank"
            className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-noir/60 hover:text-pink transition-colors group flex-shrink-0"
          >
            <Instagram size={15} />
            @kristirozez
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 reveal">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden img-zoom group ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover saturate-[0.85] group-hover:saturate-100 transition-all duration-600"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
