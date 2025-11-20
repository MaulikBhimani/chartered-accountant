@echo off
echo Building project...
npm run build

echo Going to dist folder...
cd dist

echo Initializing git in dist folder...
git init

echo Adding all files...
git add .

echo Committing...
git commit -m "SHREE CONSULTANCY website"

echo Adding GitHub remote...
git remote add origin https://github.com/maulikbhimani/shreeconsultancy.git

echo Pushing to gh-pages branch...
git push -f origin main:gh-pages

echo Done! Enable GitHub Pages in repository settings.
cd ..
pause