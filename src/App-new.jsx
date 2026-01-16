import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoadingSpinner from "./components/LoadingSpinner";
import { ROUTES } from "./constants";
import "./styles/global.css";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const Cart = lazy(() => import("./pages/Cart"));
const OrderProcessPage = lazy(() => import("./pages/OrderProcessPage"));
const PaymentMethodsPage = lazy(() => import("./pages/PaymentMethodsPage"));
const Login = lazy(() => import("./pages/Login"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const OrderConfirm = lazy(() => import("./pages/OrderConfirm"));
const CheckoutInfo = lazy(() => import("./pages/CheckoutInfo"));
const CheckoutConfirm = lazy(() => import("./pages/CheckoutConfirm"));
const BulkOrder = lazy(() => import("./pages/BulkOrder"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const SizePage = lazy(() => import("./pages/SizePage"));
const ColorPage = lazy(() => import("./pages/ColorPage"));
const FabricMaterial = lazy(() => import("./pages/FabricMaterial"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const PrintTechnologyPage = lazy(() => import("./pages/PrintTechnologyPage"));
const Profile = lazy(() => import("./pages/Profile"));
const ConsultationPage = lazy(() => import("./pages/ConsultationPage"));

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
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.ABOUT} element={<AboutPage />} />
              <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
              <Route path={ROUTES.SEARCH} element={<SearchResults />} />
              <Route path={ROUTES.BULK_ORDER} element={<BulkOrder />} />
              <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
              <Route path={ROUTES.NEWS} element={<NewsPage />} />
              <Route path={ROUTES.CART} element={<Cart />} />
              <Route
                path={ROUTES.ORDER_PROCESS}
                element={
                  <RequireAuth>
                    <OrderProcessPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/order-confirm"
                element={
                  <RequireAuth>
                    <OrderConfirm />
                  </RequireAuth>
                }
              />
              <Route
                path={ROUTES.CONSULTATION_ORDER_PROCESS}
                element={
                  <RequireAuth>
                    <OrderProcessPage />
                  </RequireAuth>
                }
              />
              <Route
                path={ROUTES.PAYMENT_METHODS}
                element={<PaymentMethodsPage />}
              />
              <Route
                path={ROUTES.CONSULTATION_PAYMENT_METHODS}
                element={<PaymentMethodsPage />}
              />
              <Route
                path="/checkout-info"
                element={
                  <RequireAuth>
                    <CheckoutInfo />
                  </RequireAuth>
                }
              />
              <Route
                path="/checkout-confirm"
                element={
                  <RequireAuth>
                    <CheckoutConfirm />
                  </RequireAuth>
                }
              />
              <Route path="/tu-van/quy-trinh-dat-ao" element={<OrderProcessPage />} />
              <Route path="/tu-van/phuong-thuc-thanh-toan" element={<PaymentMethodsPage />} />
              <Route path="/tu-van/cau-hoi-thuong-gap" element={<FAQPage />} />
              <Route path="/tu-van/faq" element={<FAQPage />} />
              <Route path="/tu-van/bang-size" element={<SizePage />} />
              <Route path="/tu-van/bang-mau" element={<ColorPage />} />
              <Route path={ROUTES.FABRIC_MATERIAL} element={<FabricMaterial />} />
              <Route path={ROUTES.POLICY_GIFT} element={<PolicyPage />} />
              <Route path="/tu-van/chinh-sach" element={<PolicyPage />} />
              <Route path="/tu-van/cong-nghe-in" element={<PrintTechnologyPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route 
                path="/profile" 
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                } 
              />
              <Route 
                path="/profiles" 
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                } 
              />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
