import React from 'react';
import './Services.css';

const services = [
  {
    title: "A/C Diagnosis and Inspection",
    icon: "🌀",
    description: "Comprehensive system check using specialized tools.\n\nDetects issues such as refrigerant leaks, faulty compressors, blocked filters, or electrical faults.",
  },
  {
    title: "Refrigerant Recharge (Re-gas)",
    icon: "🧯",
    description: "Removal of old or contaminated refrigerant.\n\nRefill with the correct amount and type of refrigerant (R134a or R1234yf). Ensures optimal cooling performance.",
  },
  {
    title: "Leak Detection and Repair",
    icon: "🔧",
    description: "Uses UV dye or electronic leak detectors to find refrigerant leaks.\n\nRepairs damaged hoses, O-rings, seals, or condensers to restore efficiency.",
  },
  {
    title: "Compressor Replacement and Repair",
    icon: "⚙️",
    description: "Diagnosing and replacing worn or failed A/C compressors.\n\nIncludes system flushing and new oil addition.",
  },
  {
    title: "Blower Motor & Cabin Air Filter Replacement",
    icon: "🛠️",
    description: "Fixes weak airflow issues.\n\nReplaces dirty or blocked filters to improve air quality.",
  },
  {
    title: "Emergency A/C Repair Services",
    icon: "🚨",
    description: "Quick, on-the-spot diagnostics and repairs.\n\nIdeal for breakdowns or road service needs.",
  },
  {
    title: "Condenser & Evaporator Services",
    icon: "🚨",
    description: "Cleaning or replacing clogged or damaged condensers and evaporators.\n\nImproves air flow and cooling efficiency.",
  },
  {
    title: "Seasonal A/C Maintenance Packages",
    icon: "🚨",
    description: "Preventive checks before hot seasons.\n\nIncludes system inspection, refrigerant top-up, and filter replacement.",
  },
  {
    title: "Climate Control Electrical System Repair",
    icon: "🚨",
    description: "Troubleshooting and fixing issues with climate control buttons,\n\nsensors, and modules.",
  },
  {
    title: "A/C System Retrofit and Upgrade",
    icon: "🚨",
    description: "Upgrades older A/C systems to newer refrigerant standards.\n\nCustom installation of modern A/C units in classic or imported vehicles.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>OUR SERVICES</h2>
      <h2>WHY CHOOSE US</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <button className="signup-btn">SIGN UP</button>
    </section>
  );
};

export default Services;