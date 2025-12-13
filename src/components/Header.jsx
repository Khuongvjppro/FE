import { useState } from "react";
import "./Header.css";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-info">
              <span>📞 Hotline: 1900.272737</span>
              <span>📧 support@dongphuc.vn</span>
            </div>
            <div className="header-actions">
              <a href="#">Đăng nhập</a>
              <a href="#">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            <h1 className="logo">ĐỒNG PHỤC</h1>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn">🔍</button>
            </div>

            <div className="header-icons">
              <button className="icon-btn">
                <span className="icon">👤</span>
                <span>Tài khoản</span>
              </button>
              <button className="icon-btn">
                <span className="icon">🛒</span>
                <span>Giỏ hàng</span>
                <span className="badge">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <div className="nav-menu">
            <a href="#" className="nav-link">
              TRANG CHỦ
            </a>
            <a href="#" className="nav-link">
              NAM
            </a>
            <a href="#" className="nav-link">
              NỮ
            </a>
            <a href="#" className="nav-link">
              PHỤ KIỆN
            </a>
            <a href="#" className="nav-link">
              SALE
            </a>
            <a href="#" className="nav-link">
              VỀ CHÚNG TÔI
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
