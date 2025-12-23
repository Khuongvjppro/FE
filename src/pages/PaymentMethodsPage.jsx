import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PaymentMethods from "../components/PaymentMethods";
import "./PaymentMethodsPage.css";

function PaymentMethodsPage() {
  return (
    <MainLayout>
      <div className="payment-methods-page">
        {/* Banner with breadcrumb */}
        <div className="payment-hero">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="separator">›</span>
              <Link to="/consultation">Tư vấn</Link>
              <span className="separator">›</span>
              <span>Hình thức thanh toán</span>
            </div>
            <h1 className="payment-hero-title">Hình thức thanh toán</h1>
          </div>
          <div className="payment-hashtag">#dongphucpanda</div>
        </div>

        {/* Payment content */}
        <PaymentMethods />
      </div>
    </MainLayout>
  );
}

export default PaymentMethodsPage;
