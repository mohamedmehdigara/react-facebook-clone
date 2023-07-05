import React from 'react';
import './Login.css';

function Login() {
  const handleLogin = () => {
    // Add login functionality here
    // You can use an authentication library or implement your own logic
    console.log("Login button clicked");
  };

  return (
    <div className="login">
      <div className="login__logo">
        {/* Facebook logo */}
      </div>
      <div className="login__container">
        <h1>Welcome to Facebook</h1>
        <button className="login__button" onClick={handleLogin}>
          Login with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;

