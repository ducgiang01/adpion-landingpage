# Hướng dẫn Setup MongoDB và Chạy Ứng dụng

## 1. Cài đặt MongoDB

### Trên macOS (với Homebrew)
```bash
# Cài đặt MongoDB
brew tap mongodb/brew
brew install mongodb-community

# Khởi động MongoDB
brew services start mongodb-community

# Kiểm tra MongoDB đã chạy
brew services list | grep mongodb
```

### Trên Ubuntu/Debian
```bash
# Cài đặt MongoDB
sudo apt update
sudo apt install -y mongodb

# Khởi động MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Kiểm tra trạng thái
sudo systemctl status mongod
```

### Trên Windows
1. Tải MongoDB Community Server từ [mongodb.com](https://www.mongodb.com/try/download/community)
2. Cài đặt và khởi động MongoDB service
3. Hoặc chạy từ command line: `mongod`

## 2. Kiểm tra MongoDB

```bash
# Kết nối đến MongoDB shell
mongosh

# Hoặc với phiên bản cũ
mongo
```

Trong MongoDB shell:
```javascript
// Kiểm tra databases
show dbs

// Tạo database mới (sẽ được tạo tự động khi có dữ liệu)
use adpion-dashboard

// Thoát
exit
```

## 3. Chạy Backend

```bash
cd backend

# Cài đặt dependencies (nếu chưa cài)
npm install

# Tạo file .env
echo "MONGODB_URI=mongodb://localhost:27017/adpion-dashboard
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173" > .env

# Seed dữ liệu mẫu
npm run seed

# Khởi động server
npm run dev
```

Backend sẽ chạy trên: `http://localhost:3001`

## 4. Chạy Frontend

```bash
# Quay về thư mục gốc
cd ..

# Cài đặt dependencies (nếu chưa cài)
npm install

# Khởi động development server
npm run dev
```

Frontend sẽ chạy trên: `http://localhost:5173`

## 5. Kiểm tra API

### Health Check
```bash
curl http://localhost:3001/api/health
```

### Dashboard Stats
```bash
curl http://localhost:3001/api/dashboard/stats
```

### Accounts
```bash
curl http://localhost:3001/api/accounts
```

## 6. Troubleshooting

### MongoDB không khởi động được
```bash
# Kiểm tra log
tail -f /usr/local/var/log/mongodb/mongo.log

# Hoặc trên Ubuntu
sudo journalctl -u mongod
```

### Port đã được sử dụng
```bash
# Tìm process đang sử dụng port 3001
lsof -i :3001

# Kill process
kill -9 <PID>
```

### Database connection error
- Đảm bảo MongoDB đang chạy
- Kiểm tra MONGODB_URI trong file .env
- Thử kết nối trực tiếp: `mongosh mongodb://localhost:27017/adpion-dashboard`

## 7. Cấu trúc Database

Sau khi chạy seed, database sẽ có:

### Collections:
- **accounts**: Thông tin tài khoản Facebook
- **activities**: Lịch sử hoạt động
- **users**: Người dùng (nếu cần)

### Sample Data:
- 6 tài khoản mẫu với các trạng thái khác nhau
- 6 hoạt động mẫu với thời gian khác nhau

## 8. Development Tips

### Hot Reload
- Backend: Tự động restart khi có thay đổi
- Frontend: Hot module replacement

### Database Reset
```bash
cd backend
npm run seed  # Xóa và tạo lại dữ liệu mẫu
```

### Logs
- Backend logs: Hiển thị trong terminal
- Frontend logs: Mở Developer Tools trong browser

## 9. Production Deployment

### Build Frontend
```bash
npm run build
```

### Build Backend
```bash
cd backend
npm run build
npm start
```

### Environment Variables
Đảm bảo set các biến môi trường cho production:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key mạnh
- `FRONTEND_URL`: URL của frontend
