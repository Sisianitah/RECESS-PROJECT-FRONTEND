// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link, Routes, Route } from 'react-router-dom';
// import logo from '../../Assets/RBG CAR LOGO.png';

// // Admin pages
// import DashboardHome from './DashboardHome';
// import Customers from './Customers';
// import Bookings from './Bookings';
// import Service from './Service';
// import Payments from './Payments';
// import Testimonials from './Testimonials';
// import ContactMessages from './ContactMessages';


// function AdminLayout() {
//   return (
//     <div style={{ display: 'flex', minHeight: '100vh' }}>
//       {/* Sidebar */}
//       <div
//         style={{
//           backgroundColor: '#FF9751',
//           color: 'white',
//           height: '100vh',
//           padding: '1rem',
//           width: '250px',
//           position: 'fixed'
//         }}
//       >
//         <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
//           <img
//             src={logo}
//             alt="Car A-C Masters Logo"
//             style={{ width: '120px', borderRadius: '8px' }}
//           />
//         </div>

//         <h4 className="mb-4 text-center">Car AC Masters Dashboard</h4>

//         <Nav className="flex-column">
//           <Nav.Link as={Link} to="/admin/dashboard" className="text-white">Dashboard</Nav.Link>
//           <Nav.Link as={Link} to="/admin/customers" className="text-white">Manage Customers</Nav.Link>
//           <Nav.Link as={Link} to="/admin/bookings" className="text-white">Manage Bookings</Nav.Link>
//           <Nav.Link as={Link} to="/admin/service" className="text-white">Manage Service</Nav.Link>
//           <Nav.Link as={Link} to="/admin/payments" className="text-white">Manage Payments</Nav.Link>
//           <Nav.Link as={Link} to="/admin/testimonials" className="text-white">Manage Testimonials</Nav.Link>
//           <Nav.Link as={Link} to="/admin/contact-messages" className="text-white">Contact Messages</Nav.Link>
//           <Nav.Link as={Link} to="/admin/logout" className="text-white">Logout</Nav.Link>

//         </Nav>
//       </div>

//       {/* Main Content */}
//       <div style={{ marginLeft: '250px', flex: 1, padding: '30px', backgroundColor: '#FFF3E5' }}>
//         <Routes>
//           <Route path="dashboard" element={<DashboardHome />} />
//           <Route path="customers" element={<Customers />} />
//           <Route path="bookings" element={<Bookings />} />
//           <Route path="service" element={<Service />} />
//           <Route path="payments" element={<Payments />} />
//           <Route path="testimonials" element={<Testimonials />} />
//           <Route path="contact-messages" element={<ContactMessages />} />
          
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;



import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink, Routes, Route } from 'react-router-dom';
import logo from '../../Assets/RBG CAR LOGO.png';

// Admin pages
import DashboardHome from './DashboardHome';
import Customers from './Customers';
import Bookings from './Bookings';
import Service from './Service';
import Payments from './Payments';
import Testimonials from './Testimonials';
import ContactMessages from './ContactMessages';

function AdminLayout() {
  // Return styles for active/inactive links
  const getLinkStyle = ({ isActive }) => ({
    display: 'flex',           // flex for indicator + text
    alignItems: 'center',
    padding: '8px 12px',
    marginBottom: '8px',
    borderRadius: '5px',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: isActive ? '#FFA366' : 'transparent',
    transition: 'background-color 0.3s ease',
    position: 'relative',
  });

  const getHoverStyle = (e) => {
    if (!e.target.style.backgroundColor || e.target.style.backgroundColor === 'transparent') {
      e.target.style.backgroundColor = '#FFAC7F';
    }
  };

  const removeHoverStyle = (e) => {
    if (e.target.style.backgroundColor === 'rgb(255, 172, 127)') {
      e.target.style.backgroundColor = 'transparent';
    }
  };

  const links = [
    { to: '/admin/dashboard', label: 'Dashboard' },
    { to: '/admin/customers', label: 'Manage Customers' },
    { to: '/admin/bookings', label: 'Manage Bookings' },
    { to: '/admin/service', label: 'Manage Service' },
    { to: '/admin/payments', label: 'Manage Payments' },
    { to: '/admin/testimonials', label: 'Manage Testimonials' },
    { to: '/admin/contact-messages', label: 'Contact Messages' },
    { to: '/admin/logout', label: 'Logout' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          backgroundColor: '#FF9751',
          color: 'white',
          height: '100vh',
          padding: '1rem',
          width: '250px',
          position: 'fixed'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img
            src={logo}
            alt="Car A-C Masters Logo"
            style={{ width: '120px', borderRadius: '8px' }}
          />
        </div>

        <h4 className="mb-4 text-center">Car AC Masters Dashboard</h4>

        <Nav className="flex-column">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              style={getLinkStyle}
              onMouseEnter={getHoverStyle}
              onMouseLeave={removeHoverStyle}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        height: '100%',
                        width: '5px',
                        backgroundColor: '#FF6600', // indicator color
                        borderRadius: '2px 0 0 2px'
                      }}
                    />
                  )}
                  <span style={{ marginLeft: isActive ? '10px' : '5px' }}>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </Nav>
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: '250px',
          flex: 1,
          padding: '30px',
          backgroundColor: '#FFF3E5'
        }}
      >
        <Routes>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="customers" element={<Customers />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="service" element={<Service />} />
          <Route path="payments" element={<Payments />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact-messages" element={<ContactMessages />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminLayout;
