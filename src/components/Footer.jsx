import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>ĐỒNG PHỤC PANDA</h3>
            <p>
              Tự hào là thương hiệu cung cấp đồng phục uy tín, chất lượng hàng
              đầu. Chúng tôi luôn nỗ lực dùng tất cả tâm huyết để mang tới những
              sản phẩm tuyệt vời nhất.
            </p>
          </div>
          <div className="footer-column">
            <h3>ĐẶT ÁO</h3>
            <a href="#">Quy trình đặt hàng</a>
            <a href="#">Góc chọn áo</a>
            <a href="#">Tư vấn chọn size</a>
            <a href="#">Ưu đãi quà tặng</a>
            <a href="#">Chính sách bảo hành</a>
          </div>
          <div className="footer-column">
            <h3>LIÊN HỆ</h3>
            <p> 1900 8697</p>
            <p> dongphucsangxinmin@gmail.com</p>
            <p>Số 25, ngách 2, ngõ 208 Trần Cung, phường Nghĩa Đô, TP Hà Nội</p>
          </div>
          <div className="footer-column">
            <h3>MẠNG XÃ HỘI</h3>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Tiktok</a>
              <a href="#">Youtube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Đồng Phục Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
