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
      className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-slate-900">
            About Me
          </h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-slate-700">
              {summary}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
