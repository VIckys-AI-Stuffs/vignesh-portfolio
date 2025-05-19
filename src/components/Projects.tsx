
import React from "react";

interface Project {
  name: string;
  year: string;
  technologies: string[];
  description: string;
  impact: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
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
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-portfolio-primary">{project.name}</h3>
                  <span className="text-sm bg-gray-100 rounded-full px-3 py-1 font-medium text-portfolio-muted">
                    {project.year}
                  </span>
                </div>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-portfolio-muted mb-2">Impact:</h4>
                  <p className="text-gray-700">{project.impact}</p>
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
