import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      setProduct(response.data);
      setSelectedColor(response.data.colors[0]);
      setSelectedSize(response.data.sizes[0]);
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

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return <div className="loading">Đang tải...</div>;
  }

  if (!product) {
    return <div className="error">Không tìm thấy sản phẩm</div>;
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Quay lại
        </button>

        <div className="detail-content">
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
            {discount > 0 && <div className="discount-badge">-{discount}%</div>}
          </div>

          <div className="detail-info">
            <h1 className="detail-title">{product.name}</h1>

            <div className="rating-section">
              <div className="stars">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="rating-number">{product.rating}</span>
              <span className="reviews-count">({product.reviews} đánh giá)</span>
            </div>

            <div className="price-section">
              <span className="current-price">{formatPrice(product.price)}</span>
              {discount > 0 && (
                <>
                  <span className="original-price">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="save-amount">
                    Tiết kiệm {formatPrice(product.originalPrice - product.price)}
                  </span>
                </>
              )}
            </div>

            <div className="description-section">
              <h3>Mô tả sản phẩm</h3>
              <p>{product.description}</p>
            </div>

            <div className="color-section">
              <h3>Màu sắc</h3>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-option ${
                      selectedColor === color ? "active" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="size-section">
              <h3>Kích thước</h3>
              <div className="size-options">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`size-option ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <h3>Số lượng</h3>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
              <span className="stock-info">
                {product.stock > 0
                  ? `Còn ${product.stock} sản phẩm`
                  : "Hết hàng"}
              </span>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn">
                Thêm vào giỏ hàng
              </button>
              <button className="buy-now-btn">Mua ngay</button>
            </div>

            {product.badge && (
              <div className="product-badge">{product.badge}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
