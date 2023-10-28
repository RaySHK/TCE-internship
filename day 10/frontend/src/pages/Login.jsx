// Login.jsx

import React from 'react';
import './Login.css';

function Login() {
  const handleLogin = (event) => {
    event.preventDefault(); 

    const username = event.target.username.value;
    const password = event.target.password.value;

  
    console.log(`Logging in with username: ${username} and password: ${password}`);
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;