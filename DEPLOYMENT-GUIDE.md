# SHREE CONSULTANCY - Complete Deployment Guide

## ✅ Project Details
- **Business**: SHREE CONSULTANCY
- **Owner**: Nikhil Amreliya
- **Phone**: +91 8758485159
- **Repository**: shreeconsultancy
- **URL**: https://yourusername.github.io/shreeconsultancy/

## 🚀 Quick Deployment (3 Steps)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and login
2. Click "New repository"
3. Name: `shreeconsultancy`
4. Make it **Public**
5. **Don't** initialize with README
6. Click "Create repository"

### Step 2: Deploy Build Files
```bash
# Navigate to project folder
cd "d:\ca\ca4\website - Copy (2)"

# Build the project
npm run build

# Go to dist folder
cd dist

# Initialize git
git init
git add .
git commit -m "Deploy SHREE CONSULTANCY website"

# Add your repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/shreeconsultancy.git

# Push to gh-pages branch
git push -f origin main:gh-pages
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Source: **Deploy from a branch**
5. Branch: **gh-pages**
6. Click **Save**

## 🎯 Your Website Will Be Live At:
`https://yourusername.github.io/shreeconsultancy/`

## 📋 Services Included
✅ GST Registration
✅ GST Return Filing  
✅ GST Amendments
✅ Income Tax Return (ITR) Filing
✅ TDS & TCS Return Filing
✅ Accounting
✅ PAN Registration
✅ TAN Registration
✅ MSME Registration

## 🔧 Development Mode
```bash
npm run dev
# Opens at: http://localhost:8080
```

## ⚡ Quick Deploy Script
Use `deploy-build.bat`:
1. Edit file and replace `yourusername`
2. Double-click to run

## 📞 Contact Integration
- WhatsApp: +91 8758485159
- Direct contact forms
- Professional design