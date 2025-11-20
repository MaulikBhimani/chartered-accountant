@echo off
echo ========================================
echo    SHREE CONSULTANCY DEPLOYMENT
echo ========================================
echo.
echo Building project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed! Please check for errors.
    pause
    exit /b 1
)

echo.
echo Initializing git in dist folder...
cd dist
git init
git add .
git commit -m "Deploy SHREE CONSULTANCY website - Nikhil Amreliya"

echo.
echo Adding GitHub remote...
echo Using GitHub username: maulikbhimani
git remote add origin https://github.com/maulikbhimani/shreeconsultancy.git

echo.
echo Pushing to gh-pages branch...
git push -f origin main:gh-pages

if %errorlevel% neq 0 (
    echo.
    echo Deployment failed! Please check:
    echo 1. Check if repository 'shreeconsultancy' exists on maulikbhimani account
    echo 2. Make sure repository 'shreeconsultancy' exists
    echo 3. Check your internet connection
    pause
    exit /b 1
)

echo.
echo ========================================
echo    DEPLOYMENT SUCCESSFUL!
echo ========================================
echo.
echo Your website will be available at:
echo https://maulikbhimani.github.io/shreeconsultancy/
echo.
echo Next steps:
echo 1. Go to GitHub repository Settings
echo 2. Enable GitHub Pages from gh-pages branch
echo 3. Wait 2-3 minutes for deployment
echo.
cd ..
pause