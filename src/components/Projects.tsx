
import React from "react";

interface Project {
  name: string;
  year: string;
  technologies: string[];
  description: string;
  impact: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "indmoney-mcp",
      year: "2026",
      technologies: ["Python", "Playwright", "MCP", "Claudde", "AI"],
      description: "A Python-based Model Context Protocol (MCP) server that lets Claude read your INDmoney portfolio in plain English. Covers Indian stocks, mutual funds, US stocks, gold, credit cards, loans, and Experian credit score — all via browser automation with persistent AES-256-GCM encrypted sessions.",
      impact: "Published on PyPI (`pip install indmoney-mcp`), listed on the awesome-mcp-servers repository (88k stars), and registered on the Glama MCP registry. Solves real session-expiry problems that plagued earlier Node.js implementations.",
      link: "https://github.com/VIckys-AI-Stuffs/indmoney-mcp-python"
    },
    {
      name: "BAROS Surgery Health Risk Tracker",
      year: "2023",
      technologies: ["React Native", "Redux", "Firebase"],
      description: "Created a customized mobile solution for tracking post-surgery health metrics for BAROSurgery patients, featuring activity loggers and health risk score calculations.",
      impact: "The app significantly improved patient engagement and adherence to post-surgery protocols, contributing to better health outcomes."
    },
    {
      name: "Securra Care App",
      year: "2022",
      technologies: ["React Native", "Redux", "Firebase", "TypeScript"],
      description: "Developed a cross-platform wellness tracking app that enabled users to monitor their health metrics, receive personalized diet plans, and consult with healthcare professionals in real-time.",
      impact: "The app achieved a 20% increase in user engagement and was recognized for its intuitive UI/UX design, leading to a significant boost in user satisfaction."
    },
    {
      name: "Rewind Alumni Engagement Platform",
      year: "2022",
      technologies: ["React Native", "Python", "AWS (EC2, S3, Route53)"],
      description: "Led the development of a comprehensive Web and mobile-based platform to facilitate alumni engagement, enabling features such as event management, networking, and content sharing.",
      impact: "Successfully launched within a tight deadline, the platform saw high adoption rates among alumni, enhancing community engagement and participation."
    },
    {
      name: "PassionAi Career Guidance Platform",
      year: "2022",
      technologies: ["React Native", "React", "AWS"],
      description: "Developed a mobile and web-based platform offering personalized career guidance for students, incorporating experts recommendations and interactive tools for career exploration.",
      impact: "The platform received positive feedback from our client for its user-friendly interface and innovative approach to career guidance."
    },
    {
      name: "Greenwheels Carpooling Application",
      year: "2018",
      technologies: ["Xamarin", "Firebase", "Google Maps API"],
      description: "Developed an internal carpooling app for employees, featuring live tracking and route optimization similar to popular ride-sharing apps like OLA and Quickride.",
      impact: "The app promoted sustainable commuting practices within the organization, reducing the company's carbon footprint and improving employee satisfaction."
    }, {
      name: "SPark - Smart Parking Solution",
      year: "2017",
      technologies: ["Xamarin", "Firebase", "Google Maps API", "Geofencing"],
      description: "Geofencing Solutions: Developed SPARK, a mobile app using Xamarin, that efficiently allocated parking slots for employees through geofencing technology, improving parking management and user convenience.",
      impact: "The app streamlined parking operations, reduced congestion, and enhanced the overall employee experience."
    }
  ];

  return (
    <section id="projects" className="bg-portfolio-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-portfolio-secondary/5 blur-3xl"></div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden hover:border-portfolio-secondary/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold text-portfolio-light">{project.name}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-secondary hover:text-portfolio-secondary/80 transition-colors"
                        title="View on GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <span className="text-sm bg-portfolio-primary/50 rounded-full px-3 py-1 font-medium text-portfolio-muted border border-portfolio-secondary/10">
                    {project.year}
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-portfolio-secondary/10 text-portfolio-secondary px-2 py-1 rounded-md border border-portfolio-secondary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-portfolio-light/70 mb-4">{project.description}</p>

                <div className="border-t border-portfolio-secondary/10 pt-4">
                  <h4 className="text-sm font-medium text-portfolio-muted mb-2">Impact:</h4>
                  <p className="text-portfolio-light/70">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
