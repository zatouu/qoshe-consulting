import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problems from "@/components/Problems";
import About from "@/components/About";
import Services from "@/components/Services";
import Innovation from "@/components/Innovation";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Stats />
      <Problems />
      <About />
      <Services />
      <Innovation />
      <Pricing />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
