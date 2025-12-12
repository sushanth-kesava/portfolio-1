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
import { resumeData } from './src/data/resumeData.ts';

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Header />
      
      <main>
        <Hero
          name={resumeData.name}
          title={resumeData.title}
          tagline={resumeData.tagline}
          github={resumeData.github}
          linkedin={resumeData.linkedin}
        />

        <About summary={resumeData.summary} />

        <ExperienceTimeline
          internships={resumeData.internships}
          experience={resumeData.experience}
        />

        <ProjectsGrid projects={resumeData.projects} />

        <Skills skills={resumeData.skills} />

        <Education education={resumeData.education} />

        <Leadership leadership={resumeData.leadership} />

        <Achievements achievements={resumeData.achievements} />

        <ContactForm
          email={resumeData.email}
          phone={resumeData.phone}
          location={resumeData.location}
        />
      </main>

      <Footer
        name={resumeData.name}
        email={resumeData.email}
        github={resumeData.github}
        linkedin={resumeData.linkedin}
      />
    </div>
  );
}
