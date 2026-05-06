import Link from "next/link";
import { Instagram, Youtube, Mail, Send } from "lucide-react";

const LINKS = [
  { href: "#program", label: "Program" },
  { href: "#levels",  label: "Levels" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about",   label: "About" },
  { href: "#faq",     label: "FAQ" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/kristirozez/", Icon: Instagram, label: "Instagram" },
  { href: "https://www.tiktok.com/@rozezdance",     Icon: Youtube,   label: "TikTok" },
  { href: "https://t.me/rozezdance",                Icon: Send,      label: "Telegram" },
  { href: "mailto:rozezdance@gmail.com",            Icon: Mail,      label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-ivory-2 border-t border-noir/10">
      <div className="max-w-site mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="#" className="font-display text-3xl tracking-[4px] text-noir block mb-4">
              ROZEZ<span className="text-pink">.</span>
            </Link>
            <p className="text-noir/45 text-xs leading-relaxed max-w-xs">
              High Heels &amp; Jazz Funk. West Hollywood, Los Angeles.<br />
              Bloom through dance.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-noir/35 text-[10px] font-mono tracking-[3px] uppercase mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-noir/55 text-sm hover:text-noir transition-colors pink-link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-noir/35 text-[10px] font-mono tracking-[3px] uppercase mb-5">Stay Connected</p>
            <ul className="space-y-3">
              {SOCIALS.map(({ href, Icon, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    className="flex items-center gap-3 text-noir/55 text-sm hover:text-pink transition-colors group"
                  >
                    <Icon size={14} className="flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-noir/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-noir/40 text-xs font-mono">
            © {new Date().getFullYear()} Rozez Dance Studio. Los Angeles, CA.
          </p>
          <p className="text-noir/30 text-xs font-mono">
            Femininity. Confidence. Movement.
          </p>
        </div>
      </div>
    </footer>
  );
}
