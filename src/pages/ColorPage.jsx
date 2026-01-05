import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../styles/consultation-common.css";
import "./ColorPage.css";

function ColorPage() {
  const [activeCategory, setActiveCategory] = useState("cotton");
  const [activeTab, setActiveTab] = useState("basic");

  const cottonTabs = {
    basic: {
      title: "COTTON BASIC",
      image: "/images/Cotton Basic.jpg",
    },
    excool: {
      title: "COTTON EXCOOL",
      image: "/images/Cotton Excool.jpg",
    },
    mega: {
      title: "COTTON MEGA",
      image: "/images/Cotton Mega.jpg",
    },
    extra: {
      title: "COTTON EXTRA",
      image: "/images/Cotton Extra.jpg",
    },
  };

  const lacosteTabs = {
    caocap: {
      title: "LACOSTE CAO CẤP",
      image: "/images/Lacoste cao cấp.jpg",
    },
    panu: {
      title: "LACOSTE PANU",
      image: "/images/Lacoste Panu.jpg",
    },
  };

  const niTabs = {
    daca: {
      title: "NỈ DA CÁ",
      image: "/images/Nỉ Da Cá.jpg",
    },
    bong: {
      title: "NỈ BÔNG",
      image: "/images/Nỉ Bông.jpg",
    },
  };

  const colorData = {
    cotton: {
      title: "VẢI COTTON",
      hasTabs: true,
      tabs: cottonTabs,
    },
    lacoste: {
      title: "VẢI LACOSTE",
      hasTabs: true,
      tabs: lacosteTabs,
    },
    polo: {
      title: "POLO MIX MÀU",
      image: "/images/Polo Mix Màu.jpg",
    },
    aodet: {
      title: "CÓ ÁO ĐỆT MIX MÀU",
      image: "/images/Vải cổ dệt mix màu.jpg",
    },
    kaki: {
      title: "VẢI KAKI",
      image: "/images/Vải Kaki.jpg",
    },
    ni: {
      title: "VẢI NỈ",
      hasTabs: true,
      tabs: niTabs,
    },
    somi: {
      title: "SƠ MI HÀN QUỐC",
      image: "/images/Sơ mi Hàn Quốc.jpg",
    },
    aogio: {
      title: "VẢI ÁO GIÓ",
      image: "/images/Vải áo gió.jpg",
    },
  };

  return (
    <MainLayout>
      <div className="color-page">
        {/* Hero Banner */}
        <div className="consultation-hero">
          <div className="container">
            <div className="consultation-badge">BẢNG MÀU</div>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="separator">›</span>
              <span>Bảng màu</span>
            </div>
          </div>
          <div className="consultation-hashtag">#dongphucpanda</div>
        </div>

        {/* Main Content */}
        <div className="consultation-content">
          <div className="container">
            <p className="hero-description">
              Panda Uniform là đơn vị cung cấp áo đồng phục chất lượng hàng đầu Việt Nam mang lại trải nghiệm tuyệt vời cho khách hàng về sản phẩm và dịch vụ. Dưới đây, Panda Uniform xin thấy được mỗi bảng màu của những chất vải khác nhau.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Trải nghiệm màu áo thực tế</button>
              <button className="btn-secondary">Liên hệ ngay</button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="color-content">
          <div className="container">
            <div className="color-layout">
              {/* Sidebar */}
              <aside className="color-sidebar">
                <div className="sidebar-menu">
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "cotton" ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory("cotton")}
                  >
                    Vải Cotton
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "lacoste" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveCategory("lacoste");
                      setActiveTab("panu");
                    }}
                  >
                    Vải Lacoste
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "polo" ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory("polo")}
                  >
                    Polo Mix Màu
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "aodet" ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory("aodet")}
                  >
                    Có áo đệt mix màu
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "kaki" ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory("kaki")}
                  >
                    Vải Kaki
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "ni" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveCategory("ni");
                      setActiveTab("bong");
                    }}
                  >
                    Vải Nỉ
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "somi" ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory("somi")}
                  >
                    Sơ mi Hàn Quốc
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeCategory === "aogio" ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory("aogio")}
                  >
                    Vải áo gió
                  </button>
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="color-main">
                {activeCategory === "cotton" && (
                  <>
                    <div className="color-header">
                      <div className="color-tabs">
                        <button
                          className={`tab-btn ${activeTab === "basic" ? "active" : ""}`}
                          onClick={() => setActiveTab("basic")}
                        >
                          Cotton Basic
                        </button>
                        <button
                          className={`tab-btn ${activeTab === "excool" ? "active" : ""}`}
                          onClick={() => setActiveTab("excool")}
                        >
                          Cotton Excool
                        </button>
                        <button
                          className={`tab-btn ${activeTab === "mega" ? "active" : ""}`}
                          onClick={() => setActiveTab("mega")}
                        >
                          Cotton Mega
                        </button>
                        <button
                          className={`tab-btn ${activeTab === "extra" ? "active" : ""}`}
                          onClick={() => setActiveTab("extra")}
                        >
                          Cotton Extra
                        </button>
                      </div>
                    </div>

                    {/* Color Image Display */}
                    <div className="color-image-container">
                      <img
                        src={cottonTabs[activeTab].image}
                        alt={cottonTabs[activeTab].title}
                        className="color-chart-image"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/900x700?text=Color+Chart";
                        }}
                      />
                    </div>
                  </>
                )}

                {activeCategory === "lacoste" && (
                  <>
                    <div className="color-header">
                      <div className="color-tabs">
                        <button
                          className={`tab-btn ${activeTab === "caocap" ? "active" : ""}`}
                          onClick={() => setActiveTab("caocap")}
                        >
                          Lacoste cao cấp
                        </button>
                        <button
                          className={`tab-btn ${activeTab === "panu" ? "active" : ""}`}
                          onClick={() => setActiveTab("panu")}
                        >
                          Lacoste Panu
                        </button>
                      </div>
                    </div>

                    {/* Color Image Display */}
                    <div className="color-image-container">
                      <img
                        src={lacosteTabs[activeTab]?.image || lacosteTabs.panu.image}
                        alt={lacosteTabs[activeTab]?.title || lacosteTabs.panu.title}
                        className="color-chart-image"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/900x700?text=Color+Chart";
                        }}
                      />
                    </div>
                  </>
                )}

                {activeCategory === "ni" && (
                  <>
                    <div className="color-header">
                      <div className="color-tabs">
                        <button
                          className={`tab-btn ${activeTab === "daca" ? "active" : ""}`}
                          onClick={() => setActiveTab("daca")}
                        >
                          Nỉ Da Cá
                        </button>
                        <button
                          className={`tab-btn ${activeTab === "bong" ? "active" : ""}`}
                          onClick={() => setActiveTab("bong")}
                        >
                          Nỉ Bông
                        </button>
                      </div>
                    </div>

                    {/* Color Image Display */}
                    <div className="color-image-container">
                      <img
                        src={niTabs[activeTab]?.image || niTabs.bong.image}
                        alt={niTabs[activeTab]?.title || niTabs.bong.title}
                        className="color-chart-image"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/900x700?text=Color+Chart";
                        }}
                      />
                    </div>
                  </>
                )}

                {["polo", "aodet", "kaki", "somi", "aogio"].includes(activeCategory) && (
                  <div className="color-image-container">
                    <img
                      src={colorData[activeCategory].image}
                      alt={colorData[activeCategory].title}
                      className="color-chart-image"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/900x700?text=Color+Chart";
                      }}
                    />
                  </div>
                )}

                {!activeCategory && (
                  <div className="color-placeholder">
                    <h2 className="placeholder-title">Chọn loại vải</h2>
                    <p className="placeholder-text">Vui lòng chọn một loại vải để xem bảng màu</p>
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ColorPage;
