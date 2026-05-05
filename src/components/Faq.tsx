"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-cream px-6 md:px-14 py-24 max-w-4xl mx-auto">
      <h2 className="reveal font-barlow-condensed font-black uppercase text-[clamp(36px,4vw,56px)] mb-12">
        FAQ
      </h2>

      <div className="reveal space-y-0">
        {FAQ_ITEMS.map((item, i) => (
          <div key={item.question} className="border-b border-dark/12 py-6">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 text-base font-semibold text-dark text-left cursor-pointer"
              aria-expanded={openIndex === i}
            >
              {item.question}
              <span
                className="text-red text-2xl leading-none transition-transform duration-300 shrink-0"
                style={{ transform: openIndex === i ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-400 text-[15px] text-text-body leading-[1.7]"
              style={{ maxHeight: openIndex === i ? "200px" : "0" }}
            >
              <p className="pt-3">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
