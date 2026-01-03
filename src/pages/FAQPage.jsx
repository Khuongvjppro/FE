import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQPage.css";

function FAQPage() {
  const [activeSection, setActiveSection] = useState("all");
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      id: 1,
      category: "size",
      question: "Lớp em thích mặc rộng thì chọn size như thế nào á?",
      answer: "Nếu lớp mình thích mặc form rộng thì hãy tăng 2 size so với bảng size mà Panda cung cấp phù hợp nhất. Hiện tại Panda cũng ra mắt form áo oversize trong trang bộ sưu tập của mình để các bạn có thể tham khảo thêm để chọn được mẫu áo phù hợp nhất nhé. Ngoài ra lớp mình cũng có thể tìm tin trên Panda được hỗ trợ tốt nhất nhé."
    },
    {
      id: 2,
      category: "material",
      question: "Vải áo có hây bi đão không á?",
      answer: "Chất liệu vải mà Panda sử dụng đều là những loại vải cao cấp, không hây bi, co giãn tốt, thấm hút mồ hôi tốt và thoáng mát. Panda cam kết chất lượng vải đạt chuẩn cho mọi sản phẩm."
    },
    {
      id: 3,
      category: "design",
      question: "Lớp em muốn làm áo nhưng lại không có ý tưởng về thì làm thế nào á?",
      answer: "Em ở tận trong Cà Mau thì phí vận chuyển có lớp tính như thế nào á? Panda sẽ hỗ trợ miễn phí thiết kế cho lớp em. Đội ngũ thiết kế của Panda sẽ tư vấn và đưa ra những ý tưởng phù hợp nhất với lớp mình. Em chỉ cần cung cấp thông tin cơ bản về lớp và yêu cầu, Panda sẽ lo hết."
    },
    {
      id: 4,
      category: "shipping",
      question: "Em ở tận trong Cà Mau thì phí vận chuyển có lớp tính như thế nào á?",
      answer: "Panda miễn phí vận chuyển cho tất cả các đơn hàng trên toàn quốc. Dù em ở đâu, Cà Mau hay bất kỳ tỉnh thành nào, Panda đều giao hàng miễn phí cho em nhé."
    },
    {
      id: 5,
      category: "print",
      question: "Hình in bên mình có dễ bị bong không?",
      answer: "Hình in của Panda sử dụng công nghệ in hiện đại, chất lượng cao, đảm bảo độ bền màu và không bị bong tróc sau nhiều lần giặt. Panda cam kết chất lượng in ấn đạt chuẩn và bền đẹp theo thời gian."
    },
    {
      id: 6,
      category: "material",
      question: "Em muốn xem chất liệu bên mình thì làm thế nào á?",
      answer: "Em có thể ghé trực tiếp văn phòng/xưởng của Panda để xem và sờ trực tiếp chất liệu vải. Hoặc em có thể xem chi tiết các loại vải trên website tại mục 'Tư vấn > Chất liệu vải' với đầy đủ thông tin và hình ảnh."
    },
    {
      id: 7,
      category: "size",
      question: "Lớp em có bạn nặng 120kg thì cỡ size nào vừa không á?",
      answer: "Với bạn nặng 120kg, Panda khuyên nên chọn size 6XL hoặc có thể may đo theo số đo cụ thể. Panda có thể hỗ trợ may đo riêng theo yêu cầu để đảm bảo áo vừa vặn và thoải mái nhất cho bạn."
    },
    {
      id: 8,
      category: "process",
      question: "Thời gian làm áo là bao lâu?",
      answer: "Thời gian sản xuất áo đồng phục thường từ 10-15 ngày làm việc kể từ khi xác nhận đơn hàng và thiết kế. Tuy nhiên, tùy vào số lượng và độ phức tạp của thiết kế mà thời gian có thể thay đổi. Panda sẽ thông báo cụ thể cho từng đơn hàng."
    },
    {
      id: 9,
      category: "process",
      question: "Số lượng bao nhiêu trở lên thì được làm áo?",
      answer: "Panda nhận đơn hàng từ 15 áo trở lên. Với số lượng từ 15-30 áo, Panda đã có thể hỗ trợ sản xuất với giá ưu đãi. Số lượng càng nhiều thì giá càng tốt nhé."
    },
    {
      id: 10,
      category: "price",
      question: "Giá áo đồng phục ở Panda như thế nào?",
      answer: "Giá áo đồng phục tại Panda dao động từ 120.000đ - 350.000đ/áo tùy vào chất liệu vải, kiểu dáng, số lượng và phương thức in. Để biết giá chính xác, em hãy liên hệ trực tiếp với Panda để được tư vấn và báo giá chi tiết nhất nhé."
    },
    {
      id: 11,
      category: "warranty",
      question: "Trường hợp áo bị lỗi khi nhận hàng xử lý ra sao?",
      answer: "Nếu áo có lỗi từ phía sản xuất (lỗi kỹ thuật, lỗi in ấn, sai size...), Panda sẽ chịu trách nhiệm đổi mới hoàn toàn miễn phí. Trong vòng 7 ngày kể từ khi nhận hàng, nếu phát hiện lỗi, vui lòng liên hệ ngay với Panda để được hỗ trợ xử lý nhanh nhất."
    }
  ];

  const categories = [
    { id: "all", label: "Tất cả", icon: "📋" },
    { id: "warranty", label: "Bảo quản", icon: "🛡️" },
    { id: "policy", label: "Chính sách", icon: "📜" },
    { id: "store", label: "Cửa đồng phục", icon: "🏪" },
    { id: "design", label: "Mẫu đồng phục", icon: "👕" },
    { id: "process", label: "Quy trình", icon: "⚙️" }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeSection === "all" || faq.category === activeSection;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <MainLayout>
      <div className="faq-page">
        {/* Hero Banner */}
        <div className="faq-hero">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="separator">›</span>
              <Link to="/tu-van">Tư vấn</Link>
              <span className="separator">›</span>
              <span>Câu hỏi thường gặp</span>
            </div>
            <h1 className="faq-hero-title">Câu hỏi thường gặp</h1>
            <p className="faq-subtitle">Hỏi - đáp và trả lời</p>
            
            {/* Search Box */}
            <div className="faq-search">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Nhập câu hỏi của bạn..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="faq-hashtag">#dongphucpanda</div>
        </div>

        {/* FAQ Content */}
        <div className="faq-content">
          <div className="container">
            <div className="faq-layout">
              {/* Sidebar */}
              <aside className="faq-sidebar">
                <h3>Danh mục câu hỏi</h3>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`sidebar-item ${activeSection === category.id ? "active" : ""}`}
                    onClick={() => setActiveSection(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </aside>

              {/* FAQ List */}
              <div className="faq-list">
                <h2 className="faq-section-title">
                  {activeSection === "all" ? "Tất cả câu hỏi" : categories.find(c => c.id === activeSection)?.label}
                </h2>
                
                {filteredFAQs.length > 0 ? (
                  <div className="faq-items">
                    {filteredFAQs.map(faq => (
                      <div
                        key={faq.id}
                        className={`faq-item ${openQuestion === faq.id ? "active" : ""}`}
                      >
                        <button
                          className="faq-question"
                          onClick={() => toggleQuestion(faq.id)}
                        >
                          <span>{faq.question}</span>
                          {openQuestion === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {openQuestion === faq.id && (
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <p>Không tìm thấy câu hỏi phù hợp. Vui lòng thử từ khóa khác.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default FAQPage;
