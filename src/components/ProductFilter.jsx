import { useState } from "react";
import "./ProductFilter.css";

function ProductFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    onFilterChange({ searchTerm: value });
  };

  const handleReset = () => {
    setSearchTerm("");
    onFilterChange({ searchTerm: "" });
  };

  return (
    <div className="product-filter">
      <div className="filter-section">
        <h3>Tìm kiếm</h3>
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="filter-search"
        />
      </div>

      <button onClick={handleReset} className="filter-reset-btn">
        Xóa tìm kiếm
      </button>
    </div>
  );
}

export default ProductFilter;
