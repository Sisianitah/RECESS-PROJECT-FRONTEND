import React from "react";
import "./AboutUs.css";
import workerImage from "../Assets/1454.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>ABOUT US</h1>

      <div className="content-section">
        <div className="image-container">
          <img src={workerImage} alt="Worker" />
        </div>

        <div className="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to <strong>Car A-C MASTERS</strong>  your trusted experts in car air conditioning service and repair.
            <br />
            We specialize in keeping you cool and comfortable on the road with professional, reliable, and affordable A/C solutions.
          </p>
          <button className="learn-more">LEARN MORE</button>
        </div>
      </div>

      <div className="bottom-section">
        <div className="box">
          <h3>OUR VISION</h3>
          <p>
            To become the most trusted and preferred car air conditioning service provider in the country,
            known for innovation, integrity, and excellence in automotive climate control solutions.
          </p>
        </div>

        <div className="box">
          <h3>MISSION STATEMENT</h3>
          <p>
            At Car A-C MASTERS, our mission is to deliver fast, reliable,
            and expert car air conditioning services that keep our customers cool and comfortable on the road.
            <br />
            We are committed to quality workmanship, honest diagnostics, and excellent customer care
            to ensure every vehicle we service runs at peak A/C performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;