import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, showViewMore = true }) {
  if (products.length === 0) {
    return <div className="no-products">Không có sản phẩm nào</div>;
  }

  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {showViewMore && (
        <button className="view-more-btn">Xem thêm sản phẩm</button>
      )}
    </>
  );
}

export default ProductList;
