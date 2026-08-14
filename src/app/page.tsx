import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Programs } from "@/components/Programs";
import { Courses } from "@/components/Courses";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Programs />
      <Courses />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <FAQ />
    </main>
  );
}
