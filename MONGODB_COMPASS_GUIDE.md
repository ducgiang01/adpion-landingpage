# Hướng dẫn sử dụng MongoDB Compass

MongoDB Compass là một GUI (Graphical User Interface) chính thức của MongoDB giúp bạn quản lý database một cách trực quan và dễ dàng.

## 1. Cài đặt MongoDB Compass

### Tải về và cài đặt
1. Truy cập: https://www.mongodb.com/try/download/compass
2. Chọn phiên bản phù hợp với hệ điều hành của bạn
3. Tải về và cài đặt như ứng dụng thông thường

### Hoặc cài đặt qua Homebrew (macOS)
```bash
brew install --cask mongodb-compass
```

## 2. Kết nối đến Database

### Kết nối cơ bản
1. Mở MongoDB Compass
2. Trong màn hình kết nối, nhập:
   - **Connection String**: `mongodb://localhost:27017`
   - Hoặc chỉ cần nhập: `localhost:27017`
3. Click **Connect**

### Kết nối với database cụ thể
- **Connection String**: `mongodb://localhost:27017/adpion-dashboard`
- Hoặc kết nối đến localhost rồi chọn database `adpion-dashboard`

## 3. Khám phá Database Structure

### Collections trong Adpion Dashboard
Sau khi chạy seed script, bạn sẽ thấy:

#### `accounts` Collection
```json
{
  "_id": ObjectId("..."),
  "accountId": "800624365979550",
  "accountName": "SHOTOTA HOMEO",
  "status": "active",
  "balance": 182.58,
  "createdAt": ISODate("2024-01-15T10:30:00.000Z"),
  "updatedAt": ISODate("2024-01-15T10:30:00.000Z")
}
```

#### `activities` Collection
```json
{
  "_id": ObjectId("..."),
  "type": "top-up",
  "title": "Account Top-up",
  "description": "Top-up request processed successfully",
  "amount": "+$1,000.00",
  "accountId": "800624365979550",
  "createdAt": ISODate("2024-01-15T08:30:00.000Z")
}
```

## 4. Các tính năng chính của MongoDB Compass

### 4.1. Browse Collections
- Xem tất cả documents trong collection
- Phân trang và tìm kiếm
- Sắp xếp theo các trường
- Filter documents

### 4.2. Schema Analysis
- Phân tích cấu trúc dữ liệu
- Xem các kiểu dữ liệu
- Thống kê về fields

### 4.3. Index Management
- Xem các indexes hiện tại
- Tạo indexes mới
- Xóa indexes không cần thiết

### 4.4. Query Builder
- Tạo queries trực quan
- Test queries trước khi sử dụng
- Export queries

## 5. Thao tác với dữ liệu

### 5.1. Thêm Document mới
1. Chọn collection
2. Click **INSERT DOCUMENT**
3. Nhập dữ liệu JSON
4. Click **INSERT**

Ví dụ thêm account mới:
```json
{
  "accountId": "123456789012345",
  "accountName": "Test Account",
  "status": "active",
  "balance": 100.00
}
```

### 5.2. Sửa Document
1. Tìm document cần sửa
2. Click vào document
3. Sửa trực tiếp trong editor
4. Click **UPDATE**

### 5.3. Xóa Document
1. Tìm document cần xóa
2. Click vào document
3. Click **DELETE**
4. Xác nhận xóa

## 6. Query và Filter

### 6.1. Filter cơ bản
Trong thanh filter, nhập:
```json
{ "status": "active" }
```

### 6.2. Filter phức tạp
```json
{
  "status": "active",
  "balance": { "$gt": 100 }
}
```

### 6.3. Tìm kiếm text
```json
{
  "accountName": { "$regex": "shop", "$options": "i" }
}
```

## 7. Aggregation Pipeline

### 7.1. Thống kê tổng balance
```json
[
  {
    "$group": {
      "_id": null,
      "totalBalance": { "$sum": "$balance" },
      "count": { "$sum": 1 }
    }
  }
]
```

### 7.2. Thống kê theo status
```json
[
  {
    "$group": {
      "_id": "$status",
      "count": { "$sum": 1 },
      "totalBalance": { "$sum": "$balance" }
    }
  }
]
```

### 7.3. Top 5 accounts có balance cao nhất
```json
[
  { "$sort": { "balance": -1 } },
  { "$limit": 5 }
]
```

## 8. Performance Monitoring

### 8.1. Explain Plan
- Click **EXPLAIN** khi chạy query
- Xem execution plan
- Tối ưu hóa performance

### 8.2. Index Usage
- Xem indexes nào được sử dụng
- Tạo indexes mới nếu cần

## 9. Export và Import

### 9.1. Export Collection
1. Chọn collection
2. Click **EXPORT COLLECTION**
3. Chọn format (JSON, CSV)
4. Chọn file destination

### 9.2. Import Data
1. Chọn collection
2. Click **IMPORT DATA**
3. Chọn file source
4. Map fields nếu cần

## 10. Real-time Monitoring

### 10.1. Server Status
- Xem thông tin server
- Monitor performance
- Check connections

### 10.2. Database Stats
- Kích thước database
- Số lượng collections
- Số lượng documents

## 11. Tips và Best Practices

### 11.1. Backup thường xuyên
```bash
# Export to JSON
mongoexport --db adpion-dashboard --collection accounts --out accounts.json

# Import from JSON
mongoimport --db adpion-dashboard --collection accounts --file accounts.json
```

### 11.2. Tạo indexes cho performance
```javascript
// Trong MongoDB shell hoặc Compass
db.accounts.createIndex({ "accountId": 1 })
db.accounts.createIndex({ "status": 1 })
db.activities.createIndex({ "accountId": 1, "createdAt": -1 })
```

### 11.3. Monitor slow queries
- Sử dụng Profiler
- Xem slow operations
- Tối ưu hóa queries

## 12. Troubleshooting

### 12.1. Không kết nối được
- Kiểm tra MongoDB service đang chạy
- Kiểm tra port 27017
- Kiểm tra firewall settings

### 12.2. Performance chậm
- Tạo indexes phù hợp
- Sử dụng projection để giảm data transfer
- Optimize queries

### 12.3. Memory usage cao
- Monitor memory usage
- Tối ưu hóa queries
- Consider sharding cho large datasets

## 13. Integration với Development

### 13.1. Kết nối từ ứng dụng
```javascript
// Trong backend/src/config/database.ts
const mongoURI = 'mongodb://localhost:27017/adpion-dashboard';
```

### 13.2. Environment variables
```env
MONGODB_URI=mongodb://localhost:27017/adpion-dashboard
```

### 13.3. Production setup
```env
MONGODB_URI=mongodb://username:password@host:port/database
```

MongoDB Compass sẽ giúp bạn quản lý database một cách trực quan và hiệu quả hơn so với command line tools!
