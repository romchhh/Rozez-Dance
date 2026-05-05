import Link from "next/link";

export function CtaBanner() {
  return (
    <section id="book" className="bg-red text-white px-6 md:px-14 py-20 text-center">
      <h2 className="reveal font-barlow-condensed font-black uppercase text-[clamp(40px,5vw,72px)] leading-none mb-4">
        Ready to Bloom?
      </h2>
      <p className="reveal text-lg text-white/85 mb-10">
        New Season starts May 11. Limited spots available.
      </p>
      <Link
        href="mailto:rozezdance@gmail.com"
        className="inline-block bg-white text-red px-14 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] transition-all"
      >
        Book Your Spot
      </Link>
    </section>
  );
}
