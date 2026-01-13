import axios from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "../constants";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// Product services
export const productService = {
  getAll: () => api.get(API_ENDPOINTS.PRODUCTS),
  getById: (id) => api.get(`${API_ENDPOINTS.PRODUCTS}/${id}`),
  getByCategory: (category) =>
    api.get(`${API_ENDPOINTS.PRODUCTS}?category=${category}`),
  search: (query) =>
    api.get(`${API_ENDPOINTS.PRODUCTS}?q=${encodeURIComponent(query)}`),
};

// Category services
export const categoryService = {
  getAll: () => api.get(API_ENDPOINTS.CATEGORIES),
};

// Menu services
export const menuService = {
  getAll: () => api.get(API_ENDPOINTS.MENU_CATEGORIES),
};

export default api;
