import "./Customers.css";

function Customers() {
  const customers = [
    {
      id: 1,
      image: "/images/MyCustomer1.png",
      alt: "Khách hàng Panda Uniform 1"
    },
    {
      id: 2,
      image: "/images/MyCustomer2.png",
      alt: "Khách hàng Panda Uniform 2"
    },
    {
      id: 3,
      image: "/images/MyCustomer3.png",
      alt: "Khách hàng Panda Uniform 3"
    }
  ];

  return (
    <section className="customers-section">
      <div className="container">
        <div className="customers-header">
          <span className="customers-badge">Đối Tác</span>
          <h2 className="customers-title">
            KHÁCH HÀNG CỦA PANDA
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <span className="decoration-dot"></span>
              <span className="decoration-line"></span>
            </div>
          </h2>
          <p className="customers-subtitle">
            Được tin tưởng bởi hàng nghìn khách hàng trên toàn quốc
          </p>
        </div>

        <div className="customers-grid">
          {customers.map((customer) => (
            <div key={customer.id} className="customer-card">
              <div className="customer-image-wrapper">
                <img 
                  src={customer.image} 
                  alt={customer.alt}
                  className="customer-image"
                />
                <div className="customer-overlay">
                  <div className="customer-badge-hover">Xem chi tiết</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;
