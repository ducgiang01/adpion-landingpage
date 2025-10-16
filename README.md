# Adpion Dashboard

A modern dashboard application for managing Facebook advertising accounts with real-time data visualization and account management features.

## Features

- 📊 **Dashboard Overview**: Real-time statistics and analytics
- 💰 **Account Management**: Create, update, and manage Facebook accounts
- 📈 **Data Visualization**: Interactive charts and graphs
- 🔄 **Real-time Updates**: Live data from MongoDB database
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Vue 3 and Vite

## Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Vue Router** - Official router for Vue.js

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **TypeScript** - Type-safe JavaScript

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **MongoDB** (v5.0 or higher)
- **npm** or **yarn**

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ducgiang01/adpion-dashboard.git
cd adpion-dashboard
```

### 2. Quick Setup (Recommended)

Use our automated setup script:

```bash
# macOS/Linux
./scripts/setup-database.sh

# Windows
scripts\setup-database.bat
```

This script will:
- Check MongoDB installation
- Start MongoDB if needed
- Install backend dependencies
- Seed the database with sample data

### 3. Manual Setup

If you prefer manual setup:

#### Install frontend dependencies
```bash
npm install
```

#### Install backend dependencies
```bash
cd backend
npm install
cd ..
```

#### Setup MongoDB

Make sure MongoDB is running on your system:

```bash
# On macOS with Homebrew
brew install mongodb-community
brew services start mongodb-community

# On Ubuntu/Debian
sudo apt install mongodb
sudo systemctl start mongod

# On Windows
# Download from: https://www.mongodb.com/try/download/community
net start MongoDB
```

#### Configure environment variables

Create a `.env` file in the `backend` directory:

```bash
cd backend
touch .env
```

Add the following configuration:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/adpion-dashboard
PORT=3001

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

#### Seed the database
```bash
cd backend
npm run seed
cd ..
```

## Running the Application

### Quick Start (Recommended)

Use our development starter script to run both servers:

```bash
# macOS/Linux
./scripts/start-dev.sh

# Windows
scripts\start-dev.bat
```

This will start:
- Backend server on `http://localhost:3001`
- Frontend server on `http://localhost:5173`

### Manual Start

If you prefer to start servers manually:

#### 1. Start the backend server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:3001`

#### 2. Start the frontend development server

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## Using MongoDB Compass

MongoDB Compass provides a graphical interface to manage your database:

### 1. Install MongoDB Compass
- Download from: https://www.mongodb.com/try/download/compass
- Or use Homebrew: `brew install --cask mongodb-compass`

### 2. Connect to Database
- Connection String: `mongodb://localhost:27017`
- Select database: `adpion-dashboard`

### 3. Explore Collections
- **accounts**: Facebook account information
- **activities**: Activity history and logs

### 4. Features
- Browse and edit documents
- Run queries and aggregations
- Monitor performance
- Manage indexes

For detailed MongoDB Compass guide, see: [MONGODB_COMPASS_GUIDE.md](./MONGODB_COMPASS_GUIDE.md)

## API Endpoints

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/accounts` - Get account status overview
- `GET /api/dashboard/activities` - Get recent activities
- `GET /api/dashboard/charts` - Get chart data

### Accounts
- `GET /api/accounts` - Get all accounts (with pagination and filters)
- `GET /api/accounts/:id` - Get account by ID
- `POST /api/accounts` - Create new account
- `PUT /api/accounts/:id` - Update account
- `DELETE /api/accounts/:id` - Delete account
- `POST /api/accounts/:id/topup` - Top up account balance
- `POST /api/accounts/:id/deduct` - Deduct from account balance

### Health Check
- `GET /api/health` - API health check

## Project Structure

```
adpion-dashboard/
├── src/                    # Frontend source code
│   ├── components/         # Vue components
│   ├── views/             # Page components
│   ├── composables/       # Vue composables
│   ├── router/            # Vue Router configuration
│   └── assets/            # Static assets
├── backend/               # Backend source code
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── config/        # Configuration files
│   │   └── scripts/       # Utility scripts
│   └── dist/              # Compiled JavaScript
└── public/                # Public assets
```

## Development

### Frontend Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

### Backend Development

```bash
cd backend

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Seed database
npm run seed
```

## Database Schema

### Account Model
```typescript
{
  accountId: string (unique)
  accountName: string
  status: 'active' | 'pending' | 'blocked'
  balance: number
  createdAt: Date
  updatedAt: Date
}
```

### Activity Model
```typescript
{
  type: 'top-up' | 'deduct' | 'reset' | 'bind'
  title: string
  description: string
  amount?: string
  accountId: string
  createdAt: Date
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.