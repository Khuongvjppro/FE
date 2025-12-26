import MainLayout from "../layouts/MainLayout";
import OrderProcess from "../components/OrderProcess";
import "./OrderProcessPage.css";

function OrderProcessPage() {
  return (
    <MainLayout>
      <div className="order-process-page">
        {/* Hero Banner */}
        <div className="order-process-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Quy trình đặt áo</h1>
            <div className="breadcrumb">
              <a href="/">Trang chủ</a>
              <span className="separator">›</span>
              <a href="/tu-van">Tư vấn</a>
              <span className="separator">›</span>
              <span className="current">Quy trình đặt áo</span>
            </div>
            <div className="hero-hashtag">#dongphucpanda</div>
          </div>
        </div>

        {/* Order Process Content */}
        <OrderProcess />
      </div>
    </MainLayout>
  );
}

export default OrderProcessPage;
