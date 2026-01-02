import { FiCreditCard, FiMapPin, FiHome } from "react-icons/fi";
import "./PaymentMethods.css";

function PaymentMethods() {
  const paymentOptions = [
    {
      id: 1,
      icon: <FiCreditCard />,
      title: "Internet Banking",
      description:
        "Bạn chỉ cần gửi tiền đến 1 trong những STK mà PANDA đã gửi bạn bằng các ứng dụng chuyển tiền của ngân hàng hoặc ứng dụng Viettel Pay.",
    },
    {
      id: 2,
      icon: <FiMapPin />,
      title: "Trực tiếp tại các sổ giao dịch",
      description:
        "Bạn đến trực tiếp ngân hàng/bưu điện/viettel store/ Thẻ giới đi đông store gần nhất để chuyển khoản vào STK PANDA đã gửi bạn.",
    },
    {
      id: 3,
      icon: <FiHome />,
      title: "Trực tiếp tại văn phòng Panda",
      description:
        "Chuyển tiền trực tiếp tại văn phòng trụ sở của PANDA Uniform hoặc gửi đến nhân viên kinh doanh phụ trách đơn hàng của mình.",
    },
  ];

  return (
    <section className="payment-methods-section">
      <div className="container">
        <h2 className="payment-title">
          CÁC HÌNH THỨC THANH TOÁN TẠI PANDA UNIFORM
        </h2>

        <div className="payment-cards">
          {paymentOptions.map((option) => (
            <div key={option.id} className="payment-card">
              <div className="payment-icon">{option.icon}</div>
              <h3 className="payment-card-title">{option.title}</h3>
              <div className="payment-divider"></div>
              <p className="payment-description">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="payment-notes">
          <ul>
            <li>
              Đừng quên mang theo CMND để chuyển tiền tại các sổ giao dịch mình
              đến.
            </li>
            <li>
              Với tất các các hình thức thanh toán hãy chụp lại biên lai để
              PANDA dễ dàng xác nhận đơn hàng của mình bạn nhé!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PaymentMethods;
