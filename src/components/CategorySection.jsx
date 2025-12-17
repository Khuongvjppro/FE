import { useState } from "react";
import ProductCard from "./ProductCard";
import "./CategorySection.css";

function CategorySection({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("ao-lop-co-co");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categoryList = [
    { id: "ao-lop-co-co", name: "ÁO LỚP CÓ CỔ" },
    { id: "ao-lop-so-mi", name: "ÁO LỚP SƠ MI" },
    { id: "ao-phong-lop", name: "ÁO PHÔNG LỚP" },
    { id: "dong-phuc-han-quoc", name: "ĐỒNG PHỤC HÀN QUỐC" },
    { id: "dong-phuc-mua-dong", name: "ĐỒNG PHỤC MÙA ĐÔNG" },
    { id: "dong-phuc-hop-lop", name: "ĐỒNG PHỤC HỌP LỚP" },
  ];

  return (
    <section className="category-section">
      <div className="container-full">
        <h2 className="category-main-title">DANH MỤC SẢN PHẨM</h2>

        <div className="category-layout">
          {/* Sidebar Categories */}
          <aside className="category-sidebar">
            {categoryList.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </aside>

          {/* Products Area */}
          <div className="category-products">
            <div className="category-products-header">
              <a href="/san-pham" className="view-more-link">
                Xem thêm sản phẩm <span>›</span>
              </a>
            </div>

            <div className="category-products-grid">
              {filteredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
