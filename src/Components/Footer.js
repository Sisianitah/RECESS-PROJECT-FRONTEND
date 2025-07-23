import React from 'react';
import './Footer.css';
import logo from '../Assets/RBG CAR LOGO.png';

function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={logo} alt="Car A-C Masters Logo" className="logo" />
          <p>Car A-C MASTERS — your trusted experts in car air conditioning service and repair.</p>
          
          <form className="newsletter">
            <label>Subscribe for News Letters</label>
            <input type="email" placeholder="Email" required />
            <button type="submit">submit</button>
          </form>
        </div>

        {/* Content Links */}
        <div className="footer-column">
          <h4>CONTENT</h4>
          <ul>
            <li>INTRODUCTION</li>
            <li>MISSION</li>
            <li>VISION</li>
            <li>SERVICE</li>
            <li>REVIEWS</li>
            <li>GALLERY</li>
            <li>FAQ'S</li>
          </ul>
        </div>

        {/* Page Links */}
        <div className="footer-column">
          <h4>PAGES</h4>
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
            <li>SERVICE</li>
            <li>REVIEWS</li>
            <li>GALLERY</li>
            <li>BLOGS</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>CONTACT INFORMATION</h4>
          <ul>
            <li>📧 caracmasters4@gmail.com</li>
            <li>💬 +256 786068830</li>
            <li>📞 +256 758681323</li>
            <li>📷 CAR A-C MASTERS</li>
            <li>📘 CAR A-C MASTERS</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2025 Car AC Masters. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;