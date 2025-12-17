import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-images">
            <div className="about-image large">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop"
                alt="Panda Uniform"
              />
            </div>
            <div className="about-image-grid">
              <div className="about-image small">
                <img
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop"
                  alt="Đồng phục"
                />
              </div>
              <div className="about-image small">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop"
                  alt="Đồng phục"
                />
              </div>
            </div>
          </div>

          <div className="about-text">
            <h2 className="about-title">VỀ PANDA</h2>
            <p className="about-description">
              Panda Uniform tự hào là nhà cung cấp đồng phục uy tín chất lượng
              hàng đầu miền Bắc với sản phẩm đồng phục Xịn Mịn – 100% cotton cao
              cấp nhất trên thị trường hiện nay. Là đơn vị cung cấp, phân phối
              đa dạng các loại sản phẩm đồng phục bao gồm: áo lớp, áo nhóm, đồng
              phục CLB, Đồng phục họp lớp... Với nhiều kiểu dáng như: Áo phông,
              Polo, Sơ mi, Quần áu – chân váy.... thoải mái cho các bạn lựa
              chọn.
            </p>
            <p className="about-description">
              Panda Uniform đã đang và sẽ luôn nỗ lực hết sức, dùng tất cả tâm
              huyết và trí lực của mình để mang tới cho các bạn một sản phẩm
              tuyệt vời nhất. Chúng tôi gửi gắm niềm tin, sự đoàn kết và bản sắc
              của cả tập thể cùng với độ là chất lượng, dịch vụ trên cả sự mong
              đợi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
