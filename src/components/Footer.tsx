
import React from "react";
import { Github, Linkedin, Mail, Smartphone } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="relative bg-portfolio-dark text-portfolio-light py-10 overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      
      {/* Circuit lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-portfolio-secondary"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-portfolio-secondary"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-portfolio-secondary"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-portfolio-secondary"></div>
      </div>
      
      <div className="section-container relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-portfolio-light">Vigneshwaran M</h2>
            <p className="text-portfolio-muted mt-1 flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Software Development Engineer
            </p>
          </div>
          
          {/* Social icons */}
          <div className="flex gap-4 mb-6 md:mb-0">
            <a href="https://github.com/VigneshDev16" target="_blank" rel="noopener noreferrer" className="text-portfolio-muted hover:text-portfolio-secondary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/vigneshwaran-mutharasan" target="_blank" rel="noopener noreferrer" className="text-portfolio-muted hover:text-portfolio-secondary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:vigneshwaran.mutharasan@gmail.com" className="text-portfolio-muted hover:text-portfolio-secondary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div>
            <p className="text-portfolio-muted text-sm">
              © {year} Vigneshwaran M. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
