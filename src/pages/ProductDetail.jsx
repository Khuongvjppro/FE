import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="loading">Đang tải...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="app">
        <Header />
        <div className="not-found">Không tìm thấy sản phẩm</div>
      </div>
    );
  }

  // Use images array from API, fallback to single image
  const images = product.images || [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="app">
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Trang chủ</Link>
          <span> › </span>
          <span>Màu</span>
          <span> › </span>
          <span>Áo lớp màu xám</span>
          <span> › </span>
          <span className="current">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="product-detail-container">
        <div className="container">
          <div className="product-detail-grid">
            {/* Images Section */}
            <div className="product-images">
              <div className="main-image">
                <img src={images[selectedImage]} alt={product.name} />
              </div>
              <div className="thumbnail-list">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${
                      selectedImage === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="product-info-detail">
              <div className="product-category">{product.category}</div>
              <h1 className="product-title">{product.name}</h1>
              <div className="product-sku">SKU: {product.id}033</div>

              <div className="product-specs">
                <div className="spec-row">
                  <span className="spec-label">BST:</span>
                  <span className="spec-value">BST Verse Plus</span>
                </div>

                <div className="spec-row">
                  <span className="spec-label">Màu sắc chi tiết:</span>
                  <div className="color-options">
                    {product.colors.map((color, index) => (
                      <div key={index} className="color-option">
                        <div
                          className="color-circle"
                          style={{ background: index === 0 ? "#999" : "#ddd" }}
                        ></div>
                        <span>{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="spec-row">
                  <span className="spec-label">Kiểu áo:</span>
                  <span className="spec-value">Sơ mi Oxford</span>
                </div>

                <div className="spec-row">
                  <span className="spec-label">Chất liệu:</span>
                  <span className="spec-value">Vải Oxford</span>
                </div>
              </div>

              <div className="product-actions">
                <button className="btn-quote">Nhận báo giá</button>
                <button className="btn-contact">
                  <span className="messenger-icon">💬</span> Liên hệ ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
