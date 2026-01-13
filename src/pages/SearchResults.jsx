import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { productService } from "../services/api";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { FiSearch } from "react-icons/fi";
import "./SearchResults.css";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchTerm(query);
      handleSearch(query);
    }
  }, [searchParams]);

  useEffect(() => {
    handleSort();
  }, [sortBy, products]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await productService.search(query);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ q: searchTerm });
    }
  };

  const handleSort = () => {
    let sorted = [...products];
    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name, "vi"));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name, "vi"));
        break;
      default:
        break;
    }
    setFilteredProducts(sorted);
  };

  return (
    <div className="search-results-page">
      <div className="container">
        {/* Search Bar Section */}
        <div className="search-section">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-input-group">
              <FiSearch className="search-form-icon" />
              <input
                type="text"
                className="search-form-input"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-form-btn">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>

        {/* Results Header */}
        {!isLoading && (
          <div className="results-header">
            <h1 className="results-title">
              {filteredProducts.length > 0 ? (
                <>
                  Tìm thấy <span>{filteredProducts.length}</span> kết quả cho "
                  {searchParams.get("q")}"
                </>
              ) : (
                <>Không tìm thấy kết quả cho "{searchParams.get("q")}"</>
              )}
            </h1>

            {filteredProducts.length > 0 && (
              <div className="results-controls">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="default">Mặc định</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                  <option value="name-asc">Tên: A-Z</option>
                  <option value="name-desc">Tên: Z-A</option>
                </select>
              </div>
            )}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="loading-container">
            <LoadingSpinner />
          </div>
        )}

        {/* Results Grid */}
        {!isLoading && filteredProducts.length > 0 && (
          <div className="results-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading &&
          filteredProducts.length === 0 &&
          searchParams.get("q") && (
            <div className="no-results-container">
              <div className="no-results-icon">
                <FiSearch size={64} />
              </div>
              <h2>Không tìm thấy sản phẩm</h2>
              <p>
                Rất tiếc, chúng tôi không tìm thấy sản phẩm nào phù hợp với từ
                khóa "{searchParams.get("q")}"
              </p>
              <div className="no-results-suggestions">
                <h3>Gợi ý:</h3>
                <ul>
                  <li>Kiểm tra lại chính tả từ khóa</li>
                  <li>Thử sử dụng từ khóa khác</li>
                  <li>Sử dụng từ khóa chung chung hơn</li>
                </ul>
              </div>
              <button
                className="back-to-products-btn"
                onClick={() => navigate("/products")}
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          )}
      </div>
    </div>
  );
}

export default SearchResults;
