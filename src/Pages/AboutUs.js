import React from 'react';
import './AboutUs.css';
import workerImage from "../Assets/1454.jpg"; 
import missionImg from '../Assets/WhatsApp Image 2025-07-27 at 06.58.15_fb48a1be.jpg';  
import visionImg from '../Assets/WhatsApp Image 2025-07-27 at 06.57.46_fc5b4a3e.jpg';    
import autelImg from '../Assets/WhatsApp Image 2025-07-27 at 06.56.58_9a058d83.jpg';
import { Link } from 'react-router-dom';        

const AboutUs = () => {
  return (
    <section className="about-section" id="about-section">
      <h2 className="title">ABOUT US</h2>

      <div className="intro-section">
        <div className="intro-text">
          <h3 className="sub-title">Introduction</h3>
          <p>
            Welcome to <strong>Car A-C MASTERS</strong> – your trusted experts in car air-conditioning service and repair.
            <br />
            We specialize in keeping you cool and comfortable on the road with professional, reliable, and affordable A/C solutions.
          </p>
          <p className="eng">ENG. PiDO MICHAEL</p>
          <Link to="/signup">
          <button className="learn-more-btn">LEARN MORE</button>
          </Link>
        </div>
        <div className="intro-img">
          <img src={workerImage} alt="Engineer Pedo Michael" />
        </div>
      </div>

      <div className="mission-section">
        <img src={missionImg} alt="Dashboard gauges" />
        <div className="mission-text">
          <h3 className="sub-title">MISSION STATEMENT</h3>
          <p>
            At Car A-C MASTERS, our mission is to deliver fast, reliable, and expert A/C services with unmatched customer satisfaction. We aim to become the region's leading name in car A/C diagnostics and repair.
          </p>
        </div>
      </div>

      <div className="vision-section">
        img src={visionImg}
        <h3 className="sub-title orange">OUR VISION</h3>
        <p>
          To become the most trusted and preferred car air conditioning service provider in the country, known for innovation, integrity, and excellence in automotive climate control solutions.
        </p>
        <img src={autelImg} alt="Autel Diagnostic Tool" />
      </div>
    </section>
  );
};

export default AboutUs;

















































// import React from "react";
// import "./AboutUs.css";
// import workerImage from "../Assets/1454.jpg";
// import { Link } from "react-router-dom";

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <h1>ABOUT US</h1>

//       <div className="content-section">
//         <div className="image-container">
//           <img src={workerImage} alt="Worker" />
//         </div>

//         <div className="introduction">
//           <h2>Introduction</h2>
//           <p>
//             Welcome to <strong>Car A-C MASTERS</strong>  your trusted experts in car air conditioning service and repair.
//             <br />
//             We specialize in keeping you cool and comfortable on the road with professional, reliable, and affordable A/C solutions.
//           </p>
//           <Link to="/services">
//            <button className="learn-more">LEARN MORE</button>
//           </Link>  
//         </div>
//       </div>
//         <div className="bottom-section">
//         <div className="box">
//           <h3>OUR VISION</h3>
//           <p>
//             To become the most trusted and preferred car air conditioning service provider in the country,
//             known for innovation, integrity, and excellence in automotive climate control solutions.
//           </p>
//         </div>

//         <div className="box">
//           <h3>MISSION STATEMENT</h3>
//           <p>
//             At Car A-C MASTERS, our mission is to deliver fast, reliable,
//             and expert car air conditioning services that keep our customers cool and comfortable on the road.
//             <br />
//             We are committed to quality workmanship, honest diagnostics, and excellent customer care
//             to ensure every vehicle we service runs at peak A/C performance.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;