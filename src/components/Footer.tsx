import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-dark text-white/50 px-6 md:px-14 py-12 flex flex-col md:flex-row justify-between items-center gap-5 flex-wrap text-sm">
      <Link href="#" className="font-playfair text-xl font-black text-white tracking-widest">
        Rozez<span className="text-gold">.</span>
      </Link>

      <p>© {new Date().getFullYear()} Rozez Dance Studio. Los Angeles, CA.</p>

      <div className="flex gap-4">
        <Link
          href="https://www.instagram.com/kristirozez/"
          target="_blank"
          className="text-white/40 hover:text-gold transition-colors"
        >
          Instagram
        </Link>
        <Link
          href="https://www.tiktok.com/@rozezdance"
          target="_blank"
          className="text-white/40 hover:text-gold transition-colors"
        >
          TikTok
        </Link>
      </div>
    </footer>
  );
}
