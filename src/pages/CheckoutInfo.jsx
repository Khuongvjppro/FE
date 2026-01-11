import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../contexts/CartContext";
import LocationMap from "../components/LocationMap";
import "../components/LocationMap.css";

function CheckoutInfo() {
  const navigate = useNavigate();
  const { cart, getTotalPrice } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });
  const [error, setError] = useState("");
  const [selectedCoords, setSelectedCoords] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLocationSelect = (address, coords) => {
    setForm({ ...form, address });
    setSelectedCoords(coords);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.address) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const checkoutData = {
      ...form,
      coordinates: selectedCoords
    };
    localStorage.setItem("checkoutInfo", JSON.stringify(checkoutData));
    navigate("/checkout-confirm");
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit} style={{
        maxWidth: 900,
        margin: '48px auto',
        background: '#fff',
        borderRadius: 20,
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
        <div style={{display: 'flex', gap: 36, flexWrap: 'wrap'}}>
          <div style={{flex: 1, minWidth: 300}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 18}}>
              <span style={{fontSize: 26, marginRight: 10}}>🚚</span>
              <h2 style={{margin: 0, fontSize: 22, fontWeight: 700, color: '#222'}}>Thông tin giao hàng</h2>
            </div>
            <input
              name="name"
              placeholder="Họ và tên"
              value={form.name}
              onChange={handleChange}
              style={{padding: '12px 14px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16, outline: 'none', marginBottom: 8, width: '100%'}}
            />
            <input
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              style={{padding: '12px 14px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16, outline: 'none', marginBottom: 8, width: '100%'}}
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={{padding: '12px 14px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16, outline: 'none', marginBottom: 8, width: '100%'}}
            />
            <LocationMap 
              onLocationSelect={handleLocationSelect}
              initialPosition={selectedCoords}
            />
            <input
              name="address"
              placeholder="Địa chỉ nhận hàng"
              value={form.address}
              onChange={handleChange}
              style={{padding: '12px 14px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16, outline: 'none', marginBottom: 8, width: '100%'}}
            />
            <input
              name="note"
              placeholder="Ghi chú cho shop (tuỳ chọn)"
              value={form.note}
              onChange={handleChange}
              style={{padding: '12px 14px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16, outline: 'none', marginBottom: 16, width: '100%'}}
            />
            <div style={{marginBottom: 16}}>
              <label style={{fontWeight: 600, marginBottom: 6, display: 'block'}}>Phương thức thanh toán</label>
              <select
                name="payment"
                value={form.payment || ''}
                onChange={e => {
                  setForm({ ...form, payment: e.target.value });
                  localStorage.setItem('checkoutPayment', e.target.value);
                }}
                style={{width: '100%', padding: '12px 14px', borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 16, outline: 'none'}}
                required
              >
                <option value="">-- Chọn phương thức thanh toán --</option>
                <option value="cod">Thanh toán khi nhận hàng (COD)</option>
                <option value="bank">Chuyển khoản ngân hàng</option>
                <option value="office">Thanh toán tại văn phòng Panda</option>
              </select>
            </div>
            {error && <div style={{color: '#e53935', textAlign: 'center', fontSize: 15, marginTop: 8}}>{error}</div>}
          </div>
          <div style={{flex: 1, minWidth: 300, background: '#fafbfc', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '24px 20px', height: 'fit-content'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: 16}}>
              <span style={{fontSize: 24, marginRight: 8}}>🛒</span>
              <h3 style={{fontSize: 20, fontWeight: 700, margin: 0, color: '#333'}}>Đơn hàng của bạn</h3>
            </div>
            {cart.length === 0 ? (
              <div style={{color: '#888'}}>Giỏ hàng trống</div>
            ) : (
              <>
                <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
                  {cart.map((item) => (
                    <li key={item.cartItemId} style={{display: 'flex', alignItems: 'center', marginBottom: 14, borderBottom: '1px solid #eee', paddingBottom: 10}}>
                      <img src={item.image || '/public/images/no-image.png'} alt={item.name} style={{width: 48, height: 48, objectFit: 'cover', borderRadius: 8, marginRight: 12, background: '#fff'}} />
                      <div style={{flex: 1}}>
                        <div style={{fontWeight: 600, fontSize: 15}}>{item.name}</div>
                        <div style={{fontSize: 14, color: '#666'}}>Số lượng: {item.quantity}</div>
                      </div>
                      <div style={{fontSize: 15, color: '#222', fontWeight: 500, minWidth: 80, textAlign: 'right'}}>{item.price.toLocaleString()}₫</div>
                    </li>
                  ))}
                </ul>
                <div style={{marginTop: 18, fontSize: 15, color: '#666', display: 'flex', justifyContent: 'space-between'}}>
                  <span>Tạm tính</span>
                  <span>{getTotalPrice().toLocaleString()}₫</span>
                </div>
                <div style={{marginTop: 6, fontSize: 15, color: '#666', display: 'flex', justifyContent: 'space-between'}}>
                  <span>Phí vận chuyển</span>
                  <span style={{color: '#43a047', fontWeight: 500}}>Miễn phí</span>
                </div>
                <div style={{marginTop: 18, fontWeight: 700, fontSize: 18, color: '#7b2ff2', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span>Tổng cộng</span>
                  <span>{getTotalPrice().toLocaleString()}₫</span>
                </div>
              </>
            )}
          </div>
        </div>
        <button
          type="submit"
          style={{margin: '0 auto', marginTop: 12, padding: '14px 0', borderRadius: 8, background: 'linear-gradient(90deg,#7b2ff2,#f357a8)', color: '#fff', fontWeight: 700, fontSize: 20, border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(123,47,242,0.08)', letterSpacing: 0.5, transition: '0.2s', width: 320, maxWidth: '100%'}}
        >
          Tiếp tục thanh toán <span style={{fontSize: 20, marginLeft: 8}}>→</span>
        </button>
      </form>
    </MainLayout>
  );
}

export default CheckoutInfo;
