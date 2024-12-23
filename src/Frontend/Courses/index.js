import React from "react";
import "./index.css";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2>Our Popular <span>Courses</span></h2>
        <p>Top Courses That Make a Difference in Your Academic Journey</p>
      </div>

      {/* First Row with 3 Containers */}
      <div className="courses-row">
        <div className="course-card-container">
          <div className="course-card">
            <span className="course-tag">Class 12</span>
            <img
              src="/Assets/Class-12-CBSE-_-ICSE-PCM-Coaching-Crash-Course-in-Gurugram-1024x536.png"
              alt="Class 12 Course"
              className="course-image"
            />
             <span className="classroom-course">Classroom Courses</span>
            <span className="online-course">Online Courses</span>
            <div className="course-details">
              <h2 className="course-title">PCM (CBSE/ ICSE) Crash Course</h2>
              <div className="course-actions">
                <span className="timer-icon">⏱️</span>
                <button className="view-course-btn">View Courses</button>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-container">
          <div className="course-card">
            <span className="course-tag">Class 10</span>
            <img
              src="/Assets/Class-10-School-Coaching-CBSE-_-ICSE-in-Gurugram-1024x536.png"
              alt="Class 10 Course"
              className="course-image"
            />
          <span className="classroom-course">Classroom Courses</span>
        <span className="online-course">Online Courses</span>
            <div className="course-details">
              <h2 className="course-title">PCM (CBSE/ ICSE) Crash Course</h2>
              <div className="course-actions">
                <span className="timer-icon">⏱️</span>
                <button className="view-course-btn">View Courses</button>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-container">
          <div className="course-card">
            <span className="course-tag">Class 12</span>
            <img
              src="/Assets/Class-12-CBSE-_-ICSE-Crash-Class-Coaching-in-Gurugram-1024x536.png"
              alt="Class 12 Course"
              className="course-image"
            />
          <span className="classroom-course">Classroom Courses</span>
         <span className="online-course">Online Courses</span>
            <div className="course-details">
              <h2 className="course-title">PCM (CBSE/ ICSE) Crash Course</h2>
              <div className="course-actions">
                <span className="timer-icon">⏱️</span>
                <button className="view-course-btn">View Courses</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row with 3 Containers */}
      <div className="courses-row">
        <div className="course-card-container">
          <div className="course-card">
            <span className="course-tag">Class 12</span>
            <img
              src="/Assets/Class-12-CBSE-_-ICSE-PCM-Coaching-Crash-Course-in-Gurugram-1024x536.png"
              alt="Class 12 Course"
              className="course-image"
            />
           <span className="classroom-course">Classroom Courses</span>
           <span className="online-course">Online Courses</span>
            <div className="course-details">
              <h2 className="course-title">PCM (CBSE/ ICSE) Crash Course</h2>
              <div className="course-actions">
                <span className="timer-icon">⏱️</span>
                <button className="view-course-btn">View Courses</button>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-container">
          <div className="course-card">
            <span className="course-tag">Class 10</span>
            <img
              src="/Assets/Class-10-School-Coaching-CBSE-_-ICSE-in-Gurugram-1024x536.png"
              alt="Class 10 Course"
              className="course-image"
            />
            <span className="classroom-course">Classroom Courses</span>
            <span className="online-course">Online Courses</span>
            <div className="course-details">
              <h2 className="course-title">PCM (CBSE/ ICSE) Crash Course</h2>
              <div className="course-actions">
                <span className="timer-icon">⏱️</span>
                <button className="view-course-btn">View Courses</button>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-container">
          <div className="course-card">
            <span className="course-tag">Class 12</span>
            <img
              src="/Assets/Class-12-CBSE-_-ICSE-Crash-Class-Coaching-in-Gurugram-1024x536.png"
              alt="Class 12 Course"
              className="course-image"
            />
            <span className="classroom-course">Classroom Courses</span>
            <span className="online-course">Online Courses</span>
            <div className="course-details">
              <h2 className="course-title">PCM (CBSE/ ICSE) Crash Course</h2>
              <div className="course-actions">
                <span className="timer-icon">⏱️</span>
                <button className="view-course-btn">View Courses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
