import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import NewsPage from "./pages/NewsPage";
import Cart from "./pages/Cart";
import OrderProcessPage from "./pages/OrderProcessPage";
import PaymentMethodsPage from "./pages/PaymentMethodsPage";
import Login from "./pages/Login";
import { ROUTES } from "./constants";
import OrderConfirm from "./pages/OrderConfirm";
import CheckoutInfo from "./pages/CheckoutInfo";
import CheckoutConfirm from "./pages/CheckoutConfirm";
import "./styles/global.css";

function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
            <Route path={ROUTES.NEWS} element={<NewsPage />} />
            <Route path={ROUTES.CART} element={<Cart />} />
            <Route path={ROUTES.ORDER_PROCESS} element={<RequireAuth><OrderProcessPage /></RequireAuth>} />
            <Route path="/order-confirm" element={<RequireAuth><OrderConfirm /></RequireAuth>} />
            <Route path={ROUTES.CONSULTATION_ORDER_PROCESS} element={<RequireAuth><OrderProcessPage /></RequireAuth>} />
            <Route path={ROUTES.PAYMENT_METHODS} element={<RequireAuth><PaymentMethodsPage /></RequireAuth>} />
            <Route path={ROUTES.CONSULTATION_PAYMENT_METHODS} element={<RequireAuth><PaymentMethodsPage /></RequireAuth>} />
              <Route path="/checkout-info" element={<RequireAuth><CheckoutInfo /></RequireAuth>} />
            <Route path="/checkout-confirm" element={<RequireAuth><CheckoutConfirm /></RequireAuth>} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
