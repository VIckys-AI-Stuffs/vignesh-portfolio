import React from "react";
import Reveal from "./ui/Reveal";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Senior Consultant – Frontend & React Native Developer",
      company: "Optimum Infosystem | Mashreq",
      location: "Chennai, India",
      period: "01/2026 - Present",
      achievements: [
        "Designing and developing KYC onboarding and compliance workflows for enterprise business banking platforms using React and React Native.",
        "Implemented sanctions and restricted-country validation systems aligned with banking compliance requirements.",
        "Developed scalable modules for company onboarding, contact management, and shareholder ownership workflows.",
        "Improved enterprise form architecture, validation systems, and frontend maintainability for complex banking workflows.",
        "Contributed to reusable component systems and shared frontend architecture across web and mobile platforms.",
      ],
    },
    {
      title: "Senior Mobility Engineer",
      company: "REACH | Vantage Solutions | Aloha Engineering Pvt. Ltd.",
      location: "Chennai, India",
      period: "08/2023 - 12/2025",
      achievements: [
        "Led modernization of enterprise React Native apps, migrating to the New Architecture using TurboModules and Fabric.",
        "Architected enterprise-grade Single Sign-On (SSO) across multiple identity providers using deep linking and secure auth flows.",
        "Implemented centralized cloud logging and observability with Datadog, improving production diagnostics and incident monitoring.",
        "Delivered cross-functional enhancements including Driving Mode and advanced filtering in Agile delivery environments.",
      ],
    },
    {
      title: "Mobile Applications — Lead",
      company: "Securra Healthcare Pvt. Ltd",
      location: "Chennai, India",
      period: "05/2022 - 07/2023",
      achievements: [
        "Led and mentored a team of six mobile developers delivering enterprise healthcare applications using React Native.",
        "Delivered customized wellness solutions for enterprise clients including Star Health Insurance.",
        "Improved performance and maintainability through state-management optimization and refactoring, reducing app load times by 20%.",
        "Built scalable white-label mobile solutions supporting configurable healthcare workflows.",
      ],
    },
    {
      title: "Member Technical Staff (Developer)",
      company: "Zoho Corporation Pvt. Ltd.",
      location: "Chennai, India",
      period: "04/2020 - 01/2022",
      achievements: [
        "Developed enterprise endpoint-management features in ManageEngine Desktop Central using Java Servlets and PostgreSQL.",
        "Built Automatic Patch Deployment (APD) workflows for large-scale enterprise environments.",
        "Contributed to the on-prem → cloud migration of Patch Manager Plus, ensuring a seamless transition and data integrity.",
      ],
    },
    {
      title: "Associate — Mobile Applications",
      company: "Lennox India Technology Centre Pvt Ltd",
      location: "Chennai, India",
      period: "07/2017 - 04/2020",
      achievements: [
        "Built enterprise cross-platform mobile apps with Xamarin.Forms for internal operations and field-service workflows.",
        "Developed the LennoxPros mobile wrapper app extending the company's eCommerce platform.",
        "Built the Greenwheels carpooling app with live tracking and route optimization (Xamarin + Firebase).",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-transparent relative">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Work <span className="gradient-text">experience</span></h2>
          <p className="text-portfolio-muted max-w-2xl mt-2">
            9 years building and leading mobile &amp; frontend teams — from Zoho to enterprise banking.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {jobs.map((job, index) => (
            <Reveal key={index} delay={0.04}>
              <div className="experience-item">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1.5 gap-1">
                  <h3 className="text-xl font-medium text-portfolio-light">{job.title}</h3>
                  <span className="chip w-fit">{job.period}</span>
                </div>
                <p className="text-portfolio-secondary mb-3 font-medium">{job.company} · <span className="text-portfolio-muted font-normal">{job.location}</span></p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-portfolio-light/65 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: "rgba(125,93,255,0.7)" }} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
