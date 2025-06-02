import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/achievementsData';
import { 
  Award, Code, Trophy, Star, Puzzle, Medal
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={32} className="text-primary-600" />,
  code: <Code size={32} className="text-primary-600" />,
  trophy: <Trophy size={32} className="text-primary-600" />,
  star: <Star size={32} className="text-primary-600" />,
  puzzle: <Puzzle size={32} className="text-primary-600" />,
  medal: <Medal size={32} className="text-primary-600" />,
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements\" className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">Achievements</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Key milestones and accomplishments throughout my academic and coding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;