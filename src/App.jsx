import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        axios.get("http://localhost:3001/products"),
        axios.get("http://localhost:3001/categories"),
      ]);
      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="app">
      <Header />

      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <div className="subtitle">CITY PLAYER 🔥</div>
            <h2>CITY PLAYERS<br/>BST ÁO SƠ MI BÓNG CHÀY CỔ TRÒN</h2>
            <p>Kêm một chút các cảm xúc cháy hết kiếp diễm cho những trở về, Sống tạo điều ta với mẫu áo Bông chày từ hướng cây về thuyền đây cám hành. BST City Player đãu trung sức xứ dáng bóng chày những động sang thể loại kích thước đã đồ trưng những sụ năng ấu bật môt, Panda Uniform đãu diệt sư dụng chết tiếu với mã giúp chỉ đó đáo trơ nên nhũ, thoải mái, tự kin show chết chạt.</p>
            <button className="cta-button">Khám phá ngay</button>
          </div>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">TOP ĐỒNG PHỤC BÁN CHẠY</h2>
            <div className="category-tabs">
              <button
                className={selectedCategory === "all" ? "active" : ""}
                onClick={() => setSelectedCategory("all")}
              >
                Tất cả
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={selectedCategory === cat.slug ? "active" : ""}
                  onClick={() => setSelectedCategory(cat.slug)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="products-section">
            <div className="products-header">
              <p className="products-count">
                Hiển thị {filteredProducts.length} sản phẩm
              </p>
              <select className="sort-select">
                <option>Mới nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
                <option>Bán chạy</option>
              </select>
            </div>

            {loading ? (
              <div className="loading">Đang tải...</div>
            ) : (
              <ProductList products={filteredProducts} />
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>ĐỒNG PHỤC PANDA</h3>
              <p>Tự hào là thương hiệu cung cấp đồng phục uy tín, chất lượng hàng đầu. Chúng tôi luôn nỗ lực dùng tất cả tâm huyết để mang tới những sản phẩm tuyệt vời nhất.</p>
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
              <p>📞 1900 8697</p>
              <p>📧 dongphucsangxinmin@gmail.com</p>
              <p>📍 Số 25, ngách 2, ngõ 208 Trần Cung, phường Nghĩa Đô, TP Hà Nội</p>
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
    </div>
  );
}

export default App;
