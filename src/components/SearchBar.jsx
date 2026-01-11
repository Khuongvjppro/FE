import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { productService } from "../services/api";
import "./SearchBar.css";

function SearchBar({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Focus vào input khi modal mở
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Tìm kiếm khi người dùng nhập
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim()) {
        handleSearch();
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    try {
      const response = await productService.search(searchTerm);
      setSearchResults(response.data);
      setShowResults(true);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    handleClose();
  };

  const handleViewAllResults = () => {
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    handleClose();
  };

  const handleClose = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowResults(false);
    onClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      handleViewAllResults();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={handleClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          <div className="search-input-wrapper">
            <FiSearch className="search-icon" />
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-close-btn" onClick={handleClose}>
              <FiX />
            </button>
          </div>
        </div>

        {isLoading && (
          <div className="search-loading">
            <div className="spinner"></div>
            <p>Đang tìm kiếm...</p>
          </div>
        )}

        {!isLoading && showResults && (
          <div className="search-results-container">
            {searchResults.length > 0 ? (
              <>
                <div className="search-results-list">
                  {searchResults.slice(0, 5).map((product) => (
                    <div
                      key={product.id}
                      className="search-result-item"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="search-result-image"
                      />
                      <div className="search-result-info">
                        <h4 className="search-result-name">{product.name}</h4>
                        <p className="search-result-category">
                          {product.categoryName}
                        </p>
                        <p className="search-result-price">
                          {product.price.toLocaleString("vi-VN")}đ
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {searchResults.length > 5 && (
                  <button
                    className="view-all-btn"
                    onClick={handleViewAllResults}
                  >
                    Xem tất cả {searchResults.length} kết quả
                  </button>
                )}
              </>
            ) : (
              <div className="no-results">
                <p>Không tìm thấy sản phẩm nào phù hợp với "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}

        {!isLoading && !showResults && searchTerm && (
          <div className="search-suggestions">
            <h4>Gợi ý tìm kiếm:</h4>
            <ul>
              <li>Áo phông lớp</li>
              <li>Áo lớp có cổ</li>
              <li>Đồng phục học sinh</li>
              <li>Áo thun cotton</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
