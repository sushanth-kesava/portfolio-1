import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  Wrench,
  Brain,
  Globe,
  Users,
} from 'lucide-react';

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
      color: 'green'
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
      color: 'green'
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
    const colors: Record<string, { bg: string; text: string; progress: string; card: string }> = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        progress: 'bg-blue-700',
        card: 'from-slate-50 to-blue-50'
      },
      green: {
        bg: 'bg-teal-100',
        text: 'text-teal-700',
        progress: 'bg-teal-600',
        card: 'from-slate-50 to-teal-50'
      },
      purple: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        progress: 'bg-slate-400',
        card: 'from-slate-50 to-blue-50'
      },
      pink: {
        bg: 'bg-teal-100',
        text: 'text-teal-700',
        progress: 'bg-teal-600',
        card: 'from-slate-50 to-teal-50'
      },
      orange: {
        bg: 'bg-amber-100',
        text: 'text-amber-700',
        progress: 'bg-amber-600',
        card: 'from-slate-50 to-amber-50'
      },
      indigo: {
        bg: 'bg-slate-100',
        text: 'text-slate-700',
        progress: 'bg-slate-600',
        card: 'from-slate-50 to-slate-100'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Code2 className="w-8 h-8 text-blue-700" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple overview of the technical and professional skills I use most across development, research, and collaboration.
          </p>
        </motion.div>

        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className={`bg-gradient-to-br ${colors.card} rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${colors.bg} rounded-lg`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-sm text-slate-600">{category.skills.length} skills</span>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-slate-900">
                          {skill.name}
                        </span>
                        <span className={`text-sm ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
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
