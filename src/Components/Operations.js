import React from 'react';
import './Operations.css';

function Operations() {
  return (
    <section className="how-it-works">
      <div className="how-bg-overlay">
        <h2>How It Works</h2>
        <p>We Offer Full Service Auto Repair & Maintenance</p>

        <div className="steps-container">
          <div className="step-card">
            <h3>01</h3>
            <h4>Choose</h4>
            <p>Choose Your Service From Our Wide Range Of Offerings</p>
          </div>
          <div className="step-card">
            <h3>02</h3>
            <h4>Book</h4>
            <p>Make An Appointment With Us</p>
          </div>
          <div className="step-card">
            <h3>03</h3>
            <h4>Pricing</h4>
            <p>Always Get a Fair Quote</p>
          </div>
          <div className="step-card">
            <h3>04</h3>
            <h4>Door Step</h4>
            <p>Get a Door Step Pick up & Drop Facility</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Operations;