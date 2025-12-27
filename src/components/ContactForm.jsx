import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Giả lập gửi dữ liệu
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(
      "✅ Thông tin đã được gửi thành công!\n\nChúng tôi sẽ liên hệ với bạn sớm nhất."
    );
    setForm({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="contact-bg">
      <div className="contact-decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="contact-form-wrapper">
        <div className="contact-panda-icon">🐼</div>

        <h2 className="contact-title">
          <span className="contact-title-highlight">LIÊN HỆ</span> VỚI PANDA ĐỂ
          <br />
          NHẬN TƯ VẤN
        </h2>

        <p className="contact-subtitle">
          Hãy để lại thông tin, chúng tôi sẽ tư vấn miễn phí cho bạn!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <div
              className={`input-wrapper ${
                focusedField === "name" ? "focused" : ""
              }`}
            >
              <span className="input-icon"></span>
              <input
                type="text"
                name="name"
                placeholder="Họ và tên"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className="contact-input"
              />
            </div>

            <div
              className={`input-wrapper ${
                focusedField === "phone" ? "focused" : ""
              }`}
            >
              <span className="input-icon"></span>
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                required
                className="contact-input"
              />
            </div>
          </div>

          <div
            className={`input-wrapper ${
              focusedField === "message" ? "focused" : ""
            }`}
          >
            <span className="input-icon textarea-icon"></span>
            <textarea
              name="message"
              placeholder="Số lượng báo giá và yêu cầu của bạn"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              className="contact-textarea"
            />
          </div>

          <button
            type="submit"
            className={`contact-btn ${isSubmitting ? "submitting" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                ĐANG GỬI...
              </>
            ) : (
              <>
                GỬI THÔNG TIN NGAY
                <span className="btn-icon"></span>
              </>
            )}
          </button>
        </form>

        <div className="contact-info-footer">
          <div className="contact-info-item">
            <span className="info-icon"></span>
            <span>Hotline: 1900-8697</span>
          </div>
          <div className="contact-info-item">
            <span className="info-icon"></span>
            <span>Email: info@panda.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
