// Signup.jsx

import React from 'react';
import './Signup.css';

function Signup() {
  const handleSignup = (event) => {
    event.preventDefault(); 

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    
  }

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <input type="text" name="username" placeholder="Username" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;