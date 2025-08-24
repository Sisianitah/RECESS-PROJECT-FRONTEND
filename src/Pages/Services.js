import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './Services.css';

const services = [
  {
    title: 'A/C Repair',
    icon: 'bi-gear-fill',
    description: 'Professional air conditioning diagnostics and repairs.',
  },
  {
    title: 'Gas Refill',
    icon: 'bi-droplet-fill',
    description: 'Refilling and testing for optimal cooling performance.',
  },
  {
    title: 'Compressor Replacement',
    icon: 'bi-tools',
    description: 'Quick and reliable compressor installation services.',
  },
  {
    title: 'Leak Detection',
    icon: 'bi-search',
    description: 'Accurate detection and fixing of A/C system leaks.',
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedService('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send booking data here (axios or fetch)
    alert(`Booking submitted for ${selectedService}`);
    handleClose();
  };

  return (
    <section className="services-us">
      {/* Header Section */}
      <div className="services-hero">
        <h1>SERVICES</h1>
      </div>

    <div className="py-5 bg-light">
      <Container>
        <header className="text-center mb-5">
          <h1 className="fw-bold">Our Services</h1>
          <h4 className="text-muted">Why Choose Us</h4>
        </header>

        <Row>
          {services.map((service, idx) => (
            <Col md={6} lg={3} key={idx} className="mb-4">
              <Card className="service-card h-100 text-center p-3 shadow-sm">
                <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="outline-primary" onClick={() => handleBookClick(service.title)}>
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button variant="warning" className="px-4 py-2 rounded-pill text-white fw-bold">
            Sign Up
          </Button>
        </div>
      </Container>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedService}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" placeholder="Phone or email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    </section>
  );
};

export default Services;





















// import React from 'react';
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
//   return (
//     <section className="services-section">
//       <h2>OUR SERVICES</h2>
//       <h2>WHY CHOOSE US</h2>
//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div className="service-card" key={index}>
//             <div className="icon">{service.icon}</div>
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//       <button className="signup-btn">SIGN UP</button>
//     </section>
//   );
// };

// export default Services;