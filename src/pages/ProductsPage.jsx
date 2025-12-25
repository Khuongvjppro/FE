import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks";
import { productService } from "../services/api";
import { CATEGORY_LIST } from "../constants";
import "./ProductsPage.css";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const { data: products, loading } = useFetch(
    () => productService.getAll(),
    []
  );

  useEffect(() => {
    if (products) {
      if (selectedCategory === "all") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((product) => product.category === selectedCategory)
        );
      }
      setCurrentPage(1); // Reset về trang 1 khi đổi category
    }
  }, [products, selectedCategory]);

  // Tính toán sản phẩm hiển thị theo trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const categorySubItems = {
    "ao-phong-lop": [
      "T-shirt cổ V",
      "T-shirt Raglan",
      "T-shirt Ringer Tee",
      "T-shirt Basic",
      "T-shirt Oversize",
      "T-shirt Galaxy",
      "T-shirt Pattern"
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
      "Polo cổ tàu"
    ],
    "ao-lop-so-mi": [
      "Sơ mi Hàn Quốc",
      "Sơ mi Tie Dye",
      "Sơ mi 3D",
      "Sơ mi Tartan"
    ],
    "dong-phuc-mua-dong": [
      "Áo gió Mix màu",
      "Áo gió Basic",
      "Áo khoác lớp",
      "Áo lớp Hoodie",
      "Áo lớp Sweater",
      "Polo Sweatshirt"
    ],
    "mau": [
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
      "Áo lớp màu nâu"
    ],
    "bst": [
      "Áo lớp phản quang",
      "Áo lớp chất ngầu cá tính",
      "Áo lớp đơn giản",
      "Áo lớp Phi hành gia",
      "Áo lớp 12 con giáp",
      "Áo lớp chuyên",
      "Áo lớp 3D",
      "Áo lớp dạ quang",
      "Áo lớp Typography",
      "Áo lớp dễ thương Chibi"
    ]
  };

  const categoriesWithoutSub = ["dong-phuc-han-quoc", "combo-dong-phuc", "ao-bong-chay", "dong-phuc-hop-lop"];

  return (
    <MainLayout>
      <div className="products-page">
        {/* Banner */}
        <div className="products-banner">
          <div className="banner-content">
            <h1>Sản phẩm bán chạy</h1>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link> &gt; <span>Sản phẩm bán chạy</span>
            </div>
            <div className="hashtag">#dongphucpanda</div>
          </div>
        </div>

        <div className="products-container">
          {/* Sidebar Filter */}
          <aside className="products-sidebar">
            <h3 className="sidebar-title">LỌC SẢN PHẨM</h3>
            
            <div className="filter-group">
              <ul className="category-list">
                {CATEGORY_LIST.map((category) => (
                  <li key={category.id} className="category-item">
                    <div className="category-header">
                      <span
                        className={selectedCategory === category.id ? "active" : ""}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          if (categorySubItems[category.id]) {
                            setExpandedCategories(prev => ({
                              ...prev,
                              [category.id]: true
                            }));
                          }
                        }}
                      >
                        {category.name}
                      </span>
                      {categorySubItems[category.id] && (
                        <button
                          className={`toggle-btn ${expandedCategories[category.id] ? "expanded" : ""}`}
                          onClick={() => toggleCategory(category.id)}
                        >
                          ›
                        </button>
                      )}
                    </div>
                    
                    {categorySubItems[category.id] && expandedCategories[category.id] && (
                      <ul className="subcategory-list">
                        {categorySubItems[category.id].map((sub, idx) => (
                          <li key={idx}>
                            <label className="checkbox-label">
                              <input type="checkbox" />
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
              <h2>Sản phẩm bán chạy ({filteredProducts.length} Sản phẩm)</h2>
            </div>

            {loading ? (
              <div className="loading">Đang tải sản phẩm...</div>
            ) : (
              <>
                <div className="products-grid">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className="pagination-btn"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      ‹ Trước
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      // Hiển thị: trang đầu, trang cuối, trang hiện tại và 1 trang trước/sau
                      if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={pageNumber}
                            className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </button>
                        );
                      } else if (
                        pageNumber === currentPage - 2 ||
                        pageNumber === currentPage + 2
                      ) {
                        return <span key={pageNumber} className="pagination-dots">...</span>;
                      }
                      return null;
                    })}

                    <button
                      className="pagination-btn"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Sau ›
                    </button>
                  </div>
                )}
              </>
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
