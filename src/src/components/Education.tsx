import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  percentage?: string;
  status?: string;
}

interface EducationProps {
  education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="education"
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-teal-700" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-slate-900">
            Education
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl text-slate-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg text-teal-700 mb-1">
                    {item.institution}
                  </p>
                  <p className="text-slate-600">
                    {item.location}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className="text-slate-600">
                    {item.duration}
                  </span>
                  {item.gpa && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-teal-100 rounded-lg">
                      <Award className="w-4 h-4 text-teal-700" />
                      <span className="text-teal-800">
                        GPA: {item.gpa}
                        {item.status && ` (${item.status})`}
                      </span>
                    </div>
                  )}
                  {item.percentage && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-teal-100 rounded-lg">
                      <Award className="w-4 h-4 text-teal-700" />
                      <span className="text-teal-800">
                        {item.percentage}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
