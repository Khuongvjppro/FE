import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi thông tin ở đây
    alert("Thông tin đã được gửi!\n" + JSON.stringify(form, null, 2));
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="contact-bg">
      <div className="contact-form-wrapper">
        <h2 className="contact-title">
          <span className="contact-title-highlight">LIÊN HỆ</span> VỚI PANDA ĐỂ NHẬN TƯ VẤN
        </h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              value={form.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <textarea
            name="message"
            placeholder="Số lượng báo giá và yêu cầu của bạn"
            value={form.message}
            onChange={handleChange}
            required
            className="contact-textarea"
          />
          <button type="submit" className="contact-btn">
            GỬI THÔNG TIN NGAY
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
