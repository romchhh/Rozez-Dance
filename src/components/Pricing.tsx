import Link from "next/link";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="bg-noir grain">
      <div className="max-w-site mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="mb-16">
          <p className="text-pink text-[10px] font-mono tracking-[4px] uppercase mb-4 reveal">✦ Investment</p>
          <h2 className="font-display text-[clamp(42px,6vw,76px)] leading-none tracking-wider text-white reveal">
            SIMPLE &amp; HONEST<br />PRICING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`reveal relative p-8 border transition-all duration-300 group ${
                plan.featured
                  ? "border-pink bg-pink/5"
                  : "border-white/10 hover:border-white/25"
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

              <h3 className="font-display text-2xl tracking-widest text-white mb-2">
                {plan.name.toUpperCase()}
              </h3>
              <p className="text-white/35 text-xs mb-6 leading-relaxed">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display text-5xl text-white tracking-wider">${plan.price}</span>
              </div>
              <p className="text-white/30 text-[11px] font-mono tracking-widest uppercase mb-7">
                {plan.period}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/55">
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
                    : "border border-white/20 text-white/60 hover:border-pink hover:text-pink"
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
