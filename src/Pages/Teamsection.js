import React from "react";
import "./Teamsection.css"; 
import imgEllipse1 from "../Assets/WhatsApp Image 2025-08-05 at 15.56.04_35c94cd1.jpg";
import imgEllipse2 from "../Assets/1454 resize.jpg";
import imgEllipse3 from "../Assets/WhatsApp Image 2025-08-14 at 12.54.23_9a7ad045.jpg";

const Teamsection = () => {
  const teamMembers = [
    {
      image: imgEllipse1,
      name: "SISI ANITAH",
      role: "DEVELOPER",
    },
    {
      image: imgEllipse2,
      name: "ENG. PIDO MICHAEL", 
      role: "CEO",
    },
    {
      image: imgEllipse3,
      name: "NALUWEMBA LATIFAH",
      role: "DEVELOPER",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
          OUR TEAM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#fb4214] mb-2">
                {member.name}
              </h3>
              <p className="text-lg font-bold text-[#fb4214]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teamsection;
