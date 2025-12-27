import "./OrderProcess.css";
import { MdContactPhone } from "react-icons/md";
import { FaTshirt, FaClipboardList, FaHandshake, FaBox, FaThumbsUp } from "react-icons/fa";

function OrderProcess() {
  const steps = [
    {
      id: 1,
      icon: MdContactPhone,
      iconColor: "#ff6b35",
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
      icon: FaTshirt,
      iconColor: "#6366f1",
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
      icon: FaClipboardList,
      iconColor: "#3b82f6",
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
      icon: FaHandshake,
      iconColor: "#ec4899",
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
      icon: FaBox,
      iconColor: "#10b981",
      title: "Nhận hàng và thanh toán",
      description: [
        "Khi nhận được hàng chúng mình hãy kiểm tra đã nhận đủ hàng hay chưa, nếu xảy ra chút sai sót do sản xuất thì hãy liên hệ ngay lại với Panda và hưởng chính sách bảo hành từ Panda nha.",
      ],
      link: {
        text: "Chính sách vận chuyển",
        url: "#",
      },
    },
    {
      id: 6,
      icon: FaThumbsUp,
      iconColor: "#6366f1",
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
        <h1 className="order-process-title">QUY TRÌNH ĐẶT ÁO LỚP XỊN MỊN</h1>

        <div className="process-grid">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="process-card">
                <div className="process-icon" style={{ background: step.iconColor }}>
                  <IconComponent className="icon-svg" />
                </div>
                <h3 className="process-step-title">
                  {step.id}. {step.title}
                </h3>
                <ul className="process-description">
                  {step.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a
                  href={step.link.url}
                  className="process-link"
                  target={step.link.url.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    step.link.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {step.link.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OrderProcess;
