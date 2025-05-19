
import React, { useEffect, useRef } from "react";
import { ArrowDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create stars dynamically
    if (starsContainerRef.current) {
      const container = starsContainerRef.current;
      container.innerHTML = '';
      
      // Create random number of stars (80-100)
      const starCount = Math.floor(Math.random() * 40) + 80;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        
        // Random star size
        const sizeClass = Math.random() > 0.7 
          ? 'large-star' 
          : Math.random() > 0.5 
            ? 'medium-star' 
            : 'small-star';
            
        star.className = `star ${sizeClass}`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(star);
      }
    }
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 galaxy-bg min-h-screen flex items-center">
      {/* Stars background */}
      <div ref={starsContainerRef} className="absolute inset-0 overflow-hidden"></div>
      
      {/* Galaxy elements */}
      <div className="absolute inset-0 -z-10">
        {/* Nebula glow effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-portfolio-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-portfolio-accent/5 blur-3xl"></div>
        
        {/* Circuit board lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-portfolio-secondary"></div>
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-portfolio-secondary"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-portfolio-secondary"></div>
          
          <div className="absolute bottom-0 left-1/4 w-[1px] h-full bg-portfolio-secondary"></div>
          <div className="absolute bottom-0 left-2/4 w-[1px] h-full bg-portfolio-secondary"></div>
          <div className="absolute bottom-0 left-3/4 w-[1px] h-full bg-portfolio-secondary"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      </div>

      <div className="section-container flex flex-col items-center relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-light mb-4 animate-fade-in">
            Vigneshwaran M
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-secondary mb-8 animate-fade-in">
            Software Development Engineer
          </h2>
          <p className="text-lg mb-10 text-portfolio-muted max-w-2xl mx-auto animate-fade-in">
            Seasoned Mobile Application Developer with over 8 years of experience, 
            specializing in React Native. Adept at building high-performance, 
            scalable mobile applications for iOS and Android.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-portfolio-secondary hover:bg-portfolio-secondary/80 text-portfolio-primary flex items-center gap-2">
              <a href="#contact" className="flex items-center gap-2">
                Get in touch
              </a>
            </Button>
            <Button variant="outline" className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10">
              <a href="#projects" className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                View Projects
              </a>
            </Button>
          </div>
        </div>
        
        {/* Mobile device floating illustration */}
        <div className="absolute -bottom-16 right-10 hidden lg:block animate-float">
          <div className="w-32 h-56 border-2 border-portfolio-secondary/50 rounded-3xl relative bg-black/20 backdrop-blur-sm">
            <div className="w-16 h-2 bg-portfolio-secondary/50 absolute top-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            <div className="absolute inset-2 overflow-hidden rounded-2xl bg-portfolio-primary">
              <div className="w-full h-full bg-gradient-to-br from-portfolio-secondary/10 to-portfolio-accent/5 shimmer-effect"></div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-portfolio-secondary hover:text-portfolio-light transition-colors mt-16"
        >
          <ArrowDown className="animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
