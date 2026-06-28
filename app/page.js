import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <CTA />
        <Footer />
    </>
  );
}