import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">My Skills</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: skillIndex * 0.1
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center justify-center group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3 rounded-xl bg-white dark:bg-gray-700 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-8 h-8"
                          style={{ fill: skill.icon.color }}
                        >
                          <path d={skill.icon.path} />
                        </svg>
                      </motion.div>
                    </div>
                    <span className="text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;