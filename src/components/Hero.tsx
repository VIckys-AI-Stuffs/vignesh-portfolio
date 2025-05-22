
import React from "react";
import { ArrowDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSplineBackground from "./ui/HeroSplineBackground";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 min-h-screen flex items-center">
      {/* Spline Background */}
      <HeroSplineBackground />
      
      <div className="section-container flex flex-col items-center relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-100 mb-4 animate-fade-in">
            Vigneshwaran M
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-300 mb-8 animate-fade-in">
            Software Development Engineer
          </h2>
          <p className="text-lg mb-10 text-purple-200 max-w-2xl mx-auto animate-fade-in">
            Seasoned Mobile Application Developer with over 8 years of experience, 
            specializing in React Native. Adept at building high-performance, 
            scalable mobile applications for iOS and Android.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2">
              <a href="#contact" className="flex items-center gap-2">
                Get in touch
              </a>
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/10">
              <a href="#projects" className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                View Projects
              </a>
            </Button>
          </div>
        </div>
        
        {/* Mobile device floating illustration */}
        <div className="absolute -bottom-16 right-10 hidden lg:block animate-float">
          <div className="w-32 h-56 border-2 border-purple-400/50 rounded-3xl relative bg-black/20 backdrop-blur-sm">
            <div className="w-16 h-2 bg-purple-400/50 absolute top-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            <div className="absolute inset-2 overflow-hidden rounded-2xl bg-portfolio-primary">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-portfolio-accent/5 shimmer-effect"></div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-purple-400 hover:text-purple-200 transition-colors mt-16"
        >
          <ArrowDown className="animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
