import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks";
import { productService } from "../services/api";
import "./ProductsPage.css";

function ProductsPage() {
  const { data: products, loading } = useFetch(
    () => productService.getAll(),
    []
  );

  return (
    <MainLayout>
      <div className="products-page">
        <div className="products-header">
          <h1>Tất cả sản phẩm</h1>
          <p>({products?.length || 0} sản phẩm)</p>
        </div>

        {loading ? (
          <div className="loading">Đang tải sản phẩm...</div>
        ) : (
          <div className="products-grid">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default ProductsPage;
