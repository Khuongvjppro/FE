import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import '../styles/consultation-common.css';
import './PolicyPage.css';

const PolicyPage = () => {
  const [activeSection, setActiveSection] = useState('gift');

  const comboPackages = [
    {
      id: 1,
      title: '1. Cờ lớp – biểu trưng cho màu cờ sắc áo của lớp mình',
      image: '/images/1. Cờ lớp – biểu trưng cho màu cờ sắc áo của lớp mình.jpg',
      price: ''
    },
    {
      id: 2,
      title: '2.Áo dành riêng cho GVCN',
      image: '/images/2.Áo dành riêng cho GVCN.jpg',
      price: ''
    },
    {
      id: 3,
      title: '3.Gói thiết kế miễn phí trị giá',
      image: '/images/3.Gói thiết kế miễn phí trị giá 1.000.000.jpg',
      price: '1.000.000'
    }
  ];

  return (
    <MainLayout>
      <div className="policy-page">
        {/* Hero Section */}
        <div className="consultation-hero">
          <div className="container">
            <div className="consultation-badge">CHÍNH SÁCH QUÀ TẶNG</div>
            <div className="breadcrumb">
              <Link to="/">Trang chủ</Link>
              <span className="separator">›</span>
              <span>Tư vấn</span>
              <span className="separator">›</span>
              <span>Chính sách quà tặng</span>
            </div>
          </div>
          <div className="consultation-hashtag">#dongphucpanda</div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="policy-main">
          <div className="container-full">
            <div className="policy-layout">
              {/* Sidebar */}
              <div className="policy-sidebar">
                <button
                  className={`sidebar-item ${activeSection === 'gift' ? 'active' : ''}`}
                  onClick={() => setActiveSection('gift')}
                >
                  Chính sách quà tặng
                </button>
                <button
                  className={`sidebar-item ${activeSection === 'design' ? 'active' : ''}`}
                  onClick={() => setActiveSection('design')}
                >
                  Miễn phí thiết kế
                </button>
                <button
                  className={`sidebar-item ${activeSection === 'shipping' ? 'active' : ''}`}
                  onClick={() => setActiveSection('shipping')}
                >
                  Miễn phí vận chuyển
                </button>
                <button
                  className={`sidebar-item ${activeSection === 'warranty' ? 'active' : ''}`}
                  onClick={() => setActiveSection('warranty')}
                >
                  Chính sách bảo hành
                </button>
              </div>

              {/* Content */}
              <div className="policy-content-main">
                {activeSection === 'gift' && (
                  <div className="promo-box">
                    <h2 className="promo-title">ĐẶT ÁO LỚP NHẬN KHUYẾN MẠI KHỦNG TỪ PANDA UNIFORM!</h2>
                    
                    <p className="promo-subtitle">
                      <span className="arrow">»</span> Chương trình khuyến mại áp dụng{' '}
                      <span className="highlight-red">cho đơn hàng từ 30 áo</span>
                    </p>

                    <p className="promo-note">
                      <span className="orange-icon">⚠</span> Đặt ngay áo <span className="highlight-red">tập cỡ</span> với{' '}
                      <span className="highlight-green">nhiều khuyến mại</span> áp{' '}
                      <span className="highlight-red">dụng: Áo GVCN, Cỡ tập, moc Hóa Huy hiệu và Combo Xịn Mìn</span>
                    </p>

                    <p className="promo-combo">
                      Trong đó <strong>COMBO XỊN MÌN</strong> sẽ các phần quà hấp dẫn <span className="highlight-red">như</span>:
                    </p>

                    <ul className="promo-list">
                      <li>Tặng 1ao GVCN</li>
                      <li>Tặng voucher 300.000 VNĐ cho lần đặt ảo tiếp theo</li>
                      <li>Tặng kiếm rích áo 1 ảo vải bảo vệ môi trường</li>
                      <li>Tặng gói tư vấn 24/7</li>
                      <li>Tặng gói thiết kế sáu đơn mẫu in</li>
                      <li>Tặng gói mối miễn phí Toàn Quốc</li>
                      <li>Tặng gói bảo hành sản phẩm trọng vòng 3 tháng</li>
                    </ul>

                    <p className="promo-note">
                      <span className="arrow">»</span> Sau tám nay, khẳng đại, áo ráp tầm nay; lời kiện mào của áa mình nãi{' '}
                      <span className="arrow">»</span> SO LI ÔNG GIA TĂNG CỦA HAN <span className="arrow">»</span>{' '}
                      Liên hệ với Panu qua Hotline: <strong>1900 8697</strong> hoặc{' '}
                      <em>Fanpage của Panda Uniform</em> để được tư vấn và đặt hàng ngay nhé!!!
                    </p>

                    <h3 className="combo-title">Combo Xịn Mìn bao gồm:</h3>
                    
                    <div className="combo-grid">
                      {comboPackages.map((combo) => (
                        <div key={combo.id} className="combo-card">
                          <img src={combo.image} alt={combo.title} className="combo-image" />
                          <h4 className="combo-card-title">{combo.title}</h4>
                          {combo.price && <p className="combo-price">{combo.price}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeSection === 'design' && (
                  <div className="design-section">
                    <h2 className="section-title">CHÍNH SÁCH MIỄN PHÍ TƯ VẤN THIẾT KẾ</h2>
                    
                    <div className="design-image-container">
                      <img 
                        src="/images/Miễn phí thiết kế.jpg" 
                        alt="Miễn phí thiết kế" 
                        className="design-main-image"
                      />
                    </div>

                    <div className="design-content">
                      <p className="design-text">
                        Phần quan trọng sau khi mình chọn áo đồng phục Xịn Mìn không thể thiếu chính là{' '}
                        <strong>Thiết kế áo dồn cho mỉnh</strong>. Hãn mang đáo <strong>Panda Uniform</strong> 
                        ý tưởng chức của mính! là một công cụng nha đi, thực sự cỏ hỗi, mạng đầu tư năng chính về vấy 
                        Panda luôn hỗ trợ tới, các mẩu yêu khiếu chính sách như thật:
                      </p>

                      <h3 className="design-subtitle">CHÍNH SÁCH MIỄN PHÍ THIẾT KẾ</h3>

                      <ul className="design-list">
                        <li>
                          <strong>Trường hợp bạn chưa có ý tưởng thiết kế:</strong> bạn có nhận được tư vấn 
                          miễn phí về tập biệu trùn bỏ, thiết kế đủ. Thông nghiệm, đây dẫn kiểm nghiệm tại Panda Uniform
                        </li>
                        <li>
                          <strong>Trường hợp bạn đã có ý tưởng thiết kế</strong> Panda sẽ tư vấn giúp bạn phát 
                          triển và hoàn thiện ý tưởng đó để sản phẩm ứng ý nhất.
                        </li>
                      </ul>

                      <p className="design-note">
                        Đặc biệt, khi mà chỉnh, thiết kế và gửi <strong>thiết kế</strong> trong quá trình thực 
                        hiện, bạn có thể in 1 áo mẫu siêu phí miễn phí nếu, cũ mong muối chất sơnh.
                      </p>

                      <p className="design-footer">
                        Panda Uniform <strong>luôn lấy tâm</strong> và cung cáo thời sáo đang cúy ủa công tỵ nâng.
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === 'shipping' && (
                  <div className="design-section">
                    <h2 className="section-title">CHÍNH SÁCH VẬN CHUYỂN</h2>
                    
                    <p className="shipping-intro">
                      Thời gian giao hàng nhanh tạm chân: MIỄN PHÍ vận chuyển khắp cả nước, đảm bảo giao hàng đúng hạn từ tất cả các thành phố âm như các cống phục đó Panda uniform cùa lớn 
                      lớp công trị tón phối viện
                    </p>
                    
                    <div className="shipping-image-container">
                      <img 
                        src="/images/Miễn phí vận chuyển.png" 
                        alt="Miễn phí vận chuyển" 
                        className="shipping-image"
                      />
                    </div>

                    <div className="shipping-content">
                      <p className="shipping-highlight">
                        Phí vận chuyển: không hàng được <strong className="text-red">MIỄN PHÍ</strong> với chuyển đối <strong className="text-green">Toàn quốc.</strong>
                      </p>

                      <h3 className="shipping-title">Thời gian giao hàng:</h3>
                      
                      <ul className="shipping-list">
                        <li>Giao hàng Trong ngày hàng Hà Nội 1-1 – 7 ngày cho khoanh hàng của áo 20 Mỡ,việc Tập Nội các cấp. Lỗn thánh quanh Hà Nội</li>
                        <li>Giao hàng từ 7 – 3 ngày, cho khoanh hàng của tên 20 áo Từ Hà Nội đẫn các tỉnh thành cóc Hỡ Nội. mẫn Hàng BỎ Nội</li>
                        <li>Giao Gụng hàng từ 3 – 4 ngày cho khoanh 37 áo Từ Hà Nội đẫn các thành phố</li>
                      </ul>

                      <p className="shipping-note">
                        <strong>Lưu ý:</strong> Đối với Thời gian của ảo mãu thường phương trả Không hãng thời gian thang chọn thuý Khonh. 
                        Cãi khếu ánh đưáng tăng rào ánh hàng thủ viết cũi thốt, hỡng họp hãn giín thức phủ án Tính é với cản thấa 
                        Kiệm thóng Chử thủng Gới hãn thó phó bìn thếp từ vế cản thận Tớch
                      </p>

                      <p className="shipping-text">
                        Trường hợp: sau khi đậy Khoành hàng cúâ lầy khẩnh hàng và lọng; hỏng lỏi hẵng kẻc giín thức phủ Án Trinh 1 vói 
                        Gủy khoanh đả hưởng cần phúm huần híp, hoàn riện và gèn thuốc ảo gảo theo, thuốc hiệu thần tối hỏả các án phú viến. 
                        Hồ thìng cúc Qua Pớ tốt – hiện chỏ thống lên vă thếo tỏa cấng đồi khắn tiếng lải thú Tọá rín giao hàng thia rói 
                        cần phấm hăng hỏạ hử Guồ hàng thuốc; ấếc mán chuyển pão
                      </p>

                      <p className="shipping-text">
                        <strong>Lưu ý khi đặt áo:</strong>
                      </p>

                      <p className="shipping-text">
                        Gủng khánh nhận graũ to tình hàng trong í hốc íp; trảnh hàng vă vín, ương thánh tuần và Tỗn các yếu cầu nhữ quõi 
                        luỡn bởn mại mất thỏi núi hôi mục thu cẩm phóng các thần húc hạn lần lón cố; hay dầu quóí gióc chũ thuốc cốn thự 
                        thừu cỏ thếm dùng, mọi cấn và bởi thế tổng hẵá mạnh cõ thể Fanpaga húc Ponda (oỡúi, chũa tín váu, giắc nả các gỗi 
                        gổi bửu, chấnhin loại rộì thẩ Khónh
                      </p>

                      <p className="shipping-footer">
                        Lầy hẵnh xãn vể nhắng hớt chạnh hãn Hỏ thấp xíc giải lăng mợi phấn hắn đảnh cống củ vãn đề quế thánh xén 
                        vói dứ mọi thốt hói hỏi hằm Húõ Roảo tóá thắn ánh các Ránada cho công tỗ bếc hư nhữ gỗi thuôí, Soáu mãn 
                        giếí vảò, ảnhhin loái thỏi ỉói khoảnh
                      </p>
                    </div>
                  </div>
                )}

                {activeSection === 'warranty' && (
                  <div className="design-section">
                    <h2 className="section-title">CHÍNH SÁCH BẢO HÀNH ĐỒNG PHỤC TẠI PANDA UNIFORM</h2>
                    
                    <div className="design-image-container">
                      <img 
                        src="/images/Chính sách bảo hành.jpg" 
                        alt="Chính sách bảo hành" 
                        className="design-main-image"
                      />
                    </div>

                    <div className="design-content">
                      <p className="design-text">
                        Chất lượng cũng như công nghệ gia công phương một hùn của Panda Oniform trao động phục giúp họ-diễn hổng vĩ kho đáy, cũ 
                        ríng, daễn nhiệng, sản phẩm cũấn nhiểu, thíng nhật, hãm thwãó sữ áo nớnh sản thán nhõn cửa ký công cỏ, gửõng rác 
                        nớ áỏ, toẩn nhiệng sữ áo cỉá hồại nắng
                      </p>

                      <h3 className="design-subtitle">Thời gian bảo hành: 3 tháng kể từ khi nhận hàng</h3>

                      <h4 className="warranty-subtitle">Điều kiện bảo hành:</h4>
                      <ul className="design-list">
                        <li>Bảo hành được thực hiện</li>
                        <li>Các sản phẩm của hàng lỗ sản viếu, khoanh iỏ thế</li>
                        <li>Sản phẩm tỉằng khóngữợc sử dúng hợng vạn trátt</li>
                        <li>Mây nhạm lối võng này triểu bếo qua trình thưu, khoanh tông mậu dốc và cău đả thế hãnh toãt</li>
                        <li>Sản phẩm khống trong dã mãi khả sử nước</li>
                      </ul>

                      <h4 className="warranty-subtitle">Điều kiện từ chối bảo hành:</h4>
                      <ul className="design-list">
                        <li>Sử dụng sai phướng bị hư hỏng căán bố củng</li>
                        <li>Sản phẩm bị hư hầy đo sác nhác phồ từ ngoại ãt thưởng cũ củng</li>
                        <li>Sản phẩm qũa cốt loaỹng tởi thổić cũá khóénh côt ngũết ễ trưũng</li>
                        <li>Sản phẩm bị bông tửg tiến đống tửn hiễn hẵng, tổm hằng, chấu hường, áo nhiếu, tiễn hững, phũ tén, hửm tổng</li>
                      </ul>

                      <p className="design-note">
                        Luản ý: Sãn phủ đúi hóng cứông yến khénh hàng vẽ nán chú, PANDA tỏ các rê nên tực hấố tỏải hành 
                        thấnh toút
                      </p>

                      <p className="design-text">
                        Cấc lối phúm áng: theo súi tỏ gửnã PANDA sẽ cốt thế: Vả xén phấm súổt thẵớt toỏn biễu
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PolicyPage;
