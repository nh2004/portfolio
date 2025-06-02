// Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData'; // Adjust path if necessary

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      // Added relative, overflow-hidden, and theme-ash-dark for the preferred theme
      className="section-padding relative overflow-hidden bg-theme-ash-dark"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 z-0
                   bg-[rgba(0,0,0,0.05)]
                   [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
                   [background-size:40px_40px]
                   animate-grid"
      ></div>

      <div className="container-custom relative z-10"> {/* Ensure content is above grid */}
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center group"
            >
              <motion.div
                // Combined styles here. animate-float is from tailwind.config.js
                // bg-white for light mode, dark:bg-theme-ash-light for dark mode
                className="w-16 h-16 flex items-center justify-center mb-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden animate-float
                           bg-white dark:bg-theme-ash-light"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                // Apply animation delay directly for staggered effect
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  style={{ fill: skill.icon.color }}
                >
                  <path d={skill.icon.path} />
                </svg>
              </motion.div>
              <span className="text-sm font-medium text-center text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;