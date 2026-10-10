import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import Process from "@/components/Process";
import About from "@/components/About";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Platform />
        <Process />
        <About />
        <Feedback />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
