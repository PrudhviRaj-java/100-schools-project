import React from "react";
import "./index.css";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-row">
        <div className="footer-left">
          <div className="footerI-container">
            <img
              src="/Assets/logo1.png"
              alt="Logo"
              className="footer-logo"
            />
            <p className="footer-description">
              Team 100plus academy is determined to take students to the right
              path and by creating healthy peer learning environment and promote
              student teacher interaction.
            </p>
            <img
              src="/Assets/playstore.png"
              alt="Play Store"
              className="footer-small-img"
            />
            <div className="footer-social-icons">
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h3>Useful Links</h3>
            <a href="/class-12-pcm-crash-course" className="footer-link">
              Class 12 PCM Crash Course (CBSE / ICSE)
            </a>
            <a href="/class-12-pcm-full-year" className="footer-link">
              Class 12 PCM Full-Year Program (CBSE / ICSE)
            </a>
            <a href="/neet-crash-course" className="footer-link">
              Crash Course for NEET
            </a>
            <a href="/neet-droppers-batch" className="footer-link">
              NEET Droppers Batch
            </a>
          </div>
          <div className="footer-section">
            <h3>Popular Courses</h3>
            <a href="/foundation" className="footer-link">Foundation</a>
            <a href="/life-skill-courses" className="footer-link">
              Life Skill Courses
            </a>
            <a href="/senior" className="footer-link">Senior</a>
            <a href="/yoga-and-meditation" className="footer-link">
              Yoga and Meditation
            </a>
          </div>
          <div className="footer-section">
            <h3>Help & Supports</h3>
            <a href="/about-us" className="footer-link">About Us</a>
            <a href="/contact" className="footer-link">Contact</a>
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/terms" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p><span>100 Plus Academy </span>© 2024 | EduZephyr Education Services Pvt Ltd.</p>
        <p>Crafted with ♥ by <span>Growth Climb</span></p>
      </div>
    </footer>
  );
};

export default Footer;
