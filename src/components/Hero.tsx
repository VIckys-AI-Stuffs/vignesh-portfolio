
import React from "react";
import { ArrowDown, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        
        {/* Circuit board lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-portfolio-secondary"></div>
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-portfolio-secondary"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-portfolio-secondary"></div>
          
          <div className="absolute bottom-0 left-1/4 w-[1px] h-full bg-portfolio-secondary"></div>
          <div className="absolute bottom-0 left-2/4 w-[1px] h-full bg-portfolio-secondary"></div>
          <div className="absolute bottom-0 left-3/4 w-[1px] h-full bg-portfolio-secondary"></div>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-400/10 blur-xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxNSAwIEwgMCAwIDAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjgsIDE0OSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="section-container flex flex-col items-center relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-primary mb-4 animate-fade-in">
            Vigneshwaran M
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-secondary mb-8 animate-fade-in">
            Software Development Engineer
          </h2>
          <p className="text-lg mb-10 text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Seasoned Mobile Application Developer with over 8 years of experience, 
            specializing in React Native. Adept at building high-performance, 
            scalable mobile applications for iOS and Android.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-portfolio-secondary hover:bg-blue-600 flex items-center gap-2">
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
          <div className="w-32 h-56 border-4 border-gray-300 rounded-3xl relative bg-black/5 backdrop-blur-sm">
            <div className="w-16 h-2 bg-gray-300 absolute top-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            <div className="absolute inset-2 overflow-hidden rounded-2xl bg-blue-50/30">
              <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-portfolio-secondary/20"></div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-portfolio-secondary hover:text-portfolio-primary transition-colors mt-16"
        >
          <ArrowDown className="animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
