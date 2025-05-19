
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-primary mb-4 animate-fade-in">
            Vigneshwaran M
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-muted mb-8 animate-fade-in">
            Software Development Engineer
          </h2>
          <p className="text-lg mb-10 text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Seasoned Mobile Application Developer with over 8 years of experience, 
            specializing in React Native. Adept at building high-performance, 
            scalable mobile applications for iOS and Android.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-portfolio-secondary hover:bg-blue-600">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button variant="outline">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-portfolio-secondary transition-colors mt-16"
        >
          <ArrowDown className="animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
