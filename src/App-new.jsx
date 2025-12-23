import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import NewsPage from "./pages/NewsPage";
import Cart from "./pages/Cart";
import OrderProcessPage from "./pages/OrderProcessPage";
import PaymentMethodsPage from "./pages/PaymentMethodsPage";
import Login from "./pages/Login";
import { ROUTES } from "./constants";
import "./styles/global.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path="/home" element={<Navigate to={ROUTES.HOME} replace />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.ORDER_PROCESS} element={<OrderProcessPage />} />
          <Route
            path={ROUTES.CONSULTATION_ORDER_PROCESS}
            element={<OrderProcessPage />}
          />
          <Route
            path={ROUTES.PAYMENT_METHODS}
            element={<PaymentMethodsPage />}
          />
          <Route
            path={ROUTES.CONSULTATION_PAYMENT_METHODS}
            element={<PaymentMethodsPage />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
