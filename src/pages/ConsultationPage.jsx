import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/consultation-common.css";
import "./ConsultationPage.css";
import ChatWidget from "../components/ChatWidget";

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ sớm nhất.");
    setFormData({ name: "", phone: "", email: "", topic: "", message: "" });
  };

  return (
    <MainLayout>
      <div className="consultation-page">
        <section className="consultation-hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <span className="hero-tag">💬 Tư Vấn Chuyên Nghiệp</span>
                <h1 className="hero-title">
                  Chúng Tôi Luôn Sẵn Sàng <br />
                  <span className="highlight">Hỗ Trợ Bạn</span>
                </h1>
                <p className="hero-description">
                  Đội ngũ tư vấn chuyên nghiệp với hơn 10 năm kinh nghiệm trong lĩnh vực 
                  đồng phục sẽ giúp bạn tìm ra giải pháp tốt nhất cho nhu cầu của mình.
                </p>
                <div className="hero-features">
                  <div className="feature-item">
                    <span className="icon">✓</span>
                    <span>Tư vấn miễn phí 24/7</span>
                  </div>
                  <div className="feature-item">
                    <span className="icon">✓</span>
                    <span>Báo giá nhanh chóng</span>
                  </div>
                  <div className="feature-item">
                    <span className="icon">✓</span>
                    <span>Thiết kế miễn phí</span>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-decoration">
                  <div className="circle circle-1"></div>
                  <div className="circle circle-2"></div>
                  <div className="circle circle-3"></div>
                </div>
                <div className="contact-card">
                  <div className="card-icon">📞</div>
                  <div className="card-content">
                    <div className="card-label">Hotline</div>
                    <div className="card-value">1900-xxxx</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <main className="consultation-content">
        <div className="container">
          <div className="consultation-intro">
            <h2 className="consultation-section-title">Tư Vấn Miễn Phí</h2>
            <p className="consultation-description">
              Chào bạn — cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của chúng tôi. 
              Bạn có thể để lại số điện thoại hoặc sử dụng hộp chat ở góc phải để được hỗ trợ ngay lập tức.
            </p>
            <p className="consultation-note">
              Nếu bạn cần mẫu hoặc bảng giá, hãy nhắn tin trong chat hoặc chọn một trong các tùy chọn nhanh bên dưới.
            </p>
          </div>

          <div className="consultation-form-container">
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ tên của bạn"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập địa chỉ email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="topic">Nội dung cần tư vấn *</label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn nội dung cần tư vấn</option>
                  <option value="product">Tư vấn sản phẩm</option>
                  <option value="design">Tư vấn thiết kế</option>
                  <option value="material">Tư vấn vải/chất liệu</option>
                  <option value="price">Báo giá/Chi phí</option>
                  <option value="bulk">Đơn hàng số lượng lớn</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tin nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Nhập nội dung chi tiết bạn cần tư vấn..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Gửi yêu cầu tư vấn
              </button>
            </form>

            <div className="contact-info">
              <h3>Liên hệ trực tiếp</h3>
              <div className="contact-methods">
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <strong>Hotline</strong>
                    <p>1900-xxxx (8:00 - 21:00)</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">💬</span>
                  <div>
                    <strong>Chat trực tuyến</strong>
                    <p>Nhấn vào biểu tượng góc phải</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>support@uniformstore.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ChatWidget />
      </div>
    </MainLayout>
  );
};

export default ConsultationPage;
