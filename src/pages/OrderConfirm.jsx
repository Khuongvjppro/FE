import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FiCheckCircle } from "react-icons/fi";
import "./OrderProcessPage.css";

function OrderConfirm() {
  return (
    <MainLayout>
      <div className="order-process-page" style={{textAlign: 'center', padding: '60px 0'}}>
        <FiCheckCircle size={64} color="#4caf50" style={{marginBottom: 16}} />
        <h1>Đặt hàng thành công!</h1>
        <p>Cảm ơn bạn đã đặt hàng tại Panda Uniform.<br />Chúng tôi sẽ liên hệ xác nhận đơn hàng trong thời gian sớm nhất.</p>
        <Link to="/" className="continue-shopping-btn" style={{marginTop: 24, display: 'inline-block'}}>
          Quay về trang chủ
        </Link>
      </div>
    </MainLayout>
  );
}

export default OrderConfirm;