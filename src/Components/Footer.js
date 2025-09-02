import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* CONTENT */}
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

        {/* PAGES */}
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

        {/* CONTACT INFORMATION */}
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

        {/* SOCIAL MEDIA */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Car A-C Masters. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

