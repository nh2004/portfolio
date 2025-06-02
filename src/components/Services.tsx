import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import {
  Layout, Server, Layers, Database, GitBranch, MessageSquare
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout size={40} className="text-primary-600" />,
  server: <Server size={40} className="text-primary-600" />,
  layers: <Layers size={40} className="text-primary-600" />,
  database: <Database size={40} className="text-primary-600" />,
  'git-branch': <GitBranch size={40} className="text-primary-600" />,
  'message-square': <MessageSquare size={40} className="text-primary-600" />,
};

const Services: React.FC = () => {
  return (
    <section id="services\" className="section-padding bg-gray-100 dark:bg-gray-800">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="section-title mx-auto">My Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Professional services I offer to clients for web development and tech-related solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="h-20 flex items-center justify-center mb-4 relative">
                <div className="absolute w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full transition-all duration-300 group-hover:scale-110"></div>
                <div className="relative">{iconMap[service.icon]}</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;