import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import NewsPage from "./pages/NewsPage";
import Cart from "./pages/Cart";
import OrderProcessPage from "./pages/OrderProcessPage";
import PaymentMethodsPage from "./pages/PaymentMethodsPage";
import SizePage from "./pages/SizePage";
import ColorPage from "./pages/ColorPage";
import FabricMaterial from "./pages/FabricMaterial";
import PolicyPage from "./pages/PolicyPage";
import PrintTechnologyPage from "./pages/PrintTechnologyPage";
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
          <Route path="/products" element={<ProductsPage />} />
          <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.ORDER_PROCESS} element={<OrderProcessPage />} />
          <Route
            path={ROUTES.CONSULTATION_ORDER_PROCESS}
            element={<OrderProcessPage />}
          />
          <Route path="/tu-van/quy-trinh-dat-ao" element={<OrderProcessPage />} />
          <Route
            path={ROUTES.PAYMENT_METHODS}
            element={<PaymentMethodsPage />}
          />
          <Route
            path={ROUTES.CONSULTATION_PAYMENT_METHODS}
            element={<PaymentMethodsPage />}
          />
          <Route path="/tu-van/bang-size" element={<SizePage />} />
          <Route path="/tu-van/bang-mau" element={<ColorPage />} />
          <Route path={ROUTES.FABRIC_MATERIAL} element={<FabricMaterial />} />
          <Route path={ROUTES.POLICY_GIFT} element={<PolicyPage />} />
          <Route path="/tu-van/chinh-sach" element={<PolicyPage />} />
          <Route path="/tu-van/cong-nghe-in" element={<PrintTechnologyPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
