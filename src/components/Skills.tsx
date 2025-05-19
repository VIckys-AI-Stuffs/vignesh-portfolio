
import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Mobile Development",
      skills: ["React Native", "React", "TypeScript", "JavaScript", "Native Android", "Xamarin"]
    },
    {
      title: "State Management",
      skills: ["Redux", "Context API"]
    },
    {
      title: "Backend / Frameworks",
      skills: ["Java", "Hibernate", "Jersey API", "C#", ".NET", "MVC"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MS-SQL"]
    },
    {
      title: "Cloud Services",
      skills: ["Firebase", "AWS (EC2, S3, Route53)", "Azure"]
    },
    {
      title: "Version Control & CI/CD",
      skills: ["Git", "GitHub", "Jenkins", "Azure DevOps"]
    },
    {
      title: "Development Methodologies",
      skills: ["Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium mb-4 text-portfolio-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
