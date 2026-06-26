
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

  const blogLinks = [
    { name: "Dev.to", url: "https://dev.to/vigneshwaran_m" },
    { name: "Medium", url: "https://medium.com/@vickymsmuthu" }
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
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`, { offset: -70 });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08070f]/75 shadow-lg py-3 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <div>
          <button 
           onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-bold text-portfolio-light group"
          >
            <span className="group-hover:text-portfolio-secondary transition-colors">Vigneshwaran</span>
            <span className="gradient-text"> M</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="font-medium text-portfolio-muted hover:text-portfolio-secondary transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="flex items-center gap-3 border-l border-portfolio-secondary/20 pl-6">
            {blogLinks.map((blog) => (
              <a
                key={blog.name}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-portfolio-muted hover:text-portfolio-secondary transition-colors text-sm"
              >
                {blog.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event("open-cmdk"))}
            className="flex items-center gap-1 text-xs text-portfolio-muted hover:text-portfolio-secondary border border-white/10 rounded-md px-2 py-1 transition-colors"
            aria-label="Open command palette"
          >
            <span className="text-[13px] leading-none">⌘</span>K
          </button>
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
              <div className="border-t border-portfolio-secondary/20 pt-4 flex gap-4">
                {blogLinks.map((blog) => (
                  <a
                    key={blog.name}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-portfolio-muted hover:text-portfolio-secondary transition-colors text-sm"
                  >
                    {blog.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
