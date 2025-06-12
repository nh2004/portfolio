import React from 'react';
import { Heart, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/nh2004', // Replace with your URL
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nilasish-halder/', // Replace with your URL
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/nilasish_19/', // Replace with your URL
    },
  ];

  return (
    <footer className="bg-gray-900 text-white dark:bg-black/80 dark:backdrop-blur-sm">
      <div className="container-custom py-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Brand & Tagline */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-primary-500">Nilasish</span> Halder
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
            <p className="text-gray-500 mt-4 text-sm">
              Crafting digital experiences, one line of code at a time.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Connect */}
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-primary-400 hover:scale-110 transform transition-all duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-gray-800" />

        {/* Bottom Copyright Section */}
        <div className="text-center text-gray-500 pt-8 text-sm">
          <p className="flex items-center justify-center">
            © {currentYear} Nilasish Halder. All rights reserved. Made with
            <Heart size={16} className="mx-1.5 text-red-500" fill="currentColor" />
            in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;