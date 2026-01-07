import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import './FabricMaterial.css';

const FabricMaterial = () => {
  const [activeTab, setActiveTab] = useState('summer');

  const fabricData = [
    {
      id: 1,
      name: 'COTTON BASIC',
      image: '/images/1. COTTON BASIC.jpg',
      description: '– Thành phần: 65% Cotton, 30% Polyester, 5% Spandex\n– Co giãn 4 chiều, mềm mại, bền màu\n– Bảng màu đa dạng, phù hợp kiểu áo Polo và T-shirt.',
      season: 'summer'
    },
    {
      id: 2,
      name: 'COTTON EXCOOL',
      image: '/images/2. COTTON EXCOOL.jpg',
      description: '– Thành phần: 95% Cotton, 5% Spandex, định lượng 195 gsm\n– Co giãn 4 chiều, thấm hút tốt, mềm mịn mát, thoáng khí\n– Bảng màu đa dạng, phù hợp kiểu áo Polo, T-shirt và áo bóng chày',
      season: 'summer'
    },
    {
      id: 3,
      name: 'COTTON MEGA',
      image: '/images/3. COTTON MEGA.jpg',
      description: '– Thành phần: 100% Cotton, định lượng 230 gsm\n– Co giãn 4 chiều, công nghệ dệt chống nhăn, chống xù, mềm mịn mát\n– Dày dặn giúp áo lên đứng form, thấm hút tốt, độ bền cao, phù hợp kiểu áo Polo và T-shirt',
      season: 'summer'
    },
    {
      id: 4,
      name: 'COTTON EXTRA',
      image: '/images/4. COTTON EXTRA.jpg',
      description: '– Thành phần: 100% Cotton, định lượng 250 gsm, cổ bo zip (đối với áo T-shirt)\n– Co giãn 2 chiều, công nghệ dệt chống nhăn, chống xù, mềm mịn mát\n– Dày dặn đảm bảo giữ form dáng áo, thấm hút tốt, độ bền màu cao, phù hợp kiểu áo Polo và T-shirt',
      season: 'summer'
    },
    {
      id: 5,
      name: 'Vải Lacoste cao cấp',
      image: '/images/5. Vải Lacoste cao cấp.jpg',
      description: 'Có thành phần 65% cotton, 35% polyester và được dệt theo quy cách mắt vải hình thoi 2 lớp, vải có độ bền cao, co dãn 4 chiều, cách đan hình thoi nên vải cứng cáp đem lại sự sang trọng cho người mặc, phù hợp với kiểu dáng áo polo.',
      season: 'summer'
    },
    {
      id: 6,
      name: 'Vải Lacoste Panu',
      image: '/images/6. Vải Lacoste Panu.jpg',
      description: 'Với công nghệ dệt vải đặc biệt, tạo nên chất liệu Lacoste Panu với cơ chế làm mát tự nhiên, mềm mịn, thấm hút mồ hôi, có độ co giãn tốt, ít nhăn bền màu và không gây kích ứng cho da. Phù hợp với kiểu áo đồng phục có cổ.',
      season: 'summer'
    },
    {
      id: 1,
      name: 'Vải Kate Silk',
      image: '/images/7. Vải Kate Silk.jpg',
      description: 'Chất liệu vải Kate Silk có bề mặt vải mịn, sờ mát, thân thiện với da, dễ dàng giặt ủi và bảo quản, áo nhẹ và ít nhăn. Tuy nhiên do có thành phần chính là sợi Polyester nên khả năng thấm hút mồ hôi của nó không được tốt như các chất liệu khác. Bề mặt vải có thể sử dụng công nghệ in chuyển nhiệt, phù hợp cho kiểu áo lớp sơ mi 3D',
      season: 'winter'
    },
    {
      id: 2,
      name: 'Vải Lon Mỹ',
      image: '/images/8. Vải Lon Mỹ.jpg',
      description: 'Chất liệu vải Lon Mỹ có đặc tính mềm mại, có độ dày vừa phải và thấm mồ hôi cực tốt, nhanh khô và dễ dáng là ủi. Chất liệu vải lon Mỹ mang đến sự thoải mái, dễ chịu cho người mặc và đặc biệt có thể sử dụng lâu dài và không sợ bị co nhúm hay phai màu. Chất vải này rất phù hợp để làm các mẫu đồng phục sơ mi Hàn Quốc.',
      season: 'winter'
    },
    {
      id: 3,
      name: 'Vải thun lạnh, mè',
      image: '/images/9. Vải thun lạnh, mè.jpg',
      description: 'Chất liệu vải thun lạnh có thành phần 100% là sợi Polyester, nên chất liệu này có độ bền cao, hình in trên áo đa dạng, không giới hạn màu sắc, ít thấm hút, phù hợp khi làm áo lớp galaxy hoặc áo đồng phục 3D.',
      season: 'winter'
    }
  ];

  const filteredFabrics = fabricData.filter(fabric => fabric.season === activeTab);

  return (
    <MainLayout>
      <div className="fabric-material">
        {/* Hero Section */}
        <div className="fabric-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Chất liệu vải</h1>
          <div className="breadcrumb">
            <Link to="/home" className="breadcrumb-link">Trang chủ</Link>
            <span className="separator">›</span>
            <span>Tư vấn</span>
            <span className="separator">›</span>
            <span>Chất liệu vải</span>
          </div>
          <p className="intro-text">
            Panda Uniform cung cấp đa dạng chất liệu đáp ứng mọi nhu cầu của khách hàng.
          </p>
          <button className="experience-btn">Trải nghiệm màu áo thực tế</button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="fabric-tabs">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'summer' ? 'active' : ''}`}
              onClick={() => setActiveTab('summer')}
            >
              Các chất liệu mùa hè
            </button>
            <button 
              className={`tab-btn ${activeTab === 'winter' ? 'active' : ''}`}
              onClick={() => setActiveTab('winter')}
            >
              Các chất liệu mùa đông
            </button>
          </div>

          {/* Fabric Cards Grid */}
          <div className="fabric-grid">
            <div className="grid">
              {filteredFabrics.map((fabric) => (
                <div key={fabric.id} className="fabric-card">
                  <div className="fabric-image">
                    <img src={fabric.image} alt={fabric.name} />
                  </div>
                  <div className="fabric-content">
                    <h3 className="fabric-title">
                      {fabric.id}. {fabric.name}
                    </h3>
                    <p className="fabric-description">
                      {fabric.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="brand-section">
        <div className="container">
          <h2 className="brand-title">ĐỒNG PHỤC PANDA</h2>
          <p className="brand-text">
            Panda Uniform tự hào là thương hiệu cung cấp đồng phục uy tín, chất lượng hàng đầu miền Bắc. 
            Chúng tôi luôn nỗ lực dùng tất cả tâm huyết và trí lực của mình để mang tới cho các bạn những 
            sản phẩm tuyệt vời nhất.
          </p>
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default FabricMaterial;
