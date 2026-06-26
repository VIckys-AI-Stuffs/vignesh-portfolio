import React from "react";
import { Github, Linkedin, Mail, Smartphone } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent text-portfolio-light py-12 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-portfolio-secondary" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-portfolio-secondary" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-portfolio-secondary" />
      </div>

      <div className="section-container relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-portfolio-light">Vigneshwaran <span className="gradient-text">M</span></h2>
            <p className="text-portfolio-muted mt-1 flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Lead Mobile Engineer · Fintech &amp; Enterprise
            </p>
          </div>

          <div className="flex gap-3">
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/VigneshDev16", label: "GitHub" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/vigneshwaran-mutharasan", label: "LinkedIn" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:vigneshwaran.mutharasan@gmail.com", label: "Email" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-portfolio-muted hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {s.icon}
              </a>
            ))}
          </div>

          <p className="text-portfolio-muted text-sm">© {year} Vigneshwaran M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
