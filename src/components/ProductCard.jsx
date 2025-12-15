import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {discount > 0 && <div className="discount-badge">-{discount}%</div>}
        </div>

        <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-colors">
          <span className="label">Màu sắc:</span>
          <div className="colors">
            {product.colors.slice(0, 3).map((color, index) => (
              <span key={index} className="color-item">
                {color}
              </span>
            ))}
            {product.colors.length > 3 && (
              <span className="color-more">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>

        <div className="product-sizes">
          <span className="label">Size:</span>
          <div className="sizes">
            {product.sizes.slice(0, 5).map((size, index) => (
              <span key={index} className="size-item">
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-text">
            ({product.rating}/5 - {product.reviews} đánh giá)
          </span>
        </div>

        <div className="product-footer">
          <div className="price-section">
            <span className="price">{formatPrice(product.price)}</span>
            {discount > 0 && (
              <span className="original-price">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button className="add-to-cart-btn">Thêm vào giỏ</button>
        </div>
      </div>
      </div>
    </Link>
  );
}

export default ProductCard;
