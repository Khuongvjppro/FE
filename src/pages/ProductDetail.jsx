import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiStar,
  FiCheck,
  FiZoomIn,
} from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import { API_BASE_URL, API_ENDPOINTS } from "../constants";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProduct();
    fetchRelatedProducts();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${API_ENDPOINTS.PRODUCTS}/${id}`
      );
      const productData = response.data;
      setProduct(productData);
      setSelectedSize(productData.sizes?.[0] || null);
      setSelectedColor(productData.colors?.[0] || null);
      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${API_ENDPOINTS.PRODUCTS}`
      );
      const filtered = response.data
        .filter((p) => p.id !== parseInt(id))
        .slice(0, 4);
      setRelatedProducts(filtered);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm liên quan:", error);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Vui lòng chọn size và màu sắc!");
      return;
    }

    addToCart(product, quantity, selectedSize, selectedColor);
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
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
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}

              <h1 className="product-title">{product.name}</h1>

              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={
                        i < Math.floor(product.rating || 0)
                          ? "star-filled"
                          : "star-empty"
                      }
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {product.rating} ({product.reviews} đánh giá)
                </span>
              </div>

              <div className="product-price-section">
                <div className="price-main">{formatPrice(product.price)}</div>
                {product.originalPrice && (
                  <>
                    <div className="price-original">
                      {formatPrice(product.originalPrice)}
                    </div>
                    <div className="price-discount">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </div>
                  </>
                )}
              </div>

              <div className="product-description">
                <p>{product.description}</p>
              </div>

              {/* Size Selection */}
              <div className="product-option-group">
                <label className="option-label">
                  Chọn Size: <strong>{selectedSize}</strong>
                </label>
                <div className="size-options">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="product-option-group">
                <label className="option-label">
                  Chọn Màu: <strong>{selectedColor}</strong>
                </label>
                <div className="color-options-new">
                  {product.colors?.map((color, index) => (
                    <button
                      key={index}
                      className={`color-btn ${
                        selectedColor === color ? "active" : ""
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                      {selectedColor === color && (
                        <FiCheck className="check-icon" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="product-option-group">
                <label className="option-label">Số lượng:</label>
                <div className="quantity-selector">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    min="1"
                  />
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="stock-status">
                  <FiCheck /> Còn {product.stock} sản phẩm
                </span>
              </div>

              {/* Action Buttons */}
              <div className="product-actions-new">
                <button
                  className={`btn-add-cart ${addedToCart ? "added" : ""}`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <>
                      <FiCheck /> Đã thêm vào giỏ
                    </>
                  ) : (
                    <>
                      <FiShoppingCart /> Thêm vào giỏ hàng
                    </>
                  )}
                </button>
                <button className="btn-icon-action" title="Yêu thích">
                  <FiHeart />
                </button>
                <button className="btn-icon-action" title="Chia sẻ">
                  <FiShare2 />
                </button>
              </div>

              {/* Features */}
              <div className="product-features">
                <div className="feature-item">
                  <FiCheck className="feature-icon" />
                  <span>Miễn phí vận chuyển với đơn trên 500k</span>
                </div>
                <div className="feature-item">
                  <FiCheck className="feature-icon" />
                  <span>Đổi trả trong 7 ngày</span>
                </div>
                <div className="feature-item">
                  <FiCheck className="feature-icon" />
                  <span>Bảo hành chính hãng</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="product-tabs">
            <div className="tabs-header">
              <button
                className={`tab-btn ${
                  activeTab === "description" ? "active" : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Mô tả sản phẩm
              </button>
              <button
                className={`tab-btn ${activeTab === "specs" ? "active" : ""}`}
                onClick={() => setActiveTab("specs")}
              >
                Thông số kỹ thuật
              </button>
              <button
                className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Đánh giá ({product.reviews})
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === "description" && (
                <div className="tab-panel fade-in">
                  <h3>Mô tả chi tiết</h3>
                  <p>{product.description}</p>
                  <ul>
                    <li>Chất liệu: Cotton cao cấp, thoáng mát</li>
                    <li>Form áo: Regular fit, phù hợp mọi dáng người</li>
                    <li>Màu sắc: Đa dạng, không phai màu sau giặt</li>
                    <li>
                      Thiết kế: Hiện đại, trẻ trung, phù hợp làm đồng phục lớp
                    </li>
                    <li>Dễ dàng in ấn logo, hình ảnh theo yêu cầu</li>
                  </ul>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="tab-panel fade-in">
                  <h3>Thông số kỹ thuật</h3>
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Danh mục:</strong>
                        </td>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Chất liệu:</strong>
                        </td>
                        <td>Cotton 100%</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Sizes:</strong>
                        </td>
                        <td>{product.sizes?.join(", ")}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Màu sắc:</strong>
                        </td>
                        <td>{product.colors?.join(", ")}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Xuất xứ:</strong>
                        </td>
                        <td>Việt Nam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="tab-panel fade-in">
                  <h3>Đánh giá từ khách hàng</h3>
                  <div className="reviews-summary">
                    <div className="rating-score">
                      <div className="score">{product.rating}</div>
                      <div className="stars-large">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={
                              i < Math.floor(product.rating)
                                ? "star-filled"
                                : "star-empty"
                            }
                          />
                        ))}
                      </div>
                      <div className="reviews-count">
                        {product.reviews} đánh giá
                      </div>
                    </div>
                  </div>

                  <div className="review-item">
                    <div className="review-header">
                      <strong>Nguyễn Văn A</strong>
                      <div className="review-stars">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} className="star-filled" />
                        ))}
                      </div>
                    </div>
                    <p>
                      Chất lượng áo rất tốt, màu sắc đẹp, phù hợp làm đồng phục
                      lớp. Giao hàng nhanh!
                    </p>
                  </div>

                  <div className="review-item">
                    <div className="review-header">
                      <strong>Trần Thị B</strong>
                      <div className="review-stars">
                        {[...Array(4)].map((_, i) => (
                          <FiStar key={i} className="star-filled" />
                        ))}
                        <FiStar className="star-empty" />
                      </div>
                    </div>
                    <p>
                      Áo đẹp, form chuẩn. Giá cả hợp lý. Sẽ quay lại ủng hộ
                      shop!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h2>Sản phẩm liên quan</h2>
              <div className="related-products-grid">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    className="related-product-card"
                  >
                    <div className="related-product-image">
                      <img src={item.image} alt={item.name} />
                      {item.badge && (
                        <span className="related-badge">{item.badge}</span>
                      )}
                    </div>
                    <div className="related-product-info">
                      <h4>{item.name}</h4>
                      <div className="related-price">
                        <span className="price">{formatPrice(item.price)}</span>
                        {item.originalPrice && (
                          <span className="price-old">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetail;
