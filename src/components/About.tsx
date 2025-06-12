import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Lightbulb, Camera, Users } from 'lucide-react';

// Skill/Attribute data for easier management. No changes here.
const attributes = [
  { icon: Code, text: "Frontend Development" },
  { icon: Server, text: "Backend Development" },
  { icon: Database, text: "Database Management" },
  { icon: Lightbulb, text: "Creative Problem-Solving" },
  { icon: Users, text: "Team Collaboration" },
  { icon: Camera, text: "Photography" },
];

// Animation variants for the container of pills
const tagsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each pill will appear 0.1s after the previous one
    },
  },
};

// Animation variants for each individual pill
const tagItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};


const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mx-auto">About Me</h2>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            A passionate developer dedicated to building elegant solutions and creating engaging digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Image Composition */}
          <motion.div
            className="relative w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Decorative background shape */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary-200 dark:bg-primary-900/40 rounded-lg transform -rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-96 bg-neutral-300 dark:bg-neutral-700 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="temp.png" // Replace with your actual image path
                alt="A professional portrait of Nilasish Halder"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Glassmorphism Stats Box */}
            <div className="absolute z-20 -bottom-6 -right-6 w-40 h-28 bg-white/30 dark:bg-black/30 backdrop-blur-lg border border-white/20 rounded-lg flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <div className="text-4xl font-bold text-shadow-md">4+</div>
                <div className="text-sm tracking-wider uppercase font-semibold">Years Coding</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content & Attribute Pills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-neutral-800 dark:text-neutral-200 mb-6 leading-relaxed">
              I'm a Full Stack Developer pursuing Computer Science at NIT Durgapur. My passion lies in solving complex problems and building intuitive, high-performance web applications.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              With a strong foundation in both front-end and back-end technologies, I thrive in collaborative environments where I can bridge the gap between creative design and robust architecture to deliver impactful solutions.
            </p>

            {/* --- REPLACEMENT FOR THE LIST --- */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={tagsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {attributes.map((attr, index) => {
                const Icon = attr.icon; // Get the component itself
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 
                               bg-neutral-100 dark:bg-neutral-800 
                               border border-neutral-200 dark:border-neutral-700
                               rounded-full
                               transition-all duration-300
                               hover:border-primary-400/80 hover:bg-primary-50 dark:hover:bg-primary-900/40
                               hover:-translate-y-1"
                    variants={tagItemVariants}
                  >
                    <Icon className="w-5 h-5 text-primary-500" />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {attr.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;