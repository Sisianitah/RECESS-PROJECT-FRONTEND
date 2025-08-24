import React from "react";
import "./Home.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="hero-section">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
        <a className="navbar-brand text-warning fw-bold" href="Home">
            CAR A-C MASTERS
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a href="Home Page" className="nav-link active">Home Page</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="Services">Services</a>
            </li>
            <li className="nav-item"><a href="Home" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="Car Knowledge" className="nav-link">Car Knowledge</a></li>
            <li className="nav-item"><a href="Videos" className="nav-link">Videos</a></li>
            <li className="nav-item"><a href="Contact Us" className="nav-link">Contact Us</a></li>
          </ul>
          <button className="btn btn-warning ms-3 fw-bold">Book Service</button>
            <button className="btn btn-outline-warning ms-3 fw-bold">Login</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content text-center text-white">
        <img
          src="../src/Assets/IMG_20250128_145646_545.jpg"   // replace with your car image
          alt="Car"
          className="hero-car"
        />
        <h3 className="mt-3">Genuine Car Service</h3>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
        <a href="tel:+1234567890">
          <FaPhoneAlt className="phone-icon" />
        </a>
      </div>

      {/* Navigation Arrows */}
      <div className="arrow left-arrow">❮</div>
      <div className="arrow right-arrow">❯</div>
    </div>
  );
}

export default Home;
