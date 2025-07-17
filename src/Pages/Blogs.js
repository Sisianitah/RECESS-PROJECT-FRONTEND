import React, { useState } from 'react';
import './Blogs.css';
import mechanicImg from '../Assets/1454 resize.jpg';

const faqs = [
  "How often should I get my oil changed?",
  "How long should one keep a VW car?",
  "What should I look out for when my VW engine overheats?",
  "How long can you drive a car without coolant?",
  "What happens when coolant leaks into engine oil?"
];

function Blog() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="blog-container">
      <div className="faq-section">
        <h2>Auto Maintenance FAQs</h2>
        <div className="faq-list">
          {faqs.map((question, index) => (
            <div
              key={index}
              className={`faq-item ${selected === index ? 'active' : ''}`}
              onClick={() => setSelected(index)}
            >
              {question}
            </div>
          ))}
        </div>
        <button className="appointment-btn">Book an appointment</button>
      </div>
      <div className="image-section">
        <img src={mechanicImg} alt="Technician working" />
      </div>
    </div>
  );
}

export default Blog;