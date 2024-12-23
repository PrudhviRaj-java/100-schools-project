import React from 'react';
import './index.css';

function Features() {
  return (
    <div className="features-container">
      {/* First Row: Image Container (Left Side) */}
      <div className="row">
        <div className="image-container">
          {/* You can add an image here */}
          <img src="/Assets/Features.png" alt="Features" />
        </div>

        {/* Second Row: Data Container (Right Side) */}
        <div className="right-column">
          <div className="heading-container">
            <h2><span>Features</span></h2>
            <h1>Elevate your skills <span>with </span></h1><h1>expert <span>coaching </span></h1><h1><span>courses</span></h1>
            <p>
              Join 100 Plus Academy’s versatile coaching programs, offering both  </p>
              <p>offline and online batches to suit your schedule and learning style.  </p>
              <p>  Experience top-quality education from the comfort of your home or </p>
              <p>  in-person.
            </p>
          </div>

          {/* Column: Stacked Sub-containers */}
          <div className="column">
            {/* Classroom Courses */}
            <div className="sub-containerI">
              <div className="icon-container">
                <i className="classroom-icon">📚</i> {/* Classroom icon */}
              </div>
              <div>
                <h1>Classroom Course</h1>
                <p>Engage in Interactive Learning with Expert Instructors </p><p>in a Traditional Classroom Setting.</p>
              </div>
            </div>

            {/* Online Courses */}
            <div className="sub-containerII">
              <div className="icon-container">
                <i className="degree-icon">🎓</i> {/* Degree icon */}
              </div>
              <div>
                <h1>Online Courses</h1>
                <p>Access Quality Education Anytime, Anywhere with Our</p><p> Comprehensive Online Programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register Now Button */}
      <div className="register-now">
        <button>Register Now</button>
      </div>
    </div>
  );
}

export default Features;
