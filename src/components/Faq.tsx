"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-ivory-2">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-pink text-[10px] font-mono tracking-[4px] uppercase mb-4 reveal">✦ FAQ</p>
          <h2 className="font-display text-[clamp(40px,5vw,68px)] leading-none tracking-wider mb-14 reveal">
            GOT QUESTIONS?
          </h2>

          <div className="reveal space-y-0">
            {FAQ_ITEMS.map((item, i) => (
              <div key={item.question} className="border-b border-noir/10">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold text-noir">{item.question}</span>
                  {open === i
                    ? <Minus size={16} className="text-pink flex-shrink-0" />
                    : <Plus size={16} className="text-noir/40 flex-shrink-0" />}
                </button>

                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: open === i ? "200px" : "0" }}
                >
                  <p className="text-sm text-noir/55 leading-relaxed pb-5">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
