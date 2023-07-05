import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useHistory hook
import './Login.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create a history object

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login functionality here
    // You can use an authentication library or implement your own logic

    // Simulate a successful login
    if (email && password) {
      // Redirect the user to the desired page
      navigate.push('/dashboard');
    }
  };

  return (
    <div className="login">
      <div className="login__logo">
        {/* Facebook logo */}
      </div>
      <div className="login__container">
        <h1>Welcome to Facebook</h1>
        <form className="login__form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__button" type="submit">
            Login to Facebook
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;