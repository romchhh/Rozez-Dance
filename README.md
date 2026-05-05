# Rozez Dance — Next.js 14 + TypeScript + Tailwind CSS

Website for Rozez Dance Studio by Kristi Rozez. High Heels & Jazz Funk classes in Los Angeles.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **next/font** — Google Fonts (Playfair Display, Barlow, Barlow Condensed)
- **next/image** — optimized images

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles + Tailwind directives
├── components/
│   ├── Navbar.tsx        # Sticky nav with scroll effect
│   ├── Hero.tsx          # Full-screen hero section
│   ├── Program.tsx       # 3-week program overview
│   ├── ForYou.tsx        # "This program is for you" section
│   ├── Levels.tsx        # Choose your level with accordion
│   ├── About.tsx         # Kristi Rozez bio section
│   ├── Testimonials.tsx  # Student reviews
│   ├── Pricing.tsx       # Pricing cards
│   ├── Community.tsx     # Instagram community section
│   ├── Faq.tsx           # FAQ accordion
│   ├── CtaBanner.tsx     # Final CTA section
│   ├── Footer.tsx        # Footer
│   └── RevealProvider.tsx # Scroll-triggered reveal animations
└── lib/
    ├── data.ts           # All site content as typed constants
    └── useReveal.ts      # Custom hook (optional alternative)
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

All site content (courses, testimonials, pricing, FAQ) is centralized in `src/lib/data.ts` — easy to update without touching components.

Colors, fonts, and animations are configured in `tailwind.config.ts`.
