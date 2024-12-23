import React, { useState } from 'react';
import './index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleSubmenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <header>
      {/* First Column Container */}
      <div className="header-column first-column">
        <div className="contact-info">
          <span>Email: example@example.com | Contact: +123456789</span>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>

      {/* Second Column Container */}
      <div className="scrolling-text">
        Welcome to Our Website! Check out our latest updates and offers.
      </div>

      {/* Third Column Container */}
      <div className="header-column third-column">
        <img src="/Assets/logo1.png" alt="Logo" className="logo" />
        <div className="menu-heading">
          <button className="menu-item" onClick={() => toggleSubmenu('home')}>
            Home <span className="down-arrow">▼</span>
          </button>
          <button className="menu-item" onClick={() => toggleSubmenu('about')}>
            About <span className="down-arrow">▼</span>
          </button>
          <button className="menu-item" onClick={() => toggleSubmenu('courses')}>
            Our Courses <span className="down-arrow">▼</span>
          </button>
          <button className="menu-item">Blog</button>
          <button className="menu-item">Downloads</button>
          <button className="menu-item">Contact Us</button>
          <button className="menu-item download-app">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              Download App
            </a>
          </button>
        </div>
        <button className="menu-icon" onClick={toggleMenu}>☰</button>
      </div>

      {/* Full-Screen Menu for Smaller Devices */}
      <div className={`sliding-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <img src="/Assets/logo1.png" alt="Logo" className="menu-logo" />
          <button className="close-menu" onClick={closeMenu}>×</button>
        </div>
        <div className="menu-content">
          <div className="contact-details">
             <div className="contact-container">
              <h3>Contact Info</h3>
              <div><span className="contact-icon">📞</span> +123456789</div>
              <div><span className="contact-icon">📞</span> +987654321</div>
              <div><span className="contact-icon">📞</span> +567890123</div>
            </div>
              <h3>Email Addresses</h3>
              <div><span className="contact-icon">📧</span> example@example.com</div>
              <div><span className="contact-icon">📧</span> support@example.com</div>
            </div>
              <h3>Addresses</h3>
              <div><span className="contact-icon">📍</span> 123 Street, City, Country</div>
              <div><span className="contact-icon">📍</span> 456 Avenue, City, Country</div>
            </div>
          </div>
    </header>
  );
};

export default Header;
