import React, { useState } from 'react';
import '../css/Login.css'; // Import CSS styles for the login form

function Login() {
  // State variables to store username and password input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for updating the username state
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Event handler for updating the password state
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler for handling form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add logic here to handle form submission (e.g., sending login credentials to server)
    console.log('Submitting login credentials...');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;