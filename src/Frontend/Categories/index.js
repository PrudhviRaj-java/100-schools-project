import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; // Assuming the styles are in Categories.css

const Categories = () => {
  const navigate = useNavigate();

  const handleRedirect = (link) => {
    navigate(link);
  };

  return (
    <div className="categories-wrapper">
      {/* Header Section */}
      <div className="header">
        <h2>
          <span>Categories</span>
        </h2>
        <h1>
          Top <span>Categories</span>
        </h1>
        <p>
          Comprehensive and specialized programs designed to empower students
          for academic excellence and competitive exam success.
        </p>
      </div>

      {/* Categories Container */}
      <div className="categories-container">
        {/* Category Card 1 */}
        <div
          className="category-card"
          onClick={() => handleRedirect("/pre-foundation")}
        >
          <div className="category-icon">🖥️</div>
          <h3 className="category-heading">Pre-Foundation (Grades 6-8)</h3>
          <p className="category-description">
            Comprehensive coverage of the CBSE and ICSE curriculum to build
            strong foundational knowledge.
          </p>
          <span
            className="category-readmore"
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect("/pre-foundation");
            }}
          >
            Read More
          </span>
        </div>

        {/* Category Card 2 */}
        <div
          className="category-card"
          onClick={() => handleRedirect("/foundation")}
        >
          <div className="category-icon">🖥️</div>
          <h3 className="category-heading">Foundation (Grades 9-10)</h3>
          <p className="category-description">
            Complete coverage of the class 9-10 syllabus throughout the
            academic year.
          </p>
          <span
            className="category-readmore"
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect("/foundation");
            }}
          >
            Read More
          </span>
        </div>

        {/* Category Card 3 */}
        <div
          className="category-card"
          onClick={() => handleRedirect("/pre-university")}
        >
          <div className="category-icon">🌐</div>
          <h3 className="category-heading">Pre-University (PUC)</h3>
          <p className="category-description">
            Detailed courses covering Physics, Chemistry, and Mathematics for
            CBSE and ICSE students.
          </p>
          <span
            className="category-readmore"
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect("/pre-university");
            }}
          >
            Read More
          </span>
        </div>

        {/* Category Card 4 */}
        <div
          className="category-card"
          onClick={() => handleRedirect("/competitive-exams")}
        >
          <div className="category-icon">💡</div>
          <h3 className="category-heading">
            Competitive Exams (IIT JEE - Mains & Advanced)
          </h3>
          <p className="category-description">
            Achieve IIT JEE success with rigorous preparation, expert
            instruction, and strategic practice sessions.
          </p>
          <span
            className="category-readmore"
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect("/competitive-exams");
            }}
          >
            Read More
          </span>
        </div>

        {/* Category Card 5 */}
        <div
          className="category-card"
          onClick={() => handleRedirect("/mental-well-being")}
        >
          <div className="category-icon">📓</div>
          <h3 className="category-heading">Mental Well Being</h3>
          <p className="category-description">
            Enhance focus, memory, and exam readiness with monthly holistic
            development sessions and specialized techniques.
          </p>
          <span
            className="category-readmore"
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect("/mental-well-being");
            }}
          >
            Read More
          </span>
        </div>

        {/* Category Card 6 */}
        <div
          className="category-card"
          onClick={() => handleRedirect("/life-skills")}
        >
          <div className="category-icon">🎟️</div>
          <h3 className="category-heading">
            Life Skill Courses: Personality Development, Critical Mindset,
            Design Thinking
          </h3>
          <p className="category-description">
            Enhance communication, analytical thinking, and problem-solving
            with expert-led courses and offline classes.
          </p>
          <span
            className="category-readmore"
            onClick={(e) => {
              e.stopPropagation();
              handleRedirect("/life-skills");
            }}
          >
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
