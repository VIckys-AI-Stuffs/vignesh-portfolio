
import React from "react";
import { MapPin, Briefcase, Book, Smartphone } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-portfolio-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-portfolio-secondary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-portfolio-accent/5 blur-3xl rounded-full"></div>
      </div>
      
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <p className="text-lg text-portfolio-light/80 mb-6">
              I am a seasoned Mobile Application Developer with over 8 years of experience, 
              specializing in React Native. I have extensive experience in building 
              high-performance, scalable mobile applications for iOS and Android platforms.
            </p>
            <p className="text-lg text-portfolio-light/80 mb-6">
              My expertise lies in architecting complex features, optimizing performance, and 
              delivering user-centric solutions. I have a proven ability to lead development teams 
              and have successfully delivered multiple mobile applications across various domains 
              including healthcare, transportation, and career guidance.
            </p>
            <p className="text-lg text-portfolio-light/80">
              Currently seeking a Senior React Native Engineer role to leverage my expertise 
              in driving innovative cross-platform mobile projects.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-portfolio-light">Personal Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-portfolio-primary/80 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="text-portfolio-secondary h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-portfolio-muted block">Location</span>
                    <span className="text-portfolio-light">Chennai, India</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="bg-portfolio-primary/80 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Briefcase className="text-portfolio-secondary h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-portfolio-muted block">Experience</span>
                    <span className="text-portfolio-light">8+ years</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="bg-portfolio-primary/80 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Book className="text-portfolio-secondary h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-portfolio-muted block">Education</span>
                    <span className="text-portfolio-light">B.E Computer Science and Engineering</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="bg-portfolio-primary/80 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Smartphone className="text-portfolio-secondary h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm text-portfolio-muted block">Focus</span>
                    <span className="text-portfolio-light">Mobile Application Development</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
