
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import emailjs from 'emailjs-com';
import { GalaxyHeroSection } from "@/components/ui/galaxy-interactive-hero-section";

const Index: React.FC = () => {
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    emailjs.init("LifyLbGoAq9mRm96c");
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-portfolio-primary">
      <Header />
      <main className="flex-grow">
        {/* Use the new GalaxyHeroSection instead of Hero */}
        <div className="h-screen">
          <GalaxyHeroSection />
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
