import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-form">
        <h2>SIGN UP</h2>

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <p className="password-rule">
          Your password should contain at least 8 characters, one digit, one uppercase letter, and one lowercase letter.
        </p>

        <button className="btn-login">Login</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
