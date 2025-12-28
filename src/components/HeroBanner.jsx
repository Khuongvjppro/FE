import { useState, useEffect } from "react";
import "./HeroBanner.css";

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    "/images/HomeBanner1.jpg",
    "/images/HomeBanner2.jpg",
    "/images/HomeBanner3.jpg",
    "/images/HomeBanner4.jpg",
    "/images/HomeBanner5.jpg",
    "/images/HomeBanner6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <section className="hero-banner">
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </section>
  );
}

export default HeroBanner;
