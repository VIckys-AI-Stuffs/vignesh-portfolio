
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import emailjs from 'emailjs-com';

const Index: React.FC = () => {
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    emailjs.init("LifyLbGoAq9mRm96c");
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
