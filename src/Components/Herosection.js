import React, { useEffect, useState } from 'react';
import './Herosection.css';
import heroImg1 from '../Assets/IMG_20250128_145646_545.jpg';
import heroImg2 from '../Assets/RBG CAR LOGO.png';
import heroImg3 from '../Assets/1454.jpg';
import { Link } from 'react-router-dom';

const images = [heroImg1, heroImg2, heroImg3];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>WELCOME TO 
            <br />
            CAR A-C MASTERS</h1>
          <p>
            Your trusted experts in car air conditioning service and repair.
          </p>
          <div className="hero-buttons">
            <Link to="/about">
              <button className="learn-btn">LEARN MORE</button>
            </Link>
            <Link to="/contact">
              <button className="book-btn">Book an appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;