import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}