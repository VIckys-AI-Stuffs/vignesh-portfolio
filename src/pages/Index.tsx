
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";
import Background from "@/components/Background";
import Scene3D from "@/components/Scene3D";
import Interactive from "@/components/Interactive";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import TechMarquee from "@/components/TechMarquee";
import ScrollToTop from "@/components/ScrollToTop";
import emailjs from 'emailjs-com';

const Index: React.FC = () => {
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    emailjs.init("LifyLbGoAq9mRm96c");
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-transparent">
      <Preloader />
      <ScrollProgress />
      <CommandPalette />
      <Background />
      <Scene3D />
      <Interactive />
      <Stars />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <TechMarquee />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
