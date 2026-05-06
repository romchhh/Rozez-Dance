# Rozez Dance — v2 (Kristi Moves aesthetic)

Next.js 14 · TypeScript · Tailwind CSS · Lucide React

## Design System

| Token       | Value       |
|-------------|-------------|
| Pink        | `#FF1F8E`   |
| Noir        | `#0A0A0A`   |
| Ivory       | `#F5F2EE`   |
| Display     | Bebas Neue  |
| Body        | DM Sans     |
| Mono        | DM Mono     |

## Special Features
- Custom pink cursor (dot + ring)
- Scroll-reveal animations (fade up / from-left / from-right)
- Marquee ticker bands
- Grain texture overlay
- Hero zoom animation
- Mobile full-screen nav

## Get Started

```bash
npm install
npm run dev
```

## Your Photos

Place these files in the `/public` directory:
- `541554910_18523535326004241_1418162069959137408_n.jpg` — mobile hero
- `Знімок екрана 2026-05-05 о 11.07.08.png` — desktop hero

Then the hero background will automatically use them.

## Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Providers.tsx      ← cursor + scroll-reveal
│   ├── Navbar.tsx
│   ├── Hero.tsx           ← your custom photos
│   ├── ManifestoBanner.tsx
│   ├── Program.tsx
│   ├── ForYou.tsx
│   ├── Levels.tsx
│   ├── About.tsx
│   ├── Stats.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── Community.tsx
│   ├── Faq.tsx
│   ├── CtaBanner.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts            ← all content
```
