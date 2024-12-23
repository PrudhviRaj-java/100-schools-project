import React from 'react';
import './index.css'; // Keep the same CSS file name or rename it if you prefer

const Container = () => {
  return (
    <div className="main-container">
      {/* Container for Row 1 */}
      <div className="row1-container">
        <div className="row1">
          <h1>You are at the right place for
          <span> your child's</span> all <span>academic requirement</span> .</h1>
          <h2>Discover the <span>path </span>to your <span>dreams </span>with our <span>expert guidance.</span></h2>
        </div>
      </div>

      {/* Container for Row 2 */}
      <div className="row2-container">
        <div className="row2">
          <p>
            Welcome to 100 Plus Academy, where we are dedicated to nurturing academic excellence and fostering a love for learning. Our expert educators and innovative teaching methods ensure that every student achieves their full potential.
          </p>

          <div className="stats-container">
            <div className="stat-box">
              <div className="icon">💻</div>
              <h1>15k </h1> <p>Students Taught</p>
            </div>
            <div className="stat-box">
              <div className="icon">🎓</div>
             <h1>100% </h1> <p>Success Rate</p>
            </div>
            <div className="stat-box">
              <div className="icon">📊</div>
             <h1> 300+</h1> <p>Top Rankers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
