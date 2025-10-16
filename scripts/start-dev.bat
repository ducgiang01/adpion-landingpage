@echo off
REM Adpion Dashboard - Development Server Starter for Windows
REM This script starts both frontend and backend development servers

echo.
echo 🚀 Starting Adpion Dashboard Development Servers
echo ==============================================
echo.

REM Check if MongoDB is running
tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I /N "mongod.exe">NUL
if %errorlevel% neq 0 (
    echo ⚠️  MongoDB is not running
    echo ℹ️  Please start MongoDB first:
    echo   net start MongoDB
    echo   Or run: scripts\setup-database.bat
    pause
    exit /b 1
)
echo ✅ MongoDB is running

REM Check if dependencies are installed
if not exist "node_modules" (
    echo ⚠️  Frontend dependencies not installed
    echo ℹ️  Installing frontend dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install frontend dependencies
        pause
        exit /b 1
    )
)

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
)

echo ✅ Dependencies are installed

echo ℹ️  Starting backend server...
start "Backend Server" cmd /k "cd backend && npm run dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

echo ℹ️  Starting frontend server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ✅ Development servers started successfully!
echo.
echo ℹ️  Servers running on:
echo   🖥️  Frontend: http://localhost:5173
echo   🔧 Backend:  http://localhost:3001
echo   📊 API Health: http://localhost:3001/api/health
echo.
echo ℹ️  MongoDB Compass: Connect to mongodb://localhost:27017
echo.
echo ⚠️  Close the terminal windows to stop servers
echo.
pause
