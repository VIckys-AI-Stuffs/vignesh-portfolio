import React from "react";
import { MapPin, Briefcase, Book, Smartphone, PenLine } from "lucide-react";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-transparent relative overflow-hidden pt-20">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">About <span className="gradient-text">me</span></h2>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          <Reveal className="md:w-2/3">
            <p className="text-lg text-portfolio-light/80 mb-6 leading-relaxed">
              I am a seasoned Mobile Application Developer with over 9 years of experience,
              specializing in React Native. I build high-performance, scalable mobile
              applications for iOS and Android platforms.
            </p>
            <p className="text-lg text-portfolio-light/80 mb-6 leading-relaxed">
              My expertise lies in architecting complex features, optimizing performance, and
              delivering user-centric solutions. I have a proven ability to lead development teams
              and have shipped production applications across fintech and enterprise banking,
              healthcare, transportation, and career guidance — including React Native New
              Architecture migrations and secure SSO authentication.
            </p>
            <p className="text-lg text-portfolio-light/80 mb-8 leading-relaxed">
              I&apos;m open to senior React Native roles and freelance / consulting engagements where
              I can drive innovative, cross-platform mobile projects end to end.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: <Counter to={9} suffix="+" />, label: "Years experience" },
                { value: <Counter to={6} />, label: "Engineers led" },
                { value: "PyPI", label: "Open-source author" },
              ].map((stat) => (
                <div key={stat.label} className="panel text-center p-5 rounded-2xl">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-portfolio-light/65 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:w-1/3" delay={0.12}>
            <div className="panel p-6 rounded-2xl">
              <h3 className="text-lg font-medium mb-5 text-portfolio-light">Personal Info</h3>
              <ul className="space-y-4">
                {[
                  { icon: <MapPin className="text-portfolio-secondary h-5 w-5" />, label: "Location", value: "Chennai, India" },
                  { icon: <Briefcase className="text-portfolio-secondary h-5 w-5" />, label: "Experience", value: "9+ years" },
                  { icon: <Book className="text-portfolio-secondary h-5 w-5" />, label: "Education", value: "B.E Computer Science and Engineering" },
                  { icon: <Smartphone className="text-portfolio-secondary h-5 w-5" />, label: "Focus", value: "Mobile Application Development" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
                      style={{ background: "rgba(125,93,255,0.1)", border: "1px solid rgba(125,93,255,0.2)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-medium text-xs text-portfolio-secondary block uppercase tracking-wide">{item.label}</span>
                      <span className="text-portfolio-light">{item.value}</span>
                    </div>
                  </li>
                ))}
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
                    style={{ background: "rgba(125,93,255,0.1)", border: "1px solid rgba(125,93,255,0.2)" }}>
                    <PenLine className="text-portfolio-secondary h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium text-xs text-portfolio-secondary block uppercase tracking-wide">Writing</span>
                    <div className="flex gap-3 mt-0.5">
                      <a href="https://dev.to/vigneshwaran_m" target="_blank" rel="noopener noreferrer" className="text-portfolio-light hover:text-portfolio-secondary transition-colors text-sm">Dev.to</a>
                      <span className="text-portfolio-secondary/50">·</span>
                      <a href="https://medium.com/@vickymsmuthu" target="_blank" rel="noopener noreferrer" className="text-portfolio-light hover:text-portfolio-secondary transition-colors text-sm">Medium</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
