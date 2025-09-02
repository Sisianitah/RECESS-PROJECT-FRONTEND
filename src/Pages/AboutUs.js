import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* Header Section */}
      <div className="about-hero">
        <h1>ABOUT US</h1>
      </div>

      {/* Introduction */}
      <div className="intro-section">
        <div className="intro-image">
          <img src="./Assets/WhatsApp Image 2025-08-01 at 22.55.30_1629e010.jpg" alt="Technician at work" />
        </div>
        <div className="intro-text">
          <h3 className="intro-title">Introduction</h3>
          <p>
            Welcome to <strong>Car A-C MASTERS</strong> — your trusted experts in car air conditioning
            service, repair and maintenance.
          </p>
          <p>
            We specialize in keeping you cool and comfortable on the road with
            professional, reliable, and affordable A/C solutions.
          </p>
          <p className="author">ENG. PIDO MICHAEL</p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mission-section">
        <h4 className="mission-title">MISSION STATEMENT</h4>
        <p>
          At Car A-C MASTERS, our mission is to deliver fast, reliable, and
          expert car air conditioning services that keep our customers cool and
          comfortable on the road.
        </p>
        <p>
          We are committed to quality workmanship, honest diagnostics, and
          excellent customer care to ensure every vehicle we service runs at
          peak A/C performance.
        </p>
      </div>

      {/* Vision Statement */}
      <div className="vision-section">
        <h4 className="vision-title">OUR VISION</h4>
        <p>
          To become the most trusted and preferred car air conditioning service
          provider in the country, known for innovation, integrity, and
          excellence in automotive climate control solutions.
        </p>
      </div>

      {/* Learn More Button */}
      <div className="learn-more">
        <Link to='/services'>
        <button className="learn-more">LEARN MORE</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;












