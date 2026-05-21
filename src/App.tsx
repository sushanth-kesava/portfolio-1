import { useState, useEffect } from 'react';
import { Header } from './src/components/Header';
import { Hero } from './src/components/Hero';
import { About } from './src/components/About';
import { ExperienceTimeline } from './src/components/ExperienceTimeline';
import { ProjectsGrid } from './src/components/ProjectsGrid';
import { Skills } from './src/components/Skills';
import { Education } from './src/components/Education';
import { Leadership } from './src/components/Leadership';
import { Achievements } from './src/components/Achievements';
import { ContactForm } from './src/components/ContactForm';
import { Footer } from './src/components/Footer';
import { resumeData } from './src/data/resumeData.js';

type ThemeMode = 'light' | 'dark' | 'system';

function applyTheme(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = mode === 'dark' || (mode === 'system' && prefersDark);
  document.documentElement.classList.toggle('dark', isDark);
}

export default function App() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme') as ThemeMode | null;
    return saved ?? 'system';
  });
  // Derived theme state is not used currently after removing the header icon.

  // Initialize + react to system changes
  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem('theme', mode);

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (mode === 'system') applyTheme('system');
    };
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, [mode]);

  // Sync across tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && (e.newValue === 'light' || e.newValue === 'dark' || e.newValue === 'system')) {
        setMode(e.newValue as ThemeMode);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Theme toggle is unused after removing the header icon; kept for future use.

  // Cast resume data to any to satisfy TS for optional JS-sourced fields
  const data: any = resumeData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900 transition-colors">
      <Header />
      
      <main>
        <Hero
          name={data.name}
          title={data.title}
          tagline={data.tagline}
          github={data.github}
          linkedin={data.linkedin}
        />

        <About
          summary={data.summary}
          skills={data.skills}
          achievements={data.achievements}
          internships={data.internships}
          education={data.education}
        />

        <ExperienceTimeline
          internships={data.internships}
          experience={data.experience}
        />

        <ProjectsGrid projects={data.projects} />

        <Skills skills={data.skills} />

        <Education education={data.education} />

        <Leadership leadership={data.leadership} />

        <Achievements achievements={data.achievements} />

        <ContactForm
          email={data.email}
          phone={data.phone}
          location={data.location}
        />
      </main>

      <Footer
        name={data.name}
        email={data.email}
        github={data.github}
        linkedin={data.linkedin}
      />
    </div>
  );
}
