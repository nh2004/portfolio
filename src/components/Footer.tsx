import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-primary-500">Nilasish</span> Halder
            </h3>
            <p className="text-gray-400 mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
            <a href="#achievements" className="text-gray-400 hover:text-white transition-colors">Achievements</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            © {currentYear} Nilasish Halder. All rights reserved. Made with 
            <Heart size={16} className="mx-1 text-red-500" fill="currentColor" /> 
            in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;