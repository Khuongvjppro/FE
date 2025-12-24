import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const getCategoryName = (category) => {
    const categoryMap = {
      "ao-lop-co-co": "Áo Polo",
      "ao-lop-so-mi": "Sơ mi Oxford",
      "ao-lop-thun": "T-shirt Wash",
      "ao-lop-thun-cotton": "Áo Thun Cotton",
    };
    return categoryMap[category] || category;
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card-wrapper">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="product-overlay">
            <button className="overlay-btn detail-btn">Chi tiết</button>
            <button className="overlay-btn preview-btn">Xem trước</button>
          </div>
        </div>

        <div className="product-info">
          <div className="product-category">
            {getCategoryName(product.category)}
          </div>
          <h3 className="product-name">{product.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
