import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function CheckoutConfirm() {
  const navigate = useNavigate();
  const info = JSON.parse(localStorage.getItem("checkoutInfo") || "{}");
  const payment = localStorage.getItem("checkoutPayment") || "";

  const paymentLabel = {
    bank: "Chuyển khoản ngân hàng",
    cod: "Thanh toán khi nhận hàng (COD)",
    office: "Thanh toán tại văn phòng Panda",
    none: "Chưa chọn phương thức thanh toán"
  };

  const handleConfirm = () => {
    // Xóa dữ liệu tạm, chuyển sang trang thành công
    localStorage.removeItem("checkoutInfo");
    localStorage.removeItem("checkoutPayment");
    navigate("/order-confirm");
  };

  return (
    <MainLayout>
      <div style={{maxWidth: 480, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '32px 28px'}}>
        <h2 style={{marginBottom: 24, fontSize: 28, fontWeight: 700, textAlign: 'center', color: '#222'}}>Xác nhận đơn hàng</h2>
        <div style={{marginBottom: 28, fontSize: 18, lineHeight: 1.7}}>
          <div><span style={{fontWeight: 600}}>Họ tên:</span> {info.name}</div>
          <div><span style={{fontWeight: 600}}>Số điện thoại:</span> {info.phone}</div>
          <div><span style={{fontWeight: 600}}>Địa chỉ:</span> {info.address}</div>
          <div><span style={{fontWeight: 600}}>Phương thức thanh toán:</span> {paymentLabel[payment] || paymentLabel.none}</div>
        </div>
        <button
          onClick={handleConfirm}
          style={{marginTop: 12, width: '100%', padding: '12px 0', borderRadius: 8, background: 'linear-gradient(90deg,#7b2ff2,#f357a8)', color: '#fff', fontWeight: 600, fontSize: 18, border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(123,47,242,0.08)'}}
        >
          Xác nhận thanh toán
        </button>
      </div>
    </MainLayout>
  );
}

export default CheckoutConfirm;
