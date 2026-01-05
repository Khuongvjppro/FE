// API configuration
export const API_BASE_URL = "http://localhost:3001";

// API endpoints
export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  CATEGORIES: "/categories",
  MENU_CATEGORIES: "/menuCategories",
};

// App routes
export const ROUTES = {
  LOGIN: "/login",
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_DETAIL: "/product/:id",
  NEWS: "/news",
  NEWS_DETAIL: "/news/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
  CART: "/cart",
  SEARCH: "/search",
  BULK_ORDER: "/bulk-order",
  ORDER_PROCESS: "/order-process",
  PAYMENT_METHODS: "/payment-methods",
  CONSULTATION_ORDER_PROCESS: "/consultation/order-process",
  CONSULTATION_PAYMENT_METHODS: "/consultation/payment-methods",
};

// Category mappings
export const CATEGORY_NAMES = {
  "ao-lop-co-co": "Áo Polo",
  "ao-lop-so-mi": "Sơ mi Oxford",
  "ao-phong-lop": "T-shirt Wash",
  "ao-lop-thun-cotton": "Áo Thun Cotton",
  "dong-phuc-han-quoc": "Đồng phục Hàn Quốc",
  "dong-phuc-mua-dong": "Đồng phục mùa đông",
  "dong-phuc-hop-lop": "Đồng phục họp lớp",
};

// Category list for sidebar
export const CATEGORY_LIST = [
  { id: "ao-phong-lop", name: "Áo phông lớp" },
  { id: "ao-lop-co-co", name: "Áo lớp có cổ" },
  { id: "ao-lop-so-mi", name: "Áo Lớp Sơ Mi" },
  { id: "dong-phuc-han-quoc", name: "Đồng phục Hàn Quốc" },
  { id: "combo-dong-phuc", name: "Combo đồng phục" },
  { id: "dong-phuc-mua-dong", name: "Đồng phục mùa đông" },
  { id: "ao-bong-chay", name: "Áo bóng chày" },
  { id: "dong-phuc-hop-lop", name: "Áo đồng phục họp lớp" },
  { id: "mau", name: "Màu" },
  { id: "bst", name: "BST" },
];

// Testimonials data
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Vũ Hồng Nam",
    school: "D2 THPT Tiên Lữ",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    review:
      "Chất lượng tốt, giá cả hợp lý, anh chị tư vấn nhiệt tình. Nói chung là rất ưng ạ.",
  },
  {
    id: 2,
    name: "Nguyễn Minh Anh",
    school: "11C8 THPT Nguyễn Bỉnh Khiêm",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    review:
      "Áo đẹp, chất lượng tốt, in sắc nét. Cả lớp đều rất hài lòng với sản phẩm. Sẽ ủng hộ lâu dài!",
  },
  {
    id: 3,
    name: "Trần Hoàng Long",
    school: "12A1 THPT Chu Văn An",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    review:
      "Dịch vụ tuyệt vời, giao hàng nhanh. Thiết kế đẹp, chất liệu vải mềm mại. Rất đáng để thử!",
  },
];
