import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-neutral-50 dark:bg-neutral-950">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto text-neutral-800 dark:text-neutral-100">
            Featured <span className="text-primary-600 dark:text-primary-500">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
            A selection of projects that demonstrate my passion for creating clean,
            intuitive, and high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl overflow-hidden group 
                         bg-white/60 dark:bg-neutral-900/50 
                         backdrop-blur-lg border border-white/20 dark:border-white/10
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 
                         dark:hover:shadow-primary-500/5 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* Card Header: Title & Links */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 pr-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                    >
                      <Github size={22} />
                    </a>
                    {/* <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${project.title}`}
                      className="text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a> */}
                  </div>
                </div>

                {/* Card Body: Description */}
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Card Footer: Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full 
                                 bg-primary-100/50 dark:bg-primary-900/30 
                                 text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;