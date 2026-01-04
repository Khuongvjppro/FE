import React from "react";
import "../styles/consultation-common.css";
import "./ConsultationPage.css";
import ChatWidget from "../components/ChatWidget";

const ConsultationPage = () => {
  return (
    <div className="consultation-page">
      <header className="consultation-hero">
        <div className="container hero-inner">
          <div>
            <div className="consultation-badge">Tư Vấn</div>
            <nav className="breadcrumb">
              <a href="/">Trang chủ</a>
              <span className="separator">/</span>
              <span className="current">Tư vấn</span>
            </nav>
          </div>
        </div>
        <div className="consultation-hashtag">#TưVấnMiễnPhí</div>
      </header>

      <main className="consultation-content">
        <div className="container">
          <div className="consultation-content-box consultation-center-card">
            <h2 className="consultation-section-title">Tư Vấn Miễn Phí</h2>
            <div className="consultation-card-text">
              <p>
                Chào bạn — đây là trang tư vấn. Bạn có thể để lại số điện thoại hoặc
                sử dụng hộp chat ở góc phải để được hỗ trợ ngay lập tức.
              </p>
              <p>
                Nếu bạn cần mẫu hoặc bảng giá, hãy nhắn tin trong chat hoặc chọn một
                trong các tùy chọn nhanh bên dưới.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating chat widget (positioned by its own CSS) */}
      <ChatWidget />
    </div>
  );
};

export default ConsultationPage;
