export interface Internship {
  company: string;
  role: string;
  period: string;
  details?: string[];
}

export interface Experience extends Internship {}

export interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface LeadershipItem {
  organization: string;
  role: string;
  period?: string;
}

export interface AchievementItem {
  title: string;
  description?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline?: string;
  github?: string;
  linkedin?: string;
  summary?: string;
  internships?: Internship[];
  experience?: Experience[];
  projects?: Project[];
  skills?: SkillCategory[];
  education?: EducationItem[];
  leadership?: LeadershipItem[];
  achievements?: AchievementItem[];
  email?: string;
  phone?: string;
  location?: string;
}

export const resumeData: ResumeData;