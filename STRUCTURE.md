# Cấu Trúc Dự Án - Panda Uniform Store

## 📁 Cấu trúc thư mục

```
src/
├── assets/              # Static assets (images, fonts, icons)
├── components/          # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── ProductCard/
│   ├── ProductList/
│   ├── CategorySection/
│   ├── About/
│   ├── Testimonials/
│   └── HeroBanner/
├── pages/              # Page components
│   ├── HomePage/
│   └── ProductDetailPage/
├── layouts/            # Layout components
│   └── MainLayout/
├── services/           # API services
│   └── api.js
├── hooks/              # Custom React hooks
│   └── index.js
├── constants/          # Constants and configurations
│   └── index.js
├── styles/             # Global styles
│   └── global.css
├── App.jsx            # Main App component
└── main.jsx           # Entry point
```

## 🎯 Các thành phần chính

### 1. **Services Layer** (`src/services/`)

- Quản lý tất cả API calls
- Axios configuration với interceptors
- Tách biệt business logic khỏi components

### 2. **Constants** (`src/constants/`)

- API endpoints
- Routes
- Category mappings
- Static data (testimonials, etc.)

### 3. **Custom Hooks** (`src/hooks/`)

- `useFetch`: Data fetching với loading/error states
- `useLocalStorage`: Local storage management

### 4. **Layouts** (`src/layouts/`)

- `MainLayout`: Shared layout với Header/Footer
- Tái sử dụng cho nhiều pages

### 5. **Pages** (`src/pages/`)

- `HomePage`: Trang chủ
- `ProductDetailPage`: Chi tiết sản phẩm
- Mỗi page là một route

### 6. **Components** (`src/components/`)

- Shared, reusable components
- Mỗi component có file CSS riêng
- Single Responsibility Principle

## 🔧 Sử dụng

### Fetch data với custom hook:

```jsx
import { useFetch } from "../hooks";
import { productService } from "../services/api";

const { data, loading, error } = useFetch(() => productService.getAll(), []);
```

### Sử dụng constants:

```jsx
import { CATEGORY_LIST, ROUTES } from "../constants";
```

### Tạo page mới:

```jsx
import MainLayout from "../layouts/MainLayout";

function NewPage() {
  return <MainLayout>{/* Page content */}</MainLayout>;
}
```

## ✨ Lợi ích

1. **Separation of Concerns**: Tách biệt rõ ràng giữa UI, business logic, và data
2. **Reusability**: Components và hooks có thể tái sử dụng
3. **Maintainability**: Dễ bảo trì và mở rộng
4. **Scalability**: Cấu trúc cho phép scale dễ dàng
5. **Testing**: Dễ viết unit tests cho từng phần

## 🚀 Next Steps

- Thêm React Context cho state management
- Implement Error Boundaries
- Add PropTypes hoặc TypeScript
- Setup testing với Jest/React Testing Library
- Add code splitting với React.lazy
