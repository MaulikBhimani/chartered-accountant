# Deploy Only Build Files to GitHub Pages

## Method 1: Using Script (Easiest)
1. Run `deploy-only-build.bat`
2. Enable GitHub Pages in repository settings

## Method 2: Manual Commands
```bash
# Build the project
npm run build

# Go to dist folder
cd dist

# Initialize git (only in dist folder)
git init
git add .
git commit -m "Deploy SHREE CONSULTANCY build"

# Add remote and push to gh-pages
git remote add origin https://github.com/maulikbhimani/shreeconsultancy.git
git push -f origin main:gh-pages

# Go back to main folder
cd ..
```

## Method 3: Using gh-pages package
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Then run:
npm run build
npm run deploy
```

## Enable GitHub Pages
1. Go to https://github.com/maulikbhimani/shreeconsultancy
2. Settings > Pages
3. Source: Deploy from branch
4. Branch: gh-pages
5. Save

## Result
- Only `dist` folder contents pushed to `gh-pages` branch
- Source code stays private/local
- Website live at: https://maulikbhimani.github.io/shreeconsultancy/