import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/educationData';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-gray-100 dark:bg-gray-800">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">Education</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My academic journey that has shaped my knowledge and skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full z-10 flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-1">{item.institution}</h3>
                    <h4 className="text-lg text-primary-600 mb-2">
                      {item.degree} in {item.field}
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200 font-medium mb-3">
                      {item.score}
                    </p>

                    <div className="flex flex-wrap text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center mr-4 mb-2">
                        <Calendar size={16} className="mr-1" />
                        {item.period}
                      </div>
                      <div className="flex items-center mb-2">
                        <MapPin size={16} className="mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Space for Timeline */}
                <div className="w-0 md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;