import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "IJJO EMMANUEL",
    rating: 5,
    source: "Review from Google",
    comment:
      "Very good, professional and honest service from the team. The mechanics are very knowledgeable and their work is very good. Your car even gets a free wash!",
  },
  {
    name: "REENIN BAHATI",
    rating: 5,
    source: "Review from Google",
    comment:
      "Had my car serviced in less time than I expected and it hadn't given me any issues. Great service.",
  },
  {
    name: "RYAN NTAMBI",
    rating: 5,
    source: "Review from Google",
    comment:
      "Great, efficient and friendly service at an affordable price!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>TESTIMONIALS</h2> 
      <h2>SOME OF OUR SATISFIED CUSTOMERS</h2>
      <div className="testimonials-container">
        {testimonials.map((review, index) => (
          <div key={index} className="testimonial-card">
            <h3>{review.name}</h3>
            <div className="stars">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <p className="source">{review.source}</p>
            <p className="comment">{review.comment}</p>
          </div>
        ))}
      </div>
      <button className="feedback-button">Give Branch Feedback</button>
    </section>
  );
};

export default Testimonials;