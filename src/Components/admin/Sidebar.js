import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/RBG CAR LOGO.png'// ✅ Add this line

const Sidebar = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#FF9751',
          color: 'white',
          height: '100vh',
          padding: '1rem',
          width: '250px',
        }}
      >
        {/* ✅ Logo at the top */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src={logo}
            alt="Car A-C Masters Logo"
            style={{ width: '120px', borderRadius: '8px' }}
          />
        </div>

        <h4 className="mb-4 text-center">Car Ac Masters Dashboard</h4>

        <Nav className="flex-column">
          <Nav.Link as={Link} to="/dashboard" className="text-white">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/customers" className="text-white">
            Manage Customers
          </Nav.Link>
          <Nav.Link as={Link} to="/bookings" className="text-white">
            Manage Bookings
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="text-white">
            Manage Services
          </Nav.Link>
          <Nav.Link as={Link} to="/payments" className="text-white">
            Manage Payments
          </Nav.Link>
          <Nav.Link as={Link} to="/testimonials" className="text-white">
            Manage Testimonials
          </Nav.Link>
          <Nav.Link as={Link} to="/contact-messages" className="text-white">
            Contact Messages
          </Nav.Link>
          <Nav.Link as={Link} to="/profile" className="text-white">
            My Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/logout" className="text-white">
            Logout
          </Nav.Link>

        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
