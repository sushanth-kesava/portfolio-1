import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

interface Achievement {
  text: string;
}

interface ExperienceItem {
  id: number;
  role: string;
  company?: string;
  organization?: string;
  location?: string;
  duration: string;
  type?: string;
  achievements: string[];
}

interface ExperienceTimelineProps {
  internships: ExperienceItem[];
  experience: ExperienceItem[];
}

export function ExperienceTimeline({ internships, experience }: ExperienceTimelineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Combine and sort all experiences by date (most recent first)
  const allExperiences = [...internships, ...experience];

  const TimelineItem = ({ item, index }: { item: ExperienceItem; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 -ml-[7px] rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900" />

      {/* Content card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl text-gray-900 dark:text-white mb-1">
              {item.role}
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400">
              {item.company || item.organization}
            </p>
            {item.location && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {item.location}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{item.duration}</span>
          </div>
        </div>

        {/* Type badge */}
        {item.type && (
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full mb-4">
            {item.type}
          </span>
        )}

        {/* Achievements */}
        <ul className="space-y-2">
          {item.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
            >
              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
            Experience & Internships
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey through professional internships, research, and leadership roles
          </p>
        </motion.div>

        <div className="relative">
          {allExperiences.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
