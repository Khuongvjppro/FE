import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../contexts/AuthContext";
import { FiUser, FiMail, FiPhone, FiMapPin, FiShoppingBag, FiSettings, FiLogOut, FiEdit2, FiSave, FiX } from "react-icons/fi";
import "./Profile.css";

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("info");
  const [isEditing, setIsEditing] = useState(false);
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState({
    name: user?.email?.split("@")[0] || "Người dùng",
    email: user?.email || "",
    phone: "",
    address: "",
    avatar: "",
  });
  const [editForm, setEditForm] = useState(profile);

  useEffect(() => {
    // Load profile data from localStorage
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const profileData = JSON.parse(savedProfile);
      setProfile(profileData);
      setEditForm(profileData);
    }

    // Load order history from localStorage
    const savedOrders = localStorage.getItem("orderHistory");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSaveProfile = () => {
    setProfile(editForm);
    localStorage.setItem("userProfile", JSON.stringify(editForm));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  const getOrderStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#43a047";
      case "processing":
        return "#fb8c00";
      case "pending":
        return "#fdd835";
      case "cancelled":
        return "#e53935";
      default:
        return "#666";
    }
  };

  const getOrderStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Đã giao";
      case "processing":
        return "Đang xử lý";
      case "pending":
        return "Chờ xác nhận";
      case "cancelled":
        return "Đã hủy";
      default:
        return status;
    }
  };

  return (
    <MainLayout>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} />
            ) : (
              <div className="avatar-placeholder">
                <FiUser size={48} />
              </div>
            )}
          </div>
          <div className="profile-header-info">
            <h1>{profile.name}</h1>
            <p>{profile.email}</p>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-tabs">
            <button
              className={`tab-button ${activeTab === "info" ? "active" : ""}`}
              onClick={() => setActiveTab("info")}
            >
              <FiUser /> Thông tin cá nhân
            </button>
            <button
              className={`tab-button ${activeTab === "orders" ? "active" : ""}`}
              onClick={() => setActiveTab("orders")}
            >
              <FiShoppingBag /> Đơn hàng của tôi
            </button>
            <button
              className={`tab-button ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              <FiSettings /> Cài đặt
            </button>
          </div>

          <div className="profile-tab-content">
            {activeTab === "info" && (
              <div className="tab-panel">
                <div className="panel-header">
                  <h2>Thông tin cá nhân</h2>
                  {!isEditing ? (
                    <button
                      className="btn-edit"
                      onClick={() => setIsEditing(true)}
                    >
                      <FiEdit2 /> Chỉnh sửa
                    </button>
                  ) : (
                    <div className="edit-actions">
                      <button className="btn-save" onClick={handleSaveProfile}>
                        <FiSave /> Lưu
                      </button>
                      <button className="btn-cancel" onClick={handleCancelEdit}>
                        <FiX /> Hủy
                      </button>
                    </div>
                  )}
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <label>
                      <FiUser /> Họ và tên
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm({ ...editForm, name: e.target.value })
                        }
                      />
                    ) : (
                      <p>{profile.name}</p>
                    )}
                  </div>

                  <div className="info-item">
                    <label>
                      <FiMail /> Email
                    </label>
                    <p>{profile.email}</p>
                  </div>

                  <div className="info-item">
                    <label>
                      <FiPhone /> Số điện thoại
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editForm.phone}
                        onChange={(e) =>
                          setEditForm({ ...editForm, phone: e.target.value })
                        }
                        placeholder="Nhập số điện thoại"
                      />
                    ) : (
                      <p>{profile.phone || "Chưa cập nhật"}</p>
                    )}
                  </div>

                  <div className="info-item full-width">
                    <label>
                      <FiMapPin /> Địa chỉ
                    </label>
                    {isEditing ? (
                      <textarea
                        value={editForm.address}
                        onChange={(e) =>
                          setEditForm({ ...editForm, address: e.target.value })
                        }
                        placeholder="Nhập địa chỉ"
                        rows="3"
                      />
                    ) : (
                      <p>{profile.address || "Chưa cập nhật"}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="tab-panel">
                <h2>Lịch sử đơn hàng</h2>
                {orders.length === 0 ? (
                  <div className="empty-state">
                    <FiShoppingBag size={64} color="#ccc" />
                    <h3>Chưa có đơn hàng nào</h3>
                    <p>Bạn chưa có đơn hàng nào. Hãy mua sắm ngay!</p>
                    <button
                      className="btn-primary"
                      onClick={() => navigate("/products")}
                    >
                      Khám phá sản phẩm
                    </button>
                  </div>
                ) : (
                  <div className="orders-list">
                    {orders.map((order) => (
                      <div key={order.id} className="order-card">
                        <div className="order-header">
                          <div>
                            <h3>Đơn hàng #{order.id}</h3>
                            <p className="order-date">{order.date}</p>
                          </div>
                          <span
                            className="order-status"
                            style={{
                              color: getOrderStatusColor(order.status),
                              background: `${getOrderStatusColor(order.status)}15`,
                            }}
                          >
                            {getOrderStatusText(order.status)}
                          </span>
                        </div>
                        <div className="order-items">
                          {order.items?.map((item, idx) => (
                            <div key={idx} className="order-item">
                              <img
                                src={item.image || "/public/images/no-image.png"}
                                alt={item.name}
                              />
                              <div className="order-item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-quantity">
                                  SL: {item.quantity}
                                </p>
                              </div>
                              <p className="item-price">
                                {item.price?.toLocaleString()}₫
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="order-total">
                          <strong>Tổng cộng:</strong>
                          <strong className="total-price">
                            {order.total?.toLocaleString()}₫
                          </strong>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "settings" && (
              <div className="tab-panel">
                <h2>Cài đặt tài khoản</h2>
                <div className="settings-list">
                  <div className="setting-item">
                    <div>
                      <h4>Thông báo qua email</h4>
                      <p>Nhận thông báo về đơn hàng và khuyến mãi</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div>
                      <h4>Nhận tin khuyến mãi</h4>
                      <p>Nhận thông tin về các chương trình ưu đãi</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-item danger">
                    <div>
                      <h4>Đăng xuất</h4>
                      <p>Thoát khỏi tài khoản của bạn</p>
                    </div>
                    <button className="btn-logout" onClick={handleLogout}>
                      <FiLogOut /> Đăng xuất
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
