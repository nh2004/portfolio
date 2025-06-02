import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden">
      <div className="container-custom z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h3 className="text-lg md:text-xl text-primary-600 font-medium mb-2">
            Hello, I'm
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nilasish Halder
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Aspiring Full Stack Developer pursuing a B.Tech in Computer Science and Engineering 
            at NIT Durgapur. Proficient in JavaScript, Python, C, and C++, with a strong focus 
            on problem-solving and creative thinking.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-primary"
            >
              Contact Me
            </Link>
            <a
              href="/nilasish-halder-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@nilasish.com"
              className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-primary-600">
          <path d="M39.9,-65.7C51.5,-58.9,61,-47.8,67.7,-35.2C74.4,-22.6,78.2,-8.5,76.9,5.2C75.6,18.9,69.2,32.1,59.9,42.4C50.7,52.6,38.7,59.9,25.7,64.5C12.7,69.2,-1.3,71.1,-15.8,69.3C-30.3,67.6,-45.4,62.1,-57.1,51.9C-68.8,41.7,-77.2,26.7,-78.8,10.7C-80.5,-5.3,-75.3,-22.4,-66.8,-37.5C-58.2,-52.7,-46.1,-65.9,-32.2,-71.5C-18.3,-77.1,-2.5,-75,11.1,-71.1C24.8,-67.2,28.3,-72.4,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center cursor-pointer text-gray-500 hover:text-primary-600 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;