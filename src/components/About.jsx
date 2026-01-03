import { FiCheck } from "react-icons/fi";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-images">
            <div className="about-image-wrapper large">
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

          <div className="about-text">
            <div className="about-header">
              <h2 className="about-title">VỀ PANDA</h2>
              <div className="about-divider"></div>
            </div>

            <div className="about-body">
              <p className="about-description">
                <strong>Panda Uniform</strong> tự hào là nhà cung cấp đồng phục
                uy tín chất lượng hàng đầu miền Bắc với sản phẩm đồng phục{" "}
                <em>Xịn Mịn – 100% cotton cao cấp</em> nhất trên thị trường hiện
                nay.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <FiCheck />
                  </div>
                  <span>Áo lớp, áo nhóm, đồng phục CLB</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <FiCheck />
                  </div>
                  <span>Đồng phục họp lớp</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <FiCheck />
                  </div>
                  <span>Áo phông, Polo, Sơ mi</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <FiCheck />
                  </div>
                  <span>Quần áu – chân váy</span>
                </div>
              </div>

              <p className="about-description">
                Panda Uniform đã, đang và sẽ luôn nỗ lực hết sức, dùng tất cả
                tâm huyết và trí lực để mang tới cho bạn sản phẩm tuyệt vời
                nhất. Chúng tôi gửi gắm niềm tin, sự đoàn kết và bản sắc của cả
                tập thể cùng chất lượng, dịch vụ trên cả mong đợi.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Năm kinh nghiệm</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Khách hàng tin tưởng</div>
                </div>
                <div className="stat-item">
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
