import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SmoothCanvas from "@/components/SmoothCanvas";

export default function Home() {
  return (
    <>
    <SmoothCanvas />

    <div className="site-content">
      <IntroLoader />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
    </div>
    </>
  );
}