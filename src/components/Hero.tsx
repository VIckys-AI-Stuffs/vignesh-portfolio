
import React from "react";
import { ArrowDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSplineBackground from "./ui/HeroSplineBackground";

const Hero: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-16 min-h-screen flex items-center">
      {/* Spline Background */}
      <HeroSplineBackground />
      
      {/* Blur overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-[1]" />
      
      <div className="section-container flex flex-col items-center relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-100 mb-4 animate-fade-in">
            Vigneshwaran M
          </h1>
          <h2 className="text-xl md:text-2xl text-white-300 mb-8 animate-fade-in">
            Software Development Engineer
          </h2>
          <p className="text-lg mb-10 text-purple-200 max-w-2xl mx-auto animate-fade-in">
            Seasoned Mobile Application Developer with over 8 years of experience, 
            specializing in React Native. Adept at building high-performance, 
            scalable mobile applications for iOS and Android.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button onClick={() => scrollToSection("contact")} className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2">
                Get in touch
             
            </Button>
            <Button  variant="outline" onClick={() => scrollToSection("projects")} className="border-purple-400 text-purple-300 hover:bg-purple-500/10">
                <Smartphone className="w-4 h-4" />
                View Projects
            </Button>
          </div>
        </div>
        
        {/* Mobile device floating illustration */}
        <div className="absolute -bottom-16 right-10 hidden lg:block animate-float">
          <div className="w-36 h-64 border-2 border-purple-400/50 rounded-3xl relative bg-black/30 backdrop-blur-sm shadow-lg shadow-purple-500/20">
            <div className="w-16 h-2 bg-purple-400/50 absolute top-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            <div className="absolute inset-3 top-6 overflow-hidden rounded-2xl bg-[#1a1025]">
              {/* Mini Code Editor UI */}
              <div className="p-2 space-y-1.5">
                {/* Status bar */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                {/* Code lines */}
                <div className="flex items-center gap-1">
                  <span className="text-[6px] text-purple-400 font-mono">const</span>
                  <span className="text-[6px] text-blue-300 font-mono">App</span>
                  <span className="text-[6px] text-white font-mono">=</span>
                  <span className="text-[6px] text-yellow-300 font-mono">()</span>
                </div>
                <div className="flex items-center gap-1 pl-2">
                  <span className="text-[6px] text-purple-400 font-mono">return</span>
                  <span className="text-[6px] text-green-300 font-mono">{"<View>"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[6px] text-green-300 font-mono">{"<Text>"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-[6px] text-orange-300 font-mono">Hello!</span>
                </div>
                <div className="pl-4">
                  <span className="text-[6px] text-green-300 font-mono">{"</Text>"}</span>
                </div>
                <div className="pl-2">
                  <span className="text-[6px] text-green-300 font-mono">{"</View>"}</span>
                </div>
                {/* Terminal output */}
                <div className="mt-2 pt-2 border-t border-purple-500/30">
                  <div className="text-[5px] text-green-400 font-mono">$ npm start</div>
                  <div className="text-[5px] text-purple-300 font-mono">✓ Building...</div>
                  <div className="text-[5px] text-green-400 font-mono animate-pulse">● Running</div>
                </div>
              </div>
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
