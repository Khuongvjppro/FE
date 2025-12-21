import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    console.log("Form submitted:", formData);
    // Navigate to home page after login
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? "Đăng Nhập" : "Đăng Ký"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Họ và tên</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nhập họ và tên"
                required={!isLogin}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập email của bạn"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                required={!isLogin}
              />
            </div>
          )}
          <button type="submit" className="login-btn">
            {isLogin ? "Đăng Nhập" : "Đăng Ký"}
          </button>
        </form>
        <div className="login-footer">
          <p>
            {isLogin ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
            <span
              className="toggle-form"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Đăng ký ngay" : "Đăng nhập"}
            </span>
          </p>
        </div>
        <div className="back-home">
          <button onClick={() => navigate("/")} className="back-btn">
            ← Quay về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
