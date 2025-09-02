import React from "react";
import "./Teamsection.css"; // make sure the file name matches exactly
import imgEllipse1 from "../Assets/AMBASSADOR.jpg";
import imgEllipse2 from "../Assets/1454 resize.jpg";
import imgEllipse3 from "../Assets/WhatsApp Image 2025-08-05 at 15.56.04_35c94cd1.jpg";

const teamMembers = [
  {
    name: "Sisi Anitah",
    image: imgEllipse1,
    role: "DEVELOPER",
  },
  {
    name: "Naluwemba Latifah",
    image: imgEllipse2,
    role: "DEVELOPER",
  },
  {
    name: "Eng. Pido Michael",
    image: imgEllipse3,
    role: "CEO",
  },
];

export default function Teamsection() {
  return (
    <section className="team-section">
      <div className="team-header">
        <span className="divider"></span>
      </div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}