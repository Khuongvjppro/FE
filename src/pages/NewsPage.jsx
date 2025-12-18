import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "./NewsPage.css";

function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "TẤT CẢ TIN TỨC" },
    { id: "featured", label: "BÀI VIẾT NỔI BẬT" },
    { id: "promotion", label: "CHƯƠNG TRÌNH KHUYẾN MÃI" },
    { id: "new-product", label: "SẢN PHẨM MỚI" },
  ];

  const articles = [
    {
      id: 1,
      title: 'Panda Uniform 8 năm kiến tạo đồng phục "Xịn Mịn"',
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      category: "featured",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Tổng hợp mẫu logo áo lớp chuyên toán nổi bật nhất hiện nay",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      category: "featured",
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "Top 15 màu áo lớp đẹp được yêu thích nhất hiện nay",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      category: "new-product",
      date: "2024-01-08",
    },
    {
      id: 4,
      title: "10+ mẫu logo áo lớp chuyên hóa không nên bỏ lỡ",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop",
      category: "new-product",
      date: "2024-01-05",
    },
    {
      id: 5,
      title: "Khuyến mãi đặc biệt mùa tựu trường",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
      category: "promotion",
      date: "2024-01-03",
    },
    {
      id: 6,
      title: "BST đồng phục mới - Xu hướng 2024",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop",
      category: "new-product",
      date: "2024-01-01",
    },
  ];

  const filteredArticles =
    activeFilter === "all"
      ? articles
      : articles.filter((article) => article.category === activeFilter);

  return (
    <MainLayout>
      <div className="news-page">
        <div className="news-hero">
          <div className="container">
            <h1 className="news-hero-title">Tin tức</h1>
            <div className="breadcrumb">
              <a href="/">Trang chủ</a>
              <span className="separator">›</span>
              <span>Tin tức</span>
            </div>
          </div>
          <div className="news-hashtag">#dongphucpanda</div>
        </div>

        <div className="news-content">
          <div className="container">
            <div className="news-filters">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-btn ${
                    activeFilter === filter.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <h2 className="articles-title">DANH SÁCH BÀI VIẾT</h2>

            <div className="articles-grid">
              {filteredArticles.map((article) => (
                <article key={article.id} className="news-card">
                  <div className="news-card-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="news-card-content">
                    <h3 className="news-card-title">{article.title}</h3>
                    <div className="news-card-footer">
                      <span className="news-card-date">
                        {new Date(article.date).toLocaleDateString("vi-VN")}
                      </span>
                      <a
                        href={`/news/${article.id}`}
                        className="news-card-link"
                      >
                        Xem chi tiết →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default NewsPage;
