import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      {/* TEXT CONTENT */}
      <div className="container-custom z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-left"
        >
          <h3 className="text-lg md:text-xl text-primary-600 dark:text-primary-500 font-medium mb-2">
            Hello, I'm
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            Nilasish Halder
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300 mb-6 font-medium">
            Full Stack Developer
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            Pursuing a B.Tech in Computer Science at NIT Durgapur, I craft high-performance web solutions with a focus on creative problem-solving and user-centric design.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="btn btn-primary"
            >
              Get In Touch
            </a>
            <a
              href="/nilasish-halder-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex space-x-5">
            <a href="https://github.com/nh2004" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/nilasish-halder/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="mailto:nilasishhalderofficial@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* BACKGROUND IMAGE - HIDDEN ON MOBILE */}
      <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:block pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/20 to-transparent dark:from-neutral-950 dark:via-neutral-950/80 dark:to-transparent"></div>
        <motion.img
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          src="Nilasish_image.png"
          alt="Nilasish Halder"
          className="h-full w-full object-cover opacity-70 dark:opacity-50"
        />
      </div>

      {/* SCROLL INDICATOR */}
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer group"
      >
        <div className="flex flex-col items-center text-neutral-500 dark:text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
          <span className="text-sm mb-1 tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </Link>
    </section>
  );
};

export default Hero;