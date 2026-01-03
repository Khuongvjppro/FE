import { useState } from "react";
import { Link } from "react-router-dom";
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
      image: "/images/news-logo.jpg",
      category: "featured",
      date: "2024-12-20",
      excerpt:
        "Hành trình 8 năm xây dựng thương hiệu đồng phục chất lượng cao, mang đến giá trị tốt nhất cho khách hàng.",
    },
    {
      id: 2,
      title: "Tổng hợp mẫu logo áo lớp chuyên toán nổi bật nhất hiện nay",
      image: "/images/news-logoMath.jpg",
      category: "featured",
      date: "2024-12-15",
      excerpt:
        "Những thiết kế logo độc đáo, sáng tạo dành riêng cho các lớp chuyên toán, thể hiện đam mê và tài năng.",
    },
    {
      id: 3,
      title: "Bộ sưu tập áo lớp mới nhất - Phong cách trẻ trung",
      image: "/images/news-shirt.jpg",
      category: "new-product",
      date: "2024-12-10",
      excerpt:
        "Khám phá những mẫu áo lớp với kiểu dáng hiện đại, chất liệu cao cấp, phù hợp với mọi phong cách.",
    },
    {
      id: 4,
      title: "Thành tích đáng tự hào của Panda Uniform",
      image: "/images/news-achievement.jpg",
      category: "featured",
      date: "2024-12-05",
      excerpt:
        "Chặng đường phát triển với những thành tựu ấn tượng và sự tin tưởng từ hàng ngàn khách hàng.",
    },
    {
      id: 5,
      title: "Slogan sáng tạo cho áo lớp - Tạo dấu ấn riêng",
      image: "/images/news-slogan.jpg",
      category: "new-product",
      date: "2024-12-01",
      excerpt:
        "Top các slogan hay, ý nghĩa giúp lớp bạn nổi bật và để lại ấn tượng khó quên.",
    },
    {
      id: 6,
      title: "Áo lớp dành cho giáo viên - Phong cách chuyên nghiệp",
      image: "/images/news-teacherShirt.jpg",
      category: "new-product",
      date: "2024-11-28",
      excerpt:
        "Thiết kế áo lớp đặc biệt cho giáo viên, kết hợp giữa sự lịch lãm và tính đồng đội.",
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
            <div className="news-hero-content">
              <h1 className="news-hero-title">Tin Tức</h1>
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
                      <Link
                        to={`/news/${article.id}`}
                        className="news-card-link"
                      >
                        Xem chi tiết →
                      </Link>
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
