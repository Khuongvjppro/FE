import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">ĐỒNG PHỤC PANDA</h3>
              <p className="footer-desc">
                Panda Uniform tự hào là thương hiệu cung cấp đồng phục uy tín, 
                chất lượng hàng đầu miền Bắc. Chúng tôi luôn nỗ lực dùng tất cả 
                tâm huyết và trí lực của mình để mang tới cho các bạn những sản 
                phẩm tuyệt vời nhất.
              </p>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">ĐẶT ÁO PANDA</h3>
              <ul className="footer-links">
                <li><a href="/tu-van/quy-trinh-dat-ao">Quy trình đặt hàng</a></li>
                <li><a href="/products">Góc chọn áo</a></li>
                <li><a href="/tu-van/bang-size">Tư vấn chọn size</a></li>
                <li><a href="/tu-van/chinh-sach">Ưu đãi quà tặng</a></li>
                <li><a href="/tu-van/phuong-thuc-thanh-toan">Miễn phí vận chuyển</a></li>
                <li><a href="/tu-van/chinh-sach">Chính sách bảo hành</a></li>
                <li><a href="/tu-van/phuong-thuc-thanh-toan">Hình thức thanh toán</a></li>
                <li><a href="/tu-van/faq">Câu hỏi thường gặp</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">LIÊN HỆ</h3>
              <ul className="footer-contact">
                <li>
                  <a href="tel:19008697">1900 8697</a>
                </li>
                <li>
                  <a href="mailto:dongphucsangxinmin@gmail.com">dongphucsangxinmin@gmail.com</a>
                </li>
                <li>
                  <span>Số 25, ngách 2, ngõ 208 Trần Cung, phường Nghĩa Đô, TP Hà Nội</span>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">MẠNG XÃ HỘI</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/pandauniform" target="_blank" rel="noopener noreferrer" className="social-link">
                  Facebook
                </a>
                <a href="https://www.instagram.com/panda_uniform" target="_blank" rel="noopener noreferrer" className="social-link">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@dilamkieu.pandauniform" target="_blank" rel="noopener noreferrer" className="social-link">
                  TikTok
                </a>
                <a href="https://www.youtube.com/pandauniform" target="_blank" rel="noopener noreferrer" className="social-link">
                  Youtube
                </a>
                <a href="http://zalo.me/pandauniform" target="_blank" rel="noopener noreferrer" className="social-link">
                  Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              Bản quyền 2025 © Website chính thức của Đồng phục Panda – Panda Uniform
            </p>
            <p className="company-info">
              Website DongPhucPanda.com thuộc quyền sở hữu của Công Ty TNHH Thương Mại và Dịch Vụ 3S Việt Nam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
