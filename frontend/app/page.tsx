import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Comparison from "@/components/sections/Comparison";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Comparison />
      <HowItWorks />
      {/* <CaseStudies /> */}
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
