import {
  FiPhone,
  FiShoppingBag,
  FiClipboard,
  FiUsers,
  FiPackage,
  FiThumbsUp,
} from "react-icons/fi";
import "./OrderProcess.css";

function OrderProcess() {
  const steps = [
    {
      id: 1,
      icon: <FiPhone />,
      color: "#FF6B6B",
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",
      title: "Liên hệ qua các kênh",
      description: [
        "Hotline: 1900 8697",
        "Fanpage: Panda Uniform – Đồng Phục Học Sinh",
        "Email: dongphucsangxinmin@gmail.com",
        "Instagram: panda_uniform",
      ],
      link: {
        text: "Liên hệ ngay",
        url: "https://m.me/100924208854298?ref=web_panda_dpx",
      },
    },
    {
      id: 2,
      icon: <FiShoppingBag />,
      color: "#4ECDC4",
      gradient: "linear-gradient(135deg, #4ECDC4 0%, #6FE5DD 100%)",
      title: "Nghe tư vấn và chọn kiểu áo",
      description: [
        "Chọn màu áo, chúng mình có thể tham khảo từ bảng màu PANDA cung cấp",
        "Chọn chất vải phù hợp với nhu cầu của lớp mình",
        "Mix and match các ý tưởng có sẵn của PANDA hoặc nêu ý tưởng riêng",
      ],
      link: {
        text: "Tham khảo kiểu áo",
        url: "/products",
      },
    },
    {
      id: 3,
      icon: <FiClipboard />,
      color: "#A78BFA",
      gradient: "linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)",
      title: "Chốt thiết kế và size áo",
      description: [
        "PANDA sẽ gửi tới chúng mình bảng size áo để các bạn đăng ký size phù hợp cho bản thân",
        "Trường hợp chúng mình chưa hài lòng với bản thiết kế đầu tiên thì chúng mình có 3 cơ hội sửa miễn phí",
        "Sau đó và đi tới chốt thiết kế",
      ],
      link: {
        text: "Tham khảo bảng size",
        url: "/tu-van/bang-size",
      },
    },
    {
      id: 4,
      icon: <FiUsers />,
      color: "#FFA94D",
      gradient: "linear-gradient(135deg, #FFA94D 0%, #FFB968 100%)",
      title: "Thỏa thuận và chốt hợp đồng",
      description: [
        "Sau khi đã chốt thiết kế, để tiến hành sản xuất, chúng mình cần đặt cọc 50% giá trị đơn hàng.",
      ],
      link: {
        text: "Thông tin thanh toán",
        url: "/tu-van/phuong-thuc-thanh-toan",
      },
    },
    {
      id: 5,
      icon: <FiPackage />,
      color: "#F472B6",
      gradient: "linear-gradient(135deg, #F472B6 0%, #F9A8D4 100%)",
      title: "Nhận hàng và thanh toán",
      description: [
        "Khi nhận được hàng chúng mình hãy kiểm tra đã nhận đủ hàng hay chưa, nếu xảy ra chút sai sót do sản xuất thì hãy liên hệ ngay lại với Panda và hưởng chính sách bảo hành từ Panda nha.",
      ],
      link: {
        text: "Chính sách vận chuyển",
        url: "/tu-van/chinh-sach",
      },
    },
    {
      id: 6,
      icon: <FiThumbsUp />,
      color: "#60A5FA",
      gradient: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)",
      title: "Gửi feedback",
      description: [
        "Panda sẽ giúp lớp mình lưu giữ những khoảnh khắc đẹp đẽ nhất thời thanh xuân. Vì vậy, đừng quên gửi cho Panda những bức hình diện áo xịn mịn của lớp mình nha.",
      ],
      link: {
        text: "Gửi Feedback cho Panda nhé",
        url: "https://www.facebook.com/profile.php?id=100069304387570",
      },
    },
  ];

  return (
    <section className="order-process-section">
      <div className="container">
        <div className="section-header">
          <h1 className="order-process-title">QUY TRÌNH ĐẶT ÁO LỚP XỊN MỊN</h1>
          <p className="section-subtitle">6 bước đơn giản để có bộ đồng phục đẹp và chất lượng nhất</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="step-connector" />
              <div className="step-content">
                <div className="step-number" style={{ background: step.gradient }}>
                  {step.id}
                </div>
                <div className="step-card">
                  <div className="step-icon" style={{ background: step.gradient }}>
                    {step.icon}
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <ul className="step-description">
                    {step.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={step.link.url}
                    className="step-link"
                    style={{ color: step.color }}
                    target={step.link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      step.link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span>{step.link.text}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrderProcess;
