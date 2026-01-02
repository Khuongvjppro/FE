import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiPackage, FiTrendingUp, FiStar } from "react-icons/fi";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-bg">
      <div className="contact-decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="contact-form-wrapper">
        <div className="contact-panda-icon"><FiStar /></div>

        <h2 className="contact-title">
          <span className="contact-title-highlight">ĐẶT HÀNG</span> SỐ LƯỢNG LỚN
          <br />
          NHẬN ƯU ĐÃI ĐẶC BIỆT
        </h2>

        <p className="contact-subtitle">
          Dành cho đơn hàng từ 10 sản phẩm - Giảm giá lên đến 15%
        </p>

        <div className="bulk-order-benefits">
          <div className="benefit-item">
            <FiPackage className="benefit-icon" />
            <span>Miễn phí vận chuyển</span>
          </div>
          <div className="benefit-item">
            <FiTrendingUp className="benefit-icon" />
            <span>Giảm giá theo số lượng</span>
          </div>
          <div className="benefit-item">
            <FiShoppingCart className="benefit-icon" />
            <span>Tư vấn thiết kế miễn phí</span>
          </div>
        </div>

        <div className="bulk-order-cta">
          <Link to="/bulk-order" className="bulk-order-button">
            <FiShoppingCart />
            <span>Đặt hàng ngay</span>
          </Link>
          <p className="cta-note">
            <FiPackage /> Xử lý đơn hàng nhanh chóng - Giao hàng đúng hẹn
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
