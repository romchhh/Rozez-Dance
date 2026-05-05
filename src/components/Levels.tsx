"use client";

import { useState } from "react";
import Image from "next/image";
import { COURSES, type CourseDetail } from "@/lib/data";

function CourseCard({ course }: { course: CourseDetail }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal">
      <h3 className="font-barlow-condensed text-xl font-extrabold uppercase tracking-wide text-red mb-4">
        {course.title}
      </h3>
      <p className="text-[15px] text-text-body leading-relaxed mb-7 pb-7 border-b border-dark/10">
        {course.description}
      </p>

      {/* Accordion */}
      <div className="border-b border-dark/10 py-5">
        <button
          className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider text-dark cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          What Will You Learn?
          <span className="text-2xl text-text-muted leading-none transition-transform duration-300"
                style={{ transform: open ? "rotate(45deg)" : "none" }}>
            +
          </span>
        </button>

        <div
          className="overflow-hidden transition-all duration-400"
          style={{ maxHeight: open ? "400px" : "0" }}
        >
          <ul className="pt-4 pb-1 space-y-2">
            {course.learnItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-text-body leading-snug">
                <span className="text-red shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Video preview */}
      <div className="relative mt-7 rounded-2xl overflow-hidden aspect-video bg-dark cursor-pointer group">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-400"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-red/85 flex items-center justify-center pl-1 text-white text-2xl group-hover:scale-110 transition-transform">
            ▶
          </div>
        </div>
      </div>
    </div>
  );
}

export function Levels() {
  return (
    <section id="levels" className="bg-cream px-6 md:px-14 py-24">
      <h2 className="reveal font-barlow-condensed font-black uppercase text-[clamp(40px,5vw,72px)] mb-14">
        Choose Your Level
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
