"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Play } from "lucide-react";
import { COURSES, type CourseDetail } from "@/lib/data";

function CourseCard({ course }: { course: CourseDetail }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal">
      <h3 className="font-display text-2xl md:text-3xl tracking-wider text-pink mb-3">
        {course.title.toUpperCase()}
      </h3>
      <p className="text-noir/60 text-sm leading-relaxed mb-7 pb-7 border-b border-noir/10">
        {course.description}
      </p>

      {/* Accordion */}
      <div className="border-b border-noir/10 pb-5 mb-7">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between text-xs font-semibold tracking-widest uppercase text-noir py-4"
          aria-expanded={open}
        >
          What Will You Learn?
          {open ? <Minus size={15} className="text-pink" /> : <Plus size={15} className="text-pink" />}
        </button>

        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: open ? "400px" : "0" }}
        >
          <ul className="space-y-2.5 pb-2">
            {course.learnItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-noir/60">
                <span className="text-pink mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Video thumb */}
      <div className="relative rounded-none overflow-hidden aspect-video bg-noir group img-zoom">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-85 transition-opacity"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 border border-white/60 flex items-center justify-center group-hover:border-pink group-hover:bg-pink/20 transition-all">
            <Play size={18} className="text-white ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Levels() {
  return (
    <section id="levels" className="bg-ivory">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="mb-16 reveal">
          <h2 className="font-display text-[clamp(42px,6vw,80px)] leading-none tracking-wider">
            YOUR PATH STARTS HERE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {COURSES.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
    </section>
  );
}
