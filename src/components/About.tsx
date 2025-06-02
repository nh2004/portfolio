import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Server, Database, Lightbulb, Image } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-100 dark:bg-gray-800">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6">
              Aspiring Full Stack Developer pursuing a B.Tech in Computer Science and Engineering at NIT Durgapur. Proficient in JavaScript, Python, C, and C++, with a strong focus on problem-solving, creative thinking, and software development.
            </p>
            <p className="text-lg mb-6">
              Experienced in developing responsive front-end interfaces, scalable back-end systems, and user-focused web applications. Committed to continuous learning and delivering impactful solutions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <Code className="text-primary-600 mb-2" size={24} />
                <span className="text-sm">Frontend</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <Server className="text-primary-600 mb-2" size={24} />
                <span className="text-sm">Backend</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <Database className="text-primary-600 mb-2" size={24} />
                <span className="text-sm">Database</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <Lightbulb className="text-primary-600 mb-2" size={24} />
                <span className="text-sm">Problem Solving</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <Image className="text-primary-600 mb-2" size={24} />
                <span className="text-sm">Photography</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <User className="text-primary-600 mb-2" size={24} />
                <span className="text-sm">Teamwork</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-72 sm:h-96 bg-primary-200 dark:bg-primary-900 rounded-lg overflow-hidden relative">
                <img 
                  src="temp.png" 
                  alt="Professional portrait" 
                  className="absoute w-4/5 h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">4+</div>
                  <div className="text-sm">Years Coding</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;