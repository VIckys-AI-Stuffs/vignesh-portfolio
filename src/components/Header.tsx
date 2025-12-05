
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-portfolio-primary bg-opacity-80 shadow-lg py-3 backdrop-blur-sm border-b border-portfolio-secondary/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <div>
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold text-portfolio-light group"
          >
            <span className="group-hover:text-portfolio-secondary transition-colors">Vigneshwaran</span>
            <span className="text-portfolio-secondary"> M</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="font-medium text-portfolio-muted hover:text-portfolio-secondary transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-light focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-portfolio-secondary" />
          ) : (
            <Menu size={24} className="text-portfolio-light" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-portfolio-primary/95 backdrop-blur-md shadow-lg py-4 md:hidden border-b border-portfolio-secondary/20">
            <div className="section-container flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-medium text-portfolio-muted hover:text-portfolio-secondary py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
