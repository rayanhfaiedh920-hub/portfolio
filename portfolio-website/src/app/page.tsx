import Hero from "@/components/Hero";
import About from "@/components/About";
import Talent from "@/components/Talent";
import Services from "@/components/Services";
import BrandPhilosophy from "@/components/BrandPhilosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <About />
      <Talent />
      <Services />
      <BrandPhilosophy />
      <Contact />
    </main>
  );
}
