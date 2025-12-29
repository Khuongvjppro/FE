import "./AboutPageContent.css";

function AboutPageContent() {
  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Về Chúng Tôi</span>
            <h1 className="hero-title">
              Tạo Nên Sự Khác Biệt <br />
              <span className="highlight">Với Đồng Phục Chất Lượng</span>
            </h1>
            <p className="hero-description">
              Chúng tôi không chỉ tạo ra đồng phục, mà còn tạo nên bản sắc riêng
              cho tổ chức của bạn. Với hơn 8 năm kinh nghiệm, Panda Uniform tự
              hào là đối tác tin cậy của hàng nghìn doanh nghiệp.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Năm Kinh Nghiệm</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Khách Hàng</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Nhân Viên</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <div className="story-section">
          <div className="section-header">
            <span className="section-badge">Câu Chuyện</span>
            <h2 className="section-title">Hành Trình Của Chúng Tôi</h2>
            <p className="section-subtitle">
              Từ một xưởng nhỏ đến thương hiệu đồng phục uy tín hàng đầu Việt
              Nam
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2016</span>
              </div>
              <div className="timeline-content">
                <h3>Khởi Đầu</h3>
                <p>
                  Thành lập với tên gọi "Đồng Phục Xịn Mịn - Panda Uniform" với
                  mục tiêu mang đến sản phẩm chất lượng cao
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2018</span>
              </div>
              <div className="timeline-content">
                <h3>Mở Rộng</h3>
                <p>
                  Mở rộng quy mô sản xuất, đầu tư máy móc hiện đại và đội ngũ
                  nhân viên chuyên nghiệp
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2020</span>
              </div>
              <div className="timeline-content">
                <h3>Vươn Xa</h3>
                <p>
                  Phục vụ hơn 100.000 khách hàng trên toàn quốc, trở thành đối
                  tác của nhiều tập đoàn lớn
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-year">2024</span>
              </div>
              <div className="timeline-content">
                <h3>Tiên Phong</h3>
                <p>
                  Áp dụng công nghệ in ấn hiện đại và vải thân thiện môi trường,
                  hướng tới phát triển bền vững
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h3>Sứ Mệnh</h3>
              <p>
                Mang đến những sản phẩm đồng phục chất lượng cao, thiết kế hiện
                đại, giúp tạo nên bản sắc riêng và tinh thần đoàn kết cho mỗi tổ
                chức.
              </p>
            </div>

            <div className="vision-box">
              <h3>Tầm Nhìn</h3>
              <p>
                Trở thành thương hiệu đồng phục hàng đầu Việt Nam, được tin
                tưởng bởi chất lượng sản phẩm và dịch vụ khách hàng xuất sắc.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <div className="section-header">
            <span className="section-badge">Giá Trị Cốt Lõi</span>
            <h2 className="section-title">Điều Chúng Tôi Tin Tưởng</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h3>Chất Lượng</h3>
              <p>
                Cam kết 100% vải cotton cao cấp, đường may tỉ mỉ, kiểm soát chất
                lượng nghiêm ngặt
              </p>
            </div>

            <div className="value-card">
              <h3>Sáng Tạo</h3>
              <p>
                Không ngừng đổi mới thiết kế, cập nhật xu hướng thời trang đồng
                phục hiện đại
              </p>
            </div>

            <div className="value-card">
              <h3>Tận Tâm</h3>
              <p>
                Luôn lắng nghe và thấu hiểu nhu cầu khách hàng, tư vấn nhiệt
                tình 24/7
              </p>
            </div>

            <div className="value-card">
              <h3>Đúng Hẹn</h3>
              <p>
                Giao hàng đúng tiến độ cam kết, không để khách hàng phải chờ đợi
              </p>
            </div>

            <div className="value-card">
              <h3>Bền Vững</h3>
              <p>
                Sử dụng vải thân thiện môi trường, quy trình sản xuất xanh, sạch
              </p>
            </div>

            <div className="value-card">
              <h3>Giá Tốt</h3>
              <p>
                Giá cả cạnh tranh với chất lượng vượt trội, nhiều ưu đãi hấp dẫn
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Sản phẩm mỗi ngày</div>
              <div className="stat-description">Công suất sản xuất ổn định</div>
            </div>

            <div className="stat-box">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Khách hàng tin tưởng</div>
              <div className="stat-description">Trên toàn quốc</div>
            </div>

            <div className="stat-box">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Mẫu thiết kế</div>
              <div className="stat-description">Đa dạng phong cách</div>
            </div>

            <div className="stat-box">
              <div className="stat-number">98%</div>
              <div className="stat-label">Khách hàng hài lòng</div>
              <div className="stat-description">Đánh giá 5 sao</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Sẵn Sàng Tạo Nên Đồng Phục Của Riêng Bạn?</h2>
            <p>Liên hệ ngay với chúng tôi để được tư vấn và báo giá miễn phí</p>
            <div className="cta-buttons">
              <a href="/products" className="btn btn-primary">
                Xem Sản Phẩm
              </a>
              <a href="tel:19008697" className="btn btn-secondary">
                Gọi Ngay: 1900 8697
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPageContent;
