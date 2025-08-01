import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/RBG CAR LOGO.png'


function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt='' className='logo' />
      <h6 className="logo-text">Breathe Easy, Drive Cool</h6>
      <ul className="nav-links">
        {/* <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/services">SERVICE</Link></li>
        <li><Link to="/blogs">BLOGS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/testimonials">TESTIMONIALS</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;