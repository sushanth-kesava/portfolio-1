// React import removed (unused with the new JSX transform)
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  summary: string;
  skills: any;
  achievements: Array<any>;
  internships: Array<any>;
  education: Array<any>;
}

export function About({ summary, skills, achievements, internships, education }: AboutProps) {
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
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg text-slate-900 mb-3">Quick Stats</h4>
              <ul className="text-slate-700 space-y-2">
                <li>
                  <strong className="text-slate-900">GPA:</strong>{' '}
                  {education && education.length > 0 ? education[0].gpa ?? education[0].percentage ?? '—' : '—'}
                </li>
                <li>
                  <strong className="text-slate-900">Internships:</strong>{' '}
                  {internships ? internships.length : 0}
                </li>
                <li>
                  <strong className="text-slate-900">Achievements:</strong>{' '}
                  {achievements ? achievements.length : 0}
                </li>
              </ul>
            </div>

            {/* Top Skills */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg text-slate-900 mb-3">Top Skills</h4>
              <div className="flex flex-wrap gap-2">
                {(() => {
                  const combined: any[] = [];
                  if (skills) {
                    Object.values(skills).forEach((arr: any) => {
                      if (Array.isArray(arr)) combined.push(...arr);
                    });
                  }
                  const unique = Array.from(new Map(combined.map(s => [s.name, s])).values());
                  unique.sort((a: any, b: any) => (b.level || 0) - (a.level || 0));
                  return unique.slice(0, 8).map((s: any) => (
                    <span key={s.name} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {s.name}
                    </span>
                  ));
                })()}
              </div>
            </div>

            {/* Selected Achievements */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg text-slate-900 mb-3">Selected Achievements</h4>
              <ul className="text-slate-700 space-y-2">
                {(achievements || []).slice(0, 3).map((a, i) => (
                  <li key={i}>
                    <strong className="text-slate-900">{a.title}</strong>
                    <div className="text-sm text-slate-600">{a.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
