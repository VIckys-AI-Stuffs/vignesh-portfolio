
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 mb-6">
              I am a seasoned Mobile Application Developer with over 8 years of experience, 
              specializing in React Native. I have extensive experience in building 
              high-performance, scalable mobile applications for iOS and Android platforms.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My expertise lies in architecting complex features, optimizing performance, and 
              delivering user-centric solutions. I have a proven ability to lead development teams 
              and have successfully delivered multiple mobile applications across various domains 
              including healthcare, transportation, and career guidance.
            </p>
            <p className="text-lg text-gray-700">
              Currently seeking a Senior React Native Engineer role to leverage my expertise 
              in driving innovative cross-platform mobile projects.
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-portfolio-primary">Personal Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium w-24 text-portfolio-muted">Location:</span>
                  <span>Chennai, India</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-portfolio-muted">Experience:</span>
                  <span>8+ years</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-portfolio-muted">Education:</span>
                  <span>B.E Computer Science and Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24 text-portfolio-muted">Focus:</span>
                  <span>Mobile Application Development</span>
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
