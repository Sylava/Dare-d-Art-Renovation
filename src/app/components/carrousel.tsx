"use client";

import React, { useState, useEffect } from 'react';

interface CarrouselProps {
  images: string[];
  interval?: number;
}

const Carrousel: React.FC<CarrouselProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carrousel">
      <div className="carrousel-inner">
        <div className="carrousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="carrousel-image" />
          ))}
        </div>
      </div>
      <div className="carrousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`carrousel-indicator ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
