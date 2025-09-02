// import React, { useState } from 'react';
// import './Services.css';

// const services = [
//   {
//     title: "A/C Diagnosis and Inspection",
//     icon: "🌀",
//     description: "Comprehensive system check using specialized tools.\n\nDetects issues such as refrigerant leaks, faulty compressors, blocked filters, or electrical faults.",
//   },
//   {
//     title: "Refrigerant Recharge (Re-gas)",
//     icon: "🧯",
//     description: "Removal of old or contaminated refrigerant.\n\nRefill with the correct amount and type of refrigerant (R134a or R1234yf). Ensures optimal cooling performance.",
//   },
//   {
//     title: "Leak Detection and Repair",
//     icon: "🔧",
//     description: "Uses UV dye or electronic leak detectors to find refrigerant leaks.\n\nRepairs damaged hoses, O-rings, seals, or condensers to restore efficiency.",
//   },
//   {
//     title: "Compressor Replacement and Repair",
//     icon: "⚙️",
//     description: "Diagnosing and replacing worn or failed A/C compressors.\n\nIncludes system flushing and new oil addition.",
//   },
//   {
//     title: "Blower Motor & Cabin Air Filter Replacement",
//     icon: "🛠️",
//     description: "Fixes weak airflow issues.\n\nReplaces dirty or blocked filters to improve air quality.",
//   },
//   {
//     title: "Emergency A/C Repair Services",
//     icon: "🚨",
//     description: "Quick, on-the-spot diagnostics and repairs.\n\nIdeal for breakdowns or road service needs.",
//   },
//   {
//     title: "Condenser & Evaporator Services",
//     icon: "🚨",
//     description: "Cleaning or replacing clogged or damaged condensers and evaporators.\n\nImproves air flow and cooling efficiency.",
//   },
//   {
//     title: "Seasonal A/C Maintenance Packages",
//     icon: "🚨",
//     description: "Preventive checks before hot seasons.\n\nIncludes system inspection, refrigerant top-up, and filter replacement.",
//   },
//   {
//     title: "Climate Control Electrical System Repair",
//     icon: "🚨",
//     description: "Troubleshooting and fixing issues with climate control buttons,\n\nsensors, and modules.",
//   },
//   {
//     title: "A/C System Retrofit and Upgrade",
//     icon: "🚨",
//     description: "Upgrades older A/C systems to newer refrigerant standards.\n\nCustom installation of modern A/C units in classic or imported vehicles.",
//   },
// ];

// const Services = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     message: ''
//   });

//   const handleSend = (e) => {
//     e.preventDefault();
//     const { name, message } = formData;
//     const phoneNumber = '256744030401';
//     const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
//     setShowPopup(false);
//   };

//   return (
//     <section className="services-section">
//       <h2>OUR SERVICES</h2>
//       <br />
//       <p>From routine maintenance to emergency repairs, we have you covered. Explore our services below:</p>
//       <br />
//       <hr />
//       <br />

//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div className="service-card" key={index}>
//             <div className="icon">{service.icon}</div>
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>

//       <button className="signup-btn" onClick={() => setShowPopup(true)}>
//         Contact Us
//       </button>

//       {/* Popup Contact Form */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-form">
//             <h3>Contact Us via WhatsApp</h3>
//             <form onSubmit={handleSend}>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 required
//               />
//               <textarea
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 required
//               ></textarea>
//               <div className="form-buttons">
//                 <button type="submit">Send</button>
//                 <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Services;


import React, { useState, useEffect } from 'react';
import './Services.css';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  // Fetch services from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/services') // Flask endpoint
      .then(res => {
        setServices(res.data);
      })
      .catch(err => {
        console.error('Error fetching services:', err);
      });
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const { name, message } = formData;
    const phoneNumber = '256744030401';
    const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setShowPopup(false);
  };

  return (
    <section className="services-section">
      <h2>OUR SERVICES</h2>
      <br />
      <p>From routine maintenance to emergency repairs, we have you covered. Explore our services below:</p>
      <br />
      <hr />
      <br />

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {/* If you store emoji/icon in DB, display it; otherwise fallback */}
            <div className="icon">{service.icon || '🛠️'}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <button className="signup-btn" onClick={() => setShowPopup(true)}>
        Contact Us
      </button>

      {/* Popup Contact Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h3>Contact Us via WhatsApp</h3>
            <form onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <div className="form-buttons">
                <button type="submit">Send</button>
                <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
