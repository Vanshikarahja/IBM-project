import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-btn">Sign In</button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="google-btn">Continue with Google</button>
        <button className="gmail-btn">Continue with LinkedIn</button>
      </div>
    </div>
  );
};

export default Signup;

