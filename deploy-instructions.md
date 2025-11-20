# SHREE CONSULTANCY - Deployment Instructions

## Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to GitHub and create a new repository named `shreeconsultancy`
2. Make it public
3. Don't initialize with README (we'll push our files)

### 2. Deploy Build Files Only

**Option A: Using the provided script**
1. Open `deploy-build.bat` file
2. Replace `yourusername` with your actual GitHub username
3. Double-click the file to run it

**Option B: Manual deployment**
```bash
# Build the project
npm run build

# Navigate to dist folder
cd dist

# Initialize git
git init
git add .
git commit -m "Deploy SHREE CONSULTANCY website"

# Add your GitHub repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/shreeconsultancy.git

# Push to gh-pages branch
git push -f origin main:gh-pages
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### 4. Access Your Website
Your website will be available at: `https://yourusername.github.io/shreeconsultancy/`

## Important Notes

- Only the `dist` folder (build files) is pushed to GitHub, not the source code
- The website uses the repository name `shreeconsultancy` in the URL
- Make sure to replace `yourusername` with your actual GitHub username
- It may take a few minutes for the website to be live after deployment

## Contact Information Updated
- **Business Name**: SHREE CONSULTANCY
- **Owner**: Nikhil Amreliya  
- **Phone**: +91 8758485159
- **WhatsApp**: +91 8758485159

## Services Included
- GST Registration
- GST Return Filing  
- GST Amendments
- Income Tax Return (ITR) Filing
- TDS & TCS Return Filing
- Business Registrations (PAN, TAN, MSME)