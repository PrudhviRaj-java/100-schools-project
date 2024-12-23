import React from "react";
import "./index.css";

const CategoriesI = () => {
  return (
    <div className="testimonials-container">
      {/* Header Section */}
      <div className="header">
        <h3><span>Testimonials</span></h3>
        <h1>Reviews from our <span>Students</span></h1>
        <p>
          Stay updated with the latest in coaching, learning strategies, and
          educational <p>trends to boost your academic journey.</p>
        </p>
      </div>

      {/* YouTube Shorts Container */}
      <div className="youtube-shorts-container">
        {/* YouTube Short 1 */}
        <div className="youtube-short">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ePvVo2vLyu8?si=6KtGkgQIrGePtzFb"
            title="YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="youtube-title">10th Board Exam 2023-24 Testimonials</div>
        </div>

        {/* YouTube Short 2 */}
        <div className="youtube-short">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/l7Wc6ImzCSo?si=_zIDTAc01t0uY_OU"
            title="YouTube video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="youtube-title">Anjasi Testimonial - Cracked NSUT 2024</div>
        </div>

        {/* YouTube Short 3 */}
        <div className="youtube-short">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hWYvjtpIQF4?si=Si9TvGH9TRkN0aQQ"
            title="YouTube video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="youtube-title">Aditya Sahai Testimonial - Selected in BITS 2024</div>
        </div>

        {/* YouTube Short 4 */}
        <div className="youtube-short">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zZjvVQEvsaw?si=FHjBkyFCujBfnstf"
            title="YouTube video 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="youtube-title">Unnav Sharma - Cracked JEE (Mains+Advanced) 2024 & Advik - Cracked BITSAT 2024</div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesI;
