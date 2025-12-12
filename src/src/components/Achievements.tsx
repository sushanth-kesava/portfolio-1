import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Zap, BookOpen } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: string;
}

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getIconForType = (type: string) => {
    switch (type) {
      case 'patent':
        return Award;
      case 'hackathon':
        return Zap;
      case 'conference':
        return BookOpen;
      default:
        return Trophy;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'patent':
        return {
          bg: 'bg-yellow-100 dark:bg-yellow-900/30',
          text: 'text-yellow-600 dark:text-yellow-400',
          border: 'border-yellow-200 dark:border-yellow-800'
        };
      case 'hackathon':
        return {
          bg: 'bg-blue-100 dark:bg-blue-900/30',
          text: 'text-blue-600 dark:text-blue-400',
          border: 'border-blue-200 dark:border-blue-800'
        };
      case 'conference':
        return {
          bg: 'bg-purple-100 dark:bg-purple-900/30',
          text: 'text-purple-600 dark:text-purple-400',
          border: 'border-purple-200 dark:border-purple-800'
        };
      default:
        return {
          bg: 'bg-green-100 dark:bg-green-900/30',
          text: 'text-green-600 dark:text-green-400',
          border: 'border-green-200 dark:border-green-800'
        };
    }
  };

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Awards, patents, and notable accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = getIconForType(achievement.type);
            const colors = getColorForType(achievement.type);

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 ${colors.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${colors.bg} rounded-lg flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <h3 className="text-xl text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className={`text-sm ${colors.text} flex-shrink-0`}>
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
