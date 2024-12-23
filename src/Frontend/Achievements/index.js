import React from "react";
import "./index.css";

const Achievements = () => {
  return (
    <div className="achievements-container">
      {/* Header Section */}
      <div className="achievements-header">
        <h2><span>Our Success</span></h2>
        <h1>Our <span> Achievements</span> So Far</h1>
        <p>
          These achievements underscore our commitment to academic excellence
          and innovative <p> learning. Join 100 Plus Academy to be part of our
          success story!</p>
        </p>
      </div>

      {/* Small Containers */}
      <div className="small-containers">
        {/* 1st Container */}
        <div className="left-container1">
          <div className="left-section">
            <h3>Student Success</h3>
            <div className="icon invitation-icon"></div>
          </div>
          <div className="divider"></div>
          <div className="right-section">
            <h3><span>8,000+</span></h3>
            <p>More than 8000 students successfully tutored</p>
            <h4><span>400+</span></h4>
            <p>200+ students achieved top ranks in national exams</p>
          </div>
        </div>

        {/* 2nd Container */}
        <div className="right-container1">
          <div className="left-section">
            <h3>Competitive Exam Results</h3>
            <div className="icon computer-icon"></div>
          </div>
          <div className="divider"></div>
          <div className="right-section">
            <h3><span>150+</span></h3>
            <p>150+ students cleared IIT JEE</p>
            <h4><span>230+</span></h4>
            <p>100+ students cleared NEET</p>
            <h4><span>50+</span></h4>
            <p>50+ students excelled in Olympiads</p>
          </div>
        </div>

        {/* 3rd Container */}
        <div className="left-container2">
          <div className="left-section">
            <h3>Academic Excellence</h3>
            <div className="icon bulb-icon"></div>
          </div>
          <div className="divider"></div>
          <div className="right-section">
            <h3><span>95%</span></h3>
            <p>95% of students scored above 90% in board exams</p>
            <h4><span>80%</span></h4>
            <p>80% of students improved their grades by at least one level</p>
          </div>
        </div>

        {/* 4th Container */}
        <div className="right-container2">
          <div className="left-section">
            <h3>Innovative Learning</h3>
            <div className="icon computer-icon"></div>
          </div>
          <div className="divider"></div>
          <div className="right-section">
            <h3><span>100+</span></h3>
            <p>Implemented over 100 interactive learning modules</p>
            <h4><span>50+</span></h4>
            <p>
              Conducted 50+ workshops and seminars on innovative education
            </p>
          </div>
        </div>

        {/* 5th Container */}
        <div className="middle-container">
          <div className="left-section">
            <h3>Community Impact</h3>
            <div className="icon email-icon"></div>
          </div>
          <div className="divider"></div>
          <div className="right-section">
            <h3><span>20+</span></h3>
            <p>
              Taught students of 20+ schools for education in the community
            </p>
            <h4><span>10,000+</span></h4>
            <p>
              Engaged with over 10,000 students through outreach programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
