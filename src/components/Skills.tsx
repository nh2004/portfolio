import React from 'react';
import { motion } from 'framer-motion';
import { skillsData, Skill } from '../data/skillsData'; // Adjust path and ensure Skill type is exported

// A reusable MarqueeRow component to keep the code DRY
const MarqueeRow: React.FC<{ skills: Skill[]; reverse?: boolean }> = ({ skills, reverse = false }) => {
  const extendedSkills = [...skills, ...skills]; // Duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
      <motion.div
        className={`flex w-max gap-8 group ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        initial={{ x: 0 }}
      >
        {extendedSkills.map((skill, index) => (
          <div
            key={index}
            // Pause animation on hover for the entire group
            className="group-hover:[animation-play-state:paused]
                       flex items-center justify-center gap-x-3 px-6 py-3
                       bg-gray-100 dark:bg-neutral-900
                       border border-gray-200 dark:border-neutral-700
                       rounded-full shadow-sm
                       transition-colors duration-300 hover:!bg-primary-100/50 dark:hover:!bg-primary-950/50"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 shrink-0"
              style={{ fill: skill.icon.color }}
            >
              <path d={skill.icon.path} />
            </svg>
            <span className="text-md font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};


const Skills: React.FC = () => {
  // Split the skillsData array into two halves
  const midpoint = Math.ceil(skillsData.length / 2);
  const firstRowSkills = skillsData.slice(0, midpoint);
  const secondRowSkills = skillsData.slice(midpoint);

  return (
    <section id="skills" className="section-padding bg-white dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mx-auto">Technologies I Use</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            A selection of my favorite tools and technologies.
          </p>
        </motion.div>

        {/* Container for the two marquee rows */}
        <div className="space-y-6">
          <MarqueeRow skills={firstRowSkills} />
          <MarqueeRow skills={secondRowSkills} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default Skills;