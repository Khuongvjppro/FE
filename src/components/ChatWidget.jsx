import { useState, useEffect, useRef } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [unreadCount, setUnreadCount] = useState(3);
  const messagesEndRef = useRef(null);

  // Dữ liệu fake cho quick replies
  const quickReplies = [
    'Tư vấn áo lớp',
    'Tư vấn áo nhóm/Áo đội',
    'Tư vấn áo hợp lớp',
    'Tư vấn áo gia đình',
    'Tư vấn đồng phục doanh nghiệp'
  ];

  // Dữ liệu fake cho câu trả lời tự động
  const autoReplies = {
    'tư vấn áo lớp': 'Cảm ơn bạn đã quan tâm đến dịch vụ tư vấn áo lớp! Chúng tôi có nhiều mẫu áo lớp đẹp, giá cả hợp lý. Bạn muốn xem những mẫu nào ạ?',
    'tư vấn áo nhóm': 'Áo nhóm/Áo đội của chúng tôi có thể in logo, slogan theo yêu cầu. Số lượng tối thiểu từ 10 áo. Bạn cần bao nhiêu áo ạ?',
    'tư vấn áo hợp lớp': 'Áo hợp lớp là dịch vụ hot nhất của chúng tôi! Thiết kế độc đáo, chất lượng cao. Bạn muốn xem catalog không ạ?',
    'tư vấn áo gia đình': 'Áo gia đình rất phù hợp cho các chuyến du lịch, dã ngoại. Chúng tôi có nhiều mẫu cho cả gia đình từ người lớn đến trẻ em. Bạn quan tâm đến mẫu nào?',
    'tư vấn đồng phục': 'Đồng phục doanh nghiệp của chúng tôi được thiết kế chuyên nghiệp, thể hiện bản sắc công ty. Bạn muốn tư vấn về loại đồng phục nào ạ?',
    'giá': 'Giá của chúng tôi dao động từ 80.000đ - 200.000đ/áo tùy theo chất liệu và số lượng đặt. Số lượng càng nhiều giá càng tốt ạ!',
    'liên hệ': 'Bạn có thể liên hệ với chúng tôi qua:\n📱 Hotline: 0909 123 456\n📧 Email: pandauniform@gmail.com\n🏢 Địa chỉ: 123 Nguyễn Văn A, Q.1, TP.HCM',
    'chất liệu': 'Chúng tôi có các chất liệu: Cotton 100%, Thun 4 chiều, Polyester, Kaki... Tất cả đều an toàn cho da và bền màu ạ!',
    'default': 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất. Bạn có thể cho biết thêm chi tiết về nhu cầu của mình không ạ?'
  };

  // Tin nhắn chào mừng ban đầu
  useEffect(() => {
    const welcomeMessage = {
      id: 1,
      text: 'Hoặc bạn có thể để lại số điện thoại liên hệ để được tư vấn miễn phí thiết kế các sản phẩm đồng phục cùng nhiều phần quà hấp dẫn khác nè.',
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto scroll khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    // Tin nhắn của user
    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Tự động trả lời sau 1 giây
    setTimeout(() => {
      const botReply = getBotReply(text);
      const botMessage = {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    }, 1000);
  };

  const getBotReply = (userText) => {
    const lowerText = userText.toLowerCase();
    
    // Tìm kiếm từ khóa trong câu hỏi
    for (const [key, reply] of Object.entries(autoReplies)) {
      if (lowerText.includes(key)) {
        return reply;
      }
    }
    
    return autoReplies.default;
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-widget">
      {/* Nút chat nổi */}
      <div className="chat-bubble" onClick={toggleChat}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
        {unreadCount > 0 && (
          <span className="chat-badge">{unreadCount}</span>
        )}
      </div>

      {/* Cửa sổ chat */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <img src="https://via.placeholder.com/40" alt="Panda Uniform" />
              </div>
              <div className="chat-header-text">
                <h3>Panda Uniform</h3>
                <span className="chat-status">● Đang hoạt động</span>
              </div>
            </div>
            <button className="chat-close" onClick={toggleChat}>
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.sender === 'bot' && (
                  <div className="message-avatar">
                    <img src="https://via.placeholder.com/32" alt="Bot" />
                  </div>
                )}
                <div className="message-bubble">
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="quick-replies">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={() => handleSendMessage()} className="send-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
