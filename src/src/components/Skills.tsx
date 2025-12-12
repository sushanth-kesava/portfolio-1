import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Wrench, Brain, Globe, Users } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  languages: Skill[];
  web: Skill[];
  databases: Skill[];
  tools: Skill[];
  ml: Skill[];
  other: Skill[];
}

interface SkillsProps {
  skills: SkillsData;
}

export function Skills({ skills }: SkillsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: skills.languages,
      color: 'blue'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: skills.web,
      color: 'green'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skills.databases,
      color: 'purple'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: skills.ml,
      color: 'pink'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: skills.tools,
      color: 'orange'
    },
    {
      title: 'Professional Skills',
      icon: Users,
      skills: skills.other,
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; progress: string }> = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        progress: 'bg-blue-600 dark:bg-blue-400'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        progress: 'bg-green-600 dark:bg-green-400'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        progress: 'bg-purple-600 dark:bg-purple-400'
      },
      pink: {
        bg: 'bg-pink-100 dark:bg-pink-900/30',
        text: 'text-pink-600 dark:text-pink-400',
        progress: 'bg-pink-600 dark:bg-pink-400'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-600 dark:text-orange-400',
        progress: 'bg-orange-600 dark:bg-orange-400'
      },
      indigo: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-600 dark:text-indigo-400',
        progress: 'bg-indigo-600 dark:bg-indigo-400'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className={`text-sm ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                          className={`h-full ${colors.progress} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
