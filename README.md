# Trello API

Dự án **Trello Clone API** xây dựng bằng **Node.js + Express + MongoDB**,
cung cấp các API để quản lý **Board, Column, Card** tương tự Trello.

API này được phát triển bởi [dathuynh1710](https://github.com/dathuynh1710).

---

## Các chức năng chính

- ✅ Xây dựng **RESTful API** cho Board, Column, Card
- ✅ Kết nối cơ sở dữ liệu bằng **MongoDB**
- ✅ Xử lý **Validation** với **Joi**
- ✅ Deploy API lên **Render**: [https://trello-api-4mi7.onrender.com](https://trello-api-4mi7.onrender.com)

---

## Tính năng

- Tạo, sửa, xóa **Board**
- Tạo, sửa, xóa **Column**
- Tạo, sửa, xóa **Card**
- Hỗ trợ **Drag & Drop** (cập nhật order của column và card)
- Xác thực dữ liệu đầu vào với **Joi**
- Thiết kế API theo chuẩn **RESTful**

---

## Công nghệ sử dụng

- **Node.js** – Nền tảng backend
- **Express.js** – Framework xây dựng API
- **MongoDB** – Cơ sở dữ liệu NoSQL
- **Joi** – Validation schema
- **Render** – Deploy API

---

## Cài đặt & chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/<your-username>/trello-api.git
cd trello-api
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Tạo file `.env`

```env
PORT=8017
MONGODB_URI=mongodb://localhost:27017/trello-api
```

### 4. Chạy server

```bash
npm run dev
```

Server chạy tại: `http://localhost:8017`

---

## API Endpoints

### Board

- `POST /v1/boards` → Tạo board mới
- `GET /v1/boards/:id` → Lấy thông tin board
- `PUT /v1/boards/:id` → Cập nhật board
- `DELETE /v1/boards/:id` → Xóa board

### Column

- `POST /v1/columns` → Tạo column mới
- `PUT /v1/columns/:id` → Cập nhật column
- `DELETE /v1/columns/:id` → Xóa column

### Card

- `POST /v1/cards` → Tạo card mới
- `PUT /v1/cards/:id` → Cập nhật card
- `DELETE /v1/cards/:id` → Xóa card

---

## Deploy

- API hiện đang chạy tại: [https://trello-api-4mi7.onrender.com](https://trello-api-4mi7.onrender.com)

---

## Tác giả

- **Dat Huynh**
  📧 Email: huynhthanhdat2506@gmail.com
  🔗 GitHub: [dathuynh1710](https://github.com/dathuynh1710)

---
