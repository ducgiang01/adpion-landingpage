@echo off
REM Adpion Dashboard - Database Setup Script for Windows
REM This script helps you set up MongoDB and seed the database

echo.
echo 🚀 Adpion Dashboard - Database Setup
echo ==================================
echo.

REM Check if MongoDB is installed
where mongod >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ MongoDB is not installed
    echo Please install MongoDB first:
    echo   Download from: https://www.mongodb.com/try/download/community
    echo   Or use Chocolatey: choco install mongodb
    pause
    exit /b 1
)
echo ✅ MongoDB is installed

REM Check if MongoDB is running
tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I /N "mongod.exe">NUL
if %errorlevel% neq 0 (
    echo ⚠️  MongoDB is not running
    echo ℹ️  Starting MongoDB...
    
    REM Try to start MongoDB service
    net start MongoDB >nul 2>nul
    if %errorlevel% neq 0 (
        echo ℹ️  Starting MongoDB manually...
        start /B mongod --dbpath "C:\data\db"
        timeout /t 3 /nobreak >nul
    )
    
    REM Check again
    tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I /N "mongod.exe">NUL
    if %errorlevel% neq 0 (
        echo ❌ Failed to start MongoDB
        echo Please start MongoDB manually and run this script again
        pause
        exit /b 1
    )
    echo ✅ MongoDB started successfully
) else (
    echo ✅ MongoDB is running
)

REM Test database connection
echo ℹ️  Testing database connection...
mongosh --eval "db.adminCommand('listDatabases')" --quiet >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Database connection failed
    pause
    exit /b 1
)
echo ✅ Database connection successful

REM Check if backend dependencies are installed
if not exist "backend\node_modules" (
    echo ⚠️  Backend dependencies not installed
    echo ℹ️  Installing backend dependencies...
    cd backend
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install backend dependencies
        cd ..
        pause
        exit /b 1
    )
    cd ..
    echo ✅ Backend dependencies installed
) else (
    echo ✅ Backend dependencies are installed
)

REM Seed the database
echo ℹ️  Seeding database with sample data...
cd backend
call npm run seed
if %errorlevel% neq 0 (
    echo ❌ Failed to seed database
    cd ..
    pause
    exit /b 1
)
cd ..
echo ✅ Database seeded successfully

echo.
echo ✅ Database setup completed successfully!
echo.
echo ℹ️  Database Information:
echo   Connection: mongodb://localhost:27017/adpion-dashboard
echo   Collections: accounts, activities
echo.
echo ℹ️  You can now:
echo   1. Open MongoDB Compass and connect to: mongodb://localhost:27017
echo   2. Start the backend server: cd backend ^&^& npm run dev
echo   3. Start the frontend: npm run dev
echo.
echo ℹ️  MongoDB Compass Guide: See MONGODB_COMPASS_GUIDE.md
echo.
pause
