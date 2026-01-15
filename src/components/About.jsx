import { FiCheck, FiAward, FiTrendingUp, FiHeart } from "react-icons/fi";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      {/* Animated background elements */}
      <div className="about-bg-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="about-content">
          {/* Image Gallery with modern design */}
          <div className="about-images">
            <div className="about-image-wrapper large">
              <div className="about-image-badge">Premium Quality</div>
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop"
                  alt="Panda Uniform"
                />
              </div>
            </div>
            <div className="about-image-grid">
              <div className="about-image-wrapper small">
                <div className="about-image">
                  <img
                    src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop"
                    alt="Đồng phục"
                  />
                </div>
              </div>
              <div className="about-image-wrapper small">
                <div className="about-image">
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop"
                    alt="Đồng phục"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content section with enhanced design */}
          <div className="about-text">
            <div className="about-header">
              <span className="about-subtitle">Giới Thiệu</span>
              <h2 className="about-title">
                VỀ PANDA
                <div className="title-decoration">
                  <span className="decoration-line"></span>
                  <span className="decoration-dot"></span>
                  <span className="decoration-line"></span>
                </div>
              </h2>
            </div>

            <div className="about-body">
              <div className="about-intro-card">
                <p className="about-description primary">
                  <strong className="brand-name">Panda Uniform</strong> tự hào
                  là nhà cung cấp đồng phục uy tín chất lượng hàng đầu miền Bắc
                  với sản phẩm đồng phục{" "}
                  <span className="highlight-text">
                    Xịn Mịn – 100% cotton cao cấp
                  </span>{" "}
                  nhất trên thị trường hiện nay.
                </p>
              </div>

              <p className="about-description">
                Panda Uniform đã, đang và sẽ luôn nỗ lực hết sức, dùng tất cả
                tâm huyết và trí lực để mang tới cho bạn sản phẩm tuyệt vời
                nhất. Chúng tôi gửi gắm niềm tin, sự đoàn kết và bản sắc của cả
                tập thể cùng chất lượng, dịch vụ trên cả mong đợi.
              </p>

              {/* Enhanced stats with icons */}
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <FiTrendingUp />
                  </div>
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Năm kinh nghiệm</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <FiHeart />
                  </div>
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Khách hàng tin tưởng</div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <FiAward />
                  </div>
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Cam kết chất lượng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
