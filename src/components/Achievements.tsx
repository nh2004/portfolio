import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti'; // Import the confetti library
import { achievementsData } from '../data/achievementsData';
import { Award, Code, Trophy, Star, Puzzle, Medal } from 'lucide-react';

// Using your custom theme colors for the icons
const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={28} className="text-primary-500" />,
  code: <Code size={28} className="text-primary-500" />,
  trophy: <Trophy size={28} className="text-primary-500" />,
  star: <Star size={28} className="text-primary-500" />,
  puzzle: <Puzzle size={28} className="text-primary-500" />,
  medal: <Medal size={28} className="text-primary-500" />,
};

const Achievements: React.FC = () => {
  // State to track the ID of the hovered card for the confetti effect
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="achievements" className="section-padding bg-neutral-50 dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mx-auto">My Achievements</h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            Key milestones and accomplishments on my journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => {
            const isHovered = hoveredId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative group p-6 rounded-xl overflow-hidden
                           bg-gradient-to-br from-white to-neutral-100
                           dark:from-neutral-900 dark:to-neutral-800/70
                           border border-neutral-200/80 dark:border-neutral-700/60
                           transition-all duration-300 hover:border-primary-400/50 hover:shadow-2xl hover:shadow-primary-500/10"
              >
                {/* Conditionally render confetti for a celebratory burst */}
                {isHovered && (
                  <Confetti
                    width={350} // Approximate width of the card
                    height={250} // Approximate height of the card
                    recycle={false}
                    numberOfPieces={100}
                    gravity={0.9}
                    initialVelocityY={10}
                    className="!absolute !top-0 !left-0 !w-full !h-full"
                  />
                )}
                
                {/* Icon Container */}
                <div className="relative z-10 w-14 h-14 mb-5 flex items-center justify-center 
                               rounded-lg bg-primary-100/70 dark:bg-primary-950/50
                               transition-all duration-300 group-hover:scale-110">
                  {iconMap[item.icon]}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;