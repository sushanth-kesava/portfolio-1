import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  name: string;
  email: string;
  github: string;
  linkedin: string;
}

export function Footer({ name, email, github, linkedin }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4">{name}</h3>
            <p className="text-slate-500 mb-4">
              Computer Science Student passionate about building innovative solutions
              through AI, web development, and research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-slate-200 transition-colors"
                aria-label="Visit GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-lg hover:bg-slate-200 transition-colors"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-2 bg-white rounded-lg hover:bg-slate-200 transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} {name}. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
