import React from 'react';
import './Herosection.css';
import heroImg from '../Assets/IMG_20250128_145646_545.jpg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="overlay">
        <h1>WELCOME TO CAR A-C MASTERS</h1>
        <p>
          Your trusted experts in car air conditioning service and repair. <br />
          We specialize in keeping you cool and comfortable on the road.
        </p>

        <div className="hero-buttons">
          <Link to="/about-us">
            <button className="learn-btn">LEARN MORE</button>
          </Link>
          <Link to="/contact">
            <button className="book-btn">Book an appointment</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;










































// import React from 'react';
// import './Herosection.css';
// import heroImg from '../Assets/IMG_20250128_145646_545.jpg'; // replace with actual image path

// function HeroSection() {
//   return (
//     <header
//       className="hero"
//       style={{ backgroundImage: `url(${heroImg})` }}
//     >
//       <div className="overlay">
//         <h1>CAR A-C MASTERS</h1>
//         <p>
//           Your trusted experts in car air conditioning service and repair. <br />
//           We specialize in keeping you cool and comfortable on the road.
//         </p>
//         <div className="hero-buttons">
//           <button className="learn-btn">LEARN MORE</button>
//           <button className="book-btn">Book an appointment</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default HeroSection;