# SHREE CONSULTANCY

Professional website for SHREE CONSULTANCY by Nikhil Amreliya, providing expert GST registration, Income Tax filing, and business registration services.

## Services Offered

- **GST Registration** - Complete GST registration services
- **GST Return Filing** - Accurate and timely GST return filing
- **GST Amendments** - Professional GST amendments and corrections
- **Income Tax Return (ITR) Filing** - Expert ITR filing with maximum refunds
- **TDS & TCS Return Filing** - Comprehensive TDS and TCS return filing
- **Business Registrations** - PAN Registration, TAN Registration, MSME Registration

## Contact Information

- **Name**: Nikhil Amreliya
- **Phone**: +91 8758485159
- **WhatsApp**: Available for instant consultation

## Deployment Instructions

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### GitHub Pages Deployment (Build Files Only)

1. **Create GitHub Repository**
   - Go to GitHub and create a new repository named `shreeconsultancy`
   - Make it public
   - Don't initialize with README

2. **Deploy Build Files**
   ```bash
   # Build the project
   npm run build
   
   # Navigate to dist folder
   cd dist
   
   # Initialize git
   git init
   git add .
   git commit -m "Deploy SHREE CONSULTANCY website"
   
   # Add your GitHub repository (replace 'yourusername')
   git remote add origin https://github.com/yourusername/shreeconsultancy.git
   
   # Push to gh-pages branch
   git push -f origin main:gh-pages
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save settings

4. **Access Website**
   - Website will be available at: `https://yourusername.github.io/shreeconsultancy/`

### Quick Deployment Script
Use the provided `deploy-build.bat` script:
1. Edit the script and replace `yourusername` with your GitHub username
2. Double-click to run the script

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Main hero section with SHREE CONSULTANCY branding
│   ├── Services.tsx      # Services offered (GST, ITR, etc.)
│   ├── About.tsx         # About SHREE CONSULTANCY
│   ├── Contact.tsx       # Contact information and form
│   ├── Footer.tsx        # Footer with company details
│   └── WhatsAppButton.jsx # WhatsApp integration
├── pages/
│   └── Index.tsx         # Main page layout
└── App.tsx               # Main application component
```

## Features

- **Responsive Design** - Works perfectly on all devices
- **WhatsApp Integration** - Direct contact via WhatsApp
- **Modern UI/UX** - Professional and clean design
- **SEO Optimized** - Optimized for search engines
- **Fast Loading** - Optimized performance
- **Contact Form** - Easy client communication

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
- Radix UI Components

## License

© 2024 SHREE CONSULTANCY. All rights reserved.