import { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Vũ Hồng Nam",
      school: "D2 THPT Tiên Lữ",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
      image: "/images/MyCustomer1.png",
      review:
        "Chất lượng tốt, giá cả hợp lý, anh chị tư vấn nhiệt tình. Nói chung là rất ưng ạ.",
    },
    {
      id: 2,
      name: "Nguyễn Minh Anh",
      school: "11C8 THPT Nguyễn Bỉnh Khiêm",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      image: "/images/MyCustomer2.png",
      review:
        "Áo đẹp, chất lượng tốt, in sắc nét. Cả lớp đều rất hài lòng với sản phẩm. Sẽ ủng hộ lâu dài!",
    },
    {
      id: 3,
      name: "Trần Hoàng Long",
      school: "12A1 THPT Chu Văn An",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      image: "/images/MyCustomer3.png",
      review:
        "Dịch vụ tuyệt vời, giao hàng nhanh. Thiết kế đẹp, chất liệu vải mềm mại. Rất đáng để thử!",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">KHÁCH HÀNG CỦA PANDA</h2>

        <div className="testimonials-slider">
          <button className="slider-arrow prev" onClick={prevSlide}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="testimonials-content">
            <div className="testimonial-image">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.school}
              />
            </div>

            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                />
              </div>
              <h3 className="testimonial-name">{currentTestimonial.name}</h3>
              <p className="testimonial-school">{currentTestimonial.school}</p>
              <p className="testimonial-review">{currentTestimonial.review}</p>
            </div>
          </div>

          <button className="slider-arrow next" onClick={nextSlide}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <p className="testimonials-tagline">
          Hãy để chiếc áo Panda lưu giữ những kỉ niệm đẹp nhất của tuổi học trò
        </p>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
