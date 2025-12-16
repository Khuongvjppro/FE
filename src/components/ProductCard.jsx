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
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {discount > 0 && <div className="discount-badge">-{discount}%</div>}
        <div className="product-overlay">
          <Link
            to={`/product/${product.id}`}
            className="overlay-btn detail-btn"
          >
            Chi tiết
          </Link>
          <button className="overlay-btn preview-btn">Xem trước</button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="price">{formatPrice(product.price)}</div>
        <button className="add-to-cart-btn">Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}

export default ProductCard;
