import React from 'react';
import './Signup.css';

function Signup() {
  const handleSignup = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // You can add your signup logic here
    //console.log(Signing up with username: ${username}, email: ${email}, and password: ${password});
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