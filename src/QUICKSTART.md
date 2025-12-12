# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Fast Track

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

That's it! Your portfolio is now running locally.

## ✏️ Customize Your Content

**Everything you need to edit is in ONE file:**

📁 `/src/data/resumeData.js`

This file contains:
- ✅ Personal info (name, email, phone, location)
- ✅ Social links (GitHub, LinkedIn)
- ✅ Professional summary
- ✅ Education
- ✅ Work experience & internships
- ✅ Projects (with tech stacks, descriptions)
- ✅ Skills (categorized with levels)
- ✅ Leadership roles
- ✅ Achievements

**Simply update the values in this file to personalize your portfolio!**

## 📄 Add Your Resume PDF

Replace the placeholder file:

```bash
/public/resume.pdf
```

Add your actual resume PDF here so visitors can download it.

## 🎨 Theme Customization

The portfolio supports:
- 🌙 **Dark/Light Mode** (automatic toggle in header)
- 🎨 **Blue/Purple Color Scheme** (easily customizable)

To change colors, edit Tailwind classes in components:
- `blue-600` → your color
- `purple-600` → your accent color

## 🌐 Deploy in 2 Minutes

### Vercel (Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Drag /dist folder to: https://app.netlify.com/drop
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📱 Test Responsiveness

The portfolio is fully responsive. Test it:

1. **Desktop**: Default view
2. **Tablet**: Resize browser to ~768px
3. **Mobile**: Resize browser to ~375px

Or use browser DevTools (F12) → Device Toolbar

## 🎯 Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark/light theme with localStorage
- ✅ Smooth scroll navigation
- ✅ Project filtering by category
- ✅ Animated components (Motion)
- ✅ Accessible (ARIA labels, keyboard nav)
- ✅ Contact form with email integration
- ✅ SEO optimized

## 🆘 Need Help?

Check the full **README.md** for:
- Detailed deployment instructions
- Component customization guide
- Troubleshooting tips
- Contact form integration (Formspree, EmailJS)
- Advanced configuration

## 📝 Source Attribution

**Resume Source**: 16_10_2025  
All content extracted from the provided resume.

---

**Happy coding! 🎉**
