import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../styles/consultation-common.css";
import "./ExperiencePage.css";

function ExperiencePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
    // Reset form
    setFormData({
      name: "",
      phone: "",
      address: ""
    });
  };

  const handleRegisterClick = () => {
    // Cuộn xuống form
    document.getElementById('registration-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <MainLayout>
      <div className="experience-page">
        {/* Hero Banner */}
        <div className="experience-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Trải nghiệm màu áo thực tế</h1>
            <button className="hero-register-btn" onClick={handleRegisterClick}>
              Đăng ký nhận áo mẫu
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="experience-content">
          <div className="container">
            <div className="content-wrapper">
              {/* Left Side - Information */}
              <div className="info-section">
                <h2 className="section-title">
                  Chương trình trải nghiệm áo mẫu từ Panda Uniform
                </h2>
                <div className="info-text">
                  <p>
                    Panda Uniform ra đời sứ mệnh phủ sóng đồng phục Xin Mìn chất lượng cao tới 
                    100% các tập thể đủ lớn hay nhỏ trên khắp đất nước Việt Nam.
                  </p>
                  <p>
                    Bên cạnh những nỗ lực cải tiến sản phẩm, chúng tôi còn chú trọng vào gia 
                    tăng chất lượng dịch vụ và trải nghiệm của khách hàng.
                  </p>
                  <p>
                    Chương trình nhận áo mẫu từ Panda sẽ giúp ban xoá bỏ nỗi lo lắng về màu sắc, 
                    chất lượng sẽ lệch khi đặt áo đồng phục online.
                  </p>
                  <p>
                    Để được nhận áo mẫu free, bạn vui lòng điền thông tin vào form đăng ký ở 
                    dưới đây, áo mẫu sẽ được giao tận nơi cho những thành viên đăng ký.
                  </p>
                </div>
              </div>

              {/* Right Side - Registration Form */}
              <div className="form-section" id="registration-form">
                <form className="registration-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Họ và tên"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="address"
                      placeholder="Địa chỉ"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="form-textarea"
                      rows="4"
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    GỬI THÔNG TIN NGAY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ExperiencePage;
