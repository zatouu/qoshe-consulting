import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problems from "@/components/Problems";
import About from "@/components/About";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Innovation from "@/components/Innovation";
import CaseStudies from "@/components/CaseStudies";
import Resources from "@/components/Resources";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
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
      <Method />
      <Innovation />
      <CaseStudies />
      <Resources />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
