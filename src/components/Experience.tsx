
import React from "react";

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
      title: "Mobility Engineer",
      company: "REACH | Vantage Solutions | Aloha Engineering Pvt. Ltd.",
      location: "Chennai, India",
      period: "08/2023 - present",
      achievements: [
        "Took ownership of upgrading the REACH Mobile App framework to the latest version, ensuring improved performance, security, and compatibility with the latest mobile OS updates.",
        "Played a key role in implementing new features like Driving Mode, Filter and Sort, enhancing user experience, and expanding app functionality to meet evolving customer needs.",
        "Led the integration of Single Sign-On (SSO) in the application, enabling seamless authentication with multiple Identity Providers through Webviews and Deep-linking, improving user accessibility.",
        "Integrated Datadog for cloud-based logging and analytics, significantly improving issue tracking and system reliability through real-time monitoring and alerts."
      ]
    },
    {
      title: "Mobile Applications - Lead",
      company: "Securra Health Technologies Pvt. Ltd",
      location: "Chennai, India",
      period: "05/2022 - 07/2023",
      achievements: [
        "Directed and mentored a team of six mobile developers, driving the successful delivery of an in-house healthcare solution with features such as personalized wellness programs, activity tracking, and real-time doctor consultations.",
        "Led the customization and enhancement of the Securra Care App for high-profile clients like Star Health Insurance, utilizing React Native to deliver tailored features that met specific client requirements.",
        "Optimized the app's performance by refactoring code and implementing advanced state management techniques, resulting in a 20% reduction in app load times and increased user retention.",
        "Developed and deployed a white-label solution for BAROSurgery, incorporating activity loggers and Health Risk Score calculations post-Bariatric Surgery, delivering a tailored user experience."
      ]
    },
    {
      title: "Technical Lead",
      company: "Eternosoft LLP",
      location: "Chennai, India",
      period: "01/2022 - 04/2022",
      achievements: [
        "Led a team of full-stack developers in building a Web and mobile-based Alumni Engagement platform using React Native and Python, hosted on AWS using EC2, S3, and Route53.",
        "Developed the mobile interface for PassionAi, a career guidance platform, leveraging React Native to create a seamless user experience across both Android and iOS platforms.",
        "Orchestrated the cloud deployment process, ensuring scalability and high availability of the applications on AWS infrastructure."
      ]
    },
    {
      title: "Member Technical Staff (Developer)",
      company: "Zoho Corporation Pvt. Ltd.",
      location: "Chennai, India",
      period: "04/2020 - 01/2022",
      achievements: [
        "Worked as a server developer on the Patch Management Module of Manage Engine Desktop Central, focusing on feature enhancements for Automatic Patch Deployment (APD) using Java Servlets and PostgreSQL.",
        "Contributed to the migration of features from the on-premise version to the cloud version of Patch Manager Plus, ensuring seamless transition and maintaining data integrity throughout the process."
      ]
    },
    {
      title: "Associate - Mobile Applications",
      company: "Lennox India Technology Centre Pvt Ltd",
      location: "Chennai, India",
      period: "06/2017 - 04/2020",
      achievements: [
        "Spearheaded the development of several mobile applications using Xamarin.Forms, enhancing workflow processes and providing robust technical support through mobile platforms.",
        "Developed the LennoxPros Mobile Wrapper Application in Xamarin, extending exclusive mobile features to the eCommerce platform, improving user interaction and transaction efficiency.",
        "Led the development of the Greenwheels carpooling app using Xamarin and Firebase, implementing live tracking features similar to OLA and Quickride, promoting sustainable transportation solutions within the company."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-portfolio-primary relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-portfolio-accent/5 blur-3xl rounded-full"></div>
      </div>
      
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-medium text-portfolio-light">{job.title}</h3>
                <span className="text-sm text-portfolio-secondary font-medium">{job.period}</span>
              </div>
              <p className="text-portfolio-muted mb-3">{job.company} - {job.location}</p>
              <ul className="list-disc pl-5 space-y-2">
                {job.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-portfolio-light/70">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
