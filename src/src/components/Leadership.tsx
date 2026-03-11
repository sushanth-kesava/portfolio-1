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
            <Users className="w-8 h-8 text-blue-700" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-slate-900">
            Leadership & Involvement
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-slate-900 mb-1">
                    {item.role}
                  </h3>
                  <p className="text-blue-700 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-slate-600 mb-3">
                    {item.duration}
                  </p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
