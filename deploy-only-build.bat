@echo off
echo ========================================
echo    DEPLOY ONLY BUILD FILES
echo ========================================

echo Building project...
call npm run build

echo Navigating to dist folder...
cd dist

echo Initializing git in dist folder...
git init

echo Adding all build files...
git add .

echo Committing build files...
git commit -m "Deploy SHREE CONSULTANCY build files"

echo Adding GitHub remote...
git remote add origin https://github.com/maulikbhimani/shreeconsultancy.git

echo Pushing ONLY build files to gh-pages branch...
git push -f origin main:gh-pages

echo ========================================
echo    BUILD DEPLOYED SUCCESSFULLY!
echo ========================================
echo.
echo Website URL: https://maulikbhimani.github.io/shreeconsultancy/
echo.
echo Next: Enable GitHub Pages in repository settings
echo - Go to Settings > Pages
echo - Select gh-pages branch
echo - Save
echo.

cd ..
pause