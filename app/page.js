import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <HowItWorks />
        <Footer />
    </>
  );
}