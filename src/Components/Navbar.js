import React from 'react';
import './Navbar.css';
import logo from '../Assets/RBG CAR LOGO.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt='' className='logo' />
      <ul className="nav-links">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SERVICE</li>
        <li>GALLERY</li>
        <li>CONTACT</li>
        <li>FINANCE</li>
        <li>BLOGS</li>
      </ul>
      <button className="book-btn">Book an appointment</button>
    </nav>
  );
}

export default Navbar;