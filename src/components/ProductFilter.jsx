import { useState } from "react";
import "./ProductFilter.css";

function ProductFilter({ onFilterChange, categories }) {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    sortBy: "default",
    searchTerm: "",
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      category: "all",
      priceRange: "all",
      sortBy: "default",
      searchTerm: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="product-filter">
      <div className="filter-section">
        <h3>Tìm kiếm</h3>
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          value={filters.searchTerm}
          onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
          className="filter-search"
        />
      </div>

      <div className="filter-section">
        <h3>Danh mục</h3>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="filter-select"
        >
          <option value="all">Tất cả danh mục</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <h3>Khoảng giá</h3>
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          className="filter-select"
        >
          <option value="all">Tất cả</option>
          <option value="under-150">Dưới 150.000đ</option>
          <option value="150-200">150.000đ - 200.000đ</option>
          <option value="200-250">200.000đ - 250.000đ</option>
          <option value="above-250">Trên 250.000đ</option>
        </select>
      </div>

      <div className="filter-section">
        <h3>Sắp xếp</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
          className="filter-select"
        >
          <option value="default">Mặc định</option>
          <option value="price-asc">Giá thấp đến cao</option>
          <option value="price-desc">Giá cao đến thấp</option>
          <option value="name-asc">Tên A-Z</option>
          <option value="name-desc">Tên Z-A</option>
          <option value="rating">Đánh giá cao nhất</option>
        </select>
      </div>

      <button onClick={handleReset} className="filter-reset-btn">
        Xóa bộ lọc
      </button>
    </div>
  );
}

export default ProductFilter;
