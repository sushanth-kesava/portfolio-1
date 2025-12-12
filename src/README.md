# Kesava Sushanth - Portfolio Website

A professional, responsive portfolio website showcasing the work and achievements of Kesava Sushanth, Computer Science Student at KL University.

**Content Source:** This portfolio uses content extracted from the candidate's resume. Source: **16_10_2025**

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Subtle motion effects using Motion (formerly Framer Motion)
- **Component-Based**: Modular, reusable React components
- **Accessible**: ARIA labels, semantic HTML, keyboard navigation support
- **Project Filtering**: Filter projects by category (All, ML/AI, Frontend, Backend, Research)
- **Project Modals**: Detailed project case studies in modal view
- **Contact Form**: Integrated contact form with mailto fallback
- **SEO Friendly**: Proper meta tags and semantic structure

## 📦 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons
- **React Intersection Observer** - Scroll animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kesava-sushanth-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Replace the resume PDF**
   - Place your actual resume PDF in `/public/resume.pdf`

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `/dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** to link your project and deploy

**Alternative: GitHub Integration**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts**
   Add base path:
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     // ... other config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

**Alternative: Drag & Drop**
1. Run `npm run build`
2. Visit [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `/dist` folder

## 📁 Project Structure

```
├── public/
│   └── resume.pdf          # Resume PDF for download
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Education.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Leadership.tsx
│   │   ├── ProjectsGrid.tsx
│   │   └── Skills.tsx
│   └── data/
│       └── resumeData.js   # All portfolio content (EDIT THIS!)
├── App.tsx                 # Main app component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## ✏️ Customization

### Updating Content

**All portfolio content is centralized in one file**: `/src/data/resumeData.js`

Edit this file to update:
- Personal information (name, email, phone, location)
- Social links (GitHub, LinkedIn)
- Profile summary
- Education history
- Work experience & internships
- Projects (with tech stacks, descriptions, links)
- Skills (categorized with proficiency levels)
- Leadership roles
- Achievements

### Modifying Components

Each component in `/src/components/` is self-contained and can be customized independently:

- **Styling**: Edit Tailwind classes directly in components
- **Layout**: Modify JSX structure
- **Animations**: Adjust Motion animation props
- **Colors**: Update color classes (e.g., `bg-blue-600` → `bg-purple-600`)

### Theme Colors

The portfolio uses a blue/purple color scheme. To change:

1. Find and replace color classes in components:
   - `blue-*` → your preferred color
   - `purple-*` → your secondary color

2. Or use Tailwind's arbitrary values:
   ```tsx
   className="bg-[#your-hex-color]"
   ```

## 🧪 Code Quality

### Linting

```bash
npm run lint
```

### Formatting (Prettier)

```bash
npm run format
```

### Recommended ESLint Config

Create `.eslintrc.json`:
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```

### Recommended Prettier Config

Create `.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🎨 Design Features

### Components Overview

1. **Header**: Fixed navigation with smooth scroll and theme toggle
2. **Hero**: Eye-catching introduction with CTA buttons
3. **About**: Professional summary section
4. **Experience Timeline**: Visual timeline of internships and roles
5. **Projects Grid**: Filterable project cards with modal details
6. **Skills**: Categorized skills with animated progress bars
7. **Education**: Academic history with GPA highlights
8. **Leadership**: Leadership roles and contributions
9. **Achievements**: Awards, patents, and recognitions
10. **Contact Form**: Mailto-based contact form with copy-to-clipboard email
11. **Footer**: Links and attribution

### Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text placeholders for images
- Color contrast compliance (WCAG AA)

## 📧 Contact Form Integration

The contact form currently uses a `mailto:` fallback. For production, consider integrating:

### Formspree (Recommended)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update `ContactForm.tsx`:
   ```tsx
   const handleSubmit = async (e) => {
     e.preventDefault();
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });
     // Handle response
   };
   ```

### EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Configure and use their SDK

### Custom Backend

Build your own API endpoint using:
- Node.js + Express + Nodemailer
- Serverless functions (Vercel, Netlify)
- Supabase Edge Functions

## 🐛 Troubleshooting

### Build Errors

- **Module not found**: Run `npm install` again
- **TypeScript errors**: Check `tsconfig.json` configuration
- **Vite errors**: Clear cache with `rm -rf node_modules/.vite`

### Styling Issues

- **Tailwind classes not working**: Ensure `globals.css` imports Tailwind
- **Dark mode not toggling**: Check localStorage in browser DevTools

### Performance

- **Lazy load images**: Use React's `lazy()` for heavy components
- **Code splitting**: Vite handles this automatically
- **Optimize images**: Compress images before adding to project

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

Created for **Kesava Sushanth**  
Computer Science Student | Full-Stack Developer | ML Researcher

**Resume Source**: 16_10_2025

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
