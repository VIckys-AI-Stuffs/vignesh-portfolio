import React from "react";
import { Smartphone, Layers, Server, Database, Cloud, GitBranch, Workflow } from "lucide-react";
import Reveal from "./ui/Reveal";
import TiltCard from "./ui/TiltCard";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    { title: "Mobile Development", icon: <Smartphone className="w-5 h-5" />, skills: ["React Native", "React", "TypeScript", "JavaScript", "Native Android", "Xamarin"] },
    { title: "State Management", icon: <Layers className="w-5 h-5" />, skills: ["Redux", "Context API"] },
    { title: "Backend / Frameworks", icon: <Server className="w-5 h-5" />, skills: ["Java", "Hibernate", "Jersey API", "C#", ".NET", "MVC"] },
    { title: "Database", icon: <Database className="w-5 h-5" />, skills: ["PostgreSQL", "MS-SQL"] },
    { title: "Cloud Services", icon: <Cloud className="w-5 h-5" />, skills: ["Firebase", "AWS (EC2, S3, Route53)", "Azure"] },
    { title: "Version Control & CI/CD", icon: <GitBranch className="w-5 h-5" />, skills: ["Git", "GitHub", "Jenkins", "Azure DevOps"] },
    { title: "Development Methodologies", icon: <Workflow className="w-5 h-5" />, skills: ["Agile", "Scrum"] },
  ];

  return (
    <section id="skills" className="bg-transparent relative overflow-hidden">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Skills &amp; <span className="gradient-text">expertise</span></h2>
          <p className="text-portfolio-muted max-w-2xl mt-2">
            A full-stack toolkit honed across fintech, healthcare and enterprise mobility.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.06}>
              <TiltCard className="h-full">
              <div className="panel rounded-2xl p-6 h-full group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-portfolio-secondary transition-colors group-hover:text-white"
                    style={{ background: "rgba(125,93,255,0.12)", border: "1px solid rgba(125,93,255,0.25)" }}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-medium text-portfolio-light">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
