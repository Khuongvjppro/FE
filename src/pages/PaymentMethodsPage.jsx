import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FaMobileAlt, FaBuilding, FaUniversity } from "react-icons/fa";
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
              <Link to="/tu-van">Tư vấn</Link>
              <span className="separator">›</span>
              <span>Hình thức thanh toán</span>
            </div>
            <h1 className="payment-hero-title">Hình thức thanh toán</h1>
          </div>
          <div className="payment-hashtag">#dongphucpanda</div>
        </div>

        {/* Payment content */}
        <div className="payment-content">
          <div className="container">
            <h2 className="payment-section-title">CÁC HÌNH THỨC THANH TOÁN TẠI PANDA UNIFORM</h2>
            
            <div className="payment-methods-grid">
              {/* Internet Banking */}
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FaMobileAlt />
                  <div className="dollar-sign">$</div>
                </div>
                <h3>Internet Banking</h3>
                <div className="underline"></div>
                <p>
                  Bạn có cần gửi ảnh xác định trong những STK mà PANDA đã cung cấp, và gửi chuyển khoản
                  lên của mình. Rằng bạn đã chuyển khoản cho PANDA STK của bạn thuê.
                </p>
              </div>

              {/* Trực tiếp tại các sở giao dịch */}
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FaUniversity />
                  <div className="coin-sign">₫</div>
                </div>
                <h3>Trực tiếp tại các<br />sở giao dịch</h3>
                <div className="underline"></div>
                <p>
                  Bạn tiến về trực tiếp ngân hàng/sở Viettel/địa điểm thực hiện việc trao đổi, và thực hiện chuyển khoản vào STK PANDA đã gửi cho bạn.
                </p>
              </div>

              {/* Trực tiếp tại văn phòng Panda */}
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FaBuilding />
                </div>
                <h3>Trực tiếp tại văn<br />phòng Panda</h3>
                <div className="underline"></div>
                <p>
                  Chuyển khoản trực tiếp tại văn phòng tại xưởng của PANDA Uniform thì bạn cũng có thể công việc kinh doanh, Hoặc trực tiếp thanh toán ngay ở minh.
                </p>
              </div>
            </div>

            {/* Note section */}
            <div className="payment-note">
              <ul>
                <li>
                  Vì lý do PANDA sẽ tiến hành CHỤP tắc các chỉ cả giặc định của mình bản định không thực bằng
                  thực, lên sẽ có một các hình thực thành toán hạy chỗ lớ đặc biệt nằm số số PANDA sở cũng các, tắc định
                  trên dùng của mình bạn nhé!
                </li>
              </ul>
            </div>

            {/* Bank account info */}
            <div className="bank-info-section">
              <h2 className="bank-info-title">THÔNG TIN TÀI KHOẢN NGÂN HÀNG</h2>
              <div className="bank-info-image">
                <img src="/images/THÔNG TIN TÀI KHOẢN NGÂN HÀNG.jpg" alt="Thông tin tài khoản ngân hàng" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PaymentMethodsPage;
