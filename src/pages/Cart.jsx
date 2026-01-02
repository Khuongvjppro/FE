import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import {
  FiTrash2,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiArrowLeft,
  FiCheck,
} from "react-icons/fi";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <FiShoppingBag className="empty-cart-icon" />
            <h2>Giỏ hàng trống</h2>
            <p>Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <Link to="/" className="continue-shopping-btn">
              <FiArrowLeft /> Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Giỏ hàng của bạn</h1>
          <p className="cart-count">{cart.length} sản phẩm</p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.cartItemId} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-item-details">
                  <Link to={`/product/${item.id}`} className="cart-item-name">
                    {item.name}
                  </Link>

                  <div className="cart-item-options">
                    {item.selectedSize && (
                      <span className="item-option">
                        Size: <strong>{item.selectedSize}</strong>
                      </span>
                    )}
                    {item.selectedColor && (
                      <span className="item-option">
                        Màu: <strong>{item.selectedColor}</strong>
                      </span>
                    )}
                  </div>

                  <div className="cart-item-price">
                    {formatPrice(item.price)}
                  </div>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button
                      className="qty-btn"
                      onClick={() =>
                        updateQuantity(item.cartItemId, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      <FiMinus />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() =>
                        updateQuantity(item.cartItemId, item.quantity + 1)
                      }
                    >
                      <FiPlus />
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.cartItemId)}
                    title="Xóa sản phẩm"
                  >
                    <FiTrash2 />
                  </button>
                </div>

                <div className="cart-item-subtotal">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Tóm tắt đơn hàng</h3>

              <div className="summary-row">
                <span>Tạm tính:</span>
                <span className="summary-value">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>

              <div className="summary-row">
                <span>Phí vận chuyển:</span>
                <span className="summary-value free">Miễn phí</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Tổng cộng:</span>
                <span className="summary-total">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>

              <button
                className="checkout-btn"
                onClick={() => {
                  if (!user) {
                    navigate("/login?redirect=/checkout-info");
                  } else {
                    navigate("/checkout-info");
                  }
                }}
              >
                Tiến hành thanh toán
              </button>

              <Link to="/" className="continue-link">
                <FiArrowLeft /> Tiếp tục mua sắm
              </Link>

              <button className="clear-cart-btn" onClick={clearCart}>
                Xóa toàn bộ giỏ hàng
              </button>
            </div>

            <div className="cart-benefits">
              <div className="benefit-item">
                <FiCheck className="benefit-icon" />
                <span>Miễn phí vận chuyển với đơn hàng trên 500.000đ</span>
              </div>
              <div className="benefit-item">
                <FiCheck className="benefit-icon" />
                <span>Đổi trả trong vòng 7 ngày</span>
              </div>
              <div className="benefit-item">
                <FiCheck className="benefit-icon" />
                <span>Thanh toán an toàn & bảo mật</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
