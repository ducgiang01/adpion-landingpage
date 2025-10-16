#!/bin/bash

# Adpion Dashboard - Database Setup Script
# This script helps you set up MongoDB and seed the database

echo "🚀 Adpion Dashboard - Database Setup"
echo "=================================="

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

# Check if MongoDB is installed
check_mongodb() {
    if command -v mongod &> /dev/null; then
        print_status "MongoDB is installed"
        return 0
    else
        print_error "MongoDB is not installed"
        echo "Please install MongoDB first:"
        echo "  macOS: brew install mongodb-community"
        echo "  Ubuntu: sudo apt install mongodb"
        echo "  Windows: Download from https://www.mongodb.com/try/download/community"
        return 1
    fi
}

# Check if MongoDB is running
check_mongodb_running() {
    if pgrep -x "mongod" > /dev/null; then
        print_status "MongoDB is running"
        return 0
    else
        print_warning "MongoDB is not running"
        return 1
    fi
}

# Start MongoDB
start_mongodb() {
    print_info "Starting MongoDB..."
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew services start mongodb-community
        else
            mongod --config /usr/local/etc/mongod.conf --fork
        fi
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        sudo systemctl start mongod
    else
        print_error "Unsupported operating system"
        return 1
    fi
    
    # Wait for MongoDB to start
    sleep 3
    
    if check_mongodb_running; then
        print_status "MongoDB started successfully"
        return 0
    else
        print_error "Failed to start MongoDB"
        return 1
    fi
}

# Check if backend dependencies are installed
check_backend_deps() {
    if [ ! -d "backend/node_modules" ]; then
        print_warning "Backend dependencies not installed"
        print_info "Installing backend dependencies..."
        cd backend && npm install && cd ..
        if [ $? -eq 0 ]; then
            print_status "Backend dependencies installed"
        else
            print_error "Failed to install backend dependencies"
            return 1
        fi
    else
        print_status "Backend dependencies are installed"
    fi
    return 0
}

# Seed the database
seed_database() {
    print_info "Seeding database with sample data..."
    
    cd backend
    npm run seed
    if [ $? -eq 0 ]; then
        print_status "Database seeded successfully"
        cd ..
        return 0
    else
        print_error "Failed to seed database"
        cd ..
        return 1
    fi
}

# Test database connection
test_connection() {
    print_info "Testing database connection..."
    
    # Try to connect and list databases
    if mongosh --eval "db.adminCommand('listDatabases')" --quiet > /dev/null 2>&1; then
        print_status "Database connection successful"
        return 0
    else
        print_error "Database connection failed"
        return 1
    fi
}

# Show database info
show_database_info() {
    print_info "Database Information:"
    echo "  Connection: mongodb://localhost:27017/adpion-dashboard"
    echo "  Collections: accounts, activities"
    echo ""
    print_info "You can now:"
    echo "  1. Open MongoDB Compass and connect to: mongodb://localhost:27017"
    echo "  2. Start the backend server: cd backend && npm run dev"
    echo "  3. Start the frontend: npm run dev"
    echo ""
    print_info "MongoDB Compass Guide: See MONGODB_COMPASS_GUIDE.md"
}

# Main execution
main() {
    echo ""
    
    # Check MongoDB installation
    if ! check_mongodb; then
        exit 1
    fi
    
    # Check if MongoDB is running
    if ! check_mongodb_running; then
        print_info "Attempting to start MongoDB..."
        if ! start_mongodb; then
            print_error "Please start MongoDB manually and run this script again"
            exit 1
        fi
    fi
    
    # Test connection
    if ! test_connection; then
        print_error "Cannot connect to MongoDB"
        exit 1
    fi
    
    # Check backend dependencies
    if ! check_backend_deps; then
        exit 1
    fi
    
    # Seed database
    if ! seed_database; then
        exit 1
    fi
    
    echo ""
    print_status "Database setup completed successfully!"
    echo ""
    show_database_info
}

# Run main function
main
