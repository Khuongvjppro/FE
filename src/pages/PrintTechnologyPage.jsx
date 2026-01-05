import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../styles/consultation-common.css";
import "./PrintTechnologyPage.css";

function PrintTechnologyPage() {
  const [activeTab, setActiveTab] = useState("inluoi");

  const technologies = {
    inluoi: {
      id: "01",
      title: "In lưới",
      description: "Phương pháp in này là một trong những kỹ thuật in lâu đời. In lưới là một dạng kỹ thuật in dựa trên nguyên lý mực thấm qua lưới hình ảnh sẽ được in lên bề mặt vật liệu bởi trước đó một số mắt lưới in đã được bịt kín bằng hóa chất.",
      content: [
        "Quá trình in lưới sử dụng một khung gỗ sau đó căng một tấm lụa mỏng như khung thêu. Nên khi trước phương pháp in này còn được gọi là in lụa và sau này đã có một số vật liệu khác có thể thay thế như vải bông, vải sợi, lưới kim loại nên cách gọi chung là kỹ thuật in lưới.",
        "Ngoài khung lưới, một dụng cụ không thể thiếu khi thực hiện kỹ thuật in này là một vật liệu dạng tấm không thấm mực dùng để kéo lụa gọi là \"dao\". Dao gạt hồ in là công cụ dùng để đẩy, phết mực màu khiến mực thấm qua lưới in, chuyển mực lên sản phẩm cần in.",
        "Quá trình thực hiện in có thể thủ công hoặc bằng máy nhưng cho dù theo phương pháp nào thì yêu cầu quan trọng nhất đối với bàn in là phẳng, chắc và có độ đàn hồi nhất định để khuôn in có thể tiếp xúc đều với mặt sản phẩm in."
      ],
      steps: [
        "Cho giấy in nằm bên dưới bản, bản đặt lên trên cùng chiều với bản in thật.",
        "Cho mực tùy từng chất liệu cần in, lượng vừa phải sau đó dùng dao kéo nháp thử cho đều tay.",
        "Thực hiện tiếp cho đến khi có bản in như ý.",
        "Phơi bản in cho khô trên giá phơi."
      ],
      image: "/images/In lưới.jpg"
    },
    indecal: {
      id: "02",
      title: "In decal truyền nhiệt",
      description: "Công nghệ in decal truyền nhiệt là phương pháp in ấn hiện đại, sử dụng nhiệt độ cao để chuyển hình ảnh từ giấy decal lên vải. Đây là một trong những kỹ thuật được ưa chuộng nhất hiện nay.",
      content: [
        "In decal truyền nhiệt sử dụng máy ép nhiệt để chuyển hình ảnh từ giấy decal đặc biệt lên bề mặt vải. Nhiệt độ và áp lực cao giúp mực bám chắc vào sợi vải, tạo độ bền cao.",
        "Ưu điểm của phương pháp này là có thể in được nhiều màu sắc phức tạp, chi tiết sắc nét, độ bền màu cao và thời gian thực hiện nhanh.",
        "Công nghệ này phù hợp với mọi loại vải, đặc biệt là vải cotton và polyester, cho phép in được cả ảnh và thiết kế phức tạp."
      ],
      steps: [
        "Thiết kế hình ảnh trên máy tính và in ra giấy decal chuyển nhiệt.",
        "Đặt giấy decal lên vị trí cần in trên áo.",
        "Sử dụng máy ép nhiệt với nhiệt độ và thời gian phù hợp.",
        "Gỡ bỏ lớp giấy bảo vệ khi còn nóng hoặc khi đã nguội tùy loại giấy."
      ],
      image: "/images/In decal truyền nhiệt.jpg"
    },
    inchuyen: {
      id: "03",
      title: "In chuyển nhiệt",
      description: "In chuyển nhiệt là công nghệ in ấn tiên tiến, sử dụng máy in chuyên dụng để in trực tiếp lên giấy chuyển nhiệt rồi dùng máy ép để chuyển hình ảnh lên vải.",
      content: [
        "Công nghệ in chuyển nhiệt cho phép tạo ra những hình ảnh với độ chi tiết cao, màu sắc sống động và bền màu theo thời gian. Đây là lựa chọn tối ưu cho những thiết kế đòi hỏi độ chính xác cao.",
        "Phương pháp này sử dụng mực đặc biệt có khả năng thăng hoa khi gặp nhiệt độ cao, giúp mực thấm sâu vào sợi vải thay vì chỉ bám trên bề mặt.",
        "In chuyển nhiệt đảm bảo độ bền màu vượt trội, không bị nứt, bong tróc sau nhiều lần giặt và sử dụng."
      ],
      steps: [
        "In hình ảnh lên giấy chuyển nhiệt bằng máy in chuyên dụng.",
        "Chuẩn bị vải và làm phẳng bề mặt cần in.",
        "Đặt giấy in lên vải và sử dụng máy ép nhiệt.",
        "Kiểm tra chất lượng và hoàn thiện sản phẩm."
      ],
      image: "/images/In chuyển nhiệt.png"
    }
  };

  return (
    <MainLayout>
      <div className="print-tech-page">
        {/* Hero Banner */}
        <div className="print-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">Công nghệ in</h1>
            <div className="breadcrumb">
              <a href="/">Trang chủ</a>
              <span className="separator">›</span>
              <a href="/tu-van">Tư vấn</a>
              <span className="separator">›</span>
              <span className="current">Công nghệ in</span>
            </div>
          </div>
        </div>

        {/* Technology Tabs */}
        <div className="tech-tabs-container">
          <div className="container">
            <div className="tech-tabs">
              <button
                className={`tech-tab ${activeTab === "inluoi" ? "active" : ""}`}
                onClick={() => setActiveTab("inluoi")}
              >
                <span className="tab-number">{technologies.inluoi.id}</span>
                <span className="tab-title">{technologies.inluoi.title}</span>
              </button>
              <button
                className={`tech-tab ${activeTab === "indecal" ? "active" : ""}`}
                onClick={() => setActiveTab("indecal")}
              >
                <span className="tab-number">{technologies.indecal.id}</span>
                <span className="tab-title">{technologies.indecal.title}</span>
              </button>
              <button
                className={`tech-tab ${activeTab === "inchuyen" ? "active" : ""}`}
                onClick={() => setActiveTab("inchuyen")}
              >
                <span className="tab-number">{technologies.inchuyen.id}</span>
                <span className="tab-title">{technologies.inchuyen.title}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="tech-content">
          <div className="container">
            <div className="content-layout">
              {/* Image */}
              <div className="tech-image-section">
                <img
                  src={technologies[activeTab].image}
                  alt={technologies[activeTab].title}
                  className="tech-image"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400?text=" + technologies[activeTab].title;
                  }}
                />
              </div>

              {/* Description */}
              <div className="tech-description-section">
                <h2 className="tech-main-title">{technologies[activeTab].title}</h2>
                <p className="tech-intro">{technologies[activeTab].description}</p>

                {technologies[activeTab].content.map((paragraph, index) => (
                  <p key={index} className="tech-paragraph">{paragraph}</p>
                ))}

                {technologies[activeTab].steps && (
                  <div className="tech-steps">
                    <h3 className="steps-title">Thao tác {technologies[activeTab].title.toLowerCase()}:</h3>
                    <ul className="steps-list">
                      {technologies[activeTab].steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="container">
            <div className="info-grid">
              <div className="info-box">
                <h3 className="info-title">ĐỒNG PHỤC PANDA</h3>
                <p className="info-text">
                  Panda Uniform tự hào là thương hiệu cung cấp đồng phục uy tín, chất lượng hàng đầu miền Bắc. 
                  Chúng tôi luôn nỗ lực dùng tất cả tâm huyết và trí lực của mình để mang tới cho các bạn 
                  những sản phẩm tuyệt vời nhất.
                </p>
              </div>

              <div className="info-box">
                <h3 className="info-title">ĐẶT ÁO PANDA</h3>
                <ul className="info-links">
                  <li><a href="/tu-van/quy-trinh-dat-ao">Quy trình đặt hàng</a></li>
                  <li><a href="/products">Góc chọn áo</a></li>
                  <li><a href="/tu-van/bang-size">Tư vấn chọn size</a></li>
                  <li><a href="/tu-van/chinh-sach">Chính sách bảo hành</a></li>
                  <li><a href="/tu-van/phuong-thuc-thanh-toan">Hình thức thanh toán</a></li>
                </ul>
              </div>

              <div className="info-box">
                <h3 className="info-title">LIÊN HỆ</h3>
                <ul className="contact-info">
                  <li><a href="tel:19008697">📞 1900 8697</a></li>
                  <li><a href="mailto:dongphucsangxinmin@gmail.com">✉️ dongphucsangxinmin@gmail.com</a></li>
                  <li>📍 Số 25, ngách 2, ngõ 208 Trần Cung, phường Nghĩa Đô, TP Hà Nội</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PrintTechnologyPage;
