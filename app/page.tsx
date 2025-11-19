import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Footer />
      <SocialIcons />
    </main>
  );
}
