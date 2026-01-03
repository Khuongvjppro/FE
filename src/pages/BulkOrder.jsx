import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiTrash2,
  FiDownload,
  FiUpload,
  FiShoppingCart,
} from "react-icons/fi";
import MainLayout from "../layouts/MainLayout";
import { productService } from "../services/api";
import "./BulkOrder.css";

function BulkOrder() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: "", size: "M", quantity: 1 },
  ]);
  const [contactInfo, setContactInfo] = useState({
    className: "",
    schoolName: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const [activeTab, setActiveTab] = useState("manual"); // manual or upload

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await productService.getAll();
      const data = response.data;
      setProducts(data);
      if (data.length > 0) {
        setSelectedProduct(data[0]);
      }
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
    }
  };

  const handleProductChange = (productId) => {
    const product = products.find((p) => p.id === parseInt(productId));
    setSelectedProduct(product);
  };

  const addOrderItem = () => {
    setOrderItems([
      ...orderItems,
      { id: Date.now(), name: "", size: "M", quantity: 1 },
    ]);
  };

  const removeOrderItem = (id) => {
    if (orderItems.length > 1) {
      setOrderItems(orderItems.filter((item) => item.id !== id));
    }
  };

  const updateOrderItem = (id, field, value) => {
    setOrderItems(
      orderItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleContactChange = (field, value) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const calculateDiscount = (quantity) => {
    if (quantity >= 50) return 0.15; // 15% off
    if (quantity >= 30) return 0.1; // 10% off
    if (quantity >= 20) return 0.08; // 8% off
    if (quantity >= 10) return 0.05; // 5% off
    return 0;
  };

  const getTotalQuantity = () => {
    return orderItems.reduce(
      (sum, item) => sum + (parseInt(item.quantity) || 0),
      0
    );
  };

  const getSubtotal = () => {
    const totalQty = getTotalQuantity();
    if (!selectedProduct) return 0;
    return selectedProduct.price * totalQty;
  };

  const getDiscount = () => {
    const subtotal = getSubtotal();
    const totalQty = getTotalQuantity();
    const discountRate = calculateDiscount(totalQty);
    return subtotal * discountRate;
  };

  const getTotal = () => {
    return getSubtotal() - getDiscount();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleDownloadTemplate = () => {
    const csvContent =
      "STT,Họ và Tên,Size,Số Lượng\n1,Nguyễn Văn A,M,1\n2,Trần Thị B,L,1";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mau-dat-hang-so-luong-lon.csv";
    link.click();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const rows = text.split("\n").slice(1); // Skip header
        const items = rows
          .filter((row) => row.trim())
          .map((row, index) => {
            const [, name, size, quantity] = row.split(",");
            return {
              id: Date.now() + index,
              name: name?.trim() || "",
              size: size?.trim() || "M",
              quantity: parseInt(quantity?.trim()) || 1,
            };
          });
        if (items.length > 0) {
          setOrderItems(items);
        }
      };
      reader.readAsText(file);
    }
  };

  const getSizeSummary = () => {
    const summary = {};
    orderItems.forEach((item) => {
      const size = item.size;
      summary[size] = (summary[size] || 0) + (parseInt(item.quantity) || 0);
    });
    return summary;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (!selectedProduct) {
      alert("Vui lòng chọn sản phẩm!");
      return;
    }

    if (getTotalQuantity() === 0) {
      alert("Vui lòng nhập số lượng đặt hàng!");
      return;
    }

    if (!contactInfo.contactPerson || !contactInfo.phone) {
      alert("Vui lòng điền đầy đủ thông tin liên hệ!");
      return;
    }

    // Prepare order data
    const orderData = {
      product: selectedProduct,
      items: orderItems,
      contactInfo,
      summary: {
        totalQuantity: getTotalQuantity(),
        subtotal: getSubtotal(),
        discount: getDiscount(),
        total: getTotal(),
        sizeSummary: getSizeSummary(),
      },
      orderDate: new Date().toISOString(),
    };

    console.log("Order data:", orderData);
    alert(
      "Đơn hàng đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất."
    );

    // Reset form
    setOrderItems([{ id: 1, name: "", size: "M", quantity: 1 }]);
    setContactInfo({
      className: "",
      schoolName: "",
      contactPerson: "",
      phone: "",
      email: "",
      address: "",
      notes: "",
    });
  };

  return (
    <MainLayout>
      <div className="bulk-order-page">
        {/* Hero Section */}
        <div className="bulk-hero">
          <div className="container">
            <h1>Đặt Hàng Số Lượng Lớn</h1>
            <p>Dành cho đơn hàng từ 10 sản phẩm trở lên - Giảm giá đặc biệt</p>
            <div className="discount-badges">
              <div className="discount-badge">
                <span className="qty">10-19 sản phẩm</span>
                <span className="percent">Giảm 5%</span>
              </div>
              <div className="discount-badge">
                <span className="qty">20-29 sản phẩm</span>
                <span className="percent">Giảm 8%</span>
              </div>
              <div className="discount-badge">
                <span className="qty">30-49 sản phẩm</span>
                <span className="percent">Giảm 10%</span>
              </div>
              <div className="discount-badge highlight">
                <span className="qty">Từ 50 sản phẩm</span>
                <span className="percent">Giảm 15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="container">
          <div className="bulk-order-container">
            <form onSubmit={handleSubmit}>
              <div className="bulk-order-grid">
                {/* Left Column - Order Details */}
                <div className="order-details">
                  <div className="card">
                    <h2>1. Chọn Sản Phẩm</h2>
                    <div className="product-selector">
                      <select
                        value={selectedProduct?.id || ""}
                        onChange={(e) => handleProductChange(e.target.value)}
                        className="product-select"
                      >
                        {products.map((product) => (
                          <option key={product.id} value={product.id}>
                            {product.name} - {formatPrice(product.price)}
                          </option>
                        ))}
                      </select>

                      {selectedProduct && (
                        <div className="product-preview">
                          <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                          />
                          <div className="product-info">
                            <h4>{selectedProduct.name}</h4>
                            <p className="price">
                              {formatPrice(selectedProduct.price)}/sản phẩm
                            </p>
                            <p className="category">
                              {selectedProduct.category}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="card">
                    <h2>2. Danh Sách Đặt Hàng</h2>

                    <div className="tabs">
                      <button
                        type="button"
                        className={`tab ${
                          activeTab === "manual" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("manual")}
                      >
                        Nhập Thủ Công
                      </button>
                      <button
                        type="button"
                        className={`tab ${
                          activeTab === "upload" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("upload")}
                      >
                        Upload File
                      </button>
                    </div>

                    {activeTab === "upload" && (
                      <div className="upload-section">
                        <button
                          type="button"
                          className="download-template-btn"
                          onClick={handleDownloadTemplate}
                        >
                          <FiDownload /> Tải Mẫu File CSV
                        </button>

                        <div className="upload-area">
                          <input
                            type="file"
                            accept=".csv"
                            onChange={handleFileUpload}
                            id="file-upload"
                            hidden
                          />
                          <label htmlFor="file-upload" className="upload-label">
                            <FiUpload />
                            <span>Chọn file CSV để upload</span>
                            <small>
                              Định dạng: STT, Họ và Tên, Size, Số Lượng
                            </small>
                          </label>
                        </div>
                      </div>
                    )}

                    <div className="order-items-table">
                      <table>
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Họ và Tên</th>
                            <th>Size</th>
                            <th>Số Lượng</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderItems.map((item, index) => (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              <td>
                                <input
                                  type="text"
                                  value={item.name}
                                  onChange={(e) =>
                                    updateOrderItem(
                                      item.id,
                                      "name",
                                      e.target.value
                                    )
                                  }
                                  placeholder="Nhập tên"
                                  className="name-input"
                                />
                              </td>
                              <td>
                                <select
                                  value={item.size}
                                  onChange={(e) =>
                                    updateOrderItem(
                                      item.id,
                                      "size",
                                      e.target.value
                                    )
                                  }
                                  className="size-select"
                                >
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="L">L</option>
                                  <option value="XL">XL</option>
                                  <option value="XXL">XXL</option>
                                </select>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    updateOrderItem(
                                      item.id,
                                      "quantity",
                                      e.target.value
                                    )
                                  }
                                  min="1"
                                  className="qty-input"
                                />
                              </td>
                              <td>
                                <button
                                  type="button"
                                  onClick={() => removeOrderItem(item.id)}
                                  className="remove-btn"
                                  disabled={orderItems.length === 1}
                                >
                                  <FiTrash2 />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <button
                        type="button"
                        onClick={addOrderItem}
                        className="add-item-btn"
                      >
                        <FiPlus /> Thêm dòng
                      </button>
                    </div>

                    {/* Size Summary */}
                    <div className="size-summary">
                      <h4>Tổng hợp theo size:</h4>
                      <div className="size-tags">
                        {Object.entries(getSizeSummary()).map(
                          ([size, count]) => (
                            <span key={size} className="size-tag">
                              Size {size}: <strong>{count}</strong>
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h2>3. Thông Tin Liên Hệ</h2>
                    <div className="contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            Tên lớp <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            value={contactInfo.className}
                            onChange={(e) =>
                              handleContactChange("className", e.target.value)
                            }
                            placeholder="VD: 12A1"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Trường học</label>
                          <input
                            type="text"
                            value={contactInfo.schoolName}
                            onChange={(e) =>
                              handleContactChange("schoolName", e.target.value)
                            }
                            placeholder="Tên trường"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>
                            Người liên hệ <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            value={contactInfo.contactPerson}
                            onChange={(e) =>
                              handleContactChange(
                                "contactPerson",
                                e.target.value
                              )
                            }
                            placeholder="Họ và tên"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Số điện thoại <span className="required">*</span>
                          </label>
                          <input
                            type="tel"
                            value={contactInfo.phone}
                            onChange={(e) =>
                              handleContactChange("phone", e.target.value)
                            }
                            placeholder="0987654321"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) =>
                            handleContactChange("email", e.target.value)
                          }
                          placeholder="email@example.com"
                        />
                      </div>

                      <div className="form-group">
                        <label>Địa chỉ giao hàng</label>
                        <input
                          type="text"
                          value={contactInfo.address}
                          onChange={(e) =>
                            handleContactChange("address", e.target.value)
                          }
                          placeholder="Địa chỉ chi tiết"
                        />
                      </div>

                      <div className="form-group">
                        <label>Ghi chú thêm</label>
                        <textarea
                          value={contactInfo.notes}
                          onChange={(e) =>
                            handleContactChange("notes", e.target.value)
                          }
                          placeholder="Yêu cầu đặc biệt, thời gian giao hàng mong muốn..."
                          rows="4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="order-summary">
                  <div className="summary-card sticky">
                    <h3>Tổng Quan Đơn Hàng</h3>

                    <div className="summary-row">
                      <span>Sản phẩm:</span>
                      <strong>{selectedProduct?.name || "Chưa chọn"}</strong>
                    </div>

                    <div className="summary-row">
                      <span>Tổng số lượng:</span>
                      <strong className="highlight">
                        {getTotalQuantity()} sản phẩm
                      </strong>
                    </div>

                    <div className="divider"></div>

                    <div className="summary-row">
                      <span>Tạm tính:</span>
                      <span>{formatPrice(getSubtotal())}</span>
                    </div>

                    {getDiscount() > 0 && (
                      <>
                        <div className="summary-row discount">
                          <span>
                            Giảm giá (
                            {(
                              calculateDiscount(getTotalQuantity()) * 100
                            ).toFixed(0)}
                            %):
                          </span>
                          <span className="discount-amount">
                            -{formatPrice(getDiscount())}
                          </span>
                        </div>
                        <div className="discount-note">
                          🎉 Bạn đã được giảm giá{" "}
                          {(
                            calculateDiscount(getTotalQuantity()) * 100
                          ).toFixed(0)}
                          %
                        </div>
                      </>
                    )}

                    <div className="divider"></div>

                    <div className="summary-row total">
                      <span>Tổng cộng:</span>
                      <strong className="total-amount">
                        {formatPrice(getTotal())}
                      </strong>
                    </div>

                    <button type="submit" className="submit-btn">
                      <FiShoppingCart /> Gửi Đơn Đặt Hàng
                    </button>

                    <div className="summary-notes">
                      <p>✓ Miễn phí vận chuyển với đơn từ 20 sản phẩm</p>
                      <p>✓ Tư vấn thiết kế miễn phí</p>
                      <p>✓ Hỗ trợ in logo/slogan</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default BulkOrder;
