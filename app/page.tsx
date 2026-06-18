import "./responsive.css";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { WhyNorthForge } from "@/components/WhyNorthForge";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <Pricing />
        <Process />
        <WhyNorthForge />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
