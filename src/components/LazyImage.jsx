import { useState, useEffect, useRef } from "react";
import "./LazyImage.css";

function LazyImage({
  src,
  alt,
  className,
  placeholder = "/images/placeholder.png",
}) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    let observer;

    if (imgRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imgRef.current);
            }
          });
        },
        {
          rootMargin: "50px",
        }
      );

      observer.observe(imgRef.current);
    }

    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`lazy-image ${imageLoaded ? "loaded" : "loading"} ${
        className || ""
      }`}
      onLoad={() => setImageLoaded(true)}
    />
  );
}

export default LazyImage;
