// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../Assets/RBG CAR LOGO.png';

// function Navbar() {
//   const [isMobile, setIsMobile] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" className="logo" />
//         <h6 className="logo-text">Breathe Easy, Drive Cool</h6>
//       </div>

//       <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/about">ABOUT US</Link></li>
//         <li><Link to="/services">SERVICE</Link></li>
//         <li><Link to="/blogs">BLOGS</Link></li>
//         <li><Link to="/contact">CONTACT</Link></li>
//         <li><Link to="/testimonials">TESTIMONIALS</Link></li>
//       </ul>

//       <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
//         {isMobile ? <FaTimes /> : <FaBars />}
//       </button>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import { FaBars, FaTimes, FaUserShield } from 'react-icons/fa';
// import { Modal, Button, Form } from 'react-bootstrap';
// import logo from '../Assets/RBG CAR LOGO.png';
// import axios from 'axios';
// // import api from './admin/api' ;

// function Navbar() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post('/api/auth/login', { email, password });
//       const { access_token, user } = res.data;

//       if (user.role === 'admin') {
//         localStorage.setItem('admin_token', access_token);
//         navigate('/admin');
//         setShowLogin(false);
//       } else {
//         setLoginError('Access denied. Only admins allowed.');
//       }
//     } catch (err) {
//       setLoginError('Invalid credentials');
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Logo" className="logo" />
//         <h6 className="logo-text">Breathe Easy, Drive Cool</h6>
//       </div>

//       <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/about">ABOUT US</Link></li>
//         <li><Link to="/services">SERVICE</Link></li>
//         <li><Link to="/blogs">BLOGS</Link></li>
//         <li><Link to="/contact">CONTACT</Link></li>
//         <li><Link to="/testimonials">TESTIMONIALS</Link></li>
//         {/* Admin Icon */}
//         <li style={{ cursor: 'pointer' }} onClick={() => setShowLogin(true)}>
//           <FaUserShield title="Admin Login" size={20} />
//         </li>
//       </ul>

//       <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
//         {isMobile ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Admin Login Modal */}
//       <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Admin Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter admin email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             {loginError && <p className="text-danger">{loginError}</p>}

//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaUserShield } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';
import logo from '../Assets/RBG CAR LOGO.png';
import axios from 'axios';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  // Create axios instance with Flask backend baseURL
  const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
    headers: { 'Content-Type': 'application/json' },
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/auth/login', { email, password });
      const { access_token, user } = res.data;

      if (user.role === 'admin') {
        localStorage.setItem('admin_token', access_token);
        setShowLogin(false);
        navigate('/admin');
      } else {
        setLoginError('Access denied. Only admins allowed.');
      }
    } catch (err) {
      setLoginError(err.response?.data?.error || 'Invalid credentials');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h6 className="logo-text">Breathe Easy, Drive Cool</h6>
      </div>

      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/services">SERVICE</Link></li>
        <li><Link to="/blogs">BLOGS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/testimonials">TESTIMONIALS</Link></li>
        {/* Admin Icon */}
        <li style={{ cursor: 'pointer' }} onClick={() => setShowLogin(true)}>
          <FaUserShield title="Admin Login" size={20} />
        </li>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>

      {/* Admin Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {loginError && <p className="text-danger">{loginError}</p>}

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </nav>
  );
}

export default Navbar;
