import type { Metadata } from "next";
import { RevealProvider } from "@/components/RevealProvider";
import { Playfair_Display, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rozez Dance — High Heels & Jazz Funk | Los Angeles",
  description:
    "Bloom through dance. High Heels & Jazz Funk classes in Los Angeles by Kristi Rozez. 3-week technique program for beginners and intermediate dancers.",
  keywords: [
    "heels dance LA",
    "jazz funk Los Angeles",
    "heels classes West Hollywood",
    "Kristi Rozez",
    "Rozez Dance",
  ],
  openGraph: {
    title: "Rozez Dance — High Heels & Jazz Funk | Los Angeles",
    description: "Bloom through dance. High Heels classes in LA by Kristi Rozez.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${barlow.variable} ${barlowCondensed.variable} font-barlow antialiased`}
      >
        <RevealProvider>{children}</RevealProvider>
      </body>
    </html>
  );
}
