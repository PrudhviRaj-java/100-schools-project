import React, { useState } from "react";
import "./index.css";

const FAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="faq-big-container">
      <div className="faq-inner-container">
        <h2 className="faq-heading"><span>Faqs</span></h2>
        <h1 className="faq-subheading">Frequently Asked <span>Questions</span></h1>
        <p className="faq-description">
          Find answers to all your questions about 100 Plus Academy, from
          enrollment procedures to course details, fees, and schedules. Get all
          the information you need to join our community.
        </p>

        <div className="faq-list">
          {/* FAQ 1 */}
          <div
            className={`faq-item ${activeFAQ === 0 ? "active" : ""}`}
            onClick={() => toggleFAQ(0)}
          >
            <div className="faq-question">
              <span className="faq-symbol">{activeFAQ === 0 ? "-" : "+"}</span>
              <h3 className="faq-text">
                What is the courses' duration and schedule?
              </h3>
            </div>
            {activeFAQ === 0 && (
              <div className="faq-answer">
                The course duration and schedule vary depending on the course.
                Detailed information about the timing and frequency of classes
                is provided in the "Course Duration & Schedule" section on the
                course page.
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div
            className={`faq-item ${activeFAQ === 1 ? "active" : ""}`}
            onClick={() => toggleFAQ(1)}
          >
            <div className="faq-question">
              <span className="faq-symbol">{activeFAQ === 1 ? "-" : "+"}</span>
              <h3 className="faq-text">Are the classes live or pre-recorded?</h3>
            </div>
            {activeFAQ === 1 && (
              <div className="faq-answer">
                Our courses typically include a mix of live interactive sessions
                and pre-recorded lectures. This allows flexibility and ensures
                that you can review the material at your own pace.
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div
            className={`faq-item ${activeFAQ === 2 ? "active" : ""}`}
            onClick={() => toggleFAQ(2)}
          >
            <div className="faq-question">
              <span className="faq-symbol">{activeFAQ === 2 ? "-" : "+"}</span>
              <h3 className="faq-text">
                What kind of support will I receive during the course?
              </h3>
            </div>
            {activeFAQ === 2 && (
              <div className="faq-answer">
                We offer comprehensive support, including personalized
                doubt-clearing sessions, mentorship, and 24/7 access to academic
                resources and support teams to help you throughout your learning
                journey.
              </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div
            className={`faq-item ${activeFAQ === 3 ? "active" : ""}`}
            onClick={() => toggleFAQ(3)}
          >
            <div className="faq-question">
              <span className="faq-symbol">{activeFAQ === 3 ? "-" : "+"}</span>
              <h3 className="faq-text">
                Are there any assessments or exams during the course?
              </h3>
            </div>
            {activeFAQ === 3 && (
              <div className="faq-answer">
                Yes, our courses include regular assessments, mock tests, and
                final exams to help gauge your understanding and readiness.
                These are integral parts of the learning process to ensure you
                achieve the best results.
              </div>
            )}
          </div>

          {/* FAQ 5 */}
          <div
            className={`faq-item ${activeFAQ === 4 ? "active" : ""}`}
            onClick={() => toggleFAQ(4)}
          >
            <div className="faq-question">
              <span className="faq-symbol">{activeFAQ === 4 ? "-" : "+"}</span>
              <h3 className="faq-text">
                Can I get a demo or trial class before enrolling?
              </h3>
            </div>
            {activeFAQ === 4 && (
              <div className="faq-answer">
                Yes, we offer demo classes for prospective students to
                experience our teaching methodology and course content.
                Information on how to register for a demo class is available on
                the course page.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
