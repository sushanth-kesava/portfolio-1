import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Users, Target } from 'lucide-react';

interface LeadershipItem {
  id: number;
  role: string;
  organization: string;
  duration: string;
  description: string;
}

interface LeadershipProps {
  leadership: LeadershipItem[];
}

export function Leadership({ leadership }: LeadershipProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
            Leadership & Involvement
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leading teams and driving organizational success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 dark:text-white mb-1">
                    {item.role}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {item.duration}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
