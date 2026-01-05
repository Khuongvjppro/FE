import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../styles/consultation-common.css";
import "./SizePage.css";

function SizePage() {
  const [activeSize, setActiveSize] = useState("tshirt");

  const sizeData = {
    tshirt: {
      title: "Áo T-shirt/ Polo",
      image: "/images/Size1.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m54", weight: "40kg - 45kg" },
        { size: "L", height: "1m55 - 1m62", weight: "46kg - 50kg" },
        { size: "XL", height: "1m63 - 1m70", weight: "51kg - 60kg" },
        { size: "2XL", height: "1m71 - 1m75", weight: "61kg - 70kg" },
        { size: "3XL", height: ">1m75", weight: "> 70kg" },
      ],
    },
    oversize: {
      title: "Áo T-Shirt/ Polo Oversize",
      image: "/images/Size2.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m60", weight: "40kg - 50kg" },
        { size: "L", height: "1m61 - 1m70", weight: "51kg - 65kg" },
        { size: "XL", height: "1m71 - 1m78", weight: "66kg - 75kg" },
        { size: "2XL", height: ">1m78", weight: "> 75kg" },
      ],
    },
    somi: {
      title: "Áo Sơ mi Hàn Quốc",
      image: "/images/Size3.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m54", weight: "40kg - 45kg" },
        { size: "L", height: "1m55 - 1m62", weight: "46kg - 50kg" },
        { size: "XL", height: "1m63 - 1m70", weight: "51kg - 60kg" },
        { size: "2XL", height: "1m71 - 1m75", weight: "61kg - 70kg" },
      ],
    },
    somi3d: {
      title: "Áo Sơ mi 3D/ Tartan/ Tie dye",
      image: "/images/Size4.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m54", weight: "40kg - 45kg" },
        { size: "L", height: "1m55 - 1m62", weight: "46kg - 50kg" },
        { size: "XL", height: "1m63 - 1m70", weight: "51kg - 60kg" },
        { size: "2XL", height: "1m71 - 1m75", weight: "61kg - 70kg" },
      ],
    },
    quanao: {
      title: "Quần áo/ Chân váy",
      image: "/images/Size5.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m54", weight: "40kg - 45kg" },
        { size: "L", height: "1m55 - 1m62", weight: "46kg - 50kg" },
        { size: "XL", height: "1m63 - 1m70", weight: "51kg - 60kg" },
        { size: "2XL", height: "1m71 - 1m75", weight: "61kg - 70kg" },
      ],
    },
    sweater: {
      title: "Áo Sweater/ Hoodie/ Bomber",
      image: "/images/Size6.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m54", weight: "40kg - 45kg" },
        { size: "L", height: "1m55 - 1m62", weight: "46kg - 50kg" },
        { size: "XL", height: "1m63 - 1m70", weight: "51kg - 60kg" },
        { size: "2XL", height: "1m71 - 1m75", weight: "61kg - 70kg" },
      ],
    },
    khoac: {
      title: "Áo khoác gió (Jacket shirt)",
      image: "/images/Size7.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m54", weight: "40kg - 45kg" },
        { size: "L", height: "1m55 - 1m62", weight: "46kg - 50kg" },
        { size: "XL", height: "1m63 - 1m70", weight: "51kg - 60kg" },
        { size: "2XL", height: "1m71 - 1m75", weight: "61kg - 70kg" },
      ],
    },
    bongchay: {
      title: "Áo bóng chày",
      image: "/images/Size8.jpg",
      sizes: [
        { size: "S", height: "<1m50", weight: "< 40kg" },
        { size: "M", height: "1m50 - 1m54", weight: "40kg - 45kg" },
        { size: "L", height: "1m55 - 1m62", weight: "46kg - 50kg" },
        { size: "XL", height: "1m63 - 1m70", weight: "51kg - 60kg" },
        { size: "2XL", height: "1m71 - 1m75", weight: "61kg - 70kg" },
      ],
    },
  };

  return (
    <MainLayout>
      <div className="size-page">
        {/* Hero Banner */}
        <div className="consultation-hero">
          <div className="container">
            <div className="consultation-badge">SIZE ÁO</div>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="separator">›</span>
              <span>Size Áo</span>
            </div>
          </div>
          <div className="consultation-hashtag">#dongphucpanda</div>
        </div>

        {/* Main Content */}
        <div className="consultation-content">
          <div className="container">
            <div className="size-layout">
              {/* Sidebar */}
              <aside className="size-sidebar">
                <div className="sidebar-menu">
                  <button
                    className={`sidebar-btn ${
                      activeSize === "tshirt" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("tshirt")}
                  >
                    Áo T-shirt/ Polo
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeSize === "oversize" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("oversize")}
                  >
                    Áo T-Shirt/ Polo Oversize
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeSize === "somi" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("somi")}
                  >
                    Áo Sơ mi Hàn Quốc
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeSize === "somi3d" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("somi3d")}
                  >
                    Áo Sơ mi 3D/ Tartan/ Tie dye
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeSize === "quanao" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("quanao")}
                  >
                    Quần áo/ Chân váy
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeSize === "sweater" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("sweater")}
                  >
                    Áo Sweater/ Hoodie/ Bomber
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeSize === "khoac" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("khoac")}
                  >
                    Áo khoác gió (Jacket shirt)
                  </button>
                  <button
                    className={`sidebar-btn ${
                      activeSize === "bongchay" ? "active" : ""
                    }`}
                    onClick={() => setActiveSize("bongchay")}
                  >
                    Áo bóng chày
                  </button>
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="size-main">
                {/* Size Image and Table */}
                <div className="size-content-wrapper">
                  <div className="size-image-container">
                    <img
                      src={sizeData[activeSize].image}
                      alt={sizeData[activeSize].title}
                      className="size-image"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/700x500?text=Size+Chart";
                      }}
                    />
                    <div className="size-info-box">
                      <h3>Bảng {sizeData[activeSize].title} tại Panda Uniform</h3>
                    </div>
                  </div>

                  {/* Size Recommendations */}
                  <div className="size-recommendations">
                    <h3 className="recommendations-title">
                      MẸO CHỌN SIZE ÁO LỚP HAY:
                    </h3>
                    <ul className="recommendations-list">
                      <li>
                        Gọi số{" "}
                        <strong>
                          <a href="tel:19008697">1900 8697</a>
                        </strong>{" "}
                        để nhận tư vấn cùng các chuyên gia thời trang áo lớp sẵn sàng
                      </li>
                      <li>
                        Để được các bạn hạ dm - cạc: Lựa chọn size theo thông số chiều cao
                      </li>
                      <li>
                        Bảng size của Panda Uniform mang tính chất tham khảo, mỗi sở trường hợp cũa chiều cao hoặc cân nặng đặc biệt thì cần{" "}
                        <strong>
                          <a href="tel:19008697">Liên hệ Panda</a>
                        </strong>{" "}
                        để được các anh chị tư vấn viên hỗ trợ lựa chọn size phù hợp nhất!
                      </li>
                    </ul>
                    <div className="size-note">
                      <p><strong>Lưu ý:</strong> Nếu chưa thực hiện thông tin quá trình size phụ có thưởng thức trong vùng nội thưởng ngày hôm nay</p>
                      <p className="note-highlight">Bảng size áo Tshirt/ Polo tại Panda Uniform</p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SizePage;
