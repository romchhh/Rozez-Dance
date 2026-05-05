import Link from "next/link";
import { PRICING_PLANS } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream px-6 md:px-14 py-24 md:text-center">
      <div className="text-red text-[11px] font-bold tracking-[3px] uppercase mb-4">✦ Investment</div>
      <h2 className="reveal font-barlow-condensed font-black uppercase text-[clamp(36px,4vw,56px)] mb-3">
        Simple, Transparent Pricing
      </h2>
      <p className="reveal text-base text-text-muted mb-14">
        Choose your level and start your dance journey today.
      </p>

      <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-[20px] p-10 transition-all duration-300 md:text-center ${
              plan.featured
                ? "bg-dark text-white border-2 border-red"
                : "bg-white border-2 border-dark/10 hover:border-red hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(139,26,26,0.12)]"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red text-white text-[11px] font-bold tracking-[2px] uppercase px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <div className={`font-barlow-condensed text-lg font-extrabold uppercase tracking-wider mb-2 ${plan.featured ? "text-gold" : "text-dark"}`}>
              {plan.name}
            </div>

            <p className={`text-xs leading-snug mb-6 ${plan.featured ? "text-white/60" : "text-text-muted"}`}>
              {plan.description}
            </p>

            <div className={`font-playfair text-5xl font-bold mb-1 ${plan.featured ? "text-white" : "text-dark"}`}>
              ${plan.price}
            </div>
            <div className={`text-xs mb-7 ${plan.featured ? "text-white/50" : "text-text-muted"}`}>
              {plan.period}
            </div>

            <ul className="space-y-0 mb-8 md:max-w-fit md:mx-auto">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={`flex items-center gap-2.5 text-sm py-2 border-b md:justify-center ${
                    plan.featured ? "text-white/75 border-white/10" : "text-text-body border-dark/07"
                  }`}
                >
                  <span className={plan.featured ? "text-gold" : "text-red"}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="#book"
              className={`block text-center py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all border-2 ${
                plan.featured
                  ? "bg-gold border-gold text-dark hover:brightness-110"
                  : "border-red text-red hover:bg-red hover:text-white"
              }`}
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
