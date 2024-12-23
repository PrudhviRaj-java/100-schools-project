import React, { useState, useEffect } from 'react';
import './index.css';

const CarouselConrolled = () => {
  const images = [
    '/Assets/Board-Exam-Preparation-in-Gurugram-by-100-Plus-Academy-2.png', 
    '/Assets/Board-Exam-Preparation-in-Gurugram-by-100-Plus-Academy-1.png', 
    '/Assets/Board-Exam-Coaching-in-Gurugram-100-Plus-Academy-Banner-1.png', 
    '/Assets/Board-Exam-Coaching-in-Gurugram-100-Plus-Academy-Banner-2.png', 
    '/Assets/HPSAT-Banner.png',
    '/Assets/Coaching-in-Gurugram-100-Plus-Academy-Banner-7.png',
     '/Assets/Coaching-in-Gurugram-100-Plus-Academy-Banner-5.png', 
     '/Assets/Coaching-in-Gurugram-100-Plus-Academy-Banner-2.png', 
     '/Assets/Coaching-in-Gurugram-100-Plus-Academy-Banner-3.png', 
     '/Assets/Coaching-in-Gurugram-100-Plus-Academy-Banner-6.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  });

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={process.env.PUBLIC_URL + images[currentIndex]} alt={`Image${currentIndex + 1}`} className="carousel-image" />
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        <span
          className={`dot ${currentIndex === 0 ? 'active' : ''}`}
          onClick={() => handleDotClick(0)}
        ></span>
        <span
          className={`dot ${currentIndex === 1 ? 'active' : ''}`}
          onClick={() => handleDotClick(1)}
        ></span>
        <span
          className={`dot ${currentIndex === 2 ? 'active' : ''}`}
          onClick={() => handleDotClick(2)}
        ></span>
        <span
          className={`dot ${currentIndex === 3 ? 'active' : ''}`}
          onClick={() => handleDotClick(3)}
        ></span>
        <span
          className={`dot ${currentIndex === 4 ? 'active' : ''}`}
          onClick={() => handleDotClick(4)}
        ></span>
        <span
          className={`dot ${currentIndex === 5 ? 'active' : ''}`}
          onClick={() => handleDotClick(5)}
        ></span>
        <span
          className={`dot ${currentIndex === 6 ? 'active' : ''}`}
          onClick={() => handleDotClick(6)}
        ></span>
        <span
          className={`dot ${currentIndex === 7 ? 'active' : ''}`}
          onClick={() => handleDotClick(7)}
        ></span>
        <span
          className={`dot ${currentIndex === 8 ? 'active' : ''}`}
          onClick={() => handleDotClick(8)}
        ></span>
        <span
          className={`dot ${currentIndex === 9 ? 'active' : ''}`}
          onClick={() => handleDotClick(9)}
        ></span>
      </div>
    </div>
  );
};

export default CarouselConrolled;
