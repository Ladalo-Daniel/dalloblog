
import React, { useRef, useEffect, useState } from 'react';
import "./lazyload.css"

function LazyLoadedImage({ src, alt }) {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      className='postImg'
      ref={imgRef}
      src={isVisible ? src : ''}
      alt={alt}
      loading="lazy"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 5.5s' }}
    />
  );
}

export default LazyLoadedImage;