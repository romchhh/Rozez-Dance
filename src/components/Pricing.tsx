import Link from "next/link";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="bg-ivory-2">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="mb-16">
          <h2 className="font-display text-[clamp(42px,6vw,76px)] leading-none tracking-wider text-noir reveal">
            SIMPLE &amp; HONEST<br />PRICING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`reveal relative p-8 border transition-all duration-300 group ${
                plan.featured
                  ? "border-pink bg-white/60"
                  : "border-noir/10 bg-white/40 hover:border-noir/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-pink" />
              )}
              {plan.featured && (
                <p className="text-pink text-[10px] font-mono tracking-[3px] uppercase mb-4">
                  ✦ Most Popular
                </p>
              )}

              <h3 className="font-display text-2xl tracking-widest text-noir mb-2">
                {plan.name.toUpperCase()}
              </h3>
              <p className="text-noir/50 text-xs mb-6 leading-relaxed">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-5xl text-noir tracking-wider">${plan.price}</span>
              </div>
              <p className="text-noir/40 text-[11px] font-mono tracking-widest uppercase mb-7">
                {plan.period}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-noir/60">
                    <Check size={13} className="text-pink flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="#book"
                className={`block text-center text-xs font-semibold tracking-widest uppercase py-4 transition-all ${
                  plan.featured
                    ? "bg-pink text-white hover:bg-pink-light"
                    : "border border-noir/20 text-noir/60 hover:border-pink hover:text-pink"
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
