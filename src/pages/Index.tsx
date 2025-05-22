
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

const Index: React.FC = () => {
  // Initialize EmailJS when the component mounts
  useEffect(() => {
    emailjs.init("LifyLbGoAq9mRm96c");
    
    // Stars animation in background (creates a subtle galaxy movement)
    const createStars = () => {
      const starsContainer = document.createElement('div');
      starsContainer.className = 'fixed inset-0 pointer-events-none z-[-1]';
      document.body.appendChild(starsContainer);
      
      // Create random number of stars (30-50)
      const starCount = Math.floor(Math.random() * 20) + 30;
      
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
        
        starsContainer.appendChild(star);
      }
    };
    
    createStars();
    
    return () => {
      // Clean up stars on unmount
      const starsContainer = document.querySelector('.fixed.inset-0.pointer-events-none');
      if (starsContainer) {
        document.body.removeChild(starsContainer);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-portfolio-primary">
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
    </div>
  );
};

export default Index;
