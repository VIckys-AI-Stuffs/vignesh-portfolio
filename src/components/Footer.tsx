
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-primary text-white py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Vigneshwaran M</h2>
            <p className="text-gray-300 mt-1">Software Development Engineer</p>
          </div>
          
          <div>
            <p className="text-gray-300 text-sm">
              © {year} Vigneshwaran M. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
