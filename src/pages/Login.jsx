import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {
  // Fake user data
  const fakeUsers = [
    { email: "user1@example.com", password: "123456", name: "User One" },
    { email: "user2@example.com", password: "abcdef", name: "User Two" },
  ];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (isLogin) {
      // Fake login check
      const found = fakeUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (found) {
        // Đăng nhập thành công
        setSuccess("Đăng nhập thành công! Xin chào " + found.name);
        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        setError("Email hoặc mật khẩu không đúng!");
      }
    } else {
      // Fake register: chỉ kiểm tra email chưa tồn tại
      const exists = fakeUsers.some((u) => u.email === formData.email);
      if (exists) {
        setError("Email đã tồn tại!");
      } else {
        alert("Đăng ký thành công! Bạn có thể đăng nhập.");
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? "Đăng Nhập" : "Đăng Ký"}</h2>
        <form onSubmit={handleSubmit}>
          {success && (
            <div style={{ color: "green", marginBottom: 10, textAlign: "center" }}>{success}</div>
          )}
          {error && !success && (
            <div style={{ color: "red", marginBottom: 10, textAlign: "center" }}>{error}</div>
          )}
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
