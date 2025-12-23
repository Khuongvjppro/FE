import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import NewsPage from "./pages/NewsPage";
import Cart from "./pages/Cart";
import OrderProcessPage from "./pages/OrderProcessPage";
import PaymentMethodsPage from "./pages/PaymentMethodsPage";
import { ROUTES } from "./constants";
import "./styles/global.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-process" element={<OrderProcessPage />} />
          <Route
            path="/consultation/order-process"
            element={<OrderProcessPage />}
          />
          <Route path="/payment-methods" element={<PaymentMethodsPage />} />
          <Route
            path="/consultation/payment-methods"
            element={<PaymentMethodsPage />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
