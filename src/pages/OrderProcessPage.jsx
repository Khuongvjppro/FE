import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import OrderProcess from "../components/OrderProcess";
import "../styles/consultation-common.css";
import "./OrderProcessPage.css";

function OrderProcessPage() {
  return (
    <MainLayout>
      <div className="order-process-page">
        {/* Hero Banner */}
        <div className="consultation-hero">
          <div className="container">
            <div className="consultation-badge">QUY TRÌNH</div>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="separator">›</span>
              <span>Quy trình đặt áo</span>
            </div>
          </div>
          <div className="consultation-hashtag">#dongphucpanda</div>
        </div>

        {/* Order Process Content */}
        <div className="consultation-content">
          <OrderProcess />
        </div>
      </div>
    </MainLayout>
  );
}

export default OrderProcessPage;
