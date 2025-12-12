# Deployment Guide

This guide covers deploying your portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ Resume PDF is in `/public/resume.pdf`
- ✅ Personal data is updated in `/src/data/resumeData.js`
- ✅ Profile image is correct (or use initials fallback)
- ✅ Social links (GitHub, LinkedIn) are correct
- ✅ All content is proofread
- ✅ Test build works: `npm run build`
- ✅ Test production preview: `npm run preview`

---

## 🚀 Vercel (Recommended - Easiest)

### Method 1: CLI Deployment

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# For production
vercel --prod
```

### Method 2: GitHub Integration (Auto-Deploy)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Auto-deployment enabled!**
   - Every push to `main` branch triggers a new deployment
   - Pull requests get preview deployments

**Custom Domain (Optional)**:
- In Vercel dashboard → Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

## 🌐 Netlify

### Method 1: Drag & Drop (Fastest)

```bash
# Build the project
npm run build

# This creates a /dist folder
```

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `/dist` folder to the page
3. Done! Your site is live

### Method 2: CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

### Method 3: GitHub Integration

1. Push code to GitHub (see Vercel instructions above)
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Connect to GitHub and select repository
5. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

**Custom Domain**:
- Dashboard → Domain settings → Add custom domain
- Follow DNS instructions

---

## 📄 GitHub Pages

### Setup

```bash
# Install gh-pages package
npm install --save-dev gh-pages
```

### Update package.json

Add these scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Update vite.config.ts

```typescript
export default defineConfig({
  base: '/repository-name/', // Replace with your repo name
  // ... rest of config
});
```

If deploying to `username.github.io`, use:
```typescript
base: '/'
```

### Deploy

```bash
# Push code to GitHub first
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

### Enable GitHub Pages

1. Go to repository → Settings → Pages
2. Source: Select `gh-pages` branch
3. Click Save
4. Your site will be at: `https://username.github.io/repository-name/`

**Custom Domain**:
- Settings → Pages → Custom domain
- Add your domain
- Configure DNS with CNAME record

---

## ☁️ Cloudflare Pages

### GitHub Integration

1. Push code to GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
3. Pages → Create a project
4. Connect to GitHub repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Vite
6. Save and Deploy

**Custom Domain**: Add in Cloudflare Pages dashboard

---

## 🔥 Firebase Hosting

### Setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize Firebase in your project
firebase init hosting
```

Configuration:
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub integration: Optional

### Deploy

```bash
# Build first
npm run build

# Deploy
firebase deploy --only hosting
```

---

## 🌊 Surge.sh (Quick & Simple)

```bash
# Install Surge
npm install -g surge

# Build
npm run build

# Deploy
cd dist
surge
```

Follow prompts to set domain.

---

## 🐳 Docker Deployment

### Dockerfile

Create `/Dockerfile`:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build & Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 80:80 portfolio
```

---

## 📊 Deployment Comparison

| Platform | Ease | Speed | Free Tier | Custom Domain | CI/CD |
|----------|------|-------|-----------|---------------|-------|
| **Vercel** | ⭐⭐⭐⭐⭐ | Fast | Yes | Free | Yes |
| **Netlify** | ⭐⭐⭐⭐⭐ | Fast | Yes | Free | Yes |
| **GitHub Pages** | ⭐⭐⭐⭐ | Medium | Yes | Free | Manual |
| **Cloudflare Pages** | ⭐⭐⭐⭐ | Fast | Yes | Free | Yes |
| **Firebase** | ⭐⭐⭐ | Fast | Yes | Paid | Manual |
| **Surge** | ⭐⭐⭐⭐⭐ | Fast | Limited | Paid | Manual |

---

## 🔧 Environment Variables

If you add backend integrations (Formspree, EmailJS, etc.), you'll need environment variables:

### Vercel
```bash
# Add via CLI
vercel env add VARIABLE_NAME

# Or in dashboard: Settings → Environment Variables
```

### Netlify
```bash
# Dashboard: Site settings → Environment variables
```

### Local Development
Create `.env.local`:
```
VITE_API_KEY=your_key_here
```

Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## 🎯 Post-Deployment

After deployment:

1. ✅ Test all links (GitHub, LinkedIn, Resume download)
2. ✅ Test contact form
3. ✅ Check mobile responsiveness
4. ✅ Test dark/light theme toggle
5. ✅ Verify project filters work
6. ✅ Test smooth scrolling navigation
7. ✅ Check performance (Google PageSpeed Insights)
8. ✅ Verify SEO meta tags (view page source)

---

## 🆘 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### 404 on Routes

For single-page apps, ensure rewrites are configured:

**Vercel**: Automatic  
**Netlify**: Create `_redirects` in `/public`:
```
/*    /index.html   200
```

**GitHub Pages**: Handled by `gh-pages` package

### Images Not Loading

- Check image imports use correct path
- Ensure images are in `/public` folder
- Verify build includes assets

---

## 📈 Performance Optimization

After deployment, improve performance:

1. **Enable Compression**
   - Vercel/Netlify: Automatic
   - Others: Enable gzip/brotli

2. **Add Cache Headers**
   - Configured in platform settings

3. **Optimize Images**
   - Compress images before deploying
   - Use WebP format
   - Add lazy loading (already implemented)

4. **Monitor Performance**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

---

## 🎉 Success!

Your portfolio is now live and accessible worldwide!

Share your portfolio:
- Add to LinkedIn profile
- Include in resume
- Share on social media
- Add to GitHub profile README

**Need help?** Check the main README.md for detailed documentation.
