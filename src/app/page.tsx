import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ManifestoBanner } from "@/components/ManifestoBanner";
import { Program } from "@/components/Program";
import { ForYou } from "@/components/ForYou";
import { Levels } from "@/components/Levels";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Community } from "@/components/Community";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ManifestoBanner />
        <Program />
        <ForYou />
        <Levels />
        <About />
        <Stats />
        <Testimonials />
        <Pricing />
        <Community />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
