import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import { useFetch } from "../hooks";
import { productService } from "../services/api";
import { CATEGORY_LIST } from "../constants";
import "./ProductsPage.css";

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    sortBy: "default",
    searchTerm: "",
  });

  const { data: products, loading } = useFetch(
    () => productService.getAll(),
    []
  );

  // Update selectedCategory when URL changes
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setFilters((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (products) {
      let filtered = [...products];

      // Filter by category
      if (filters.category !== "all") {
        filtered = filtered.filter(
          (product) => product.category === filters.category
        );
      } else if (selectedCategory !== "all") {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory
        );
      }

      // Filter by search term
      if (filters.searchTerm) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
        );
      }

      // Filter by price range
      if (filters.priceRange !== "all") {
        filtered = filtered.filter((product) => {
          const price = product.price;
          switch (filters.priceRange) {
            case "under-150":
              return price < 150000;
            case "150-200":
              return price >= 150000 && price <= 200000;
            case "200-250":
              return price >= 200000 && price <= 250000;
            case "above-250":
              return price > 250000;
            default:
              return true;
          }
        });
      }

      // Sort products
      if (filters.sortBy !== "default") {
        filtered.sort((a, b) => {
          switch (filters.sortBy) {
            case "price-asc":
              return a.price - b.price;
            case "price-desc":
              return b.price - a.price;
            case "name-asc":
              return a.name.localeCompare(b.name);
            case "name-desc":
              return b.name.localeCompare(a.name);
            case "rating":
              return (b.rating || 0) - (a.rating || 0);
            default:
              return 0;
          }
        });
      }

      setFilteredProducts(filtered);
    }
  }, [products, selectedCategory, filters]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Sync category filter with sidebar
    if (newFilters.category !== "all") {
      setSelectedCategory(newFilters.category);
    }
  };

  const getCategoryName = () => {
    if (selectedCategory === "all") {
      return "Sản phẩm bán chạy";
    }
    const category = CATEGORY_LIST.find((cat) => cat.id === selectedCategory);
    return category ? category.name : "Sản phẩm bán chạy";
  };

  const categorySubItems = {
    "ao-phong-lop": [
      "T-shirt cổ V",
      "T-shirt Raglan",
      "T-shirt Ringer Tee",
      "T-shirt Basic",
      "T-shirt Oversize",
      "T-shirt Galaxy",
      "T-shirt Pattern",
    ],
    "ao-lop-co-co": [
      "Polo cổ Zip",
      "Polo mix màu",
      "Polo Mix cổ V",
      "Polo Basic",
      "Polo Oversize",
      "Polo Tartan",
      "Polo Uni",
      "Polo Lacoste Panu",
      "Polo cổ tàu",
    ],
    "ao-lop-so-mi": [
      "Sơ mi Hàn Quốc",
      "Sơ mi Tie Dye",
      "Sơ mi 3D",
      "Sơ mi Tartan",
    ],
    "dong-phuc-mua-dong": [
      "Áo gió Mix màu",
      "Áo gió Basic",
      "Áo khoác lớp",
      "Áo lớp Hoodie",
      "Áo lớp Sweater",
      "Polo Sweatshirt",
    ],
    mau: [
      "Áo lớp màu hồng",
      "Áo lớp màu xanh dương",
      "Áo lớp màu xanh",
      "Áo lớp màu tím",
      "Áo lớp màu đen",
      "Áo lớp màu xám",
      "Áo lớp màu trắng",
      "Áo lớp màu đỏ",
      "Áo lớp màu cam",
      "Áo lớp màu vàng",
      "Áo lớp màu be",
      "Áo lớp màu nâu",
    ],
    bst: [
      "Áo lớp phản quang",
      "Áo lớp chất ngầu cá tính",
      "Áo lớp đơn giản",
      "Áo lớp Phi hành gia",
      "Áo lớp 12 con giáp",
      "Áo lớp chuyên",
      "Áo lớp 3D",
      "Áo lớp dạ quang",
      "Áo lớp Typography",
      "Áo lớp dễ thương Chibi",
    ],
  };

  const categoriesWithoutSub = [
    "dong-phuc-han-quoc",
    "combo-dong-phuc",
    "ao-bong-chay",
    "dong-phuc-hop-lop",
  ];

  return (
    <MainLayout>
      <div className="products-page">
        {/* Banner */}
        <div className="products-banner">
          <div className="banner-content">
            <h1>{getCategoryName()}</h1>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link> &gt;{" "}
              <span>{getCategoryName()}</span>
            </div>
            <div className="hashtag">#dongphucpanda</div>
          </div>
        </div>

        <div className="products-container">
          {/* Sidebar Filter */}
          <aside className="products-sidebar">
            <h3 className="sidebar-title">LỌC SẢN PHẨM</h3>

            {/* Advanced Filter Component */}
            <ProductFilter
              onFilterChange={handleFilterChange}
              categories={CATEGORY_LIST}
            />

            <div className="filter-group">
              <h4 style={{ marginTop: "20px", marginBottom: "10px" }}>
                Danh mục chi tiết
              </h4>
              <ul className="category-list">
                {CATEGORY_LIST.map((category) => (
                  <li key={category.id} className="category-item">
                    <div className="category-header">
                      <span
                        className={
                          selectedCategory === category.id ? "active" : ""
                        }
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSearchParams({ category: category.id });
                          setSelectedSubcategory(null);
                          if (categorySubItems[category.id]) {
                            setExpandedCategories((prev) => ({
                              ...prev,
                              [category.id]: true,
                            }));
                          }
                        }}
                      >
                        {category.name}
                      </span>
                      {categorySubItems[category.id] && (
                        <button
                          className={`toggle-btn ${
                            expandedCategories[category.id] ? "expanded" : ""
                          }`}
                          onClick={() => toggleCategory(category.id)}
                        >
                          ›
                        </button>
                      )}
                    </div>

                    {categorySubItems[category.id] &&
                      expandedCategories[category.id] && (
                        <ul className="subcategory-list">
                          {categorySubItems[category.id].map((sub, idx) => (
                            <li key={idx}>
                              <label className="checkbox-label">
                                <input
                                  type="checkbox"
                                  checked={selectedSubcategory === sub}
                                  onChange={() => {
                                    setSelectedSubcategory(
                                      selectedSubcategory === sub ? null : sub
                                    );
                                  }}
                                />
                                <span>{sub}</span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-content">
            <div className="products-header">
              <h2>
                {getCategoryName()} ({filteredProducts.length} Sản phẩm)
              </h2>
            </div>

            {loading ? (
              <div className="loading">Đang tải sản phẩm...</div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && !loading && (
              <div className="no-products">
                Không có sản phẩm nào trong danh mục này
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductsPage;
