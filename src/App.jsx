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
        <div className="hero-content">
          <h2>BỘ SƯU TẬP MỚI NHẤT</h2>
          <p>Đồng phục công sở - Chất lượng cao - Giá tốt nhất</p>
          <button className="cta-button">Khám phá ngay</button>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Danh mục sản phẩm</h2>
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
              <h3>VỀ CHÚNG TÔI</h3>
              <p>Chuyên cung cấp đồng phục chất lượng cao với giá cả hợp lý</p>
            </div>
            <div className="footer-column">
              <h3>CHÍNH SÁCH</h3>
              <a href="#">Chính sách đổi trả</a>
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Điều khoản sử dụng</a>
            </div>
            <div className="footer-column">
              <h3>LIÊN HỆ</h3>
              <p>📞 1900.272737</p>
              <p>📧 support@dongphuc.vn</p>
              <p>📍 Hà Nội, Việt Nam</p>
            </div>
            <div className="footer-column">
              <h3>THEO DÕI CHÚNG TÔI</h3>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Youtube</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Đồng Phục. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
