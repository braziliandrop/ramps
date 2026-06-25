import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Portfolio from "./components/Portfolio";
import Featured from "./components/Featured";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <div className="grain relative min-h-screen bg-ink text-neutral-200">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Featured />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
