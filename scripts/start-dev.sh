#!/bin/bash

# Adpion Dashboard - Development Server Starter
# This script starts both frontend and backend development servers

echo "🚀 Starting Adpion Dashboard Development Servers"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if MongoDB is running
check_mongodb() {
    if pgrep -x "mongod" > /dev/null; then
        print_status "MongoDB is running"
        return 0
    else
        print_warning "MongoDB is not running"
        print_info "Please start MongoDB first:"
        echo "  macOS: brew services start mongodb-community"
        echo "  Linux: sudo systemctl start mongod"
        echo "  Or run: ./scripts/setup-database.sh"
        return 1
    fi
}

# Check if dependencies are installed
check_dependencies() {
    if [ ! -d "node_modules" ]; then
        print_warning "Frontend dependencies not installed"
        print_info "Installing frontend dependencies..."
        npm install
        if [ $? -ne 0 ]; then
            print_error "Failed to install frontend dependencies"
            return 1
        fi
    fi

    if [ ! -d "backend/node_modules" ]; then
        print_warning "Backend dependencies not installed"
        print_info "Installing backend dependencies..."
        cd backend && npm install && cd ..
        if [ $? -ne 0 ]; then
            print_error "Failed to install backend dependencies"
            return 1
        fi
    fi

    print_status "Dependencies are installed"
    return 0
}

# Function to cleanup on exit
cleanup() {
    print_info "Shutting down servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Main execution
main() {
    echo ""
    
    # Check MongoDB
    if ! check_mongodb; then
        exit 1
    fi
    
    # Check dependencies
    if ! check_dependencies; then
        exit 1
    fi
    
    print_info "Starting backend server..."
    cd backend
    npm run dev &
    BACKEND_PID=$!
    cd ..
    
    # Wait a moment for backend to start
    sleep 2
    
    print_info "Starting frontend server..."
    npm run dev &
    FRONTEND_PID=$!
    
    echo ""
    print_status "Development servers started successfully!"
    echo ""
    print_info "Servers running on:"
    echo "  🖥️  Frontend: http://localhost:5173"
    echo "  🔧 Backend:  http://localhost:3001"
    echo "  📊 API Health: http://localhost:3001/api/health"
    echo ""
    print_info "MongoDB Compass: Connect to mongodb://localhost:27017"
    echo ""
    print_warning "Press Ctrl+C to stop all servers"
    echo ""
    
    # Wait for processes
    wait
}

# Run main function
main
