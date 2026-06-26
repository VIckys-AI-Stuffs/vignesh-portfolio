
import React from "react";
import { ArrowDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/ui/Magnetic";

const Hero: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`, { offset: -70 });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 min-h-screen flex items-center">
      {/* Vignette to keep the headline legible over the 3D scene */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 62% 52% at 50% 44%, rgba(5,6,12,0.6), transparent 72%)" }} />

      <div className="section-container flex flex-col items-center relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-100 mb-4 animate-fade-in">
            Vigneshwaran <span className="gradient-animate">M</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white-300 mb-8 animate-fade-in">
            I build apps that scale.
          </h2>
          <p className="text-lg mb-10 text-purple-200 max-w-2xl mx-auto animate-fade-in">
            Seasoned mobile engineer with over 9 years of experience, specializing in
            React Native. I build secure, high-performance apps for fintech, healthcare,
            and enterprise — from architecture to delivery, across iOS and Android.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Magnetic>
              <Button onClick={() => scrollToSection("contact")} className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2">
                Get in touch
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" onClick={() => scrollToSection("projects")} className="border-purple-400 text-purple-300 hover:bg-purple-500/10">
                <Smartphone className="w-4 h-4" />
                View Projects
              </Button>
            </Magnetic>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-purple-200/60 animate-fade-in">
            {["React Native", "TypeScript", "New Architecture", "Fintech", "AWS"].map((t, i) => (
              <span key={t} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-purple-400/40">·</span>}
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-200 transition-colors z-20 pointer-events-auto"
        aria-label="Scroll to about"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
        <span className="sr-only">Scroll down</span>
      </button>
    </section>
  );
};

export default Hero;
