import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  summary: string;
}

export function About({ summary }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {summary}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
