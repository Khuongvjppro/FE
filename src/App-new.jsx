import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import NewsPage from "./pages/NewsPage";
import Cart from "./pages/Cart";
import { ROUTES } from "./constants";
import "./styles/global.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
