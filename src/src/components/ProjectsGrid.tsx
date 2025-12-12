import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Award, X, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  tags: string[];
  techStack: string[];
  type: string[];
  badge?: string | null;
  patentNumber?: string;
  links: {
    demo: string | null;
    github: string | null;
  };
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'ML/AI' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'research', label: 'Research' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type.includes(activeFilter));

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovation through code: AI-powered solutions, web applications, and research projects
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-label={`Filter by ${filter.label}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project);
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                {/* Badge */}
                {project.badge && (
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-sm text-yellow-700 dark:text-yellow-400">
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-white dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 rounded">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Duration */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.duration}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Badge */}
                {selectedProject.badge && (
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-yellow-700 dark:text-yellow-400">
                      {selectedProject.badge}
                      {selectedProject.patentNumber && ` - ${selectedProject.patentNumber}`}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-3xl text-gray-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>

                {/* Subtitle */}
                <p className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                  {selectedProject.subtitle}
                </p>

                {/* Duration */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.duration}
                </p>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.links.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
