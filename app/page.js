import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Team from "@/components/team";
import MethodologyWorkflow from "@/components/MethodologyWorkflow";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#183B56] selection:bg-[#183B56] selection:text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <MethodologyWorkflow />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}