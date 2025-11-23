# Deploying LuxPrimeEstate to Vercel

## Quick Deploy

1. **Build the CSS** (to make sure everything works):
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (choose one method):

   ### Option A: Using Vercel CLI (Recommended)
   ```bash
   # Install Vercel CLI globally (if you haven't)
   npm i -g vercel

   # Deploy
   vercel
   ```

   ### Option B: Using Vercel Website
   1. Go to [vercel.com](https://vercel.com)
   2. Click "Add New" → "Project"  
   3. Import your Git repository (GitHub, GitLab, or Bitbucket)
   4. Vercel will automatically detect the settings from `vercel.json`
   5. Click "Deploy"

   ### Option C: Deploy from Git (if not using a repo yet)
   ```bash
   # Initialize git if you haven't
   git init
   git add .
   git commit -m "Initial commit"

   # Push to GitHub (create a repo first on github.com)
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main

   # Then connect to Vercel via the website (Option B above)
   ```

## What Happens During Deployment

1. Vercel runs `npm install` to install Tailwind CSS
2. Vercel runs `npm run build` to compile your CSS
3. Vercel serves all your HTML files as static pages
4. Your site is live! 🎉

## Environment

- **Build Command**: `npm run build`
- **Output Directory**: `.` (root directory)
- **Install Command**: `npm install`

## Notes

- The site is 100% static HTML/CSS/JS - no server needed
- Vercel automatically serves `index.html` for the root route
- All your pages (.html files) will be accessible
- The CSS is pre-built during deployment

## Troubleshooting

If deployment fails:
- Make sure `npm run build` works locally first
- Check that `/dist/output.css` is being generated
- Ensure all image paths are correct (relative paths from root)
