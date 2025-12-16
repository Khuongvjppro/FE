import { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";

function Header() {
  const [menuData, setMenuData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/menuCategories");
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
                  <a href={menu.link} className="nav-link">
                    {menu.label}
                  </a>

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
                              <a href={category.link}>{category.name}</a>
                              <span className="arrow">›</span>

                              {hoveredCategory === category.id && (
                                <div className="dropdown-subcategories">
                                  {category.subcategories.map((sub, subIdx) => (
                                    <a
                                      key={subIdx}
                                      href={sub.link}
                                      className="subcategory-item"
                                    >
                                      {sub.name}
                                    </a>
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
            <a href="/" className="logo">
              <img
                src="https://dongphucpanda.com/wp-content/uploads/2020/04/logo-panda.png"
                alt="Panda Uniform"
              />
            </a>

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
                  <a href={menu.link} className="nav-link">
                    {menu.label}
                  </a>

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
              <button className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
