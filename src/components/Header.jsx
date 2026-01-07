import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { ROUTES, API_BASE_URL, API_ENDPOINTS } from "../constants";
import SearchBar from "./SearchBar";
import "./Header.css";

function Header() {
  const [menuData, setMenuData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const userDropdownRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }
    }
    if (showUserDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserDropdown]);
  const { getTotalItems } = useCart();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${API_ENDPOINTS.MENU_CATEGORIES}`
      );
      setMenuData(response.data);
    } catch (error) {
      console.error("Lỗi khi tải menu:", error);
    }
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="container">
          <div className="nav-wrapper">
            {/* Menu bên trái */}
            <div className="nav-left">
              {menuData.slice(0, 2).map((menu) => (
                <div
                  key={menu.id}
                  className="nav-item"
                  onMouseEnter={() => {
                    if (menu.hasDropdown) {
                      setActiveDropdown(menu.id);
                      setHoveredCategory(null);
                    }
                  }}
                  onMouseLeave={() => {
                    if (menu.hasDropdown) {
                      setActiveDropdown(null);
                      setHoveredCategory(null);
                    }
                  }}
                >
                  {menu.label === "TIN TỨC" ? (
                    <Link to={ROUTES.NEWS} className="nav-link">
                      {menu.label}
                    </Link>
                  ) : menu.label === "SẢN PHẨM" ? (
                    <Link to={ROUTES.PRODUCTS} className="nav-link">
                      {menu.label}
                    </Link>
                  ) : menu.label === "VỀ CHÚNG TÔI" ? (
                    <Link to={ROUTES.ABOUT} className="nav-link">
                      {menu.label}
                    </Link>
                  ) : (
                    <a href={menu.link} className="nav-link">
                      {menu.label}
                    </a>
                  )}

                  {menu.hasDropdown && activeDropdown === menu.id && (
                    <div className="dropdown-menu">
                      {/* Dropdown cho Sản Phẩm - 2 cột */}
                      {menu.productCategories ? (
                        <div className="dropdown-categories">
                          {menu.productCategories.map((category) => (
                            <div
                              key={category.id}
                              className={`category-item ${
                                hoveredCategory === category.id ? "active" : ""
                              }`}
                              onMouseEnter={() =>
                                setHoveredCategory(category.id)
                              }
                              onMouseLeave={() => setHoveredCategory(null)}
                            >
                              <Link
                                to={`/products?category=${category.id}`}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setHoveredCategory(null);
                                }}
                              >
                                {category.name}
                              </Link>
                              <span className="arrow">›</span>

                              {hoveredCategory === category.id && (
                                <div className="dropdown-subcategories">
                                  {category.subcategories.map((sub, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      to={`/products?category=${
                                        category.id
                                      }&subcategory=${encodeURIComponent(
                                        sub.name
                                      )}`}
                                      className="subcategory-item"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setHoveredCategory(null);
                                      }}
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Dropdown thông thường cho các menu khác */
                        menu.dropdown.map((section, idx) => (
                          <div className="dropdown-column" key={idx}>
                            <h3 className="dropdown-title">{section.title}</h3>
                            <ul className="dropdown-list">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <a
                                    href={item.link}
                                    className={
                                      item.highlight ? "highlight" : ""
                                    }
                                  >
                                    {item.name}
                                    {item.subtitle && (
                                      <span className="subtitle">
                                        {item.subtitle}
                                      </span>
                                    )}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Logo ở giữa */}
            <Link to="/" className="logo">
              <img src="/images/MainLogo.png" alt="Panda Uniform" />
            </Link>

            {/* Menu bên phải */}
            <div className="nav-right">
              {menuData.slice(2).map((menu) => (
                <div
                  key={menu.id}
                  className="nav-item"
                  onMouseEnter={() => {
                    if (menu.hasDropdown) {
                      setActiveDropdown(menu.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (menu.hasDropdown) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  {menu.label === "TIN TỨC" ? (
                    <Link to={ROUTES.NEWS} className="nav-link">
                      {menu.label}
                    </Link>
                  ) : (
                    <a href={menu.link} className="nav-link">
                      {menu.label}
                    </a>
                  )}

                  {menu.hasDropdown &&
                    activeDropdown === menu.id &&
                    menu.dropdown && (
                      <div className="dropdown-menu">
                        {menu.dropdown.map((section, idx) => (
                          <div className="dropdown-column" key={idx}>
                            <h3 className="dropdown-title">{section.title}</h3>
                            <ul className="dropdown-list">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <a
                                    href={item.link}
                                    className={
                                      item.highlight ? "highlight" : ""
                                    }
                                  >
                                    {item.name}
                                    {item.subtitle && (
                                      <span className="subtitle">
                                        {item.subtitle}
                                      </span>
                                    )}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {/* Search icon */}
              <button
                className="header-icon"
                onClick={() => setShowSearchBar(true)}
              >
                <FiSearch size={22} />
              </button>

              {/* Cart icon */}
              <Link to={ROUTES.CART} className="header-icon cart-icon">
                <FiShoppingCart size={22} />
                {getTotalItems() > 0 && (
                  <span className="cart-badge">{getTotalItems()}</span>
                )}
              </Link>

              {/* User icon có dropdown */}
              <div className="user-menu" ref={userDropdownRef}>
                <button
                  className="header-icon"
                  onClick={() => setShowUserDropdown((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={showUserDropdown}
                >
                  <FiUser size={22} />
                </button>
                {showUserDropdown && (
                  <div className="user-dropdown-menu">
                    <Link
                      to="/login"
                      className="user-dropdown-link"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to="/profile"
                      className="user-dropdown-link"
                      onClick={() => setShowUserDropdown(false)}
                    >
                      profile
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchBar
        isOpen={showSearchBar}
        onClose={() => setShowSearchBar(false)}
      />
    </header>
  );
}

export default Header;
