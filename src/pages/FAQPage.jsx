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
      category: "store",
      question: "Lớp em thích mặc rộng thì chọn size như thế nào á?",
      answer: "Nếu lớp mình thích mặc form rộng thì hãy tăng 2 size so với bảng size mà Panda cung cấp nha. Hiện tại Panda cũng ra mắt form áo oversize form rộng thời trang, lớp mình có thể tham khảo thêm để chọn được một chiếc áo phù hợp nhất nhé. Ngoài ra lớp mình cũng có thể nhắn tin cho Panda được hỗ trợ tốt nhất nhé."
    },
    {
      id: 2,
      category: "warranty",
      question: "Vải áo có hây bi đão không á?",
      answer: "Vải áo của Panda được pha thêm sợi co giãn spandex nên có độ co giãn cực tốt, không bị đão như các chất vải bình thường. Tuy nhiên để có thể giữ gin chiếc áo tốt hơn thì hãy giặt áo bằng tay và băng nước lạnh các em nhé!!"
    },
    {
      id: 3,
      category: "policy",
      question: "Lớp em muốn làm áo nhưng lại không có ý tưởng gì thì làm thế nào á?",
      answer: "Hiện tại Panda Uniform đang có chương trình miễn phí thiết kế nên nếu lớp mình chưa có ý tưởng gì thì cũng sẽ được các anh chị tư vấn và thiết kế đến khi ứng ý mới thôi nhé! Ngoài ra thì Panda cũng có rất nhiều những bộ thiết kế mẫu cực kì đẹp và bắt mắt cho lớp tham khảo thêm. Vậy còn chờ gì mà chưa liên hệ Panda ngay nào!"
    },
    {
      id: 4,
      category: "policy",
      question: "Em ở tận trong Cà Mau thì phí vận chuyển áo lớp tính như thế nào á?",
      answer: "Panda Uniform miễn phí vận chuyển áo lớp trên toàn quốc, nên các em ở xa cứ yên tâm đặt áo nha"
    },
    {
      id: 5,
      category: "warranty",
      question: "Hình in bên mình có dễ bị bong không?",
      answer: "Mỗi chiếc áo của Panda Uniform đều được sử dụng mực in chất lượng cao nên sẽ không bong nhé! Tuy nhiên các em nhớ bảo quản áo theo đúng hướng dẫn để giữ gin tuổi thọ của chiếc áo thật lâu nha"
    },
    {
      id: 6,
      category: "policy",
      question: "Em muốn xem chất liệu bên mình thì làm thế nào á?",
      answer: "Panda Uniform có hỗ trợ gửi áo mẫu về tận noi để lớp mình có thể test chất vải thoải mái em nhé. Nhanh tay đăng ký nhận áo mẫu thôi nào lớp mình ơi!"
    },
    {
      id: 7,
      category: "store",
      question: "Lớp em có bạn nặng 120kg thì cỡ size nào vừa không á?",
      answer: "Panda có size áo từ S-6XL cho các bạn nặng tới 150kg nên các bạn yên tâm là vẫn có size mặc vừa nha"
    },
    {
      id: 8,
      category: "process",
      question: "Thời gian làm áo là bao lâu?",
      answer: "Thời gian sản xuất trung bình của Panda là 7-10 ngày (không tính chủ nhật và ngày lễ) vì vậy Panda đảm bảo được cho khách hàng những đơn hàng gấp cần nhanh. Nhưng lớp mình đừng quên đặt áo sớm để nhận được nhiều quà tặng ưu đãi từ Panda đó nha!"
    },
    {
      id: 9,
      category: "design",
      question: "Số lượng bao nhiêu trở lên thì được làm áo?",
      answer: "Với sản phẩm áo bóng cháy, áo gió Panda nhận sản xuất từ 20 chiếc trở lên, với các mẫu áo khác từ 10 chiếc trở lên"
    },
    {
      id: 10,
      category: "design",
      question: "Giá áo đồng phục ở Panda như thế nào?",
      answer: "Giá áo đồng phục tại Panda Uniform sẽ tùy thuộc vào số lượng, loại vải, số màu trong hình in, kiểu dáng, các chi tiết may thêm. Để biết thêm thông tin chi tiết, các bạn có thể liên hệ với Panda trực tiếp qua hotline: 1900 8697 hoặc liên hệ Fanpage để được hỗ trợ nhanh nhất nhé."
    },
    {
      id: 11,
      category: "policy",
      question: "Trường hợp áo bị lỗi khi nhận hàng xử lý ra sao?",
      answer: "Với các trường hợp sản phẩm bị lỗi trong quy trình sản xuất, in sai màu, không đúng thiết kế đã chốt, chúng mình hãy phản hồi trực tiếp với nhân viên kinh doanh hoặc gọi tới hotline để nhận được những phương án giải quyết hợp lý nhé!"
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
            <div className="faq-badge">Q&A</div>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="separator">›</span>
              <span>Q&A</span>
            </div>
            
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
              {/* FAQ List - Left Side */}
              <div className="faq-list">

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

              {/* Sidebar - Right Side */}
              <aside className="faq-sidebar">
                <h3>Danh mục câu hỏi</h3>
                <div className="sidebar-items">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`sidebar-item ${activeSection === category.id ? "active" : ""}`}
                      onClick={() => setActiveSection(category.id)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default FAQPage;
