## Công nghệ sử dụng

- React 18
- Vite
- Axios
- JSON Server (fake REST API)

## Cài đặt

npm install

### Chạy JSON Server (API)

npm run server

API sẽ chạy tại: http://localhost:3001

### Chạy React App

npm run dev

App sẽ chạy tại: http://localhost:3000

## API Endpoints

- GET `http://localhost:3001/products` - Lấy danh sách sản phẩm
- GET `http://localhost:3001/products/:id` - Lấy chi tiết sản phẩm
- GET `http://localhost:3001/categories` - Lấy danh sách danh mục

## Tính năng

- Hiển thị danh sách sản phẩm
- Lọc sản phẩm theo danh mục
- Hiển thị thông tin chi tiết sản phẩm
- Responsive design
